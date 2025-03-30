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
import copy from "../../assets/navbar/wallet/copy-right.png";
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
      confetti({ gravity: 1, origin: { x: 0.5, y: 0.75 } });
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
    return userData.bonusTransactions?.reduce((acc, curr) => acc + parseNum(curr.bonus_token_amount), 0) ?? 0
  }, [userData.bonusTransactions])

  return (
    <div className="fixed flex items-center inset-0 bg-black bg-opacity-50 h-[100vh] !z-[999]">
      <div className=" 2xl:flex xl:flex w-[100%] max-w-[1240px] mx-auto pt-[20px] flex justify-end items-center]">
        <div className="w-[700px] mx-auto bg-white rounded-lg relative md:w-[500px] max-w-[calc(100vw-1rem)]">
          <div className="flex justify-center">
            <div className="border-[#B0B0B0] bg-[#F5F5F5] absolute top-[-2.5%] border rounded-[5.725px] py-[0px] mx-auto w-[190px]">
              <p className="text-[16px] font-[700] text-center">
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
              className="border border-[#E3E3E3] space-y-[3px] p-[7px]"
              style={{
                background: "rgba(237, 237, 237, 0.40)",
              }}
            >
              <h2 className="text-[14px] text-[#444] font-[600] text-center">
                Wallet Address
              </h2>
              <p className="text-[14px] font-[500] text-[#636363] text-center break-words leading-[1.5]">
                {accountData.address}
              </p>
            </div>
            <div className="border bg-[FFFBF2] bg-[#FFFBF2] border-[#E3E3E3] space-y-[7px] p-[7px]">
              <h4 className="text-center text-[16px] text-[#272626]">
                {" "}
                Total Portfolio on BFX Launch
              </h4>
              <h3 className="text-center text-[#FA0] text-[30px] leading-[100%] font-[700]">
                {formatDollar(
                  parseNum(userData.user?.total_tokens) * LISTING_PRICE
                )}
              </h3>
              <p className="text-center text-[#02953B] text-[14px]">
                +
                {formatDollar(
                  parseNum(userData.user?.total_tokens) *
                    (LISTING_PRICE - parseNum(apiData.stage?.token_price))
                )}{" "}
                <span
                  className="p-[2px] rounded-[1px]"
                  style={{
                    background: "rgba(124, 241, 177, 0.42)",
                  }}
                >
                  +%
                  {formatNumber(
                    (LISTING_PRICE / parseNum(apiData.stage?.token_price) - 1) *
                      100,
                    0,
                    2
                  )}
                </span>
              </p>
            </div>
            <div
              className="py-[7px] border border-[#D3D3D3]"
              style={{
                background: "rgba(237, 237, 237, 0.40)",
              }}
            >
              <p className="text-[14px] font-[700] text-[#636363] text-center">
                BFX Listing Price = {formatDollar(LISTING_PRICE)}
              </p>
            </div>
            <div className="flex justify-between gap-[10px] <md:flex-col">
              <div className="flex-1 gap-[10px] w-0 <md:w-auto">
                <div className="bg-[#F5F5F5] space-y-[10px] p-[10px] h-[230px]">
                  <div
                    className="py-[3px] px-[5px]  flex justify-between border border-[#D3D3D3]"
                    style={{
                      background: "rgb(227 227 227 / 46%)",
                    }}
                  >
                    <div className="flex space-x-2 items-center">
                      <img
                        src={icon1}
                        className="w-[15px] h-[15px] object-cover"
                        alt=""
                      />
                      <p className="text-[14px] text-[#636363] font-[700] text-center">
                        BFX
                      </p>
                    </div>
                    <p className="text-[14px] text-[#272626] font-[700] text-center">
                      {formatNumber(parseNum(userData.user?.total_tokens))}
                    </p>
                  </div>
                  <div
                    className="py-[3px] px-[5px]  flex justify-between border border-[#D3D3D3]"
                    style={{
                      background: "rgb(227 227 227 / 46%)",
                    }}
                  >
                    <div className="flex space-x-2 items-center">
                      <img
                        src={icon2}
                        className="w-[15px] h-[15px] object-cover"
                        alt=""
                      />
                      <p className="text-[14px] text-[#636363] font-[600] text-center">
                        Bonus BFX
                      </p>
                    </div>
                    <p className="text-[14px] text-[#272626] font-[700] text-center">
                      {formatNumber(currentRank?.bonus_percentage ?? 0, 0, 0)}%
                    </p>
                  </div>
                  <div
                    className="py-[3px] px-[5px]  flex justify-between border border-[#D3D3D3]"
                    style={{
                      background: "rgb(227 227 227 / 46%)",
                    }}
                  >
                    <div className="flex space-x-2 items-center">
                      <img
                        src={icon3}
                        className="w-[15px] h-[15px] object-cover"
                        alt=""
                      />
                      <p className="text-[14px] text-[#636363] font-[700] text-center">
                        BFX Rewards
                      </p>
                    </div>
                    <p className="text-[14px] text-[#272626] font-[700] text-center">
                      {formatNumber(bfxRewards, 0, 2)}
                    </p>
                  </div>
                  <div
                    className="py-[3px] px-[5px]  flex justify-between items-center border border-[#D3D3D3]"
                    style={{
                      background: "rgb(227 227 227 / 46%)",
                    }}
                  >
                    <div className="flex space-x-2 items-center">
                      <img
                        src={icon4}
                        className="w-[16px] h-[16px] object-cover"
                        alt=""
                      />
                      <p className="text-[14px] text-[#636363] font-[700] text-center">
                        USDT Rewards
                      </p>
                    </div>
                    <p className="text-[14px] text-[#272626] font-[700] text-center">
                      {formatNumber(bonusData.tradingCreditsUSD, 0, 0)}
                    </p>
                  </div>
                  <div
                    className="py-[3px] px-[5px]  flex justify-between border border-[#D3D3D3]"
                    style={{
                      background: "rgb(227 227 227 / 46%)",
                    }}
                  >
                    <div className="flex space-x-2 items-center">
                      <img
                        src={icon5}
                        className="w-[15px] h-[10px] object-cover"
                        alt=""
                      />
                      <p className="text-[14px] text-[#636363] font-[700] text-center">
                        Trading Account Credits
                      </p>
                    </div>
                    <p className="text-[14px] text-[#272626] font-[700] text-center">
                      {formatDollar(bonusData.tradingCreditsUSD, true, 0, 0)}
                    </p>
                  </div>
                </div>
                <div
                  className="px-[16px]  flex justify-between items-center border border-[#D3D3D3] h-[64px]"
                  style={{
                    background: "rgba(237, 237, 237, 0.40)",
                  }}
                >
                  <div className="flex space-x-2 items-center">
                    <img src={icon6} alt="" />
                    <p className="text-[14px] text-[#636363] font-[700] text-center">
                      Referral Bonus
                    </p>
                  </div>
                  <p className="text-[14px] text-[#272626] font-[700] text-center">
                    10%
                  </p>
                </div>
                <div>
                  <button
                    className="text-white bg-[#E5AE00] flex items-center justify-center px-[10px] hover:text-black hover:bg-transparent  text-[10.886px] font-[800] border border-[#E5AE00] hover:border-[#000] w-[100%]  h-[31px]"
                    onClick={copyReferralLink}
                  >
                    Copy 10% Referral Link{" "}
                    <img src={copy} className="ml-2" alt="" />
                  </button>
                </div>
              </div>
              <div className="flex-1 gap-[10px] w-0 <md:w-auto">
                <div
                  className="pb-[10px] h-[230px] pt-[5px] px-[5px]  flex justify-between"
                  style={{
                    background: "rgba(237, 237, 237, 0.40)",
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
                            <h3 className="text-[14px] text-[#525252] text-center font-[600]">
                              {card.name}{currentRank?.rank === card.name.split(" ")[0] ? "(Your Level)" : ""}
                            </h3>
                            <div className="flex w-[80%] mx-auto justify-center">
                              <img className="" src={card.img} alt="" />
                            </div>
                            <div className="flex justify-between items-center pt-[10px] space-x-2">
                              <div className="rounded-[2.964px] bg-[#fff] border border-[#E9E9E9] text-[12px] font-[500] text-[#403E3E] px-[2px] w-[100%] py-[3px] <md:text-[10px]">
                                {card.left}
                              </div>
                              <div className="rounded-[2.964px] bg-[#fff] border border-[#E9E9E9] text-[12px] font-[500] text-[#403E3E] px-[2px] w-[100%] py-[3px] <md:text-[10px]">
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
                  className="py-[8.5px] px-[7px] border border-[#D3D3D3] h-[64px] flex flex-col justify-center"
                  style={{
                    background: "rgba(237, 237, 237, 0.40)",
                  }}
                >
                  <div className="flex gap-1 justify-between items-center">
                    <p className="text-[12.187px] text-[#636363] font-[700] text-center leading-[1]">
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
                    className="text-white bg-[#E5AE00] px-[10px] hover:text-black hover:bg-transparent  text-[10.886px] font-[800] border border-[#E5AE00] hover:border-[#000] w-[100%]  h-[31px]"
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            </div>
            <div
              className="py-[9px] border border-[#D3D3D3] w-[100%] mx-auto "
              style={{
                background: "rgba(237, 237, 237, 0.40)",
              }}
            >
              <div className="flex flex-wrap gap-2 justify-center space-x-[10px] items-center">
                <h4 className="text-center text-[#808080] text-[12px] leading-[85%] font-[500]">
                  Audited by the Leading Blockchain Security Company
                </h4>
                <div className="w-[88px]">
                  <img src={cer} className="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPopup;
