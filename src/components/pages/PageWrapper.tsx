import { Container } from "@mantine/core";
import { ContentWithSidebar } from "../../ContentWithSidebar";
import { PageHeader } from "./PageHeader";
import { PageBody } from "./PageBody";

export const PageWrapper = () => {

    return (
        <ContentWithSidebar>
            <Container size={'xl'} mt={'lg'}>
                <PageHeader />
                <PageBody />
            </Container>
        </ContentWithSidebar>
    );
}
