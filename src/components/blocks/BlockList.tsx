import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import { BlocksByPageQuery } from "../../urql/queries/blocksByPageQuery";
import { Block } from "./Block";

export const BlockList = () => {
    const { pageId } = useParams();
    const [{ data }] = useQuery({ query: BlocksByPageQuery, variables: { pageId } })

    return (
        <>
            {data?.blocksList.items.map((block: any) => (
                <Block
                    key={block.id}
                    id={block.id}
                    content={block.content}
                />
            ))}
        </>
    );
}
