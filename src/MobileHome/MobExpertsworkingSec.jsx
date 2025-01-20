import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import swpbtn from "../assets/PremiumSec/arw.svg";

import rwdimg1 from "../assets/OurAwardSec/rwdimg (1).png";
import rwdimg2 from "../assets/OurAwardSec/rwdimg (2).png";
import rwdimg3 from "../assets/OurAwardSec/rwdimg (3).png";

const cardData = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

function MobExpertsworkingSec() {
  return (
    <div
      className="pt-[24px]  bg-[#FAFAFA] pb-[24px]"
      style={{
        background: "rgba(250, 250, 250, 0.98)",
      }}
    >
      <div className="relative space-y-[15px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h4 className="text-[20px] font-[400] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            25 Years of Experience
          </h4>
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          Experts Working  <br /> On BlockchainFX
          </h3>
        </div>
        <div className="flex justify-between"></div>
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
            {cardData.map(() => (
              <SwiperSlide>
                <div
                  className="max-w-[292px] mx-auto rounded-[8px] min-h-[406px] p-[18px] w-[100%] border border-[#9D9D9D]"
                  style={{
                    background: "rgba(241, 241, 241, 0.36)",
                    backdropFilter: "blur(31.5px)",
                  }}
                >
                  <div className="cardimg flex justify-end flex-col min-h-[370px]">
                    <div className="p-[20px]">
                      <h4 className="text-[22.845px] text-[#FFF] font-[600]">
                        Name Goes Here
                      </h4>
                      <p className="text-[14.621px] text-[#FFF] font-[400] tracking-[-0.32px]">
                        Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
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
  );
}

export default MobExpertsworkingSec;
