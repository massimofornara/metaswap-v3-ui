"use client";

import { useState } from "react";
import { getProvider } from "@/lib/web3";
import Link from "next/link";

export default function Header() {
  const [account, setAccount] = useState<string | null>(null);

  async function connect() {
    try {
      const provider = await getProvider();
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      setAccount(addr);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur flex items-center justify-between px-6 py-4">
      <Link href="/" className="text-lg font-semibold text-sky-400">
        MetaSwap V3 PRO
      </Link>
      <nav className="hidden md:flex gap-6 text-sm text-slate-300">
        <Link href="/" className="hover:text-white">Swap</Link>
        <Link href="/pools" className="hover:text-white">Pools</Link>
        <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
      </nav>
      <button
        onClick={connect}
        className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-sm font-medium"
      >
        {account
          ? account.slice(0, 6) + "..." + account.slice(-4)
          : "Connect Wallet"}
      </button>
    </header>
  );
}
