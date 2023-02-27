import gql from 'graphql-tag';

export const PagesByCourseQuery = gql`
    query PagesByCourseQuery($courseId: String!) {
        pagesList(filter: { coursesId: { equals: $courseId } }) {
            __typename
            count
            items {
                id
                name
            }
        }
    }
`;
