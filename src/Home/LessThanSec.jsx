import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import graph from "../assets/LessThanSec/Frame 1410125779 (1).png";
// import ernvet1 from "../assets/EarnOnSec/Ellipse 4.png";
// import ernvet2 from "../assets/EarnOnSec/Ellipse 3.png";
import arw from "../assets/PremiumSec/preawr (1).svg";

import icon1 from "../assets/Gateway/gticons (4).svg";
import icon2 from "../assets/Gateway/gticons (3).svg";
import icon3 from "../assets/Gateway/gticons (2).svg";
import icon4 from "../assets/Gateway/gticons (1).svg";
import cardicon1 from "../assets/Gateway/tblicn (2).svg";
import Iicon from "../assets/Gateway/i.svg";
import cardicon2 from "../assets/Gateway/tblicn (1).svg";
// import ernvet1 from "../assets/EarnOnSec/Ellipse 4.png";
// import ernvet2 from "../assets/EarnOnSec/Ellipse 3.png";

import graphyp from "../assets/HyperGrowth/Graph.png";
import ernvet1 from "../assets/EarnOnSec/Ellipse 4.png";
import ernvet2 from "../assets/EarnOnSec/Ellipse 3.png";

function LessThanSec() {
  const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
      const [showTooltip, setShowTooltip] = useState(false);
    
  
  
   
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.pagination.render();
      swiperRef.current.swiper.pagination.update();
    }
  }, []);
  return (
    <div className="pt-[50px] pb-[50px] bg-[#020B10]">
     
      <div className="relative max-w-[1200px] mx-auto">
          <div className="w-[40%] flex justify-end items-end space-x-2">
                    <button className="swiper-button-prev-slide-swp w-[42.545px] h-[42.545px] rounded-[50px] a absolute z-[99] left-10 top-[50%]">
                     {"<"}
                    </button>
                    <button className="swiper-button-next-slide-swp rounded-[50px] right-10 top-[50%] absolute z-[99]  w-[42.545px] h-[42.545px]">
                    {">"}
                    </button>
                  </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={false}
              navigation={{
                nextEl: ".swiper-button-next-swp",
                prevEl: ".swiper-button-prev-swp",
                enabled: true,
              }}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-bullet bg-yellow-800 p-1 rounded-full "></span>`;
                },
              }}      
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
                <SwiperSlide>
                <div className="max-w-[1200px] py-[50px] relative overflow-hidden space-y-[50px] rounded-[16px] w-[100%] mx-auto "
     style={{
      background: "#030F16",
      borderColor: "rgba(230, 175, 3, 0.12)",
    }}
      >
        <div className="space-y-[18px] relative z-[99]">
          <h3 className="text-[40px] font-[700] text-center leading-[58px] text-[#fff] tracking-[-1px]">
          Bridging Crypto and Finance
          </h3>
          <p className="text-[18px] font-[400] w-[750px] mx-auto text-center leading-[130%] text-[#fff] tracking-[-0.32px]">
          Crypto makes up only 0.87% of global trading volume in 2024, averaging $84.3 billion daily. <br /> Meanwhile, the Forex market alone handles $7.5 trillion per day. This gap presents a major <br /> opportunity for BFX to connect crypto users with the world’s largest financial markets.
          </p>
        </div>
        <div className="space-y-[60px] relative z-[99]">
          {/* <h4 className="text-[20px] space-y-[50px] font-[700] text-center leading-[130%] text-[#181A20] tracking-[-1px]">
            Average Daily Trading Volume in 2024
          </h4> */}
          <div className="relative">
            <div className="flex justify-center">
              <img src={graph} alt="graph"  loading="lazy" className="h-[321px] w-[321px]" />
            </div>
            <p className="text-[#fff] -top-3 left-[28%] absolute text-[15px] font-[700] tracking-[-0.787px]">
              Bonds: $1.1 Trillion (11.42%)
            </p>
            <p className="text-[#fff] absolute top-[8%] left-[20%] text-[15px] font-[700] tracking-[-0.787px]">
              U.S. Stocks: $700 Billion (7.27%)
            </p>
            <p className="text-[#fff] absolute top-[21%] left-[17%] text-[15px] font-[700] tracking-[-0.787px]">
              Commodities: $250 Billion (2.59%)
            </p>
            <p className="text-[#fff] absolute top-[35%] left-[19%]  text-[15px] font-[700] tracking-[-0.787px]">
              Crypto: $89 Billion (0.87%)
            </p>
            <p className="text-[#fff] absolute bottom-[5%] right-[23%]  text-[15px] font-[700] tracking-[-0.787px]">
              Forex: $7.5 Trillion (77.85%)
            </p>
          </div>
          <div className="max-w-[887px] pt-[0px] flex justify-between items-center mx-auto w-[100%]">
            <div className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#E9AD2F] rounded-[4px]"></div>
              <p className="text-[#fff] text-[18px] font-[700] tracking-[-1px] ">
                Forex
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#DCDCDC] rounded-[4px]"></div>
              <p className="text-[#fff] text-[18px] font-[700] tracking-[-1px] ">
                Bonds
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#B6B6B6] rounded-[4px]"></div>
              <p className="text-[#fff] text-[18px] font-[700] tracking-[-1px] ">
                US Stock
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#7DBB6C] rounded-[4px]"></div>
              <p className="text-[#fff] text-[18px] font-[700] tracking-[-1px] ">
                Commodities
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#A36E00] rounded-[4px]"></div>
              <p className="text-[#fff] text-[18px] font-[700] tracking-[-1px] ">
                Crypto
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-[-8%] left-[-5%]">
                    <img src={ernvet2} className=" " alt="" />
                  </div>
                  <div className="absolute bottom-[0%] right-[0%]">
                    <img src={ernvet1} className="" alt="" />
                  </div>
      </div>
                </SwiperSlide>
              <SwiperSlide>
                  <div className="max-w-[1200px] rounded-[16px] pt-[50px] pb-[70px] relative overflow-hidden space-y-[40px] w-[100%] mx-auto "
                       style={{
                            background: "#030F16",
                            borderColor: "rgba(230, 175, 3, 0.12)",
                          }}
                      >
                        <div className="space-y-[14px]">
                          <h3 className="text-[40px] capitalize font-[700] text-center leading-[114%] text-[#fff] tracking-[-1px]">
                            The Gateway to Global Markets
                          </h3>
                          <p className="text-[18px] font-[400] max-w-[890px] mx-auto w-[100%] text-center leading-[130%] text-[#fff] tracking-[-0.32px]">
                          Launching a new trading platform takes a lot of time and resources. On the other hand, <br /> buying $BFX takes seconds and lets you earn every time someone trades.
                          </p>
                        </div>
                        <div className="max-w-[1025px] relative z-[99] mx-auto flex justify-between itees-center ">
                          <div className="max-w-[267px] w-[100%]">
                            <ul className="max-w-[267px] w-[100%]">
                              <li className="h-[83px]"></li>
                              <li className="flex space-x-3 px-[18px] items-center h-[65px]">
                                <div className="w-[65px]">
                                  <img src={icon1} alt="" className="w-[37px]" />
                                </div>
                                <span className="text-[#B5B5B5] text-[20px] font-[700] tracking-[-1px]">
                                  Costs
                                </span>
                              </li>
                              <li className="flex space-x-3 px-[18px] items-center h-[65px] border-t border-[#C2C2C2]">
                                <div className="w-[65px]">
                                  <img src={icon2} alt="" className="w-[36px]" />
                                </div>
                                <span className="text-[#B5B5B5] text-[20px] font-[700] tracking-[-1px]">
                                  Time{" "}
                                </span>
                              </li>
                              <li className="flex space-x-3 px-[18px] items-center h-[65px] border-t border-[#C2C2C2]">
                                <div className="w-[65px]">
                                  <img src={icon3} alt="" className="w-[36px]" />
                                </div>
                                <span className="text-[#B5B5B5] text-[20px] font-[700] tracking-[-1px]">
                                  Team
                                </span>
                              </li>
                              <li className="flex space-x-3 px-[18px] items-center h-[65px] border-t border-[#C2C2C2]">
                                <div className="w-[65px]">
                                  <img src={icon4} alt="" className="w-[39px]" />
                                </div>
                                <span className="text-[#B5B5B5] text-[20px] font-[700] tracking-[-1px]">
                                  Work Scope
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="max-w-[355px] rounded-[11px] py-[23px] px-[16px] w-[100%] "
                            style={{
                              background: "#030F16",
                              border: "1px solid #2B2B2B"
                            }}
                          >
                            <div className="flex justify-start pl-[19px] space-x-4 items-center">
                              <img src={cardicon1} alt="" className="w-[56.7px] h-[56.7px]" />
                              <h4 className="text-[#CBCBCB] text-[20.862px] font-[700] tacking-[-1px] leading-[100%]">
                                New Trading Platform
                              </h4>
                            </div>
                            <ul>
                              <li className="py-[20px] flex items-center space-x-2 border-b border-[#C2C2C2]">
                                <span className="text-[#fff] text-[16px] font-[500] ">
                                  Up to $2 Million
                                </span>
                                <div
                                  className="relative"
                                  onMouseEnter={() => setShowTooltip(true)}
                                  onMouseLeave={() => setShowTooltip(false)}
                                >
                                  <img className="w-[11.7px]" src={Iicon} alt="Info Icon" />
                                  {showTooltip && (
                                    <div className="absolute left-0 top-6 bg-[#808080] w-[210px] text-center leading-[110%] text-[#ffff] text-[10px] font-[400] rounded-md p-[6px] shadow-lg">
                                      This is the budget needed only to launch the platform in certain jurisdictions, excluding staff and marketing.
                                    </div>
                                  )}
                                </div>
                              </li>
                              <li className="text-[#fff] text-[16px] font-[500] flex items-center  h-[65px] border-b border-[#C2C2C2]">
                                Up to 3 years
                              </li>
                              <li className="text-[#fff] text-[16px] font-[500] flex items-center h-[65px] border-b border-[#C2C2C2]">
                                Experienced multilingual team working in shifts, 24/7, 365 days
                                a year.
                              </li>
                              <li className="text-[#fff] text-[16px] font-[500] py-[18px] tracking-[-0.8px]">
                                Capital Requirements, Marketing & Branding, Liquidity Providers,
                                Risk Management Team, Customer Support, Technology
                                Infrastructure, Partnerships, Development, Hiring and Managing
                                Staff, and more.
                              </li>
                            </ul>
                          </div>
                          <div
                            className="max-w-[355px] rounded-[11px] py-[23px] px-[16px] w-[100%] "
                            style={{
                              background: "#030F16",
                              border: "1px solid #2B2B2B"
                            }}
                          >
                            <div className="flex justify-start space-x-4 items-center">
                              <img src={cardicon2} alt="" className="w-[56.7px] h-[56.7px]" />
                              <h4 className="text-[#CBCBCB] text-[20.862px] font-[700] tacking-[-1px] leading-[100%]">
                                BlockchainFX
                              </h4>
                            </div>
                            <ul>
                              <li className="text-[#fff] text-[16px]  h-[61.5px] font-[500] py-[27px] h-[66px] border-b border-[#C2C2C2]">
                                Up to you
                              </li>
                              <li className="text-[#fff] text-[16px] h-[65.5px] font-[500] py-[27px] h-[65px] border-b border-[#C2C2C2]">
                                Buy $BFX in 2 clicks
                              </li>
                              <li className="text-[#fff] text-[16px]  font-[500] py-[23px] h-[65px] border-b border-[#C2C2C2]">
                                No Team required
                              </li>
                              <li className="text-[#fff] text-[16px]  font-[500] py-[27px]">
                                No Work Required
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="absolute top-[-8%] left-[-5%]">
                                            <img src={ernvet2} className=" " alt="" />
                                          </div>
                                          <div className="absolute bottom-[0%] right-[0%]">
                                            <img src={ernvet1} className="" alt="" />
                                          </div>
                      </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="max-w-[1200px] relative overflow-hidden bg-[#030F16] py-[50px] rounded-[16px] space-y-[35px] w-[100%] mx-auto ">
                        <div className="space-y-[14px]">
                          <h3 className="text-[40px] font-[700] text-center leading-[114%] text-[#fff] tracking-[-1px]">
                            Designed for Exponential Growth
                          </h3>
                          <p className="text-[18px] font-[400] max-w-[890px] mx-auto w-[100%] text-center leading-[21px] text-[#fff] tracking-[-0.32px]">
                            BlockchainFX is a community-powered trading platform that rewards
                            BFX holders daily. As the platform grows, so does the token —
                            creating a powerful cycle of growth and engagement. Studies* show
                            that incentivized communities can grow significantly faster than
                            others, and BFX is designed to maximize that potential.
                          </p>
                        </div>
                        <div
                          className="space-y-[53px] bg-[#030F16] rounded-[10.672px] p-[53.32px] w-[667px] h-[413px] mx-auto"
                          style={{
                            border: "1px solid #2B2B2B",
                            // box-shadow: 0px 5.336px 26.68px 0px rgba(169, 169, 169, 0.30);
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-[#fff] font-[500] text-[19.7px]">
                              Growth Forecasting
                            </h4>
                            <div className="flex space-x-3 items-center">
                              <hr className="h-[0px] w-[20px] border-[2px] border-[#E5AE00]" />
                              <p className="text-[13.659px] text-[#949494] font-[500]">
                                BlockchainFX
                              </p>
                            </div>
                            <div className="flex space-x-3 items-center">
                              <hr className="h-[0px] w-[20px] border-[2px] border-[#CE2A96]" />
                              <p className="text-[13.659px] text-[#949494] font-[500]">
                                Regular Trading Platform
                              </p>
                            </div>
                          </div>
                          <div>
                            <img src={graphyp} loading="lazy" alt="Trading" className="" />
                          </div>
                        </div>
                        <p className="text-[18px] font-[400] max-w-[908px] mx-auto w-[100%] text-center leading-[21px] text-[#fff] tracking-[-0.32px]">
                          (*Source: Harvard Business Review, When Community Becomes Your
                          Competitive Advantage, 2020)
                        </p>
                        {/* <div className="flex justify-center items-center">
                          <button
                            onClick={handleScroll}
                            className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[152px] w-[100%] h-[39px]"
                          >
                            Buy $BFX
                          </button>
                        </div> */}
                        <div className="absolute top-[-8%] left-[-5%]">
                          <img src={ernvet2} className=" " alt="" />
                        </div>
                        <div className="absolute bottom-[0%] right-[0%]">
                          <img src={ernvet1} className="" alt="" />
                        </div>
                      </div>
              </SwiperSlide>
            </Swiper>
            <div className="custom-pagination flex justify-center p-2 gap-3 mt-4"></div>
          </div>
    </div>
  );
}

export default LessThanSec;
