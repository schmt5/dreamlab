import { Suspense } from 'react';
import { Container, Loader } from '@mantine/core';
import { CourseList } from '../../components/student/CourseList';

export default function HomePage() {

    return (
        <Container size={'xl'}>
            <Suspense fallback={<Loader />}>
                <CourseList />
            </Suspense>
        </Container>
    );
}
