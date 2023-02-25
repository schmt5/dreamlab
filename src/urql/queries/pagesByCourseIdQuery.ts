import gql from 'graphql-tag';

export const PagesByCourseIdQuery = gql`
    query PagesByCourseIdQuery($courseId: String!) {
        pagesList(filter: { coursesId: { equals: $courseId } }) {
            count
            items {
            id
            name
            }
        }
    }
`;
