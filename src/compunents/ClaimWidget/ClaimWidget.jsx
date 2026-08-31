/* global BigInt */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { waitForTransactionReceipt, writeContract } from "@wagmi/core";
import clsx from "clsx";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import {
  FiAlertTriangle,
  FiCheckCircle,
  FiCreditCard,
  FiLoader,
  FiRefreshCw,
} from "react-icons/fi";
import { formatUnits } from "viem";

import bfxAsset from "../../assets/wallet/bfx.webp";
import {
  CLAIM_CHAIN_ID,
  CLAIM_CONTRACT_ADDRESS,
  CLAIM_TOKEN_DECIMALS,
  CLAIM_TOKEN_SYMBOL,
} from "../../claim/config";
import claims from "../../data/claims.json";
import claimAbi from "../../presale-gg/abi/claim.json";
import { showConnectWalletModal } from "../../presale-gg/stores/modal.store";
import { useAccount } from "../../presale-gg/web3";
import { getConfig } from "../../presale-gg/web3/config";
import { getPublicClient } from "../../presale-gg/web3/public-client";
import styles from "./ClaimWidget.module.css";

const ADDRESS_PATTERN = /^0x[0-9a-fA-F]{40}$/;
const ZERO_ADDRESS_PATTERN = /^0x0{40}$/i;

