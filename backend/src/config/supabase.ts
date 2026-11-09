import { createClient } from '@supabase/supabase-js';
import { env } from './env';

// Cliente con la secret key: ignora RLS. Solo se usa en el backend.
export const supabase = createClient(env.supabaseUrl, env.supabaseSecretKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});
