import { CreateForm } from "./CreateFrom";
import { EditMode } from "./EditMode";
import { UpdateForm } from "./UpdateForm";
import { ViewMode } from "./ViewMode";

export const RichTextBlock = {
    type: 'richtext',
    viewMode: ViewMode,
    editMode: EditMode,
    createForm: CreateForm,
    updateForm: UpdateForm,
}
