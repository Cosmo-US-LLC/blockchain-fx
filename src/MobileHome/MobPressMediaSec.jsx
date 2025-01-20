import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import swpbtn from "../assets/PremiumSec/arw.svg";

import medai1 from "../assets/Press&Media/media (1).svg";
import medai2 from "../assets/Press&Media/media (2).svg";
import medai3 from "../assets/Press&Media/media (3).svg";

function MobPressMediaSec() {
  return (
    <div className="pt-[24px] bg-[#FAFAFA] pb-[24px]"
    style={{
        background:"rgba(250, 250, 250, 0.98)"
    }}
    >
      <div className=" relative space-y-[20px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Press & Media
          </h3>
        </div>
        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            loop={false}
            className="mySwiper"
          >
             <SwiperSlide>
                <div className="bg-[#fff] max-w-[284px] mx-auto rounded-[8px]  px-[20px] py-[37px] w-[100%] border border-[#9D9D9D]">
            <div className="space-y-[32px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai1} className="h-[20px]" alt="" />
              </div>
              <p className="text-[15px] text-center leading-[144.529%] font-[400]">
              BlockchainFX can be described as a hybrid of Binance and Robinhood, delivering a seamless trading experience with exceptional speed and simplicity, powered by instant crypto deposits and trading.
              </p>
            </div>
          </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-[#FBFBFB] max-w-[284px] mx-auto rounded-[8px]  px-[20px] py-[37px] w-[100%] border border-[#9D9D9D]">
            <div className="space-y-[32px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai2} className="h-[50px]" alt="" />
              </div>
              <p className="text-[15px] text-center leading-[144.529%] font-[400]">
              BFX is pioneering a new era of cryptocurrency by seamlessly connecting it to global markets such as Forex, Commodities, and ETFs. This unprecedented integration creates endless trading opportunities for traders.
              </p>
            </div>
          </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-[#fff] max-w-[284px] mx-auto rounded-[8px]  px-[20px] py-[37px] w-[100%] border border-[#9D9D9D]">
            <div className="space-y-[32px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai3} className="h-[30px]" alt="" />
              </div>
              <p className="text-[15px] text-center leading-[144.529%] font-[400]">
              BlockchainFX gives 560 million crypto users direct access to global financial markets, enabling seamless transitions across asset classes like Silver and BTC in seconds with advanced trading tools.
              </p>
            </div>
          </div>
              </SwiperSlide>
          </Swiper>
          <button className="swiper-button-prev rotate-[180deg]  absolute z-10 !left-[0%] !top-[53%] transform -translate-y-1/2">
            <img className="w-[50.545px] h-[30.545px] " src={swpbtn} alt="" />
          </button>
          <button className="swiper-button-next  absolute z-10 !right-[0%] !top-[53%] transform -translate-y-1/2">
            <img className="w-[50.545px] h-[30.545px]" src={swpbtn} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobPressMediaSec;
