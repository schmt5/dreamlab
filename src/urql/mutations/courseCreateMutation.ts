import gql from 'graphql-tag';

export const CourseCreateMutation = gql`
   mutation CourseCreateMutation($data: CourseCreateInput!) {
        courseCreate(data: $data) {
            id
        }
    }
`;
