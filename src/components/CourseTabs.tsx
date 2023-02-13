import { Box, createStyles } from "@mantine/core"
import { Link, useLocation, useParams } from "react-router-dom"
import { useQuery } from "urql";
import { CourseByIdQuery } from "../urql/queries/courseByIdQuery";

const useStyles = createStyles((theme) => ({
    list: {
        display: 'flex',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.gray[0],
    },
    link: {
        fontWeight: 500,
        padding: '10px 16px',
        textDecoration: 'none',
        color: theme.black,
        borderRadius: theme.radius.sm,
        border: `1px solid transparent`,
        borderBottom: 0,
    },
    link_active: {
        backgroundColor: theme.white,
        borderColor: theme.colors.gray[2],
    },
}));

export const CourseTabs = () => {
    const { classes, cx } = useStyles();
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const [{ data }] = useQuery({ query: CourseByIdQuery, variables: { id: courseId } });

    const courseSecton = pathname.split('/')[3];

    return (
        <Box className={classes.list}>
            <Link
                to={`/courses/${courseId}`}
                className={cx(classes.link, (courseSecton === undefined || courseSecton === 'edit') && classes.link_active)}
            >
                Info
            </Link>
            <Link
                to={`/courses/${courseId}/pages/${data?.course.pages.items[0].id}`}
                className={cx(classes.link, courseSecton === 'pages' && classes.link_active)}
            >
                Seiten
            </Link>
            <Link
                to={`/courses/${courseId}/students`}
                className={cx(classes.link, courseSecton === 'students' && classes.link_active)}
            >
                SuS
            </Link>
        </Box>
    );
}
