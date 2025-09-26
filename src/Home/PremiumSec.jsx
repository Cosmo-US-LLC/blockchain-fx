import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { useLocation } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import cardimg1 from "../assets/PremiumSec/cardimg (1).webp";
import cardimg2 from "../assets/PremiumSec/cardimg (2).webp";
import cardimg3 from "../assets/PremiumSec/cardimg (3).webp";
import cardimg4 from "../assets/PremiumSec/cardimg (4).webp";
import cardimg5 from "../assets/PremiumSec/cardimg (5).webp";
import cardimg6 from "../assets/PremiumSec/cardimg (6).webp";
import cardimg7 from "../assets/PremiumSec/cardimg (7).webp";
import arw from "../assets/PremiumSec/preawr (1).svg";
import tick from "../assets/PremiumSec/true.png";
import cross from "../assets/PremiumSec/false.png";
import { useTranslation } from "react-i18next";



const cardImages = [cardimg1, cardimg2, cardimg3, cardimg4, cardimg5, cardimg6, cardimg7];
const cardPointsIcons = [
  [tick, tick, tick, cross, cross], // Novice
  [tick, tick, tick, tick, cross], // Advanced
  [tick, tick, tick, tick, cross], // Pro
  [tick, tick, tick, tick, tick], // Expert
  [tick, tick, tick, tick, tick], // Master
  [tick, tick, tick, tick, tick], // Elite
  [tick, tick, tick, tick, tick], // Legend
];

