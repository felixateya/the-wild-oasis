import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xahdddtcpawwsrlqgrzy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhaGRkZHRjcGF3d3NybHFncnp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NDYxNjksImV4cCI6MjAxNTUyMjE2OX0.md3Cd-mV5ldK_hVAz3olZcd9sZb5V9mlnKvj7ogImT8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
