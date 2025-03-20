import { map } from "nanostores";
import { api } from "../api";
import toast from "react-hot-toast";
import { getAccount, signMessage, watchAccount } from "@wagmi/core";
import { getConfig } from "../web3";
import { useStore } from "@nanostores/react";

/**
 * @typedef {import("../api/api.types").API.User} User
 * @typedef {import("../api/api.types").API.UserStakeData} UserStakeData
 * @typedef {import("../api/api.types").API.Token} Token
 * @typedef {import("../api/api.types").API.LeaderboardEntry} LeaderboardEntry
 * @typedef {import("../api/api.types").API.BonusCode} BonusCode
 * @typedef {import("../api/api.types").API.UserRankData} UserRankData
 * @typedef {import("../api/api.types").API.ReferralBonuses} ReferralBonuses
 * @typedef {import("../api/api.types").API.BonusTransactionHistoryItem} BonusTransactionHistoryItem
 *
 * @typedef {object} UserStoreValue
 * @property {User | null} UserStoreValue.user
 * @property {UserStakeData | null} UserStoreValue.userStakeData
 * @property {Token | null} UserStoreValue.token
 * @property {LeaderboardEntry | null} UserStoreValue.leaderboardRank
 * @property {BonusCode | null} UserStoreValue.appliedBonusCode
 * @property {UserRankData | null} UserStoreValue.rankData
 * @property {ReferralBonuses | null} UserStoreValue.referralBonuses
 * @property {BonusTransactionHistoryItem[] | null} UserStoreValue.bonusTransactions
 */

/** @type {UserStoreValue} */
export const defaultUserState = {
  user: null,
  userStakeData: null,
  token: null,
  leaderboardRank: null,
  appliedBonusCode: null,
  rankData: null,
  referralBonuses: null,
  bonusTransactions: null,
};

/** @type {import("nanostores").PreinitializedMapStore<UserStoreValue>} */
export const $userState = map({ ...defaultUserState });
export const useUserState = () => useStore($userState);

document.addEventListener("wagmi-loaded", async () => {
  const { config } = await getConfig();
  watchAccount(config, {
    onChange: (account) => {
      const address = account.address;
      if (!address) return $userState.set({ ...defaultUserState });
      api.getUser(address).then((res) => $userState.setKey("user", res.data));
      api
        .getUserRanks(address)
        .then((res) => $userState.setKey("rankData", res.data));
      api
        .getUserStakeData(address)
        .then((res) => $userState.setKey("userStakeData", res.data));
      getAllBonusTransactions().then((data) =>
        $userState.setKey("bonusTransactions", data)
      );
    },
  });
});

/**
 * @returns {BonusTransactionHistoryItem[]}
 */
export const getAllBonusTransactions = async () => {
  const { config } = await getConfig();
  const { address } = getAccount(config);
  let pages = [];
  for (let i = 0; i < 5; i++) {
    const res = await api.getBonusTransactionHistory(address, i, 100);
    pages = pages.concat(res.data);
    if (res.data.length < 100) return pages;
  }
  return pages;
};

/**
 * @param {object} [options]
 * @param {boolean} [options.noToast]
 * @returns {Promise<Token>}
 */
export const getUserToken = async (options) => {
  const { config } = await getConfig();
  const userData = $userState.get();
  if (
    userData.token &&
    new Date(userData.token.expires).getTime() >= Date.now()
  )
    return userData.token;
  const { address, isConnected } = getAccount(config);
  if (!address || !isConnected) throw new Error("Please connect your wallet");
  const messageRes = await api.getSiweMessage(address);
  const promise = signMessage(config, {
    message: messageRes.data.message,
  });
  let signedMessage;
  if (options?.noToast) {
    signedMessage = await promise;
  } else {
    signedMessage = await toast
      .promise(promise, {
        loading: "Confirm the message signature in your wallet",
        success: "Successfully signed wallet message",
        error: (err) => api.getApiErrorMessage(err, "Error signing message"),
      })
      .catch(() => {
        throw new Error("Error confirming user");
      });
  }
  const validRes = await api.verifySiweMessage(
    address,
    messageRes.data.message,
    signedMessage
  );
  const token = validRes.data.access;
  $userState.setKey("token", token);
  return token;
};

/** @returns {Promise<void>}*/
export const refetchUserStakeData = async () => {
  const { config } = await getConfig();
  const { address, isConnected } = getAccount(config);
  if (!address || !isConnected) throw new Error("Please connect your wallet");
  const res = await api.getUserStakeData(address);
  $userState.setKey("userStakeData", res.data);
};

/**
 * @param {string | number} tokens
 * @param {object} [options]
 * @param {boolean} [options.noToast]
 * @returns {Promise<void>}
 */
export const userStakeTokens = async (tokens, options) => {
  const { config } = await getConfig();
  const { address, isConnected } = getAccount(config);
  if (!address || !isConnected) throw new Error("Please connect your wallet");
  const token = await getUserToken(options);
  await api.stakeTokens(address, tokens.toString(), token.token);
  await refetchUserStakeData();
};

/**
 * @param {string | number} tokens
 * @param {object} [options]
 * @param {boolean} [options.noToast]
 * @returns {Promise<void>}
 */
export const userUnstakeTokens = async (tokens, options) => {
  const { config } = await getConfig();
  const { address, isConnected } = getAccount(config);
  if (!address || !isConnected) throw new Error("Please connect your wallet");
  const token = await getUserToken(options);
  await api.unstakeTokens(address, tokens.toString(), token.token);
  await refetchUserStakeData();
};

/**
 * @param {string} newCode
 * @param {object} [options]
 * @param {boolean} [options.noToast]
 * @returns {Promise<void>}
 */
export const userUpdateReferralCode = async (newCode, options) => {
  const { config } = await getConfig();
  const { address, isConnected } = getAccount(config);
  if (!address || !isConnected) throw new Error("Please connect your wallet");
  const token = await getUserToken(options);
  await api.updateReferralCode(token.token, address, newCode);
  const res = await api.getUser(address);
  $userState.setKey("user", res.data);
};

/** @returns {Promise<void>}*/
export const userResetReferralCode = async () => {
  const oldUser = $userState.get().user;
  if (!oldUser) return;
  $userState.setKey("user", {
    ...oldUser,
    referred_by: null,
  });
};

/**
 * @param {string} code
 * @param {object} [options]
 * @param {boolean} [options.noToast]
 * @returns {Promise<void>}
 */
export const userApplyBonusCode = async (code, options) => {
  const { config } = await getConfig();
  const { address, isConnected } = getAccount(config);
  if (!address || !isConnected) throw new Error("Please connect your wallet");
  const token = await getUserToken(options);
  const res = await api.applyBonusCode(address, code, token.token);
  $userState.setKey("appliedBonusCode", res.data);
};

export const userLevelUp = async () => {
  const { config } = await getConfig();
  const { address, isConnected } = getAccount(config);
  if (!address || !isConnected) return;
  await api.levelUpUser(address);
  const res = await api.getUserRanks(address);
  $userState.setKey("rankData", res.data);
};

export const resetUserBonusCode = () => {
  return $userState.setKey("appliedBonusCode", null);
};
