import { Button, Flex, Switch, Title } from "@mantine/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "urql";
import { BlockCreateMutation } from "../urql/mutations/blockCreateMutation";
import { BlocksByPageIdQuery } from "../urql/queries/blocksByPageIdQuery";

type FormValues = {
    canStudentEdit: boolean;
}

interface CreateRichTextBlockProps {
    onClose: () => void;
}

export const CreateRichTextBlock = ({ onClose }: CreateRichTextBlockProps) => {
    const { pageId } = useParams();
    const [{ data: pageData }] = useQuery({ query: BlocksByPageIdQuery, variables: { pageId } })
    const [{ fetching }, createBlock] = useMutation(BlockCreateMutation)
    const { register, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            canStudentEdit: false,
        },
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const blockData = { data: { pagesId: pageId, position: pageData?.page.blocks.count, ...data } }
        const newBlock = await createBlock(blockData);
        if (!newBlock.data) return;

        onClose();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Title order={3} mb={'xl'}>RichText-Editor</Title>
            <Switch
                {...register('canStudentEdit')}
                label="Bearbeitbar für SuS"
                description="Die SuS können den Inhalt des RichText-Editors bearbeiten."
                labelPosition="left"
                size="md"
                styles={{
                    body: {
                        justifyContent: 'space-between',
                    },
                    track: {
                        cursor: 'pointer',
                    }
                }}
            />
            <Flex justify={'flex-end'} align={'center'} mt={'xl'}>
                <Button
                    type="submit"
                    variant="filled"
                    loading={fetching}
                >
                    Hinzufügen
                </Button>
            </Flex>
        </form>
    );
}
