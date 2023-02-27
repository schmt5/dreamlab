import gql from 'graphql-tag';

export const BlocksByPageQuery = gql`
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
`;
