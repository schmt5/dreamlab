import { JSONContent } from "@tiptap/react";
import { EditableBlockWrapper } from "../EditableBlockWrapper";
import { ViewMode } from "./ViewMode";
import { EditMode } from "./EditMode";

interface Props {
    id: string;
    content: JSONContent;
    canStudentEdit: boolean;
}

export const RichTextTriage = ({ id, content, canStudentEdit }: Props) => {
    if (canStudentEdit) {
        return (
            <EditableBlockWrapper>
                {(hasFocus) => (
                    <EditMode
                        id={id}
                        editorContent={content}
                        hasFocus={hasFocus}
                    />
                )}
            </EditableBlockWrapper>
        );
    } else {
        return (
            <ViewMode content={content} />
        );
    }
}