function PremiumSec() {
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [activeIndex, setActiveIndex] = useState(0);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRef = useRef(null);

  const handleDotClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
      setActiveIndex(index);
    }
  };


  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  const translatedCards = t("premium_section.cards", { returnObjects: true });

  return (
    <div className="py-[50px] bg-[#020B10]" id="premium">
      <div className="max-w-[1200px] w-[100%] space-y-[30px] mx-auto relative">
        <div className="flex justify-between ">
          <div className="space-y-[10px] ">
            <h3 className="text-[40px] leading-[155.556%] text-[#fff] text-start font-[700]">
              {t("premium_section.title")}
            </h3>
            <p className="text-[18px] leading-[150%] text-[#fff] font-[400] tracking-[-0.32px]">
              <span dangerouslySetInnerHTML={{ __html: t("premium_section.description") }} />
            </p>
          </div>

          <div className="w-[20%] flex justify-end items-end space-x-2">
            <button className="transform -translate-y-1/2 swiper-button-prev-swp a">
              <img className="w-[42.545px] h-[42.545px]" src={arw} alt="BlockchainFX" />
            </button>
            <button className="swiper-button-next-swp rotate-[182deg]  transform -translate-y-1/2">
              <img className="w-[42.545px] h-[42.545px]" src={arw} alt="BlockchainFX" />
            </button>
          </div>
        </div>
        <div className="max-w-[1200px] w-[100%] mx-auto ">
          <div className="relative">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              loop={false}
              navigation={{
                nextEl: ".swiper-button-next-swp",
                prevEl: ".swiper-button-prev-swp",
                enabled: true,
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              modules={[Navigation]}
              className="mySwiper"
            >
              {translatedCards.map((card, index) => (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      background: "#030F16",
                      borderColor: "1px solid rgba(230, 175, 3, 0.12)",
                    }}
                    className={`p-[15px] rounded-[8px] flex w-[100%] mx-auto flex-col justify-between ${
                      activeIndex === index
                        ? "border-black"
                        : "border-[1px solid rgba(230, 175, 3, 0.12)]"
                    } border !min-h-[610px] max-h-[610px] h-[100%]`}
                  >
                    <div>
                      <img
                        src={cardImages[index]}
                        loading="lazy"
                        className="rounded-[8px] w-[100%] max-h-[190px]"
                        alt={card.title}
                      />

                      <div className="flex space-x-3 items-start py-[14px]">
                        <div>
                          <h3 className="text-[#ffff] flex flex-col justify-end font-[600] ">
                            <span
                              className={`leading-[100%] ${isHome ? "text-[40px]" : "text-[30px]"}`}
                            
                            >
                              {card.title}
                            </span>
                            <span className="text-[#fff] text-start pt-[10px] text-[16.27px] font-[600]">
                              {card.price}
                            </span>
                          </h3>
                        </div>

                        <h3
                          className="text-[#fff] text-center border rounded-[16px] px-[26px] py-[6px] text-[16.27px] font-[600]"
                          style={{
                            border: "1px solid rgba(255, 255, 255, 0.10)",
                          }}
                        >
                          NFT
                        </h3>
                      </div>

                      <ul className="text-left">
                        {card.points.map((point, pointIdx) => (
                          <div
                            className="flex mb-1 rounded-[8px] px-[8px] h-[40.719px]  justify-between items-center"
                            style={{
                              background: "rgba(124, 124, 124, 0.07)",
                            }}
                          >
                            <li
                              key={pointIdx}
                              className="flex items-center text-[#fff] text-[16.27px] font-[400] leading-[127.778%] tracking-[-0.32px]"
                            >
                              <img
                                src={cardPointsIcons[index][pointIdx]}
                                alt="points icon"
                                className="w-5 h-5 mr-3"
                              />
                              {t(`premium_section.cards.${index}.points.${pointIdx}`)}
                            </li>
                            <div className="relative inline-block group">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 22 22"
                                fill="none"
                                className="cursor-pointer"
                              >
                                <path
                                  d="M10.5 0C16.023 0 20.5 4.477 20.5 10C20.5 15.523 16.023 20 10.5 20C4.977 20 0.5 15.523 0.5 10C0.5 4.477 4.977 0 10.5 0ZM10.5 1.395C8.21781 1.395 6.0291 2.3016 4.41535 3.91535C2.8016 5.5291 1.895 7.71781 1.895 10C1.895 12.2822 2.8016 14.4709 4.41535 16.0847C6.0291 17.6984 8.21781 18.605 10.5 18.605C12.7822 18.605 14.9709 17.6984 16.5847 16.0847C18.1984 14.4709 19.105 12.2822 19.105 10C19.105 7.71781 18.1984 5.5291 16.5847 3.91535C14.9709 2.3016 12.7822 1.395 10.5 1.395ZM10.355 7.21C10.74 7.21 11.052 7.523 11.052 7.908V15.466C11.0452 15.6464 10.9687 15.8172 10.8386 15.9424C10.7086 16.0676 10.535 16.1376 10.3545 16.1376C10.174 16.1376 10.0004 16.0676 9.87037 15.9424C9.74031 15.8172 9.66383 15.6464 9.657 15.466V7.907C9.657 7.522 9.969 7.21 10.355 7.21ZM10.383 4.419C10.6297 4.419 10.8662 4.51698 11.0406 4.69139C11.215 4.8658 11.313 5.10235 11.313 5.349C11.313 5.59565 11.215 5.8322 11.0406 6.00661C10.8662 6.18102 10.6297 6.279 10.383 6.279C10.1363 6.279 9.8998 6.18102 9.72539 6.00661C9.55098 5.8322 9.453 5.59565 9.453 5.349C9.453 5.10235 9.55098 4.8658 9.72539 4.69139C9.8998 4.51698 10.1363 4.419 10.383 4.419Z"
                                  fill="white"
                                />
                              </svg>
                              {t(`premium_section.cards.${index}.cardPointsTooltips.${pointIdx}`) && (
                                <div className="absolute left-[-80px] min-w-[200px] -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-[#020B10] border border-gray-700 text-white text-xs rounded px-2 py-1 z-[9999] ">
                                  {t(`premium_section.cards.${index}.cardPointsTooltips.${pointIdx}`)}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-start pt-[15px]">
                      <button
                        onClick={handleScroll}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                          background:
                            hoveredIndex === index
                              ? "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)"
                              : "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
                        }}
                        className="text-black px-[12px] hover:border-[#E6B005] hover:opacity-[0.8] text-[15.27px] font-[800] border border-[#E5AE00]  rounded-[8px] w-[100%] h-[49px]"
                      >
                        {card.buttonLabel}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div
          className="max-w-[1200px]  w-[100%] mx-auto bg-[#030F16] border rounded-[10px] px-[26px] py-[10px] space-y-[10px]"
          style={{
            borderColor: "rgba(230, 175, 3, 0.12)",
          }}
        >
          <div className="relative flex justify-center px-6 mt-4">
            <div className="flex justify-between absolute w-[95%] top-[-45%]">
              {translatedCards.map((_, index) => (
                <div
                  key={index}
                  className={`w-[21.85px] h-[21.85px] cursor-pointer rounded-full  ${
                    activeIndex === index
                      ? "border-black border-[3px] -mt-[2px] w-[24.85px] h-[24.85px]"
                      : ""
                  }`}
                  style={{
                    background: "#E5AE00",
                  }}
                  onClick={() => handleDotClick(index)}
                ></div>
              ))}
            </div>
            <div className="h-[11px] w-[100%] rounded-[50px] bg-[#C0C0C0]">
              <div
                className="bg-[#E5AE00] h-[11px] w-[80%] rounded-[50px]"
                style={{
                  width: `${(activeIndex / (translatedCards.length - 1)) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between pt-[8px] pl-2">
            {translatedCards.map((card, index) => (
              <div key={index} className="w-[100%] max-w-[100px]">
                <h4 className="text-[16px] text-[#fff] font-[600] leading-[115%] text-center">
                  {card.title}
                </h4>
                <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                  {card.price}+
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumSec;
