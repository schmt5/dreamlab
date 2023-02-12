
import { useQuery } from '@tanstack/react-query'
import { supabase } from "../../../supabase/supabaseClient";

type Course = {
    id: string;
    name: string;
    description: string;
}

const fetchCourseById = async (id: string): Promise<Course | null> => {
    const { data, error, status } = await supabase
        .from('courses')
        .select('*')
        .eq('id', id)

    if (error && status !== 406) {
        throw error
    }

    if (data !== null) {
        return data[0];
    } else {
        return null;
    }
}

export const useCourseById = (id: string) => {
    const query = useQuery({
        queryKey: ['course'],
        queryFn: () => fetchCourseById(id),
    });

    return query;
}
