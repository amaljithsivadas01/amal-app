import { supabase } from "@/app/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("test")
    .select("*");

  return Response.json({
    data,
    error,
  });
}