import { Container, Title } from "@mantine/core";
import { ContentWithSidebar } from "../../ContentWithSidebar";
import { Block } from "../../components/blocks/Block";
import { CourseTabs } from "./CourseTabs";

export default function Pages() {
    return (
        <>
            
            <ContentWithSidebar>
                <Container size={'xl'} mt={'lg'}>
                    <Title order={1} mb={'lg'}>Mathematik</Title>

                    <Block />
                    <Block />
                    <Block />
                </Container>
            </ContentWithSidebar>
        </>
    );
}
