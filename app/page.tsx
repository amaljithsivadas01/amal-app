"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({
    goals: 0,
    tasks: 0,
    progress: 0,
  });

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

        <div>
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <p className="text-zinc-500">Your daily overview</p>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-xl w-full md:w-auto">
          + New Goal
        </button>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

        {/* Goals */}
        <div className="bg-zinc-50 rounded-2xl p-4 md:p-5 shadow-sm">
          <p className="text-sm text-zinc-500">Goals</p>
          <h3 className="text-3xl font-semibold mt-2">
            {data.goals}
          </h3>
        </div>

        {/* Tasks */}
        <div className="bg-zinc-50 rounded-2xl p-4 md:p-5 shadow-sm">
          <p className="text-sm text-zinc-500">Tasks Today</p>
          <h3 className="text-3xl font-semibold mt-2">
            {data.tasks}
          </h3>
        </div>

        {/* Progress */}
        <div className="bg-zinc-50 rounded-2xl p-4 md:p-5 shadow-sm">
          <p className="text-sm text-zinc-500">Progress</p>
          <h3 className="text-3xl font-semibold mt-2">
            {data.progress}%
          </h3>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

        {/* Activity */}
        <div className="bg-zinc-50 rounded-2xl p-4 md:p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <p className="text-zinc-500 text-sm">
            Coming soon...
          </p>
        </div>

        {/* Today */}
        <div className="bg-zinc-50 rounded-2xl p-4 md:p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Today</h3>
          <p className="text-zinc-500 text-sm">
            Coming soon...
          </p>
        </div>

      </div>

    </div>
  );
}