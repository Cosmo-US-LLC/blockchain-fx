/**
 * @typedef {import("../api/api.types").API.PaymentToken} PaymentToken
 * @typedef {import("../api/api.types").API.Transaction} Transaction
 */

import toast from "react-hot-toast";
import { parseNum, ceilToDP, formatDollar } from "./number.util";
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

import logo from "../../assets/wallet/logo-small.png";
import logoFilled from "../../assets/wallet/logo-small-filled.png";
import { CARD_IS_SANDBOX, CARD_PARTNER_ID } from "../constants";
import { waitForTransactionReceipt } from "@wagmi/core";

export const walletBuyTokens = new Set([
  "ETH-ERC-20",
  "USDT-ERC-20",
  "BNB-BEP-20",
  "BUSD-BEP-20",
  "USDT-BEP-20",
  "ETH-BASE",
  "USDC-BASE",
  "USDC-BEP-20",
]);

/**
 * @typedef {import("../api/api.types.d.ts").API.TransactionHistoryItem} TransactionHistoryItem
 * @typedef {{type: "created", transaction: Transaction}, {type: "sent"}} TransactionFinishedReturn
 */

/**
 * 
 * @param {string} walletAddress 
 * @param {number} createdAt 
 * @param {{signal?: AbortSignal}} [args]
 * @returns {Promise<TransactionHistoryItem>} 
 */
export const waitForNextTransaction = (
  walletAddress,
  createdAt,
  args
) => {
  return new Promise((resolve, reject) => {
    const confirm = (transaction) => {
      clearInterval(checkInterval)
      resolve(transaction)
    }
    const checkInterval = setInterval(async () => {
      if (args?.signal?.aborted) {
        reject()
        return clearInterval(checkInterval)
      }
      try {
        const res = await api.getTransactionHistory(walletAddress, 0, 1)
        const transaction = res.data[0]
        if (!transaction) return
        if (new Date(transaction.created_at).getTime() < createdAt) return
        if (transaction.status === 'completed') {
          confirm(transaction)
        }
      } catch (_) {}
    }, 5000)
  })
}

/**
 * @typedef {{type: 'sending' | 'finalizing'} | {type: 'confirming', transactionHash: string} | {type: 'finished', transaction: TransactionHistoryItem} | {type: 'errored', error: unknown}} BuyState
 */

/**
 * @param {object} args
 * @param {PaymentToken} args.paymentToken
 * @param {string} args.paymentTokenNum
 * @param {string} args.walletAddress
 * @param {(state: BuyState) => void} [args.onStateChanged]
 * @returns {Promise<TransactionFinishedReturn>}
 */
