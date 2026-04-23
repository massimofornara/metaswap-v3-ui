"use client";

import {
  BrowserProvider,
  Contract,
  parseUnits,
  formatUnits
} from "ethers";
import { ROUTER_ADDRESS, FACTORY_ADDRESS, CHAIN_ID } from "./config";
import routerJson from "@/abi/MetaSwapRouter.json";
import factoryJson from "@/abi/MetaSwapFactory.json";
import erc20Json from "@/abi/ERC20.json";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export async function getProvider() {
  if (!window.ethereum) throw new Error("MetaMask non trovata");
  const provider = new BrowserProvider(window.ethereum);
  const network = await provider.getNetwork();
  if (Number(network.chainId) !== CHAIN_ID) {
    throw new Error("Rete sbagliata su MetaMask");
  }
  await provider.send("eth_requestAccounts", []);
  return provider;
}

export async function getSigner() {
  const provider = await getProvider();
  return provider.getSigner();
}

export function getRouter(signerOrProvider: any) {
  return new Contract(ROUTER_ADDRESS, (routerJson as any).abi, signerOrProvider);
}

export function getFactory(signerOrProvider: any) {
  return new Contract(FACTORY_ADDRESS, (factoryJson as any).abi, signerOrProvider);
}

export function getERC20(token: string, signerOrProvider: any) {
  return new Contract(token, (erc20Json as any).abi, signerOrProvider);
}

/* --------- Allowance & Approve ---------- */

export async function checkAllowance(
  token: string,
  owner: string,
  amountWei: bigint
) {
  const provider = await getProvider();
  const erc20 = getERC20(token, provider);
  const allowance = await erc20.allowance(owner, ROUTER_ADDRESS);
  return allowance >= amountWei;
}

export async function approveToken(token: string, amountWei: bigint) {
  const signer = await getSigner();
  const erc20 = getERC20(token, signer);
  const tx = await erc20.approve(ROUTER_ADDRESS, amountWei);
  return await tx.wait();
}

/* --------- Swap ---------- */

export async function swapExactTokensForTokens(
  tokenIn: string,
  tokenOut: string,
  amountIn: string,
  decimalsIn: number
) {
  const signer = await getSigner();
  const router = getRouter(signer);
  const account = await signer.getAddress();

  const amountInWei = parseUnits(amountIn, decimalsIn);

  const isApproved = await checkAllowance(tokenIn, account, amountInWei);
  if (!isApproved) throw new Error("NEEDS_APPROVAL");

  const tx = await router.swapExactTokensForTokens(
    tokenIn,
    tokenOut,
    amountInWei
  );

  return await tx.wait();
}

/* --------- Add Liquidity ---------- */

export async function addLiquidity(
  tokenA: string,
  tokenB: string,
  amountA: string,
  amountB: string,
  decimalsA: number,
  decimalsB: number
) {
  const signer = await getSigner();
  const router = getRouter(signer);
  const account = await signer.getAddress();

  const amountAWei = parseUnits(amountA, decimalsA);
  const amountBWei = parseUnits(amountB, decimalsB);

  const approvedA = await checkAllowance(tokenA, account, amountAWei);
  const approvedB = await checkAllowance(tokenB, account, amountBWei);

  if (!approvedA) throw new Error("NEEDS_APPROVAL_A");
  if (!approvedB) throw new Error("NEEDS_APPROVAL_B");

  const tx = await router.addLiquidity(
    tokenA,
    tokenB,
    amountAWei,
    amountBWei
  );

  return await tx.wait();
}

/* --------- Remove Liquidity ---------- */

export async function removeLiquidity(
  tokenA: string,
  tokenB: string,
  liquidity: string,
  decimalsLP: number
) {
  const signer = await getSigner();
  const router = getRouter(signer);

  const liquidityWei = parseUnits(liquidity, decimalsLP);

  const tx = await router.removeLiquidity(
    tokenA,
    tokenB,
    liquidityWei
  );

  return await tx.wait();
}

/* --------- Get Price ---------- */

export async function getPrice(tokenA: string, tokenB: string) {
  const provider = await getProvider();
  const router = getRouter(provider);
  const price = await router.getPrice(tokenA, tokenB);
  // qui decidi tu come interpretare i decimali del prezzo
  return price as bigint;
}

/* --------- Lettura bilanci per Portfolio ---------- */

export async function getTokenBalance(
  token: string,
  account: string,
  decimals: number
) {
  const provider = await getProvider();
  const erc20 = getERC20(token, provider);
  const bal = await erc20.balanceOf(account);
  return Number(formatUnits(bal, decimals));
}
