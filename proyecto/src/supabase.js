// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fkbuvtjidxcshduvdmrw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrYnV2dGppZHhjc2hkdXZkbXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MzgxOTQsImV4cCI6MjA2MzAxNDE5NH0.BQVKwBrqUOeLHaq1J20HCU5F_BDIaxS_Prv_OMA9H3A';
export const supabase = createClient(supabaseUrl, supabaseKey);