import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Iicon from "../assets/Gateway/i.svg";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import starticn from "../assets/PremiumSec/start.svg";
import arw from "../assets/PremiumSec/arw.svg";
import qArw from "../assets/PremiumSec/qArw.webp";
import faq1 from "../assets/PremiumSec/faq (1).svg";
import faq2 from "../assets/PremiumSec/faq (2).svg";
import line from "../assets/PremiumSec/line.png";
import cardimg1 from "../assets/PremiumSec/card1.webp";
import cardimg2 from "../assets/PremiumSec/card2.webp";
import cardimg3 from "../assets/PremiumSec/card3.webp";
import cardimg4 from "../assets/PremiumSec/card4.webp";
import cardimg5 from "../assets/PremiumSec/card5.webp";
import cardimg6 from "../assets/PremiumSec/card6.webp";
import cardimg7 from "../assets/PremiumSec/card7.webp";

const cardsmob = [
  {
    id: 1,
    img: cardimg1,
    title: "MobilePremiumSec.cards.novice.title",
    price: "MobilePremiumSec.cards.novice.price",
    reviews: [true, false, false, false, false],
    points: [
      "MobilePremiumSec.cards.novice.points.earlyAccess",
      "MobilePremiumSec.cards.novice.points.bfxBonus",
      "MobilePremiumSec.cards.novice.points.visaCard",
    ],
    buttonLabel: "MobilePremiumSec.cards.novice.buttonLabel",
  },
  {
    id: 2,
    img: cardimg2,
    title: "MobilePremiumSec.cards.advanced.title",
    price: "MobilePremiumSec.cards.advanced.price",
    reviews: [true, true, false, false, false],
    points: [
      "MobilePremiumSec.cards.advanced.points.earlyAccess",
      "MobilePremiumSec.cards.advanced.points.bfxBonus",
      "MobilePremiumSec.cards.advanced.points.visaCard",
      "MobilePremiumSec.cards.advanced.points.tradingCredits",
    ],
    buttonLabel: "MobilePremiumSec.cards.advanced.buttonLabel",
  },
  {
    id: 3,
    img: cardimg3,
    title: "MobilePremiumSec.cards.pro.title",
    price: "MobilePremiumSec.cards.pro.price",
    reviews: [true, true, true, false, false],
    points: [
      "MobilePremiumSec.cards.pro.points.earlyAccess",
      "MobilePremiumSec.cards.pro.points.bfxBonus",
      "MobilePremiumSec.cards.pro.points.visaCard",
      "MobilePremiumSec.cards.pro.points.tradingCredits",
    ],
    buttonLabel: "MobilePremiumSec.cards.pro.buttonLabel",
  },
  {
    id: 4,
    img: cardimg4,
    title: "MobilePremiumSec.cards.expert.title",
    price: "MobilePremiumSec.cards.expert.price",
    reviews: [true, true, true, true, false],
    points: [
      "MobilePremiumSec.cards.expert.points.earlyAccess",
      "MobilePremiumSec.cards.expert.points.bfxBonus",
      "MobilePremiumSec.cards.expert.points.usdtRewards",
      "MobilePremiumSec.cards.expert.points.visaCard",
      "MobilePremiumSec.cards.expert.points.tradingCredits",
    ],
    buttonLabel: "MobilePremiumSec.cards.expert.buttonLabel",
  },
  {
    id: 5,
    img: cardimg5,
    title: "MobilePremiumSec.cards.master.title",
    price: "MobilePremiumSec.cards.master.price",
    reviews: [true, true, true, true, true],
    points: [
      "MobilePremiumSec.cards.master.points.earlyAccess",
      "MobilePremiumSec.cards.master.points.bfxBonus",
      "MobilePremiumSec.cards.master.points.usdtRewards",
      "MobilePremiumSec.cards.master.points.visaCard",
      "MobilePremiumSec.cards.master.points.tradingCredits",
    ],
    buttonLabel: "MobilePremiumSec.cards.master.buttonLabel",
  },
  {
    id: 6,
    img: cardimg6,
    title: "MobilePremiumSec.cards.elite.title",
    price: "MobilePremiumSec.cards.elite.price",
    reviews: [true, true, true, true, true, true],
    points: [
      "MobilePremiumSec.cards.elite.points.earlyAccess",
      "MobilePremiumSec.cards.elite.points.bfxBonus",
      "MobilePremiumSec.cards.elite.points.usdtRewards",
      "MobilePremiumSec.cards.elite.points.visaCard",
      "MobilePremiumSec.cards.elite.points.tradingCredits",
    ],
    buttonLabel: "MobilePremiumSec.cards.elite.buttonLabel",
  },
  {
    id: 7,
    img: cardimg7,
    title: "MobilePremiumSec.cards.legend.title",
    price: "MobilePremiumSec.cards.legend.price",
    reviews: [true, true, true, true, true, true, true],
    points: [
      "MobilePremiumSec.cards.legend.points.earlyAccess",
      "MobilePremiumSec.cards.legend.points.bfxBonus",
      "MobilePremiumSec.cards.legend.points.usdtRewards",
      "MobilePremiumSec.cards.legend.points.visaCard",
      "MobilePremiumSec.cards.legend.points.tradingCredits",
    ],
    buttonLabel: "MobilePremiumSec.cards.legend.buttonLabel",
  },
]
const Bundles = [
  {
    id: 1,
    question: "FoundersClubFAQ.questions.nft_timing.question",
    answer: "FoundersClubFAQ.questions.nft_timing.answer",
  },
  {
    id: 2,
    question: "FoundersClubFAQ.questions.bonuses_timing.question",
    answer: "FoundersClubFAQ.questions.bonuses_timing.answer",
  },
  {
    id: 3,
    question: "FoundersClubFAQ.questions.multiple_purchases.question",
    answer: "FoundersClubFAQ.questions.multiple_purchases.answer",
  },
  {
    id: 4,
    question: "FoundersClubFAQ.questions.upgrade_nft.question",
    answer: "FoundersClubFAQ.questions.upgrade_nft.answer",
    tooltip: true,
  },
]