const ClaimWidget = ({ className }) => {
  const { t, i18n } = useTranslation();
  const account = useAccount();
  const address = account?.address || null;
  const isConnected = Boolean(account?.isConnected && address);
  const [checking, setChecking] = useState(false);
  const [claimLoading, setClaimLoading] = useState(false);
  const [userClaim, setUserClaim] = useState(null);
  const [hasClaimed, setHasClaimed] = useState(undefined);
  const [readError, setReadError] = useState(false);

  const copy = useCallback(
    (key, defaultValue, values = {}) =>
      t(`claim_widget.${key}`, { defaultValue, ...values }),
    [t]
  );

  const claimIsConfigured =
    ADDRESS_PATTERN.test(CLAIM_CONTRACT_ADDRESS) &&
    !ZERO_ADDRESS_PATTERN.test(CLAIM_CONTRACT_ADDRESS) &&
    Array.isArray(claims) &&
    claims.length > 0;

  const getUserClaimData = useCallback(async () => {
    setReadError(false);

    if (!claimIsConfigured || !isConnected || !address) {
      setChecking(false);
      setUserClaim(null);
      setHasClaimed(undefined);
      return;
    }

    setChecking(true);
    setUserClaim(null);
    setHasClaimed(undefined);

    try {
      const claim = claims.find(
        (entry) => entry.address.toLowerCase() === address.toLowerCase()
      );

      if (!claim) {
        setUserClaim(null);
        setHasClaimed(false);
        return;
      }

      setUserClaim(claim);
      const publicClient = getPublicClient(CLAIM_CHAIN_ID);
      const claimed = await publicClient.readContract({
        address: CLAIM_CONTRACT_ADDRESS,
        abi: claimAbi,
        functionName: "hasClaimed",
        args: [address],
      });
      setHasClaimed(Boolean(claimed));
    } catch (error) {
      console.warn("Could not check claim status:", error);
      setReadError(true);
      setHasClaimed(undefined);
    } finally {
      setChecking(false);
    }
  }, [address, claimIsConfigured, isConnected]);

  useEffect(() => {
    getUserClaimData();
  }, [getUserClaimData]);

  const formattedAmount = useMemo(() => {
    if (!userClaim) return null;

    const tokenAmount = Number(
      formatUnits(BigInt(userClaim.amount), CLAIM_TOKEN_DECIMALS)
    );

    return new Intl.NumberFormat(
      i18n.resolvedLanguage || i18n.language || "en",
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    ).format(tokenAmount);
  }, [i18n.language, i18n.resolvedLanguage, userClaim]);

  const claimTokens = async () => {
    if (claimLoading || !address || !userClaim) return;

    setClaimLoading(true);

    try {
      await toast.promise(
        (async () => {
          const { config } = await getConfig();
          const publicClient = getPublicClient(CLAIM_CHAIN_ID);
          const args = [BigInt(userClaim.amount), userClaim.proof];
          let gas;

          try {
            const estimate = await publicClient.estimateContractGas({
              address: CLAIM_CONTRACT_ADDRESS,
              abi: claimAbi,
              functionName: "claim",
              args,
              account: address,
            });
            gas = (estimate * 15n) / 10n;
          } catch (error) {
            console.warn("Could not estimate claim gas:", error);
          }

          const hash = await writeContract(config, {
            address: CLAIM_CONTRACT_ADDRESS,
            abi: claimAbi,
            functionName: "claim",
            args,
            ...(gas ? { gas } : {}),
          });
          const receipt = await waitForTransactionReceipt(config, { hash });

          if (receipt.status !== "success") {
            throw new Error("Transaction failed");
          }

          setHasClaimed(true);
          return receipt;
        })(),
        {
          loading: copy(
            "claiming",
            "Claiming tokens. This may take a few minutes."
          ),
          success: copy("claim_success", "Successfully claimed BFX!"),
          error: (error) => {
            const message =
              error && typeof error.message === "string" ? error.message : "";

            return /rejected|denied|cancelled/i.test(message)
              ? copy("claim_cancelled", "Transaction cancelled in wallet.")
              : copy("claim_error", "Unable to claim tokens. Please try again.");
          },
        }
      );
    } catch (error) {
      console.error("Claim error:", error);
    } finally {
      setClaimLoading(false);
    }
  };

  let Icon = FiAlertTriangle;
  let tone = "muted";
  let title = copy("not_eligible_title", "No tokens to claim");
  let description = copy(
    "not_eligible_description",
    "This wallet address is not eligible for the token claim."
  );
  let action = (
    <button type="button" className={styles.primaryAction} disabled>
      {copy("not_eligible_button", "Not eligible")}
    </button>
  );

  if (!claimIsConfigured) {
    tone = "error";
    title = copy("unavailable_title", "Claim data is not configured");
    description = copy(
      "unavailable_description",
      "Add the final claim contract address and claims list before publishing."
    );
    action = (
      <button type="button" className={styles.primaryAction} disabled>
        {copy("unavailable_button", "Unavailable")}
      </button>
    );
  } else if (!isConnected) {
    Icon = FiCreditCard;
    tone = "gold";
    title = copy("disconnected_title", "Check your BFX allocation");
    description = copy(
      "disconnected_description",
      "Connect the wallet used during the presale to check your claim."
    );
    action = (
      <button
        type="button"
        className={styles.primaryAction}
        onClick={showConnectWalletModal}
      >
        {copy("connect_wallet", "Connect wallet")}
      </button>
    );
  } else if (checking) {
    Icon = FiLoader;
    tone = "gold";
    title = copy("checking_title", "Checking eligibility");
    description = copy(
      "checking_description",
      "Checking this wallet against the official claim list."
    );
    action = (
      <button type="button" className={styles.primaryAction} disabled>
        {copy("checking_button", "Checking…")}
      </button>
    );
  } else if (readError) {
    tone = "error";
    title = copy("read_error_title", "Unable to verify claim status");
    description = copy(
      "read_error_description",
      "We could not check whether this wallet has already claimed."
    );
    action = (
      <button
        type="button"
        className={styles.primaryAction}
        onClick={getUserClaimData}
      >
        <FiRefreshCw aria-hidden="true" />
        {copy("retry", "Retry verification")}
      </button>
    );
  } else if (userClaim && hasClaimed === true) {
    Icon = FiCheckCircle;
    tone = "success";
    title = copy("already_claimed_title", "BFX already claimed");
    description = copy(
      "already_claimed_description",
      "You successfully claimed your BFX tokens."
    );
    action = (
      <button type="button" className={styles.primaryAction} disabled>
        {copy("already_claimed_button", "Tokens already claimed")}
      </button>
    );
  } else if (userClaim && hasClaimed === false) {
    Icon = FiCheckCircle;
    tone = "success";
    title = copy("eligible_title", "You have BFX to claim");
    description = copy(
      "eligible_description",
      "Your verified presale allocation is ready."
    );
    action = (
      <button
        type="button"
        className={styles.primaryAction}
        onClick={claimTokens}
        disabled={claimLoading}
      >
        {claimLoading
          ? copy("claiming_button", "Claiming…")
          : copy("claim_tokens", "Claim BFX")}
      </button>
    );
  }

  return (
    <section
      className={clsx(styles.widget, className)}
      aria-labelledby="claim-widget-label"
      aria-busy={checking || claimLoading}
    >
      <h3 id="claim-widget-label" className={styles.label}>
        {copy("label", "Claim BFX")}
      </h3>

      <div className={styles.content}>
        <div className={styles.assetMark} aria-hidden="true">
          <img src={bfxAsset} alt="" />
        </div>

        <div className={styles.status} aria-live="polite" aria-atomic="true">
          <div
            className={clsx(styles.statusIcon, styles[tone], {
              [styles.spin]: checking,
            })}
            aria-hidden="true"
          >
            <Icon />
          </div>
          <h3 className={styles.statusTitle}>{title}</h3>
          <p className={styles.statusDescription}>{description}</p>
        </div>

        {formattedAmount ? (
          <div className={styles.amountRow}>
            <span className={styles.amountLabel}>
              {hasClaimed
                ? copy("claimed_amount", "Claimed amount")
                : copy("claimable_amount", "Claimable amount")}
            </span>
            <strong className={styles.amountValue}>
              <span dir="ltr">{formattedAmount}</span>
              <span className={styles.amountSymbol}>{CLAIM_TOKEN_SYMBOL}</span>
            </strong>
          </div>
        ) : null}

        <div className={styles.actionArea}>{action}</div>
      </div>
    </section>
  );
};

export default ClaimWidget;
