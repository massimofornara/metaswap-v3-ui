"use client";

import { useState } from "react";
import {
  swapExactTokensForTokens,
  approveToken,
  checkAllowance
} from "@/lib/web3";
import { parseUnits } from "ethers";

export default function SwapCard() {
  const [tokenIn, setTokenIn] = useState("");
  const [tokenOut, setTokenOut] = useState("");
  const [amountIn, setAmountIn] = useState("");
  const [decimalsIn, setDecimalsIn] = useState("18");
  const [needsApproval, setNeedsApproval] = useState(false);
  const [status, setStatus] = useState("");

  async function check() {
    try {
      if (!window.ethereum) return;
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      const account = accounts[0];
      const amountWei = parseUnits(amountIn || "0", Number(decimalsIn));
      const approved = await checkAllowance(tokenIn, account, amountWei);
      setNeedsApproval(!approved);
      setStatus(approved ? "Già approvato" : "Serve approvazione");
    } catch {
      setStatus("Errore nel check");
    }
  }

  async function handleApprove() {
    try {
      setStatus("Approving...");
      const amountWei = parseUnits(amountIn, Number(decimalsIn));
      await approveToken(tokenIn, amountWei);
      setNeedsApproval(false);
      setStatus("Approved");
    } catch {
      setStatus("Errore approvazione");
    }
  }

  async function handleSwap() {
    try {
      setStatus("Swapping...");
      const receipt = await swapExactTokensForTokens(
        tokenIn,
        tokenOut,
        amountIn,
        Number(decimalsIn)
      );
      setStatus("Swap OK: " + receipt.hash);
    } catch (e: any) {
      if (e.message?.includes("NEEDS_APPROVAL")) {
        setNeedsApproval(true);
        setStatus("Serve approvazione");
      } else {
        setStatus("Errore: " + e.message);
      }
    }
  }

  return (
    <div className="card">
      <h2 className="card-title">Swap</h2>

      <input className="input" placeholder="Token In" value={tokenIn} onChange={e=>setTokenIn(e.target.value)} />
      <input className="input" placeholder="Token Out" value={tokenOut} onChange={e=>setTokenOut(e.target.value)} />
      <input className="input" placeholder="Amount" value={amountIn} onChange={e=>setAmountIn(e.target.value)} />
      <input className="input" placeholder="Decimals" value={decimalsIn} onChange={e=>setDecimalsIn(e.target.value)} />

      <button onClick={check} className="btn">Check</button>

      {needsApproval ? (
        <button onClick={handleApprove} className="btn bg-yellow-500 hover:bg-yellow-400">
          Approve
        </button>
      ) : (
        <button onClick={handleSwap} className="btn bg-sky-500 hover:bg-sky-400">
          Swap
        </button>
      )}

      <p className="status">{status}</p>
    </div>
  );
}

