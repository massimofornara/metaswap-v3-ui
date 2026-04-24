"use client";

const data = [
  { day: "Mon", tvl: 120 },
  { day: "Tue", tvl: 150 },
  { day: "Wed", tvl: 180 },
  { day: "Thu", tvl: 210 },
  { day: "Fri", tvl: 260 },
  { day: "Sat", tvl: 240 },
  { day: "Sun", tvl: 300 },
];

export default function TVLChart() {
  return (
    <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">TVL (7d)</h2>
      <div className="flex items-end gap-2 h-40">
        {data.map((p) => (
          <div key={p.day} className="flex flex-col items-center flex-1">
            <div
              className="w-full bg-gradient-to-t from-indigo-500 to-cyan-400 rounded-t-lg"
              style={{ height: `${(p.tvl / 300) * 100}%` }}
            />
            <span className="text-xs text-gray-400 mt-1">{p.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
