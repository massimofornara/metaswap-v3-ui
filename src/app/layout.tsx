import type { Metadata } from "next";
import { Web3Provider } from "@/providers/wallet";
import "./globals.css";

export const metadata: Metadata = {
  title: "MetaSwap - Decentralized Exchange",
  description: "Trade tokens, manage liquidity, and earn on MetaSwap DEX",
  metadataBase: new URL("https://metaswap.railway.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
        <Web3Provider>
          <div className="flex flex-col min-h-screen">
            <header className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm sticky top-0 z-50">
              <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold">
                    MS
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    MetaSwap
                  </h1>
                </div>
                <nav className="flex gap-6">
                  <a href="/" className="hover:text-blue-400 transition">Swap</a>
                  <a href="/pools" className="hover:text-blue-400 transition">Pools</a>
                  <a href="/portfolio" className="hover:text-blue-400 transition">Portfolio</a>
                </nav>
              </div>
            </header>
            <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
              {children}
            </main>
            <footer className="border-t border-slate-700 bg-slate-800/50 mt-12">
              <div className="max-w-7xl mx-auto px-4 py-6 text-center text-slate-400 text-sm">
                <p>© 2026 MetaSwap. Decentralized Exchange Protocol.</p>
              </div>
            </footer>
          </div>
        </Web3Provider>
      </body>
    </html>
  );
}
