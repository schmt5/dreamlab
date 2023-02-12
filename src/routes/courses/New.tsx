import { Button, Container, Textarea, TextInput, Title } from "@mantine/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateCourseMutation } from "../../components/hooks/mutations/use-create-course-mutation";

type FormValues = {
    name: string;
    description: string;
}

export default function New() {
    const navigate = useNavigate();
    const { mutate: createCourse, isLoading } = useCreateCourseMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            name: '',
            description: '',
        },
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        createCourse(data, {
            onSuccess: (data: any) => {
                navigate(`/courses/${data[0]?.id}`, {
                    replace: true,
                });
            }
        });
    }



    return (
        <Container size={'sm'} mt={'xl'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Title order={1} mb={'xl'}>Neuer Kurs</Title>
                <TextInput
                    {...register('name', { required: 'Bitte Kursname eingeben' })}
                    label="Kurstitel"
                    placeholder="Mathematik"
                    error={errors.name?.message}
                    withAsterisk
                />
                <Textarea
                    {...register('description')}
                    label="Beschreibung"
                    placeholder="Beschreibe deinen Kurs"
                    mt={'lg'}
                />
                <Button
                    type="submit"
                    variant="filled"
                    loading={isLoading}
                    mt={'lg'}
                    display={'block'}
                    ml={'auto'}
                >
                    Erstellen
                </Button>
            </form>
        </Container>
    );
}
