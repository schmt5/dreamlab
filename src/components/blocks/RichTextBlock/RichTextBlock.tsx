import { Box, createStyles, Divider, Transition } from '@mantine/core';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

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
    editable?: boolean;
}

export const RichTextBlock = ({ editable = true }: RichTextBlockProps) => {
    const content = 'hallo';
    const { classes } = useStyles();

    const editor = useEditor({
        extensions: [
            StarterKit,
            Link,
        ],
        content,
    });

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
                <Transition mounted={editable} transition="fade" duration={200} timingFunction="ease">
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
