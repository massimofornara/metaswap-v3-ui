"use client";

import { useState } from "react";
import {
  addLiquidity,
  approveToken,
  checkAllowance
} from "@/lib/web3";
import { parseUnits } from "ethers";

export default function LiquidityCard() {
  const [tokenA, setTokenA] = useState("");
  const [tokenB, setTokenB] = useState("");
  const [amountA, setAmountA] = useState("");
  const [amountB, setAmountB] = useState("");
  const [decA, setDecA] = useState("18");
  const [decB, setDecB] = useState("18");
  const [needsApprovalA, setNeedsApprovalA] = useState(false);
  const [needsApprovalB, setNeedsApprovalB] = useState(false);
  const [status, setStatus] = useState("");

  async function check() {
    try {
      if (!window.ethereum) return;
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      const account = accounts[0];
      const amountAWei = parseUnits(amountA || "0", Number(decA));
      const amountBWei = parseUnits(amountB || "0", Number(decB));
      const approvedA = await checkAllowance(tokenA, account, amountAWei);
      const approvedB = await checkAllowance(tokenB, account, amountBWei);
      setNeedsApprovalA(!approvedA);
      setNeedsApprovalB(!approvedB);
      setStatus("Check completato");
    } catch {
      setStatus("Errore nel check");
    }
  }

  async function approveA() {
    try {
      setStatus("Approving A...");
      const amountAWei = parseUnits(amountA, Number(decA));
      await approveToken(tokenA, amountAWei);
      setNeedsApprovalA(false);
      setStatus("Token A approvato");
    } catch {
      setStatus("Errore approvazione A");
    }
  }

  async function approveB() {
    try {
      setStatus("Approving B...");
      const amountBWei = parseUnits(amountB, Number(decB));
      await approveToken(tokenB, amountBWei);
      setNeedsApprovalB(false);
      setStatus("Token B approvato");
    } catch {
      setStatus("Errore approvazione B");
    }
  }

  async function handleAdd() {
    try {
      setStatus("Adding liquidity...");
      const receipt = await addLiquidity(
        tokenA,
        tokenB,
        amountA,
        amountB,
        Number(decA),
        Number(decB)
      );
      setStatus("Liquidity OK: " + receipt.hash);
    } catch (e: any) {
      setStatus("Errore: " + e.message);
    }
  }

  return (
    <div className="card">
      <h2 className="card-title">Add Liquidity</h2>

      <input className="input" placeholder="Token A" value={tokenA} onChange={e=>setTokenA(e.target.value)} />
      <input className="input" placeholder="Amount A" value={amountA} onChange={e=>setAmountA(e.target.value)} />
      <input className="input" placeholder="Decimals A" value={decA} onChange={e=>setDecA(e.target.value)} />

      <input className="input" placeholder="Token B" value={tokenB} onChange={e=>setTokenB(e.target.value)} />
      <input className="input" placeholder="Amount B" value={amountB} onChange={e=>setAmountB(e.target.value)} />
      <input className="input" placeholder="Decimals B" value={decB} onChange={e=>setDecB(e.target.value)} />

      <button onClick={check} className="btn">Check</button>

      {needsApprovalA && (
        <button onClick={approveA} className="btn bg-yellow-500 hover:bg-yellow-400">
          Approve A
        </button>
      )}
      {needsApprovalB && (
        <button onClick={approveB} className="btn bg-yellow-500 hover:bg-yellow-400">
          Approve B
        </button>
      )}

      {!needsApprovalA && !needsApprovalB && (
        <button onClick={handleAdd} className="btn bg-sky-500 hover:bg-sky-400">
          Add Liquidity
        </button>
      )}

      <p className="status">{status}</p>
    </div>
  );
}
