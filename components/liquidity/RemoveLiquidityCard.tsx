"use client";

import { useState } from "react";
import { removeLiquidity } from "@/lib/web3";

export default function RemoveLiquidityCard() {
  const [tokenA, setTokenA] = useState("");
  const [tokenB, setTokenB] = useState("");
  const [lpAmount, setLpAmount] = useState("");

  async function handleRemove() {
    try {
      await removeLiquidity(tokenA, tokenB, lpAmount);
      alert("Liquidità rimossa con successo");
    } catch (err) {
      console.error(err);
      alert("Errore nella rimozione della liquidità");
    }
  }

  return (
    <div className="p-4 border border-zinc-800 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Remove Liquidity</h2>

      <input
        className="w-full p-2 mb-2 bg-zinc-900 border border-zinc-700 rounded"
        placeholder="Token A address"
        value={tokenA}
        onChange={(e) => setTokenA(e.target.value)}
      />

      <input
        className="w-full p-2 mb-2 bg-zinc-900 border border-zinc-700 rounded"
        placeholder="Token B address"
        value={tokenB}
        onChange={(e) => setTokenB(e.target.value)}
      />

      <input
        className="w-full p-2 mb-2 bg-zinc-900 border border-zinc-700 rounded"
        placeholder="LP amount"
        value={lpAmount}
        onChange={(e) => setLpAmount(e.target.value)}
      />

      <button
        onClick={handleRemove}
        className="w-full p-2 bg-red-600 rounded mt-2"
      >
        Remove Liquidity
      </button>
    </div>
  );
}
