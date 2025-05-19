import React, { useState, useEffect, useRef, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import icon1 from "../../assets/navbar/wallet/dash (5).svg";
import icon2 from "../../assets/navbar/wallet/dash (4).svg";
import icon3 from "../../assets/navbar/wallet/dash (3).svg";
import icon4 from "../../assets/navbar/wallet/dash (2).svg";
import icon5 from "../../assets/navbar/wallet/dash (1).svg";
import icon6 from "../../assets/navbar/wallet/dash (6).svg";
import arw from "../../assets/navbar/wallet/awr.svg";
import cross from "../../assets/navbar/wallet/x.svg";
import copy from "../../assets/navbar/wallet/copy-03.png";
import disicn from "../../assets/navbar/wallet/share-02.png";
import cardimg1 from "../../assets/PremiumSec/cardimg (1).webp";
import cardimg2 from "../../assets/PremiumSec/cardimg (2).webp";
import cardimg3 from "../../assets/PremiumSec/cardimg (3).webp";
import cardimg4 from "../../assets/PremiumSec/cardimg (4).webp";
import cardimg5 from "../../assets/PremiumSec/cardimg (5).webp";
import cardimg6 from "../../assets/PremiumSec/cardimg (6).webp";
import cardimg7 from "../../assets/PremiumSec/cardimg (7).webp";

import cer from "../../assets/wallet/cer.svg";
import { Bounce } from "react-toastify";
import {
  bonusRankData,
  useAccount,
  useUserRankData,
} from "../../presale-gg/web3/hooks";
import { userLevelUp, useUserState } from "../../presale-gg/stores/user.store";
import {
  ceilToDP,
  copyText,
  formatDollar,
  formatNumber,
  parseNum,
} from "../../presale-gg/util";
import { LISTING_PRICE } from "../../presale-gg/constants";
import { useApiState } from "../../presale-gg/stores/api.store";
import toast from "react-hot-toast";
import { api } from "../../presale-gg/api";

import confetti from "canvas-confetti";
import { getConfig } from "../../presale-gg/web3";
import { disconnect } from "@wagmi/core";

const cards = [
  {
    img: cardimg1,
    left: "Early Access",
    right: `${formatNumber(
      bonusRankData["Novice"].bfxBonusPercentage,
      0,
      0
    )}% BFX Bonus`,
    name: "Novice NFT",
  },
  {
    img: cardimg2,
    left: `${formatNumber(
      bonusRankData["Advanced"].bfxBonusPercentage,
      0,
      0
    )}% BFX Bonus`,
    right: `${formatDollar(
      bonusRankData["Advanced"].tradingCreditsUSD,
      true,
      0,
      0
    )} Trading Credits`,
    name: "Advanced NFT",
  },
  {
    img: cardimg3,
    left: `${formatNumber(
      bonusRankData["Pro"].bfxBonusPercentage,
      0,
      0
    )}% BFX Bonus`,
    right: `${formatDollar(
      bonusRankData["Pro"].tradingCreditsUSD,
      true,
      0,
      0
    )} Trading Credits`,
    name: "Pro NFT",
  },
  {
    img: cardimg4,
    left: `${formatNumber(
      bonusRankData["Expert"].bfxBonusPercentage,
      0,
      0
    )}% BFX Bonus`,
    right: `${formatDollar(
      bonusRankData["Expert"].tradingCreditsUSD,
      true,
      0,
      0
    )} Trading Credits`,
    name: "Expert NFT",
  },
  {
    img: cardimg5,
    left: `${formatNumber(
      bonusRankData["Master"].bfxBonusPercentage,
      0,
      0
    )}% BFX Bonus`,
    right: `${formatDollar(
      bonusRankData["Master"].tradingCreditsUSD,
      true,
      0,
      0
    )} Trading Credits`,
    name: "Master NFT",
  },
  {
    img: cardimg6,
    left: `${formatNumber(
      bonusRankData["Elite"].bfxBonusPercentage,
      0,
      0
    )}% BFX Bonus`,
    right: `${formatDollar(
      bonusRankData["Elite"].tradingCreditsUSD,
      true,
      0,
      0
    )} Trading Credits`,
    name: "Elite NFT",
  },
  {
    img: cardimg7,
    left: `${formatNumber(
      bonusRankData["Legend"].bfxBonusPercentage,
      0,
      0
    )}% BFX Bonus`,
    right: `${formatDollar(
      bonusRankData["Legend"].tradingCreditsUSD,
      true,
      0,
      0
    )} Trading Credits`,
    name: "Legend NFT",
  },
];

const DashboardPopup = ({ onClose }) => {
  const accountData = useAccount();
  const userData = useUserState();
  const apiData = useApiState();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!modalRef.current) return;
      if (
        modalRef.current.contains(event.target) ||
        modalRef.current.isEqualNode(event.target)
      )
        return;

      onClose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const copyReferralLink = () => {
    copyText(
      window.location.origin + "?referral_code=" + userData.user?.referral_code
    );
  };

  const {
    currentRank,
    nextRank,
    fractionToNextRank,
    usdToNextRank,
    usdPerLevel,
    bonusData,
    currentRankIndex
  } = useUserRankData();

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
      confetti({ gravity: 1, origin: { x: 0.5, y: 0.75 }, zIndex: 999999 });
    } catch (_) {}
    setLevelUpLoading(false);
  };

  /** @type {[import("swiper/react").SwiperClass | null, (ref: import("swiper/react").SwiperClass | null) => void]} */
  const [ swiper, setSwiper ] = useState(null)

  useEffect(() => {
    if (!swiper) return
    swiper.slideTo(currentRankIndex)
  }, [swiper, currentRankIndex])

  const bfxRewards = useMemo(() => {
    const bonusTransactionsRewards = userData.bonusTransactions?.reduce((acc, curr) => acc + parseNum(curr.bonus_token_amount), 0) ?? 0
    return bonusTransactionsRewards + parseNum(userData.userStakeData?.total_earnings)
  }, [userData.bonusTransactions, userData.userStakeData?.total_earnings])

  return (
    <div className="fixed flex items-center inset-0 bg-black bg-opacity-50 h-[100vh] !z-[999]">
      <div className=" 2xl:flex xl:flex w-[100%] max-w-[1240px] mx-auto pt-[20px] flex justify-end items-center]">
        <div className="w-[700px] mx-auto rounded-[28.399px] relative md:w-[700px] max-w-[calc(100vw-1rem)]"
        style={{
          border:"0.718px solid #A5A5A5",
          background:"linear-gradient(212deg, rgb(107 107 107) 0.66%, rgb(23, 23, 23) 49.48%, rgb(30, 30, 30) 100.45%)",
        }}
        
        >
          <div className="flex justify-center">
            <div className="border-[#B0B0B0] bg-[#000] absolute z-[99] top-[-2.5%] border rounded-[5.725px] py-[0px] mx-auto w-[190px]">
              <p className="text-[16px] text-[#fff] font-[700] text-center">
                Personal Dashboard
              </p>
            </div>
            <div className="absolute top-[-1.5%] right-[-13px]">
              <img
                src={cross}
                alt=""
                onClick={onClose}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div
            className="p-[20px] space-y-[7px] rounded-[4.913px] max-h-[min(50rem,calc(100vh-4rem))] overflow-y-auto"
            ref={modalRef}
          >
            <div
              className="rounded-[8px] space-y-[3px] p-[7px]"
              style={{
                background: "rgba(255, 255, 255, 0.09)",
                backdropFilter:"blur(10.33918571472168px)"
              }}
            >
              <h2 className="text-[14px] text-[#fff] font-[600] text-center">
              Your Wallet Address
              </h2>
              <p className="text-[14px] font-[500] text-[#8F8F8F] text-center break-words leading-[1.5]">
                {accountData.address}
              </p>
            </div>
            <div
            style={{
              background: "#000",
              border:"0.4px solid var(--Linear, #E0B300)",
              backdropFilter:"blur(10.33918571472168px)"
            }}
            className="rounded-[8px] space-y-[5px] p-[10px]">
              <h4 className="text-center text-[16px] text-[#fff]">
                {" "}
                Total Portfolio on BFX Launch
              </h4>
            <div className="flex items-center justify-center">
            <h3 className="text-center text-[#FBD915] text-[32px] leading-[100%] font-[700]">
                {formatDollar(
                  parseNum(userData.user?.total_tokens) * LISTING_PRICE
                )}
              </h3>
            </div>
              <p className="text-center pl-2 text-[#02953B] text-[14px]">
                +
                {formatDollar(
                  parseNum(userData.user?.total_tokens) *
                    (LISTING_PRICE - parseNum(apiData.stage?.token_price))
                )}{" "}
                {/* <span
                  className="p-[2px] rounded-[1px]"
                >
                  +%
                  {formatNumber(
                    (LISTING_PRICE / parseNum(apiData.stage?.token_price) - 1) *
                      100,
                    0,
                    2
                  )}
                </span> */}
              </p>
              {/* <p className="text-[14px] text-[#fff] text-center font-[500]">February 5, 2025</p> */}
            </div>
            <div
              className="py-[7px] rounded-[8px]"
              style={{
                background: "rgba(255, 255, 255, 0.09)",
              }}
            >
              <p className="text-[14px] font-[700] text-[#C2C2C2] text-center">
                BFX Listing Price = {formatDollar(LISTING_PRICE)}
              </p>
            </div>
            <div className="flex justify-between gap-[10px] <md:flex-col">
              <div className="flex-1 space-y-[8px] w-0 <md:w-auto">
                <div
                 style={{
                  background: "rgba(255, 255, 255, 0.09)",
                }}
                 className="space-y-[10px] p-[10px] h-[230px] rounded-[10px]">
                  <div
                    className="py-[3px] px-[5px]  flex justify-between rounded-[4px]"
                    style={{
                      background: "rgba(255, 255, 255, 0.09)",
                      border:"0.21px solid rgba(211, 211, 211, 0.50)",
                    }}
                  >
                    <div className="flex space-x-2 items-center">
                      <img
                        src={icon1}
                        className="w-[15px] h-[15px] object-cover"
                        alt=""
                      />
                      <p className="text-[14px] text-[#D2D2D2] font-[700] text-center">
                        BFX
                      </p>
                    </div>
                    <p className="text-[14px] text-[#fff] font-[700] text-center">
                      {formatNumber(parseNum(userData.user?.total_tokens))}
                    </p>
                  </div>
                  <div
                    className="py-[3px] px-[5px]  flex justify-between rounded-[4px]"
                    style={{
                      background: "rgba(255, 255, 255, 0.09)",
                      border:"0.21px solid rgba(211, 211, 211, 0.50)",
                    }}
                  >
                    <div className="flex space-x-2 items-center">
                      <img
                        src={icon2}
                        className="w-[15px] h-[15px] object-cover"
                        alt=""
                      />
                      <p className="text-[14px] text-[#D2D2D2] font-[600] text-center">
                        Bonus BFX
                      </p>
                    </div>
                    <p className="text-[14px] text-[#fff] font-[700] text-center">
                      {formatNumber(currentRank?.bonus_percentage ?? 0, 0, 0)}%
                    </p>
                  </div>
                  <div
                    className="py-[3px] px-[5px]  flex justify-between rounded-[4px]"
                    style={{
                      background: "rgba(255, 255, 255, 0.09)",
                      border:"0.21px solid rgba(211, 211, 211, 0.50)",
                    }}
                  >
                    <div className="flex space-x-2 items-center">
                      <img
                        src={icon3}
                        className="w-[15px] h-[15px] object-cover"
                        alt=""
                      />
                      <p className="text-[14px] text-[#D2D2D2] font-[700] text-center">
                        BFX Rewards
                      </p>
                    </div>
                    <p className="text-[14px] text-[#fff] font-[700] text-center">
                      {formatNumber(bfxRewards, 0, 2)}
                    </p>
                  </div>
                  <div
                    className="py-[3px] px-[5px]  flex justify-between items-center rounded-[4px]"
                    style={{
                      background: "rgba(255, 255, 255, 0.09)",
                      border:"0.21px solid rgba(211, 211, 211, 0.50)",
                    }}
                  >
                    <div className="flex space-x-2 items-center">
                      <img
                        src={icon4}
                        className="w-[16px] h-[16px] object-cover"
                        alt=""
                      />
                      <p className="text-[14px] text-[#D2D2D2] font-[700] text-center">
                        USDT Rewards
                      </p>
                    </div>
                    <p className="text-[14px] text-[#fff] font-[700] text-center">
                      {formatNumber(parseNum(userData.userStakeData?.total_earnings) * parseNum(apiData.stage?.token_price) * bonusData.usdtRewardPercentage / 100, 2, 2)}
                    </p>
                  </div>
                  <div
                    className="py-[3px] px-[5px]  flex justify-between rounded-[4px]"
                    style={{
                      background: "rgba(255, 255, 255, 0.09)",
                      border:"0.21px solid rgba(211, 211, 211, 0.50)",
                    }}
                  >
                    <div className="flex space-x-2 items-center">
                      <img
                        src={icon5}
                        className="w-[15px] h-[10px] object-cover"
                        alt=""
                      />
                      <p className="text-[14px] text-[#D2D2D2] font-[700] text-center">
                        Trading Account Credits
                      </p>
                    </div>
                    <p className="text-[14px] text-[#fff] font-[700] text-center">
                      {formatDollar(bonusData.tradingCreditsUSD, true, 0, 0)}
                    </p>
                  </div>
                </div>
                <div
                  className="px-[14px]  2xl:flex xl:flex lg:flex md:flex sm:hidden hidden justify-between items-center rounded-[10px] h-[64px]"
                  style={{
                    background: "rgba(255, 255, 255, 0.09)",
                  }}
                >
                  <div className="flex space-x-2 items-center ">
                    <img src={icon6} alt="" />
                    <p className="text-[14px] text-[#D2D2D2] font-[700] text-center">
                      Referral Bonus
                    </p>
                  </div>
                  <p className="text-[14px] text-[#fff] font-[700] text-center">
                    10%
                  </p>
                </div>
                <div className="2xl:block xl:block lg:block md:block sm:hidden hidden">
                  <button
                    className="text-[#000] bg-[#E5AE00] rounded-[10px] flex items-center justify-center px-[10px] hover:opacity-[0.7]  text-[10.886px] font-[800] border border-[#E5AE00]  w-[100%] h-[31px]"
                    onClick={copyReferralLink}
                  >
                    Copy 10% Referral Link{" "}
                    <img src={copy} className="ml-2" alt="" />
                  </button>
                </div>
              </div>
              <div className="flex-1 space-y-[8px] w-0 <md:w-auto">
                <div
                  className="pb-[10px] h-[230px] rounded-[10px] pt-[5px] px-[5px]  flex justify-between"
                  style={{
                    background: "rgba(255, 255, 255, 0.09)",
                  }}
                >
                  <div className="relative w-[min(304px,calc(100%-1rem))] mx-auto">
                    <button className="swiper-button-prev-swp rotate-[182deg] absolute z-10 !left-[-2%] top-[50%] transform -translate-y-1/2">
                      <img className="w-[16px] h-[16px]" src={arw} alt="" />
                    </button>
                    <button className="swiper-button-next-swp  absolute z-20 !right-[-2%] top-[50%] transform -translate-y-1/2">
                      <img className="w-[16px] h-[16px]" src={arw} alt="" />
                    </button>

                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      loop={false}
                      navigation={{
                        nextEl: ".swiper-button-next-swp",
                        prevEl: ".swiper-button-prev-swp",
                        enabled: true,
                      }}
                      modules={[Navigation]}
                      className="mySwiper"
                      onSwiper={(swiper) => setSwiper(swiper)}
                    >
                      {cards.map((card) => (
                        <SwiperSlide key={card.name}>
                          <div className="space-y-[8px]">
                            <h3 className="text-[14px] text-[#fff] text-center font-[600]">
                              {card.name}{currentRank?.rank === card.name.split(" ")[0] ? "(Your Level)" : ""}
                            </h3>
                            <div className="flex w-[80%] mx-auto justify-center">
                              <img className="" src={card.img} alt="" />
                            </div>
                            <div className="flex justify-between items-center pt-[10px] space-x-2">
                              <div className="rounded-[2.964px] bg-[#0E1215] text-[11px] font-[500] text-[#fff] flex justify-center px-[2px] w-[100%] py-[3px] <md:text-[10px]"
                              style={{
                                border:"0.741px solid rgba(233, 233, 233, 0.18)"
                              }}
                              >
                                {card.left}
                              </div>
                              <div className="rounded-[2.964px] bg-[#0E1215] text-[11px] font-[500] text-[#fff] flex justify-center px-[2px] w-[100%] py-[3px] <md:text-[10px]"
                              style={{
                                border:"0.741px solid rgba(233, 233, 233, 0.18)"
                              }}
                              >
                                {card.right}
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div
                  className="py-[4.5px] px-[7px] rounded-[10px] h-[64px] flex flex-col justify-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.09)",
                  }}
                >
                  <div className="flex gap-1 justify-between items-center">
                    <p className="text-[12.187px] text-[#F9F9F9] font-[700] text-center leading-[1]">
                      {nextRank
                        ? `${formatDollar(
                            ceilToDP(parseNum(usdToNextRank), 0),
                            true,
                            0,
                            0
                          )} left to reach the next NFT level`
                        : "You have reached the highest level"}
                    </p>
                    <p className="text-[14px] leading-[100%] text-[#E5AE00] font-[700] text-center">
                      {nextRank ? (
                        formatDollar(nextRank.level * usdPerLevel, true, 0, 0)
                      ) : currentRank?.rank}
                    </p>
                  </div>
                  {usdToNextRank > 0 || nextRank === null ? (
                    <input
                      type="range"
                      min="0"
                      max="100"
                      readOnly
                      value={fractionToNextRank * 100}
                      className="custom-range mt-3"
                      style={{
                        background: `linear-gradient(to right,  #E5AE00 ${
                          fractionToNextRank * 100
                        }%, #DDD ${fractionToNextRank * 100}%)`,
                      }}
                    />
                  ) : (
                    <button
                      className="text-white bg-[#E5AE00] px-[10px] hover:text-black hover:bg-transparent  text-[10.886px] font-[800] border border-[#E5AE00] hover:border-[#000] w-[100%] h-[31px] mt-2"
                      onClick={levelUp}
                    >
                      Unlock {nextRank.rank} NFT Level
                    </button>
                  )}
                </div>
                <div className="w-[100%]">
                  <button
                    onClick={async () => {
                      onClose();
                      const { config } = await getConfig()
                      // Have to do twice to prevent disconnect sometimes not working
                      disconnect(config)
                      setTimeout(() => disconnect(config), 20)
                    }}
                    className="text-[#000] 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden justify-center items-center bg-[#E5AE00] px-[10px] rounded-[10px] hover:opacity-[0.7]  text-[10.886px] font-[800] border border-[#E5AE00] ] w-[100%]  h-[31px]"
                  >
                    Disconnect
                    <img src={disicn} className="ml-1" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div
              className="py-[9px] 2xl:!mt-[9px] xl:!mt-[9px] lg:!mt-[9px]  md:!mt-[9px] sm!mt-[0px] !mt-[0px]   rounded-[10px]  w-[100%] mx-auto "
              style={{
                background: "rgba(255, 255, 255, 0.09)",
              }}
            >
              <div className="flex flex-wrap gap-2 justify-center space-x-[10px] items-center">
                <h4 className="text-center text-[#D2D2D2] text-[12px] leading-[85%] font-[500]">
                  Audited by the Leading Blockchain Security Company
                </h4>
                <div className="w-[88px]">
                  <img src={cer} className="" alt="" />
                </div>
              </div>
            </div>
            <div className="space-y-[8px] 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
            <div
                  className="px-[14px] 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex justify-between items-center rounded-[10px] h-[64px]"
                  style={{
                    background: "rgba(255, 255, 255, 0.09)",
                  }}
                >
                  <div className="flex space-x-2 items-center ">
                    <img src={icon6} alt="" />
                    <p className="text-[14px] text-[#D2D2D2] font-[700] text-center">
                      Referral Bonus
                    </p>
                  </div>
                  <p className="text-[14px] text-[#fff] font-[700] text-center">
                    10%
                  </p>
                </div>
                <div className="flex space-x-[10px] items-center">
                <button
                    className="text-[#000] bg-[#E5AE00] rounded-[10px] 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex items-center justify-center px-[10px] hover:opacity-[0.7]  text-[10.886px] font-[800] border border-[#E5AE00]  w-[100%] h-[31px]"
                    onClick={copyReferralLink}
                  >
                    Copy 10% Referral Link{" "}
                    <img src={copy} className="ml-2" alt="" />
                  </button>
                  <button
                    onClick={async () => {
                      onClose();
                      const { config } = await getConfig()
                      // Have to do twice to prevent disconnect sometimes not working
                      disconnect(config)
                      setTimeout(() => disconnect(config), 20)
                    }}
                    className="text-[#000] 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex justify-center items-center bg-[#E5AE00] px-[10px] rounded-[10px] hover:opacity-[0.7]  text-[10.886px] font-[800] border border-[#E5AE00] ] w-[100%]  h-[31px]"
                  >
                    Disconnect
                    <img src={disicn} className="ml-1" alt="" />
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPopup;
