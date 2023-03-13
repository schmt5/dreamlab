import { MantineProvider } from '@mantine/core';
import { Provider as UrqlProvider } from "urql";
import { RouterProvider } from "react-router-dom";
import { client } from "./urql/client";
import { router } from "./routes/router";

export default function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ primaryColor: 'indigo', primaryShade: 7 }}>
      <UrqlProvider value={client}>
        <RouterProvider router={router} />
      </UrqlProvider>
    </MantineProvider>
  );
}
