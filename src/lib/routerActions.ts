// src/lib/routerActions.ts
"use client";

import { getWalletClient } from "wagmi/actions";
import { wagmiConfig } from "@/wagmiConfig";
import { bsc } from "wagmi/chains";
import { CONTRACTS } from "@/lib/contracts";

// -----------------------------
// ADD LIQUIDITY
// -----------------------------
export async function addLiquidityRouter(
  tokenA: `0x${string}`,
  tokenB: `0x${string}`,
  amountA: bigint,
  amountB: bigint
) {
  const walletClient = await getWalletClient(wagmiConfig);

  if (!walletClient) {
    throw new Error("Wallet non connesso");
  }

  return walletClient.writeContract({
    chain: bsc, // OBBLIGATORIO
    address: CONTRACTS.router.address as `0x${string}`,
    abi: CONTRACTS.router.abi,
    functionName: "addLiquidity",
    args: [tokenA, tokenB, amountA, amountB],
  });
}

// -----------------------------
// SWAP
// -----------------------------
export async function swapRouter(
  tokenIn: `0x${string}`,
  tokenOut: `0x${string}`,
  amountIn: bigint
) {
  const walletClient = await getWalletClient(wagmiConfig);

  if (!walletClient) {
    throw new Error("Wallet non connesso");
  }

  return walletClient.writeContract({
    chain: bsc,
    address: CONTRACTS.router.address as `0x${string}`,
    abi: CONTRACTS.router.abi,
    functionName: "swapExactTokensForTokens",
    args: [tokenIn, tokenOut, amountIn],
  });
}
