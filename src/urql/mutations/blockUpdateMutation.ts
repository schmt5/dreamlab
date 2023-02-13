import gql from 'graphql-tag';

export const BlockUpdateMutation = gql`
    mutation BlockUpdateMutation($data: BlockUpdateInput!) {
        blockUpdate(data: $data) {
            id
            content
        }
    }
`;
