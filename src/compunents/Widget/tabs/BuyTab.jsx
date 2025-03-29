import React, { useState, useEffect, useRef, useMemo } from "react";
import info from "../../../assets/wallet/i.svg";
import bfxicn from "../../../assets/wallet/bfx.webp";
import clsx from "clsx";
import { useApiState } from "../../../presale-gg/stores/api.store";
import {
  buyWithCard,
  buyWithCrypto,
  formatDollar,
  formatNumber,
  groupTokens,
  parseNum,
  roundToDP,
} from "../../../presale-gg/util";
import { tokenImageMap } from "../../../presale-gg/assets/img/tokens";

import { LISTING_PRICE } from "../../../presale-gg/constants";
import TokenSelectDropdown from "../../../compunents/ui/TokenSelectDropdown";
import {
  useAccount,
  useDebounce,
  useUserRankData,
} from "../../../presale-gg/web3";
import toast from "react-hot-toast";
import { TransactionModal } from "../../../compunents/ui/modals/TransactionModal";
import {
  BonusCodeInput,
  ReferralCodeInput,
} from "../../../compunents/ui/CodeInput";
import DisclaimerModal from "../../../compunents/ui/modals/DisclaimerModal";
import Modal from "../../../compunents/ui/modals/Modal";
import ContactModal from "../../../compunents/ui/modals/ContactModal";
import { userLevelUp } from "../../../presale-gg/stores/user.store";
import { api } from "../../../presale-gg/api";
import confetti from "canvas-confetti";
import { showConnectWalletModal } from "../../../presale-gg/stores/modal.store";

