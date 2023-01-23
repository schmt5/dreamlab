
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import Home from './routes/Home';
import Course from './routes/Course';
import Root from "./routes/Root";
import InfoTabPanel from "./routes/InfoTabPanel";
import PagesTabPanel from "./routes/PagesTabPanel";
import StudentsTabPanel from "./routes/StudentsTabPanel";
import NewCourse from "./routes/NewCourse";
import EditCourse from "./routes/EditCourse";

const router = createBrowserRouter([
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
        element: <NewCourse />,
      },
      {
        path: 'courses/:courseId',
        element: <Course />,
        children: [
          {
            index: true,
            element: <InfoTabPanel />,
          },
          {
            path: 'pages',
            element: <PagesTabPanel />,
          },
          {
            path: 'students',
            element: <StudentsTabPanel />,
          },
          {
            path: 'edit',
            element: <EditCourse />,
          }
        ]
      }
    ]
  }
]);

export default function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
