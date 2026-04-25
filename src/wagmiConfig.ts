// src/wagmiConfig.ts
import { createConfig, http } from "wagmi";
import { bsc } from "wagmi/chains";

export const wagmiConfig = createConfig({
  chains: [bsc],
  transports: {
    [bsc.id]: http("https://bsc-dataseed.binance.org"),
  },
  connectors: [], // RainbowKit crea i connectors, qui non serve nulla
});
