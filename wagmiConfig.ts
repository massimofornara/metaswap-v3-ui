import { createConfig, http } from "@wagmi/core";
import { injected } from "@wagmi/connectors";
import { bsc } from "@wagmi/core/chains";

export const wagmiConfig = createConfig({
  chains: [bsc],
  transports: {
    [bsc.id]: http("https://bsc-dataseed.binance.org"),
  },
  connectors: [
    injected(),
  ],
});
