import React, { useState, useEffect, useRef, useMemo } from "react";
import info from "../assets/wallet/i.svg";
import bfxicn from "../assets/wallet/bfx.webp";
import oneicon1 from "../assets/OneAppSec/oneicon (1).svg";
import oneicon2 from "../assets/OneAppSec/oneicon (4).svg";
import oneicon3 from "../assets/OneAppSec/oneicon (2).svg";
import oneicon4 from "../assets/OneAppSec/oneicon (3).svg";
import iconapon from "../assets/HowToBuySec/ei_arrow-up.svg";
import iconcls from "../assets/HowToBuySec/ei_arrow-up (1).svg";
import swpicon from "../assets/wallet/swp.svg";
import cer from "../assets/wallet/cer.svg";
import clsx from "clsx";
import { useApiState } from "../presale-gg/stores/api.store";
import {
  buyWithCard,
  buyWithCrypto,
  formatDollar,
  formatNumber,
  groupTokens,
  parseNum,
  roundToDP,
} from "../presale-gg/util";
import { tokenImageMap } from "../presale-gg/assets/img/tokens";

import { LISTING_PRICE } from "../presale-gg/constants";
import TokenSelectDropdown from "../compunents/ui/TokenSelectDropdown";
import { useAccount, useDebounce } from "../presale-gg/web3";
import toast from "react-hot-toast";
import { TransactionModal } from "../compunents/ui/modals/TransactionModal";
import { BonusCodeInput, ReferralCodeInput } from "../compunents/ui/CodeInput";
import DisclaimerModal from "../compunents/ui/modals/DisclaimerModal";
import Modal from "../compunents/ui/modals/Modal";

/**
 * @typedef {import("../presale-gg/api/api.types").API.PaymentToken} PaymentToken
 */

const items = [
  {
    icon: oneicon1,
    title: "1. Select Payment Method",
    description:
      "<li>Choose between ETH, BNB, or USDT (ERC-20 or BEP-20) </li><li>Enter the amount you want to buy</li>",
  },
  {
    icon: oneicon2,
    title: "2. Confirm Transaction",
    description:
      "<li>Click “Buy Now” and send the funds to the wallet listed</li><li>Important: Make sure to use a decentralised wallet like Metamask, Phantom, Coinbase or Trust Wallet </li><li>Your BFX will be linked to the same wallet address you used for payment and will show up on your dashboard instantly. </li><li>Connect your wallet using the “Connect Wallet” button in the top right corner to access the dashboard and check your BFX balance.</li>",
  },
  {
    icon: oneicon3,
    title: "3. Start Earning Today",
    description:
      "<p>Earn BFX and USDT rewards from day one! </p><li>Staking rewards are added to your dashboard daily</li><li>USDT (ERC-20) payouts are sent to your wallet every Monday </li>",
  },
  {
    icon: oneicon4,
    title: "4. Claim",
    description:
      "<p>Congratulations! Your tokens will be transferred to your wallet automatically after the presale ends. You don’t need to do anything. <br/><br/> Thank you for being part of the BFX journey!</p>",
  },
];

