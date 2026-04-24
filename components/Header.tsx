"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-black/60 backdrop-blur">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400" />
        <div>
          <h1 className="text-xl font-bold">MetaSwap V3 PRO</h1>
          <p className="text-xs text-gray-400">Next‑gen cross‑asset DEX</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <nav className="hidden md:flex gap-4 text-sm text-gray-300">
          <span className="hover:text-white cursor-pointer">Swap</span>
          <span className="hover:text-white cursor-pointer">Pools</span>
          <span className="hover:text-white cursor-pointer">Portfolio</span>
          <span className="hover:text-white cursor-pointer">Analytics</span>
        </nav>
        <ConnectButton />
      </div>
    </header>
  );
}
