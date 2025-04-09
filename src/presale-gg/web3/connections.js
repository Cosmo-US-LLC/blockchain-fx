import {
  http,
  connect,
  watchConnections,
  watchAccount,
  injected,
} from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { coinbaseWallet, walletConnect, metaMask } from "@wagmi/connectors";
import { mainnet, bsc, base } from "@reown/appkit/networks";
import { createAppKit } from "@reown/appkit";
import { rpcMap } from "./util";
import { WALLET_CONNECT_PROJECT_ID } from "../constants";
import logo from "../../assets/TheUltimateSec/logo.jpg";

const metadata = {
  name: "BlockchainFX",
  description: "BlockchainFX",
  url: window.location.origin,
  icons: [`${window.location.origin}${logo}`],
};

export const metaMaskConnector = metaMask();
export const walletConnectConnector = walletConnect({
  projectId: WALLET_CONNECT_PROJECT_ID,
  name: "BlockchainFX",
  metadata,
  qrModalOptions: {
    themeMode: "light",
    desktopWallets: [],
  },
  showQrModal: false,
});
export const coinbaseConnector = coinbaseWallet({
  appName: "BlockchainFX",
  appLogoUrl: `${window.location.origin}${logo}`,
});
export const phantomConnector = injected({
  target: "phantom",
  shimDisconnect: true,
});
const connectors = [
  metaMaskConnector,
  walletConnectConnector,
  coinbaseConnector,
  phantomConnector,
];

// Without this, if you refresh while connected to metamask, you can't disconnect
if (typeof localStorage !== "undefined") localStorage.removeItem("wagmi.store");

export const wagmiAdapter = new WagmiAdapter({
  transports: {
    [mainnet.id]: http(),
    [bsc.id]: http(),
    [base.id]: http(rpcMap["8453"]),
  },
  connectors,
  networks: [mainnet, bsc, base],
  chains: [mainnet, bsc, base],
  projectId: WALLET_CONNECT_PROJECT_ID,
});

export const walletConnectModal = createAppKit({
  adapters: [wagmiAdapter],
  projectId: WALLET_CONNECT_PROJECT_ID,
  networks: [mainnet, bsc, base],
  metadata,
  themeMode: "light",
});

export const config = wagmiAdapter.wagmiConfig;

const localWalletConnectedKey = "connect-wallet-id-v2";

export const loadStoredConnection = () => {
  const connectedConnection = localStorage.getItem(localWalletConnectedKey);
  if (!connectedConnection) return;
  const connector = config.connectors.find(
    (conn) => conn.id === connectedConnection
  );
  if (!connector) return;
  connect(config, {
    connector,
  });
};

watchConnections(config, {
  onChange: (connections) => {
    if (connections.length === 0) {
      localStorage.removeItem(localWalletConnectedKey);
    } else {
      localStorage.setItem(
        localWalletConnectedKey,
        connections[0].connector.id
      );
    }
  },
});

watchAccount(config, {
  onChange: (accounts) => {
    if (!accounts.isConnected) {
      localStorage.removeItem(localWalletConnectedKey);
    }
  },
});
