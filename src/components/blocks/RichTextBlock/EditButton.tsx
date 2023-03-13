import { useContext } from "react";
import { BlockMutationDispatchContext } from "../../../context/BlockContext";
import { EditButtonInner } from "../EditButtonInner";

interface Props {
    id: string;
    canStudentEdit: boolean;
}

export const EditButton = ({ id, canStudentEdit }: Props) => {
    const dispatch = useContext(BlockMutationDispatchContext);

    const handleClick = () => {
        if (dispatch) {
            dispatch({
                type: 'EDIT_RICHTEXT',
                payload: {
                    id,
                    canStudentEdit,
                },
            });
        }
    }

    // No Context.Provider is available
    // e.g. when EditableBlockWrapper is used in student view
    if (dispatch === null) {
        return null;
    }

    return (
        <EditButtonInner handleClick={handleClick} />
    );
}
