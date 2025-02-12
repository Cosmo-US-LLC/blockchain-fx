import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Iicon from "../assets/Gateway/i.svg";

import "swiper/css";
import "swiper/css/navigation";
import starticn from "../assets/PremiumSec/start.svg";
import arw from "../assets/PremiumSec/arw.svg";
import faq1 from "../assets/PremiumSec/faq (1).svg";
import faq2 from "../assets/PremiumSec/faq (2).svg";
import line from "../assets/PremiumSec/line.png";
import cardimg1 from "../assets/PremiumSec/cardimg (1).webp";
import cardimg2 from "../assets/PremiumSec/cardimg (2).webp";
import cardimg3 from "../assets/PremiumSec/cardimg (3).webp";
import cardimg4 from "../assets/PremiumSec/cardimg (4).webp";
import cardimg5 from "../assets/PremiumSec/cardimg (5).webp";
import cardimg6 from "../assets/PremiumSec/cardimg (6).webp";
import cardimg7 from "../assets/PremiumSec/cardimg (7).webp";

const cardsmob = [
  {
    id: 1,
    img: cardimg1,
    title: "Novice",
    price: "$1,000",
    reviews: [true, false, false, false, false],
    points: ["Early Access", "10% BFX Bonus"],
    buttonLabel: "Buy $BFX",
  },
  {
    id: 2,
    img: cardimg2,
    title: "Advanced",
    price: "$2,500",
    reviews: [true, true, false, false, false],
    points: ["Early Access", "20% BFX Bonus", "$500 Trading Credits"],
    buttonLabel: "Buy $BFX",
  },
  {
    id: 3,
    img: cardimg3,
    title: "Pro",
    price: "$5,000",
    reviews: [true, true, true, false, false],
    points: ["Early Access", "30% BFX Bonus", "$1000 Trading Credits"],
    buttonLabel: "Buy $BFX",
  },
  {
    id: 4,
    img: cardimg4,
    title: "Expert",
    price: "$10,000+",

    reviews: [true, true, true, true, false],
    points: [
      "Early Access",
      "40% BFX Bonus",
      "Daily USDT Rewards",
      "$2000 Bonus Trading Credits",
    ],
    buttonLabel: "Buy $BFX",
  },
  {
    id: 5,
    img: cardimg5,
    title: "Master",
    price: "$25,000+",

    reviews: [true, true, true, true, true],
    points: [
      "Early Access",
      "50% BFX Bonus",
      "Daily USDT Rewards",
      "$5000 Bonus Trading Credits",
    ],
    buttonLabel: "Buy $BFX",
  },
  {
    id: 6,
    img: cardimg6,
    title: "Elite",
    price: "$50,000+",

    reviews: [true, true, true, true, true, true],
    points: [
      "Early Access",
      "60% BFX Bonus",
      "Daily USDT Rewards",
      "$10,000 Bonus Trading Credits",
    ],
    buttonLabel: "Buy $BFX",
  },
  {
    id: 7,
    img: cardimg7,
    title: "Legend",
    price: "$100,000+",

    reviews: [true, true, true, true, true, true, true],
    points: [
      "Early Access",
      "80% BFX Bonus",
      "Daily USDT Rewards",
      "$25,000 Bonus Trading Credits",
      "Personalised Portfolio Management",
    ],
    buttonLabel: "Buy $BFX",
  },
];
const Bundles = [
  {
    id: 1,
    question: "When will I get my Founder’s Club NFT?",
    answer:
      "You’ll receive your NFT automatically after purchasing the required amount of $BFX. It will appear in your personal dashboard and can be claimed once the pre-sale concludes.",
  },
  {
    id: 2,
    question: "When will I get my Bonuses?",
    answer:
      "Your BFX bonuses will be instantly added to your dashboard. To access your dashboard, click the 'Connect Wallet' button",
  },
  {
    id: 3,
    question: "Can I get an NFT with multiple purchases?",
    answer:
      "Yes, you can buy $BFX in smaller amounts to reach the total required.For example, buying $200 worth of $BFX five times will earn you the Novice NFT (valued at $1,000).",
  },
  {
    id: 4,
    question: "Can I upgrade my NFT?",
    tooltip: true,
    answer:
      "Yes, you can upgrade multiple times during the presale. <br/> You'll receive rewards and the NFT for the highest level you achieve. <br/> After the presale ends, upgrades will no longer be possible.",
  },
];

