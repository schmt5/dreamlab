import { graphql } from '../../gql'

export const PagesByCourseQuery = graphql(/* GraphQL */ `
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
`);
