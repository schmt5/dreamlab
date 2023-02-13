import gql from 'graphql-tag';

export const CourseUpdateMutation = gql`
   mutation CourseUpdateMutation($data: CourseUpdateInput!) {
        courseUpdate(data: $data) {
            id
        }
    }
`;
