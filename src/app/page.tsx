import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import SwapCard from "@/components/swap/SwapCard";
import LiquidityCard from "@/components/liquidity/LiquidityCard";
import PoolsCard from "@/components/pools/PoolsCard";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import TrendingPools from "@/components/pools/TrendingPools";
import TVLChart from "@/components/analytics/TVLChart";
import VolumeChart from "@/components/analytics/VolumeChart";
import RecentTransactions from "@/components/transactions/RecentTransactions";
import UserPositions from "@/components/positions/UserPositions";
import Leaderboard from "@/components/leaderboard/Leaderboard";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />

      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SwapCard />
        <LiquidityCard />
        <PoolsCard />
        <PortfolioCard />
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <TVLChart />
        <VolumeChart />
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <TrendingPools />
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <RecentTransactions />
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <UserPositions />
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <Leaderboard />
      </section>

      <Footer />
    </main>
  );
}


