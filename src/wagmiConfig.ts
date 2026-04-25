import { http } from "wagmi";
import { bsc } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

export const wagmiConfig = getDefaultConfig({
  appName: "MetaSwap V3 PRO",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "PLACEHOLDER",
  chains: [bsc],
  transports: {
    [bsc.id]: http(),
  },
});
