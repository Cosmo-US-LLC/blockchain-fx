import axios, { AxiosError } from "axios";

const baseUrl = "https://api.presale.gg/v1";
const project = "pump-memes";

/**
 * @typedef {import("./api.types.d.ts").API} API
 * @typedef {import("axios").AxiosResponse} AxiosResponse
 */

/**
 * @template T
 * @param {string} url
 * @param {AxiosRequestConfig} [data={}]
 * @returns {Promise<AxiosResponse<T>>}
 */
export const apiFetch = async (url, data) => {
  const res = await axios({
    url,
    baseURL: baseUrl,
    ...data,
  });
  return res;
};

/**
 *
 * @param {object} args
 * @param {string} [args.name]
 * @param {string} [args.wallet_address]
 * @returns {Promise<AxiosResponse<void>>}
 */
export const postLeads = async (args) => {
  return apiFetch(`/projects/${project}/leads`, {
    method: "POST",
    data: args,
  });
};

/**
 *
 * @returns {Promise<AxiosResponse<API.Stage | null>>}
 */
export const getActiveStage = () => {
  return apiFetch(`/projects/${project}/stages/current`);
};

/**
 *
 * @returns {Promise<AxiosResponse<API.PaymentToken[]>>}
 */
export const getPrices = () => {
  return apiFetch(`/projects/${project}/payment-tokens`);
};

/**
 *
 * @param {string} address
 * @returns {Promise<AxiosResponse<API.User>>}
 */
export const getUser = (address) => {
  return apiFetch(`/projects/${project}/wallet/${address}`);
};

/**
 *
 * @returns {Promise<AxiosResponse<API.Info>>}
 */
export const getProjectInfo = () => {
  return apiFetch(`/projects/${project}/info`);
};

/**
 *
 * @param {string} address
 * @returns {Promise<AxiosResponse<API.SweResponse>>}
 */
export const getSiweMessage = (address) => {
  return apiFetch(`/projects/${project}/wallet/${address}/siwe/message`, {
    method: "POST",
    data: {
      domain: window.location.hostname,
      uri: window.location.href,
    },
  });
};

/**
 * @typedef {object} SiweReturn
 * @property {API.Token}
 */

/**
 *
 * @param {string} address
 * @param {string} message
 * @param {string} signature
 * @returns {Promise<AxiosResponse<SiweReturn>>}
 */
export const verifySiweMessage = (address, message, signature) => {
  return apiFetch(`/projects/${project}/wallet/${address}/siwe/verify`, {
    method: "POST",
    data: {
      message,
      signature,
    },
  });
};

/**
 * @typedef {object} UtmArgs
 * @property {string} [referrer]
 * @property {string} [utm_source]
 * @property {string} [utm_medium]
 * @property {string} [utm_campaign]
 * @property {string} [utm_content]
 * @property {string} [utm_term]
 */

/**
 *
 * @returns {UtmArgs}
 */
export const getUtmArgs = () => {
  const url = new URL(window.location.href);
  return {
    referrer: document.referrer || undefined,
    utm_source: url.searchParams.get("utm_source") ?? undefined,
    utm_medium: url.searchParams.get("utm_medium") ?? undefined,
    utm_campaign: url.searchParams.get("utm_campaign") ?? undefined,
    utm_content: url.searchParams.get("utm_content") ?? undefined,
    utm_term: url.searchParams.get("utm_term") ?? undefined,
  };
};

/**
 *
 * @param {object} args
 * @param {string} args.wallet_address
 * @param {number} args.payment_token_id
 * @param {string} args.usd_amount
 * @param {string} args.token_amount
 *
 * @returns {Promise<AxiosResponse<API.Transaction>>}
 */
export const createTransaction = (args) => {
  return apiFetch(
    `/projects/${project}/wallet/${args.wallet_address}/transactions/nowpayments`,
    {
      method: "POST",
      data: {
        payment_token_id: args.payment_token_id,
        usd_amount: args.usd_amount,
        token_amount: args.token_amount,
        ...getUtmArgs(),
      },
    }
  );
};

/**
 *
 * @param {string} address
 * @param {number} page
 * @param {number} [limit=12]
 * @returns {Promise<AxiosResponse<API.TransactionHistoryItem>>}
 */
export const getTransactionHistory = (address, page, limit = 12) => {
  return apiFetch(`/projects/${project}/wallet/${address}/transactions`, {
    params: {
      page,
      limit,
    },
  });
};

/**
 *
 * @param {string} address
 * @param {string} transactionHash
 * @returns {Promise<AxiosResponse<null>>}
 */
