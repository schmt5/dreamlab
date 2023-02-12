import { useQuery } from '@tanstack/react-query'
import { supabase } from "../../../supabase/supabaseClient";

type Course = {
    id: string;
    name: string;
    description: string;
}

const fetchCourses = async (): Promise<Course[]> => {
    const { data, error, status } = await supabase
        .from('courses')
        .select('*')

    if (error && status !== 406) {
        throw error
    }

    if (data !== null) {
        return data;
    } else {
        return [];
    }
}

export const useCoursesQuery = () => {
    const query = useQuery({
        queryKey: ['courses'],
        queryFn: fetchCourses,
    });

    return query;
}
