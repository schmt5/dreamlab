import { Badge, Button, Card, createStyles, Flex, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    card: {
        '&:hover': {
            boxShadow: theme.shadows.sm,
        },
    }
}));

interface CourseTeaserProps {
    id: string;
    name: string;
}

export const CourseTeaser = ({ id, name }: CourseTeaserProps) => {
    const { classes } = useStyles();

    return (
        <Card className={classes.card} withBorder radius={'md'}>
            <Group position="right">
                <Badge>aktiv</Badge>
            </Group>
            <Text color={'dimmed'} size={'xs'} weight={700} tt={'uppercase'}>Kurs</Text>
            <Text weight={600}>
                {name}
            </Text>
            <Text color={'dimmed'} size={'sm'}>Module 000</Text>
            <Flex justify={'flex-end'}>
                <Button
                    component={Link}
                    to={`courses/${id}`}
                    variant="subtle"
                    mt={'md'}
                >
                    Anzeigen
                </Button>
            </Flex>
        </Card>
    );
}
