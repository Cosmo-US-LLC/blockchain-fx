import React from "react";
import { useTranslation } from "react-i18next";

import howtoimg from "../assets/HowDoesItSec/howtoimg.png";

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
    title: "BFX & USDT Staking Rewards",
    description:
      "50% of all fees collected are automatically distributed to BFX holders who stake their coins.",
  },
  {
    id: "02.",
    img: icn2,
    title: "Daily Buybacks",
    description:
      "20% of the fees are used to buy back $BFX daily, helping boost demand and support the price.",
  },
  {
    id: "03.",
    img: icn3,
    title: "Burn BFX Coins",
    description:
      "Half of the bought-back tokens are permanently burned, gradually reducing the supply of $BFX.",
  },
];

function HowDoesItSec() {
  const { t } = useTranslation();

  return (
    <div className="py-[50px] bg-[#020B10]" id="HowDoesItSec">
      <div className="max-w-[1200px] space-y-[40px] p-[50px] border rounded-[24px] border-[#E6AF03] w-[100%] mx-auto relative overflow-none">
        <div className="space-y-[5px]">
          <h3 className="text-[40px] capitalize leading-normal tracking-[-1px] text-[#fff] text-center font-[700]">
            How It Works?
          </h3>
          <p className="text-[18px] text-[#fff] trackin-[-0.18px] text-center font-[400]">
            BlockchainFX is a global exchange where users can trade crypto,
            stocks, forex, ETFs, and more. <br /> Every time someone trades,
            70% of the trading fees go toward the $BFX staking pool, buybacks,
            and token burns.
          </p>
        </div>
        <div className="max-w-[1002px] relative bg-[#000] z-[99] w-[100%] mx-auto">
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
              className=" px-[19px] w-[100%] flex flex-col justify-centetr pt-[20px] pb-[24px] max-h-[223.384px] min-h-[220.384px] bg-[#0B0B0B] rounded-[16px]"
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
