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
import howtomob from "../assets/HowDoesItSec/howtomob.png";

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
      className="pt-[40px] pb-[24px] bg-[#000] space-y-[35px]"
      id="MobileDemo"
    >
      <div className="w-[90%] space-y-[25px] px-[20px] py-[30px] bg-[#111] rounded-[24px] border border-[#E6AF031F] mx-auto  overflow-hidden relative">
        <img
          src={ellipse2}
          className="absolute w-[100%] h-[512px] left-0 top-[0%]"
          alt="ellipse2"
        />
        <div>
          <h3 className="text-[30px] capitalize leading-[120%] text-[white] text-center tracking-[-1.5px] font-[600]">
            How It Works?
          </h3>
          <p className="mt-4 text-[15px] text-center text-[#fff] leading-[126%] tracking-[-0.16px] font-[400]">
          BlockchainFX is a global exchange where users can trade crypto, stocks, forex, ETFs, and more. Every time someone trades, 70% of the trading fees go toward the $BFX staking pool, buybacks, and token burns.
          </p>
        </div>
        <div>
          <img src={howtomob} className="object-cover" alt="" />
        </div>
      </div>
      <div className="pt-[30px] w-[90%] mx-auto">
        <div className="w-[100%]">
          <div className="relative grid grid-col-1 gap-y-[20px]">
            {cardItems.map((item, index) => (
              <div className="px-[20px] h-[280px]   rounded-[16px] border border-1 border-[#E6AF031F]">
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