export const buyWithCrypto = async (args) => {
  const apiData = $apiState.get()
  if (apiData.presaleEnded) {
    toast.error('Presale has ended')
    return null
  }

  const minimum =
    Math.ceil(
      (parseNum(args.paymentToken.nowpayments_minimum) / parseNum(args.paymentToken.price)) *
        10 ** 6
    ) /
    10 ** 6

  const paymentTokenNum = parseNum(args.paymentTokenNum)
  if (paymentTokenNum < minimum) {
    if (args.showPaymentsAsUsd)
      toast.error(`Must pay more than ${formatDollar(minimum * parseNum(args.paymentToken.price))}`)
    else toast.error(`Must pay more than ${minimum} ${args.paymentToken.symbol.toUpperCase()}`)
    return null
  }

  if (paymentTokenNum <= 0) {
    toast.error(`Must pay more than 0 ${args.paymentToken.symbol.toUpperCase()}`)
    return null
  }

  const walletTransfer = walletBuyTokens.has(
    args.paymentToken.symbol.toUpperCase() + '-' + args.paymentToken.chain.toUpperCase()
  )
  if (walletTransfer) {
    try {
      args.onStateChanged?.({ type: 'sending' })
      const { config } = await getConfig()

      const chainId = getChainIdFromLabel(args.paymentToken.chain)
      if (!chainId) {
        toast.error(`Invalid chain id for chain ${args.paymentToken.chain}`)
        return null
      }

      const abi = getAbi(chainId)
      if (!abi) {
        toast.error(`Invalid ABI for chain id ${chainId}`)
        return null
      }

      const native = isCurrencyNative(args.paymentToken.symbol, chainId)
      const contractAddress = getContractAddress(chainId, args.paymentToken.symbol)
      const decimals = getDecimals(chainId, args.paymentToken.symbol)

      if (!native && !contractAddress) {
        toast.error(`Invalid contract address for token ${args.paymentToken.symbol}`)
        return null
      }

      let toAddress = apiData.info?.main_payment_wallet_address
      if (args.forceNowPayments) {
        const res = await api.createTransaction({
          payment_token_id: args.paymentToken.id,
          usd_amount:
            args.usdAmount ?? (paymentTokenNum * parseNum(args.paymentToken.price)).toString(),
          wallet_address: args.walletAddress,
          token_amount: paymentTokenNum.toString(),
          product_id: args.productId
        })
        toAddress = res.data.pay_address
      }
      const createdAt = Date.now()
      toast('Confirm in your wallet')

      const transactionHash = await sendGenericTransaction(config, {
        to: toAddress,
        value: paymentTokenNum,
        abi,
        chainId,
        contractAddress,
        decimals,
        native
      })
      args.onStateChanged?.({ type: 'confirming', transactionHash })
      await waitForTransactionReceipt(config, { hash: transactionHash })
      api.createTransactionMetadata(args.walletAddress ?? '', transactionHash)
      args.onStateChanged?.({ type: 'finalizing' })
      const transaction = await waitForNextTransaction(args.walletAddress, createdAt)
      args.onStateChanged?.({ type: 'finished', transaction })
      return {
        type: 'sent'
      }
    } catch (err) {
      console.error('ERRORED', err)
      args.onStateChanged?.({ type: 'errored', error: err })
      throw err
    }
  } else {
    try {
      const res = await api.createTransaction({
        payment_token_id: args.paymentToken.id,
        usd_amount: (paymentTokenNum * parseNum(args.paymentToken.price)).toString(),
        wallet_address: args.walletAddress,
        token_amount: paymentTokenNum.toString(),
        product_id: args.productId
      })
      return {
        type: 'created',
        transaction: res.data
      }
    } catch (err) {
      toast.error(api.getApiErrorMessage(err, 'Error creating transaction'))
      throw err
    }
  }
};

/**
 * @param {object} args
 * @param {walletAddress} args.walletAddress
 * @param {number} args.usd
 * @param {(tokensBought: number | undefined, transaction: TransactionHistoryItem | undefined) => void} [args.onSuccess]
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
    const isSandbox = CARD_IS_SANDBOX;

    let isPending = false;
    let checkInterval = null;
    let successCalled = false;
    let errorCalled = false;
    let cancelledCalled = false;

    const onSuccess = (tokensBought, transaction) => {
      if (successCalled || errorCalled || cancelledCalled) return;
      successCalled = true;
      args.onSuccess?.(tokensBought, transaction);
    };

    const onError = () => {
      if (successCalled || errorCalled || cancelledCalled) return;
      errorCalled = true;
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
            onSuccess(parseNum(transaction.tokens_bought), transaction)
            widget.close();
          }
        } catch (_) {}
      }, 5000);
    };

    const widget = new WertWidget({
      click_id: transactionRes.data.clickId,
      partner_id: CARD_PARTNER_ID,
      origin: isSandbox ? "https://sandbox.wert.io" : undefined,
      theme: "dark",
      ...transactionRes.data.signedData,
      extra: {
        item_info: {
          name: `$BFX`,
          author_image_url: `${window.location.origin}${logo}`,
          author: "BlockchainFX",
          image_url: `${window.location.origin}${logo}`,
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
          cancelledCalled = true;
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
