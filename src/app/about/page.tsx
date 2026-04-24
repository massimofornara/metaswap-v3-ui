import type { Metadata } from "next";
import { Populations } from "@/components/Populations";

export const metadata: Metadata = {
  title: "About",
  description: "Informazioni sul progetto MetaSwap V3",
};

export default function AboutPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About MetaSwap V3</h1>

      <p className="text-lg mb-6">
        MetaSwap V3 è un progetto decentralizzato che permette lo swap di token
        con un'interfaccia moderna e un'architettura basata su Next.js 14 e
        App Router.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Populations</h2>
        <Populations />
      </section>
    </main>
  );
}
