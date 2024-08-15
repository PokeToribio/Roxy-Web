// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qiasvyigtpxlonlmrais.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpYXN2eWlndHB4bG9ubG1yYWlzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1MDE0ODY0NCwiZXhwIjoxOTY1NzI0NjQ0fQ.uNH0l1O2EWnpzl5AK5aaAODk1fZVZqSyEzzp5VUrWIE';
export const supabase = createClient(supabaseUrl, supabaseKey);