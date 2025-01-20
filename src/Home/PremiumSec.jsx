import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import starticn from "../assets/PremiumSec/start.svg";
import arw from "../assets/PremiumSec/arw.svg";
import faq1 from "../assets/PremiumSec/faq (1).svg";
import faq2 from "../assets/PremiumSec/faq (2).svg";
import line from "../assets/PremiumSec/line.png";
import cardimg1 from "../assets/PremiumSec/cardimg (3).png";
import cardimg2 from "../assets/PremiumSec/cardimg (2).png";
import cardimg3 from "../assets/PremiumSec/cardimg (1).png";
import cardimg4 from "../assets/PremiumSec/cardimg (4).png";
import cardimg5 from "../assets/PremiumSec/cardimg (5).png";
import cardimg6 from "../assets/PremiumSec/cardimg (6).png";
import cardimg7 from "../assets/PremiumSec/cardimg (7).png";

const cards = [
  {
    id: 1,
    img: cardimg1,
    title: "Novice",
    price: "$1000",
    reviews: [true, false, false, false, false],
    points: ["Early Access", "10% BFX Bonus"],
    buttonLabel: "Buy $BFX",
  },
  {
    id: 2,
    img: cardimg2,
    title: "Advanced",
    price: "$2500",
    reviews: [true, true, false, false, false],
    points: ["Early Access", "20% BFX Bonus", "$200 Trading Account"],
    buttonLabel: "Buy $BFX",
  },
  {
    id: 3,
    img: cardimg3,
    title: "Pro",
    price: "$5000",
    reviews: [true, true, true, false, false],
    points: ["Early Access", "30% BFX Bonus", "$500 Trading Account"],
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
      "$1200 Bonus Trading Funds",
    ],
    buttonLabel: "Buy $BFX",
  },
  {
    id: 5,
    img: cardimg5,
    title: "Master",
    price: "$25000+",

    reviews: [true, true, true, true, true],
    points: [
      "Early Access",
      "50% BFX Bonus",
      "Daily USDT Rewards",
      "$3000 Bonus Trading Funds",
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
      "$10,000 Bonus Trading Funds",
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
      "$25,000 Bonus Trading Funds",
      "Personalised Portfolio Management",
    ],
    buttonLabel: "Buy $BFX",
  },
];
const Bundles = [
  {
    id: 1,
    question: "When will I get my Trading Bundle NFT?",
    answer:
      "You’ll receive your NFT automatically after purchasing the required amount of $BFX. It will appear in your personal dashboard and can be claimed once the pre-sale concludes.",
  },
  {
    id: 2,
    question: "When will I get my Bonuses?",
    answer:
      "Your BFX bonus will be added to your account immediately. Some of the other features will be available when you claim your NFT after the pre-sale ends. These bonuses are exclusive to the pre-sale and will not be available afterward.",
  },
  {
    id: 3,
    question: "Can I get a Trading Bundle with multiple purchases?",
    answer:
      "Yes, you can purchase $BFX in smaller amounts to reach the total required. For example, if you buy $200 worth of $BFX five times, you'll earn the Novice NFT (worth $1,000). You can also upgrade your NFT by purchasing more tokens to reach the next tier.",
  },
  {
    id: 4,
    question: "Can I upgrade my NFT?",
    answer:
      "Yes, you can upgrade your NFT while the pre-sale is still ongoing. For example, if you spend $1,000 on $BFX, you’ll receive the Novice NFT. To upgrade to the Advanced NFT, you’ll need to purchase an additional $1,500 worth of $BFX. You'll receive the rewards and NFT for the highest level you reach. After the pre-sale ends, upgrades will no longer be possible.",
  },
];

