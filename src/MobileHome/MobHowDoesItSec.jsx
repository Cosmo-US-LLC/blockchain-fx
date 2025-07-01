import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

import cardicn1 from "../assets/HowDoesItSec/cardicon (3).webp";
import cardicn2 from "../assets/HowDoesItSec/cardicon (2).webp";
import cardicn3 from "../assets/HowDoesItSec/cardicon (1).webp";
import ellipse2 from "../assets/HowDoesItSec/Ellipse 3 (3).png";
import cardicn6 from "../assets/HowDoesItSec/icns (6) copy.svg";
import howtomob from "../assets/HowDoesItSec/howtomob.webp";

function MobHowDoesItSec() {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const { t } = useTranslation();

  const cardItems = [
    {
      icon: cardicn1,
      title: "BFX & USDT Staking Rewards",
      description:
        "50% of all fees collected are automatically distributed to BFX holders who stake their coins.",
    },
    {
      icon: cardicn2,
      title: "Daily Buybacks",
      description:
        "20% of the fees are used to buy back $BFX daily, helping boost demand and support the price.",
    },
    {
      icon: cardicn3,
      title: "Burn BFX Coins",
      description:
        "Half of the bought-back tokens are permanently burned, gradually reducing the supply of $BFX.",
    },
  ];

  const handleSlideChange = (swiper) => {
    setSwiperIndex(swiper.activeIndex);
  };

  return (
    <div
      className="pt-[40px] pb-[24px] bg-[#020B10] space-y-[35px]"
      id="MobileDemo"
    >
      <div
        className="w-[90%] space-y-[25px] px-[20px] py-[30px] bg-[#010E11] rounded-[24px]  mx-auto  overflow-hidden relative"
        style={{
          border: "1px solid rgba(230, 175, 3, 0.12)",
        }}
      >
        {/* <img
          src={ellipse2}
          className="absolute w-[100%] h-[512px] left-0 top-[0%]"
          alt="ellipse2"
        /> */}
        <div>
          <h3 className="text-[30px] font-[600] leading-[120%] tracking-[-1.5px] capitalize text-[white] text-center">
            How It Works?
          </h3>
          <p className="mt-4 font-inter text-[16px] text-[#fff] font-medium leading-[25px] text-center ">
            BlockchainFX is a global decentralised exchange where users can
            trade crypto, stocks, forex, ETFs, and more. Every time someone
            trades, 70% of the trading fees go toward the $BFX staking pool,
            buybacks, and token burns.
            <br />
            <br />
            The Daily staking rewards depend on how much $BFX someone holds. The
            more $BFX a person holds, the higher the rewards, capped at $25,000
            USDT per day.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={howtomob} className="object-cover" alt="" />
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="w-[100%]">
          <div className="relative grid grid-col-1 gap-y-[20px]">
            {cardItems.map((item, index) => (
              <div
                style={{
                  border: "1px solid rgba(230, 175, 3, 0.12)",
                }}
                className="px-[20px] h-[280px]   rounded-[16px] "
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex justify-center">
                    <img src={item.icon} className="h-[60px]" alt="" />
                  </div>
                  <p className="text-[#FFFFFF33] text-[56px] font-[600]">
                    0{index + 1}.
                  </p>
                </div>

                <div className="pt-8">
                  <h3 className="text-[23px] tracking-[-1.2px] text-left text-[white] font-[600] leading-[120%]">
                    {item.title}
                  </h3>
                </div>
                <h4 className="mt-2 text-[16px] text-left text-[#fff] font-[400] leading-[153.333%]">
                  {item.description}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobHowDoesItSec;
