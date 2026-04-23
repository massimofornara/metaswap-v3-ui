"use client";

import { useState } from "react";
import { removeLiquidity } from "@/lib/web3";

export default function RemoveLiquidityCard() {
  const [tokenA, setTokenA] = useState("");
  const [tokenB, setTokenB] = useState("");
  const [liquidity, setLiquidity] = useState("");
  const [decLP, setDecLP] = useState("18");
  const [status, setStatus] = useState("");

  async function handleRemove() {
    try {
      setStatus("Removing...");
      const receipt = await removeLiquidity(
        tokenA,
        tokenB,
        liquidity,
        Number(decLP)
      );
      setStatus("Remove OK: " + receipt.hash);
    } catch (e: any) {
      setStatus("Errore: " + e.message);
    }
  }

  return (
    <div className="card">
      <h2 className="card-title">Remove Liquidity</h2>
      <input className="input" placeholder="Token A" value={tokenA} onChange={e=>setTokenA(e.target.value)} />
      <input className="input" placeholder="Token B" value={tokenB} onChange={e=>setTokenB(e.target.value)} />
      <input className="input" placeholder="Liquidity amount" value={liquidity} onChange={e=>setLiquidity(e.target.value)} />
      <input className="input" placeholder="Decimals LP" value={decLP} onChange={e=>setDecLP(e.target.value)} />
      <button onClick={handleRemove} className="btn bg-red-500 hover:bg-red-400">
        Remove
      </button>
      <p className="status">{status}</p>
    </div>
  );
}
