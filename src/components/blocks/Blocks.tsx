import { RichTextBlock } from "./RichTextBlock/Block";

const blocks = [RichTextBlock];

export const getBlockByType = (type: string) => {
    return blocks.find((block) => block.type === type);
};
