import { Container, Tabs, Title } from "@mantine/core";
import { ContentWithSidebar } from "../ContentWithSidebar";

export default function PagesTabPanel() {
    return (
        <Tabs.Panel value="pages">
            <ContentWithSidebar>
                <Container size={'xl'} mt={'lg'}>
                    <Title order={1} mb={'lg'}>Mathematik</Title>
                    content
                </Container>
            </ContentWithSidebar>
        </Tabs.Panel>
    );
}
