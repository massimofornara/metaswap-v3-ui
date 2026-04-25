"use client";

import SwapCard from "@/components/swap/SwapCard";
import AddLiquidityCard from "@/components/liquidity/AddLiquidityCard";
import RemoveLiquidityCard from "@/components/liquidity/RemoveLiquidityCard";
import PoolList from "@/components/pools/PoolList";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import TrendingPools from "@/components/analytics/TrendingPools";
import TVLChart from "@/components/analytics/TVLChart";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative px-6 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 to-black pointer-events-none" />

        <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
          MetaSwap V3 PRO
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Il DEX di nuova generazione con liquidità dinamica, swap ultra‑veloci,
          analytics avanzati e integrazione Web3 completa.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#swap"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition"
          >
            Inizia a Swappare
          </a>
          <a
            href="#pools"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition"
          >
            Esplora le Pool
          </a>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-8 px-6 pb-24 max-w-7xl mx-auto">

        {/* LEFT COLUMN */}
        <div className="space-y-8">
          <div id="swap">
            <SwapCard />
          </div>

          {/* Add + Remove Liquidity */}
          <AddLiquidityCard />
          <RemoveLiquidityCard />
        </div>

        {/* CENTER COLUMN */}
        <div className="space-y-8">
          <div id="pools">
            <PoolList />
          </div>

          <TrendingPools />
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">
          <PortfolioCard />
          <TVLChart />
        </div>

      </section>
    </main>
  );
}
