import { useState } from "react";
import { writeContract } from "@wagmi/core";
import { wagmiConfig } from "@/wagmiConfig";
import { CONTRACTS } from "@/lib/contracts";

export function useLiquidity() {
  const [loading, setLoading] = useState(false);

  async function addLiquidity(amountA: bigint, amountB: bigint) {
    try {
      setLoading(true);

      // Esempio generico — aggiornerai con il tuo router reale
      const tx = await writeContract(wagmiConfig, {
        address: CONTRACTS.METASWAP_ROUTER as `0x${string}`,
        abi: [
          {
            name: "addLiquidity",
            type: "function",
            stateMutability: "nonpayable",
            inputs: [
              { name: "amountA", type: "uint256" },
              { name: "amountB", type: "uint256" }
            ],
            outputs: []
          }
        ],
        functionName: "addLiquidity",
        args: [amountA, amountB]
      });

      return tx;
    } catch (err) {
      console.error("Liquidity error:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return { addLiquidity, loading };
}
