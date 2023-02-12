import { Box, Button, Grid, Text, Title } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { useCourseById } from "./hooks/queries/use-course-by-id-query";

export const CourseInfo = () => {
    const { courseId } = useParams();
    const { data } = useCourseById(courseId!);

    return (
        <>
            <Title order={1} mb={'lg'}>
                {data?.name}
            </Title>
            <Box maw={720}>
                <Title order={2}>Kursinfos</Title>
                <Grid mt={'sm'} mb={'lg'}>
                    <Grid.Col span={3}>
                        <Text weight={700} color="dimmed">Kurstitel</Text>
                    </Grid.Col>
                    <Grid.Col span={9}>
                        <Text>
                            {data?.name}
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <Text weight={700} color="dimmed">Kursbeschreibung</Text>
                    </Grid.Col>
                    <Grid.Col span={9}>
                        <Text>
                            {data?.description}
                        </Text>
                    </Grid.Col>
                </Grid>
                <Button
                    variant="filled"
                    component={Link}
                    to={`/courses/${courseId}/edit`}
                    state={{ id: data?.id, name: data?.name, description: data?.description }}
                >
                    Editieren
                </Button>
            </Box>
        </>
    );
}
