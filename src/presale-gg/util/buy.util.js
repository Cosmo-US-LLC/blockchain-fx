/**
 * @typedef {import("../api/api.types").API.PaymentToken} PaymentToken
 * @typedef {import("../api/api.types").API.Transaction} Transaction
 */

import toast from "react-hot-toast";
import { parseNum, ceilToDP } from "./number.util";
import {
  getAbi,
  getChainIdFromLabel,
  getConfig,
  getContractAddress,
  getDecimals,
  isCurrencyNative,
  sendGenericTransaction,
} from "../web3";
import { $apiState } from "../stores/api.store";
import { api } from "../api";

import logo from "../../assets/TheUltimateSec/logo.svg";

export const walletBuyTokens = new Set([
  "ETH-ERC-20",
  "USDT-ERC-20",
  "BNB-BEP-20",
  "BUSD-BEP-20",
  "USDT-BEP-20",
]);

/**
 * @typedef {{type: "created", transaction: Transaction}, {type: "sent"}} TransactionFinishedReturn
 */

/**
 * @param {object} args
 * @param {PaymentToken} args.paymentToken
 * @param {string} args.paymentTokenNum
 * @param {string} args.walletAddress
 * @returns {Promise<TransactionFinishedReturn>}
 */
export const buyWithCrypto = async (args) => {
  const apiData = $apiState.get();
  if (apiData.presaleEnded) return toast.error("Presale has ended");

  const minimum =
    Math.ceil(
      (parseNum(args.paymentToken.nowpayments_minimum) /
        parseNum(args.paymentToken.price)) *
        10 ** 6
    ) /
    10 ** 6;

  const paymentTokenNum = parseNum(args.paymentTokenNum);
  if (paymentTokenNum < minimum)
    return toast.error(
      `Must pay more than ${minimum} ${args.paymentToken.symbol.toUpperCase()}`
    );

  const walletTransfer = walletBuyTokens.has(
    args.paymentToken.symbol.toUpperCase() +
      "-" +
      args.paymentToken.chain.toUpperCase()
  );
  if (walletTransfer) {
    return await toast.promise(
      (async () => {
        const { config } = await getConfig();

        const chainId = getChainIdFromLabel(args.paymentToken.chain);
        if (!chainId)
          return toast.error(
            `Invalid chain id for chain ${args.paymentToken.chain}`
          );

        const abi = getAbi(chainId);
        if (!abi) return toast.error(`Invalid ABI for chain id ${chainId}`);

        const native = isCurrencyNative(args.paymentToken.symbol, chainId);
        const contractAddress = getContractAddress(
          chainId,
          args.paymentToken.symbol
        );
        const decimals = getDecimals(chainId, args.paymentToken.symbol);

        if (!native && !contractAddress)
          return toast.error(
            `Invalid contract address for token ${args.paymentToken.symbol}`
          );
        toast("Confirm in your wallet");
        const transactionHash = await sendGenericTransaction(config, {
          to: apiData.info.main_payment_wallet_address,
          value: paymentTokenNum,
          abi,
          chainId,
          contractAddress,
          decimals,
          native,
        });
        api.createTransactionMetadata(
          args.walletAddress ?? "",
          transactionHash
        );
        window.fbq?.("track", "Purchase", {
          value: paymentTokenNum * parseNum(args.paymentToken.price),
          currency: "USD",
        });
        return {
          type: "sent",
        };
      })(),
      {
        loading: "Pending transaction",
        error: (err) => api.getApiErrorMessage(err, "Transaction failed"),
        success: "Successfully confirmed transaction",
      }
    );
  } else {
    const res = await api.createTransaction({
      payment_token_id: args.paymentToken.id,
      usd_amount: (
        paymentTokenNum * parseNum(args.paymentToken.price)
      ).toString(),
      wallet_address: args.walletAddress,
      token_amount: paymentTokenNum.toString(),
    });
    return {
      type: "created",
      transaction: res.data,
    };
  }
};

/**
 * @param {object} args
 * @param {walletAddress} args.walletAddress
 * @param {number} args.usd
 * @param {(tokensBought: number | undefined) => void} [args.onSuccess]
 * @param {() => void} [args.onClosed]
 * @param {() => void} [args.onClosedEarly]
 * @param {() => void} [args.onError]
 */
export const buyWithCard = async (args) => {
  try {
    const { default: WertWidget } = await import("@wert-io/widget-initializer");
    const createdAt = Date.now();
    const transactionRes = await api.createCardTransaction({
      usd_amount: args.usd,
      wallet_address: args.walletAddress,
    });
    const isSandbox = process.env.REACT_APP_CARD_IS_SANDBOX === "true";

    let isPending = false;
    let checkInterval = null;
    let successCalled = false;
    let errorCalled = false;
    let cancelledCalled = false;

    const onSuccess = (tokensBought) => {
      if (successCalled || errorCalled || cancelledCalled) return;
      args.onSuccess?.(tokensBought);
    };

    const onError = () => {
      if (successCalled || errorCalled || cancelledCalled) return;
      args.onError?.();
    };

    const check = () => {
      if (checkInterval) clearInterval(checkInterval);
      checkInterval = setInterval(async () => {
        try {
          const res = await api.getTransactionHistory(args.walletAddress, 0, 1);
          const transaction = res.data[0];
          if (new Date(transaction.created_at).getTime() < createdAt) return;
          if (
            !transaction ||
            transaction.payment_token_name.toLowerCase() !== "card"
          )
            return;
          if (!transaction) return;
          if (transaction.status === "completed") {
            if (successCalled) return;
            onSuccess(parseNum(transaction.tokens_bought));
            widget.close();
          }
        } catch (_) {}
      }, 5000);
    };

    const widget = new WertWidget({
      click_id: transactionRes.data.clickId,
      partner_id: process.env.REACT_APP_CARD_PARTNER_ID,
      origin: isSandbox ? "https://sandbox.wert.io" : undefined,
      theme: "dark",
      ...transactionRes.data.signedData,
      extra: {
        item_info: {
          name: `$BFX`,
          author_image_url: `${window.location.origin}${logo}`,
          author: "BlockchainFX",
        },
      },
      listeners: {
        "payment-status": (e) => {
          if (e.status === "success") {
            onSuccess();
            widget.close();
          } else if (["canceled", "failed", "failover"].includes(e.status)) {
            onError?.();
            widget.close();
          } else if (e.status === "pending") {
            isPending = true;
            if (!checkInterval) check();
          }
        },
      },
    });
    widget.open();
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.zIndex = "500";
    overlay.style.backgroundColor = "rgba(0,0,0,0.4)";

    document.body.appendChild(overlay);
    widget.addEventListeners({
      close: () => {
        document.body.removeChild(overlay);
        if (isPending && !successCalled && !errorCalled && !cancelledCalled) {
          args.onClosedEarly?.();
        }
        if (checkInterval) clearInterval(checkInterval);
      },
    });
  } catch (err) {
    console.error(err);
    toast.error(api.getApiErrorMessage(err, "Error with transaction"));
    throw err;
  }
};
