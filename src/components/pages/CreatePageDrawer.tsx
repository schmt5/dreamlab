import { Button, Drawer, Flex, TextInput, Title } from "@mantine/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "urql";
import { PageCreateMutation } from "../../urql/mutations/pageCreateMutation";

type FormValues = {
    name: string;
}

interface CreatePageDrawerProps {
    open: boolean;
    onClose: () => void;
    pageCount: number;
}

export const CreatePageDrawer = ({ open, onClose, pageCount }: CreatePageDrawerProps) => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [{ fetching }, createPage] = useMutation(PageCreateMutation);
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            name: '',
        },
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const pageData = { data: { coursesId: courseId, position: pageCount, ...data } };
        const newPage = await createPage(pageData);

        if (!newPage.data) return;
        navigate(`/courses/${courseId}/pages/${newPage.data.pageCreate.id}`)
    }

    return (
        <Drawer
            opened={open}
            onClose={onClose}
            position="right"
            padding="xl"
            size={560}
        >
            <Title order={3} mb={'xl'}>Neue Seite</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    {...register('name', { required: 'Bitte Seitenname eingeben' })}
                    label="Seitenname"
                    placeholder="Einführung"
                    error={errors.name?.message}
                    withAsterisk
                />
                <Flex mt={'xl'} justify={'flex-end'} align={'center'}>
                    <Button
                        type="submit"
                        loading={fetching}
                    >
                        Erstellen
                    </Button>
                </Flex>
            </form>
        </Drawer>
    );
}
