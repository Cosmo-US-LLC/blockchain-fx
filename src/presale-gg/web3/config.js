import walletConnectImg from "../assets/img/wallet-connect.svg";
import metamaskImg from "../assets/img/metamask.svg";
import coinbaseImg from "../assets/img/coinbase.svg";
import phantomWalletImg from "../assets/img/phantom.svg";
import { getIsMobile } from "../util";

/**
 * @typedef {"metamask" | "walletconnect" | "coinbase"} SupportedConnection
 * @typedef {1 | 56 | 8453} SupportedChainId
 *
 * @typedef {object} Connection
 * @property {string} Connection.label
 * @property {SupportedConnection} Connection.key
 * @property {string} Connection.icon
 * @property {number} Connection.connectorIndex,
 * @property {() => boolean} [hide]
 * @property {() => boolean} [onClick]
 */

/** @type {Promise<import("./connections")> | undefined} */
let configPromise = undefined;

/**
 * @typedef {object} ConfigRef
 * @property {Promise<import("./connections")> | undefined} ConfigRef.current
 */

/** @type {ConfigRef} */
export let configRef = { current: undefined };

/** @returns {Promise<import("./connections")>} */
export const getConfig = async () => {
  if (configRef.current) return configRef.current;
  if (!configPromise) configPromise = import("./connections");
  const res = await configPromise;
  configRef.current = res;
  document.dispatchEvent(new Event("wagmi-loaded"));
  getPublicClient();
  return res;
};

/** @type {Promise<import("./public-client")> | undefined} */
let publicClientPromise = undefined;

/**
 * @typedef {object} GetPublicClientRef
 * @property {Promise<((chainId?: number) => import("viem").PublicClient>) | undefined} PublicClientRef.current
 */

/** @type {GetPublicClientRef} */
export let getPublicClientRef = { current: undefined };

/** @returns {Promise<import("viem").PublicClient>} */
export const getPublicClient = async (chainId) => {
  if (getPublicClientRef.current) {
    return getPublicClientRef.current(chainId);
  }
  if (!publicClientPromise) publicClientPromise = import("./public-client");
  const res = await publicClientPromise;
  getPublicClientRef.current = res.getPublicClient;
  return res.getPublicClient(chainId);
};

/**
 * @type {Connection[]}
 */
export const connections = [
  {
    label: "Metamask",
    key: "metamask",
    icon: metamaskImg,
    connectorIndex: 0,
    hide: () => !window.ethereum || !window.ethereum.isMetaMask,
  },
  {
    label: "Wallet Connect",
    key: "walletconnect",
    icon: walletConnectImg,
    connectorIndex: 1,
  },
  {
    label: "Coinbase",
    key: "coinbase",
    icon: coinbaseImg,
    connectorIndex: 2,
  },
  {
    label: "Phantom Wallet",
    key: "phantom-wallet",
    icon: phantomWalletImg,
    connectorIndex: 3,
    hide: () =>
      typeof window === "undefined" ||
      (!("phantom" in window) && !getIsMobile()),
    onClick: !("phantom" in window)
      ? () => {
          const url = new URL(window.location.href);
          let newUrl = `${url.origin}${url.pathname}`;
          newUrl += "?" + url.searchParams.toString();
          if (url.search) newUrl += "&";
          newUrl += `connect_wallet=${encodeURIComponent("phantom-wallet")}`;
          window.open(
            `https://phantom.app/ul/browse/${encodeURIComponent(
              newUrl
            )}?ref=${encodeURIComponent(window.location.href)}`,
            "_blank"
          );
        }
      : undefined,
  },
];

if (localStorage.getItem("connect-wallet-id-v2")) {
  getConfig().then(({ loadStoredConnection }) => {
    loadStoredConnection();
  });
}
