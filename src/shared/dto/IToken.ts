
export interface ISettings {
  apiKey: string;
  network: string;
}


export enum ConfigNetwork {
  ETH_MAINNET = "eth-mainnet",
  ETH_GOERLI = "eth-goerli",
  ETH_SEPOLIA = "eth-sepolia",
  OPT_MAINNET = "opt-mainnet",
  OPT_GOERLI = "opt-goerli",
  OPT_SEPOLIA = "opt-sepolia",
  ARB_MAINNET = "arb-mainnet",
  ARB_GOERLI = "arb-goerli",
  ARB_SEPOLIA = "arb-sepolia",
  MATIC_MAINNET = "polygon-mainnet",
  MATIC_MUMBAI = "polygon-mumbai",
  MATIC_AMOY = "polygon-amoy",
  ASTAR_MAINNET = "astar-mainnet",
  POLYGONZKEVM_MAINNET = "polygonzkevm-mainnet",
  POLYGONZKEVM_TESTNET = "polygonzkevm-testnet",
  BASE_MAINNET = "base-mainnet",
  BASE_GOERLI = "base-goerli",
  BASE_SEPOLIA = "base-sepolia",
  ZKSYNC_MAINNET = "zksync-mainnet",
  ZKSYNC_SEPOLIA = "zksync-sepolia"
}