"use client";

export const runtime = "edge";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = false;

import PortfolioCard from "@/components/portfolio/PortfolioCard";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Il tuo Portafoglio</h1>
      <PortfolioCard />
    </main>
  );
}