export const createTransactionMetadata = (address, transactionHash) => {
  return apiFetch(
    `/projects/${project}/wallet/${address}/transactions/metadata`,
    {
      method: "POST",
      data: {
        transaction_hash: transactionHash,
        ...getUtmArgs(),
      },
    }
  );
};

/**
 *
 * @returns {Promise<AxiosResponse<API.LeaderboardEntry[]>>}
 */
export const getLeaderboard = () => {
  return apiFetch(`/projects/${project}/leaderboard`);
};

/**
 *
 * @param {string} address
 * @returns {Promise<AxiosResponse<API.LeaderboardEntry>>}
 */
export const getUserLeaderboardRank = (address) => {
  return apiFetch(`/projects/${project}/leaderboard`, {
    params: { wallet_address: address },
  });
};

/**
 *
 * @param {string} token
 * @param {string} address
 * @param {string} referralCode
 * @returns {Promise<AxiosResponse<API.User>>}
 */
export const updateReferralCode = (token, address, referralCode) => {
  return apiFetch(`/projects/${project}/wallet/${address}`, {
    method: "PATCH",
    data: { referral_code: referralCode },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

/**
 *
 * @returns {Promise<AxiosResponse<API.StakeData>>}
 */
export const getStakeData = () => {
  return apiFetch(`/projects/${project}/stakes`);
};

/**
 *
 * @param {string} address
 * @returns {Promise<AxiosResponse<API.StakeData>>}
 */
export const getUserStakeData = (address) => {
  return apiFetch(`/projects/${project}/wallet/${address}/stakes`);
};

/**
 *
 * @param {string} address
 * @param {string} numTokens
 * @param {string} accessToken
 * @returns {Promise<AxiosResponse<void>>}
 */
export const stakeTokens = (address, numTokens, accessToken) => {
  return apiFetch(`/projects/${project}/wallet/${address}/stakes`, {
    method: "POST",
    data: { tokens: numTokens },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

/**
 *
 * @param {string} address
 * @param {string} numTokens
 * @param {string} accessToken
 * @returns {Promise<AxiosResponse<void>>}
 */
export const unstakeTokens = (address, numTokens, accessToken) => {
  return apiFetch(`/projects/${project}/wallet/${address}/unstake`, {
    method: "POST",
    data: { tokens: numTokens },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

/**
 *
 * @param {string} address
 * @param {string} code
 * @param {string} accessToken
 * @returns {Promise<AxiosResponse<API.BonusCode>>}
 */
export const applyBonusCode = (address, code, accessToken) => {
  return apiFetch(
    `/projects/${project}/wallet/${address}/bonus-codes/${code}/apply`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

/**
 * @param {string} address
 * @returns {Promise<AxiosResponse<API.UserRankData>>}
 */
export const getUserRanks = async (address) => {
  return apiFetch(`/projects/${project}/wallet/${address}/levels`);
};

/**
 * @param {string} address
 * @returns {Promise<AxiosResponse<null>>}
 */
export const levelUpUser = (address) => {
  return apiFetch(`/projects/${project}/wallet/${address}/levels`, {
    method: "POST",
  });
};

/**
 * @param {string} walletAddress
 * @returns {Promise<AxiosResponse<import("../../presale-gg/api/api.types.d.ts").API.BonusCode>>}
 */
export const getReferralBonuses = (walletAddress) => {
  return apiFetch(
    `/projects/${project}/wallet/${walletAddress}/referrals/bonuses`
  );
};

/**
 *
 * @param {unknown} e
 * @param {string} [defaultMsg]
 * @returns {string}
 */
export const getApiErrorMessage = (e, defaultMsg) => {
  if (e instanceof AxiosError) return getApiErrorMessage(e.response?.data);
  if (
    typeof e === "object" &&
    e &&
    "shortMessage" in e &&
    typeof e.shortMessage === "string"
  ) {
    return e.shortMessage;
  }
  if (
    typeof e === "object" &&
    e &&
    "message" in e &&
    typeof e.message === "string"
  ) {
    const errors = e.message.split(" | ");
    const error = errors[0];
    if (typeof error === "string" && !error.includes("Message: ")) {
      if (error.includes("Details: "))
        return error.split("Details: ")[1].split("\n")[0];
      return error;
    }
    const msg = error.split("Message: ")[1] ?? defaultMsg;
    let path = (error.split("Path: ")[1] ?? "").split(" ~ ")[0];
    path = path.split("body.")[1] ?? path;
    path = path
      .split("_")
      .map((str) => (str ? str[0].toUpperCase() + str.slice(1) : ""))
      .join(" ");

    if (path) return `${path} - ${msg}`;
    return msg ?? defaultMsg;
  }
  return defaultMsg ?? "Internal server error";
};