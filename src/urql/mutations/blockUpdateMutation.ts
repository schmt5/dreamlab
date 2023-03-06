import { graphql } from '../../gql'

export const BlockUpdateMutation = graphql(/* GraphQL */ `
    mutation BlockUpdateMutation($data: BlockUpdateInput!) {
        blockUpdate(data: $data) {
            id
            content
        }
    }
`);
