import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
        <h3 className="text-[48px] font-[600] leading-[120%] text-white tracking-[-1.5px]">
          {t("trader_reviews_section.title")}
        </h3>
      </div>
      <div
        className="pt-[80px] pb-[100px] max-w-[1280px] w-[100%] mx-auto px-4"
        id="reviews"
      >
        <div className="space-y-[50px]">
          {/* Header */}

          {/* Main Content - Ratings and Reviews Side by Side */}
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
                {[
                  { rating: 5, percentage: 86 },
                  { rating: 4, percentage: 8 },
                  { rating: 3, percentage: 3 },
                  { rating: 2, percentage: 2 },
                  { rating: 1, percentage: 1 },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-white w-6">{item.rating}</span>
                    <div className="flex-1 h-3 bg-[#1B1B1B] rounded-full">
                      <div
                        className="h-full bg-[#E5AE00] rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
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
                  <img
                    className="w-[50.545px] h-[50.545px]"
                    src={swpbtnl}
                    alt="Previous"
                  />
                </button>
                <button className="swiper-button-next !w-[40px] !h-[40px] !relative !right-0 !top-0">
                  <img
                    className="w-[50.545px] h-[50.545px]"
                    src={swpbtnr}
                    alt="Next"
                  />
                </button>
              </div>

              <Swiper
                slidesPerView={2.2}
                breakpoints={{
                  640: { slidesPerView: 1.5, spaceBetween: 10 }, // Reduced from 20
                  768: { slidesPerView: 2, spaceBetween: 10 }, // Reduced from 20
                  1024: { slidesPerView: 2.2, spaceBetween: 10 }, // Reduced from 20
                }}
                spaceBetween={10} // Reduced from 20
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Navigation]}
                loop={true}
                className="mySwiper !ml-4"
              >
                {/* Review 1 */}
                <SwiperSlide>
                  <div className="h-[297px] py-[25px] relative z-[9] flex flex-col justify-between pl-[25px] pr-[14px] bg-[#181A20] border border-[#525252] rounded-[4px] w-[320px]">
                    <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                      {t("trader_reviews_section.reviews.0.text")}
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center space-x-2 mb-4">
                        <img src={usern} alt="" className="w-10 h-10" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                              {t("trader_reviews_section.reviews.0.user.name")}
                            </h3>
                            <img src={tick} alt="" className="w-3 h-3" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[11.6px] font-[600] leading-[140%]">
                            {t("trader_reviews_section.reviews.0.user.followers")}
                          </h4>
                        </div>
                      </div>
                      <a
                        href={t("trader_reviews_section.reviews.0.user.link")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 text-[#E5AE00] text-[14px] font-[600]"
                      >
                        View X Review →
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Review 2 */}
                <SwiperSlide>
                  <div className="h-[297px] py-[25px] relative z-[9] flex border border-[#525252] flex-col justify-between pl-[25px] pr-[14px] bg-[#181A20] rounded-[4px] w-[320px]">
                    <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                      Trading on 9 different windows and having access to dozens
                      of trading analytic tools and risk management is giving me
                      a long-term edge over the competition trading on other
                      platforms.
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center space-x-2 mb-4">
                        <img src={user1} alt="" className="w-10 h-10" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                              Mr 𝕏
                            </h3>
                            <img src={tick} alt="" className="w-3 h-3" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[11.6px] font-[600] leading-[140%]">
                            @MrX_Crypto • 472K followers
                          </h4>
                        </div>
                      </div>
                      <a
                        href="https://x.com/MrX_Crypto/status/1900845071240515647"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 text-[#E5AE00] text-[14px] font-[600]"
                      >
                        View X Review →
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Review 3 */}
                <SwiperSlide>
                  <div className="h-[297px] py-[25px] relative z-[9] border border-[#525252] flex flex-col justify-between pl-[25px] pr-[14px] bg-[#181A20] rounded-[4px] w-[320px]">
                    <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                      BlockchainFX gives you endless trading opportunities. This
                      just makes sense since markets are interconnected.
                      Finally, there's no need to waste time switching between
                      brokers.
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center space-x-2 mb-4">
                        <img src={user2} alt="" className="w-10 h-10" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                              Silvina Escudero
                            </h3>
                            <img src={tick} alt="" className="w-3 h-3" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[11.6px] font-[600] leading-[140%]">
                            @silvinaescudero • 863K followers
                          </h4>
                        </div>
                      </div>
                      <a
                        href="https://x.com/silvinaescudero/status/1900845896302027108"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 text-[#E5AE00] text-[14px] font-[600]"
                      >
                        View X Review →
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Review 4 */}
                <SwiperSlide>
                  <div className="h-[297px] py-[25px] relative z-[9] border border-[#525252]  flex flex-col justify-between pl-[25px] pr-[14px] bg-[#181A20] rounded-[4px] w-[320px]">
                    <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                      The best part about BlockchainFX? The deep liquidity
                      across all assets. I've never had an issue filling large
                      orders, even with niche crypto pairs. This is exactly what
                      serious traders need—speed, reliability, and a wide range
                      of markets all in one place.
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center space-x-2 mb-4">
                        <img src={user3} alt="" className="w-10 h-10" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                              DefiAva🦋
                            </h3>
                            <img src={tick} alt="" className="w-3 h-3" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[11.6px] font-[600] leading-[140%]">
                            @defi_avaxx • 30.3K followers
                          </h4>
                        </div>
                      </div>
                      <a
                        href="https://x.com/defi_avaxx/status/1900847259874627732"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 text-[#E5AE00] text-[14px] font-[600]"
                      >
                        View X Review →
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Review 5 */}
                <SwiperSlide>
                  <div className="h-[297px] py-[25px] relative z-[9] border border-[#525252]  flex flex-col justify-between pl-[25px] pr-[14px] bg-[#181A20] rounded-[4px] w-[320px]">
                    <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                      BlockchainFX has completely leveled up my trading game.
                      It's super intuitive, lets you access multiple markets
                      simultaneously, and offers lightning-fast transactions. A
                      huge win for crypto!
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center space-x-2 mb-4">
                        <img src={user4} alt="" className="w-10 h-10" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                              Honey.Eth
                            </h3>
                            <img src={tick} alt="" className="w-3 h-3" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[11.6px] font-[600] leading-[140%]">
                            @HoneyEth_ • 121.8K followers
                          </h4>
                        </div>
                      </div>
                      <a
                        href="https://x.com/HoneyEth_/status/1900870121477820837"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 text-[#E5AE00] text-[14px] font-[600]"
                      >
                        View X Review →
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Review 6 */}
                <SwiperSlide>
                  <div className="h-[297px] py-[25px] relative z-[9] border border-[#525252]  flex flex-col justify-between pl-[25px] pr-[14px] bg-[#181A20] rounded-[4px] w-[320px]">
                    <p className="text-[13px] font-[400] leading-[175%] text-[#fff]">
                      That's exactly what we needed. A trading broker designed
                      to bridge Crypto with Forex, ETFs, and stocks, giving you
                      real access to the markets with deep liquidity.
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center space-x-2 mb-4">
                        <img src={user5} alt="" className="w-10 h-10" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-[15px] text-[#fff] font-[600] leading-[140%]">
                              Crypto Bri
                            </h3>
                            <img src={tick} alt="" className="w-3 h-3" />
                          </div>
                          <h4 className="text-[#6A6A6A] text-[11.6px] font-[600] leading-[140%]">
                            @cryptobri_ • 79.6K followers
                          </h4>
                        </div>
                      </div>
                      <a
                        href="https://x.com/cryptobri_/status/1901419367289512075"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E5AE00] text-[14px] font-[600]"
                      >
                        View X Review →
                      </a>
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
