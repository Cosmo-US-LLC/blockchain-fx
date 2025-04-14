import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import cardicn1 from "../assets/HowDoesItSec/icns (1) copy.svg";
import cardicn2 from "../assets/HowDoesItSec/icns (2) copy.svg";
import cardicn3 from "../assets/HowDoesItSec/icns (3) copy.svg";
import cardicn4 from "../assets/HowDoesItSec/icns (4) copy.svg";
import cardicn5 from "../assets/HowDoesItSec/icns (5) copy.svg";
import cardicn6 from "../assets/HowDoesItSec/icns (6) copy.svg";

const cardItems = [
  {
    icon: cardicn1,
    title: "Trading Platform",
    description:
      "BlockchainFX is a multi-asset trading platform that offers a wide range of trading options.",
  },
  {
    icon: cardicn2,
    title: "Fee Distribution",
    description:
      "70% of trading fees are used to reward the BFX community and drive the ecosystem’s growth.",
  },
  {
    icon: cardicn3,
    title: " Daily Staking Rewards (50%)",
    description:
      "50% of all fees collected will be distributed to BFX holders and automatically added to their wallets.",
  },
  {
    icon: cardicn4,
    title: "Buybacks (20%)",
    description:
      "20% of fees will be used for daily BFX buybacks, increasing demand and boosting the $BFX price.",
  },
  {
    icon: cardicn5,
    title: "Burn",
    description:
      "Half of all buybacks will be automatically burned, gradually reducing the supply of $BFX.",
  },
  {
    icon: cardicn6,
    title: "Fueling the Growth Engine",
    description:
      "The deflationary model and automatic buyback system fuel the potential for exponential growth of $BFX.",
  },
];

function MobHowDoesItSec() {
  const [swiperIndex, setSwiperIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setSwiperIndex(swiper.activeIndex);
  };

  return (
    <div className="pt-[24px] pb-[24px]">
      <div className="max-w-[1400px] w-[100%] mx-auto relative">
        <div>
          <h3 className="text-[36px] capitalize leading-[100%] text-[white] text-center font-[600]">
            How Does It Work?
          </h3>
          <p className="mt-4 text-[15px] text-center text-[#8497A2] font-[400]">
            BFX Reward Engine Explained in 6 Easy Steps
          </p>
        </div>
        <div className="pt-[30px] w-[100%] mx-auto">
          <div className="w-[100%]">
            <div className="relative px-4">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={{
                  nextEl: ".swiper-button-next-how",
                  prevEl: ".swiper-button-prev-how",
                }}
                modules={[Navigation]}
                loop={false}
                onSlideChange={handleSlideChange}
                className="mySwiper"
              >
                {cardItems.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="px-[20px] h-[299px] bg-[#030F16] rounded-[16px] border border-1 border-[#E6AF031F]">
                      <div className="flex flex-row items-center justify-between">
                        <div className="flex justify-center">
                          <img src={item.icon} alt="" />
                        </div>
                        <p className="text-[#FFFFFF33] text-[56px] font-[600]">
                          0{index + 1}.
                        </p>
                      </div>

                      <div className="pt-8">
                        <h3 className="text-[24px] text-left text-[white] font-[600] leading-[115%]">
                          {item.title}
                        </h3>
                      </div>
                      <h4 className="mt-2 text-[16px] text-left text-[#8497A2] font-[400] leading-[153.333%]">
                        {item.description}
                      </h4>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Navigation Arrows and Circles */}
              <div className="flex flex-row w-full items-center justify-center text-[white] mt-4">
                {/* Left Arrow */}
                <div
                  className={`swiper-button-prev-how w-[16px] h-[16px] flex justify-center items-center rounded-full cursor-pointer ${
                    swiperIndex > 0 ? "text-white" : "text-[#1F2213]"
                  }`}
                >
                  <MdKeyboardArrowLeft
                    className={`text-${
                      swiperIndex > 0 ? "white" : "#1F2213"
                    } text-2xl`}
                  />
                </div>

                {/* Circles for each slide */}
                <div className="flex gap-2 mx-4">
                  {cardItems.map((_, index) => (
                    <div
                      key={index}
                      className={`w-[7px] h-[7px] rounded-full ${
                        swiperIndex === index ? "bg-[#E6AF03]" : "bg-[#FFFFFF]"
                      }`}
                    />
                  ))}
                </div>

                {/* Right Arrow */}
                <div
                  className={`swiper-button-next-how w-[16px] h-[16px] flex justify-center items-center rounded-full cursor-pointer ${
                    swiperIndex < cardItems.length - 1
                      ? "text-white"
                      : "text-[#1F2213]"
                  }`}
                >
                  <MdKeyboardArrowRight
                    className={`text-${
                      swiperIndex < cardItems.length - 1 ? "white" : "#1F2213"
                    } text-2xl`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobHowDoesItSec;
