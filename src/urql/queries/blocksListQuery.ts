import gql from 'graphql-tag';

export const BlocksListQuery = gql`
    query BlocksListQuery($pageId: String!) {
        blocksList(filter: { pagesId: { equals: $pageId } }) {
            count
            items {
                id
                content
                canStudentEdit
            }
        }
    }
`;
