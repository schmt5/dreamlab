import { ActionIcon, Box } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";

interface Props {
    handleClick: () => void;
}

export const EditButtonInner = ({ handleClick }: Props) => {
    return (
        <Box sx={{
            position: 'absolute',
            top: 6,
            right: 6,
            zIndex: 10,
        }}>
            <ActionIcon
                variant={'subtle'}
                onClick={handleClick}
            >
                <IconEdit size="1.125rem" />
            </ActionIcon>
        </Box>
    );
}
