"use client";

import { SwapCard } from "@/components/swap/SwapCard";
import { TrendingPools } from "@/components/TrendingPools";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Swap Tokens</h2>
          <SwapCard />
        </div>
      </div>
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Trending Pools</h2>
        <TrendingPools />
      </div>
    </div>
  );
}
