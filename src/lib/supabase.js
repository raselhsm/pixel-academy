import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Read before createClient, which consumes the URL hash of a password-reset link.
export const openedFromResetLink = typeof window !== 'undefined' && window.location.hash.includes('type=recovery');

// Null until the project's keys are set in .env, so pages can fall back gracefully.
export const supabase = url && key ? createClient(url, key) : null;
