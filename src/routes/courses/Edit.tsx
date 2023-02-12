import { Button, Container, Flex, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUpdateCourseMutation } from "../../components/hooks/mutations/use-update-course-mutation";


type FormValues = {
    name: string;
    description: string;
}

export default function Edit() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { mutate: updateCourse, isLoading } = useUpdateCourseMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            name: state.name ?? '',
            description: state.description ?? '',
        },
    });

    const onSubmit = (data: FormValues) => {
        updateCourse({
            id: state.id,
            name: data.name,
            description: data.description,
        }, {
            onSuccess: () => {
                navigate(`/courses/${state.id}`, {
                    replace: true,
                });
            }
        });
    }

    return (
        <Container size={'xl'}>
            <Container size={'sm'} mt={'xl'} ml={0} p={0}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Title order={2} mb={'xl'}>Kurs editieren</Title>
                    <TextInput
                        {...register('name', { required: 'Bitte Kursname eingeben' })}
                        withAsterisk
                        label="Kurstitel"
                        placeholder="Mathematik"
                    />
                    <Textarea
                        {...register('description')}
                        label="Beschreibung"
                        placeholder="Beschreibe deinen Kurs"
                        mt={'lg'}
                    />
                    <Flex justify={'flex-end'} align={'center'} gap={'md'} mt={'lg'}>
                        <Button
                            variant="subtle"
                            component={Link}
                            to={'..'}
                            disabled={isLoading}
                        >
                            Abbrechen
                        </Button>
                        <Button
                            variant="filled"
                            type="submit"
                            loading={isLoading}
                        >
                            Speichern
                        </Button>
                    </Flex>
                </form>
            </Container>
        </Container>
    );
}
