import { ActionIcon, Flex, Tooltip } from "@mantine/core";
import { IconLayoutSidebar } from "@tabler/icons-react";

interface PageNavToggleProps {
    open: boolean;
    toggleOpen: () => void;
}

export const PageNavToggle = ({open, toggleOpen}: PageNavToggleProps) => {
    return (
        <Flex justify={open ? 'flex-end' : 'center'}>
            <Tooltip
                label={open ? 'Seitenleiste schließen' : 'Seitenleiste öffnen'}
                position="right"
                transitionDuration={0}
            >
                <ActionIcon
                    onClick={toggleOpen}
                    color={'dark'}
                    size={'lg'}
                >
                    <IconLayoutSidebar />
                </ActionIcon>
            </Tooltip>
        </Flex>
    )
}
