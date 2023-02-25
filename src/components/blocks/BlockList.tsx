import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import { BlocksByPageIdQuery } from "../../urql/queries/blocksByPageIdQuery";
import { BlocksListQuery } from "../../urql/queries/blocksListQuery";
import { Block } from "./Block";

export const BlockList = () => {
    const { pageId } = useParams();
    // const [{ data }] = useQuery({ query: BlocksByPageIdQuery, variables: { pageId } })

    const [{ data }] = useQuery({ query: BlocksListQuery, variables: { pageId } })

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
