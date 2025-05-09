import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";

// Import assets
import swpbtn from "../assets/PremiumSec/arw.svg";
import swpbtn2 from "../assets/PremiumSec/arw2.svg";
import tradimg from "../assets/TraderReviewsSec/tradimg.png";
import user from "../assets/TraderReviewsSec/image.png";
import fram from "../assets/TraderReviewsSec/fram.png";
import user1 from "../assets/TraderReviewsSec/rew (5).png";
import user2 from "../assets/TraderReviewsSec/rew (4).png";
import user3 from "../assets/TraderReviewsSec/rew (3).png";
import user4 from "../assets/TraderReviewsSec/rew (2).png";
import user5 from "../assets/TraderReviewsSec/rew (1).png";
import usern from "../assets/TraderReviewsSec/user.png";
import tick from "../assets/TraderReviewsSec/teenyicons_tick-circle-solid.svg";
import swpbtnl from "../assets/TraderReviewsSec/arwr.svg";
import swpbtnr from "../assets/TraderReviewsSec/arw.svg";

function MobTraderReviewsSec() {
  const { t } = useTranslation();

  const userImages = {
    user1,
    user2,
    user3,
    user4,
    user5,
    usern,
  };

  return (
    <div className="py-[30px] space-y-[20px] bg-[#000]" id="reviews">
      <div className="relative space-y-[20px] w-[90%] mx-auto">
        <div className="space-y-[20px]">
          <h3
            className="text-[36px] review font-[700] text-center leading-[120%] text-[#FFF] tracking-[-2.548px]"
            dangerouslySetInnerHTML={{
              __html: t("trader_reviews_section.title"),
            }}
          />
        </div>
        <div className="w-[100%]">
          <div className="space-y-[30px] w-[100%]">
            <div className="flex flex-col items-center justify-center gap-4">
              <h4 className="text-[15px] bg-[#030F16] border border-[#E6AF0320] text-white flex items-center justify-center  font-[400] w-[133px] h-[48px] rounded-[10px] ">
                {t("trader_reviews_section.ratings.average")}
              </h4>
              <p className="text-[#7C7C7C] leading-normal text-[15px] font-[400]">
                {t("trader_reviews_section.ratings.verified_ratings")}
              </p>
            </div>
            <div className="w-[100%] space-y-[24px] text-white">
              {t("trader_reviews_section.ratings.rating_bars", {
                returnObjects: true,
              }).map((bar, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 px-2"
                >
                  <span className="text-[15px] font-[400] w-[20px]">
                    {bar.rating}
                  </span>
                  <div className="h-[17px]  w-[100%] bg-[#222] rounded-[16.955px]">
                    <div
                      className="bg-[#E5AE00] h-[17px] rounded-[16.955px]"
                      style={{ width: `${bar.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-[15px] font-[400] w-[50px]">
                    {bar.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[100%] pt-[40px]">
            <div className="relative">
              <div className="max-w-[300px] flex space-x-3 mx-auto">
                <button className="swiper-button-prev-3 rotate-[180deg] !w-[40px] !h-[40px] absolute z-10 !left-[-2%] !top-[45%]">
                  <img
                    className="w-[40.545px] h-[40.545px]"
                    src={swpbtn}
                    alt=""
                  />
                </button>
                <button className="swiper-button-next-3 !w-[40px] !h-[40px] absolute z-10 !right-[-2%] !top-[45%]">
                  <img
                    className="w-[40.545px] h-[40.545px]"
                    src={swpbtn}
                    alt=""
                  />
                </button>
              </div>
              <Swiper
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-3",
                  prevEl: ".swiper-button-prev-3",
                }}
                modules={[Navigation]}
                loop={false}
                className="mySwiper"
              >
                {t("trader_reviews_section.reviews", {
                  returnObjects: true,
                }).map((review, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-[#181A20] border border-[#525252] py-[45px] pb-[51px] min-h-[208px] flex flex-col justify-between pl-[40px] pr-[16px] rounded-[4px] max-w-[265.388px] mx-auto space-y-[30px] relative">
                      <p className="h-[100px] text-[10px] font-[400] leading-[175%] text-[#fff]">
                        {review.text}
                      </p>
                      <div className="flex items-center space-x-2">
                        <img
                          src={userImages[review.user.image]}
                          className="w-[30px] h-[30px]"
                          alt=""
                        />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[12px] text-[#fff] font-[600] leading-[140%]">
                              {review.user.name}
                            </h3>
                            <img src={tick} alt="" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[9px] font-[600] leading-[140%]">
                            {review.user.followers.split("•")[0]}
                          </h4>
                          <h4 className="text-[#CFCFCF] text-[11px] font-[400] italic">
                            {review.user.followers.split("•")[1]}
                          </h4>
                          <a
                            href={review.user.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E5AE00] text-[14px] font-[600]"
                          >
                            {review.user.reviewLink} →
                          </a>
                        </div>
                      </div>
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

export default MobTraderReviewsSec;
