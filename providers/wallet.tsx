"use client";

import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { wagmiConfig } from "@/wagmiConfig";

export function Web3Provider({ children }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <RainbowKitProvider>
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
