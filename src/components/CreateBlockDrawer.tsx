import { Drawer } from '@mantine/core';
import { CreateRichTextBlock } from './CreateRichTextBlock';

interface CreateBlockDrawerProps {
    blockToCreate: '' | 'richtext' | 'checkbox';
    onClose: () => void;
}

export const CreateBlockDrawer = ({ blockToCreate, onClose }: CreateBlockDrawerProps) => {

    return (
        <Drawer
            opened={blockToCreate !== ''}
            onClose={onClose}
            position="right"
            padding="xl"
            size={560}
        >
            {blockToCreate === 'richtext' && (
                <CreateRichTextBlock onClose={onClose} />
            )}
        </Drawer>
    );
}
