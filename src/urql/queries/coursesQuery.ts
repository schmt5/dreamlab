import gql from 'graphql-tag';

export const CoursesQuery = gql`
    query CoursesQuery {
        coursesList {
            __typename
            items {
                id
                name
            }
        }
    }
`;
