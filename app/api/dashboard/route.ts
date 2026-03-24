import { supabase } from "../../lib/supabase";

export async function GET() {
  const { count: goalsCount } = await supabase
    .from("goals")
    .select("*", { count: "exact", head: true });

  const { count: tasksCount } = await supabase
    .from("tasks")
    .select("*", { count: "exact", head: true });

  const { data: progressData } = await supabase
    .from("progress")
    .select("score");

  const avgProgress =
    progressData && progressData.length > 0
      ? Math.round(
          progressData.reduce((a, b) => a + b.score, 0) /
            progressData.length
        )
      : 0;

  return Response.json({
    goals: goalsCount || 0,
    tasks: tasksCount || 0,
    progress: avgProgress,
  });
}