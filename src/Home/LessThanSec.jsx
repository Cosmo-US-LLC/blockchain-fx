import React from "react";

import graph from "../assets/LessThanSec/Frame 1410125779 (1).png";

function LessThanSec() {
  return (
    <div className="pt-[50px] pb-[50px] bg-[#fff]">
      <div className="max-w-[1200px] space-y-[50px] w-[100%] mx-auto ">
        <div className="space-y-[18px]">
          <h3 className="text-[30px] capitalize font-[700] text-center leading-[58px] text-[#181A20] tracking-[-1px]">
          Bridging Crypto and Finance
          </h3>
          <p className="text-[14px] font-[400] w-[832px] mx-auto text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
            Crypto makes up only 0.87% of global trading volume in 2024,
            averaging $84.3 billion daily. Meanwhile, the Forex market alone
            handles $7.5 trillion per day. This gap presents a major opportunity
            for $BFX to connect crypto users <br /> with the world’s largest financial
            markets.
          </p>
        </div>
        <div className="space-y-[60px]">
          {/* <h4 className="text-[20px] space-y-[50px] font-[700] text-center leading-[130%] text-[#181A20] tracking-[-1px]">
            Average Daily Trading Volume in 2024
          </h4> */}
          <div className="relative">
            <div className="flex justify-center">
              <img src={graph} alt="" className="h-[321px] w-[321px]" />
            </div>
            <p className="text-[#6F6F6F] -top-3 left-[28%] absolute text-[15px] font-[700] tracking-[-0.787px]">
              Bonds: $1.1 Trillion (11.42%)
            </p>
            <p className="text-[#6F6F6F] absolute top-[8%] left-[20%] text-[15px] font-[700] tracking-[-0.787px]">
              U.S. Stocks: $700 Billion (7.27%)
            </p>
            <p className="text-[#6F6F6F] absolute top-[21%] left-[17%] text-[15px] font-[700] tracking-[-0.787px]">
              Commodities: $250 Billion (2.59%)
            </p>
            <p className="text-[#6F6F6F] absolute top-[35%] left-[19%]  text-[15px] font-[700] tracking-[-0.787px]">
              Crypto: $89 Billion (0.87%)
            </p>
            <p className="text-[#6F6F6F] absolute bottom-[5%] right-[23%]  text-[15px] font-[700] tracking-[-0.787px]">
              Forex: $7.5 Trillion (77.85%)
            </p>
          </div>
          <div className="max-w-[887px] pt-[0px] flex justify-between items-center mx-auto w-[100%]">
            <div className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#E9AD2F] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[16.7px] font-[700] tracking-[-1px] ">
                Forex
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#DCDCDC] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[16.7px] font-[700] tracking-[-1px] ">
                Bonds
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#B6B6B6] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[16.7px] font-[700] tracking-[-1px] ">
                US Stock
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#7DBB6C] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[16.7px] font-[700] tracking-[-1px] ">
                Commodities
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#A36E00] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[16.7px] font-[700] tracking-[-1px] ">
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
