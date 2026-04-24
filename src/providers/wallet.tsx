"use client";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { mainnet, arbitrum, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { ReactNode, useState, useEffect } from "react";

export function Web3Provider({ children }: { children: ReactNode }) {
  const { chains, publicClient } = configureChains(
    [mainnet, arbitrum, polygon],
    [publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "MetaSwap V3",
    projectId: "db09f6e8f7037375cf358b80a439a8f5",
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={{
          lightMode: lightTheme(),
          darkMode: darkTheme(),
        }}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
