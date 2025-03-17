import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import swpbtn from "../assets/PremiumSec/arw.svg";

import medai1 from "../assets/Press&Media/medicn (3).svg";
import medai2 from "../assets/Press&Media/medicn (2).svg";
import medai3 from "../assets/Press&Media/medicn (1).svg";

function MobPressMediaSec() {
  return (
    <div className="pt-[24px] bg-[#FAFAFA] pb-[24px]"
    style={{
        background:"rgba(250, 250, 250, 0.98)"
    }}
    >
      <div className=" relative space-y-[20px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Press & Media
          </h3>
        </div>
        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper-button-next-press",
              prevEl: ".swiper-button-prev-press",
            }}
            modules={[Navigation]}
            loop={false}
            className="mySwiper"
          >
                <SwiperSlide>
              <div className="bg-[#fff] max-w-[284px] mx-auto rounded-[8px]  px-[20px] py-[37px] w-[100%] ">
            <div className="space-y-[32px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai1} className="h-[30px]" alt="" />
              </div>
              <p className="text-[15px] text-center leading-[144.529%] font-[400]">
              BlockchainFX is quickly becoming the go-to trading platform in 2025
              </p>
            </div>
          </div>
              </SwiperSlide>
             <SwiperSlide>
                <div className="bg-[#fff] max-w-[284px] mx-auto rounded-[8px]  px-[20px] py-[37px] w-[100%] ">
            <div className="space-y-[32px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai2} className="h-[23px] object-cover" alt="" />
              </div>
              <p className="text-[15px] text-center leading-[144.529%] font-[400]">
              BlockchainFX revolutionises the financial trading landscape.
              </p>
            </div>
          </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-[#fff] max-w-[284px] mx-auto rounded-[8px]  px-[20px] py-[37px] w-[100%] ">
            <div className="space-y-[32px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai3} className="h-[30px]" alt="" />
              </div>
              <p className="text-[15px] text-center leading-[144.529%] font-[400]">
              BlockchainFX puts Wall Street in your pocket
              </p>
            </div>
          </div>
              </SwiperSlide>
          </Swiper>
          <button className="swiper-button-prev-press rotate-[180deg]  absolute z-10 !left-[0%] !top-[53%] transform -translate-y-1/2">
            <img className="w-[50.545px] h-[30.545px] " src={swpbtn} alt="" />
          </button>
          <button className="swiper-button-next-press  absolute z-10 !right-[0%] !top-[53%] transform -translate-y-1/2">
            <img className="w-[50.545px] h-[30.545px]" src={swpbtn} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobPressMediaSec;
