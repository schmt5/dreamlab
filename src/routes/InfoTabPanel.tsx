import { Button, Card, Container, Divider, Flex, Grid, Tabs, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

export default function InfoTabPanel() {
    return (
        <Tabs.Panel value="info">
            <Container size={'xl'} mt={'lg'}>
                <Title order={1} mb={'lg'}>Mathematik</Title>
                <Card withBorder maw={720}>
                    <Flex justify={'space-between'} align={'center'}>
                        <Text weight={700}>Kursinfos</Text>
                        <Button
                            variant="subtle"
                            component={Link}
                            to="/courses/1/edit"
                        >
                            Editieren
                        </Button>
                    </Flex>
                    <Card.Section mt={'lg'} mb={'lg'}>
                        <Divider />
                    </Card.Section>
                    <Grid>
                        <Grid.Col span={3}>
                            <Text weight={700} color="dimmed">Kurstitel</Text>
                        </Grid.Col>
                        <Grid.Col span={9}>
                            <Text>Mathematik</Text>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Text weight={700} color="dimmed">Kursbeschreibung</Text>
                        </Grid.Col>
                        <Grid.Col span={9}>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            </Text>
                        </Grid.Col>
                    </Grid>
                </Card>
            </Container>
        </Tabs.Panel >
    );
}
