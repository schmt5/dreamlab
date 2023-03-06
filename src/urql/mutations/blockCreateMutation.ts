import { graphql } from '../../gql'

export const BlockCreateMutation = graphql(/* GraphQL */ `
    mutation BlockCreateMutation($data: BlockCreateInput!) {
        blockCreate(data: $data) {
            id
            content
            canStudentEdit
        }
    }
`);
