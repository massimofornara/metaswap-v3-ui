"use client";

export default function PoolsCard() {
  // in futuro: leggere da Factory.getPool(tokenA, tokenB)
  const pools = [
    { name: "NENO / USDT", tokenA: "0xeF3F5C1892A8d7A3304E4A15959E124402d69974", tokenB: "0x55d398326f99059fF775485246999027B3197955" },
    { name: "GHOST / USDT", tokenA: "0x66f2ee37e3ee54ba399e25cB6429A8a42B2b7a8f", tokenB: "0x55d398326f99059fF775485246999027B3197955" }
  ];

  return (
    <div className="card">
      <h2 className="card-title">Pools</h2>
      <ul className="mt-2 space-y-2 text-sm">
        {pools.map((p) => (
          <li key={p.name} className="flex flex-col border border-slate-800 rounded-lg p-2">
            <span className="font-medium">{p.name}</span>
            <span className="text-xs text-slate-500">
              A: {p.tokenA}
            </span>
            <span className="text-xs text-slate-500">
              B: {p.tokenB}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
