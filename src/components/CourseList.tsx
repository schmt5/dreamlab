import { SimpleGrid } from "@mantine/core";
import { CourseTeaser } from "./CourseTeaser";
import { useQuery } from "urql";

const CoursesQuery = `
  query {
    coursesList {
      items {
        id
        name
        description
      }
    }
  }
`;

export const CourseList = () => {
  const [query] = useQuery({ query: CoursesQuery });

  console.log(query);

  return (
    <SimpleGrid cols={3} spacing="md" mt={56}>
      {query?.data?.map((course: any) => (
        <CourseTeaser
          key={course.id}
          id={course.id}
          name={course.name}
        />
      ))}
    </SimpleGrid>
  );
}
