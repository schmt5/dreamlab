import { Loader } from "@mantine/core";
import { Suspense } from "react";
import { PageWrapper } from "../../components/pages/PageWrapper";

export default function Page() {

    return (
        <Suspense fallback={<Loader />}>
            <PageWrapper />
        </Suspense>
    );
}
