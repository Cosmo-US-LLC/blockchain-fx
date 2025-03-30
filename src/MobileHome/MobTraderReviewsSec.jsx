import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import swpbtn from "../assets/PremiumSec/arw.svg";
import swpbtn2 from "../assets/PremiumSec/arw2.svg";

import tradimg from "../assets/TraderReviewsSec/tradimg.png";
import user from "../assets/TraderReviewsSec/image.png";
import fram from "../assets/TraderReviewsSec/fram.png";
import user1 from "../assets/TraderReviewsSec/rew (5).png";
import user2 from "../assets/TraderReviewsSec/rew (4).png";
import user3 from "../assets/TraderReviewsSec/rew (3).png";
import user4 from "../assets/TraderReviewsSec/rew (2).png";
import user5 from "../assets/TraderReviewsSec/rew (1).png";
import usern from "../assets/TraderReviewsSec/user.png";
import tick from "../assets/TraderReviewsSec/teenyicons_tick-circle-solid.svg";
import swpbtnl from "../assets/TraderReviewsSec/arwr.svg";
import swpbtnr from "../assets/TraderReviewsSec/arw.svg";

function MobTraderReviewsSec() {
  return (
    <div className="py-[30px] space-y-[20px] bg-[#000]" id="reviews">
      <div className=" relative space-y-[20px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[30px] font-[500] text-center leading-[114%] text-[#FFF] tracking-[-1px]">
            What Traders Say <br />
            About <span className="text-[#E5AE00]">BlockchainFX</span>
          </h3>
        </div>
        <div className="w-[100%]">
          <div className=" space-y-[30px] w-[100%]">
            <div className="space-y-[15px]">
              <h4 className="text-[15px] bg-[#030F16] border border-white border-opacity-10 text-white text-center font-[400] max-w-[123px] rounded-[4px] py-[10px] mx-auto">
                4.87 out of 5
              </h4>
              <p className="text-center text-[#7C7C7C] text-[15px] font-[400]">
                1000+ trader ratings
              </p>
            </div>
            <div className=" w-[100%] space-y-[24px] text-white">
              <div className="flex justify-between space-x-4 items-center">
                <span className="text-[15px] font-[400] w-[20px]">5</span>
                <div className="h-[17px] w-[360px] w-[100%] bg-[#222] rounded-[16.955px]">
                  <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[86%]"></div>
                </div>
                <span className="text-[15px] font-[400] w-[50px]">86%</span>
              </div>
              <div className="flex justify-between space-x-4 items-center">
                <span className="text-[15px] font-[400] w-[20px]">4</span>
                <div className="h-[17px] w-[360px] w-[100%] bg-[#222] rounded-[16.955px]">
                  <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[calc(12%+10px)]"></div>
                </div>
                <span className="text-[15px] font-[400] w-[50px]">8%</span>
              </div>
              <div className="flex justify-between space-x-4 items-center">
                <span className="text-[15px] font-[400] w-[20px]">3</span>
                <div className="h-[17px] w-[360px] w-[100%] bg-[#222] rounded-[16.955px]">
                  <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[calc(7%+10px)]"></div>
                </div>
                <span className="text-[15px] font-[400] w-[50px]">3%</span>
              </div>
              <div className="flex justify-between space-x-4 items-center">
                <span className="text-[15px] font-[400] w-[20px]">2</span>
                <div className="h-[17px] w-[360px] w-[100%] bg-[#222] rounded-[16.955px]">
                  <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[calc(6%+10px)]"></div>
                </div>
                <span className="text-[15px] font-[400] w-[50px]">2%</span>
              </div>
              <div className="flex justify-between space-x-4 items-center">
                <span className="text-[15px] font-[400] w-[20px]">1</span>
                <div className="h-[17px] w-[360px] w-[100%] bg-[#222] rounded-[16.955px]">
                  <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[calc(5%+10px)]"></div>
                </div>
                <span className="text-[15px] font-[400] w-[50px]">1%</span>
              </div>
            </div>
          </div>
          <div className="w-[100%] pt-[35px]">
            <div className="relative">
              <div className="max-w-[300px] flex space-x-3 mx-auto">
                <button className="swiper-button-prev-3 rotate-[180deg] !w-[40px] !h-[40px]  absolute z-10 !left-[0%] !top-[45%]  ">
                  <img
                    className="w-[40.545px] h-[40.545px] "
                    src={swpbtn}
                    alt=""
                  />
                </button>
                <button className="swiper-button-next-3 !w-[40px] !h-[40px]  absolute z-10 !right-[0%] !top-[45%] ">
                  <img
                    className="w-[40.545px] h-[40.545px]"
                    src={swpbtn}
                    alt=""
                  />
                </button>
              </div>
              <Swiper
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-3",
                  prevEl: ".swiper-button-prev-3",
                }}
                modules={[Navigation]}
                loop={false}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="bg-[#181A20] border border-[#525252] py-[45px] pb-[51px] min-h-[208px] flex flex-col justify-between pl-[40px] pr-[16px]  rounded-[4px] max-w-[233.388px] mx-auto space-y-[30px] relative">
                    {/* <img
                      src={fram}
                      className="absolute left-[-20%] top-[-7%] min-w-[325px] min-h-[300px] z-[-1]"
                      alt=""
                    /> */}
                    <p className="h-[100px] text-[10px] font-[400] leading-[175%] text-[#fff]">
                      Finally, a platform that gets it right! I traded CFDs,
                      bought Apple stocks, sold them for GBP, and grabbed some
                      $PEPE, all within five minutes. Highly recommended for
                      beginners and pros alike.
                    </p>
                    <div className="flex items-center space-x-2">
                      <img src={usern} className="h-[26px] w-[26px]" alt="" />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-[12px] text-[#fff] font-[600] leading-[140%]">
                            LacosteBtc
                          </h3>
                          <img src={tick} alt="" />
                        </div>
                        <h4 className="text-[#6A6A6A] text-[9px] font-[600] leading-[140%]">
                          @LacosteBtc
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-[#181A20] border border-[#525252] py-[45px] pb-[51px] min-h-[208px] flex flex-col justify-between pl-[40px] pr-[16px]  rounded-[4px] max-w-[233.388px] mx-auto space-y-[30px] relative">
                    {/* <img
                      src={fram}
                      className="absolute left-[-20%] top-[-7%] min-w-[325px] min-h-[300px] z-[-1]"
                      alt=""
                    /> */}
                    <p className="h-[100px] text-[10px] font-[400] leading-[175%] text-[#fff]">
                      Trading on 9 different windows and having access to dozens
                      of trading analytic tools and risk management is giving me
                      a long-term edge over the competition trading on other
                      platforms.
                    </p>
                    <div className="flex items-center space-x-2">
                      <img src={user1} className="w-[26px] h-[26px]" alt="" />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-[12px] text-[#fff] font-[600] leading-[140%]">
                            Mr 𝕏
                          </h3>
                          <img src={tick} alt="" />
                        </div>
                        <h4 className="text-[#6A6A6A] text-[9px] font-[600] leading-[140%]">
                          @MrX_Crypto
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-[#181A20] border border-[#525252]  py-[45px] pb-[51px] min-h-[208px] flex flex-col justify-between pl-[40px] pr-[16px]  rounded-[4px] max-w-[233.388px] mx-auto space-y-[30px] relative">
                    {/* <img
                      src={fram}
                      className="absolute left-[-20%] top-[-7%] min-w-[325px] min-h-[300px] z-[-1]"
                      alt=""
                    /> */}
                    <p className="text-[10px] h-[100px] font-[400] leading-[175%] text-[#fff]">
                      BlockchainFX gives you endless trading opportunities. This
                      just makes sense since markets are interconnected.
                      Finally, there’s no need to waste time switching between
                      brokers.
                    </p>
                    <div className="flex items-center space-x-2">
                      <img src={user2} className="w-[25px] h-[25px]" alt="" />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-[12px] text-[#fff] font-[600] leading-[140%]">
                            Silvina Escudero
                          </h3>
                          <img src={tick} alt="" />
                        </div>
                        <h4 className="text-[#6A6A6A] text-[9px] font-[600] leading-[140%]">
                          @silvinaescudero
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-[#181A20] border border-[#525252] py-[45px] pb-[51px] min-h-[208px] flex flex-col justify-between pl-[40px] pr-[16px] relative rounded-[4px] max-w-[233.388px] mx-auto space-y-[30px]">
                    {/* <img
                      src={fram}
                      className="absolute left-[-20%] top-[-7%] min-w-[325px] min-h-[300px] z-[-1]"
                      alt=""
                    /> */}
                    <p className="text-[10px]  h-[100px] font-[400] leading-[175%] text-[#fff]">
                      Trading on 9 different windows and having access to dozens
                      trading analytic tools and risk management is giving me a
                      long-term edge over the competition trading on other
                      platforms.
                    </p>
                    <div className="flex items-center space-x-2">
                      <img src={user3} className="w-[26px] h-[26px]" alt="" />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-[12px] text-[#fff] font-[600] leading-[140%]">
                            Shiny.Mo
                          </h3>
                          <img src={tick} alt="" />
                        </div>
                        <h4 className="text-[#6A6A6A] text-[9px] font-[600] leading-[140%]">
                          @shinymo
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-[#181A20] border border-[#525252]  py-[45px] pb-[51px] min-h-[208px] flex flex-col justify-between pl-[40px] pr-[16px] relative rounded-[4px] max-w-[233.388px] mx-auto space-y-[30px]">
                    {/* <img
                      src={fram}
                      className="absolute left-[-20%] top-[-7%] min-w-[325px] min-h-[300px] z-[-1]"
                      alt=""
                    /> */}
                    <p className="text-[10px] h-[100px] font-[400] leading-[175%] text-[#fff]">
                      The best part about BlockchainFX? The deep liquidity
                      across all assets. I’ve never had an issue filling large
                      orders, even with niche crypto pairs. This is exactly what
                      serious traders need—speed, reliability, and a wide range
                      of markets all in one place.
                    </p>
                    <div className="flex items-center space-x-2">
                      <img src={user4} className="w-[26px] h-[26px]" alt="" />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-[12px] text-[#fff] font-[600] leading-[140%]">
                            DefiAva🦋
                          </h3>
                          <img src={tick} alt="" />
                        </div>
                        <h4 className="text-[#6A6A6A] text-[9px] font-[600] leading-[140%]">
                          @defi_avaxx
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-[#181A20] border border-[#525252]  py-[45px] pb-[51px] min-h-[208px] flex flex-col justify-between pl-[40px] pr-[16px] relative rounded-[4px] max-w-[233.388px] mx-auto space-y-[30px]">
                    {/* <img
                      src={fram}
                      className="absolute left-[-20%] top-[-7%] min-w-[325px] min-h-[300px] z-[-1]"
                      alt=""
                    /> */}
                    <p className="text-[10px] h-[100px] font-[400] leading-[175%] text-[#fff]">
                      That’s exactly what we needed. A trading broker designed
                      to bridge Crypto with Forex, ETFs, and stocks, giving you
                      real access to the markets with deep liquidity.
                    </p>
                    <div className="flex items-center space-x-2">
                      <img src={user5} className="w-[26px] h-[26px]" alt="" />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-[12px] text-[#fff] font-[600] leading-[140%]">
                            Crypto Bri
                          </h3>
                          <img src={tick} alt="" />
                        </div>
                        <h4 className="text-[#6A6A6A] text-[9px] font-[600] leading-[140%]">
                          @cryptobri_
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobTraderReviewsSec;
