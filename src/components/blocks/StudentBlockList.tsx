import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import { BlocksByPageQuery } from "../../urql/queries/blocksByPageQuery";
import { RichTextTriage } from "./RichTextBlock/RichTextTriage";

export const StudentBlockList = () => {
    const { pageId } = useParams();
    const [{ data }] = useQuery({ query: BlocksByPageQuery, variables: { pageId: pageId! } })

    return (
        <>
            {data?.blocksList.items.map((block) => (
                <RichTextTriage
                    key={block.id}
                    id={block.id!}
                    content={block.content}
                    canStudentEdit={!!block.canStudentEdit}
                />
            ))}
        </>
    );
}

