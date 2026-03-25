import { supabase } from "../../lib/supabase";

export async function POST(req: Request) {
  const body = await req.json();

  const { title, description } = body;

  if (!title) {
    return Response.json({ error: "Title required" }, { status: 400 });
  }

  const { error } = await supabase.from("goals").insert([
    {
      title,
      description,
    },
  ]);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}