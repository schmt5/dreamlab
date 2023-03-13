import { useRef, useState } from "react";
import { useHover, useOnClickOutside } from "usehooks-ts";
import { Box } from "@mantine/core";

interface Props {
    children: (hasFocus: boolean) => React.ReactNode;
}

export const EditableBlockWrapper = ({ children }: Props) => {
    const [hasFocus, setHasFocus] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const hasHover = useHover(ref);

    const handleClickOutside = () => {
        setHasFocus(false);
    }

    const handleClickInside = () => {
        setHasFocus(true);
    }

    useOnClickOutside(ref, handleClickOutside)

    return (
        <Box
            ref={ref}
            onClick={handleClickInside}
            mb={'md'}
            sx={(theme) => ({
                position: 'relative',
                border: '2px solid',
                borderRadius: theme.radius.sm,
                borderColor: hasFocus ? theme.colors.gray[8] : 'transparent',

                '&:hover': {
                    borderColor: theme.colors.gray[8],
                },

            })}
        >
            {children(hasFocus || hasHover)}
        </Box>
    )
};