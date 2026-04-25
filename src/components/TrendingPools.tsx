"use client";

import { CONTRACTS } from "@/lib/contracts";

const pools = [
  {
    name: "ETH / USDT",
    address: "0x34934efce35a8e2aEdF70B17C992fd3E964D7BF3",
    apr: 24.3,
    tvl: 320_000,
  },
  {
    name: "ETH / BTC",
    address: "0x0000000000000000000000000000000000000000",
    apr: 18.7,
    tvl: 210_000,
  },
  {
    name: "USDT / BTC",
    address: "0x0000000000000000000000000000000000000000",
    apr: 15.1,
    tvl: 150_000,
  },
];

export function TrendingPools() {
  return (
    <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Trending Pools</h2>

      <div className="space-y-3">
        {pools.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-between bg-gray-800/70 px-4 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-xs text-gray-400 break-all">
                {p.address}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-green-400 font-semibold">
                {p.apr}% APR
              </p>
              <p className="text-xs text-gray-400">
                TVL ${p.tvl.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingPools;
