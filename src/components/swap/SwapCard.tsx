"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function SwapCard() {
  const { isConnected } = useAccount();
  const [tokenIn, setTokenIn] = useState("");
  const [tokenOut, setTokenOut] = useState("");
  const [amountIn, setAmountIn] = useState("");

  return (
    <div className="space-y-4">
      <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
        <label className="block text-sm font-medium mb-2">From</label>
        <input
          type="text"
          placeholder="0.0"
          value={amountIn}
          onChange={(e) => setAmountIn(e.target.value)}
          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
        />
        <select
          value={tokenIn}
          onChange={(e) => setTokenIn(e.target.value)}
          className="w-full mt-2 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
        >
          <option value="">Select token</option>
          <option value="WBNB">WBNB</option>
          <option value="USDT">USDT</option>
          <option value="GHOST">GHOST</option>
          <option value="NENO">NENO</option>
        </select>
      </div>

      <div className="flex justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 rounded-full p-2 transition">
          ⇅
        </button>
      </div>

      <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
        <label className="block text-sm font-medium mb-2">To</label>
        <input
          type="text"
          placeholder="0.0"
          disabled
          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 opacity-50"
        />
        <select
          value={tokenOut}
          onChange={(e) => setTokenOut(e.target.value)}
          className="w-full mt-2 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
        >
          <option value="">Select token</option>
          <option value="WBNB">WBNB</option>
          <option value="USDT">USDT</option>
          <option value="GHOST">GHOST</option>
          <option value="NENO">NENO</option>
        </select>
      </div>

      <div className="pt-4">
        {isConnected ? (
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg py-3 font-semibold transition">
            Swap
          </button>
        ) : (
          <ConnectButton />
        )}
      </div>
    </div>
  );
}
