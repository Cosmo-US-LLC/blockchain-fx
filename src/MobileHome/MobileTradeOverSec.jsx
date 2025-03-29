import React, { useState } from "react";
import takeimg1 from "../assets/TradeOver/takeimg (5).webp";
import takeimg2 from "../assets/TradeOver/takeimg (1).png";
import takeimg3 from "../assets/TradeOver/takeimg (2).webp";
import takeimg4 from "../assets/TradeOver/takeimg (3).webp";
import takeimg5 from "../assets/TradeOver/takeimg (4).webp";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const cardData = [
  {
    img: takeimg2,
    title: "Stocks",
    subtitle:
      "Apple, Tesla, Nvidia, Netflix, Coca Cola and more. Buy your favorite stock in seconds.",
  },
  {
    img: takeimg4,
    title: "Commodities",
    subtitle:
      "Gold, Silver, Oil, and many more. Diversify your portfolio with a range of valuable raw materials.",
  },
  {
    img: takeimg1,
    title: "Crypto",
    subtitle:
      "Trade BTC, ETH, SOL, PEPE, DOGE, TRUMP, and more with leverage and advanced trading tools.",
  },
  {
    img: takeimg3,
    title: "Forex",
    subtitle:
      "USD, EUR, JPY, GBP, AUD, and more. Trade over 60 currency pairs in the dynamic forex market.",
  },
  {
    img: takeimg5,
    title: "Indices",
    subtitle:
      "Dow Jones, S&P 500, Nasdaq, DAX, CAC, and many more. Trade the most popular indices.",
  },
];

function MobileTradeOverSec() {
  const [cardIndex, setCardIndex] = useState(0);

  const handleNextCard = () => {
    if (cardIndex < cardData.length - 1) {
      setCardIndex(cardIndex + 1);
    }
  };

  const handlePrevCard = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };

  return (
    <div className="pt-[24px] pb-[24px]">
      <div className="w-[90%] mx-auto space-y-[24px]">
        <h3 className="text-[white] text-[36px] font-[600] leading-[114%] leading-[-1px] text-center">
          More Than 500 <br /> Different Assets{" "}
        </h3>
        <div className="">
          {/* Display Card */}
          <div
            className="w-full rounded-[8px] border-[#9D9D9D] w-[100%] mx-auto"
            style={{
              background: "rgba(241, 241, 241, 0.36)",
            }}
          >
            <div className="w-[100%] bg-[#030F16]">
              <img
                src={cardData[cardIndex].img}
                className="w-[100%] rounded-tl-[15px] rounded-tr-[15px] max-h-[173px] object-cover"
                alt=""
              />
              <div className="px-4 border border-1 border-[#E6AF031F] rounded-bl-[15px] rounded-br-[15px]">
                <h3 className="text-[23px] text-[white] font-[600] leading-[140%] tracking-[-0.32px] mt-4">
                  {cardData[cardIndex].title}
                </h3>
                <p
                  className="text-[15px] font-[400] text-[#8497A2] leading-[127.778%] tracking-[-0.32px] mt-2 pb-4"
                  dangerouslySetInnerHTML={{
                    __html: cardData[cardIndex].subtitle,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-center mt-8">
          {/* Previous Button */}
          <div
            onClick={handlePrevCard}
            className={`w-[28px] h-[28px] flex justify-center items-center rounded-[6px] cursor-pointer ${
              cardIndex > 0 ? "bg-[#E5AE00]" : "bg-[#616161]"
            }`}
          >
            <MdKeyboardArrowLeft
              className={`text-${cardIndex > 0 ? "black" : "white"} text-2xl`}
            />
          </div>

          {/* Next Button */}
          <div
            onClick={handleNextCard}
            className={`w-[28px] h-[28px] flex justify-center items-center rounded-[6px] cursor-pointer ${
              cardIndex < cardData.length - 1 ? "bg-[#E5AE00]" : "bg-[#616161]"
            }`}
          >
            <MdKeyboardArrowRight
              className={`text-${
                cardIndex < cardData.length - 1 ? "black" : "white"
              } text-2xl`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileTradeOverSec;
