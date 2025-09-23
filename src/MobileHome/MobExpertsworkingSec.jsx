import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";

import swpbtn from "../assets/PremiumSec/arw.svg";

function MobExpertsworkingSec() {
  const { t } = useTranslation();

  const cardData = [{ id: "slide1" }, { id: "slide2" }, { id: "slide3" }];

  return (
    <div
      className="pt-[24px] bg-[#FAFAFA] pb-[24px]"
      style={{ background: "rgba(250, 250, 250, 0.98)" }}
    >
      <div className="relative space-y-[15px] w-[90%] mx-auto">
        <div className="space-y-[20px]">
          <h4 className="text-[20px] font-[400] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            25 Years of Experience
          </h4>
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            {t("experts.heading")}
          </h3>
        </div>

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
            {cardData.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="max-w-[292px] mx-auto rounded-[8px] min-h-[406px] p-[18px] w-[100%] border border-[#9D9D9D]"
                  style={{
                    background: "rgba(241, 241, 241, 0.36)",
                    backdropFilter: "blur(31.5px)",
                  }}
                >
                  <div className="cardimg flex justify-end flex-col min-h-[370px]">
                    <div className="p-[20px]">
                      <p className="text-[14.621px] text-[#181A20] font-[400] tracking-[-0.32px] mb-[12px]">
                        {t(`experts.${item.id}.text`)}
                      </p>
                      <h4 className="text-[18px] text-[#181A20] font-[600]">
                        {t(`experts.${item.id}.name`)}
                      </h4>
                      <p className="text-[14px] text-[#525252] font-[400]">
                        {t(`experts.${item.id}.role`)}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev rotate-[180deg] absolute z-10 !left-[0%] top-[50%] transform -translate-y-1/2">
            <img
              className="w-[50.545px] h-[30.545px]"
              src={swpbtn}
              alt="Previous"
            />
          </button>
          <button className="swiper-button-next absolute z-10 !right-[0%] top-[50%] transform -translate-y-1/2">
            <img
              className="w-[50.545px] h-[30.545px]"
              src={swpbtn}
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobExpertsworkingSec;
