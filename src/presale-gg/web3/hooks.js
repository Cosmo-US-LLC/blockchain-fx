import { getAccount, watchAccount } from "@wagmi/core";
import { getConfig, configRef } from "./config";
import { useCallback, useEffect, useRef, useState } from "react";

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

/**
 * @param {import("react").RefObject<HTMLElement | null>} ref
 * @param {(e: MouseEvent) => void} callback
 * @param {import("react").RefObject<HTMLElement | null>[]} ignoreRefs
 */
export const useClickAway = (ref, callback, ignoreRefs) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const abortController = new AbortController();
    window.addEventListener(
      "click",
      (e) => {
        if (!el.contains(e.target) && !el.isEqualNode(e.target)) {
          if (
            ignoreRefs?.some(
              (ref) => ref?.contains(e.target) || ref?.isEqualNode(e.target)
            )
          )
            return;
          callback(e);
        }
      },
      { signal: abortController.signal }
    );

    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback]);
};

/**
 * @param {() => void} callback
 * @param {number} timeoutMs
 * @param {unknown[]} [dependencies]
 */
export const useDebounce = (callback, timeoutMs, dependencies) => {
  const lastCalledRef = useRef(null);

  return useCallback(() => {
    if (lastCalledRef.current) clearTimeout(lastCalledRef.current);
    lastCalledRef.current = setTimeout(callback, timeoutMs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, timeoutMs, ...dependencies]);
};
