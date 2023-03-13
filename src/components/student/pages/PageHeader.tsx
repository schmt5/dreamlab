import { Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import { PageByIdQuery } from "../../../urql/queries/pageByIdQuery";

export const PageHeader = () => {
    const { pageId } = useParams();
    const [{ data }] = useQuery({ query: PageByIdQuery, variables: { id: pageId! } })

    return (
        <Title order={2} mb={'lg'}>
            {data?.page?.name}
        </Title>
    );
}
