"use client";

const POOLS = [
  {
    address: "0x34934efce35a8e2aEdF70B17C992fd3E964D7BF3",
    name: "GHOST / NENO #1",
  },
  {
    address: "0xf987fEE140Fe144C7e1767710d01031f0f4DF907",
    name: "GHOST / NENO #2",
  },
  {
    address: "0x7d39A3fEf09754378B156883FB3c5397F26f8380",
    name: "GHOST / NENO #3",
  },
];

export default function PoolList() {
  return (
    <div className="p-4 border border-zinc-800 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Pools</h2>

      {POOLS.map((p) => (
        <div
          key={p.address}
          className="p-3 mb-2 bg-zinc-900 border border-zinc-700 rounded"
        >
          <p className="font-semibold">{p.name}</p>
          <p className="text-sm text-zinc-400">{p.address}</p>
        </div>
      ))}
    </div>
  );
}
