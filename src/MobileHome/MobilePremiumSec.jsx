import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Iicon from "../assets/Gateway/i.svg";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
import tick from "../assets/PremiumSec/true.png";
import cross from "../assets/PremiumSec/false.png";

const cardsmob = [
  {
    id: 1,
    img: cardimg1,
    title: "Novice",
    price: "$1,000",
    reviews: [true, true, true, false, false],
    points: [
      { text: "BFX Visa Card", icon: tick },
      { text: "10% BFX Bonus", icon: tick },
      { text: "BFX Staking Rewards", icon: tick },
      { text: "Daily USDT Rewards", icon: cross },
      { text: "Trading Credits of up to $25k", icon: cross }
    ],
    buttonLabel: "Buy $BFX • $1,000",
  },
  {
    id: 2,
    img: cardimg2,
    title: "Advanced",
    price: "$2,500",
    reviews: [true, true, true, true, false],
    points: [
      { text: "BFX Visa Card", icon: tick },
      { text: "20% BFX Bonus", icon: tick },
      { text: "Metal BFX Visa Card", icon: tick },
      { text: "$500 Trading Credits", icon: tick },
      { text: "Daily USDT Rewards", icon: cross }
    ],
    buttonLabel: "Buy $BFX • $2,500",
  },
  {
    id: 3,
    img: cardimg3,
    title: "Pro",
    price: "$5,000",
    reviews: [true, true, true, true, false],
    points: [
      { text: "Metal BFX Visa Card", icon: tick },
      { text: "30% BFX Bonus", icon: tick },
      { text: "BFX Staking Rewards", icon: tick },
      { text: "$1000 Trading Credits", icon: tick },
      { text: "Daily USDT Rewards", icon: cross }
    ],
    buttonLabel: "Buy $BFX • $5,000",
  },
  {
    id: 4,
    img: cardimg4,
    title: "Expert",
    price: "$10,000",
    reviews: [true, true, true, false, false],
    points: [
      { text: "Early Access", icon: tick },
      { text: "40% BFX Bonus", icon: tick },
      { text: "10% USDT Rewards", icon: tick },
      { text:  "Metal BFX Visa Card", icon: tick },
      { text: "$2,000 Trading Credit", icon: tick }
    ],
    buttonLabel: "Buy $BFX • $10,000",
  },
  {
    id: 5,
    img: cardimg5,
    title: "Master",
    price: "$25,000",
    reviews: [true, true, true, true, false],
    points: [
      { text: "Early Access", icon: tick },
      { text: "50% BFX Bonus", icon: tick },
      { text: "50% USDT Rewards", icon: tick },
      { text: "Metal BFX Visa Card", icon: tick },
      { text: "$5,000 Trading Credits", icon: tick }
    ],
    buttonLabel: "Buy $BFX • $25,000",
  },
  {
    id: 6,
    img: cardimg6,
    title: "Elite",
    price: "$50,000",
    reviews: [true, true, true, true, false],
    points: [
      { text: "Early Access", icon: tick },
      { text: "60% BFX Bonus", icon: tick },
      { text: "12% USDT Rewards", icon: tick },
      { text: "Metal BFX Visa Card", icon: tick },
      { text: "$10,000 Trading Credits", icon: tick }
    ],
    buttonLabel: "Buy $BFX • $50,000",
  },
  {
    id: 7,
    img: cardimg7,
    title: "Legend",
    price: "$100,000",
    reviews: [true, true, true, true, false],
    points: [
      { text: "Early Access", icon: tick },
      { text: "80% BFX Bonus", icon: tick },
      { text: "30% USDT Rewards", icon: tick },
      { text: "18 Karat BFX Visa Card", icon: tick },
      { text: "$25,000 Trading Credits", icon: tick }
    ],
    buttonLabel: "Buy $BFX • $100,000",
  },
];

