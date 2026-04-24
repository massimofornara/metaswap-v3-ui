"use client";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Registrazione moduli Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

export default function TVLChart() {
  const [tvlData, setTvlData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    // Esempio di dati reali simulati (in produzione li prenderai dalla tua Factory)
    const days = 14;
    const base = 12_500_000; // TVL reale di un DEX medio su BSC
    const generated = Array.from({ length: days }, (_, i) => {
      const variation = Math.sin(i / 2) * 250_000;
      return Math.round(base + variation);
    });

    setTvlData(generated);
    setLabels(
      Array.from({ length: days }, (_, i) => `Day ${i + 1}`)
    );
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Total Value Locked (TVL)",
        data: tvlData,
        borderColor: "rgba(0, 200, 255, 1)",
        backgroundColor: "rgba(0, 200, 255, 0.2)",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.35,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "#111",
        borderColor: "#333",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: "#aaa" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
      y: {
        ticks: { color: "#aaa" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
    },
  };

  return (
    <div className="w-full p-4 border border-gray-800 rounded-xl bg-black/40 backdrop-blur">
      <h2 className="text-lg font-bold mb-3">TVL (Total Value Locked)</h2>
      <Line data={data} options={options} />
    </div>
  );
}
