import { Suspense } from "react";
import { Container, Loader } from "@mantine/core";
import { CourseInfo } from "../../components/CourseInfo";

export default function Infos() {
    return (
        <Container size={'xl'} mt={'lg'}>
            <Suspense fallback={<Loader />}>
                <CourseInfo />
            </Suspense>
        </Container>
    );
}
