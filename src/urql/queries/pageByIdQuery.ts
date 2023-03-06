import { graphql } from '../../gql'

export const PageByIdQuery = graphql(/* GraphQL */ `
    query PageByIdQuery($id: ID!) {
        page(id: $id) {
            id
            name
        }
    }
`);
