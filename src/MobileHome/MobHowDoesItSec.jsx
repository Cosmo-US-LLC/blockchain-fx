import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import arw from "../assets/PremiumSec/arw.svg";

import cardicn1 from "../assets/HowDoesItSec/icns (1).svg";
import cardicn2 from "../assets/HowDoesItSec/icns (2).svg";
import cardicn3 from "../assets/HowDoesItSec/icns (3).svg";
import cardicn4 from "../assets/HowDoesItSec/icns (4).svg";
import cardicn5 from "../assets/HowDoesItSec/icns (5).svg";
import cardicn6 from "../assets/HowDoesItSec/icns (6).svg";

const cardItems = [
  {
    icon:cardicn1,
    title: "01. Trading Platform",
    description:
      "BlockchainFX is a multi-asset trading platform that offers a wide range of trading options.",
  },
  {
    icon:cardicn2,
    title: "02. Fee Distribution",
    description:
      "Our wallet ensures your assets are stored securely with state-of-the-art encryption.",
  },
  {
    icon:cardicn3,
    title: "03. Daily Revenue (50%)",
    description:
      "50% of all fees collected will be shared with BFX holders and automatically airdropped every 24 hours.",
  },
  {
    icon:cardicn4,
    title: "04. Buybacks (20%)",
    description:
      "Our team is available around the clock to assist with any issues or questions.",
  },
  {
    icon:cardicn5,
    title: "05. Burn",
    description:
      "50% of buybacks will be automatically burned, continuously reducing the supply of $BFX..",
  },
  {
    icon:cardicn6,
    title: "06. Hyper Growth",
    description: "Enjoy competitive fees that help you maximize your returns.",
  },
];

function MobHowDoesItSec() {
  return (
    <div className="pt-[24px] pb-[24px]">
      <div className="max-w-[1400px] w-[100%] mx-auto relative">
        <div>
          <h3 className="text-[32px] leading-[100%] text-[#181A20] text-center font-[700]">
            How does it work?
          </h3>
        </div>
        <div className=" pt-[30px] w-[90%] mx-auto ">
          <div className="w-[100%]">
            <div className="relative px-[28px]">
              <button className="swiper-button-prev rotate-[182deg] absolute z-10 !left-[-3%] top-[50%] transform -translate-y-1/2 !w-[37.545px] !h-[37.545px]">
                <img className="" src={arw} alt="" />
              </button>
              <button className="swiper-button-next !w-[37.545px] !h-[37.545px] absolute z-10 !right-[-3%] top-[50%] transform -translate-y-1/2">
                <img className="" src={arw} alt="" />
              </button>

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
                {cardItems.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      key={item.id}
                      className="px-[20px] max-h-[340px] flex space-y-[20px] flex-col justify-centetr py-[32px] min-h-[284px] bg-[#F9FAFB] rounded-[8px] border "
                    >
                      <div className="flex justify-center">
                        <img src={item.icon} alt="" />
                      </div>
                      <div className="pt-[10px]">
                        <h3 className="text-[20px] text-center text-[#000] font-[700] leading-[115%]">
                          {item.title}
                        </h3>
                      </div>
                      <h4 className="text-[15px]  text-center text-[#000] font-[400] leading-[153.333%]">
                        {item.description}
                      </h4>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobHowDoesItSec;
