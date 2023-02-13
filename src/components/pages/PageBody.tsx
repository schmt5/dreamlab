import { Loader } from "@mantine/core";
import { Suspense } from "react";
import { Block } from "../blocks/Block";
import { BlockList } from "../blocks/BlockList";

export const PageBody = () => {

    return (
        <Suspense fallback={<Loader />}>
            <BlockList />
        </Suspense>
    );
}
