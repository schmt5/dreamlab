import { Button, Container, createStyles, Flex, Header as MantineHeader, Menu, Text } from '@mantine/core';
import { IconMessage, IconSettings, IconSwitchHorizontal, IconLogout, IconSchool } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';

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


export const Header = () => {
    const navigate = useNavigate();
    const { theme } = useStyles();

    const handleStudentView = () => {
        navigate('/student');
    }

    return (
        <MantineHeader height={60} withBorder={false} style={{ backgroundColor: theme.colors.gray[0] }}>
            <Container size={'xl'}>
                <Flex style={{ height: 60 }} align={'center'} justify={'space-between'}>
                    <Text
                        component={Link}
                        to={'/'}
                        size={'lg'}
                        weight={600}
                    >
                        SmartLab
                    </Text>
                    <Menu
                        width={260}
                        position="bottom-end"

                    >
                        <Menu.Target>
                            <Button
                                color={'gray'}
                                style={{ borderRadius: 99, width: 44, height: 44, padding: 4 }}
                            >
                                TS
                            </Button>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item icon={<IconMessage size={14} color={theme.colors.yellow[6]} stroke={1.5} />}>
                                Nachrichten
                            </Menu.Item>
                            <Menu.Item
                                icon={<IconSchool size={14} stroke={1.5} color={theme.colors.blue[6]} />}
                                onClick={handleStudentView}
                            >
                                SuS-Ansicht
                            </Menu.Item>

                            <Menu.Label>Settings</Menu.Label>
                            <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
                                Account settings
                            </Menu.Item>
                            <Menu.Item icon={<IconSwitchHorizontal size={14} stroke={1.5} />}>
                                Change account
                            </Menu.Item>
                            <Menu.Item icon={<IconLogout size={14} stroke={1.5} />}>
                                Logout
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Flex>
            </Container>
        </MantineHeader>
    );
}
