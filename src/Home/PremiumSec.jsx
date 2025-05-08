import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Iicon from "../assets/Gateway/i.svg";
import cardimg1 from "../assets/PremiumSec/cardimg (1).webp";
import cardimg2 from "../assets/PremiumSec/cardimg (2).webp";
import cardimg3 from "../assets/PremiumSec/cardimg (3).webp";
import cardimg4 from "../assets/PremiumSec/cardimg (4).webp";
import cardimg5 from "../assets/PremiumSec/cardimg (5).webp";
import cardimg6 from "../assets/PremiumSec/cardimg (6).webp";
import cardimg7 from "../assets/PremiumSec/cardimg (7).webp";
import faq1 from "../assets/PremiumSec/faq (1).svg";
import arw from "../assets/PremiumSec/preawr (1).svg";
import tick from "../assets/PremiumSec/true.png";
import cross from "../assets/PremiumSec/false.png";

const cards = [
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
    img: cardimg1,
    title: "Expert",
    price: "$10,000",
    reviews: [true, true, true, false, false],
    points: [
      { text: "BFX Visa Card", icon: tick },
      { text: "10% BFX Bonus", icon: tick },
      { text: "BFX Staking Rewards", icon: tick },
      { text:  "Daily USDT Rewards", icon: cross },
      { text: "Trading Credits of up to $25k", icon: cross }
    ],
    buttonLabel: "Buy $BFX • $10,000",
  },
  {
    id: 5,
    img: cardimg2,
    title: "Master",
    price: "$25,000",
    reviews: [true, true, true, true, false],
    points: [
      { text: "BFX Visa Card", icon: tick },
      { text: "20% BFX Bonus", icon: tick },
      { text: "Metal BFX Visa Card", icon: tick },
      { text: "$500 Trading Credits", icon: tick },
      { text: "Daily USDT Rewards", icon: cross }
    ],
    buttonLabel: "Buy $BFX • $25,000",
  },
  {
    id: 6,
    img: cardimg2,
    title: "Elite",
    price: "$50,000",
    reviews: [true, true, true, true, false],
    points: [
      { text: "BFX Visa Card", icon: tick },
      { text: "20% BFX Bonus", icon: tick },
      { text: "Metal BFX Visa Card", icon: tick },
      { text: "$500 Trading Credits", icon: tick },
      { text: "Daily USDT Rewards", icon: cross }
    ],
    buttonLabel: "Buy $BFX • $50,000",
  },
  {
    id: 7,
    img: cardimg1,
    title: "Legend",
    price: "$100,000",
    reviews: [true, true, true, true, false],
    points: [
      { text: "BFX Visa Card", icon: tick },
      { text: "80% BFX Bonus", icon: tick },
      { text: "Metal BFX Visa Card", icon: tick },
      { text: "$500 Trading Credits", icon: tick },
      { text: "Daily USDT Rewards", icon: cross }
    ],
    buttonLabel: "Buy $BFX • $100,000",
  },
];
const Bundles = [
  {
    id: 1,
    question: "When will I get my Founder’s Club NFT?",
    answer:
      "<li>You’ll receive your Founder's Club NFT automatically after purchasing the required amount of $BFX.</li> <li>The NFT will appear in your personal dashboard and can be claimed once the presale ends.</li> <li>To access the dashboard, connect the same wallet by clicking 'Connect Wallet' in the top right corner.</li>",
  },
  {
    id: 2,
    question: "When will I get my Bonuses?",
    answer:
      "<li>Your BFX bonuses will be instantly added to your dashboard</li><li>To access your dashboard, click the 'Connect Wallet' button</li>",
  },
  {
    id: 3,
    question: "Can I get an NFT with multiple purchases?",
    answer:
      "<li>Yes, you can buy $BFX in smaller amounts to reach the total required. </li><li>For example, buying $200 worth of $BFX five times will earn you the Novice NFT (valued at $1,000).</li>",
  },
  {
    id: 4,
    question: "Can I upgrade my NFT?",
    tooltip: true,
    answer:
      "<li>Yes, you can upgrade multiple times during the presale.</li> <li>You'll receive rewards and the NFT for the highest level you achieve.</li> <li>After the presale ends, upgrades will no longer be possible.</li>",
  },
];

