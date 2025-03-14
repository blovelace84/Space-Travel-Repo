// frontend/src/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL; // Get from environment variables
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY; // Get from environment variables

export const supabase = createClient(supabaseUrl, supabaseAnonKey);