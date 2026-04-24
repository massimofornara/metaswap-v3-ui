import { useEffect, useState } from "react";
import { readContract } from "@wagmi/core";
import { wagmiConfig } from "@/wagmiConfig";
import { CONTRACTS } from "@/lib/contracts";

export function useLPBalance(address?: string) {
  const [balance, setBalance] = useState<bigint>(0n);

  useEffect(() => {
    if (!address) return;

    async function load() {
      try {
        const result = await readContract(wagmiConfig, {
          address: CONTRACTS.METASWAP_ROUTER as `0x${string}`,
          abi: [
            {
              name: "balanceOf",
              type: "function",
              stateMutability: "view",
              inputs: [{ name: "owner", type: "address" }],
              outputs: [{ name: "balance", type: "uint256" }],
            },
          ],
          functionName: "balanceOf",
          args: [address],
        });

        setBalance(result as bigint);
      } catch (err) {
        console.error("LP balance error:", err);
      }
    }

    load();
  }, [address]);

  return balance;
}
