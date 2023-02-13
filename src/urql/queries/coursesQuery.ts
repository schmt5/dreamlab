import gql from 'graphql-tag';

export const CoursesQuery = gql`
    query CoursesQuery {
        coursesList {
            items {
                id
                name
            }
        }
    }
`;
