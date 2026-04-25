// src/hooks/useSwap.ts
"use client";

import { useWriteContract, useAccount } from "wagmi";
import { bsc } from "wagmi/chains";
import { CONTRACTS } from "@/lib/contracts";
import { notifySuccess, notifyError } from "@/lib/notify";

export function useSwap() {
  const { writeContractAsync } = useWriteContract();
  const { address: account } = useAccount();

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
        chain: bsc,
        account,
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
