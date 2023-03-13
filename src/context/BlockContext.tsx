import { createContext } from "react";

type State = {
    blockType: string;
    data: any;
}

export type ActionType = '' | 'CREATE_RICHTEXT' | 'EDIT_RICHTEXT' | 'CREATE_CHECKBOX' | 'EDIT_CHECKBOX';

type Action = {
    type: ActionType;
    payload: any;
}

type Dispatch = (action: Action) => void;

export const BlockMutationContext = createContext<null | State>(null);
export const BlockMutationDispatchContext = createContext<null | Dispatch>(null);

export const blockMutationReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case '':
            return { blockType: '', data: null };
        case 'CREATE_RICHTEXT':
            return { blockType: 'richtext', data: null };
        case 'EDIT_RICHTEXT':
            return { blockType: 'richtext', data: action.payload };
        case 'CREATE_CHECKBOX':
            return { blockType: 'checkbox', data: null };
        case 'EDIT_CHECKBOX':
            return { blockType: 'checkbox', data: action.payload };
        default:
            throw Error('Unknown BlockDrawer action: ' + action.type);
    }
}
