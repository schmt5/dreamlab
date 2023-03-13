

import { Link, useLocation, useParams } from "react-router-dom"
import { useQuery } from "urql";
import { CourseByIdQuery } from "../urql/queries/courseByIdQuery";
import { HeaderTabsWrapper } from "./HeaderTabsWrapper";

export const StudentCourseTabList = () => {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const [{ data }] = useQuery({ query: CourseByIdQuery, variables: { id: courseId! } });
    const pageId = data?.course?.pages?.items[0].id;

    let activeSection = 'feed';
    if (pathname.includes('/pages')) {
        activeSection = 'pages';
    }

    return (
        <HeaderTabsWrapper>
            <Link
                to={`/student/courses/${courseId}`}
                data-active={activeSection === 'feed'}
            >
                Info
            </Link>
            <Link
                to={`/student/courses/${courseId}/pages/${pageId}`}
                data-active={activeSection === 'pages'}
            >
                Seiten
            </Link>
        </HeaderTabsWrapper>
    );
}
