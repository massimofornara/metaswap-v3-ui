// src/lib/web3.ts
"use client";

import { getWalletClient, readContract } from "wagmi/actions";
import { wagmiConfig } from "@/wagmiConfig";
import { bsc } from "wagmi/chains";
import { CONTRACTS } from "@/lib/contracts";

// ------------------------------------------------------
// WRITE: ADD LIQUIDITY
// ------------------------------------------------------
export async function addLiquidity(
  tokenA: `0x${string}`,
  tokenB: `0x${string}`,
  amountA: bigint,
  amountB: bigint
) {
  const walletClient = await getWalletClient(wagmiConfig);
  if (!walletClient) throw new Error("Wallet non connesso");

  return walletClient.writeContract({
    chain: bsc,
    account: walletClient.account,
    address: CONTRACTS.router.address as `0x${string}`,
    abi: CONTRACTS.router.abi,
    functionName: "addLiquidity",
    args: [tokenA, tokenB, amountA, amountB],
  });
}

// ------------------------------------------------------
// WRITE: REMOVE LIQUIDITY
// ------------------------------------------------------
export async function removeLiquidity(
  tokenA: `0x${string}`,
  tokenB: `0x${string}`,
  liquidity: bigint
) {
  const walletClient = await getWalletClient(wagmiConfig);
  if (!walletClient) throw new Error("Wallet non connesso");

  return walletClient.writeContract({
    chain: bsc,
    account: walletClient.account,
    address: CONTRACTS.router.address as `0x${string}`,
    abi: CONTRACTS.router.abi,
    functionName: "removeLiquidity",
    args: [tokenA, tokenB, liquidity],
  });
}

// ------------------------------------------------------
// WRITE: SWAP TOKENS
// ------------------------------------------------------
export async function swapTokens(
  tokenIn: `0x${string}`,
  tokenOut: `0x${string}`,
  amountIn: bigint
) {
  const walletClient = await getWalletClient(wagmiConfig);
  if (!walletClient) throw new Error("Wallet non connesso");

  return walletClient.writeContract({
    chain: bsc,
    account: walletClient.account,
    address: CONTRACTS.router.address as `0x${string}`,
    abi: CONTRACTS.router.abi,
    functionName: "swapExactTokensForTokens",
    args: [tokenIn, tokenOut, amountIn],
  });
}

// ------------------------------------------------------
// READ: GET PRICE
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
