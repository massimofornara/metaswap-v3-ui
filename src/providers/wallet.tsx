"use client";

import { ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { wagmiConfig } from "@/wagmiConfig";

export function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <RainbowKitProvider>
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
