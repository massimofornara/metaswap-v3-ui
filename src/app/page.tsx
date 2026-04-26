"use client";

export const runtime = "edge";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = false;

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
      {/* ... */}
    </main>
  );
}
