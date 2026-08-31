// The token address and Merkle root are used to deploy the contract. The
// widget only needs the deployed claim-contract address and claims.json.
export const CLAIM_CONTRACT_ADDRESS =
  process.env.REACT_APP_CLAIM_CONTRACT_ADDRESS || "";

export const CLAIM_CHAIN_ID = 1;
export const CLAIM_TOKEN_SYMBOL = "BFX";
export const CLAIM_TOKEN_DECIMALS = 18;
