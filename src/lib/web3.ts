"use client";

import {
  createPublicClient,
  createWalletClient,
  custom,
  http,
  parseUnits,
  formatUnits,
} from "viem";
import { bsc } from "wagmi/chains";

// -----------------------------
// ADDRESSES
// -----------------------------
export const ROUTER = "0x0fff1dd121ed8a635f290d075d7a6e147817c5bb";
export const FACTORY = "0x53AA5628360d4c7003ee7Cb679C05b950D192522";

// -----------------------------
// ABI DEL ROUTER (QUELLO CHE MI HAI DATO)
// -----------------------------
export const ROUTER_ABI = [
  {
    inputs: [{ internalType: "address", name: "_factory", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "amountB", type: "uint256" },
    ],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
    ],
    name: "getPool",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
    ],
    name: "getPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
    ],
    name: "removeLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenIn", type: "address" },
      { internalType: "address", name: "tokenOut", type: "address" },
      { internalType: "uint256", name: "amountIn", type: "uint256" },
    ],
    name: "swapExactTokensForTokens",
    outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];

// -----------------------------
// CLIENTS VIEM
// -----------------------------
const publicClient = createPublicClient({
  chain: bsc,
  transport: http("https://bsc-dataseed.binance.org"),
});

// walletClient viene creato SOLO lato client
function getWalletClient() {
  if (typeof window === "undefined") return null;
  if (!(window as any).ethereum) return null;

  return createWalletClient({
    chain: bsc,
    transport: custom((window as any).ethereum),
  });
}

// -----------------------------
// FUNZIONI ON-CHAIN
// -----------------------------

// GET PRICE
export async function getPrice(tokenA: string, tokenB: string) {
  const price = await publicClient.readContract({
    address: ROUTER,
    abi: ROUTER_ABI,
    functionName: "getPrice",
    args: [tokenA, tokenB],
  });

  return Number(price);
}

// ADD LIQUIDITY
export async function addLiquidity(
  tokenA: string,
  tokenB: string,
  amountA: string,
  amountB: string
) {
  const walletClient = getWalletClient();
  if (!walletClient) throw new Error("Wallet non connesso");

  return walletClient.writeContract({
    address: ROUTER,
    abi: ROUTER_ABI,
    functionName: "addLiquidity",
    args: [
      tokenA,
      tokenB,
      parseUnits(amountA, 18),
      parseUnits(amountB, 18),
    ],
  });
}

// REMOVE LIQUIDITY
export async function removeLiquidity(
  tokenA: string,
  tokenB: string,
  lpAmount: string
) {
  const walletClient = getWalletClient();
  if (!walletClient) throw new Error("Wallet non connesso");

  return walletClient.writeContract({
    address: ROUTER,
    abi: ROUTER_ABI,
    functionName: "removeLiquidity",
    args: [tokenA, tokenB, parseUnits(lpAmount, 18)],
  });
}

// SWAP
export async function swapTokens(
  tokenIn: string,
  tokenOut: string,
  amountIn: string
) {
  const walletClient = getWalletClient();
  if (!walletClient) throw new Error("Wallet non connesso");

  return walletClient.writeContract({
    address: ROUTER,
    abi: ROUTER_ABI,
    functionName: "swapExactTokensForTokens",
    args: [tokenIn, tokenOut, parseUnits(amountIn, 18)],
  });
}

