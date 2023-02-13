import { SimpleGrid } from "@mantine/core";
import { CourseTeaser } from "./CourseTeaser";
import { useQuery } from "urql";
import { CoursesQuery } from "../urql/queries/coursesQuery";

export const CourseList = () => {
  const [{ data }] = useQuery({ query: CoursesQuery });

  return (
    <SimpleGrid cols={3} spacing="md" mt={56}>
      {data?.coursesList.items.map((course: any) => (
        <CourseTeaser
          key={course.id}
          id={course.id}
          name={course.name}
        />
      ))}
    </SimpleGrid>
  );
}
