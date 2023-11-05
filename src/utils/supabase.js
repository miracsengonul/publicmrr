import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ngkwvsaapylmxvbqsxlh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5na3d2c2FhcHlsbXh2YnFzeGxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4NzIzOTIsImV4cCI6MjAxNDQ0ODM5Mn0.T0w2nP6AmzAAJL8WzJiQb17wP28aSBgOwP1o4ySqctc",
);
