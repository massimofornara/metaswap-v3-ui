import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Web3Provider } from "@/providers/wallet";

// (opzionale) se usi un font da next/font:
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaSwap V3 PRO | Next‑Gen DEX",
  description:
    "MetaSwap V3 PRO è un DEX di nuova generazione con swap ultra‑veloci, liquidità dinamica e analytics avanzati.",
  openGraph: {
    title: "MetaSwap V3 PRO",
    description:
      "Il DEX di nuova generazione per trader e LP professionali.",
    url: "https://metaswap-v3-pro.xyz",
    siteName: "MetaSwap V3 PRO",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MetaSwap V3 PRO",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MetaSwap V3 PRO",
    description:
      "DEX avanzato con swap, liquidity, pools e analytics.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        // className={inter.className} // se usi il font Inter
        className="bg-black text-white antialiased"
      >
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
