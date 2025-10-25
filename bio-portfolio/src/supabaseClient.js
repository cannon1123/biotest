// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nugkonuaednqzhhxvptq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51Z2tvbnVhZWRucXpoaHh2cHRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyMTk5NDEsImV4cCI6MjA3MTc5NTk0MX0.tCNCVi-hmvz_cIbTqOUHgpmxKpy6epQ7v29Q7wj0kBU'

export const supabase = createClient(supabaseUrl, supabaseKey)
