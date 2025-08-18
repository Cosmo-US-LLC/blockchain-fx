import React from "react";
import { useTranslation } from "react-i18next";

import howtoimg from "../assets/HowDoesItSec/howtoimg.webp";

import ernvet2 from "../assets/CryptoExchangeSec/vec (2).png";
import icn1 from "../assets/HowDoesItSec/icns (1).svg";
import icn2 from "../assets/HowDoesItSec/icns (3).svg";
import icn3 from "../assets/HowDoesItSec/icns (2).svg";
import icn4 from "../assets/HowDoesItSec/icns (3).svg";
import icn5 from "../assets/HowDoesItSec/icns (2).svg";
import icn6 from "../assets/HowDoesItSec/icns (1).svg";

const cardItems = [
  {
    id: "01.",
    img: icn1,
    title: "how_does_it_sec.cards.staking_rewards.title",
    description: "how_does_it_sec.cards.staking_rewards.description",
  },
  {
    id: "02.",
    img: icn2,
    title: "how_does_it_sec.cards.buybacks.title",
    description: "how_does_it_sec.cards.buybacks.description",
  },
  {
    id: "03.",
    img: icn3,
    title: "how_does_it_sec.cards.burn.title",
    description: "how_does_it_sec.cards.burn.description",
  },
];

function HowDoesItSec() {
  const { t } = useTranslation();

  return (
    <div className="py-[50px] bg-[#020B10]" id="HowDoesItSec">
      <div className="max-w-[1200px] space-y-[40px] p-[50px] border rounded-[24px] border-[#575757] w-[100%] mx-auto relative overflow-hidden">
        <div className="space-y-[5px]">
          <h3 className="text-[40px] capitalize leading-normal tracking-[-1px] text-[#fff] text-center font-[700]">
            {t("how_does_it_sec.title")}
          </h3>
          <p className="text-[18px] text-[#fff] trackin-[-0.18px] text-center font-[400] px-[40px]">
            <span dangerouslySetInnerHTML={{ __html: t("how_does_it_sec.subtitle_des") }} />
          </p>
        </div>
        <div className="max-w-[1002px] relative z-[99] w-[100%] mx-auto">
          <img src={howtoimg} className="object-cover" alt="" />
        </div>
        <div className="absolute bottom-[-8%] z-[9] right-[0%]">
          <img src={ernvet2} className="" alt="BlockchainFX" />
        </div>
      </div>
      <div className="max-w-[1200px] pt-[50px] w-[100%] mx-auto ">
        <div className="grid grid-cols-3 relative z-[99] gap-x-[19px] gap-y-[19px]">
          {cardItems.map((item) => (
            <div
              key={item.id}
              className=" px-[19px] w-[100%] flex flex-col justify-centetr pt-[20px] pb-[24px]  min-h-[220.384px] bg-[#030F16] rounded-[16px]"
              style={{
                border: "1px solid rgba(230, 175, 3, 0.12)",
              }}
            >
              <div className="flex justify-between pb-[23px] items-center">
                <img src={item.img} className="object-cover" alt="" />
                <p
                  className="text-[56.8px]  leading-[130%] font-[600]"
                  style={{
                    color: "rgba(255, 255, 255, 0.20)",
                  }}
                >
                  {item.id}
                </p>
              </div>
              <div className="min-h-[30px] flex justify-start pb-[10px] items-center">
                <h3 className="text-[24px] text-[#fff] font-[600] leading-[109.316%]">
                  {t(item.title)}
                </h3>
              </div>
              <h4 className="text-[14px]  text-[#fff] font-[400] leading-[135.796%]">
                {t(item.description)}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowDoesItSec;
