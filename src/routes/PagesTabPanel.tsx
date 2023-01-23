import { Container, Tabs, Title } from "@mantine/core";
import { ContentWithSidebar } from "../ContentWithSidebar";
import { Block } from "../components/blocks/Block";

export default function PagesTabPanel() {
    return (
        <Tabs.Panel value="pages">
            <ContentWithSidebar>
                <Container size={'xl'} mt={'lg'}>
                    <Title order={1} mb={'lg'}>Mathematik</Title>

                    <Block />
                    <Block />
                    <Block />
                </Container>
            </ContentWithSidebar>
        </Tabs.Panel>
    );
}
