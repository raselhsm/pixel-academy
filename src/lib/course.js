import { supabase } from './supabase';

// Modules in order, each with its lessons in order. Students without access
// get empty lesson lists (the database only returns lessons to paid students).
export async function fetchCourseContent() {
  const { data, error } = await supabase
    .from('modules')
    .select('id, title, position, lessons(id, module_id, title, position, video_url, duration)')
    .order('position')
    .order('position', { referencedTable: 'lessons' });
  if (error) throw error;
  return data ?? [];
}
