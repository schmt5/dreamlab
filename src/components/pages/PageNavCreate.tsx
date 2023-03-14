import { useState } from "react";
import { ActionIcon, Box, Button, Center, Flex, Text, Tooltip, Transition } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { CreatePageDrawer } from "./CreatePageDrawer";

interface PageNavCreateProps {
    isSidebarOpen: boolean;
    pageCount: number;
}

export const PageNavCreate = ({ isSidebarOpen, pageCount }: PageNavCreateProps) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const onOpen = () => setOpenDrawer(true);
    const onClose = () => setOpenDrawer(false);


    if (!isSidebarOpen) {
        return (
            <>
                <Box mt={'lg'}>
                    <Tooltip
                        label={'Seite hinzufügen'}
                        position="right"
                    >
                        <Center>
                            <ActionIcon
                                color={'dark'}
                                size={'lg'}
                                onClick={onOpen}
                            >
                                <IconPlus />
                            </ActionIcon>
                        </Center>
                    </Tooltip>
                </Box>
                <CreatePageDrawer
                    open={openDrawer}
                    onClose={onClose}
                    pageCount={pageCount}
                />
            </>
        );
    }

    return (
        <>
            <Box mt={'lg'}>
                <Flex justify={'flex-start'}>
                    <Button
                        variant={'subtle'}
                        color={'dark'}
                        leftIcon={<IconPlus size={20} />}
                        onClick={onOpen}
                    >
                        <Text sx={{ whiteSpace: 'nowrap' }}>
                            Seite hinzufügen
                        </Text>
                    </Button>
                </Flex>
            </Box>
            <CreatePageDrawer
                open={openDrawer}
                onClose={onClose}
                pageCount={pageCount}
            />
        </>
    );
}
