import { graphql } from '../../gql'

export const BlocksByPageQuery = graphql(/* GraphQL */ `
    query BlocksByPageQuery($pageId: String!) {
        blocksList(filter: { pagesId: { equals: $pageId } }) {
            __typename
            count
            items {
                id
                content
                canStudentEdit
                pagesId
            }
        }
    }
`);