function MobilePremiumSec() {
  const [openBundles, setOpenBundles] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const [mainSwiper, setMainSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleBundles = (id) => {
    setOpenBundles(id === openBundles ? null : id);
  };

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
    <div className="pt-[24px] pb-[24px]" id="premium">
      <div className="w-[90%] space-y-[20px] mx-auto relative">
        <div className="space-y-[12px]">
          <h3 className="text-[30px] leading-[100%] text-[#000] text-center font-bold">
            Limited <br /> Founder's Club Membership
          </h3>
          <p className="text-[15px] leading-[153.333%] max-w-[750px] mx-auto text-[#000] text-center font-[400] tracking-[-0.32px]">
          Buy $BFX during the pre-sale and get Founder's Club NFTs starting at only $1,000!  Enjoy early access, exclusive memberships, bonus $BFX, daily staking rewards in BFX and USDT, plus extra trading credits. Available only during the pre-sale!

          </p>
        </div>
        <div className="w-[100%] mx-auto ">
          <div className="relative">
            <button className="swiper-button-prev-1 rotate-[182deg] absolute z-10 !left-[0%] top-[50%] transform -translate-y-1/2">
              <img className="w-[37.545px] h-[37.545px]" src={arw} alt="" />
            </button>
            <button className="swiper-button-next-1  absolute z-10 !right-[0%] top-[50%] transform -translate-y-1/2">
              <img className="w-[37.545px] h-[37.545px]" src={arw} alt="" />
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
                  <div
                    style={{
                      background: "rgba(241, 241, 241, 0.36)",
                    }}
                    className="p-[15px] rounded-[4px] max-w-[261px] mx-auto flex flex-col justify-between border border-[#9D9D9D] !min-h-[500px] max-h-[500px] h-[100%]"
                  >
                    <div>
                      <img
                        src={card.img}
                        className="rounded-[4px]"
                        alt={card.title}
                      />

                      <div className="flex justify-between pt-[15px] pb-[10px]">
                        <div>
                          <h3 className="text-[#000] flex flex-col justify-end text-[16px] font-[600] leading-[115%]">
                            {card.title} <br />
                            <span className="text-[#7C7C7C] text-start text-[15px] font-[600]">
                              {card.price}
                            </span>
                          </h3>
                        </div>

                        <ul className="flex justify-center items-center">
                          {card.reviews.map((isStarFilled, index) =>
                            isStarFilled ? (
                              <li key={index}>
                                <img
                                  src={starticn}
                                  className="h-[18px]"
                                  alt="rating star"
                                />
                              </li>
                            ) : null
                          )}
                        </ul>
                      </div>

                      <ul className="text-left mt-[12px]">
                        {card.points.map((point, index) => (
                          <li
                            key={index}
                            className="mb-2 rounded-[8px] px-[5px] h-[31px] flex items-center text-[#181A20] text-[14px] font-[400] leading-[127.778%] tracking-[-0.32px]"
                            style={{
                              background: "rgba(124, 124, 124, 0.07)",
                            }}
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-start">
                      <button
                        className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] w-[100%] h-[40px]"
                        onClick={handleScroll}
                      >
                        Buy $BFX
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-[80%] mx-auto">
          <div className="relative">
            <button className="swiper-button-prev2 rotate-[182deg] absolute z-10 !left-[-11%] !top-[50%] transform -translate-y-1/2">
              <img className="w-[28.545px] h-[28.545px]" src={arw} alt="" />
            </button>
            <button className="swiper-button-next2  absolute z-10 !right-[-11%] !top-[50%] transform -translate-y-1/2">
              <img className="w-[28.545px] h-[28.545px]" src={arw} alt="" />
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
                      } else {
                      }
                    }}
                    className={`w-[100%] bg-[#F5F5F5] rounded-[3.585px] py-[10px] relative z-[90] cursor-pointer ${
                      activeIndex === index ? "border" : "border border-[#F5F5F5]"
                    }`}
                  >
                    <h4 className="text-[10px] text-[#000] font-[600] leading-[115%] text-center">
                      {tier}
                    </h4>
                    <p className="text-[#7C7C7C] font-[400] text-[9px] text-center">
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
        <div className="w-[90%] mx-auto bg-[#F5F5F5] border border-[#797979] rounded-[13px] px-[12px]  py-[20px] space-y-[20px]">
          <div>
            <h3 className="text-[24px] text-center font-[700] text-[#181A20] tracking-[-1px]">
              Questions About <br /> The Founder’s Club
            </h3>
          </div>

          <div>
            {Bundles.map((item, index) => (
              <div
                key={item.id}
                className={`py-[14px] ${
                  index !== Bundles.length - 1 ? "border-b border-[#000]" : ""
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleBundles(item.id)}
                >
                  <h3
                    className={`text-[12px] font-[600] leading-[170.05% ] ${
                      openBundles === item.id ? "text-[#E5AE00]" : "text-black"
                    }`}
                  >
                    {item.question}
                  </h3>
                  <span className="">
                    {openBundles === item.id ? (
                      <>
                        <img className="h-[20px] w-[20px]" src={faq1} alt="" />
                      </>
                    ) : (
                      <>
                        <img className="h-[20px] w-[20px]" src={faq2} alt="" />
                      </>
                    )}
                  </span>
                </div>
                {openBundles === item.id && (
                  <div className="relative">
                    <p
                      className="mt-2 text-[15px] text-[#181A20] font-[400] tracking-[-0.32px]"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    ></p>
                    {item.tooltip && (
                      <div className="absolute top-[21%] z-[9] left-[30%]">
                        <div
                          className="relative"
                          onMouseEnter={() => setShowTooltip(true)}
                          onMouseLeave={() => setShowTooltip(false)}
                        >
                          <img
                            className="w-[11.7px]"
                            src={Iicon}
                            alt="Info Icon"
                          />
                          {showTooltip && (
                            <div className="absolute top-[100%] left-[-500%] z-[99] bg-[#808080] w-[260px] text-start leading-[110%] text-[#fff] text-[10px] font-[400] rounded-md p-[10px] shadow-lg">
                              <span className="absolute top-[8px] left-[4px]">
                                .
                              </span>{" "}
                              For example, buying $1,000 of $BFX gives you the
                              Novice NFT. <br />{" "}
                              <span className="absolute top-[28px] left-[4px]">
                                .
                              </span>{" "}
                              Spend $1,500 more to upgrade to Advanced. <br />{" "}
                              <span className="absolute top-[40px] left-[4px]">
                                .
                              </span>{" "}
                              You can keep upgrading until you reach the final
                              Legend NFT.
                            </div>
                          )}
                        </div>
                      </div>
                    )}
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
