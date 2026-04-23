"use client";

import { useState } from "react";
import { getPrice } from "@/lib/web3";

export default function PriceCard() {
  const [tokenA, setTokenA] = useState("");
  const [tokenB, setTokenB] = useState("");
  const [price, setPrice] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  async function handleGetPrice() {
    try {
      setStatus("Caricamento...");
      const p = await getPrice(tokenA, tokenB);
      setPrice(p.toString());
      setStatus("");
    } catch (e: any) {
      setStatus("Errore: " + e.message);
    }
  }

  return (
    <div className="card">
      <h2 className="card-title">Price</h2>
      <input className="input" placeholder="Token A" value={tokenA} onChange={e=>setTokenA(e.target.value)} />
      <input className="input" placeholder="Token B" value={tokenB} onChange={e=>setTokenB(e.target.value)} />
      <button onClick={handleGetPrice} className="btn bg-emerald-500 hover:bg-emerald-400">
        Get Price
      </button>
      {price && <p className="status">Price raw: {price}</p>}
      {status && <p className="status">{status}</p>}
    </div>
  );
}
