// src/wagmiConfig.ts
import { createConfig, http } from "wagmi";
import { bsc } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [bsc],
  transports: {
    [bsc.id]: http("https://bsc-dataseed.binance.org"),
  },
  connectors: [
    injected({
      target: "metaMask",
    }),
  ],
  ssr: true,
});
