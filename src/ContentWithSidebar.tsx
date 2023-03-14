import { Flex, Paper } from "@mantine/core";
import { Sidebar } from "./components/pages/Sidebar";

interface ContentWithSidebarProps {
    children: React.ReactNode;
}

export const ContentWithSidebar = ({ children }: ContentWithSidebarProps) => {
    return (
        <Flex gap={'lg'}>
            <Sidebar />
            <Paper sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
                {children}
            </Paper>
        </Flex>
    );
}
