import { Button, Container, Flex, Textarea, TextInput, Title } from "@mantine/core";

export default function EditCourse() {
    return (
        <Container size={'xl'}>
            <Container size={'sm'} mt={'xl'} ml={0} p={0}>
                <Title order={2} mb={'xl'}>Kurs editieren</Title>
                <TextInput
                    name="name"
                    withAsterisk
                    label="Kurstitel"
                    placeholder="Mathematik"
                />
                <Textarea
                    name="description"
                    label="Beschreibung"
                    placeholder="Beschreibe deinen Kurs"
                    mt={'lg'}
                />
                <Flex justify={'flex-end'} align={'center'} gap={'md'} mt={'lg'}>
                    <Button
                        variant="subtle"
                    >
                        Abbrechen
                    </Button>
                    <Button
                        variant="filled"
                    >
                        Speichern
                    </Button>
                </Flex>
            </Container>
        </Container>
    );
}
