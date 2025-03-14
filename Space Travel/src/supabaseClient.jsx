// frontend/src/supabaseClient.js

import { createClient } from '@supabase/supabase-js';
console.log(import.meta.env);
const supabaseUrl = 'https://bhzlvzlupxxexmedcqpy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoemx2emx1cHh4ZXhtZWRjcXB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5MDg5MDYsImV4cCI6MjA1NzQ4NDkwNn0.QbBnv-LLdais3QsX4SEtjhr0s_2NijPo43xHu4XKDss'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);