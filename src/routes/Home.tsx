import { useState } from 'react'
import { ActionIcon, Badge, Box, Button, Card, Container, createStyles, Flex, Group, Header, MantineProvider, Menu, SegmentedControl, SimpleGrid, Text, TextInput, Title, UnstyledButton, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconSearch } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    header: {
        paddingTop: theme.spacing.sm,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
            }`,
        marginBottom: 120,
    },

    mainSection: {
        paddingBottom: theme.spacing.sm,
    },

    user: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        borderRadius: theme.radius.sm,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        },

        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none',
        },
    },

    userActive: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },
}));


export default function HomePage() {
    const { theme } = useStyles();

    return (
        <>
            <Box style={{ height: 64, backgroundColor: theme.colors.gray[1] }}></Box>
            <Container>
                <Card
                    withBorder
                    p={'md'}
                    radius={'lg'}
                    shadow={'sm'}
                    mt={-56}
                >
                    <Flex justify={'space-between'} align={'center'} mb={'md'}>
                        <Title order={3}>Kurse</Title>
                        <Button
                            component={Link}
                            to={'/courses/new'}
                            variant="subtle"
                        >
                            Erstellen
                        </Button>
                    </Flex>
                    <TextInput
                        icon={<IconSearch size={18} stroke={1.5} />}
                        radius="xl"
                        size="md"
                        rightSection={
                            <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                                <IconArrowRight size={18} stroke={1.5} />
                            </ActionIcon>
                        }
                        placeholder="Kurse suchen"
                        rightSectionWidth={42}
                    />
                    <Flex justify={'space-between'} mt={16}>
                        <SegmentedControl
                            data={[
                                { label: 'Lernumgebung', value: 'react' },
                                { label: 'Prüfung', value: 'ng' },
                            ]}
                        />
                    </Flex>
                </Card>
            </Container>
            <Container size={'xl'}>
                <SimpleGrid cols={3} spacing="md" mt={56}>
                    <Card withBorder radius={'md'}>
                        <Group position="right">
                            <Badge>aktiv</Badge>
                        </Group>
                        <Text color={'dimmed'} size={'xs'} weight={700} tt={'uppercase'}>Kurs</Text>
                        <Text weight={600}>Math</Text>
                        <Text color={'dimmed'} size={'sm'}>Module 000</Text>
                        <Flex justify={'flex-end'}>
                            <Button
                                component={Link}
                                to={'/courses/1'}
                                variant="subtle"
                                mt={'md'}
                            >
                                Anzeigen
                            </Button>
                        </Flex>
                    </Card>
                    <Card withBorder radius={'md'}>
                        <Text weight={600}>Durchführung</Text>
                        <Text>Deutsch</Text>
                        <Text>Module 000</Text>
                    </Card>
                </SimpleGrid>
            </Container>
        </>
    );
}
