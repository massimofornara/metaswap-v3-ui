"use client";

import { useState } from "react";
import { swapTokens } from "@/lib/web3";

export default function SwapCard() {
  const [tokenIn, setTokenIn] = useState("");
  const [tokenOut, setTokenOut] = useState("");
  const [amountIn, setAmountIn] = useState("");

  async function handleSwap() {
    try {
      await swapTokens(tokenIn as `0x${string}`, tokenOut as `0x${string}`, BigInt(amountIn));
      alert("Swap eseguito con successo");
    } catch (err) {
      console.error(err);
      alert("Errore nello swap");
    }
  }

  return (
    <div className="p-4 border border-zinc-800 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Swap</h2>

      <input
        className="w-full p-2 mb-2 bg-zinc-900 border border-zinc-700 rounded"
        placeholder="Token In"
        value={tokenIn}
        onChange={(e) => setTokenIn(e.target.value)}
      />

      <input
        className="w-full p-2 mb-2 bg-zinc-900 border border-zinc-700 rounded"
        placeholder="Token Out"
        value={tokenOut}
        onChange={(e) => setTokenOut(e.target.value)}
      />

      <input
        className="w-full p-2 mb-2 bg-zinc-900 border border-zinc-700 rounded"
        placeholder="Amount In"
        value={amountIn}
        onChange={(e) => setAmountIn(e.target.value)}
      />

      <button
        onClick={handleSwap}
        className="w-full p-2 bg-purple-600 rounded mt-2"
      >
        Swap
      </button>
    </div>
  );
}
