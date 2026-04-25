"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function TVLChart() {
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4"],
    datasets: [
      {
        label: "TVL",
        data: [1000, 1500, 1800, 2200],
        borderColor: "#4ade80",
        backgroundColor: "rgba(74, 222, 128, 0.3)",
      },
    ],
  };

  return (
    <div className="p-4 border border-zinc-800 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">TVL Chart</h2>
      <Line data={data} />
    </div>
  );
}
