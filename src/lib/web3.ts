// src/lib/web3.ts
"use client";

import { getWalletClient, readContract } from "wagmi/actions";
import { wagmiConfig } from "@/wagmiConfig";
import { bsc } from "wagmi/chains";
import { CONTRACTS } from "@/lib/contracts";

// ------------------------------------------------------
// GENERIC WRITE WRAPPER
// ------------------------------------------------------
async function writeTx(functionName: string, args: any[]) {
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

// ------------------------------------------------------
// ADD LIQUIDITY (vecchio nome richiesto dai componenti)
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
// REMOVE LIQUIDITY (vecchio nome richiesto dai componenti)
// ------------------------------------------------------
export async function removeLiquidity(
  tokenA: `0x${string}`,
  tokenB: `0x${string}`,
  liquidity: bigint
) {
  return writeTx("removeLiquidity", [tokenA, tokenB, liquidity]);
}

// ------------------------------------------------------
// SWAP TOKENS (vecchio nome richiesto dai componenti)
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
// GET PRICE (richiesto da PriceCard)
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
