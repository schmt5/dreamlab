import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { auth } from '../auth';

export default function Root() {


    useEffect(() => {
        const checkAuth = async () => {
            // const { idToken } = await auth.currentUser();
            return 'idToken';
        };

        const token = checkAuth();
        console.log(token);
    }, []);


    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}
