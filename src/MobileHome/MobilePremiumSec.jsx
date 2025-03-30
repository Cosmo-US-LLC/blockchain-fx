import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Iicon from "../assets/Gateway/i.svg";

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
    title: "Novice",
    price: "$1,000",
    reviews: [true, false, false, false, false],
    points: ["Early Access", "10% BFX Bonus", "BFX Visa Card"],
    buttonLabel: "Buy $BFX • $1,000",
  },
  {
    id: 2,
    img: cardimg2,
    title: "Advanced",
    price: "$2,500",
    reviews: [true, true, false, false, false],
    points: [
      "Early Access",
      "20% BFX Bonus",
      "Metal BFX Visa Card",
      "$500 Trading Credits",
    ],
    buttonLabel: "Buy $BFX • $2,500",
  },
  {
    id: 3,
    img: cardimg3,
    title: "Pro",
    price: "$5,000",
    reviews: [true, true, true, false, false],
    points: [
      "Early Access",
      "30% BFX Bonus",
      "Metal BFX Visa Card",
      "$1000 Trading Credits",
    ],
    buttonLabel: "Buy $BFX • $5,000",
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
      "Metal BFX Visa Card",
      "$2000 Bonus Trading Credits",
    ],
    buttonLabel: "Buy $BFX • $10,000",
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
      "Metal BFX Visa Card",
      "$5000 Bonus Trading Credits",
    ],
    buttonLabel: "Buy $BFX • $25,000",
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
      "20% USDT Rewards",
      "Metal BFX Visa Card",
      "$10,000 Bonus Trading Credits",
    ],
    buttonLabel: "Buy $BFX • $50,000",
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
      "30% USDT Rewards",
      "18 Karat BFX Visa Card",
      "$25,000 Trading Credits",
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
      "<li>Your BFX bonuses will be instantly added to your dashboard.</li> <li>To access your dashboard, click the 'Connect Wallet' button</li>",
  },
  {
    id: 3,
    question: "Can I get an NFT with multiple purchases?",
    answer:
      "<li>Yes, you can buy $BFX in smaller amounts to reach the total required.</li> <li>For example, buying $200 worth of $BFX five times will earn you the Novice NFT (valued at $1,000).</li>",
  },
  {
    id: 4,
    question: "Can I upgrade my NFT?",
    tooltip: true,
    answer:
      "<li>Yes, you can upgrade multiple times during the presale.</li><li>You'll receive rewards and the NFT for the highest level you achieve.</li> <li> After the presale ends, upgrades will no longer be possible.</li>",
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
    <div className="pt-[34px] pb-[34px] px-6 bg-[#030B10]" id="premium">
      <div className="relative flex flex-col gap-12">
        <div className="space-y-[12px]">
          <h3 className="text-[30px] leading-[120%] text-[#FFF] text-center font-[600] tracking-[-1.548px]">
            Limited Founder's <br /> Club Membership
          </h3>
          <p className="text-[15px]   leading-[175%]  tracking-[-0.32px] mx-auto text-[#ACC4D1] text-center font-[400]">
            Buy $BFX during the pre-sale and get Founder's Club NFTs starting at
            only $1,000! Enjoy early access, exclusive memberships, bonus $BFX,
            daily staking rewards in BFX and USDT, plus extra trading credits.
            Available only during the pre-sale!
          </p>
        </div>

        <div className="w-[90%] mx-auto">
          <div className="relative">
            <button className="swiper-button-prev2   rotate-[182deg] absolute z-10 !left-[-10%] !top-[50%] transform -translate-y-1/2">
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
                      } else {
                      }
                    }}
                    className={` flex flex-col items-center justify-center w-[57px] py-2 bg-[#131C22] rounded-[3.585px]   relative z-[90] cursor-pointer ${
                      activeIndex === index
                        ? "border"
                        : "border border-[#E5AE00]"
                    }`}
                  >
                    <h4 className="text-[10px] text-[#FFF] font-[600] leading-[115%] text-center">
                      {tier}
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
                  <div className="p-3 rounded-[16px] max-w-[296px] mx-auto flex flex-col justify-between border border-[#9D9D9D] !min-h-[530px] max-h-[480px] h-[100%]">
                    <div>
                      <img
                        loading="lazy"
                        src={card.img}
                        className="rounded-[4px]"
                        alt={card.title}
                      />

                      <div className="flex justify-between pt-[15px] pb-[10px]">
                        <div>
                          <div className="text-[#FFF] space-y-[12px] flex flex-col justify-end text-[16px] font-[600] leading-[115%]">
                            <div className="flex items-center justify-center gap-6">
                              <h3 className="text-transparent text-[30px] font-[800] leading-[130%] tracking-[-2.745px] bg-clip-text bg-gradient-to-r from-white to-[#030F16]">
                                {card.title}
                              </h3>

                              <h4 className="text-center rounded-full w-[80px] text-[12px] px-2 py-1 border-[#8497A2] ml-1 border font-[600]">
                                NFT
                              </h4>
                            </div>
                            <span className="text-[#FFF] text-start text-[15px] font-[600]">
                              {card.price}
                            </span>
                          </div>
                        </div>

                        {/* <ul className="flex items-center justify-center">
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
                        </ul> */}
                      </div>

                      <ul className="text-left mt-[12px]">
                        {card.points.map((point, index) => (
                          <li
                            key={index}
                            className="mb-2 rounded-[8px] px-[5px] h-[31px] flex items-center text-[#8497A2] text-[14px] font-[400] leading-[127.778%] tracking-[-0.32px]"
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
                      {/* <a
                        href="https://forms.gle/MqeUsLeJPwxt4gfC7"
                        target="_blank"
                        rel="noopener noreferrer"
                      > */}
                        <button
                          className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] w-[100%] h-[40px]"
                          onClick={handleScroll}
                        >
                          {card.buttonLabel}
                        </button>
                      {/* </a> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-[30px] text-center font-[600] text-[#FFF] leading-[120%] tracking-[-2.548px]">
            Questions About <br /> The Founder’s Club
          </h3>

          <div className="flex flex-col gap-4">
            {Bundles.map((item, index) => (
              <div
                key={item.id}
                className={`py-4 px-4 border bg-[#030F16] border-[#E6AF031F] rounded-[16px] ${
                  index !== Bundles.length - 1 ? "border-b border-[#000]" : ""
                }`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleBundles(item.id)}
                >
                  <h3
                    className={`text-[14px] font-[600] leading-[170.05% ] tracking-[-0.9px] ${
                      openBundles === item.id ? "text-[#FFF]" : "text-[#FFF]"
                    }`}
                  >
                    {item.question}
                  </h3>
                  <span>
                    <img
                      src={qArw}
                      alt=""
                      className={`h-[20px] w-[20px] transition-transform duration-300 ${
                        openBundles === item.id ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </div>
                {openBundles === item.id && (
                  <div className="relative">
                    <p className="relative mt-2 text-[15px] text-[#8497A2] font-[400] tracking-[-0.32px] inline-flex items-center">
                      <span
                        className="pr-3 leading-[130%] space-y-[10px]"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      ></span>

                      {item.tooltip && (
                        <span className="absolute top-[5%] right-[0%]">
                          <div
                            className="relative cursor-pointer"
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                          >
                            <img
                              className="w-[11.7px]"
                              src={Iicon}
                              alt="Info Icon"
                            />
                            {showTooltip && (
                              <div className="absolute top-full left-[-140px] transform -translate-x-1/2 mt-2 z-[99] bg-[#808080] w-[300px] text-start leading-[110%] text-[#fff] text-[10px] font-[400] rounded-md p-[10px] shadow-lg whitespace-nowrap">
                                <span className="absolute top-[8px] left-[4px]">
                                  .
                                </span>{" "}
                                For example, buying $1,000 of $BFX gives you the
                                Novice NFT. <br />
                                <span className="absolute top-[18px] left-[4px]">
                                  .
                                </span>{" "}
                                Spend $1,500 more to upgrade to Advanced. <br />
                                <span className="absolute top-[29px] left-[4px]">
                                  .
                                </span>{" "}
                                You can keep upgrading until you reach the final
                                Legend NFT.
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
