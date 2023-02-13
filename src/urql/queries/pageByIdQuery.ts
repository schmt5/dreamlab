import gql from 'graphql-tag';

export const PageByIdQuery = gql`
    query PageByIdQuery($id: ID!) {
        page(id: $id) {
            id
            name
            courses {
                id
                name
            }
        }
    }
`;
