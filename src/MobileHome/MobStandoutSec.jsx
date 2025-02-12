import React from "react";

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
  return (
    <div className="pt-[24px] pb-[24px]">
      <div className="space-y-[40px] w-[90%] mx-auto ">
        <div className="space-y-[15px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Standout Features
          </h3>
          <p className="text-[15px] font-[400]  text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
            Cryptocurrencies from exchanges have historically performed well due
            to their active user base, platform revenue, and ongoing marketing.
            $BFX, the first token from a multi-asset trading platform, offers
            unique features that bring real value to the market.{" "}
          </p>
        </div>
        <div className="w-[100%] mx-auto flex">
          <div className="w-[70%]">
            <div className="flex">
              <div className="h-[91px] w-[70%]"></div>
              <div className="h-[91px] border-l border-r  border-[#A6A6A6] bg-[#FFF8DC] justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img className="h-[41.126px] w-[41.126px]" src={coin1} alt="" />
                <h3 className="text-[#545454] leading-[8.902px] font-[700] text-[8.902px]">
                  BlockchainFX
                </h3>
              </div>
              {/* <div className="h-[91px] justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                        <img className="h-[41.126px] w-[41.126px]" src={coin2} alt="" />
                        <h3 className="text-[#545454] leading-[8.902px] font-[700] text-[8.902px]">Bitget</h3>
                        </div> */}
            </div>
            <div className="flex">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start border-t border-[#A6A6A6] px-[10px]">
                <h3 className="text-[15px] font-[500] leading-[120%]">
                  Token Name
                </h3>
              </div>
              <div className=" border-t border-[#A6A6A6] border-l border-r  bg-[#FFF8DC]  justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <h3 className="text-[#000] leading-[120%] font-[700] text-[15px]">
                  $BFX
                </h3>
              </div>
              {/* <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[30%]">
                        <h3 className="text-[#000]  font-[500] text-[12px]">$BGB</h3>
                        </div> */}
            </div>
            <div className="flex">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start border-t border-[#A6A6A6] px-[10px]">
                <h3 className="text-[15px] font-[500] leading-[120%]">
                  Ranked
                </h3>
              </div>
              <div className=" border-t border-[#A6A6A6] border-l border-r bg-[#FFF8DC] justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <h3 className="text-[#000] leading-[120%] font-[700] text-[15px]">
                  -
                </h3>
              </div>
              {/* <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[30%]">
                        <h3 className="text-[#000]  font-[500] text-[12px]">#24</h3>
                        </div> */}
            </div>
            <div className="flex">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start border-t border-[#A6A6A6] px-[10px]">
                <h3 className="text-[15px] font-[500] leading-[120%]">
                  Marketcap
                </h3>
              </div>
              <div className=" border-t border-[#A6A6A6] border-l border-r bg-[#FFF8DC] justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <h3 className="text-[#000] leading-[120%] font-[700] text-[15px]">
                  -
                </h3>
              </div>
              {/* <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[30%]">
                        <h3 className="text-[#000]  font-[500] text-[12px]">$12.26 Billion</h3>
                        </div> */}
            </div>
            <div className="flex">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start border-t border-[#A6A6A6] px-[10px]">
                <h3 className="text-[15px] font-[500] leading-[120%]">
                  Trade Crypto
                </h3>
              </div>
              <div className=" border-t border-[#A6A6A6] border-l border-r bg-[#FFF8DC] justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
              {/* <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[30%]">
                        <img src={check1} className="h-[15px] w-[15px]" alt="" />
                        </div> */}
            </div>
            <div className="flex">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start border-t border-[#A6A6A6] px-[10px]">
                <h3 className="text-[15px] font-[500] leading-[120%]">
                  Leverage Trading
                </h3>
              </div>
              <div className=" border-t border-[#A6A6A6] border-l border-r bg-[#FFF8DC] justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
              {/* <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[30%]">
                        <img src={check1} className="h-[15px] w-[15px]" alt="" />
                        </div> */}
            </div>
            <div className="flex">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start border-t border-[#A6A6A6] px-[10px]">
                <h3 className="text-[15px] font-[500] leading-[120%]">
                  Risk Management
                </h3>
              </div>
              <div className=" border-t border-[#A6A6A6] border-l border-r bg-[#FFF8DC] justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
              {/* <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[30%]">
                        <img src={check1} className="h-[15px] w-[15px]" alt="" />
                        </div> */}
            </div>
            <div className="flex">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start border-t border-[#A6A6A6] px-[10px]">
                <h3 className="text-[15px] font-[500] leading-[120%]">Forex</h3>
              </div>
              <div className=" border-t border-[#A6A6A6] border-l border-r bg-[#FFF8DC] justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
              {/* <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[30%]">
                        <img src={check2} className="h-[15px] w-[15px]" alt="" />
                        </div> */}
            </div>
            <div className="flex">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start border-t border-[#A6A6A6] px-[10px]">
                <h3 className="text-[15px] font-[500] leading-[120%]">
                  Commodities
                </h3>
              </div>
              <div className=" border-t border-[#A6A6A6] border-l border-r bg-[#FFF8DC] justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
              {/* <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[30%]">
                        <img src={check2} className="h-[15px] w-[15px]" alt="" />
                        </div> */}
            </div>
            <div className="flex">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start border-t border-[#A6A6A6] px-[10px]">
                <h3 className="text-[15px] font-[500] leading-[120%]">
                  Indices
                </h3>
              </div>
              <div className=" border-t border-[#A6A6A6] border-l border-r bg-[#FFF8DC] justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
              {/* <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[30%]">
                        <img src={check2} className="h-[15px] w-[15px]" alt="" />
                        </div> */}
            </div>
            <div className="flex">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start border-t border-[#A6A6A6] px-[10px]">
                <h3 className="text-[15px] font-[500] leading-[120%]">CFDs</h3>
              </div>
              <div className=" border-t border-[#A6A6A6] border-l border-r bg-[#FFF8DC] justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
              {/* <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[30%]">
                        <img src={check2} className="h-[15px] w-[15px]" alt="" />
                        </div> */}
            </div>
            <div className="flex">
              <div className="w-[70%] py-[14px] h-[49px]  justify-center flex flex-col items-start border-t border-[#A6A6A6] px-[10px]">
                <h3 className="text-[15px] font-[500] leading-[120%]">ETFs</h3>
              </div>
              <div className=" border-t border-[#A6A6A6] border-l border-r bg-[#FFF8DC] justify-center flex flex-col items-center space-y-[6px] w-[30%]">
                <img src={check1} className="h-[15px] w-[15px]" alt="" />
              </div>
              {/* <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[30%]">
                        <img src={check2} className="h-[15px] w-[15px]" alt="" />
                        </div> */}
            </div>
          </div>
          <div className="relative w-[30%]">
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
                  <div className="flex">
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
                  <div className="flex">
                    <div className="justify-center py-[14px] h-[49px] px-[10px] border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%]">
                      <h3 className="text-[#000]  font-[500] text-[12px]">
                        $BGB
                      </h3>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center py-[14px] h-[49px] px-[10px] border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%]">
                      <h3 className="text-[#000]  font-[500] text-[12px]">
                        #24
                      </h3>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center py-[14px] h-[49px] px-[10px] border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%]">
                      <h3 className="text-[#000]  font-[500] text-[12px]">
                        $12.26 Billion
                      </h3>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center py-[14px] h-[49px] px-[10px] border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check1} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center py-[14px] h-[49px] px-[10px] border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check1} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center py-[14px] h-[49px] px-[10px] border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check1} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center py-[14px] h-[49px] px-[10px] border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center py-[14px] h-[49px] px-[10px] border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center py-[14px] h-[49px] px-[10px] border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center py-[14px] h-[49px] px-[10px] border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center py-[14px] h-[49px] px-[10px] border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="flex">
                    <div className="h-[91px]  border-r  border-[#A6A6A6] justify-center flex flex-col items-center space-y-[6px] w-[100%]">
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
                  <div className="flex">
                    <div className=" border-t border-[#A6A6A6] border-r justify-center flex flex-col items-center space-y-[6px] w-[100%] py-[14px] h-[49px] px-[10px]">
                      <h3 className="text-[#000] font-[500] text-[12px]">
                        $HYPE
                      </h3>
                    </div>
                  </div>
                  <div className="flex">
                    <div className=" border-t border-[#A6A6A6] border-r justify-center flex flex-col items-center space-y-[6px] w-[100%] py-[14px] h-[49px] px-[10px]">
                      <h3 className="text-[#000] font-[500] text-[12px]">
                        #27
                      </h3>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="py-[14px] h-[49px] px-[10px] border-t border-[#A6A6A6]  border-r  justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <h3 className="text-[#000]  font-[500] text-[12px]">
                        $8.77 Billion
                      </h3>
                    </div>
                  </div>
                  <div className="flex">
                    <div className=" py-[14px] h-[49px] px-[10px] border-t border-[#A6A6A6] border-r  justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check1} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className=" border-t py-[14px] h-[49px] px-[10px] border-[#A6A6A6] border-r justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check1} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className=" border-t py-[14px] h-[49px] px-[10px] border-[#A6A6A6] border-r justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className=" border-t py-[14px] h-[49px] px-[10px] border-[#A6A6A6] border-r justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className=" border-t py-[14px] h-[49px] px-[10px] border-[#A6A6A6] border-r justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className=" border-t py-[14px] h-[49px] px-[10px] border-[#A6A6A6] border-r justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className=" border-t py-[14px] h-[49px] px-[10px] border-[#A6A6A6] border-r justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className=" border-t py-[14px] h-[49px] px-[10px] border-[#A6A6A6] border-r justify-center flex flex-col items-center space-y-[6px] w-[100%]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="flex">
                    <div className="h-[91px] justify-center flex flex-col items-center space-y-[6px] w-[100%] ">
                      <img
                        className="h-[41.126px] w-[41.126px] object-cover"
                        src={coin4}
                        alt=""
                      />
                      <h3 className="text-[#545454] leading-[8.902px] font-[700] text-[8.902px]">
                        Uniswap{" "}
                      </h3>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <h3 className="text-[#000]  font-[500] text-[12px]">
                        $UNI
                      </h3>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <h3 className="text-[#000]  font-[500] text-[12px]">
                        #28
                      </h3>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <h3 className="text-[#000]  font-[500] text-[12px]">
                        $8.08 Billion
                      </h3>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check1} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="justify-center border-t border-[#A6A6A6] flex flex-col items-center space-y-[6px] w-[100%] h-[49px]">
                      <img src={check2} className="h-[15px] w-[15px]" alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <button className="swiper-button-prev rotate-[180deg] !absolute z-10 !left-[-51%] !top-[102%] transform -translate-y-1/2 !w-[40px] !h-[40px]">
              <img className="w-[37.545px] h-[37.545px]" src={arw} alt="" />
            </button>
            <button className="swiper-button-next  !absolute z-10 !right-[30%] !top-[102%] transform -translate-y-1/2 !w-[40px] !h-[40px]">
              <img className="w-[37.545px] h-[37.545px]" src={arw} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobStandoutSec;
