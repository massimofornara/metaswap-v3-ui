"use client";

import { useAccount } from "wagmi";
import { useLPBalance } from "@/hooks/useLPBalance";
import { CONTRACTS } from "@/lib/contracts";
import { notifySuccess, notifyError } from "@/lib/notify";

export default function PortfolioCard() {
  const { isConnected, address } = useAccount();

  const lpBalance = useLPBalance(
    CONTRACTS.pools.ETH_USDT,
    address ?? "0x0000000000000000000000000000000000000000"
  );

  async function addLPToMetaMask() {
    try {
      if (!window.ethereum) {
        notifyError("MetaMask not detected");
        return;
      }

      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: CONTRACTS.pools.ETH_USDT,
            symbol: "MSLP",
            decimals: 18,
          },
        },
      });

      notifySuccess("LP Token added to MetaMask");
    } catch {
      notifyError("Failed to add LP token");
    }
  }

  return (
    <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>

      {!isConnected ? (
        <p className="text-gray-400">
          Connect your wallet to view your portfolio.
        </p>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="text-gray-300 text-sm">Wallet</p>
            <p className="font-mono text-blue-400 text-xs break-all">
              {address}
            </p>
          </div>

          <div>
            <p className="text-gray-300 text-sm">LP Balance (ETH/USDT)</p>
            <p className="text-xl font-bold">
              {Number(lpBalance) / 1e18} MSLP
            </p>
          </div>

          <button
            onClick={addLPToMetaMask}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold"
          >
            Add LP Token to MetaMask
          </button>
        </div>
      )}
    </div>
  );
}
