

import { Link, useLocation, useParams } from "react-router-dom"
import { useQuery } from "urql";
import { CourseByIdQuery } from "../urql/queries/courseByIdQuery";
import { HeaderTabsWrapper } from "./HeaderTabsWrapper";

export const CourseTabList = () => {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const [{ data }] = useQuery({ query: CourseByIdQuery, variables: { id: courseId! } });
    const pageId = data?.course?.pages?.items[0].id;

    let activeSection = 'infos';
    if (pathname.includes('/pages')) {
        activeSection = 'pages';
    } else if (pathname.includes('/students')) {
        activeSection = 'students';
    }

    return (
        <HeaderTabsWrapper>
            <Link
                to={`/courses/${courseId}`}
                data-active={activeSection === 'infos'}
            >
                Info
            </Link>
            <Link
                to={`/courses/${courseId}/pages/${pageId}`}
                data-active={activeSection === 'pages'}
            >
                Seiten
            </Link>
            <Link
                to={`/courses/${courseId}/students`}
                data-active={activeSection === 'students'}
            >
                SuS
            </Link>
        </HeaderTabsWrapper>
    );
}
