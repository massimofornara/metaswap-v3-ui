import routerAbi from "@/abi/MetaSwapRouter.json";
import poolAbi from "@/abi/MetaSwapPool.json";
import erc20Abi from "@/abi/ERC20.json";

export const CONTRACTS = {
  router: process.env.NEXT_PUBLIC_ROUTER!,
  factory: process.env.NEXT_PUBLIC_FACTORY!,
  tokens: {
    ETH: process.env.NEXT_PUBLIC_ETH!,
    USDT: process.env.NEXT_PUBLIC_USDT!,
    BTC: process.env.NEXT_PUBLIC_BTC!,
  },
  pools: {
    ETH_USDT: process.env.NEXT_PUBLIC_POOL_ETH_USDT!,
  },
};

export const ABIS = {
  router: routerAbi,
  pool: poolAbi,
  erc20: erc20Abi,
};
