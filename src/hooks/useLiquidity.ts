// src/hooks/useLiquidity.ts
"use client";

import { useWriteContract, useAccount } from "wagmi";
import { bsc } from "wagmi/chains";
import { CONTRACTS } from "@/lib/contracts";
import { notifySuccess, notifyError } from "@/lib/notify";

export function useLiquidity() {
  const { writeContractAsync } = useWriteContract();
  const { address: account } = useAccount();

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
        chain: bsc,
        account,
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

