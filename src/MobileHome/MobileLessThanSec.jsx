import React from "react";

import graph from "../assets/LessThanSec/Frame 1410125779 (1).png";
import ellipse from "../assets/EarnOnSec/Ellipse 3.png";

function MobileLessThanSec() {
  return (
    <div className="pt-[24px] pb-[24px] bg-[#030F16] overflow-hidden">
      <div className="space-y-[32px] py-4 px-2 w-[90%] mx-auto border-[1px] border-[#2B2B2B] relative overflow-hidden">
        <img
          src={ellipse}
          className="max-w-[400px] h-[450px]  absolute top-[0%] left-[0%]  "
          alt=""
        />

        <div className="space-y-[20px]">
          <h3 className="text-[30px] capitalize font-[600] text-center leading-[120%] text-[#FFF] tracking-[-2.548px]">
            Bridging Crypto and Finance
          </h3>
          <p className="text-[15px] font-[400]  w-[100%] text-center leading-[175%] text-[#8497A2] tracking-[-0.32px]">
            Crypto makes up only 0.87% of global trading volume in 2024,
            averaging $84.3 billion daily. Meanwhile, the Forex market alone
            handles $7.5 trillion per day. This gap presents a major opportunity
            for $BFX to connect crypto users with the world’s largest financial
            markets.
          </p>
        </div>
        <div className="space-y-[70px]">
          <h4 className="text-[15px] space-y-[70px] font-[600] text-center leading-[130%] text-[#6F6F6F] tracking-[-0.617px]">
            Average Daily Trading Volume in 2024
          </h4>
          <div className="relative">
            <div className="flex justify-end">
              <img src={graph} className="max-w-[236px] max-h-[236px]" alt="" />
            </div>
            <p className="text-[#6F6F6F] top-[-14%] left-[41%] absolute leading-[110%] text-[10px] font-[700] tracking-[-0.787px]">
              Bonds: <br /> $1.1 trillion (11.42%)
            </p>
            <p className="text-[#6F6F6F] leading-[110%] absolute top-[-1%] left-[16%] text-[10px] font-[700] tracking-[-0.787px]">
              U.S. Stocks: <br /> $700 billion (7.27%)
            </p>
            <p className="text-[#6F6F6F] leading-[110%] absolute top-[17%] left-[10%] text-[10px] font-[700] tracking-[-0.787px]">
              Commodities: <br /> $250 billion (2.59%)
            </p>
            <p className="text-[#6F6F6F] leading-[110%] absolute top-[31%] left-[7%]  text-[10px] font-[700] tracking-[-0.787px]">
              Crypto: <br /> $89 Billion (0.87%)
            </p>
            <p className="text-[#6F6F6F] leading-[110%] absolute bottom-[-19%] right-[13%]  text-[10px] font-[700] tracking-[-0.787px]">
              Forex: <br /> $7.5 trillion (77.85%)
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-[1rem] pt-[20px] mx-auto w-[100%]">
            <div className="flex items-center space-x-2">
              <div className="w-[57px] h-[31px] bg-[#E9AD2F] rounded-[4px]"></div>
              <p className="text-[#8497A2] text-[15px] font-[600] tracking-[0.247px] ">
                Forex
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[57px] h-[31px] bg-[#DCDCDC] rounded-[4px]"></div>
              <p className="text-[#8497A2] text-[15px] font-[600] tracking-[0.247px] ">
                Bonds
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[57px] h-[31px] bg-[#B6B6B6] rounded-[4px]"></div>
              <p className="text-[#8497A2] text-[15px] font-[600] tracking-[0.247px] ">
                US Stock
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[57px] h-[31px] bg-[#7DBB6C] rounded-[4px]"></div>
              <p className="text-[#8497A2] text-[15px] font-[600] tracking-[0.247px] ">
                Commodities
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[57px] h-[31px] bg-[#A36E00] rounded-[4px]"></div>
              <p className="text-[#8497A2] text-[15px] font-[600] tracking-[0.247px] ">
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
