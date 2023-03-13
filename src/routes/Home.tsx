import { Suspense } from 'react';
import { Box, Container, Loader } from '@mantine/core';
import { CourseFilterForm } from '../components/CourseFilterForm';
import { CourseList } from '../components/CourseList';

export default function HomePage() {

    return (
        <>
            <Box sx={theme => ({ height: 64, backgroundColor: theme.colors.gray[0] })}></Box>
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