function PremiumSec() {
  const [openBundles, setOpenBundles] = useState(0);
  const toggleBundles = (id) => {
    setOpenBundles(id === openBundles ? null : id);
  };
  return (
    <div className="pt-[53px] pb-[51px]">
      <div className="max-w-[1400px] w-[100%] space-y-[50px] mx-auto relative">
        <div className="space-y-[40px]">
          <h3 className="text-[50px] leading-[100%] text-[#000] text-center font-[700]">
            Premium Trading Bundles
          </h3>
          <p className="text-[18px] leading-[166.667%] max-w-[750px] mx-auto text-[#000] text-center font-[400] tracking-[-0.32px]">
            Buy $BFX during the pre-sale to receive Limited Trading Bundle NFTs
            starting at $1,000.  Enjoy bonus $BFX, daily USDT rewards, early
            access, and extra trading funds <br /> to jumpstart your
            BlockchainFX journey. Available only during the pre-sale!
          </p>
        </div>
        <div className="max-w-[1109px] w-[100%] mx-auto ">
          <div className="relative">
            <button className="swiper-button-prev rotate-[182deg] absolute z-10 !left-[-5%] top-[50%] transform -translate-y-1/2">
              <img className="w-[37.545px] h-[37.545px]" src={arw} alt="" />
            </button>
            <button className="swiper-button-next  absolute z-10 !right-[-5%] top-[50%] transform -translate-y-1/2">
              <img className="w-[37.545px] h-[37.545px]" src={arw} alt="" />
            </button>

            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]}
              loop={false}
              className="mySwiper"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <div
                    style={{
                      background: "rgba(241, 241, 241, 0.36)",
                    }}
                    className="p-[20px] rounded-[8px] flex flex-col justify-between border border-[#9D9D9D] !min-h-[680px] max-h-[680px] h-[100%]"
                  >
                    <div>
                      <img
                        src={card.img}
                        className="rounded-[8px]"
                        alt={card.title}
                      />

                      <div className="flex justify-between py-[15px]">
                        <div>
                          <h3 className="text-[#000] flex flex-col justify-end text-[20px] font-[600] leading-[115%]">
                            {card.title} <br />
                            <span className="text-[#7C7C7C] text-start text-[18px] font-[600]">
                              {card.price}
                            </span>
                          </h3>
                        </div>

                        <ul className="flex justify-center">
                          {card.reviews.map((isStarFilled, index) =>
                            isStarFilled ? (
                              <li key={index}>
                                <img src={starticn} alt="rating star" />
                              </li>
                            ) : null
                          )}
                        </ul>
                      </div>

                      <ul className="text-left mt-[12px]">
                        {card.points.map((point, index) => (
                          <li
                            key={index}
                            className="mb-2 rounded-[8px] px-[10px] h-[48px] flex items-center text-[#181A20] text-[18px] font-[400] leading-[127.778%] tracking-[-0.32px]"
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
                      <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[18px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[152px] w-[100%] h-[58px]">
                        Buy $BFX
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="max-w-[1109px] ] w-[100%] mx-auto bg-[#F5F5F5] border border-[#797979] rounded-[13px] px-[26px] py-[34px] space-y-[20px]">
          <div className="flex justify-center">
            <img src={line} alt="" />
          </div>
          <div className="flex justify-between pl-2">
            <div className="w-[100%] max-w-[70px]">
              <h4 className="text-[20px] text-[#000] font-[600] leading-[115%] text-center">
                Novice
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $1000+
              </p>
            </div>
            <div className="w-[100%] max-w-[120px]">
              <h4 className="text-[20px] text-[#000] font-[600] leading-[115%] text-center">
                Advanced
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $$2500+
              </p>
            </div>
            <div className="w-[100%] max-w-[60px]">
              <h4 className="text-[20px] text-[#000] font-[600] leading-[115%] text-center">
                Pro
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $5000+
              </p>
            </div>
            <div className="w-[100%] max-w-[120px]">
              <h4 className="text-[20px] text-[#000] font-[600] leading-[115%] text-center">
                Expert
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $$10,000+
              </p>
            </div>
            <div className="w-[100%] max-w-[100px]">
              <h4 className="text-[20px] text-[#000] font-[600] leading-[115%] text-center">
                Master
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $25,000+
              </p>
            </div>
            <div className="w-[100%] max-w-[70px]">
              <h4 className="text-[20px] text-[#000] font-[600] leading-[115%] text-center">
                Elite
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $50,000+
              </p>
            </div>
            <div className="w-[100%] max-w-[98px]">
              <h4 className="text-[20px] text-[#000] font-[600] leading-[115%] text-center">
                Legend
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $100,000+
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1109px]  w-[100%] mx-auto bg-[#F5F5F5] border border-[#797979] rounded-[13px] px-[30px]  pt-[40px] pb-[60px] space-y-[20px]">
          <div>
            <h3 className="text-[30px] text-center font-[700] text-[#181A20] tracking-[-1px]">
              Questions About The Trading Bundles
            </h3>
          </div>

          <div>
            {Bundles.map((item) => (
              <div key={item.id} className="border-b border-[#000] py-[24px] ">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleBundles(item.id)}
                >
                  <h3
                    className={`text-[20px] font-[600] leading-[170.05% ] ${
                      openBundles === item.id ? "text-[#E5AE00]" : "text-black"
                    }`}
                  >
                    {item.question}
                  </h3>
                  <span className="text-xl font-bold">
                    {openBundles === item.id ? (
                      <>
                        <img src={faq1} alt="" />
                      </>
                    ) : (
                      <>
                        <img src={faq2} alt="" />
                      </>
                    )}
                  </span>
                </div>
                {openBundles === item.id && (
                  <p className="mt-2 text-[18px] text-[#181A20] font-[400] tracking-[-0.32px]">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumSec;
