"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { useSwap } from "@/hooks/useSwap";
import { CONTRACTS } from "@/lib/contracts";
import { notifyError } from "@/lib/notify";

export default function SwapCard() {
  const { isConnected } = useAccount();
  const { swap } = useSwap();

  const [tokenIn, setTokenIn] =
    useState<keyof typeof CONTRACTS.tokens>("ETH");
  const [tokenOut, setTokenOut] =
    useState<keyof typeof CONTRACTS.tokens>("USDT");
  const [amount, setAmount] = useState("");

  async function handleSwap() {
    try {
      if (!amount) {
        notifyError("Insert a valid amount");
        return;
      }

      await swap(
        CONTRACTS.tokens[tokenIn],
        CONTRACTS.tokens[tokenOut],
        BigInt(Math.floor(Number(amount) * 1e18))
      );
    } catch {
      notifyError("Swap failed");
    }
  }

  return (
    <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Swap</h2>

      <div className="space-y-3 mb-4">
        <label className="text-gray-300 text-sm">From</label>
        <select
          value={tokenIn}
          onChange={(e) =>
            setTokenIn(e.target.value as keyof typeof CONTRACTS.tokens)
          }
          className="w-full bg-gray-800 p-3 rounded-lg"
        >
          {Object.keys(CONTRACTS.tokens).map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-gray-800 p-3 rounded-lg"
        />
      </div>

      <div className="space-y-3 mb-4">
        <label className="text-gray-300 text-sm">To</label>
        <select
          value={tokenOut}
          onChange={(e) =>
            setTokenOut(e.target.value as keyof typeof CONTRACTS.tokens)
          }
          className="w-full bg-gray-800 p-3 rounded-lg"
        >
          {Object.keys(CONTRACTS.tokens).map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <button
        disabled={!isConnected}
        onClick={handleSwap}
        className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
      >
        {isConnected ? "Swap" : "Connect Wallet"}
      </button>
    </div>
  );
}
