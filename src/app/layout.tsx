import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "MetaSwap V3 PRO",
  description: "DEX stile GMX/Uniswap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-slate-950 text-slate-100 min-h-screen">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
