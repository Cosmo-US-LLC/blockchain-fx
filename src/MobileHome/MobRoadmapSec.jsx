import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import swpbtn from "../assets/PremiumSec/arw.svg";

import vector1 from "../assets/Roadmap/vector (11).png";
import vector2 from "../assets/Roadmap/vector (10).png";
import vector3 from "../assets/Roadmap/vector (9).png";
import vector4 from "../assets/Roadmap/vector (8).png";
import vector5 from "../assets/Roadmap/vector (7).png";
import vector6 from "../assets/Roadmap/vector (6).png";
import vector7 from "../assets/Roadmap/vector (5).png";
import vector8 from "../assets/Roadmap/vector (4).png";
import vector9 from "../assets/Roadmap/vector (3).png";
import vector10 from "../assets/Roadmap/vector (2).png";
import vector11 from "../assets/Roadmap/vector (1).png";

function MobRoadmapSec() {
  const roadmap = [
    {
      id:1,
      title: "Preperation",
      status: "Complete",
      points: [
        "Idea + Concept",
        "Raise Seed Funds",
        "Onboard Team & Advisors",
        "Trading Platform Beta Preparation",
      ],
    },
    {
      id:2,
      title: "Execution",
      status: "Complete",
      points: [
        "Website, Tokenomics etc.",
        "Create $BFX Token",
        "Launch $BFX Pre-Sale",
        "CertiK Token Audit",
      ],
    },
    {
      id:3,
      title: "Launch",
      status: "On-going",
      points: [
        "Launch an Affiliate Program",
        "Sell Out the Pre-Sale",
        "Launch $BFX on Uniswap and CEX",
        "Achieving 10,000 BFX Holders",
      ],
    },
    {
      id:4,
      title: "Performance",
      points: [
        "Cashback System for Traders",
        "Public Chats for Trading Platform",
        "Add Copy Trading Feature",
        "Launch iOS and Android App",
      ],
    },
    {
      id:5,
      title: "Expansion",
      points: [
        "Multiple CEX Listing",
        "Reach $100M Daily Trading Volume",
        "Achieving 100,000 BFX Holders",
        "Add Leaderboards & VIP accounts",
      ],
    },
    {
      id:2,
      title: "Global Reach",
      points: [
        "US License",
        "Global Marketing Campaigns",
        "Achieving 1,000,000 BFX Holders",
        "Major Partnerships",
      ],
    },
  ];

  return (
    <div className="pt-[24px] pb-[24px] bg-black" id="roadmap">
      <div className=" relative space-y-[40px] w-[90%] mx-auto ">
        <div className="space-y-5">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#FFF] tracking-[-1px]">
            Roadmap
          </h3>
          <p className="text-[15px] font-[400] max-w-[365px] text-center mx-auto w-[100%] leading-[28px] text-[#8497A2] tracking-[-0.32px]">
            From Fintech Startup to Global Market Leader
          </p>
        </div>

        <div className="relative space-y-3">
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
            {roadmap?.map((step, id) => (
              <SwiperSlide key={id}>
                <div className="">
                  <div className="bg-[#030F16] border border-white border-opacity-10 max-w-[340px] mx-auto rounded-[8px] rounded-b-none pl-[30px] pr-[15px] py-[20px] w-[100%]">
                    <div className="flex justify-between items-center"
                >
                 <h2 className="text-[#fff] text-[24px] leading-[144.529%] font-[600] flex justify-start items-center gap-3">
                      {step?.title}
                      {id < 2 && (
                        <div className="w-5">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.9974 2.47559C5.40573 2.47559 1.66406 6.21725 1.66406 10.8089C1.66406 15.4006 5.40573 19.1423 9.9974 19.1423C14.5891 19.1423 18.3307 15.4006 18.3307 10.8089C18.3307 6.21725 14.5891 2.47559 9.9974 2.47559ZM13.9807 8.89225L9.25573 13.6173C9.13906 13.7339 8.98073 13.8006 8.81406 13.8006C8.6474 13.8006 8.48906 13.7339 8.3724 13.6173L6.01406 11.2589C5.7724 11.0173 5.7724 10.6173 6.01406 10.3756C6.25573 10.1339 6.65573 10.1339 6.8974 10.3756L8.81406 12.2923L13.0974 8.00892C13.3391 7.76725 13.7391 7.76725 13.9807 8.00892C14.2224 8.25059 14.2224 8.64225 13.9807 8.89225Z"
                            fill="#E5AF02"
                          />
                        </svg>
                      </div>
                      )}
                    </h2>
                  {step.status && (
                    <p
                      style={{
                        background:
                          step.status === "Complete"
                            ? "rgba(0, 124, 45, 0.16)"
                            : step.status === "On-going"
                            ? "rgba(255, 190, 82, 0.13)"
                            : "transparent",
                      }}
                      className={`py-[3px] rounded-[5px] px-[8px] text-[14px] font-[500] ${
                        step.status === "Complete"
                          ? "text-[#01BA48]"
                          : step.status === "On-going"
                          ? "text-[#C47E0A]"
                          : ""
                      }`}
                    >
                      {step.status}
                    </p>
                  )}
                </div>
                  </div>
                  <div className="bg-[#030F16] border border-white border-opacity-10 max-w-[340px] mx-auto border-t-0 rounded-[8px] rounded-t-none pl-[30px] pr-[15px] py-[20px] space-y-6 w-[100%]">
                    {step?.points?.map((point, idx) => (
                      <p
                      key={`point-${id}-${idx}`}
                        className="flex items-start justify-start text-left gap-3 text-[#D6D6D6] text-[16px] leading-[144.529%] font-[400] -tracking-[0.64px]"
                      >
                           {id < 2 && (
                        <div className="w-5">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.9974 2.47559C5.40573 2.47559 1.66406 6.21725 1.66406 10.8089C1.66406 15.4006 5.40573 19.1423 9.9974 19.1423C14.5891 19.1423 18.3307 15.4006 18.3307 10.8089C18.3307 6.21725 14.5891 2.47559 9.9974 2.47559ZM13.9807 8.89225L9.25573 13.6173C9.13906 13.7339 8.98073 13.8006 8.81406 13.8006C8.6474 13.8006 8.48906 13.7339 8.3724 13.6173L6.01406 11.2589C5.7724 11.0173 5.7724 10.6173 6.01406 10.3756C6.25573 10.1339 6.65573 10.1339 6.8974 10.3756L8.81406 12.2923L13.0974 8.00892C13.3391 7.76725 13.7391 7.76725 13.9807 8.00892C14.2224 8.25059 14.2224 8.64225 13.9807 8.89225Z"
                            fill="#E5AF02"
                          />
                        </svg>
                      </div>
                      )}
                       
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev-press rotate-[180deg]  absolute z-10 -left-[5%] !top-[53%] transform -translate-y-1/2">
            <img className="w-[43px] h-[43px]  rounded-full bg-black" src={swpbtn} alt=""/>
          </button>
          <button className="swiper-button-next-press  absolute z-10 -right-[5%] !top-[53%] transform -translate-y-1/2">
            <img className="w-[43px] h-[43px] rounded-full bg-black" src={swpbtn} alt=""/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobRoadmapSec;
