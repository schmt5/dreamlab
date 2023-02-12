import { Suspense } from 'react';
import { Box, Container, createStyles, Loader } from '@mantine/core';
import { CourseFilterForm } from '../components/CourseFilterForm';
import { CourseList } from '../components/CourseList';

const useStyles = createStyles((theme) => ({
    header: {
        paddingTop: theme.spacing.sm,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
            }`,
        marginBottom: 120,
    },

    mainSection: {
        paddingBottom: theme.spacing.sm,
    },

    user: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        borderRadius: theme.radius.sm,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        },

        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none',
        },
    },

    userActive: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },
}));


export default function HomePage() {
    const { theme } = useStyles();

    return (
        <>
            <Box style={{ height: 64, backgroundColor: theme.colors.gray[0] }}></Box>
            <Container>
                <CourseFilterForm />
            </Container>
            <Container size={'xl'}>
                <Suspense fallback={<Loader />}>
                    <CourseList />
                </Suspense>
            </Container>
        </>
    );
}
