import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://estbykaejcaeysqnycpu.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzdGJ5a2FlamNhZXlzcW55Y3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NTIyNjYsImV4cCI6MjA1NTEyODI2Nn0.qoUf-X4LI7pGL9dydUDiR62Le0cATeqOAZaMH-ZqsH0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
