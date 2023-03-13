import { createStyles } from "@mantine/core";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { JSONContent, useEditor } from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit';

const useStyles = createStyles(() => ({
    root: {
        border: 'none',
    }
}));

interface Props {
    content: JSONContent;
}

export const ViewMode = ({ content }: Props) => {
    const { classes } = useStyles();
    const editor = useEditor({
        extensions: [
            Link,
            StarterKit,
        ],
        content: content,
        editable: false,
    })


    return (
        <RichTextEditor
            editor={editor}
            classNames={{
                root: classes.root,
            }}
        >
            <RichTextEditor.Content />
        </RichTextEditor>

    );
}
