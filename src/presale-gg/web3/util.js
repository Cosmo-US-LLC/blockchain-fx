import erc20Abi from "../abi/erc20.json";
import bep20Abi from "../abi/bep20.json";
import {
  sendTransaction,
  writeContract,
  getChainId,
  switchChain,
} from "@wagmi/core";
import { Decimal } from "decimal.js";
import { getPublicClient } from "./config";

/* global BigInt */

export const rpcMap = {
  1: "https://rpc.ankr.com/eth",
  56: "https://bsc-dataseed1.binance.org/",
  8453: "https://mainnet.base.org/",
};

/**
 * @param {bigint} num
 * @param {number} decimals
 * @returns {number}
 */
export const bigIntToNum = (num, decimals) => {
  return new Decimal(num.toString())
    .div(new Decimal(10).pow(decimals))
    .toNumber();
};

/**
 * @param {bigint} num
 * @param {number} decimals
 * @returns {string}
 */
export const bigIntToStr = (num, decimals) => {
  return new Decimal(num.toString())
    .div(new Decimal(10).pow(decimals))
    .toFixed();
};

/**
 * @param {string} walletAddress
 * @param {import("./connections").SupportedChainId} chainId
 * @param {string} tokenContractAddress
 * @param {number} [decimals]
 * @returns {Promise<string>}
 */
export const getBalanceOfWalletAddress = async (
  walletAddress,
  chainId,
  tokenContractAddress,
  decimals
) => {
  const client = await getPublicClient(chainId);

  if (tokenContractAddress) {
    const abi = getAbi(chainId);
    if (!abi) throw new Error ("Invalid abi");

    const tokens = await client.readContract({
      abi,
      address: tokenContractAddress,
      functionName: "balanceOf",
      args: [walletAddress],
    });

    return bigIntToStr(tokens, decimals ?? 18);
  }

  const wei = await client.getBalance({
    address: walletAddress,
  });

  return bigIntToStr(wei, 18);
};

/**
 * @param {string} label
 * @returns {import("./connections").SupportedChainId | null}
 */
export const getChainIdFromLabel = (label) => {
  return (
    {
      "ERC-20": 1,
      "BEP-20": 56,
      BASE: 8453,
    }[label.toUpperCase()] ?? null
  );
};

/**
 * @param {string} symbol
 * @param {number} chainId
 * @returns {boolean}
 */
export const isCurrencyNative = (symbol, chainId) => {
  return (
    {
      1: "ETH",
      56: "BNB",
      8453: "ETH",
    }[chainId] === symbol.toUpperCase()
  );
};

/**
 * @param {number} chainId
 * @returns {import("viem").Abi}
 */
export const getAbi = (chainId) => {
  return (
    {
      1: erc20Abi,
      56: bep20Abi,
      8453: erc20Abi,
    }[chainId] ?? null
  );
};

/**
 * @param {import("./connections").SupportedChainId} chainId
 * @param {string} symbol
 * @returns {string | undefined}
 */
export const getContractAddress = (chainId, symbol) => {
  return (
    {
      1: {
        USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      },
      56: {
        BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        USDT: "0x55d398326f99059ff775485246999027b3197955",
      },
      8453: {
        USDC: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      },
    }[chainId]?.[symbol?.toUpperCase()] ?? undefined
  );
};

/**
 * @param {number} chainId
 * @param {string} symbol
 * @returns {number | null}
 */
export const getDecimals = (chainId, symbol) => {
  return (
    {
      1: {
        USDT: 6,
        BUSD: 18,
      },
      56: {
        USDT: 18,
        BUSD: 18,
      },
      8453: {
        USDC: 6,
      },
    }[chainId]?.[symbol.toUpperCase()] ?? null
  );
};

/**
 * @param {string} num
 * @param {number} decimals
 * @returns {string}
 */
export const cutoffDecimals = (num, decimals) => {
  const index = num.indexOf(".");
  if (index === -1) return num;
  const numDecimals = num.length - 1 - index;
  if (numDecimals <= decimals) return num;
  return num.substring(0, index + decimals);
};

/**
 * @param {number | string} num
 * @param {number} decimals
 * @returns {bigint}
 */
export const numToBigInt = (num, decimals) => {
  return BigInt(
    new Decimal(num).mul(new Decimal(10).pow(decimals)).floor().toFixed()
  );
};

/**
 * @typedef {object} TransactionData
 * @property {import("viem").Abi} [abi]
 * @property {string | null} [contractAddress]
 * @property {number | null} [decimals]
 * @property {string} to
 * @property {boolean} native
 * @property {number | null} [chainId]
 * @property {string | number} value
 */

/**
 * @param {import("@wagmi/core").Config} config
 * @param {TransactionData} args
 * @returns {Promise<string>}
 */
export const sendGenericTransaction = async (config, args) => {
  if (args.chainId) {
    const currentChainId = getChainId(config);
    if (currentChainId !== args.chainId) {
      await switchChain(config, {
        chainId: args.chainId,
        addEthereumChainParameter: {
          rpcUrls: [rpcMap[args.chainId.toString()]],
        },
      });
      // Wait for a bit after switching to propagate fully
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
  if (args.native) {
    return await sendTransaction(config, {
      to: args.to,
      chainId: args.chainId ?? 1,
      value: numToBigInt(args.value, args.decimals ?? 18),
      data: "0x",
    });
  } else {
    return await writeContract(config, {
      chainId: args.chainId ?? 1,
      abi: args.abi,
      address: args.contractAddress,
      functionName: "transfer",
      args: [args.to, numToBigInt(args.value, args.decimals ?? 18)],
    });
  }
};
