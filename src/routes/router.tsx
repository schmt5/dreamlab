
import { createBrowserRouter, Outlet } from "react-router-dom";
import Root from "./Root";
import Home from './Home';
import Course from './courses/Course';
import Infos from "./courses/Infos";
import Page from "./courses/Page";
import Students from "./courses/Students";
import New from "./courses/New";
import Edit from "./courses/Edit";
import StudentHome from './student/Home';
import StudentCourse from './student/Course';
import StudentPage from './student/Page';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'courses/new',
                element: <New />,
            },
            {
                path: 'courses/:courseId',
                element: <Course />,
                children: [
                    {
                        index: true,
                        element: <Infos />,
                    },
                    {
                        path: 'pages/:pageId',
                        element: <Page />,
                    },
                    {
                        path: 'students',
                        element: <Students />,
                    },
                    {
                        path: 'edit',
                        element: <Edit />,
                    }
                ]
            },
            {
                path: 'student',
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <StudentHome />,
                    },
                    {
                        path: 'courses/:courseId',
                        element: <StudentCourse />,
                        children: [
                            {
                                index: true,
                                element: <div>Feed ...</div>,
                            },
                            {
                                path: 'pages/:pageId',
                                element: <StudentPage />,
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);