function MobilePremiumSec() {
    const { t } = useTranslation();
  
  const [openBundles, setOpenBundles] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const [mainSwiper, setMainSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleBundles = (id) => {
    setOpenBundles(id === openBundles ? null : id);
  };
  const cards = t("MobilePremiumSec.cards", { returnObjects: true })

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("how-to-buy1");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 80;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };
  return (
    <div className="pt-[34px] pb-[34px] px-6 bg-[#030B10]" id="premium">
      <div className="relative flex flex-col gap-12">
        <div className="space-y-[12px]">
        <h3
          className="text-[30px] leading-[120%] text-[#FFF] text-center font-[600] tracking-[-1.548px]"
          dangerouslySetInnerHTML={{ __html: t('MobilePremiumSec.subtitle') }}
        />
        <p className="text-[15px] leading-[175%] tracking-[-0.32px] mx-auto text-[#fff] text-center font-[400]">
          {t('MobilePremiumSec.description')}
        </p>
        </div>
        <div className="w-[90%] mx-auto">
        <div className="relative">
          <div className="w-[100%] left-1 h-[1px] border border-[#E5AE00] absolute top-[50%]"></div>
          <button className="swiper-button-prev2 rotate-[182deg] absolute z-10 !left-[-10%] !top-[50%] transform -translate-y-1/2">
            <img className="w-[22.545px] h-[22.545px]" src={arw} alt="" />
          </button>
          <button className="swiper-button-next2 absolute z-10 !right-[-10%] !top-[50%] transform -translate-y-1/2">
            <img className="w-[20.545px] h-[20.545px]" src={arw} alt="" />
          </button>

          <Swiper
            slidesPerView={4}
            speed={500}
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper-button-next2",
              prevEl: ".swiper-button-prev2",
            }}
            modules={[Navigation]}
            loop={false}
            className="mySwiper"
          >
            {[
              "Novice",
              "Advanced",
              "Pro",
              "Expert",
              "Master",
              "Elite",
              "Legend",
            ].map((tier, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => {
                    if (mainSwiper) {
                      mainSwiper.slideTo(index);
                    }
                  }}
                  className={`flex flex-col items-center justify-center w-[57px] py-2 bg-[#131C22] rounded-[3.585px] relative z-[90] cursor-pointer ${
                    activeIndex === index
                      ? "border"
                      : "border border-[#E5AE00]"
                  }`}
                >
                  <h4 className="text-[10px] text-[#FFF] font-[600] leading-[115%] text-center">
                    {t(`MobilePremiumSec.tiers.${tier.toLowerCase()}`)}
                  </h4>
                  <p className="text-[#888] font-[400] text-[9px] text-center">
                    {
                      [
                        "$1,000+",
                        "$2,500+",
                        "$5,000+",
                        "$10,000+",
                        "$25,000+",
                        "$50,000+",
                        "$100,000+",
                      ][index]
                    }
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
       </div>

        <div className="w-[100%] mx-auto ">
          <div className="relative">
            <button className="swiper-button-prev-1 rotate-[182deg] absolute z-10 !left-[-5%] top-[50%] transform -translate-y-1/2">
              <img className="w-[27.545px] h-[27.545px]" src={arw} alt="" />
            </button>
            <button className="swiper-button-next-1  absolute z-10 !right-[-5%] top-[50%] transform -translate-y-1/2">
              <img className="w-[27.545px] h-[27.545px]" src={arw} alt="" />
            </button>

            <Swiper
      speed={800}
      slidesPerView={1}
      spaceBetween={20}
      onSwiper={setMainSwiper}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      navigation={{
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
      }}
      modules={[Navigation]}
      loop={false}
      className="mySwiper"
    >
      {cardsmob.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="p-3 rounded-[16px] max-w-[320px] mx-auto flex flex-col justify-between border border-[#9D9D9D] !min-h-[530px] max-h-[480px] h-[100%]">
            <div>
              <img loading="lazy" src={card.img || "/placeholder.svg"} className="rounded-[4px]" alt={t(card.title)} />

              <div className="flex justify-between pt-[15px] pb-[10px]">
                <div classNmae="w-[100%]">
                  <div className="text-[#FFF] w-[100%] space-y-[12px] flex flex-col justify-end text-[16px] font-[600] leading-[115%]">
                    <div className="flex items-center justify-center gap-6">
                      <h3 className="text-transparent text-[30px] font-[800] leading-[130%] tracking-[-2.745px] bg-clip-text bg-gradient-to-r from-white to-[#030F16]">
                        {t(card.title)}
                      </h3>

                      <h4 className="text-center rounded-full w-[80px] text-[12px] px-2 py-1 border-[#fff] ml-1 border font-[600]">
                        NFT
                      </h4>
                    </div>
                    <span className="text-[#FFF] text-start text-[15px] font-[600]">{t(card.price)}</span>
                  </div>
                </div>
              </div>

              <ul className="text-left mt-[12px]">
                {card.points.map((point, index) => (
                  <li
                    key={index}
                    className="mb-2 rounded-[8px] px-[5px] h-[31px] flex items-center text-[#fff] text-[14px] font-[400] leading-[127.778%] tracking-[-0.32px]"
                    style={{
                      background: "rgba(124, 124, 124, 0.07)",
                    }}
                  >
                    {t(point)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-start">
              <button
                className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] w-[100%] h-[40px]"
                onClick={handleScroll}
              >
                {t(card.buttonLabel)}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
          </div>
        </div>

        <div className="flex flex-col gap-6">
      <h3
        className="text-[30px] text-center font-[600] text-[#FFF] leading-[120%] tracking-[-2.548px]"
        dangerouslySetInnerHTML={{ __html: t("FoundersClubFAQ.title") }}
      ></h3>

      <div className="flex flex-col gap-4">
        {Bundles.map((item, index) => (
          <div
            key={item.id}
            className={`py-4 px-4 border bg-[#030F16] border-[#E6AF031F] rounded-[16px] ${
              index !== Bundles.length - 1 ? "border-b border-[#000]" : ""
            }`}
          >
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleBundles(item.id)}>
              <h3
                className={`text-[14px] font-[600] leading-[170.05% ] tracking-[-0.9px] ${
                  openBundles === item.id ? "text-[#FFF]" : "text-[#FFF]"
                }`}
              >
                {t(item.question)}
              </h3>
              <span>
                <img
                  src={qArw || "/placeholder.svg"}
                  alt=""
                  className={`h-[20px] w-[20px] transition-transform duration-300 ${
                    openBundles === item.id ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </div>
            {openBundles === item.id && (
              <div className="relative">
                <p className="relative mt-2 text-[15px] text-[#fff] font-[400] tracking-[-0.32px] inline-flex items-center">
                  <span
                    className="pr-3 leading-[130%] space-y-[10px]"
                    dangerouslySetInnerHTML={{ __html: t(item.answer) }}
                  ></span>

                  {item.tooltip && (
                    <span className="absolute top-[5%] right-[0%]">
                      <div
                        className="relative cursor-pointer"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                      >
                        <img className="w-[11.7px]" src={Iicon || "/placeholder.svg"} alt="Info Icon" />
                        {showTooltip && (
                          <div className="absolute top-full left-[-140px] transform -translate-x-1/2 mt-2 z-[99] bg-[#808080] w-[300px] text-start leading-[110%] text-[#fff] text-[10px] font-[400] rounded-md p-[10px] shadow-lg whitespace-nowrap">
                            <span className="absolute top-[8px] left-[4px]">.</span>{" "}
                            <span
                              dangerouslySetInnerHTML={{ __html: t("FoundersClubFAQ.tooltip.upgrade_info") }}
                            ></span>
                          </div>
                        )}
                      </div>
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}

export default MobilePremiumSec;
