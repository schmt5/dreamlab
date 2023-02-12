import { Outlet } from 'react-router-dom';
import { CourseTabs } from './CourseTabs';

export default function Course() {
    return (
        <>
            <CourseTabs />
            <Outlet />
        </>
    );
}
