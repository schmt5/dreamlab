import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { StudentCourseTabList } from "../../components/StudentCourseTabList";
import { CenteredLoader } from "../../components/ui/CenteredLoader";

export default function Course() {
    return (
        <Suspense fallback={<CenteredLoader />}>
            <StudentCourseTabList />
            <Outlet />
        </Suspense>
    );
}
