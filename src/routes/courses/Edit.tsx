import { Button, Container, Flex, Textarea, TextInput, Title } from "@mantine/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "urql";
import { CourseUpdateMutation } from "../../urql/mutations/courseUpdateMutation";

type FormValues = {
    name: string;
    description: string;
}

export default function Edit() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [{ fetching }, updateCourse] = useMutation(CourseUpdateMutation);
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            name: state.name ?? '',
            description: state.description ?? '',
        },
    });

    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
        const inputData = { data: { id: state.id, ...data } }
        const updatedCourse = await updateCourse(inputData);

        if (updatedCourse.data) {
            navigate(`/courses/${updatedCourse.data.courseUpdate.id}`);
        }
    }

    return (
        <Container size={'xl'}>
            <Container size={'sm'} mt={'xl'} ml={0} p={0}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Title order={2} mb={'xl'}>Kurs editieren</Title>
                    <TextInput
                        {...register('name', { required: 'Bitte Kursname eingeben' })}
                        error={errors.name?.message}
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
                            disabled={fetching}
                        >
                            Abbrechen
                        </Button>
                        <Button
                            variant="filled"
                            type="submit"
                            loading={fetching}
                        >
                            Speichern
                        </Button>
                    </Flex>
                </form>
            </Container>
        </Container>
    );
}
