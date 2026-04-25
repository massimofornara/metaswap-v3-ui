// src/lib/web3.ts
"use client";

import { getWalletClient } from "wagmi/actions";
import { wagmiConfig } from "@/wagmiConfig";
import { bsc } from "wagmi/chains";
import { CONTRACTS } from "@/lib/contracts";

// -----------------------------
// GENERIC WRITE CONTRACT WRAPPER
// -----------------------------
export async function writeTx(
  functionName: string,
  args: (string | bigint)[]
) {
  const walletClient = await getWalletClient(wagmiConfig);

  if (!walletClient) {
    throw new Error("Wallet non connesso");
  }

  return walletClient.writeContract({
    chain: bsc,
    address: CONTRACTS.router.address as `0x${string}`,
    abi: CONTRACTS.router.abi,
    functionName,
    args,
  });
}

// -----------------------------
// ADD LIQUIDITY
// -----------------------------
export async function addLiquidityWeb3(
  tokenA: `0x${string}`,
  tokenB: `0x${string}`,
  amountA: bigint,
  amountB: bigint
) {
  return writeTx("addLiquidity", [tokenA, tokenB, amountA, amountB]);
}

// -----------------------------
// SWAP
// -----------------------------
export async function swapWeb3(
  tokenIn: `0x${string}`,
  tokenOut: `0x${string}`,
  amountIn: bigint
) {
  return writeTx("swapExactTokensForTokens", [
    tokenIn,
    tokenOut,
    amountIn,
  ]);
}
