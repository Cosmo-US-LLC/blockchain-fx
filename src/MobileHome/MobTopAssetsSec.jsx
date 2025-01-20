import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import cardicn1 from "../assets/TopAssets/cardicns (4).svg";
import cardicn2 from "../assets/TopAssets/cardicns (3).svg";
import cardicn3 from "../assets/TopAssets/cardicns (2).svg";
import cardicn4 from "../assets/TopAssets/cardicns (1).svg";
import arw1 from "../assets/TopAssets/arw (1).png";
import arw2 from "../assets/TopAssets/arw (2).png";
import swpbtn from "../assets/PremiumSec/arw.svg";
import graph1 from "../assets/TopAssets/graph (4).png";
import graph2 from "../assets/TopAssets/graph (3).png";
import graph3 from "../assets/TopAssets/graph (2).png";
import graph4 from "../assets/TopAssets/graph (1).png";



function MobTopAssetsSec() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="pt-[24px] space-y-[20px] pb-[24px] bg-[#FAFAFA] ">
    <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] leading-[-1px]">
    Top Assets
          </h3>
          <p className="text-[15px] font-[400]  leading-[130%] text-[#181A20] tracking-[-0.32px] text-center">Get a chance to trade the world's most <br /> popular financial assets.</p>
     <div className="flex justify-between items-center w-[90%] mx-auto ">
        <div className="w-[100%] space-y-[32px]">
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
                <div className="border pt-[26px] pb-[51px] px-[26px] border-[#9D9D9D] bg-[#fff] rounded-[8px] w-[284px] mx-auto space-y-[13px]">
                    <div className="flex items-center flex-col space-y-[10px]">
                        <img src={cardicn1} alt="" />
                        <div className="flex items-center space-x-4">
                            <h3 className="text-[#000] text-[18px] font-[600]">USD/EUR</h3>
                            <img className="w-[12px] h-[12px] rotate-[182deg]" src={arw2} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h4 className="text-[#687086] pr-[3rem] pb-[10px] text-center text-[16.995px] font-[400]">$0.9648 <span className="text-[#1DBA78]">+1.51%</span></h4>
                        <img src={graph1} className="h-[59.483px]" alt="" />
                    </div>
                    <div className="pt-2">
                        <h3 className="text-[30px] text-center font-[400] text-[#000]">1:20</h3>
                        <h4 className="text-[18px] text-[#000] text-center font-[400] ">Leverages up to</h4>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="border pt-[26px] pb-[51px] px-[26px] border-[#9D9D9D] bg-[#fff] rounded-[8px] w-[284px] mx-auto space-y-[13px]">
                    <div className="flex items-center flex-col space-y-[10px]">
                        <img src={cardicn2} alt="" />
                        <div className="flex items-center space-x-4">
                            <h3 className="text-[#000] text-[18px] font-[600]">Apple Inc.</h3>
                            <img className="w-[12px] h-[12px] rotate-[180deg]" src={arw2} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h4 className="text-[#687086] pr-[3rem] pb-[10px] text-center text-[16.995px] font-[400]">$255.23 <span className="text-[#1DBA78]">+0.32%</span></h4>
                        <img src={graph2} className="h-[59.483px]" alt="" />
                    </div>
                    <div className="pt-2">
                        <h3 className="text-[30px] text-center font-[400] text-[#000]">1:20</h3>
                        <h4 className="text-[18px] text-[#000] text-center font-[400] ">Leverages up to</h4>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="border pt-[26px] pb-[51px] px-[26px] border-[#9D9D9D] bg-[#fff] rounded-[8px] w-[284px] mx-auto space-y-[13px]">
                    <div className="flex items-center flex-col space-y-[10px]">
                        <img src={cardicn3} alt="" />
                        <div className="flex items-center space-x-4">
                            <h3 className="text-[#000] text-[18px] font-[600]">Gold</h3>
                            <img className="w-[10.622px] h-[10px] -rotate-[180deg]" src={arw1} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h4 className="text-[#687086] pr-[3rem] pb-[10px] text-center text-[16.995px] font-[400]">$2,618.83 <span className="text-[#FF0900]">-0.49%</span></h4>
                        <img src={graph3} className="h-[59.483px]" alt="" />
                    </div>
                    <div className="pt-2">
                        <h3 className="text-[30px] text-center font-[400] text-[#000]">1:20</h3>
                        <h4 className="text-[18px] text-[#000] text-center font-[400] ">Leverages up to</h4>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="border pt-[26px] pb-[51px] px-[26px] border-[#9D9D9D] bg-[#fff] rounded-[8px] w-[284px] mx-auto space-y-[13px]">
                    <div className="flex items-center flex-col space-y-[10px]">
                        <img src={cardicn4} alt="" />
                        <div className="flex items-center space-x-4">
                            <h3 className="text-[#000] text-[18px] font-[600]">Microsoft</h3>
                            <img className="w-[10.622px] h-[10px] -rotate-[182deg]" src={arw1} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h4 className="text-[#687086] pr-[3rem] pb-[10px] text-center text-[16.995px] font-[400]">$2,618.83 <span className="text-[#FF0900]">-0.49%</span></h4>
                        <img src={graph4} className="h-[59.483px]" alt="" />
                    </div>
                    <div className="pt-2">
                        <h3 className="text-[30px] text-center font-[400] text-[#000]">1:20</h3>
                        <h4 className="text-[18px] text-[#000] text-center font-[400] ">Leverages up to</h4>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
            <button className="swiper-button-prev rotate-[180deg]  absolute z-10 !left-[0%] top-[50%] transform -translate-y-1/2">
              <img className="w-[50.545px] h-[30.545px] " src={swpbtn} alt="" />
            </button>
            <button className="swiper-button-next  absolute z-10 !right-[0%] top-[50%] transform -translate-y-1/2">
              <img className="w-[50.545px] h-[30.545px]" src={swpbtn} alt="" />
            </button>
          </div>
        </div>
     </div>
    </div>
  );
}

export default MobTopAssetsSec;
