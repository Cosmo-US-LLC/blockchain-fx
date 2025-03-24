import { getAccount, watchAccount } from "@wagmi/core";
import { getConfig, configRef } from "./config";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useUserState } from "../stores/user.store";

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

export const bonusRankData = {
  Default: {
    tradingCreditsUSD: 0,
    usdtRewardPercentage: 0,
    bfxBonusPercentage: 0,
    level: 0,
  },
  Novice: {
    tradingCreditsUSD: 0,
    usdtRewardPercentage: 0,
    bfxBonusPercentage: 10,
    level: 10,
  },
  Advanced: {
    tradingCreditsUSD: 500,
    usdtRewardPercentage: 0,
    bfxBonusPercentage: 20,
    level: 25,
  },
  Pro: {
    tradingCreditsUSD: 1000,
    usdtRewardPercentage: 0,
    bfxBonusPercentage: 30,
    level: 50,
  },
  Expert: {
    tradingCreditsUSD: 2000,
    usdtRewardPercentage: 10,
    bfxBonusPercentage: 40,
    level: 100,
  },
  Master: {
    tradingCreditsUSD: 5000,
    usdtRewardPercentage: 15,
    bfxBonusPercentage: 50,
    level: 250,
  },
  Elite: {
    tradingCreditsUSD: 10000,
    usdtRewardPercentage: 20,
    bfxBonusPercentage: 60,
    level: 500,
  },
  Legend: {
    tradingCreditsUSD: 25000,
    usdtRewardPercentage: 30,
    bfxBonusPercentage: 80,
    level: 1000,
  },
};

export const useUserRankData = () => {
  const userData = useUserState();
  const USD_PER_LEVEL = 100;
  const currentRankIndex = useMemo(() => {
    const index = userData.rankData?.ranks.findIndex(
      (rank) => rank.rank === userData.rankData?.current_rank?.rank
    );
    if (index === -1) return null;
    return index;
  }, [userData.rankData]);

  const nextRankIndex = useMemo(() => {
    if (!userData.rankData) return null;
    if (currentRankIndex === null) return 0;
    if (currentRankIndex >= userData.rankData.ranks.length) return null;
    return currentRankIndex + 1;
  }, [userData.rankData, currentRankIndex]);

  const nextRank = useMemo(() => {
    if (nextRankIndex === null || !userData.rankData) return null;
    return userData.rankData.ranks[nextRankIndex] ?? null;
  }, [userData.rankData, nextRankIndex]);

  const fractionToNextRank = useMemo(() => {
    if (!userData.rankData) return 0;
    if (nextRank === null) return 1;
    const rankLevelDiff =
      nextRank.level - (userData.rankData.current_rank?.level ?? 0);
    const rankUsdDiff = rankLevelDiff * USD_PER_LEVEL;
    return (rankUsdDiff - userData.rankData.usd_to_next_rank) / rankUsdDiff;
  }, [userData.rankData, nextRank]);

  const ranks = useMemo(() => {
    return (
      userData.rankData?.ranks ??
      Object.entries(bonusRankData)
        .slice(1)
        .map(([key, val]) => ({
          level: val.level,
          bonus_percentage: val.bfxBonusPercentage,
          rank: key,
          reward: "bonus",
        }))
    );
  }, [userData.rankData]);

  return {
    currentLevel: userData.rankData?.current_level ?? 0,
    currentRank: userData.rankData?.current_rank,
    currentRankIndex,
    nextRankIndex,
    nextRank,
    fractionToNextRank,
    usdPerLevel: USD_PER_LEVEL,
    usdToNextRank: userData.rankData?.usd_to_next_rank ?? 0,
    usdToNextLevel: userData.rankData?.usd_to_next_level ?? 0,
    ranks: ranks,
    /** @type {{tradingCreditsUSD: number, usdtRewardPercentage: number, bfxBonusPercentage: number}} */
    bonusData: userData.rankData?.current_rank
      ? bonusRankData[userData.rankData.current_rank.rank]
      : bonusRankData["Default"],
    ranksLoaded: !!userData.rankData?.ranks,
  };
};
