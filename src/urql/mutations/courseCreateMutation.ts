import { graphql } from '../../gql'

export const CourseCreateMutation = graphql(/* GraphQL */ `
   mutation CourseCreateMutation($data: CourseCreateInput!) {
        courseCreate(data: $data) {
            id
        }
    }
`);
