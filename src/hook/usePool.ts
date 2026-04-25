"use client";

import { useWriteContract } from "wagmi";
import { CONTRACTS } from "@/lib/contracts";
import { notifySuccess, notifyError } from "@/lib/notify";

export function usePool() {
  const { writeContractAsync } = useWriteContract();

  async function removeLiquidity(
    tokenA: string,
    tokenB: string,
    liquidity: bigint
  ) {
    try {
      const tx = await writeContractAsync({
        address: CONTRACTS.router.address,
        abi: CONTRACTS.router.abi,
        functionName: "removeLiquidity",
        args: [tokenA, tokenB, liquidity],
      });

      notifySuccess("Liquidity removed");
      return tx;
    } catch (err) {
      notifyError("Remove liquidity failed");
      throw err;
    }
  }

  return { removeLiquidity };
}
