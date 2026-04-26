"use client";

export const runtime = "edge";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = false;

import PoolList from "@/components/pools/PoolList";

export default function PoolsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Pool disponibili</h1>
      <PoolList />
    </main>
  );
}
