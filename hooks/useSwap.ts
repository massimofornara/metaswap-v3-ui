import { useState } from "react";
import { writeContract } from "@wagmi/core";
import { wagmiConfig } from "@/wagmiConfig";
import { CONTRACTS } from "@/lib/contracts";

export function useSwap() {
  const [loading, setLoading] = useState(false);

  async function swap(amountIn: bigint) {
    try {
      setLoading(true);

      const tx = await writeContract(wagmiConfig, {
        address: CONTRACTS.METASWAP_ROUTER as `0x${string}`,
        abi: [
          {
            name: "swapExactTokensForTokens",
            type: "function",
            stateMutability: "nonpayable",
            inputs: [
              { name: "amountIn", type: "uint256" }
            ],
            outputs: []
          }
        ],
        functionName: "swapExactTokensForTokens",
        args: [amountIn]
      });

      return tx;
    } finally {
      setLoading(false);
    }
  }

  return { swap, loading };
}
