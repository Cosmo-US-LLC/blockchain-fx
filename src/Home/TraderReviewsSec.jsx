import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// Import images
import user1 from "../assets/TraderReviewsSec/rew (5).png";
import user2 from "../assets/TraderReviewsSec/rew (4).png";
import user3 from "../assets/TraderReviewsSec/rew (3).png";
import user4 from "../assets/TraderReviewsSec/rew (2).png";
import user5 from "../assets/TraderReviewsSec/rew (1).png";
import usern from "../assets/TraderReviewsSec/user.png";
import tick from "../assets/TraderReviewsSec/teenyicons_tick-circle-solid.svg";
import swpbtnl from "../assets/TraderReviewsSec/arwr.svg";
import swpbtnr from "../assets/TraderReviewsSec/arw.svg";
function TraderReviewsSec() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#020B10]">
      <div className="text-center pt-[30px] pb-[60px]">
        <h3
          className="text-[48px] review font-[600] leading-[120%] text-white tracking-[-1.5px]"
          dangerouslySetInnerHTML={{ __html: t("trader_reviews_section.title") }}
        />
      </div>
      <div className="pt-[80px] pb-[100px] max-w-[1280px] w-[100%] mx-auto px-4" id="reviews">
        <div className="space-y-[50px]">
          {/* Ratings and Reviews Section */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Ratings Section */}
            <div className="lg:w-[30%] w-full space-y-6">
              <div className="space-y-2">
                <h4 className="text-[24px] text-white font-[500]">
                  {t("trader_reviews_section.ratings.average")}
                </h4>
                <p className="text-[#7C7C7C] text-[16px]">
                  {t("trader_reviews_section.ratings.verified_ratings")}
                </p>
              </div>
              {/* Rating Bars */}
              <div className="space-y-4">
                {t("trader_reviews_section.ratings.rating_bars", { returnObjects: true }).map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-white w-6">{item.rating}</span>
                    <div className="flex-1 h-3 bg-[#1B1B1B] rounded-full">
                      <div
                        className="h-full bg-[#E5AE00] rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-white w-10">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Reviews Slider */}
            <div className="lg:w-[70%] w-full relative">
              <div className="max-w-[100px] w-[100%] flex space-x-2 ml-auto absolute right-0 top-[-60px] z-10">
                <button className="swiper-button-prev !w-[40px] !h-[40px] !relative !left-0 !top-0">
                  <img className="w-[50.545px] h-[50.545px]" src={swpbtnl} alt={t("common.previous")} />
                </button>
                <button className="swiper-button-next !w-[40px] !h-[40px] !relative !right-0 !top-0">
                  <img className="w-[50.545px] h-[50.545px]" src={swpbtnr} alt={t("common.next")} />
                </button>
              </div>
              <Swiper
                slidesPerView={2.2}
                breakpoints={{
                  640: { slidesPerView: 1.5, spaceBetween: 10 },
                  768: { slidesPerView: 2, spaceBetween: 10 },
                  1024: { slidesPerView: 2.2, spaceBetween: 10 },
                }}
                spaceBetween={10}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Navigation]}
                loop={true}
                className="mySwiper !ml-4"
              >
                {t("trader_reviews_section.reviews", { returnObjects: true }).map((review, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-[297px] py-[25px] relative z-[9] flex flex-col justify-between pl-[25px] pr-[14px] bg-[#181A20] border border-[#525252] rounded-[4px] w-[320px]">
                      <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                        {review.text}
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-center space-x-2 mb-4">
                          <img
                            src={index === 0 ? usern :
                                 index === 1 ? user1 :
                                 index === 2 ? user2 :
                                 index === 3 ? user3 :
                                 index === 4 ? user4 : user5}
                            alt={review.user.name}
                            className="w-10 h-10"
                          />
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                                {review.user.name}
                              </h3>
                              <img src={tick} alt="Verified" className="w-3 h-3" />
                            </div>
                            <h4 className="text-[#6A6A6A] text-[11.6px] font-[600] leading-[140%]">
                              {review.user.followers}
                            </h4>
                          </div>
                        </div>
                        <a
                          href={review.user.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 text-[#E5AE00] text-[14px] font-[600]"
                        >
                          {t("common.view_review")} →
                        </a>
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
export default TraderReviewsSec;