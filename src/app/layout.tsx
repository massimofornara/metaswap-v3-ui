"use client";

export const runtime = "edge";

import QueryProvider from "@/providers/query";
import WalletProvider from "@/providers/wallet";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <QueryProvider>
            {children}
          </QueryProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
