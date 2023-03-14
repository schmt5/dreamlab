import { Box, Paper } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import { useLocalStorage } from "usehooks-ts";
import { PageLink } from "../../PageLink";
import { PageNavCreate } from "./PageNavCreate";
import { PageNavToggle } from "./PageNavToggle";
import { PagesByCourseQuery } from "../../urql/queries/pagesByCourseQuery";

export const Sidebar = () => {
    const { courseId } = useParams();
    const [open, setOpen] = useLocalStorage('sidebarOpen', true);
    const [{ data }] = useQuery({ query: PagesByCourseQuery, variables: { courseId: courseId! } });

    const toggleOpen = () => setOpen(prevState => !prevState);

    return (
        <Paper
            sx={{ flexBasis: open ? 300 : 68, height: 'calc(100vh - 106px)', transition: 'flex-basis 0.3s ease-in-out', borderTop: 0, borderBottom: 0 }}
            radius={0}
            withBorder
            p={'md'}
        >
            <PageNavToggle
                open={open}
                toggleOpen={toggleOpen}
            />
            <Box mt={'lg'}>
                {data?.pagesList.items.map((item: any) => (
                    <PageLink
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        isSidebarOpen={open}
                    />
                ))}
            </Box>
            <PageNavCreate
                isSidebarOpen={open}
                pageCount={data?.pagesList.count!}
            />
        </Paper>
    );
}
