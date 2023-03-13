
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '@mantine/core';

export default function Root() {

    return (
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    );
}
