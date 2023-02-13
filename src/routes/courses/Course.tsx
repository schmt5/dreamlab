import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Loader } from "@mantine/core";
import { CourseTabs } from '../../components/CourseTabs';

export default function Course() {
    return (
        <Suspense fallback={<Loader />}>
            <CourseTabs />
            <Outlet />
        </Suspense>
    );
}
