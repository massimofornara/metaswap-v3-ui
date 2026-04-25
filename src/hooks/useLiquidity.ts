// src/hooks/useLiquidity.ts
"use client";

import { useWriteContract } from "wagmi";
import { bsc } from "wagmi/chains";
import { CONTRACTS } from "@/lib/contracts";
import { notifySuccess, notifyError } from "@/lib/notify";

export function useLiquidity() {
  const { writeContractAsync } = useWriteContract();

  async function addLiquidity(
    tokenA: `0x${string}`,
    tokenB: `0x${string}`,
    amountA: bigint,
    amountB: bigint
  ) {
    try {
      const tx = await writeContractAsync({
        chain: bsc,
        address: CONTRACTS.router.address as `0x${string}`,
        abi: CONTRACTS.router.abi,
        functionName: "addLiquidity",
        args: [tokenA, tokenB, amountA, amountB],
      });

      notifySuccess("Liquidity added");
      return tx;
    } catch (err) {
      notifyError("Add liquidity failed");
      throw err;
    }
  }

  return { addLiquidity };
}
