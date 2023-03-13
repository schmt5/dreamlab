import { Container } from "@mantine/core";
import { ContentWithSidebar } from "../../ContentWithSidebar";
import { PageHeader } from "./PageHeader";
import { PageBody } from "./PageBody";
import { useReducer } from "react";
import { BlockMutationContext, BlockMutationDispatchContext, blockMutationReducer } from "../../context/BlockContext";

export const PageWrapper = () => {
    const [state, dispatch] = useReducer(
        blockMutationReducer,
        {
            blockType: '',
            data: null,
        }
    );

    return (
        <ContentWithSidebar>
            <Container size={'xl'} mt={'lg'}>
                <BlockMutationContext.Provider value={state}>
                    <BlockMutationDispatchContext.Provider value={dispatch}>
                        <PageHeader />
                        <PageBody />
                    </BlockMutationDispatchContext.Provider>
                </BlockMutationContext.Provider>
            </Container>
        </ContentWithSidebar>
    );
}
