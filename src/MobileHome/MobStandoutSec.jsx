import React from "react";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import arw from "../assets/PremiumSec/preawr (1).svg";

import coin1 from "../assets/StandoutSec/tblcoins (1).svg";
import coin2 from "../assets/StandoutSec/tblcoins (2).svg";
import coin3 from "../assets/StandoutSec/tblcoins (3).svg";
import coin4 from "../assets/StandoutSec/tblcoins (4).webp";
import check1 from "../assets/StandoutSec/check (2).svg";
import check2 from "../assets/StandoutSec/check (1).svg";

function MobStandoutSec() {
  const { t } = useTranslation();

  return (
    <div className="px-5 bg-[#020B10] pt-[30px]">
      <div className="py-8 bg-[#111111] border border-[#E6AF0320] rounded-[16px]">
        <div className="space-y-[15px] mb-8">
          <h3 className="text-[30px] font-[700] text-center leading-[120%] text-[#FFF] tracking-[-1.548px]">
            {t("standout_section.title")}
          </h3>
          <p className="text-[15px] font-[400] px-2 text-center leading-[130%] text-[#fff] tracking-[-0.32px]">
            {t("standout_section.description")}
          </p>
        </div>
        <div className="w-[100%] mx-auto flex">
          <div className="w-[70%]   ">
            <div className="flex border border-[#343434] border-r-[#e6af03]">
              <div className="h-[91px] w-[70%]"></div>
              <div className="h-[91px] border-l border-t border-[#e6af03]  justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img className="h-[41.126px] w-[41.126px]" src={coin1} alt="" />
                <h3 className="text-[#545454] leading-[8.902px] font-[700] text-[8.902px]">
                  BlockchainFX
                </h3>
              </div>
            </div>
            <div className="flex border border-[#343434] border-r-[#e6af03]">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start   px-[10px]">
                <h3 className="text-[15px] text-[#FFF] font-[500] leading-[120%]">
                  Token Name
                </h3>
              </div>
              <div className="   border-l border-[#e6af03]    justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <h3 className="text-[#fff] leading-[120%] font-[700] text-[15px]">
                  $BFX
                </h3>
              </div>
            </div>
            <div className="flex border border-[#343434] border-r-[#e6af03]">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start   px-[10px]">
                <h3 className="text-[15px] text-[#FFF] font-[500] leading-[120%]">
                  Ranked
                </h3>
              </div>
              <div className=" border-l border-[#e6af03]    justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <h3 className="text-[#fff] leading-[120%] font-[700] text-[15px]">
                  -
                </h3>
              </div>
            </div>
            <div className="flex border border-[#343434] border-r-[#e6af03]">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start   px-[10px]">
                <h3 className="text-[15px] text-[#FFF] font-[500] leading-[120%]">
                  Marketcap
                </h3>
              </div>
              <div className="  border-l border-[#e6af03]   justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <h3 className="text-[#fff] leading-[120%] font-[700] text-[15px]">
                  -
                </h3>
              </div>
            </div>
            <div className="flex border border-[#343434] border-r-[#e6af03]">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start   px-[10px]">
                <h3 className="text-[15px] text-[#FFF] font-[500] leading-[120%]">
                  Trade Crypto
                </h3>
              </div>
              <div className=" border-l border-[#e6af03]   justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
            </div>
            <div className="flex border border-[#343434] border-r-[#e6af03]">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start    px-[10px]">
                <h3 className="text-[15px] text-[#FFF] font-[500] leading-[120%]">
                  Leverage Trading
                </h3>
              </div>
              <div className=" border-l border-[#e6af03]   justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
            </div>
            <div className="flex border border-[#343434] border-r-[#e6af03]">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start  px-[10px]">
                <h3 className="text-[15px] text-[#FFF] font-[500] leading-[120%]">
                  Risk Management
                </h3>
              </div>
              <div className=" border-l border-[#e6af03]     justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
            </div>
            <div className="flex border border-[#343434] border-r-[#e6af03]">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start  px-[10px]">
                <h3 className="text-[15px] text-[#FFF] font-[500] leading-[120%]">
                  Forex
                </h3>
              </div>
              <div className=" border-l border-[#e6af03]    justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
            </div>
            <div className="flex border border-[#343434] border-r-[#e6af03]">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start  px-[10px]">
                <h3 className="text-[15px] text-[#FFF] font-[500] leading-[120%]">
                  Commodities
                </h3>
              </div>
              <div className="  border-l border-[#e6af03]    justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
            </div>
            <div className="flex border border-[#343434] border-r-[#e6af03]">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start    px-[10px]">
                <h3 className="text-[15px] text-[#FFF] font-[500] leading-[120%]">
                  Indices
                </h3>
              </div>
              <div className="   border-l border-[#e6af03]   justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
            </div>
            <div className="flex border border-[#343434] border-r-[#e6af03]">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start   px-[10px]">
                <h3 className="text-[15px] text-[#FFF] font-[500] leading-[120%]">
                  CFDs
                </h3>
              </div>
              <div className="  border-l border-[#e6af03]    justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
            </div>
            <div className="flex border border-[#343434] border-r-[#e6af03]">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start  px-[10px]">
                <h3 className="text-[15px] text-[#FFF] font-[500] leading-[120%]">
                  ETFs
                </h3>
              </div>
              <div className="   border-l border-[#e6af03]   justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
            </div>
            <div className="flex border border-[#343434] border-r-[#e6af03]">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start  px-[10px]">
                <h3 className="text-[15px] text-[#FFF] font-[500] leading-[120%]">
                USDT  Rewards
                </h3>
              </div>
              <div className="   border-l border-b border-[#e6af03]   justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
            </div>
          </div>
          <div className="relative w-[30%]  ">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]}
              loop={false}
              className="mySwiper !pb-[2rem]"
            >
              <SwiperSlide>
                <div>
                  <div className="flex border border-[#343434]">
                    <div className="h-[91px] justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img
                        className="h-[41.126px] w-[41.126px]"
                        src={coin2}
                        alt=""
                      />
                      <h3 className="text-[#545454] leading-[8.902px] font-[700] text-[8.902px]">
                        Bitget
                      </h3>
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center py-[14px] h-[49px] px-[10px]  flex flex-col items-center space-y-[6px] w-[100%]">
                      <h3 className="text-[#fff]  font-[500] text-[12px]">
                        $BGB
                      </h3>
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center py-[14px] h-[49px] px-[10px]   flex flex-col items-center space-y-[6px] w-[100%]">
                      <h3 className="text-[#fff]  font-[500] text-[12px]">
                        #24
                      </h3>
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center py-[14px] h-[49px] px-[10px]  flex flex-col items-center space-y-[6px] w-[100%]">
                      <h3 className="text-[#fff]  font-[500] text-[12px]">
                        $12.26 Billion
                      </h3>
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center py-[14px] h-[49px] px-[10px]   flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check1} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center py-[14px] h-[49px] px-[10px]  flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check1} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center py-[14px] h-[49px] px-[10px]   flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check1} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center py-[14px] h-[49px] px-[10px]   flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center py-[14px] h-[49px] px-[10px]   flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center py-[14px] h-[49px] px-[10px]   flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center py-[14px] h-[49px] px-[10px]   flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center py-[14px] h-[49px] px-[10px]   flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center py-[14px] h-[49px] px-[10px]   flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="flex border border-[#0C0C0C]">
                    <div className="h-[91px] justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img
                        className="h-[41.126px] w-[41.126px]"
                        src={coin3}
                        alt=""
                      />
                      <h3 className="text-[#545454] leading-[8.902px] font-[700] text-[8.902px]">
                        Hyperliquid
                      </h3>
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className=" justify-center flex flex-col items-center space-y-[6px] w-[100%] py-[14px] h-[49px] px-[10px]">
                      <h3 className="text-[#fff] font-[500] text-[12px]">
                        $HYPE
                      </h3>
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="  justify-center flex flex-col items-center space-y-[6px] w-[100%] py-[14px] h-[49px] px-[10px]">
                      <h3 className="text-[#fff] font-[500] text-[12px]">
                        #27
                      </h3>
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="py-[14px] h-[49px] px-[10px]      justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <h3 className="text-[#fff]  font-[500] text-[12px]">
                        $8.77 Billion
                      </h3>
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className=" py-[14px] h-[49px] px-[10px]    justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check1} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="  py-[14px] h-[49px] px-[10px]   justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check1} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="   py-[14px] h-[49px] px-[10px]     justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="  py-[14px] h-[49px] px-[10px]     justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="   py-[14px] h-[49px] px-[10px]   justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="  py-[14px] h-[49px] px-[10px]     justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="   py-[14px] h-[49px] px-[10px]    justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="py-[14px] h-[49px] px-[10px]   justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="py-[14px] h-[49px] px-[10px]   justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="flex border border-[#343434]">
                    <div className="h-[91px]   justify-center flex flex-col items-center space-y-[6px] w-[100%] ">
                      <img
                        className="h-[41.126px] w-[41.126px] object-cover"
                        src={coin4}
                        alt=""
                      />
                      <h3 className="text-[#545454]  leading-[8.902px] font-[700] text-[8.902px]">
                        Uniswap{" "}
                      </h3>
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center   flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <h3 className="text-[#fff]  font-[500] text-[12px]">
                        $UNI
                      </h3>
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center   flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <h3 className="text-[#fff]  font-[500] text-[12px]">
                        #28
                      </h3>
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center  flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <h3 className="text-[#fff]  font-[500] text-[12px]">
                        $8.08 Billion
                      </h3>
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center  flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check1} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center   flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center   flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center   flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center     flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center   flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center   flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex border border-[#343434]">
                    <div className="justify-center flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <button className="swiper-button-prev !absolute z-10 !left-[-110%] !top-[103%] transform -translate-y-1/2 !w-[40px] !h-[40px]">
              <img className="w-[37.545px] h-[37.545px]" src={arw} alt="" />
            </button>
            <button className="swiper-button-next rotate-[180deg] !absolute z-10 !right-[110%] !top-[103%] transform -translate-y-1/2 !w-[40px] !h-[40px]">
              <img className="w-[37.545px] h-[37.545px]" src={arw} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobStandoutSec;
