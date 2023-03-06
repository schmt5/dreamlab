import { graphql } from '../../gql'

export const CourseUpdateMutation = graphql(/* GraphQL */ `
   mutation CourseUpdateMutation($data: CourseUpdateInput!) {
        courseUpdate(data: $data) {
            id
        }
    }
`);
