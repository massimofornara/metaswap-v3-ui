// src/hooks/useSwap.ts
"use client";

import { useWriteContract } from "wagmi";
import { CONTRACTS } from "@/lib/contracts";
import { notifySuccess, notifyError } from "@/lib/notify";

export function useSwap() {
  const { writeContractAsync } = useWriteContract();

  async function swapExactTokensForTokens(
    tokenIn: `0x${string}`,
    tokenOut: `0x${string}`,
    amountIn: bigint
  ) {
    try {
      const tx = await writeContractAsync({
        address: CONTRACTS.router.address as `0x${string}`,
        abi: CONTRACTS.router.abi,
        functionName: "swapExactTokensForTokens",
        args: [tokenIn, tokenOut, amountIn],
      });

      notifySuccess("Swap eseguito");
      return tx;
    } catch (err) {
      notifyError("Swap fallito");
      throw err;
    }
  }

  return { swapExactTokensForTokens };
}
