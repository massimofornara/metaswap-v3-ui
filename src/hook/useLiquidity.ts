"use client";

import { useWriteContract } from "wagmi";
import { CONTRACTS } from "@/lib/contracts";
import { notifySuccess, notifyError } from "@/lib/notify";

export function useLiquidity() {
  const { writeContractAsync } = useWriteContract();

  async function addLiquidity(
    tokenA: string,
    tokenB: string,
    amountA: bigint,
    amountB: bigint
  ) {
    try {
      const tx = await writeContractAsync({
        address: CONTRACTS.router,
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
