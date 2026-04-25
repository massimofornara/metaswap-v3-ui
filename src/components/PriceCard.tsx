"use client";

import { useState } from "react";
import { getPrice } from "@/lib/web3";

export default function PriceCard() {
  const [tokenA, setTokenA] = useState("");
  const [tokenB, setTokenB] = useState("");
  const [price, setPrice] = useState<number | null>(null);

  async function handleGetPrice() {
    try {
      const p = await getPrice(tokenA as '0x${string}', tokenB as '0x${string}');
      setPrice(p);
    } catch (err) {
      console.error(err);
      alert("Errore nel recupero del prezzo");
    }
  }

  return (
    <div className="p-4 border border-zinc-800 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Get Price</h2>

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

      <button
        onClick={handleGetPrice}
        className="w-full p-2 bg-blue-600 rounded mt-2"
      >
        Get Price
      </button>

      {price !== null && (
        <p className="mt-4">Prezzo: {price.toString()}</p>
      )}
    </div>
  );
}
