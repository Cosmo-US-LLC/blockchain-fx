import React from "react";

import graph from "../assets/LessThanSec/Frame 1410125779 (1).png";

function MobileLessThanSec() {
 
  return (
    <div className="pt-[24px] pb-[24px] bg-[#e8e8e885]">
      <div className="space-y-[32px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Less than 1% of Global trading is crypto
          </h3>
          <p className="text-[15px] font-[400]  w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
            Crypto makes up only 0.87% of global trading volume in 2024,
            averaging $84.3 billion daily, while the Forex market alone handles
            $7.5 trillion daily. This creates an opportunity for $BFX to bridge
            crypto users with the world’s largest markets.
          </p>
        </div>
        <div className="space-y-[70px]">
          <h4 className="text-[15px] space-y-[70px] font-[700] text-center leading-[130%] text-[#181A20] tracking-[-1px]">
            Average Daily Trading Volume in 2024
          </h4>
          <div className="relative">
            <div className="flex justify-end">
              <img src={graph} className="max-w-[236px] max-h-[236px]" alt="" />
            </div>
            <p className="text-[#6F6F6F] top-[-19%] left-[41%] absolute leading-[110%] text-[15px] font-[700] tracking-[-0.787px]">
              Bonds: <br /> $1.1 trillion (11.42%)
            </p>
            <p className="text-[#6F6F6F] leading-[110%] absolute top-[-8%] left-[4%] text-[15px] font-[700] tracking-[-0.787px]">
              U.S. Stocks: <br /> $700 billion (7.27%)
            </p>
            <p className="text-[#6F6F6F] leading-[110%] absolute top-[11%] left-[0%] text-[15px] font-[700] tracking-[-0.787px]">
              Commodities: <br /> $250 billion (2.59%)
            </p>
            <p className="text-[#6F6F6F] leading-[110%] absolute top-[30%] left-[-%]  text-[15px] font-[700] tracking-[-0.787px]">
              Crypto: <br /> $89 Billion (0.87%)
            </p>
            <p className="text-[#6F6F6F] leading-[110%] absolute bottom-[-19%] right-[13%]  text-[15px] font-[700] tracking-[-0.787px]">
              Forex: <br /> $7.5 trillion (77.85%)
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-[1rem] pt-[20px] mx-auto w-[100%]">
            <div className="flex items-center space-x-2">
              <div className="w-[57px] h-[31px] bg-[#E9AD2F] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[15px] font-[700] tracking-[-1px] ">
                Forex
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[57px] h-[31px] bg-[#DCDCDC] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[15px] font-[700] tracking-[-1px] ">
                Bonds
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[57px] h-[31px] bg-[#B6B6B6] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[15px] font-[700] tracking-[-1px] ">
                US Stock
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[57px] h-[31px] bg-[#7DBB6C] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[15px] font-[700] tracking-[-1px] ">
                Commodities
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[57px] h-[31px] bg-[#A36E00] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[15px] font-[700] tracking-[-1px] ">
                Crypto
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileLessThanSec;
