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
    <div
      className="pt-[30px] bg-[#000] pb-[30px]"
      // style={{
        // background: "rgba(250, 250, 250, 0.98)",
      // }}
    >
      <div className=" relative space-y-[20px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#fff] tracking-[-1px]">
            Press & Media
          </h3>
        </div>
        <div className="relative space-y-3">
          {/* <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper-button-next-press",
              prevEl: ".swiper-button-prev-press",
            }}
            modules={[Navigation]}
            loop={false}
            className="mySwiper"
          > */}
            <>
              <div className="bg-[#030F16] border border-white border-opacity-10 max-w-[284px] mx-auto rounded-[8px]  px-[20px] py-[37px] w-[100%] ">
                <div className="space-y-[32px]">
                  <div className="flex items-center justify-center h-[30px]">
                    <img src={medai1} className="h-[30px]" alt="" />
                  </div>
                  <p className="text-[#ACC4D1] text-[15px] text-center leading-[144.529%] font-[400]">
                  BlockchainFX is quickly becoming the go-to trading platform in 2025, offering access to 500+ assets and rewarding benefits for users.
                  </p>
                  <a href="https://coinmarketcap.com/community/articles/67d43c30c4a5810cf71d7406/" target="_blank" className="text-[15px] flex justify-center underline text-[#ACC4D1]" rel="noopener noreferrer">Read the article</a>
                </div>
              </div>
            </>
            <>
              <div className="bg-[#030F16] border border-white border-opacity-10 max-w-[284px] mx-auto rounded-[8px]  px-[20px] py-[37px] w-[100%] ">
                <div className="space-y-[32px]">
                  <div className="flex items-center justify-center h-[30px]">
                    <img
                      src={medai2}
                      className="h-[23px] object-cover"
                      alt=""
                    />
                  </div>
                  <p className="text-[#ACC4D1] text-[15px] text-center leading-[144.529%] font-[400]">
                  BlockchainFX is set to revolutionise the trading landscape as the first all-in-one crypto trading platform.
                  </p>
                  <a href="https://www.binance.com/en/square/post/21135762162242" target="_blank" className="text-[15px] flex justify-center underline text-[#ACC4D1]" rel="noopener noreferrer">Read the article</a>
                </div>
              </div>
            </>
            <>
              <div className="bg-[#030F16] border border-white border-opacity-10 max-w-[284px] mx-auto rounded-[8px]  px-[20px] py-[37px] w-[100%] ">
                <div className="space-y-[32px]">
                  <div className="flex items-center justify-center h-[30px]">
                    <img src={medai3} className="h-[30px]" alt="" />
                  </div>
                  <p className="text-[#ACC4D1] text-[15px] text-center leading-[144.529%] font-[400]">
                  BlockchainFX is the first trading app that lets users earn daily USDT passive income directly from trading fees.
                  </p>
                  <a href="https://techbullion.com/blockchainfx-the-first-ever-platform-where-you-can-trade-bitcoin-btc-apple-aapl-instantly/" target="_blank" className="text-[15px] flex justify-center underline text-[#ACC4D1]" rel="noopener noreferrer">Read the article</a>
                </div>
              </div>
            </>
          {/* </Swiper> */}
          {/* <button className="swiper-button-prev-press rotate-[180deg]  absolute z-10 !left-[0%] !top-[53%] transform -translate-y-1/2">
            <img className="w-[50.545px] h-[30.545px] " src={swpbtn} alt="" />
          </button>
          <button className="swiper-button-next-press  absolute z-10 !right-[0%] !top-[53%] transform -translate-y-1/2">
            <img className="w-[50.545px] h-[30.545px]" src={swpbtn} alt="" />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default MobPressMediaSec;
