
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import Root from "./routes/Root";
import Home from './routes/Home';
import Course from './routes/courses/Course';
import Infos from "./routes/courses/Infos";
import Pages from "./routes/courses/Pages";
import Students from "./routes/courses/Students";
import New from "./routes/courses/New";
import Edit from "./routes/courses/Edit";
import { createClient, Provider as UrqlProvider, debugExchange, fetchExchange } from "urql";
import { cacheExchange } from '@urql/exchange-graphcache';

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
            path: 'pages',
            element: <Pages />,
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
      }
    ]
  }
]);


const client = createClient({
  url: import.meta.env.VITE_APP_WORKSPACE_ENDPOINT,
  exchanges: [
    debugExchange,
    cacheExchange({}),
    fetchExchange,
  ],
});


export default function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ primaryColor: 'pink', primaryShade: 7 }}>
      <UrqlProvider value={client}>
        <RouterProvider router={router} />
      </UrqlProvider>
    </MantineProvider>
  );
}
