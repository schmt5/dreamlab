import { useEffect, useState } from 'react';
import { Box, createStyles, Divider, Transition } from '@mantine/core';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { JSONContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useDebounce } from 'usehooks-ts';
import { useMutation } from 'urql';
import { BlockUpdateMutation } from '../../../urql/mutations/blockUpdateMutation';

const useStyles = createStyles((theme) => ({
    root: {
        border: 'none',
    },
    toolbar: {
        padding: 8,
        gap: 8,
        borderColor: theme.colors.gray[8],
    },
    control: {
        border: 'none',
        borderRadius: '4px !important',
        '&:hover': {
            backgroundColor: theme.colors.gray[2] + ' !important',
        },
    }
}))

interface RichTextBlockProps {
    id: string;
    editorContent: JSONContent;
    editable?: boolean;
}

export const RichTextBlock = ({ id, editorContent, editable = true }: RichTextBlockProps) => {
    const { classes } = useStyles();
    const [{ fetching }, updateBlock] = useMutation(BlockUpdateMutation);
    const [content, setContent] = useState<JSONContent>(editorContent)
    const debouncedContent = useDebounce<JSONContent>(content, 500);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Link,
        ],
        content: content,
        onUpdate: ({ editor }) => {
            setContent(editor.getJSON());
        }
    });

    useEffect(() => {
        const blockData = { data: { id, content: content } };
        updateBlock(blockData);
    }, [debouncedContent]);

    return (
        <RichTextEditor
            editor={editor}
            classNames={{
                root: classes.root,
                toolbar: classes.toolbar,
                control: classes.control,
            }}
        >
            <Box sx={{ height: 43 }}>
                <Transition mounted={editable} transition="fade" duration={50} timingFunction="ease">
                    {(styles) => (
                        <div style={styles}>
                            <RichTextEditor.Toolbar sticky>
                                <RichTextEditor.ControlsGroup>
                                    <RichTextEditor.Bold />
                                    <RichTextEditor.Italic />
                                    <RichTextEditor.Underline />
                                    <RichTextEditor.Code />
                                </RichTextEditor.ControlsGroup>
                                <Divider orientation="vertical" />
                                <RichTextEditor.ControlsGroup>
                                    <RichTextEditor.BulletList />
                                    <RichTextEditor.OrderedList />
                                </RichTextEditor.ControlsGroup>
                                <Divider orientation="vertical" />
                                <RichTextEditor.ControlsGroup>
                                    <RichTextEditor.Link />
                                    <RichTextEditor.Unlink />
                                </RichTextEditor.ControlsGroup>
                            </RichTextEditor.Toolbar>
                        </div>
                    )}
                </Transition>
            </Box>

            <RichTextEditor.Content />
        </RichTextEditor>
    );
};