function PremiumSec() {
  const [openBundles, setOpenBundles] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const [showTooltip, setShowTooltip] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRef = useRef(null);

  const handleDotClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
      setActiveIndex(index);
    }
  };
  const toggleBundles = (id) => {
    setOpenBundles(id === openBundles ? null : id);
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

  return (
    <div className="py-[50px] bg-[#000]" id="premium">
      <div className="max-w-[1200px] w-[100%] space-y-[30px] mx-auto relative">
        <div className="flex justify-between ">
          <div className="space-y-[10px] ">
            <h3 className="text-[40px] leading-[155.556%] text-[#fff] text-start font-[700]">
              Get Special Bonuses Starting From $1,000
            </h3>
            <p className="text-[18px] leading-[150%] text-[#fff] font-[400] tracking-[-0.32px]">
              Buy BFX during the presale and join the Founder's Club starting from just $1,000. <br /> Get your exclusive NFT, BFX Visa Card, bonus tokens, daily USDT staking rewards, <br /> and free trading credits. Exclusively available during the presale.
            </p>
          </div>

          <div className="w-[20%] flex justify-end items-end space-x-2">
            <button className="swiper-button-prev-swp a transform -translate-y-1/2">
              <img className="w-[42.545px] h-[42.545px]" src={arw} alt="" />
            </button>
            <button className="swiper-button-next-swp rotate-[182deg]  transform -translate-y-1/2">
              <img className="w-[42.545px] h-[42.545px]" src={arw} alt="" />
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
              {cards.map((card, index) => (
                <SwiperSlide key={card.id}>
                  <div
                    style={{
                      background: "#111",
                      borderColor: "rgba(230, 175, 3, 0.12)",
                    }}
                    className={`p-[15px] rounded-[8px] flex w-[100%] mx-auto flex-col justify-between ${activeIndex === index
                        ? "border-black"
                        : "border-[rgba(230, 175, 3, 0.12)]"
                      } border !min-h-[610px] max-h-[610px] h-[100%]`}
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
                              className="text-[40px]  leading-[100%]"
                            // style={{
                            //   background:
                            //     "linear-gradient(90deg, #FFF 0%, #030F16 100%)",
                            //   backgroundClip: "text",
                            //   WebkitBackgroundClip: "text",
                            //   WebkitTextFillColor: "transparent",
                            // }}
                            >
                              {card.title}
                            </span>
                            <span className="text-[#fff] text-start pt-[10px] text-[16.27px] font-[600]">
                              {card.price}
                            </span>
                          </h3>
                        </div>

                        {/* <ul className="flex justify-center">
                          {card.reviews.map((isStarFilled, index) =>
                            isStarFilled ? (
                              <li key={index}>
                                <img src={starticn} alt="rating star" />
                              </li>
                            ) : null
                          )}
                        </ul> */}
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
                            className="mb-1 rounded-[8px] px-[8px] h-[40.719px] flex items-center text-[#fff] text-[16.27px] font-[400] leading-[127.778%] tracking-[-0.32px]"
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
                        className="text-black px-[12px] hover:text-[#E5AE00] hover:!bg-transparent text-[15.27px] font-[800] border border-[#E5AE00] hover:border-[#E5AE00] rounded-[8px] w-[100%] h-[49px]"
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
        <div className="max-w-[1200px]  w-[100%] mx-auto bg-[#111] border rounded-[10px] px-[26px] py-[10px] space-y-[10px]"
          style={{
            borderColor: "rgba(230, 175, 3, 0.12)",
          }}
        >
          <div className="flex justify-center relative mt-4 px-6">
            <div className="flex justify-between absolute w-[95%] top-[-45%]">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`w-[21.85px] h-[21.85px] cursor-pointer rounded-full  ${activeIndex === index
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
                  width: `${(activeIndex / (cards.length - 1)) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between pt-[8px] pl-2">
            <div className="w-[100%] max-w-[70px]">
              <h4 className="text-[16px] text-[#fff] font-[600] leading-[115%] text-center">
                Novice
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $1,000+
              </p>
            </div>
            <div className="w-[100%] max-w-[120px]">
              <h4 className="text-[16px] text-[#fff] font-[600] leading-[115%] text-center">
                Advanced
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $2,500+
              </p>
            </div>
            <div className="w-[100%] max-w-[60px]">
              <h4 className="text-[16px] text-[#fff] font-[600] leading-[115%] text-center">
                Pro
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $5,000+
              </p>
            </div>
            <div className="w-[100%] max-w-[120px]">
              <h4 className="text-[16px] text-[#fff] font-[600] leading-[115%] text-center">
                Expert
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $10,000+
              </p>
            </div>
            <div className="w-[100%] max-w-[100px]">
              <h4 className="text-[16px] text-[#fff] font-[600] leading-[115%] text-center">
                Master
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $25,000+
              </p>
            </div>
            <div className="w-[100%] max-w-[70px]">
              <h4 className="text-[16px] text-[#fff] font-[600] leading-[115%] text-center">
                Elite
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $50,000+
              </p>
            </div>
            <div className="w-[100%] max-w-[98px]">
              <h4 className="text-[16px] text-[#fff] font-[600] leading-[115%] text-center">
                Legend
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $100,000+
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumSec;


