import { Box, Button, Grid, Text, Title } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "urql";
import { CourseByIdQuery } from "../urql/queries/courseByIdQuery";

export const CourseInfo = () => {
    const { courseId } = useParams();
    const [{ data }] = useQuery({ query: CourseByIdQuery, variables: { id: courseId } })

    return (
        <>
            <Title order={1} mb={'lg'}>
                {data?.course.name}
            </Title>
            <Box maw={720}>
                <Title order={2}>Kursinfos</Title>
                <Grid mt={'sm'} mb={'lg'}>
                    <Grid.Col span={3}>
                        <Text weight={700} color="dimmed">Kurstitel</Text>
                    </Grid.Col>
                    <Grid.Col span={9}>
                        <Text>
                            {data?.course.name}
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <Text weight={700} color="dimmed">Kursbeschreibung</Text>
                    </Grid.Col>
                    <Grid.Col span={9}>
                        <Text>
                            {data?.course.description}
                        </Text>
                    </Grid.Col>
                </Grid>
                <Button
                    variant="filled"
                    component={Link}
                    to={`/courses/${courseId}/edit`}
                    state={{ id: data?.course.id, name: data?.course.name, description: data?.course.description }}
                >
                    Editieren
                </Button>
            </Box>
        </>
    );
}
