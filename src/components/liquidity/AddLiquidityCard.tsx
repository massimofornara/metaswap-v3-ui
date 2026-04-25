"use client";

import { useState } from "react";
import { addLiquidity } from "@/lib/web3";

export default function AddLiquidityCard() {
  const [tokenA, setTokenA] = useState("");
  const [tokenB, setTokenB] = useState("");
  const [amountA, setAmountA] = useState("");
  const [amountB, setAmountB] = useState("");

  async function handleAdd() {
    try {
      await addLiquidity(tokenA, tokenB, amountA, amountB);
      alert("Liquidità aggiunta con successo");
    } catch (err) {
      console.error(err);
      alert("Errore nell'aggiunta della liquidità");
    }
  }

  return (
    <div className="p-4 border border-zinc-800 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add Liquidity</h2>

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
        placeholder="Amount A"
        value={amountA}
        onChange={(e) => setAmountA(e.target.value)}
      />

      <input
        className="w-full p-2 mb-2 bg-zinc-900 border border-zinc-700 rounded"
        placeholder="Amount B"
        value={amountB}
        onChange={(e) => setAmountB(e.target.value)}
      />

      <button
        onClick={handleAdd}
        className="w-full p-2 bg-green-600 rounded mt-2"
      >
        Add Liquidity
      </button>
    </div>
  );
}
