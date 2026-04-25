"use client";

import { useAccount, useBalance } from "wagmi";
import { GHOST, NENO } from "@/lib/tokens";

export default function PortfolioCard() {
  const { address } = useAccount();

  const ghost = useBalance({ address, token: GHOST });
  const neno = useBalance({ address, token: NENO });

  return (
    <div className="p-4 border border-zinc-800 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Portfolio</h2>

      {!address && <p>Connetti il wallet per vedere il portfolio</p>}

      {address && (
        <>
          <p className="mb-2">
            <strong>Wallet:</strong> {address}
          </p>

          <p className="mb-2">
            <strong>GHOST:</strong>{" "}
            {ghost.data ? ghost.data.formatted : "…"}
          </p>

          <p className="mb-2">
            <strong>NENO:</strong>{" "}
            {neno.data ? neno.data.formatted : "…"}
          </p>
        </>
      )}
    </div>
  );
}
