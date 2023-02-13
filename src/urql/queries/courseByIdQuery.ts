import gql from 'graphql-tag';

export const CourseByIdQuery = gql`
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
`;
