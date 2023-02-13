import gql from 'graphql-tag';

export const BlocksByPageIdQuery = gql`
    query BlocksByPageIdQuery($pageId: ID!) {
        page(id: $pageId) {
            id
            name
            blocks {
                count
                items {
                    id
                    content
                    canStudentEdit
                }
            }
        }
    }
`;
