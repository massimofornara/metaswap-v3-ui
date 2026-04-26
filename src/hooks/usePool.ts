"use client";
import { useEffect, useState } from "react";
import { readContract } from "@wagmi/core";
import { wagmiConfig } from "@/wagmiConfig";

export function usePool(poolAddress: `0x${string}`) {
  const [reserve0, setReserve0] = useState<bigint>(0n);
  const [reserve1, setReserve1] = useState<bigint>(0n);

  useEffect(() => {
    if (!poolAddress) return;

    async function load() {
      try {
        const [r0, r1] = await Promise.all([
          readContract(wagmiConfig, {
            address: poolAddress,
            abi: [
              {
                name: "reserve0",
                type: "function",
                stateMutability: "view",
                inputs: [],
                outputs: [{ name: "", type: "uint256" }]
              }
            ],
            functionName: "reserve0"
          }),
          readContract(wagmiConfig, {
            address: poolAddress,
            abi: [
              {
                name: "reserve1",
                type: "function",
                stateMutability: "view",
                inputs: [],
                outputs: [{ name: "", type: "uint256" }]
              }
            ],
            functionName: "reserve1"
          })
        ]);

        setReserve0(r0 as bigint);
        setReserve1(r1 as bigint);
      } catch (err) {
        console.error("Pool error:", err);
      }
    }

    load();
  }, [poolAddress]);

  return { reserve0, reserve1 };
}
