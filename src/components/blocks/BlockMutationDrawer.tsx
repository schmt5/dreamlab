import { Drawer } from '@mantine/core';
import { useContext } from 'react';
import { BlockMutationContext, BlockMutationDispatchContext } from '../../context/BlockContext';
import { getBlockByType } from './Blocks';

export const BlockMutationDrawer = () => {
    const blockToMutate = useContext(BlockMutationContext);
    const dispatch = useContext(BlockMutationDispatchContext);

    const onClose = () => {
        if (dispatch) {
            dispatch({
                type: '',
                payload: null,
            });
        }
    }

    return (
        <Drawer
            opened={blockToMutate !== null && blockToMutate.blockType !== ''}
            onClose={onClose}
            position="right"
            padding="xl"
            size={560}
        >
            {blockToMutate && blockToMutate.data === null && (
                <>
                    {getBlockByType(blockToMutate.blockType)?.createForm({ onClose })}
                </>
            )}
            {blockToMutate && blockToMutate.data !== null && (
                <>
                    {getBlockByType(blockToMutate.blockType)?.updateForm(
                        {
                            onClose,
                            id: blockToMutate.data.id,
                            canStudentEdit: blockToMutate.data.canStudentEdit
                        }
                    )}
                </>
            )}
        </Drawer>
    );
}
