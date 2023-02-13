import gql from 'graphql-tag';

export const PageCreateMutation = gql`
    mutation PageCreateMutation($data: PageCreateInput!) {
        pageCreate(data: $data) {
            id
        }
    }
`;
