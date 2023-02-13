import { Box } from "@mantine/core";
import { JSONContent } from "@tiptap/react";
import { useRef, useState } from "react";
import { useHover, useOnClickOutside } from "usehooks-ts";
import { RichTextBlock } from "./RichTextBlock/RichTextBlock";

interface BlockProps {
    id: string;
    content: JSONContent;
}

export const Block = ({ id, content }: BlockProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const isHover = useHover(ref);

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
            <RichTextBlock
                id={id}
                editorContent={content}
                editable={isFocused || isHover}
            />
        </Box>
    )
};