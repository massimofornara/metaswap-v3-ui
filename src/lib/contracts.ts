// lib/contracts.ts

export const CONTRACTS = {
  // -----------------------------
  // TOKEN REALI BSC MAINNET
  // -----------------------------
  WBNB: "0xBB4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  USDT: "0x55d398326f99059fF775485246999027B3197955",
  USDC: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
  BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  BTCB: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
  ETH:  "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",

  // -----------------------------
  // PANCAKESWAP V3 (REAL MAINNET)
  // -----------------------------
  PCS_V3_FACTORY:          "0xAf90E0cE1Ff7C5fE8C1E18E2D3D83B081e0c7A0d",
  PCS_V3_POSITION_MANAGER: "0x46A15B0b27311cedF172AB29E4f4766Fbe7f4364",
  PCS_V3_ROUTER:           "0xB1D7bE0f3E5F1C1a42937e2b2fc90d92c8e0Ff8a",

  // -----------------------------
  // METASWAP (I TUOI CONTRATTI REALI)
  // -----------------------------
  METASWAP_ROUTER:  "0x0fff1dd121ed8a635f290d075d7a6e147817c5bb",
  METASWAP_FACTORY: "0x53AA5628360d4c7003ee7Cb679C05b950D192522",

  // -----------------------------
  // TOKEN CUSTOM (I TUOI)
  // -----------------------------
  GHOST: "0x66f2ee37e3ee54ba399e25cB6429A8a42B2b7a8f",
  NENO:  "0xeF3F5C1892A8d7A3304E4A15959E124402d69974",

  // -----------------------------
  // POOLS REALI (LE TUE 3 POOLS)
  // -----------------------------
  pools: {
    // Pool usata da TrendingPools e PoolsCard
    ETH_USDT: "0x34934efce35a8e2aEdF70B17C992fd3E964D7BF3",

    // Le tue pool GHOST/NENO
    GHOST_NENO_1: "0xf987fEE140Fe144C7e1767710d01031f0f4DF907",
    GHOST_NENO_2: "0x7d39A3fEf09754378B156883FB3c5397F26f8380",
  },
} as const;

