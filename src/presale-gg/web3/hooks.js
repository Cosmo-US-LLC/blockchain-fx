import { getAccount, watchAccount } from "@wagmi/core";
import { getConfig, configRef } from "./config";
import { useCallback, useEffect, useState } from "react";

/**
 * @typedef {object} GetAccountReturnType
 * @property {`0x${string}` | undefined} address,
 * @property {`0x${string}`[]} addresses,
 * @property {number | undefined} chainId
 * @property {boolean} isConnected
 */
export const useAccount = () => {
  /** @type {[GetAccountReturnType, import("react").Dispatch<import("react").SetStateAction<GetAccountReturnType>)]} */
  const [accountData, setAccountData] = useState(undefined);
  useEffect(() => {
    const config = configRef.current?.config;
    if (config) {
      const accountData = getAccount(config);
      setAccountData(accountData);
    }

    let unwatch = undefined;
    const func = async () => {
      const { config } = await getConfig();
      const _unwatch = watchAccount(config, {
        onChange: (account) => {
          setAccountData(account);
        },
      });
      unwatch = _unwatch;
    };
    if (config) func();
    else document.addEventListener("wagmi-loaded", func);

    return () => {
      document.removeEventListener("wagmi-loaded", func);
      if (!unwatch) return;
      unwatch();
    };
  }, []);
  return (
    accountData ?? {
      address: null,
      addresses: [],
      chainId: null,
      isConnected: false,
    }
  );
};

export const useWindowSize = () => {
  const getSize = useCallback(
    () => ({ width: window.innerWidth, height: window.innerHeight }),
    []
  );
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const abortController = new AbortController();
    window.addEventListener("resize", () => setSize(getSize()), {
      signal: abortController.signal,
    });
    return () => abortController.abort();
  }, [getSize]);

  return size;
};
