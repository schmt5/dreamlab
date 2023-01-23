import { createStyles, Tabs } from '@mantine/core';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    tabs: {

    },

    tabsList: {
        borderBottom: '0 !important',
        justifyContent: 'center',
        backgroundColor: theme.colors.gray[1],
    },

    tab: {
        fontWeight: 500,
        height: 42,

        '&[data-active]': {
            backgroundColor: theme.white,
            borderColor: theme.colors.gray[1],
        },
    },
}));

export default function Course() {
    const { classes } = useStyles();
    const navigate = useNavigate();
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const pathnameArr = pathname.split('/');

    const handleTabNavigation = (value: string) => {
        if (value === 'info') {
            navigate(`/courses/${courseId}`);
        } else {
            navigate(`/courses/${courseId}/${value}`);
        }
    }

    return (
        <Tabs
            defaultValue={pathnameArr[3] || 'info'}
            onTabChange={handleTabNavigation}
            variant="outline"
            classNames={{
                root: classes.tabs,
                tabsList: classes.tabsList,
                tab: classes.tab,
            }}
        >
            <Tabs.List>
                <Tabs.Tab value="info">Info</Tabs.Tab>
                <Tabs.Tab value="pages">Seiten</Tabs.Tab>
                <Tabs.Tab value="students">SuS</Tabs.Tab>
            </Tabs.List>

            <Outlet />
        </Tabs>
    );
}
