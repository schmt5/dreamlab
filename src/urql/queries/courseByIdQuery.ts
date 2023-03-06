import { graphql } from '../../gql'

export const CourseByIdQuery = graphql(/* GraphQL */ `
   query CourseByIdQuery($id: ID!)  {
        course(id: $id) {
            id
            name
            description
            pages {
                count
                items {
                    id
                    name
                }
            }
        }
    }
`);
