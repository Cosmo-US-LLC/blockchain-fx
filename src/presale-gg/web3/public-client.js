import { createPublicClient, http } from "viem";
import { bsc, mainnet } from "viem/chains";

export const rpcMap = {
	"1": "https://rpc.ankr.com/eth",
	"56": "https://bsc-dataseed1.binance.org/"
}

export const publicClients = {
	"1": createPublicClient({
		chain: mainnet,
		transport: http(rpcMap?.["1"])
	}),
	"56": createPublicClient({
		chain: bsc,
		transport: http(rpcMap?.["56"])
	})
}

/**
 * @param {import("./connections").SupportedChainId} chainId 
 * @returns {import("viem").PublicClient}
 */
export const getPublicClient = (chainId) => {
	return publicClients[(chainId ?? 1).toString()]
}