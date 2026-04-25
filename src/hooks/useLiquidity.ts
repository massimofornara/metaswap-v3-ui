// src/hooks/useLiquidity.ts
"use client";

import { useWriteContract } from "wagmi";
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
        address: CONTRACTS.router.address as `0x${string}`,
        abi: CONTRACTS.router.abi,
        functionName: "addLiquidity",
        args: [tokenA, tokenB, amountA, amountB],
        // opzionale ma pulito: forziamo la chain BSC
        chainId: 56,
      });

      notifySuccess("Liquidity added");
      return tx;
    } catch (err) {
      console.error("Add liquidity error:", err);
      notifyError("Add liquidity failed");
      throw err;
    }
  }

  return { addLiquidity };
}