function WalletSec() {
  const apiData = useApiState();

  const [selectedHowToBuyStep, setSelectedHowToBuyStep] = useState(null);
  /** @type {[PaymentToken | null, (newVal: PaymentToken | null) => void]} */
  const [selectedToken, setSelectedToken] = useState(null);

  useEffect(() => {
    if (selectedToken || !apiData.paymentTokens?.length) return;
    setSelectedToken(
      apiData.paymentTokens.find(
        (token) =>
          token.symbol.toUpperCase() === "ETH" &&
          token.chain.toUpperCase() === "ERC-20",
      ) ?? apiData.paymentTokens[0],
    );
  }, [apiData.paymentTokens]);

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
    [apiData.paymentTokens],
  );

  const partialNumRegexp = /^(\d*|(\d+\.?\d*))$/;
  const [paymentTokenNumStr, setPaymentTokenNumStr] = useState("0");
  const [receiveTokenNumStr, setReceiveTokenNumStr] = useState("0");

  const [transactionLoading, setTransactionLoading] = useState(false);
  const [createdTransaction, setCreatedTransaction] = useState(null);
  const [transactionModalOpen, setTransactionModalOpen] = useState(false);

  const [ disclaimerModalOpen, setDisclaimerModalOpen ] = useState(false)
  const [ successModalOpen, setSuccessModalOpen ] = useState(false)
  const [ erroredModalOpen, setErroredModalOpen ] = useState(false)
  const [ pendingModalOpen, setPendingModalOpen ] = useState(false)
  const [ successBoughtModalOpen, setSuccessBoughtModalOpen ] = useState(false)
  const [ successBoughtTokens, setSuccessBoughtTokens ] = useState(0)

  const accountData = useAccount();
  const buy = async () => {
    const account = accountData.address;
    if (!account) return toast.error("You must connect your wallet first");
    if (transactionLoading) return;
    setTransactionLoading(true);
    if (!selectedToken) return;
    try {
      if (selectedToken.symbol.toLowerCase() === "card") {
        setDisclaimerModalOpen(true)
      } else {
        const res = await buyWithCrypto({
          paymentToken: selectedToken,
          paymentTokenNum: parseNum(paymentTokenNumStr),
          walletAddress: account,
        });
        if (res.type === "created") {
          setCreatedTransaction(res.transaction);
          setTimeout(() => setTransactionModalOpen(true), 30);
        }
      }
    } catch (err) {}
    setTransactionLoading(false);
  };

  const buyCard = async () => {
    setTransactionLoading(true)
    try {
      const account = accountData.address;
      if (!account) return toast.error("You must connect your wallet first");
      await buyWithCard({
        usd: parseNum(paymentTokenNumStr),
        walletAddress: account,
        onClosedEarly: () => setPendingModalOpen(true),
        onError: () => setErroredModalOpen(true),
        onSuccess: (tokens) => {
          if (tokens !== undefined) {
            setSuccessBoughtModalOpen(true)
            setSuccessBoughtTokens(tokens)
          } else {
            setSuccessModalOpen(true)
          }
        }
      });
    } catch (err) {}
    setTransactionLoading(false)
  }

  const [ codeInputVisible, setCodeInputVisible ] = useState(null)
  const [ defaultReferralCode, setDefaultReferralCode ] = useState(undefined)
  const [ defaultBonusCode, setDefaultBonusCode ] = useState(undefined)
  const [codesContainerRef, setCodesContainerRef] = useState(null)
  const handledCodesRef = useRef(false)
  
  const handleCodes = useDebounce(() => {
    if (handledCodesRef.current) return true
    const params = new URL(window.location.href).searchParams
    const bonusCode = params.get("bonus_code")
    if (bonusCode) {
      setDefaultBonusCode(bonusCode)
      setCodeInputVisible("bonus")
    }
    const referralCode = params.get("referral_code")
    if (referralCode) {
      setDefaultReferralCode(referralCode)
      setCodeInputVisible("referral")
    }
    const codesContainer = codesContainerRef
    if (!codesContainer) return
    if (referralCode || bonusCode) {
      handledCodesRef.current = true
      codesContainer.scrollIntoView({block: "center", behavior: "smooth"})
    }
  }, 200, [codesContainerRef])

  useEffect(() => handleCodes, [handleCodes])
  

  return (
    <div className="pt-[42px] pb-[35px] " id="how-to-buy">
      <div
        className="space-y-[30px] px-[67px]  py-[20px] bg-[#FFF] max-w-[955px] w-[100%] mx-auto border border-[#D4D4D4] rounded-[8px]"
        id="Wallet"
      >
        <div className="flex justify-center space-x-3 items-center">
          <h3 className="text-[30px] font-[700] tracking-[-1px]">BFX Presale</h3>
          <div className="w-[58px] text-[14px] font-[600] text-[#fff] rounded-[7px] bg-[#E9C03D] h-[22px] flex justify-center items-start">
            <span className="text-[38px] leading-[9%] !-mt-[1px] pr-[2px] animate-blink">.</span>
            Live
          </div>
        </div>
        <div
          className="px-[24px] py-[8px] space-y-[5px] border border-[#D3D3D3]"
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          {apiData.presaleEnded ? (
            <h4 className="text-center text-[#444] text-[24px] font-[700]">
              Presale Ended
            </h4>
          ) : (
            <>
              <h4 className="text-center text-[#444] text-[12px] font-[700]">
                Price Increases In
              </h4>
              <div className="flex justify-center space-x-[22px]">
                <div className=" space-y-[2px]">
                  <p className="leading-[100%] text-center text-[#E5AE00] text-[26px] font-[700]">
                    00
                  </p>
                  <p className="text-center text-[#444] text-[7.9px] font-[700]">
                    DAYS
                  </p>
                </div>
                <div className=" space-y-[2px]">
                  <p className="leading-[100%] text-center text-[#E5AE00] text-[26px] font-[700]">
                    20
                  </p>
                  <p className="text-center text-[#444] text-[7.9px] font-[700]">
                    HOURS
                  </p>
                </div>
                <div className=" space-y-[2px]">
                  <p className="leading-[100%] text-center text-[#E5AE00] text-[26px] font-[700]">
                    37
                  </p>
                  <p className="text-center text-[#444] text-[7.9px] font-[700]">
                    MINS
                  </p>
                </div>
                <div className=" space-y-[2px]">
                  <p className="leading-[100%] text-center text-[#E5AE00] text-[26px] font-[700]">
                    38
                  </p>
                  <p className="text-center text-[#444] text-[7.9px] font-[700]">
                    SECS
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex justify-between space-x-[2rem]">
          <div
            style={{
              background: "rgba(247, 247, 247, 0.70)",
            }}
            className="max-w-[413.763px] space-y-[10px] relative rounded-[6.419px] px-[33px] pt-[22px] pb-[11px] border border-[#B0B0B0] w-[100%] mx-auto "
          >
            <div className="w-[100%] absolute top-[-2%] left-0">
              <div className=" w-[100%] h-[30.612px] flex items-center rounded-[6px] mx-auto w-[102.877px] border border-[#454545] bg-[#f9f9f9]">
                <h3 className="text-[9.875px] text-[#444] text-center w-[100px] font-[700]  ">
                  Buy $BFX
                </h3>
              </div>
            </div>
            <div
              className="px-[11px] py-[9px] space-y-[5px] border border-[#D3D3D3]"
              style={{
                background: "rgba(237, 237, 237, 0.40)",
              }}
            >
              <h3 className="text-center text-[21.64px] leading-[100%] font-[700]">
                {formatDollar(parseNum(apiData.stage?.cumulative_usd_raised))}
              </h3>
              <div className="pt-3">
                <div className="flex justify-between items-center pb-1">
                  <span className="text-[#444] text-[9.74px] font-[400] leading-[100%]">
                    {formatNumber(stageFrac * 100, 0, 2)}% of softcap raised
                  </span>
                  <img src={info} className="w-[6.912px] h-[6.912px]" alt="" />
                </div>
                <div className="bg-[#E5E7EB] w-[100%] h-[4.938px] rounded-[20px]">
                  <div
                    className="bg-[#E5AE00] h-[4.938px] rounded-[20px]"
                    style={{ width: `${stageFrac * 100}%` }}
                  />
                </div>
                <div>
                  <p className="text-[#444] text-end text-[9.74px] font-[400] leading-[150%]">
                    {formatDollar(
                      apiData.stage?.next_stage_target_usd,
                      true,
                      0,
                      0,
                    )}
                  </p>
                </div>
              </div>
              <h5 className="text-[#444] text-[9.74px] text-center font-[400] leading-[100%]">
                {formatNumber(apiData.info?.transactions, 0, 0)} Transactions
              </h5>
            </div>
            <div
              className="px-[24px] py-[7px] border border-[#D3D3D3]"
              style={{
                background: "rgba(237, 237, 237, 0.40)",
              }}
            >
              <h4 className="text-center text-[#636363] text-[9.875px] leading-[75%] font-[700]">
                Listing Price: 1 $BFX = ${formatNumber(LISTING_PRICE)}
              </h4>
            </div>
            <div>
              <TokenSelectDropdown
                tokenList={{
                  currencies: apiData.paymentTokens?.filter((token) => token.symbol.toLowerCase() === "card").map((token) => ({...token, chain: ""})) ?? [],
                  defaultLabel: "Card",
                  placeholder: "Card",
                  defaultToken: {
                    chain: "",
                    id: 0,
                    name: "Card",
                    symbol: "Card",
                    nowpayments_id: null,
                    nowpayments_minimum: null,
                    price: 1
                  }
                }}
                onChange={(token) => setSelectedToken(token)}
                selectedTokenId={selectedToken?.id}
              />
            </div>
            <div className="grid grid-cols-3 justify-center gap-[8px] flex-wrap">
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
              <hr className="h-[1px] w-[33%]" />
              <span className="text-[#636363] text-end text-[9.618px] font-[700] leading-[75%]">
                1 $BFX = ${formatNumber(parseNum(apiData.stage?.token_price))}
              </span>
              <hr className="h-[1px] w-[33%]" />
            </div>
            <div className="">
              <label className="text-[#2F2F2F] text-[8.888px] font-[700] leading-[8.888px]">
                You Pay in {selectedToken?.symbol.toUpperCase()}:
              </label>
              <div className="border h-[30.612px] border-[#454545] p-1 flex justify-between items-center">
                <div className="w-[80%] flex items-center space-x-2">
                  <input
                    type="text"
                    className="h-[17.281px] w-[100%] text-[11.85px] font-[700] outline-none bg-[transparent] placeholder:text-[#000] placeholder:opacity-50"
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
                        4,
                      );
                      setReceiveTokenNumStr(receiveNum);
                    }}
                  />
                </div>
                <div className="relative border px-[4px] w-[74px]">
                  <div className="justify-start flex h-[24px] items-center space-x-[3px] cursor-pointer">
                    {selectedToken && (
                      <>
                        <img
                          className="w-[15.813px] h-[15.813px] object-cover"
                          src={
                            tokenImageMap[selectedToken.symbol.toLowerCase()]
                          }
                          alt=""
                        />
                        <div className="flex flex-col">
                          <span className="text-[#545454] !overflow-hidden !text-clip text-[8.888px] font-[700]">
                            {selectedToken.symbol.toUpperCase()}
                          </span>
                          <span
                            className={clsx(
                              "text-[#777] text-[6.688px] font-[900] leading-[1] whitespace-nowrap transition-colors",
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
            <div className="">
              <label className="text-[#2F2F2F] text-[8.888px] font-[700] leading-[8.888px]">
                You Receive $BFX +{" "}
                <span
                  onClick={(e) => handleScroll(e, "premium", 90)}
                  className="cursor-pointer text-[#299A00] underline"
                >
                  Novice Trading NFT
                </span>
              </label>
              <div className="border h-[30px] border-[#454545] p-1 flex justify-between items-center">
                {/* <div className="relative max-w-[75px] "></div> */}
                <div className="w-[80%] flex items-center h-[17.281px] space-x-2">
                  <input
                    type="text"
                    className="h-[17.281px] w-[80%] text-[11.85px] font-[700] outline-none bg-[transparent] placeholder:text-[#000] placeholder:opacity-50"
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
                        6,
                      );
                      setPaymentTokenNumStr(paymentNum.toString());
                    }}
                  />
                </div>
                <div className="relative w-[74px] border px-[4px] ">
                  <div className="justify-start flex h-[24px]  items-center space-x-[5px] cursor-pointer">
                    <img
                      className="w-[15.8px] h-[15.8px] object-cover"
                      src={bfxicn}
                      alt=""
                    />
                    <span className="text-[#545454] text-[8.888px] font-[700] leading-[50px]">
                      BFX
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={buy}
                className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[11.85px] font-[800] border border-[#E5AE00]  hover:border-[#000] w-[100%] h-[32.094px]"
              >
                {transactionLoading ? "Loading..." : "Buy Now"}
              </button>
              {/* {showPopup && (
                <CardList
                  selectedCoin={selectedCoin}
                  onClose={() => setShowPopup(false)}
                />
              )} */}
            </div>
            <div
              className="px-[24px] py-[5px] space-y-[5px] border border-[#939393]"
              style={{
                background: "rgba(237, 237, 237, 0.40)",
              }}
            >
              <h4 className="text-center text-[#636363] text-[8.888px] leading-[70%] font-[700]">
                You get 10% bonus tokens
              </h4>
              <h4 className="text-center text-[#636363] text-[8.888px] leading-[70%] font-[700]">
                Buy $1,500 more to unlock 20% bonus
              </h4>
            </div>
            <div className="flex justify-center items-center space-x-[24px]" ref={(el) => setCodesContainerRef(el)}>
              <button className="text-[8.888px] font-[700] underline cursor-pointer" onClick={() => setCodeInputVisible((code) => code === "bonus" ? null : "bonus")}>
                Bonus Code
              </button>
              <button className="text-[8.888px] font-[700] underline cursor-pointer" onClick={() => setCodeInputVisible((code) => code === "referral" ? null : "referral")}>
                Referral Code
              </button>
            </div>
            {codeInputVisible === "bonus" && <BonusCodeInput defaultValue={defaultBonusCode} />}
            {codeInputVisible === "referral" && <ReferralCodeInput defaultValue={defaultReferralCode} />}
          </div>
          <div
            style={{
              background: "rgba(247, 247, 247, 0.70)",
            }}
            className="max-w-[413.763px] space-y-[10px] relative rounded-[6.419px] px-[10px] pt-[22px] pb-[11px] border border-[#B0B0B0] w-[100%] mx-auto "
          >
            <div className="w-[100%] absolute top-[-2%] left-0">
              <div className=" w-[100%] h-[30.612px] flex items-center rounded-[6px] mx-auto w-[102.877px] border border-[#454545] bg-[#f9f9f9]">
                <h3 className="text-[9.875px] text-[#444] text-center w-[100px] font-[700]  ">
                  How To Buy
                </h3>
              </div>
            </div>
            <div className="">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`py-[15px] px-1 border-b last:border-none  transition-all duration-300`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setSelectedHowToBuyStep(index)}
                  >
                    <div className="flex w-[100%]  justify-between items-center space-x-4 space-y-[15px]">
                      <div className=" w-[100%] flex flex-col justify-center">
                        <div className="flex justify-between items-center">
                          <h3
                            className={`text-[14px] capitalize font-[600] ${
                              index === selectedHowToBuyStep
                                ? "text-[#E5AE00]"
                                : "text-[#181A20] "
                            }`}
                          >
                            {item.title}
                          </h3>
                          <div>
                            <img
                              src={
                                index === selectedHowToBuyStep
                                  ? iconcls
                                  : iconapon
                              }
                              alt={
                                index === selectedHowToBuyStep
                                  ? "Collapse"
                                  : "Expand"
                              }
                              className="w-[24px] h-[24px]"
                            />
                          </div>
                        </div>
                        <div
                          className={` transition-all duration-300 desc  ${
                            index === selectedHowToBuyStep
                              ? "max-h-[200px] opacity-100 mt-[8px]  text-[11.688px] font-[400] text-[#000] overflow-hidden block"
                              : "max-h-0 hidden opacity-0 text-[11.688px]"
                          }`}
                          style={{
                            transition:
                              "max-height 0.3s ease, opacity 0.3s ease",
                          }}
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-[14px]">
              <h4 className="text-[#181A20] text-[14px] font-[600] px-1">
                5. Launch
              </h4>
              <div
                className="max-w-[414px] px-[10px] pt-[14px] pb-[16px] border border-[#B0B0B0] w-[100%] mx-auto "
                style={{
                  background: "rgba(237, 237, 237, 0.40)",
                }}
              >
                <div className=" space-y-[13px]">
                  <h4 className="text-start text-[#808080] text-[9.875px] leading-[75%] font-[600]">
                    $BFX Launches On Multiple Top-Tier Exchanges
                  </h4>
                  <div className="flex justify-center space-x-[8px]">
                    <div
                      className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                      }}
                    >
                      <img
                        src={swpicon}
                        className="w-[14.813px] h-[14.813px]"
                        alt=""
                      />
                      <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                    <div
                      className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#F0B90B] rounded-full"></div>
                      <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                    <div
                      className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#0052FE] rounded-full"></div>
                      <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                    <div
                      className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#00F0FF] rounded-full"></div>
                      <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                    <div
                      className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#7635F5] rounded-full"></div>
                      <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="px-[28px] pt-[10px] pb-[10px] border border-[#B0B0B0] w-[100%] mx-auto "
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <div className="flex justify-center items-center space-x-[10px]">
            <h4 className="text-center text-[#808080] text-[13.1px] leading-[85%] font-[600]">
              Audited by the Leading Blockchain Security Company
            </h4>
            <div className="w-[113.97px]">
              <img src={cer} className="" alt="" />
            </div>
          </div>
        </div>
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
          buyCard()
          setDisclaimerModalOpen(false)
        }}
      />
      <Modal
        title="Transaction Successful"
        open={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        className="max-w-[18rem]"
      >
        <p className="leading-[1.4] text-[14px]">
          The transaction was successful. Please wait a minute and refresh the transactions tab to see
          your tokens.
        </p>
      </Modal>
      <Modal
        title="Transaction Successful"
        open={successBoughtModalOpen}
        onClose={() => setSuccessBoughtModalOpen(false)}
        className="max-w-[18rem]"
      >
        <p className="leading-[1.4] text-[14px]">
          The transaction was successful. You bought{' '}
          <span className="font-bold">{formatNumber(successBoughtTokens, 0, 4)} BFX</span>. Check
          your transaction tab for more details
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
          The transaction is pending. Please wait a minute and refresh the transactions tab to see your
          tokens.
        </p>
      </Modal>
    </div>
  );
}

export default WalletSec;
