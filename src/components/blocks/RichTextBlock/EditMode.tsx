import { useEffect, useState } from 'react';
import { Box, createStyles, Divider } from '@mantine/core';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { JSONContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useDebounce } from 'usehooks-ts';
import { useMutation } from 'urql';
import { BlockUpdateMutation } from '../../../urql/mutations/blockUpdateMutation';
import { EditButton } from './EditButton';
import { Show } from '../../ui/Show';

const useStyles = createStyles((theme) => ({
    root: {
        border: 'none',
    },
    toolbar: {
        padding: 8,
        paddingRight: 32,
        gap: 8,
        borderColor: theme.colors.gray[8],
        opacity: 0,
        transition: 'opacity 100ms ease-out',
    },

    toolbar_active: {
        opacity: 1,
        transition: 'opacity 50ms ease-in',
    },
    control: {
        border: 'none',
        borderRadius: '4px !important',
        '&:hover': {
            backgroundColor: theme.colors.gray[2] + ' !important',
        },
    }
}))

interface Props {
    hasFocus: boolean;
    id: string;
    editorContent: JSONContent;
    canStudentEdit?: boolean;
}

export const EditMode = ({ hasFocus, id, editorContent, canStudentEdit }: Props) => {
    const { classes, cx } = useStyles();
    const [, updateBlock] = useMutation(BlockUpdateMutation);
    const [content, setContent] = useState<JSONContent>(editorContent)
    const debouncedContent = useDebounce<JSONContent>(content, 500);

    const editor = useEditor({
        extensions: [
            Link,
            StarterKit,
        ],
        content: content,
        onUpdate: ({ editor }) => {
            setContent(editor.getJSON());
        },
    });

    useEffect(() => {
        const blockData = { data: { id, content: content } };
        updateBlock(blockData);
    }, [debouncedContent]);

    return (
        <>
            <Show when={hasFocus}>
                <EditButton
                    id={id}
                    canStudentEdit={!!canStudentEdit}
                />
            </Show>
            <RichTextEditor
                editor={editor}
                classNames={{
                    root: classes.root,
                    toolbar: cx(classes.toolbar, { [classes.toolbar_active]: hasFocus }),
                    control: classes.control,
                }}
            >
                <Box sx={{ height: 43 }}>
                    <RichTextEditor.Toolbar sticky>
                        <RichTextEditor.ControlsGroup>
                            <RichTextEditor.H1 />
                            <RichTextEditor.H2 />
                            <RichTextEditor.H3 />
                        </RichTextEditor.ControlsGroup>
                        <Divider orientation="vertical" />
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
                </Box>
                <RichTextEditor.Content />
            </RichTextEditor>
        </>
    );
};
