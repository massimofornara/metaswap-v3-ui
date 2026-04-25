import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { bsc } from "wagmi/chains";

export const wagmiConfig = getDefaultConfig({
  appName: "MetaSwap V3",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "YOUR_PROJECT_ID",
  chains: [bsc],
  ssr: true,
});
