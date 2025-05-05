import React, { useState } from "react";
import takeimg1 from "../assets/TradeOver/takeimg (5).webp";
import takeimg2 from "../assets/TradeOver/takeimg (1).png";
import takeimg3 from "../assets/TradeOver/takeimg (2).webp";
import takeimg4 from "../assets/TradeOver/takeimg (3).webp";
import { useTranslation } from "react-i18next";
import takeimg5 from "../assets/TradeOver/takeimg (4).webp";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function MobileTradeOverSec() {
  const { t } = useTranslation();
  const [cardIndex, setCardIndex] = useState(0);

  const cardData = [
    {
      img: takeimg2,
      title: "trade_over_section.stocks.title",
      subtitle: "trade_over_section.stocks.description",
    },
    {
      img: takeimg4,
      title: "trade_over_section.commodities.title",
      subtitle: "trade_over_section.commodities.description",
    },
    {
      img: takeimg1,
      title: "trade_over_section.crypto.title",
      subtitle: "trade_over_section.crypto.description",
    },
    {
      img: takeimg3,
      title: "trade_over_section.forex.title",
      subtitle: "trade_over_section.forex.description",
    },
    {
      img: takeimg5,
      title: "trade_over_section.indices.title",
      subtitle: "trade_over_section.indices.description",
    },
  ];

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
          {t("trade_over_section.title")}
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
                  {t(cardData[cardIndex].title)}
                </h3>
                <p
                  className="text-[15px] font-[400] text-[#fff] leading-[127.778%] tracking-[-0.32px] mt-2 pb-4"
                  dangerouslySetInnerHTML={{ __html: t(cardData[cardIndex].subtitle) }}

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
