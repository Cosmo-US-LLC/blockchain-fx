import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

import cardicn1 from "../assets/HowDoesItSec/icns (1) copy.svg";
import cardicn2 from "../assets/HowDoesItSec/icns (2) copy.svg";
import cardicn3 from "../assets/HowDoesItSec/icns (3) copy.svg";
import cardicn4 from "../assets/HowDoesItSec/icns (4) copy.svg";
import cardicn5 from "../assets/HowDoesItSec/icns (5) copy.svg";
import cardicn6 from "../assets/HowDoesItSec/icns (6) copy.svg";

function MobHowDoesItSec() {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const { t } = useTranslation();

  const cardItems = [
    {
      icon: cardicn1,
      title: t("how_does_it_section.trading_platform.title"),
      description: t("how_does_it_section.trading_platform.description"),
    },
    {
      icon: cardicn2,
      title: t("how_does_it_section.fee_distribution.title"),
      description: t("how_does_it_section.fee_distribution.description"),
    },
    {
      icon: cardicn3,
      title: t("how_does_it_section.daily_revenue.title"),
      description: t("how_does_it_section.daily_revenue.description"),
    },
    {
      icon: cardicn4,
      title: t("how_does_it_section.buybacks.title"),
      description: t("how_does_it_section.buybacks.description"),
    },
    {
      icon: cardicn5,
      title: t("how_does_it_section.burn.title"),
      description: t("how_does_it_section.burn.description"),
    },
    {
      icon: cardicn6,
      title: t("how_does_it_section.fueling_growth.title"),
      description: t("how_does_it_section.fueling_growth.description"),
    },
  ];

  const handleSlideChange = (swiper) => {
    setSwiperIndex(swiper.activeIndex);
  };

  return (
    <div className="pt-[24px] pb-[24px]">
      <div className="max-w-[1400px] w-[100%] mx-auto relative">
        <div>
          <h3 className="text-[36px] capitalize leading-[100%] text-[white] text-center font-[600]">
            {t("how_does_it_section.title")}
          </h3>
          <p className="mt-4 text-[15px] text-center text-[#fff] font-[400]">
            {t("how_does_it_section.description")}
          </p>
        </div>
        <div className="pt-[30px] w-[100%] mx-auto">
          <div className="w-[100%]">
            <div className="relative px-4">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={{
                  nextEl: ".swiper-button-next-how",
                  prevEl: ".swiper-button-prev-how",
                }}
                modules={[Navigation]}
                loop={false}
                onSlideChange={handleSlideChange}
                className="mySwiper"
              >
                {cardItems.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="px-[20px] h-[299px] bg-[#030F16] rounded-[16px] border border-1 border-[#E6AF031F]">
                      <div className="flex flex-row items-center justify-between">
                        <div className="flex justify-center">
                          <img src={item.icon} alt="" />
                        </div>
                        <p className="text-[#FFFFFF33] text-[56px] font-[600]">
                          0{index + 1}.
                        </p>
                      </div>

                      <div className="pt-8">
                        <h3 className="text-[24px] text-left text-[white] font-[600] leading-[115%]">
                          {item.title}
                        </h3>
                      </div>
                      <h4 className="mt-2 text-[16px] text-left text-[#fff] font-[400] leading-[153.333%]">
                        {item.description}
                      </h4>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows and Circles */}
              <div className="flex flex-row w-full items-center justify-center text-[white] mt-4">
                <div
                  className={`swiper-button-prev-how w-[16px] h-[16px] flex justify-center items-center rounded-full cursor-pointer ${
                    swiperIndex > 0 ? "text-white" : "text-[#1F2213]"
                  }`}
                >
                  <MdKeyboardArrowLeft
                    className={`text-${
                      swiperIndex > 0 ? "white" : "#1F2213"
                    } text-2xl`}
                  />
                </div>

                <div className="flex gap-2 mx-4">
                  {cardItems.map((_, index) => (
                    <div
                      key={index}
                      className={`w-[7px] h-[7px] rounded-full ${
                        swiperIndex === index ? "bg-[#E6AF03]" : "bg-[#FFFFFF]"
                      }`}
                    />
                  ))}
                </div>

                <div
                  className={`swiper-button-next-how w-[16px] h-[16px] flex justify-center items-center rounded-full cursor-pointer ${
                    swiperIndex < cardItems.length - 1
                      ? "text-white"
                      : "text-[#1F2213]"
                  }`}
                >
                  <MdKeyboardArrowRight
                    className={`text-${
                      swiperIndex < cardItems.length - 1 ? "white" : "#1F2213"
                    } text-2xl`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobHowDoesItSec;
