import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


import tradimg from "../assets/TraderReviewsSec/tradimg.png";
import user from "../assets/TraderReviewsSec/image.png";
import user2 from "../assets/TraderReviewsSec/Image2.png";
import user3 from "../assets/TraderReviewsSec/image3.png";
import user4 from "../assets/TraderReviewsSec/image4.png";
import tick from "../assets/TraderReviewsSec/teenyicons_tick-circle-solid.svg";
import swpbtnl from "../assets/TraderReviewsSec/arwr.svg";
import swpbtnr from "../assets/TraderReviewsSec/arw.svg";

function TraderReviewsSec() {
  return (
    <div className="pt-[77px]  max-w-[1440px] mx-auto space-y-[35px] bg-[#FAFAFA]">
      <div className=" relative space-y-[40px] w-[100%]  ">
        <div className="space-y-[30px]">
          <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          Trader Reviews
          </h3>
        </div>
        <div className="flex justify-between pl-[0rem] 2xl:pl-[0rem] xl:pl-[0rem] lg:pl-[1rem] md:pl-[2rem] sm:pl-[0rem] pl-[0rem] items-end ml-auto max-w-[1330px]">
         <div className="max-w-[400.003px] space-y-[30px] w-[100%]">
            <div className="space-y-[15px]">
                <h4 className="text-[25px] bg-[#D9D9D9] text-center font-[400] max-w-[211px] py-[10px] mx-auto">4.79 out of 5</h4>
                <p className="text-center text-[#7C7C7C] text-[20px] font-[400]">1000+ trader ratings</p>
            </div>
            <div className=" w-[100%] space-y-[48px]">
                <div className="flex justify-between space-x-4 items-center">
                    <span className="text-[25px] font-[400] w-[30px]">5</span>
                    <div className="h-[17px] w-[350px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                        <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[79%]"></div>
                    </div>
                    <span className="text-[25px] font-[400] w-[50px]">79%</span>
                </div>
                <div className="flex justify-between space-x-4 items-center">
                    <span className="text-[25px] font-[400] w-[30px]">4</span>
                    <div className="h-[17px] w-[350px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                        <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[30%]"></div>
                    </div>
                    <span className="text-[25px] font-[400] w-[50px]">30%</span>
                </div>
                <div className="flex justify-between space-x-4 items-center">
                    <span className="text-[25px] font-[400] w-[30px]">3</span>
                    <div className="h-[17px] w-[350px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                        <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[13%]"></div>
                    </div>
                    <span className="text-[25px] font-[400] w-[50px]">13%</span>
                </div>
                <div className="flex justify-between space-x-4 items-center">
                    <span className="text-[25px] font-[400] w-[30px]">2</span>
                    <div className="h-[17px] w-[350px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                        <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[6%]"></div>
                    </div>
                    <span className="text-[25px] font-[400] w-[50px]">6%</span>
                </div>
                <div className="flex justify-between space-x-4 items-center">
                    <span className="text-[25px] font-[400] w-[30px]">1</span>
                    <div className="h-[17px] w-[350px] w-[100%] bg-[#D9D9D9] rounded-[16.955px]">
                        <div className="bg-[#E5AE00] h-[17px] rounded-[16.955px] w-[4%]"></div>
                    </div>
                    <span className="text-[25px] font-[400] w-[50px]">2%</span>
                </div>
            </div>
         </div>
         <div className="max-w-[456px] w-[100%]">
            <img src={tradimg} alt="" />
         </div>
         <div className="max-w-[476px] w-[100%]">
         <div className="relative">
            <div className="max-w-[300px] flex space-x-3 mx-auto">
            <button className="swiper-button-prev !w-[40px] !h-[40px]  absolute z-10 !left-[48%] !top-[-13%]  ">
              <img className="w-[50.545px] h-[50.545px] " src={swpbtnl} alt="" />
            </button>
            <button className="swiper-button-next !w-[40px] !h-[40px]  absolute z-10 !right-[32%] !top-[-13%] ">
              <img className="w-[50.545px] h-[50.545px]" src={swpbtnr} alt="" />
            </button>
            </div>
          <Swiper
              slidesPerView={1.3}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              style={{
                boxShadow:"0px 24px 48px 0px rgba(0, 0, 0, 0.08)",
                background:"#FAFAFA"
            }}
              modules={[Navigation]}
              loop={false}
              className="mySwiper"
            >
                <SwiperSlide>
                <div className="border py-[45px] pb-[51px] min-h-[338px] flex flex-col justify-between pl-[40px] pr-[16px] border-[#9D9D9D] bg-[#181A20] rounded-[4px] w-[353.45px] space-y-[30px]"
               
                >
                    <p className="text-[16px] font-[400] leading-[175%] text-[#fff]">BlockchainFX has completely leveled up my trading game. It's super intuitive, lets you access multiple markets simultaneously, and offers lightning-fast transactions. A huge win for crypto!</p>
                    <div className="flex items-center space-x-2">
                        <img src={user} alt="" />
                        <div>
                            <div className="flex items-center space-x-2">
                            <h3 className="text-[18px] text-[#fff] font-[600] leading-[140%]">Blacik.ko</h3>
                            <img src={tick} alt="" />
                            </div>
                            <h4 className="text-[#6A6A6A] text-[14px] font-[600] leading-[140%]">@blakieko</h4>
                        </div>
                    </div>
                   
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="border py-[45px] pb-[51px] min-h-[338px] flex flex-col justify-between pl-[40px] pr-[16px] border-[#9D9D9D] bg-[#181A20] rounded-[4px] w-[353.45px] space-y-[30px]"
               
                >
                    <p className="text-[16px] font-[400] leading-[175%] text-[#fff]">That’s exactly what we needed. A trading broker designed to bridge crypto with Forex, ETFs, and stocks, giving you real access to the markets with deep liquidity.</p>
                    <div className="flex items-center space-x-2">
                        <img src={user2} alt="" />
                        <div>
                            <div className="flex items-center space-x-2">
                            <h3 className="text-[18px] text-[#fff] font-[600] leading-[140%]">winny.eth</h3>
                            <img src={tick} alt="" />
                            </div>
                            <h4 className="text-[#6A6A6A] text-[14px] font-[600] leading-[140%]">@winnyeth</h4>
                        </div>
                    </div>
                   
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="border py-[45px] pb-[51px] min-h-[338px] flex flex-col justify-between pl-[40px] pr-[16px] border-[#9D9D9D] bg-[#181A20] rounded-[4px] w-[353.45px] space-y-[30px]"
               
                >
                    <p className="text-[16px] font-[400] leading-[175%] text-[#fff]">Trading on 9 different windows and having access to dozens trading analytic tools and risk management is giving me a long-term edge over the competition trading on other platforms.</p>
                    <div className="flex items-center space-x-2">
                        <img src={user3} alt="" />
                        <div>
                            <div className="flex items-center space-x-2">
                            <h3 className="text-[18px] text-[#fff] font-[600] leading-[140%]">Shiny.Mo</h3>
                            <img src={tick} alt="" />
                            </div>
                            <h4 className="text-[#6A6A6A] text-[14px] font-[600] leading-[140%]">@shinymo</h4>
                        </div>
                    </div>
                   
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="border py-[45px] pb-[51px] min-h-[338px] flex flex-col justify-between pl-[40px] pr-[16px] border-[#9D9D9D] bg-[#181A20] rounded-[4px] w-[353.45px] space-y-[30px]"
               
                >
                    <p className="text-[16px] font-[400] leading-[175%] text-[#fff]">BlockchainFX gives you endless trading opportunities. This just makes sense since markets are interconnected. Finally there’s no need to waste time switching between brokers.</p>
                    <div className="flex items-center space-x-2">
                        <img src={user4} alt="" />
                        <div>
                            <div className="flex items-center space-x-2">
                            <h3 className="text-[18px] text-[#fff] font-[600] leading-[140%]">Gohan.ox</h3>
                            <img src={tick} alt="" />
                            </div>
                            <h4 className="text-[#6A6A6A] text-[14px] font-[600] leading-[140%]">@Gohanox</h4>
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

export default TraderReviewsSec;
