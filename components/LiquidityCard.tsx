"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { useLiquidity } from "@/hooks/useLiquidity";
import { CONTRACTS } from "@/lib/contracts";
import { notifyError } from "@/lib/notify";

export default function LiquidityCard() {
  const { isConnected } = useAccount();
  const { addLiquidity } = useLiquidity();

  const [tokenA, setTokenA] = useState<keyof typeof CONTRACTS.tokens>("ETH");
  const [tokenB, setTokenB] = useState<keyof typeof CONTRACTS.tokens>("USDT");

  const [amountA, setAmountA] = useState("");
  const [amountB, setAmountB] = useState("");

  async function handleAdd() {
    try {
      if (!amountA || !amountB) {
        notifyError("Insert valid amounts");
        return;
      }

      await addLiquidity(
        CONTRACTS.tokens[tokenA],
        CONTRACTS.tokens[tokenB],
        BigInt(Math.floor(Number(amountA) * 1e18)),
        BigInt(Math.floor(Number(amountB) * 1e18))
      );
    } catch (err) {
      notifyError("Add liquidity failed");
    }
  }

  return (
    <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Add Liquidity</h2>

      {/* TOKEN A */}
      <div className="space-y-2 mb-4">
        <label className="text-gray-300">Token A</label>
        <select
          value={tokenA}
          onChange={(e) =>
            setTokenA(e.target.value as keyof typeof CONTRACTS.tokens)
          }
          className="w-full bg-gray-800 p-3 rounded-lg"
        >
          {Object.keys(CONTRACTS.tokens).map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Amount A"
          value={amountA}
          onChange={(e) => setAmountA(e.target.value)}
          className="w-full bg-gray-800 p-3 rounded-lg"
        />
      </div>

      {/* TOKEN B */}
      <div className="space-y-2 mb-4">
        <label className="text-gray-300">Token B</label>
        <select
          value={tokenB}
          onChange={(e) =>
            setTokenB(e.target.value as keyof typeof CONTRACTS.tokens)
          }
          className="w-full bg-gray-800 p-3 rounded-lg"
        >
          {Object.keys(CONTRACTS.tokens).map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Amount B"
          value={amountB}
          onChange={(e) => setAmountB(e.target.value)}
          className="w-full bg-gray-800 p-3 rounded-lg"
        />
      </div>

      {/* BUTTON */}
      <button
        disabled={!isConnected}
        onClick={handleAdd}
        className="w-full mt-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold"
      >
        {isConnected ? "Add Liquidity" : "Connect Wallet"}
      </button>
    </div>
  );
}