function MobilePremiumSec() {
  const { t } = useTranslation();
  const [openBundles, setOpenBundles] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const [mainSwiper, setMainSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

    const tierAmounts = [
      "$1,000",
      "$2,500",
      "$5,000",
      "$10,000",
      "$25,000",
      "$50,000",
      "$100,000",
    ];
  

  const toggleBundles = (id) => {
    setOpenBundles(id === openBundles ? null : id);
  };
  const cards = t("MobilePremiumSec.cards", { returnObjects: true })

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
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
    <div className="pt-[34px] pb-[34px] px-6 bg-[#020B10]" id="premium">
      <div className="relative flex flex-col gap-12 p-[20px] bg-[#111]">
        <div className="space-y-[12px]">
        <h3
          className="text-[30px] leading-[120%] text-[#FFF] text-center font-[600] tracking-[-1.5px]"
           >
           Get Special Bonuses Starting From $1,000 </h3>
        <p className="text-[15px] leading-[175%] tracking-[-0.32px] mx-auto text-[#fff] text-center font-[400]">
        Buy $BFX during the presale and join the Founder's Club starting from just $1,000. Get your exclusive NFT, BFX Visa Card, bonus tokens, daily USDT staking rewards, and free trading credits. Exclusively available during the presale.
        </p>
        </div>
        <div className="w-[90%] mx-auto">
        <div className="flex justify-between pb-2 items-centers">
          <h4 className="text-[14px] font-[700] text-[#fff]">How much do you want to spend</h4>
          <h4 className="text-[14px] font-[700] text-[#fff]">{tierAmounts[activeIndex]}</h4>
        </div>
         <input
    type="range"
    min={0}
    max={cardsmob.length - 1}
    value={activeIndex}
    onChange={(e) => {
      const newIndex = Number(e.target.value);
      setActiveIndex(newIndex);
      if (mainSwiper) {
        mainSwiper.slideTo(newIndex);
      }
    }}
    className="w-[100%] accent-[#E5AE00] cursor-pointer"
  />
       </div>

        <div className="w-[100%] mx-auto ">
          <div className="relative preswiper">
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
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      loop={false}
      className="mySwiper !min-h-[640px]"
    >
      {cardsmob.map((card, index) => (
        <SwiperSlide key={card.id}>
           <div
                    style={{
                      background: "#111",
                      borderColor: "rgba(230, 175, 3, 0.12)",
                    }}
                    className={`p-[15px] rounded-[8px] flex w-[100%] mx-auto flex-col justify-between ${activeIndex === index
                        ? "border-black"
                        : "border-[rgba(230, 175, 3, 0.12)]"
                      } border !min-h-[590px] max-h-[590px] h-[100%]`}
                  >
                    <div>
                      <img
                        src={card.img}
                        loading="lazy"
                        className="rounded-[8px] w-[100%] max-h-[190px]"
                        alt={card.title}
                      />

                      <div className="flex space-x-3 items-start py-[14px]">
                        <div>
                          <h3 className="text-[#ffff] flex flex-col justify-end font-[600] ">
                            <span
                              className="text-[30px]  leading-[100%]"
                            >
                              {card.title}
                            </span>
                            <span className="text-[#fff] text-start pt-[10px] text-[18.286px] font-[600]">
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
                        {card.points.map((point, index) => (
                          <li
                            key={index}
                            className="mb-1 rounded-[8px] px-[8px] h-[40.719px] flex items-center text-[#fff] text-[14px] font-[400] leading-[127.778%] tracking-[-0.32px]"
                            style={{
                              background: "rgba(124, 124, 124, 0.07)",
                            }}
                          >
                            <img
                              src={point.icon}
                              alt=""
                              className="w-5 h-5 mr-3"
                            />
                            {point.text}
                          </li>
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
                              ? "transparent"
                              : "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
                        }}
                        className="text-black px-[12px] hover:text-[#E5AE00] hover:!bg-transparent text-[14.629px] font-[800] border border-[#E5AE00] hover:border-[#E5AE00] rounded-[8px] w-[100%] h-[49px]"
                      >
                        {card.buttonLabel}
                      </button>
                    </div>
                  </div>
        </SwiperSlide>
      ))}
    </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobilePremiumSec;
