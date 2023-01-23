import { ActionIcon, Box, Button, Center, Flex, Paper, Text, Tooltip } from "@mantine/core";
import { IconFile, IconLayoutSidebar, IconPlus } from "@tabler/icons";
import { useState } from "react";
import { pages } from './db/data';
import { PageLink } from "./PageLink";

interface ContentWithSidebarProps {
    children: React.ReactNode;
}


export const ContentWithSidebar = ({ children }: ContentWithSidebarProps) => {
    const [open, setOpen] = useState(false);

    return (
        <Flex gap={'lg'}>
            <Paper
                sx={{ flexBasis: open ? 300 : 68, height: 'calc(100vh - 102px)', transition: 'flex-basis 0.3s', borderTop: 0, borderBottom: 0 }}
                radius={0}
                withBorder
                p={'md'}
            >
                <Flex justify={open ? 'flex-end' : 'center'}>
                    <Tooltip
                        label={open ? 'Seitenleiste schließen' : 'Seitenleiste öffnen'}
                        position="right"
                        transitionDuration={0}
                    >
                        <ActionIcon
                            onClick={() => setOpen(!open)}
                            color={'dark'}
                            size={'lg'}
                        >
                            <IconLayoutSidebar />
                        </ActionIcon>
                    </Tooltip>
                </Flex>
                <Box mt={'lg'}>
                    {pages.map((item) => (
                        <PageLink
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            isSidebarOpen={open}
                        />
                    ))}
                </Box>
                <Box mt={'lg'}>
                    <Tooltip
                        label={'Seite hinzufügen'}
                        position="right"
                        transitionDuration={0}
                        opened={open ? false : undefined}
                    >
                        {open ? (
                            <Flex justify={'flex-start'}>
                                <Button
                                    variant={'subtle'}
                                    color={'dark'}
                                    leftIcon={<IconPlus size={20} />}
                                >
                                    <Text sx={{ whiteSpace: 'nowrap' }}>
                                        Seite hinzufügen
                                    </Text>
                                </Button>
                            </Flex>
                        ) : (
                            <Center>
                                <ActionIcon
                                    color={'dark'}
                                    size={'lg'}
                                >
                                    <IconPlus />
                                </ActionIcon>
                            </Center>
                        )}

                    </Tooltip>
                </Box>
            </Paper>
            <Paper sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
                {children}
            </Paper>
        </Flex>
    );
}