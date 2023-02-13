import gql from 'graphql-tag';

export const BlockCreateMutation = gql`
    mutation BlockCreateMutation($data: BlockCreateInput!) {
        blockCreate(data: $data) {
            id
        }
    }
`;
