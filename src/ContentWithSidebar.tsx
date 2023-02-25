import { ActionIcon, Box, Button, Center, Flex, Paper, Text, Tooltip } from "@mantine/core";
import { IconLayoutSidebar, IconPlus } from "@tabler/icons";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import { PageNavCreate } from "./components/pages/PageNavCreate";
import { PageNavToggle } from "./components/pages/PageNavToggle";
import { PageLink } from "./PageLink";
import { PagesByCourseIdQuery } from "./urql/queries/pagesByCourseIdQuery";

interface ContentWithSidebarProps {
    children: React.ReactNode;
}

export const ContentWithSidebar = ({ children }: ContentWithSidebarProps) => {
    const [open, setOpen] = useState(false);
    const { courseId } = useParams();
    const [{ data }] = useQuery({ query: PagesByCourseIdQuery, variables: { courseId } });

    const toggleOpen = () => setOpen(!open);

    return (
        <Flex gap={'lg'}>
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
                    pageCount={data?.pagesList.count}
                />
            </Paper>
            <Paper sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
                {children}
            </Paper>
        </Flex>
    );
}