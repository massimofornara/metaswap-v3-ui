"use client";

import { ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, bsc, polygon } from "wagmi/chains";

<<<<<<< HEAD
export function Web3Provider({ children }: { children: ReactNode }) {
=======
const queryClient = new QueryClient();

export const wagmiConfig = getDefaultConfig({
  appName: "MetaSwap V3",
  projectId: "YOUR_WALLETCONNECT_PROJECT_ID",
  chains: [mainnet, bsc, polygon],
  ssr: false,
});

export default function WalletProvider({ children }) {
>>>>>>> ae87680 (DEX fully fixed)
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
