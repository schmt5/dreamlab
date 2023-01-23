import { Container, Tabs, Title } from "@mantine/core";

export default function StudentsTabPanel() {
    return (
        <Tabs.Panel value="students">
            <Container size={'xl'} mt={'lg'}>
                <Title order={1} mb={'lg'}>Mathematik</Title>
                content
            </Container>
        </Tabs.Panel>
    );
}
