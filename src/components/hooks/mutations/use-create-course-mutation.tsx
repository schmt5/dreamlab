/* import { useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from "../../../supabase/supabaseClient";

type Course = {
    name: string;
    description: string;
}

const insertCourse = async (newCourse: Course) => {
    const { data } = await supabase
        .from('courses')
        .insert([
            { name: newCourse.name, description: newCourse.description }
        ])
        .select('*');

    return data;
}

export const useCreateCourseMutation = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (newCourse: Course) => insertCourse(newCourse),
        onSuccess: () => {
            return queryClient.invalidateQueries(['courses']);
        },
    });

    return mutation;
};

 */