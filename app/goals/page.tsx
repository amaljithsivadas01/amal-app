"use client";

import { useEffect, useState } from "react";

type Goal = {
  id: string;
  title: string;
  description: string;
};

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGoals = () => {
    fetch("/api/goals/list")
      .then((res) => res.json())
      .then((data) => {
        setGoals(data || []);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold">Goals</h2>
        <p className="text-zinc-500">Track and manage your goals</p>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-zinc-500">Loading...</p>
      )}

      {/* Empty state */}
      {!loading && goals.length === 0 && (
        <div className="bg-zinc-50 rounded-2xl p-6 text-center">
          <p className="text-zinc-500">No goals yet</p>
        </div>
      )}

      {/* Goals list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {goals.map((goal) => (
          <div
            key={goal.id}
            className="bg-zinc-50 rounded-2xl p-5 shadow-sm space-y-2"
          >
            <h3 className="font-semibold text-lg">
              {goal.title}
            </h3>

            <p className="text-sm text-zinc-500">
              {goal.description || "No description"}
            </p>

            {/* Future actions */}
            <div className="flex gap-2 pt-2 text-sm">

              <button className="px-3 py-1 rounded-lg border">
                View
              </button>

              <button className="px-3 py-1 rounded-lg border">
                Edit
              </button>

              <button className="px-3 py-1 rounded-lg border text-red-500">
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}