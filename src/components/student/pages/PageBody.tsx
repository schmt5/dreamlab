import { Loader } from "@mantine/core";
import { Suspense } from "react";
import { StudentBlockList } from "../../blocks/StudentBlockList";

export const PageBody = () => {

    return (
        <Suspense fallback={<Loader />}>
            <StudentBlockList />
        </Suspense>
    );
}
