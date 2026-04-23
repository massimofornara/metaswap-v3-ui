"use client";

import { useEffect, useState } from "react";
import { getTokenBalance, getProvider } from "@/lib/web3";

const TOKENS = [
  { symbol: "NENO", address: "0xeF3F5C1892A8d7A3304E4A15959E124402d69974", decimals: 18 },
  { symbol: "GHOST", address: "0x66f2ee37e3ee54ba399e25cB6429A8a42B2b7a8f", decimals: 18 },
  { symbol: "USDT", address: "0x55d398326f99059fF775485246999027B3197955", decimals: 18 }
];

export default function PortfolioCard() {
  const [account, setAccount] = useState<string | null>(null);
  const [balances, setBalances] = useState<Record<string, number>>({});
  const [status, setStatus] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const provider = await getProvider();
        const signer = await provider.getSigner();
        const addr = await signer.getAddress();
        setAccount(addr);

        const result: Record<string, number> = {};
        for (const t of TOKENS) {
          const bal = await getTokenBalance(t.address, addr, t.decimals);
          result[t.symbol] = bal;
        }
        setBalances(result);
      } catch (e: any) {
        setStatus("Errore: " + e.message);
      }
    })();
  }, []);

  return (
    <div className="card">
      <h2 className="card-title">Portfolio</h2>
      {account && (
        <p className="text-xs text-slate-400 mb-2">
          Account: {account.slice(0, 6)}...{account.slice(-4)}
        </p>
      )}
      {Object.keys(balances).length === 0 && !status && (
        <p className="status">Caricamento...</p>
      )}
      {status && <p className="status">{status}</p>}
      <ul className="mt-2 space-y-1 text-sm">
        {TOKENS.map((t) => (
          <li key={t.symbol} className="flex justify-between">
            <span>{t.symbol}</span>
            <span>{balances[t.symbol] ?? 0}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
