import { Button, Flex, Switch, Title } from "@mantine/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "urql";
import { BlockUpdateMutationDocument } from "../../../gql/graphql";

type FormValues = {
    canStudentEdit: boolean;
}

interface Props {
    id: string;
    canStudentEdit: boolean;
    onClose: () => void;
}

export const UpdateForm = ({ id, canStudentEdit, onClose }: Props) => {
    const [{ fetching }, updateBlock] = useMutation(BlockUpdateMutationDocument);
    const { register, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            canStudentEdit: canStudentEdit,
        },
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const blockData = { data: { id, canStudentEdit: data.canStudentEdit } };
        const res = await updateBlock(blockData);
        if (!res.data) return;

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
                    Speichern
                </Button>
            </Flex>
        </form>
    );
}
