import { graphql } from '../../gql'

export const PageCreateMutation = graphql(/* GraphQL */ `
    mutation PageCreateMutation($data: PageCreateInput!) {
        pageCreate(data: $data) {
            id
        }
    }
`);
