"use client";

import { CONTRACTS } from "@/lib/contracts";
import { usePool } from "@/hooks/usePool";

export default function PoolsCard() {
  const { reserve0, reserve1 } = usePool(CONTRACTS.pools.ETH_USDT);

  const tvl =
    Number(reserve0) / 1e18 + Number(reserve1) / 1e18;

  return (
    <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Pool ETH / USDT</h2>

      <div className="space-y-3">
        <div>
          <p className="text-gray-400">Reserve ETH:</p>
          <p className="text-xl font-semibold text-blue-400">
            {Number(reserve0) / 1e18}
          </p>
        </div>

        <div>
          <p className="text-gray-400">Reserve USDT:</p>
          <p className="text-xl font-semibold text-green-400">
            {Number(reserve1) / 1e18}
          </p>
        </div>

        <div>
          <p className="text-gray-400">TVL (approx):</p>
          <p className="text-xl font-semibold text-purple-400">
            {tvl.toFixed(2)}
          </p>
        </div>

        <div>
          <p className="text-gray-400">Pool Address:</p>
          <p className="font-mono text-sm text-yellow-400 break-all">
            {CONTRACTS.pools.ETH_USDT}
          </p>
        </div>
      </div>
    </div>
  );
}
