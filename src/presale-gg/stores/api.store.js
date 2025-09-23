import { map } from "nanostores";
import { api } from "../api";
import { useStore } from "@nanostores/react";

/**
 * @typedef {import("../api/api.types").API} API
 * @typedef {import("../api/api.types").API.Stage} Stage
 * @typedef {import("../api/api.types").API.Info} Info
 * @typedef {import("../api/api.types").API.LeaderboardEntry} LeaderboardEntry
 * @typedef {import("../api/api.types").API.PaymentToken} PaymentToken
 *
 * @typedef {object} ApiStateValue
 * @property {Stage | null} ApiStateValue.stage
 * @property {boolean} ApiStateValue.stageLoading
 * @property {PaymentToken[] | null} ApiStateValue.paymentTokens
 * @property {boolean} ApiStateValue.paymentTokensLoading
 * @property {boolean} ApiStateValue.presaleEnded
 * @property {LeaderboardEntry[] | null} ApiStateValue.leaderboard
 * @property {Info | null} ApiStateValue.info
 */

/** @type {ApiStateValue} */
export const defaultApiState = {
  stage: null,
  stageLoading: true,
  paymentTokens: null,
  paymentTokensLoading: true,
  presaleEnded: false,
  leaderboard: null,
  info: null,
};

export const $apiState = map({ ...defaultApiState });
export const useApiState = () => useStore($apiState);

/** @param {Stage} stage */
export const setStage = (stage) => {
  $apiState.setKey("stage", stage);
  $apiState.setKey("stageLoading", false);
};

/** @param {boolean} presaleEnded */
export const setPresaleEnded = (presaleEnded) => {
  $apiState.setKey("presaleEnded", presaleEnded);
};

/** @param {LeaderboardEntry[]} leaderboard */
export const setLeaderboard = (leaderboard) => {
  $apiState.setKey("leaderboard", leaderboard);
};

/** @param {bool} loading */
export const setPaymentTokensLoading = (loading) =>
  $apiState.setKey("paymentTokensLoading", loading);

/** @param {PaymentToken[]} paymentTokens */
export const setPaymentTokens = (paymentTokens) => {
  $apiState.setKey("paymentTokens", paymentTokens);
  $apiState.setKey("paymentTokensLoading", false);
};

/** @param {Info} info */
export const setApiInfo = (info) => {
  $apiState.setKey("info", info);
};

api
  .getActiveStage()
  .then((res) => {
    if (res.data === null) return setPresaleEnded(true);
    setStage(res.data);
  })
  .catch(() => {});
api.getPrices().then((res) => setPaymentTokens(res.data));
api
  .getLeaderboard()
  .then((res) => setLeaderboard(res.data))
  .catch(() => {});
api.getProjectInfo().then((res) => setApiInfo(res.data));
