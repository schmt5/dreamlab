import { Box } from "@mantine/core";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { RichTextBlock } from "./RichTextBlock/RichTextBlock";

export const Block = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const handleClickOutside = () => {
        setIsFocused(false);

        
    }

    const handleClickInside = () => {
        setIsFocused(true);
    }

    useOnClickOutside(ref, handleClickOutside)

    return (
        <Box
            ref={ref}
            onClick={handleClickInside}
            mb={'md'}
            sx={(theme) => ({
                border: '2px solid',
                borderRadius: theme.radius.sm,
                borderColor: isFocused ? theme.colors.gray[8] : 'transparent',

                '&:hover': {
                    borderColor: theme.colors.gray[8],
                },

            })}
        >
            <RichTextBlock editable={isFocused} />
        </Box>
    )
};