import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

import cardicn1 from "../assets/HowDoesItSec/icns (1) copy.svg";
import cardicn2 from "../assets/HowDoesItSec/icns (2) copy.svg";
import cardicn3 from "../assets/HowDoesItSec/icns (3) copy.svg";
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
      description: "BFX & USDT Staking Rewards",
    },
    {
      icon: cardicn2,
      title: "Daily Buybacks",
      description: "20% of the fees are used to buy back $BFX daily, helping boost demand and support the price.",
    },
    {
      icon: cardicn3,
      title: "Burn BFX Coins",
      description: "Half of the bought-back tokens are permanently burned, gradually reducing the supply of $BFX.",
    },
  
  ];

  const handleSlideChange = (swiper) => {
    setSwiperIndex(swiper.activeIndex);
  };

  return (
    <div className="pt-[40px] pb-[24px] bg-[#000] space-y-[35px]">
      <div className="w-[90%] space-y-[25px] px-[20px] py-[30px] bg-[#111] rounded-[24px] border border-[#E6AF031F] mx-auto  overflow-hidden relative">
         <img src={ellipse2} className="absolute w-[100%] h-[512px] left-0 top-[0%]" alt="ellipse2" />
        <div>
          <h3 className="text-[30px] capitalize leading-[100%] text-[white] text-center font-[700]">
          How Does It Work?
          </h3>
          <p className="mt-4 text-[15px] text-center text-[#fff] font-[400]">
          Discover the features and benefits of BlockchainFX.
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
                  <div className="px-[20px] h-[280px] bg-[#111] rounded-[16px] border border-1 border-[#E6AF031F]">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex justify-center">
                      <img src={item.icon} alt="" />
                    </div>
                    <p className="text-[#FFFFFF33] text-[56px] font-[600]">
                      0{index + 1}.
                    </p>
                  </div>

                  <div className="pt-8">
                    <h3 className="text-[24px] tracking-[-1.2px] text-left text-[white] font-[600] leading-[115%]">
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