const BuyTab = () => {
  const apiData = useApiState();
  /** @type {[PaymentToken | null, (newVal: PaymentToken | null) => void]} */
  const [selectedToken, setSelectedToken] = useState(null);

  useEffect(() => {
    if (selectedToken || !apiData.paymentTokens?.length) return;
    setSelectedToken(
      apiData.paymentTokens.find(
        (token) =>
          token.symbol.toUpperCase() === "ETH" &&
          token.chain.toUpperCase() === "ERC-20"
      ) ?? apiData.paymentTokens[0]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiData.paymentTokens]);

  const prevTokenRef = useRef(selectedToken)
  useEffect(() => {
    if (!selectedToken) return
    let paymentTokenNum = parseNum(paymentTokenNumStr)
    if (paymentTokenNum === 1 && selectedToken.symbol.toLowerCase() === "card") {
      paymentTokenNum = 100
      setPaymentTokenNumStr("100")
    } else if (paymentTokenNum === 100 && prevTokenRef.current?.symbol?.toLowerCase() === "card") {
      paymentTokenNum = 1
      setPaymentTokenNumStr("1")
    }
    setReceiveTokenNumStr(roundToDP(paymentTokenNum * parseNum(selectedToken.price), 2))
    prevTokenRef.current = selectedToken
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedToken])

  const handleScroll = (event, targetId, offset) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const stageFrac =
    (apiData.stage?.cumulative_usd_raised ?? 0) /
    (apiData.stage?.next_stage_target_usd ?? 1);

  const groupedTokens = useMemo(
    () => (apiData.paymentTokens ? groupTokens(apiData.paymentTokens) : []),
    [apiData.paymentTokens]
  );

  const partialNumRegexp = /^(\d*|(\d+\.?\d*))$/;
  const [paymentTokenNumStr, setPaymentTokenNumStr] = useState("1");
  const [receiveTokenNumStr, setReceiveTokenNumStr] = useState("0");

  const [transactionLoading, setTransactionLoading] = useState(false);
  const [createdTransaction, setCreatedTransaction] = useState(null);
  const [transactionModalOpen, setTransactionModalOpen] = useState(false);

  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [disclaimerModalOpen, setDisclaimerModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [erroredModalOpen, setErroredModalOpen] = useState(false);
  const [pendingModalOpen, setPendingModalOpen] = useState(false);
  const [successBoughtModalOpen, setSuccessBoughtModalOpen] = useState(false);
  const [successBoughtTokens, setSuccessBoughtTokens] = useState(0);
  const [openContactOnTransactionClose, setOpenContactOnTransactionClose] =
    useState(false);

  useEffect(() => {
    if (!transactionModalOpen && openContactOnTransactionClose) {
      setOpenContactOnTransactionClose(false);
      setContactModalOpen(true);
    }
  }, [openContactOnTransactionClose, transactionModalOpen]);

  const accountData = useAccount();
  const buy = async () => {
    const account = accountData.address;
    if (!account) return toast.error("You must connect your wallet first");
    if (apiData.presaleEnded) return toast.error("Presale has ended")
    if (transactionLoading) return;
    setTransactionLoading(true);
    if (!selectedToken) return;
    try {
      if (selectedToken.symbol.toLowerCase() === "card") {
        setDisclaimerModalOpen(true);
      } else {
        const res = await buyWithCrypto({
          paymentToken: selectedToken,
          paymentTokenNum: parseNum(paymentTokenNumStr),
          walletAddress: account,
        });
        if (res.type === "created") {
          setCreatedTransaction(res.transaction);
          setTimeout(() => {
            setTransactionModalOpen(true);
            setOpenContactOnTransactionClose(true);
          }, 30);
        } else {
          setContactModalOpen(true);
        }
      }
    } catch (err) {
      console.error(err)
    }
    setTransactionLoading(false);
  };

  const buyCard = async () => {
    setTransactionLoading(true);
    try {
      const account = accountData.address;
      if (!account) return toast.error("You must connect your wallet first");
      await buyWithCard({
        usd: parseNum(paymentTokenNumStr),
        walletAddress: account,
        onClosedEarly: () => {
          setPendingModalOpen(true);
          setContactModalOpen(true);
        },
        onError: () => setErroredModalOpen(true),
        onSuccess: (tokens) => {
          if (tokens !== undefined) {
            setSuccessBoughtModalOpen(true);
            setSuccessBoughtTokens(tokens);
          } else {
            setSuccessModalOpen(true);
          }
          setContactModalOpen(true);
        },
      });
    } catch (err) {}
    setTransactionLoading(false);
  };

  const [codeInputVisible, setCodeInputVisible] = useState(null);
  const [defaultReferralCode, setDefaultReferralCode] = useState(undefined);
  const [defaultBonusCode, setDefaultBonusCode] = useState(undefined);
  const [codesContainerRef, setCodesContainerRef] = useState(null);
  const handledCodesRef = useRef(false);

  const handleCodes = useDebounce(
    () => {
      if (handledCodesRef.current) return true;
      const params = new URL(window.location.href).searchParams;
      const bonusCode = params.get("bonus_code");
      if (bonusCode) {
        setDefaultBonusCode(bonusCode);
        setCodeInputVisible("bonus");
      }
      const referralCode = params.get("referral_code");
      if (referralCode) {
        setDefaultReferralCode(referralCode);
        setCodeInputVisible("referral");
      }
      const codesContainer = codesContainerRef;
      if (!codesContainer) return;
      if (referralCode || bonusCode) {
        handledCodesRef.current = true;
        codesContainer.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    },
    200,
    [codesContainerRef]
  );

  useEffect(() => handleCodes, [handleCodes]);

  const { usdToNextRank, currentRank, currentLevel, nextRank, usdPerLevel, usdToNextLevel, ranks, ranksLoaded } = useUserRankData();

  const wouldReceiveRank = useMemo(() => {
    const paymentUsd = parseNum(paymentTokenNumStr) * parseNum(selectedToken?.price)
    const levelIncrease = (paymentUsd + (usdPerLevel - usdToNextLevel)) / usdPerLevel
    const wouldBeLevel = currentLevel + levelIncrease
    const wouldReceiveRank = [...ranks].sort((a, b) => b.level - a.level).find((rank) => wouldBeLevel >= rank.level) ?? null
    if (wouldReceiveRank === currentRank) return null
    return wouldReceiveRank
  }, [currentLevel, usdPerLevel, paymentTokenNumStr, selectedToken?.price, ranks, usdToNextLevel, currentRank])

  const [levelUpLoading, setLevelUpLoading] = useState(false);
  const levelUp = async () => {
    if (levelUpLoading) return;
    setLevelUpLoading(true);
    try {
      await toast.promise(userLevelUp(), {
        loading: "Ranking up",
        error: (err) => api.getApiErrorMessage(err, "Error ranking up"),
        success: `Successfully unlocked ${nextRank.rank}`,
      });
      confetti({ gravity: 1, origin: { x: 0.5, y: 0.75 } });
    } catch (_) {}
    setLevelUpLoading(false);
  };

  return (
    <>
      <div className="gap-[10px] justify-between flex flex-col relative w-full min-h-full">
        <div
          className="px-[30px] py-[13px] space-y-[5px] border border-[#FBD914] rounded-[11px]"
          style={{
            background: "#000",
          }}
        >
          <h3 className="text-center text-[#fff] text-[32.476px] leading-[100%] font-[700]">
            {formatDollar(parseNum(apiData.stage?.cumulative_usd_raised))}
          </h3>
          <div className="pt-3">
            <div className="flex justify-between items-center pb-1">
              <span className="text-[#fff] text-[9.74px] font-[400] leading-[100%]">
                {formatNumber(stageFrac * 100, 0, 2)}% of softcap raised
              </span>
              <img src={info} className="w-[6.912px] h-[6.912px]" alt="" />
            </div>
            <div className="bg-gray-800 w-[100%] h-[10px] rounded-[20px]">
              <div
                className="bg-[#E5AE00] h-[10px] rounded-[20px]"
                style={{ width: `${stageFrac * 100}%` }}
              />
            </div>
            <div>
              <p className="text-[#fff] text-end text-[9.74px] font-[400] leading-[150%]">
                {formatDollar(apiData.stage?.next_stage_target_usd, true, 0, 0)}
              </p>
            </div>
          </div>
          <h5 className="text-[#fff] text-[9.74px] text-center font-[400] leading-[100%]">
            {formatNumber(apiData.info?.transactions, 0, 0)} Transactions
          </h5>
        </div>
        <div
          className="px-[24px] py-[7px] rounded-[14.596px]"
          style={{
            background: "rgba(255, 255, 255, 0.09)",
            backdropFilter:"blur(12.145808219909668px)"
          }}
        >
          <h4 className="text-center text-[#fff] text-[9.875px] leading-[75%] font-[700]">
            Listing Price: <span className="text-[#FBD914]"> 1 $BFX = ${formatNumber(LISTING_PRICE)}</span>
          </h4>
        </div>
        <div className="text-[#fff] rounded-[8px] overflow-hidden">
          <TokenSelectDropdown
            tokenList={{
              currencies:
                apiData.paymentTokens
                  ?.filter((token) => token.symbol.toLowerCase() === "card")
                  .map((token) => ({ ...token, chain: "" })) ?? [],
              defaultLabel: "Card",
              placeholder: "Card",
              defaultToken: {
                chain: "",
                id: 0,
                name: "Card",
                symbol: "Card",
                nowpayments_id: null,
                nowpayments_minimum: null,
                price: 1,
              },
            }}
            onChange={(token) => setSelectedToken(token)}
            selectedTokenId={selectedToken?.id}
          />
        </div>
        <div className="grid grid-cols-3 justify-center gap-[8px] flex-wrap <md:grid-cols-2">
          {groupedTokens.map((tokenGroup, i) => (
            <TokenSelectDropdown
              key={i}
              tokenList={tokenGroup}
              onChange={(newToken) => setSelectedToken(newToken)}
              selectedTokenId={selectedToken?.id ?? null}
            />
          ))}
        </div>
        <div className="flex justify-center items-center py-[0px] space-x-[15px]">
          <hr className="h-[1px] flex-1" />
          <span className="text-[#fff] mx-4 text-[9.618px] font-[700] leading-[75%]">
            1 $BFX = ${formatNumber(parseNum(apiData.stage?.token_price))}
          </span>
          <hr className="h-[1px] flex-1" />
        </div>
        <div className="px-2 pb-2 rounded-[8px]"
         style={{
          background: "rgba(255, 255, 255, 0.09)",
          backdropFilter:"blur(12.145808219909668px)"
        }}
        >
          <div className="  px-1 flex justify-between items-center">
            <div className="w-[80%]">
          <label className="text-[#8D8D8D] text-[8.888px] font-[700] leading-[5.888px]">
            You Pay in{" "}
            {selectedToken?.symbol.toUpperCase() === "CARD"
              ? "USD"
              : selectedToken?.symbol.toUpperCase()}
            :
          </label>
              <input
                type="text"
                className="h-[17.281px] w-[100%] text-[#fff] text-[14.85px] font-[700] outline-none bg-[transparent] placeholder:text-[#000] placeholder:opacity-50"
                placeholder="0"
                value={paymentTokenNumStr}
                onFocus={(e) => {
                  if (paymentTokenNumStr === "0") setPaymentTokenNumStr("");
                }}
                onBlur={(e) => {
                  if (paymentTokenNumStr === "") setPaymentTokenNumStr("0");
                }}
                onChange={(e) => {
                  let val = e.target.value;
                  if (!partialNumRegexp.test(val)) {
                    val = paymentTokenNumStr;
                  }
                  if (parseNum(val) > 999999999) {
                    val = "999999999";
                  }
                  setPaymentTokenNumStr(val);
                  e.target.value = val;
                  const numVal = parseNum(val);
                  const receiveNum = roundToDP(
                    (numVal * parseNum(selectedToken?.price)) /
                      parseNum(apiData.stage?.token_price),
                    4
                  );
                  setReceiveTokenNumStr(receiveNum);
                }}
              />
            </div>
            <div className="relative border px-[4px] rounded-[8px] w-[74px]">
              <div className="justify-start flex h-[24px] items-center space-x-[3px]">
                {selectedToken && (
                  <>
                    <img
                      className="w-[15.813px] h-[15.813px] object-cover"
                      src={tokenImageMap[selectedToken.symbol.toLowerCase()]}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="text-[#fff] !overflow-hidden !text-clip text-[8.888px] font-[700]">
                        {selectedToken?.symbol.toUpperCase() === "CARD"
                          ? "USD"
                          : selectedToken?.symbol.toUpperCase()}
                      </span>
                      <span
                        className={clsx(
                          "text-[#777] text-[6.688px] font-[900] leading-[1] whitespace-nowrap transition-colors"
                        )}
                      >
                        {selectedToken.chain.toUpperCase()}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 pb-2 rounded-[8px]"
         style={{
          background: "rgba(255, 255, 255, 0.09)",
          backdropFilter:"blur(12.145808219909668px)"
        }}>
         
          <div className=" px-1 flex justify-between items-center">
            {/* <div className="relative max-w-[75px] "></div> */}
            <div className="w-[80%] ">
            <label className="text-[#8D8D8D] text-[8.888px] font-[700] leading-[5.888px]">
            You Receive $BFX
            {wouldReceiveRank && <>
              {" "}+{" "}
              <span
                onClick={(e) => handleScroll(e, "premium", 90)}
                className="cursor-pointer text-[#299A00] underline"
              >
                {wouldReceiveRank.rank} NFT
              </span>
            </>}
          </label>
              <input
                type="text"
                className="h-[17.281px] w-[80%] text-[14.85px] font-[700] outline-none bg-[transparent] placeholder:text-[#000] text-[#fff] placeholder:opacity-50"
                placeholder="0"
                value={receiveTokenNumStr}
                onFocus={(e) => {
                  if (receiveTokenNumStr === "0") setReceiveTokenNumStr("");
                }}
                onBlur={(e) => {
                  if (receiveTokenNumStr === "") setReceiveTokenNumStr("0");
                }}
                onChange={(e) => {
                  let val = e.target.value;
                  if (!partialNumRegexp.test(val)) {
                    val = receiveTokenNumStr;
                  }
                  if (parseNum(val) > 99999999999) {
                    val = "99999999999";
                  }
                  setReceiveTokenNumStr(val);
                  e.target.value = val;
                  const numVal = parseNum(val);
                  const paymentNum = roundToDP(
                    (numVal * parseNum(apiData.stage?.token_price)) /
                      parseNum(selectedToken?.price),
                    6
                  );
                  setPaymentTokenNumStr(paymentNum.toString());
                }}
              />
            </div>
            <div className="relative w-[74px] border rounded-[8px] px-[4px] ">
              <div className="justify-start flex h-[24px]  items-center space-x-[5px] cursor-pointer">
                <img
                  className="w-[15.8px] h-[15.8px] object-cover"
                  src={bfxicn}
                  alt=""
                />
                <span className="text-[#fff] text-[8.888px] font-[700] leading-[50px]">
                  BFX
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              if (accountData.isConnected) buy()
              else showConnectWalletModal()
            }}
            className="text-[#000] bg-[#E5AE00] px-[12px] rounded-[8px] hover:text-[#E5AE00] hover:bg-transparent text-[11.85px] font-[800] border border-[#E5AE00]  hover:border-[#E5AE00] w-[100%] h-[32.094px]"
          >
            {transactionLoading ? "Loading..." : (apiData.presaleEnded ? "Presale Ended" : (!accountData.isConnected ? "Connect Wallet" : "Buy Now"))}
          </button>
        </div>
        {ranksLoaded && (
        (usdToNextRank > 0 || !nextRank) ? (
        <div
          className="px-[24px] py-[5px] space-y-[5px] border border-[#939393]"
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <h4 className="text-center text-[#636363] text-[8.888px] leading-[70%] font-[700]">
            You get {currentRank?.bonus_percentage ?? 0}% bonus tokens
          </h4>
          <h4 className="text-center text-[#636363] text-[8.888px] leading-[70%] font-[700]">
            {nextRank
              ? `Buy ${formatDollar(usdToNextRank)} more to unlock ${
                  nextRank.bonus_percentage
                }% bonus`
              : "That is the highest bonus level"}
          </h4>
        </div>
      ) : (
        <button
          onClick={levelUp}
          className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[11.85px] font-[800] border border-[#E5AE00]  hover:border-[#000] w-[100%] h-[32.094px]"
        >
          Unlock {nextRank.rank} NFT
        </button>
      )
    )}
        <div
          className="flex justify-center items-center space-x-[24px]"
          ref={(el) => setCodesContainerRef(el)}
        >
          <button
            className="text-[8.888px] text-[#fff] font-[700] underline cursor-pointer"
            onClick={() =>
              setCodeInputVisible((code) => (code === "bonus" ? null : "bonus"))
            }
          >
            Bonus Code
          </button>
          <button
            className="text-[8.888px] text-[#fff] font-[700] underline cursor-pointer"
            onClick={() =>
              setCodeInputVisible((code) =>
                code === "referral" ? null : "referral"
              )
            }
          >
            Referral Code
          </button>
        </div>
        {codeInputVisible === "bonus" && (
          <BonusCodeInput defaultValue={defaultBonusCode} />
        )}
        {codeInputVisible === "referral" && (
          <ReferralCodeInput defaultValue={defaultReferralCode} />
        )}
      </div>
      {createdTransaction && (
        <TransactionModal
          transaction={createdTransaction}
          open={transactionModalOpen}
          onClose={() => setTransactionModalOpen(false)}
        />
      )}
      <DisclaimerModal
        open={disclaimerModalOpen}
        onClose={() => setDisclaimerModalOpen(false)}
        onContinue={() => {
          buyCard();
          setDisclaimerModalOpen(false);
        }}
      />
      <Modal
        title="Transaction Successful"
        open={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        className="max-w-[18rem]"
      >
        <p className="leading-[1.4] text-[14px]">
          The transaction was successful. Please wait a minute and refresh the
          transactions tab to see your tokens.
        </p>
      </Modal>
      <Modal
        title="Transaction Successful"
        open={successBoughtModalOpen}
        onClose={() => setSuccessBoughtModalOpen(false)}
        className="max-w-[18rem]"
      >
        <p className="leading-[1.4] text-[14px]">
          The transaction was successful. You bought{" "}
          <span className="font-bold">
            {formatNumber(successBoughtTokens, 0, 4)} BFX
          </span>
          . Check your transaction tab for more details
        </p>
      </Modal>
      <Modal
        title="Transaction Errored"
        open={erroredModalOpen}
        onClose={() => setErroredModalOpen(false)}
        className="max-w-[18rem]"
      >
        <p className="leading-[1.4] text-[14px]">
          The transaction was not successful. Please try again.
        </p>
      </Modal>
      <Modal
        title="Transaction Pending"
        open={pendingModalOpen}
        onClose={() => setPendingModalOpen(false)}
        className="max-w-[18rem]"
      >
        <p className="leading-[1.4] text-[14px]">
          The transaction is pending. Please wait a minute and refresh the
          transactions tab to see your tokens.
        </p>
      </Modal>
      <ContactModal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
};

const buyTabData = {
  component: BuyTab,
  label: "Buy",
  key: "buy",
};

export default buyTabData;
