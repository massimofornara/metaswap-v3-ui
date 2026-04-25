// src/lib/web3.ts
"use client";

import { getWalletClient, readContract } from "wagmi/actions";
import { wagmiConfig } from "@/wagmiConfig";
import { bsc } from "wagmi/chains";
import { CONTRACTS } from "@/lib/contracts";

// ------------------------------------------------------
// GENERIC WRITE WRAPPER
// ------------------------------------------------------
async function writeTx(
  functionName: "addLiquidity" | "removeLiquidity" | "swapExactTokensForTokens",
  args: any[]
) {
  const walletClient = await getWalletClient(wagmiConfig);

  if (!walletClient) {
    throw new Error("Wallet non connesso");
  }

  return walletClient.writeContract({
    chain: bsc,
    account: walletClient.account, // REQUIRED BY WAGMI v2
    address: CONTRACTS.router.address as `0x${string}`,
    abi: CONTRACTS.router.abi,
    functionName,
    args: args as any,
  });
}

// ------------------------------------------------------
// ADD LIQUIDITY
// ------------------------------------------------------
export async function addLiquidity(
  tokenA: `0x${string}`,
  tokenB: `0x${string}`,
  amountA: bigint,
  amountB: bigint
) {
  return writeTx("addLiquidity", [tokenA, tokenB, amountA, amountB]);
}

// ------------------------------------------------------
// REMOVE LIQUIDITY
// ------------------------------------------------------
export async function removeLiquidity(
  tokenA: `0x${string}`,
  tokenB: `0x${string}`,
  liquidity: bigint
) {
  return writeTx("removeLiquidity", [tokenA, tokenB, liquidity]);
}

// ------------------------------------------------------
// SWAP TOKENS
// ------------------------------------------------------
export async function swapTokens(
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

// ------------------------------------------------------
// GET PRICE
// ------------------------------------------------------
export async function getPrice(
  tokenA: `0x${string}`,
  tokenB: `0x${string}`
) {
  return readContract(wagmiConfig, {
    address: CONTRACTS.router.address as `0x${string}`,
    abi: CONTRACTS.router.abi,
    functionName: "getPrice",
    args: [tokenA, tokenB],
  });
}
