"use client";

import AddLiquidityCard from "./AddLiquidityCard";
import RemoveLiquidityCard from "./RemoveLiquidityCard";

export default function LiquidityCard() {
  return (
    <div className="grid gap-4">
      <AddLiquidityCard />
      <RemoveLiquidityCard />
    </div>
  );
}
