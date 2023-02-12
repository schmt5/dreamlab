import { useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from "../../../supabase/supabaseClient";

type Course = {
    id: string;
    name: string;
    description: string;
}

const updateCourse = async (course: Course) => {
    const { data } = await supabase
        .from('courses')
        .update({ name: course.name, description: course.description })
        .eq('id', course.id)
        .select('*');

    return data;
}

export const useUpdateCourseMutation = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (course: Course) => updateCourse(course),
        onSuccess: () => {
            return queryClient.invalidateQueries(['courses']);
        },
    });

    return mutation;
};

