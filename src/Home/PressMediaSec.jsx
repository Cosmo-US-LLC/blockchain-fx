import React from "react";

import medai1 from "../assets/Press&Media/media (1).svg";
import medai2 from "../assets/Press&Media/media (2).svg";
import medai3 from "../assets/Press&Media/media (3).svg";

function PressMediaSec() {
  return (
    <div className="pt-[77px] bg-[#fff] space-y-[35px] bg-[#FAFAFA] pb-[80px]">
      <div className="max-w-[1222px] relative space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Press & Media
          </h3>
        </div>
        <div className="flex justify-between">
          <div className="bg-[#fff] max-w-[393px] rounded-[8px]  px-[20px] py-[37px] w-[100%] border border-[#9D9D9D]">
            <div className="space-y-[32px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai1} className="h-[30px]" alt="" />
              </div>
              <p className="text-[16px] text-center leading-[187.5%] font-[400]">
              BlockchainFX can be described as a hybrid of Binance and Robinhood, delivering a seamless trading experience with exceptional speed and simplicity, powered by instant crypto deposits and trading.
              </p>
            </div>
          </div>
          <div className="bg-[#FBFBFB] max-w-[393px] rounded-[8px]  px-[20px] py-[37px] w-[100%] border border-[#9D9D9D]">
            <div className="space-y-[32px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai2} className="h-[50px]" alt="" />
              </div>
              <p className="text-[16px] text-center leading-[187.5%] font-[400]">
              BFX is pioneering a new era of cryptocurrency by seamlessly connecting it to global markets such as Forex, Commodities, and ETFs. This unprecedented integration creates endless trading opportunities for traders.
              </p>
            </div>
          </div>
          <div className="bg-[#fff] max-w-[393px] rounded-[8px]  px-[20px] py-[37px] w-[100%] border border-[#9D9D9D]">
            <div className="space-y-[32px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai3} className="h-[30px]" alt="" />
              </div>
              <p className="text-[16px] text-center leading-[187.5%] font-[400]">
              BlockchainFX gives 560 million crypto users direct access to global financial markets, enabling seamless transitions across asset classes like Silver and BTC in seconds with advanced trading tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressMediaSec;
