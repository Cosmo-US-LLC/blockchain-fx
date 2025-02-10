import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import tradimg from "../assets/TraderReviewsSec/framdes.png";
import user from "../assets/TraderReviewsSec/image.png";
import usern from "../assets/TraderReviewsSec/user.png";
import user2 from "../assets/TraderReviewsSec/Image2.png";
import user3 from "../assets/TraderReviewsSec/image3.png";
import user4 from "../assets/TraderReviewsSec/image4.png";
import tick from "../assets/TraderReviewsSec/teenyicons_tick-circle-solid.svg";
import swpbtnl from "../assets/TraderReviewsSec/arwr.svg";
import swpbtnr from "../assets/TraderReviewsSec/arw.svg";

function TraderReviewsSec() {
  return (
    <div className=" bg-[#FAFAFA]">
      <div
        className="pt-[50px] space-y-[35px] max-w-[1200px] w-[100%] mx-auto"
        id="reviews"
      >
        <div className=" relative space-y-[40px] w-[100%]  ">
          <div className="space-y-[30px]">
            <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
              Trader Reviews
            </h3>
          </div>
          <div className="flex justify-between gap-x-[1rem] pl-[0rem] 2xl:pl-[0rem] xl:pl-[0rem] lg:pl-[1rem] md:pl-[2rem] sm:pl-[0rem] pl-[0rem] items-center ml-auto max-w-[1080px]">
            <div className="max-w-[286px] space-y-[30px] w-[100%] pb-5">
              <div className="space-y-[15px]">
                <h4 className="text-[19.3px] bg-[#D9D9D9] text-center font-[400] max-w-[163.5px] py-[10px] mx-auto">
                  4.79 out of 5
                </h4>
                <p className="text-center text-[#7C7C7C] text-[15px] font-[400]">
                  1000+ trader ratings
                </p>
              </div>
              <div className=" w-[100%] space-y-[28px]">
                <div className="flex justify-between space-x-4 items-center">
                  <span className="text-[19.3px] font-[400] w-[30px]">5</span>
                  <div className="h-[14px] w-[205px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                    <div className="bg-[#E5AE00] h-[14px] rounded-[16.955px] w-[86%]"></div>
                  </div>
                  <span className="text-[19.3px] font-[400] w-[50px]">86%</span>
                </div>
                <div className="flex justify-between space-x-4 items-center">
                  <span className="text-[19.3px] font-[400] w-[30px]">4</span>
                  <div className="h-[14px] w-[205px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                    <div className="bg-[#E5AE00] h-[14px] rounded-[16.955px] w-[12%]"></div>
                  </div>
                  <span className="text-[19.3px] font-[400] w-[50px]">8%</span>
                </div>
                <div className="flex justify-between space-x-4 items-center">
                  <span className="text-[19.3px] font-[400] w-[30px]">3</span>
                  <div className="h-[14px] w-[205px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                    <div className="bg-[#E5AE00] h-[14px] rounded-[16.955px] w-[9%]"></div>
                  </div>
                  <span className="text-[19.3px] font-[400] w-[50px]">3%</span>
                </div>
                <div className="flex justify-between space-x-4 items-center">
                  <span className="text-[19.3px] font-[400] w-[30px]">2</span>
                  <div className="h-[14px] w-[205px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                    <div className="bg-[#E5AE00] h-[14px] rounded-[16.955px] w-[8%]"></div>
                  </div>
                  <span className="text-[19.3px] font-[400] w-[50px]">2%</span>
                </div>
                <div className="flex justify-between space-x-4 items-center">
                  <span className="text-[19.3px] font-[400] w-[30px]">1</span>
                  <div className="h-[14px] w-[205px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                    <div className="bg-[#E5AE00] h-[14px] rounded-[100%] w-[6%]"></div>
                  </div>
                  <span className="text-[19.3px] font-[400] w-[50px]">1%</span>
                </div>
              </div>
            </div>

            <div className="w-[100%] relative flex flex-col h-[500px] justify-center overflow-y-hidden overflow-x-auto">
              <div className="relative h-[20px] rounded-[60px] ">
                <img
                  src={tradimg}
                  className="h-[375px] absolute w-[320px] top-[-200%]  !z-[99] "
                  alt=""
                />
                <div className="w-[293px] bg-[#181A20] h-[362px] z-[1] top-[-135%] rounded-t-[40px] left-3 absolute"></div>
              </div>
              <div className="relative pt-[2rem]">
                <div className="max-w-[100px] w-[100%] flex space-x-2 ml-auto">
                  <button className="swiper-button-prev !w-[40px] !h-[40px]  absolute z-10 !left-[80%] !top-[-10%]  ">
                    <img
                      className="w-[50.545px] h-[50.545px] "
                      src={swpbtnl}
                      alt=""
                    />
                  </button>
                  <button className="swiper-button-next !w-[40px] !h-[40px]  absolute z-10 !right-[6%] !top-[-10%] ">
                    <img
                      className="w-[50.545px] h-[50.545px]"
                      src={swpbtnr}
                      alt=""
                    />
                  </button>
                </div>

                <Swiper
                  slidesPerView={2.2}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  modules={[Navigation]}
                  loop={true}
                  className="mySwiper !ml-4 "
                >
                  <SwiperSlide>
                    <div className="py-[35px] relative z-[9]  min-h-[281px] flex flex-col justify-between pl-[35px] pr-[14px]  bg-[#181A20] rounded-[4px] w-[294px] space-y-[30px]">
                      <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                      Finally, a platform that gets it right! I traded CFDs, bought APPLE stocks, sold them for GBY, and grabbed some $PEPE, all within 30 minutes. Highly recommend it for both beginners and pros!
                      </p>
                      <div className="flex items-center space-x-2">
                        <img src={usern} alt="" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                            PrimeNic.eth
                            </h3>
                            <img src={tick} alt="" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[11.6px] font-[600] leading-[140%]">
                          @primenic_eth
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="py-[35px] relative z-[9] min-h-[281px] flex flex-col justify-between pl-[33px] pr-[14px]  bg-[#181A20] rounded-[4px] w-[294px] space-y-[30px]">
                      <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                        BlockchainFX has completely leveled up my trading game.
                        It's super intuitive, lets you access multiple markets
                        simultaneously, and offers lightning-fast transactions.
                        A huge win for crypto!
                      </p>
                      <div className="flex items-center space-x-2">
                        <img src={user} alt="" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                              Blacik.ko
                            </h3>
                            <img src={tick} alt="" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[11.6px] font-[600] leading-[140%]">
                            @blakieko
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="py-[35px] relative z-[9]  min-h-[281px] flex flex-col justify-between pl-[35px] pr-[14px]  bg-[#181A20] rounded-[4px] w-[294px] space-y-[30px]">
                      <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                        That’s exactly what we needed. A trading broker designed
                        to bridge crypto with Forex, ETFs, and stocks, giving
                        you real access to the markets with deep liquidity.
                      </p>
                      <div className="flex items-center space-x-2">
                        <img src={user2} alt="" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                              winny.eth
                            </h3>
                            <img src={tick} alt="" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[11.6px] font-[600] leading-[140%]">
                            @winnyeth
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="py-[35px] relative z-[9]  min-h-[281px] flex flex-col justify-between pl-[35px] pr-[14px]  bg-[#181A20] rounded-[4px] w-[294px] space-y-[30px]">
                      <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                        Trading on 9 different windows and having access to
                        dozens trading analytic tools and risk management is
                        giving me a long-term edge over the competition trading
                        on other platforms.
                      </p>
                      <div className="flex items-center space-x-2">
                        <img src={user3} alt="" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                              Shiny.Mo
                            </h3>
                            <img src={tick} alt="" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[11.6px] font-[600] leading-[140%]">
                            @shinymo
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="py-[35px] relative z-[9] pb-[51px] min-h-[281px] flex flex-col justify-between pl-[35px] pr-[14px]  bg-[#181A20] rounded-[4px] w-[294px] space-y-[30px]">
                      <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                        BlockchainFX gives you endless trading opportunities.
                        This just makes sense since markets are interconnected.
                        Finally there’s no need to waste time switching between
                        brokers.
                      </p>
                      <div className="flex items-center space-x-2">
                        <img src={user4} alt="" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                              Gohan.ox
                            </h3>
                            <img src={tick} alt="" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[11.6px] font-[600] leading-[140%]">
                            @Gohanox
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
    </div>
  );
}

export default TraderReviewsSec;
