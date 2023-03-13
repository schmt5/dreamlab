import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import { BlocksByPageQuery } from "../../urql/queries/blocksByPageQuery";
import { getBlockByType } from "./Blocks";
import { EditableBlockWrapper } from "./EditableBlockWrapper";

export const BlockList = () => {
    const { pageId } = useParams();
    const [{ data }] = useQuery({ query: BlocksByPageQuery, variables: { pageId: pageId! } });

    return (
        <>
            {data?.blocksList.items.map((block) => (
                <EditableBlockWrapper key={block.id}>
                    {(hasFocus) => (
                        <>
                            {getBlockByType('richtext')?.editMode(
                                {
                                    hasFocus,
                                    id: block.id!,
                                    editorContent: block.content,
                                    canStudentEdit: !!block.canStudentEdit,
                                }
                            )}
                        </>
                    )}
                </EditableBlockWrapper>
            ))}
        </>
    );
}
