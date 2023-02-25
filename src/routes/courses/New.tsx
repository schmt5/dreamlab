import { Button, Container, Flex, Textarea, TextInput, Title } from "@mantine/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "urql";
import { CourseCreateMutation } from "../../urql/mutations/courseCreateMutation";
import { PageCreateMutation } from "../../urql/mutations/pageCreateMutation";

type FormValues = {
    name: string;
    description: string;
}

export default function New() {
    const navigate = useNavigate();
    const [{ fetching: fetchingCourse }, createCourse] = useMutation(CourseCreateMutation);
    const [{ fetching: fetchingPage }, createPage] = useMutation(PageCreateMutation);
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            name: '',
            description: '',
        },
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const courseData = { data: { ...data } }
        const newCourse = await createCourse(courseData);

        const pageData = { data: { coursesId: newCourse.data?.courseCreate.id, name: 'Seite 1', position: 0 } }
        const newPage = await createPage(pageData);

        if (!newCourse.data || !newPage.data) return;

        navigate(`/courses/${newCourse.data.courseCreate.id}/pages/${newPage.data.pageCreate.id}`);
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
                <Flex justify={'flex-end'} align={'center'} gap={'md'} mt={'lg'}>
                    <Button
                        variant="subtle"
                        component={Link}
                        to={'..'}
                        disabled={fetchingCourse || fetchingPage}
                    >
                        Abbrechen
                    </Button>
                    <Button
                        type="submit"
                        variant="filled"
                        loading={fetchingCourse || fetchingPage}
                    >
                        Erstellen
                    </Button>
                </Flex>
            </form>
        </Container>
    );
}
