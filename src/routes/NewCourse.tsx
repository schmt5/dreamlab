import { Button, Container, Textarea, TextInput, Title } from "@mantine/core";

export default function NewCourse() {
    return (
        <Container size={'sm'} mt={'xl'}>
            <Title order={1} mb={'xl'}>Neuer Kurs</Title>
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
            <Button
                variant="filled"
                mt={'lg'}
                display={'block'}
                ml={'auto'}
            >
                Erstellen
            </Button>
        </Container>
    );
}
