import React from "react";

import graph from "../assets/LessThanSec/Frame 1410125779 (1).png";

function LessThanSec() {
 
  return (
    <div className="pt-[98px] space-y-[35px] pb-[92px] bg-[#e8e8e885]">
      <div className="max-w-[1220px] space-y-[60px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Less than 1% of Global trading is crypto
          </h3>
          <p className="text-[20px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
            Crypto makes up only 0.87% of global trading volume in 2024,
            averaging $84.3 billion daily, while the Forex market alone handles
            $7.5 trillion daily. This creates an opportunity for $BFX to bridge
            crypto users with the world’s largest markets.
          </p>
        </div>
        <div className="space-y-[70px]">
          <h4 className="text-[20px] space-y-[70px] font-[700] text-center leading-[130%] text-[#181A20] tracking-[-1px]">
            Average Daily Trading Volume in 2024
          </h4>
          <div className="relative">
            <div className="flex justify-center">
              <img src={graph} alt="" />
            </div>
            <p className="text-[#6F6F6F] top-0 left-[18%] absolute text-[20px] font-[700] tracking-[-0.787px]">
              Bonds: $1.1 trillion (11.42%)
            </p>
            <p className="text-[#6F6F6F] absolute top-[12%] left-[10%] text-[20px] font-[700] tracking-[-0.787px]">
              U.S. Stocks: $700 billion (7.27%)
            </p>
            <p className="text-[#6F6F6F] absolute top-[24%] left-[6%] text-[20px] font-[700] tracking-[-0.787px]">
              Commodities: $250 billion (2.59%)
            </p>
            <p className="text-[#6F6F6F] absolute top-[35%] left-[10%]  text-[20px] font-[700] tracking-[-0.787px]">
              Crypto: $89 Billion (0.87%)
            </p>
            <p className="text-[#6F6F6F] absolute bottom-[7%] right-[13%]  text-[20px] font-[700] tracking-[-0.787px]">
              Forex: $7.5 trillion (77.85%)
            </p>
          </div>
          <div className="max-w-[887px] pt-[80px] flex justify-between items-center mx-auto w-[100%]">
            <div className="flex items-center space-x-2">
              <div className="w-[36px] h-[36px] bg-[#E9AD2F] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[20px] font-[700] tracking-[-1px] ">
                Forex
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[36px] h-[36px] bg-[#DCDCDC] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[20px] font-[700] tracking-[-1px] ">
                Bonds
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[36px] h-[36px] bg-[#B6B6B6] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[20px] font-[700] tracking-[-1px] ">
                US Stock
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[36px] h-[36px] bg-[#7DBB6C] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[20px] font-[700] tracking-[-1px] ">
                Commodities
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[36px] h-[36px] bg-[#A36E00] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[20px] font-[700] tracking-[-1px] ">
                Crypto
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessThanSec;
