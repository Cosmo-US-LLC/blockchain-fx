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
      {
        text: "BFX Visa Card",
        icon: tick,
        tooltip:
          "Get your BFX Visa Card (virtual and physical), accepted online and in stores worldwide.",
      },
      {
        text: "10% BFX Bonus",
        icon: tick,
        tooltip:
          "Buy this NFT and get extra BFX coins added to your dashboard.",
      },
      {
        text: "BFX Staking Rewards",
        icon: tick,
        tooltip:
          "Receive BFX staking rewards every time someone trades on BlockchainFX.",
      },
      { text: "Daily USDT Rewards", icon: cross, tooltip: "Get USDT rewards every Monday, paid as a percentage of your total BFX staking earnings." },
      {
        text: "Trading Credits of up to $25k",
        icon: cross,
        tooltip:
          "Receive trading credits after the presale to use on BlockchainFX.",
      },
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
      { text: "BFX Visa Card", icon: tick,  tooltip:
          "Get your BFX Visa Card (virtual and physical), accepted online and in stores worldwide.", },
      { text: "20% BFX Bonus", icon: tick,
        tooltip:
          "Buy this NFT and get extra BFX coins added to your dashboard." },
      { text: "BFX Staking Rewards", icon: tick,
        tooltip:
          "Receive BFX staking rewards every time someone trades on BlockchainFX." },
      { text: "$500 Trading Credits", icon: tick,
         tooltip:
          "Receive trading credits after the presale to use on BlockchainFX." },
      { text: "Daily USDT Rewards", icon: cross, tooltip: "Get USDT rewards every Monday, paid as a percentage of your total BFX staking earnings." },
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
      { text: "Metal BFX Visa Card", icon: tick,  tooltip:
          "Get your BFX Visa Card (virtual and physical), accepted online and in stores worldwide.", },
      { text: "30% BFX Bonus", icon: tick, tooltip:
          "Buy this NFT and get extra BFX coins added to your dashboard." },
      { text: "BFX Staking Rewards", icon: tick,
        tooltip:
          "Get USDT rewards every Monday, paid as a percentage of your total BFX staking earnings." 
         },
      { text: "$1000 Trading Credits", icon: tick,
         tooltip:
          "Receive trading credits after the presale to use on BlockchainFX."},
      { text: "Daily USDT Rewards", icon: cross, tooltip: "Get USDT rewards every Monday, paid as a percentage of your total BFX staking earnings." },
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
      { text: "40% BFX Bonus", icon: tick, tooltip:
          "Buy this NFT and get extra BFX coins added to your dashboard." },
      { text: "10% USDT Rewards", icon: tick,
        tooltip:
          "Get USDT rewards every Monday, paid as a percentage of your total BFX staking earnings." },
      { text: "Metal BFX Visa Card", icon: tick,  tooltip:
          "Get your BFX Visa Card (virtual and physical), accepted online and in stores worldwide.", },
      { text: "$2000 Trading Credits", icon: tick,
        tooltip:
          "Receive trading credits after the presale to use on BlockchainFX." },
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
      { text: "50% BFX Bonus", icon: tick, tooltip:
          "Buy this NFT and get extra BFX coins added to your dashboard." },
      { text: "15% USDT Rewards", icon: tick,
        tooltip:
          "Get USDT rewards every Monday, paid as a percentage of your total BFX staking earnings." },
      { text: "Metal BFX Visa Card", icon: tick,  tooltip:
          "Get your Metal BFX Visa Card (virtual and physical), accepted online and in stores worldwide.", },
      { text: "$5000 Trading Credits", icon: tick,
        tooltip:
          "Receive trading credits after the presale to use on BlockchainFX." },
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
      { text: "60% BFX Bonus", icon: tick, tooltip:
          "Buy this NFT and get extra BFX coins added to your dashboard." },
      { text: "20% USDT Rewards", icon: tick, icon: tick,
        tooltip:
          "Get USDT rewards every Monday, paid as a percentage of your total BFX staking earnings." },
      { text: "Metal BFX Visa Card", icon: tick,  tooltip:
          "Get your Metal BFX Visa Card (virtual and physical), accepted online and in stores worldwide." },
      { text: "$10000 Trading Credits", icon: tick, icon: tick,
        tooltip:
          "Receive trading credits after the presale to use on BlockchainFX." },
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
      { text: "Early Access", icon: tick, },
      { text: "80% BFX Bonus", icon: tick, tooltip:
          "Buy this NFT and get extra BFX coins added to your dashboard." },
      { text: "30% USDT Rewards", icon: tick, icon: tick,
        tooltip:
          "Get USDT rewards every Monday, paid as a percentage of your total BFX staking earnings." },
      { text: "18 Karat BFX Visa Card", icon: tick,  tooltip:
          "Get your 18 Karat BFX Visa Card (virtual and physical), accepted online and in stores worldwide." },
      { text: "$25000 Trading Credits", icon: tick,
        tooltip:
          "Receive trading credits after the presale to use on BlockchainFX." },
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
                          // <li
                          //   key={index}
                          //   className="mb-1 rounded-[8px] px-[8px] h-[40.719px] flex items-center text-[#fff] text-[14px] font-[400] leading-[127.778%] tracking-[-0.32px]"
                          //   style={{
                          //     background: "rgba(124, 124, 124, 0.07)",
                          //   }}
                          // >
                          //   <img
                          //     src={point.icon}
                          //     alt=""
                          //     className="w-5 h-5 mr-3"
                          //   />
                          //   {point.text}
                          // </li>
                           <div
                            className="flex mb-1 px-[8px] h-[40.719px] rounded-[8px] justify-between items-center"
                            style={{
                              background: "rgba(124, 124, 124, 0.07)",
                            }}
                          >
                            <li
                              key={index}
                              className=" flex items-center text-[#fff] text-[14px] font-[400] leading-[127.778%] tracking-[-0.32px]"
                            >
                              <img
                                src={point.icon}
                                alt=""
                                className="w-5 h-5 mr-3"
                              />
                              {point.text}
                            </li>
                            <div className="relative group inline-block">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                className="cursor-pointer"
                              >
                                <path
                                  d="M10.5 0C16.023 0 20.5 4.477 20.5 10C20.5 15.523 16.023 20 10.5 20C4.977 20 0.5 15.523 0.5 10C0.5 4.477 4.977 0 10.5 0ZM10.5 1.395C8.21781 1.395 6.0291 2.3016 4.41535 3.91535C2.8016 5.5291 1.895 7.71781 1.895 10C1.895 12.2822 2.8016 14.4709 4.41535 16.0847C6.0291 17.6984 8.21781 18.605 10.5 18.605C12.7822 18.605 14.9709 17.6984 16.5847 16.0847C18.1984 14.4709 19.105 12.2822 19.105 10C19.105 7.71781 18.1984 5.5291 16.5847 3.91535C14.9709 2.3016 12.7822 1.395 10.5 1.395ZM10.355 7.21C10.74 7.21 11.052 7.523 11.052 7.908V15.466C11.0452 15.6464 10.9687 15.8172 10.8386 15.9424C10.7086 16.0676 10.535 16.1376 10.3545 16.1376C10.174 16.1376 10.0004 16.0676 9.87037 15.9424C9.74031 15.8172 9.66383 15.6464 9.657 15.466V7.907C9.657 7.522 9.969 7.21 10.355 7.21ZM10.383 4.419C10.6297 4.419 10.8662 4.51698 11.0406 4.69139C11.215 4.8658 11.313 5.10235 11.313 5.349C11.313 5.59565 11.215 5.8322 11.0406 6.00661C10.8662 6.18102 10.6297 6.279 10.383 6.279C10.1363 6.279 9.8998 6.18102 9.72539 6.00661C9.55098 5.8322 9.453 5.59565 9.453 5.349C9.453 5.10235 9.55098 4.8658 9.72539 4.69139C9.8998 4.51698 10.1363 4.419 10.383 4.419Z"
                                  fill="white"
                                />
                              </svg>
                              {point.tooltip && (
                                <div className="absolute left-[-50px] min-w-[200px] -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-[#020B10] border border-gray-700 text-white text-xs rounded px-2 py-1 z-[9999] ">
                                  {point.tooltip}
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
