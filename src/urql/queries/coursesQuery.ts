import { graphql } from '../../gql'

export const CoursesQuery = graphql(/* GraphQL */ `
    query CoursesQuery {
        coursesList {
            __typename
            items {
                id
                name
            }
        }
    }
`);
