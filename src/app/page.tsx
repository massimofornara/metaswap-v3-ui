import SwapCard from "@/components/SwapCard";
import LiquidityCard from "@/components/LiquidityCard";
import PriceCard from "@/components/PriceCard";

export default function Home() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      <SwapCard />
      <LiquidityCard />
      <PriceCard />
    </div>
  );
}
