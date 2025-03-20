import React from "react";

import medai1 from "../assets/Press&Media/medicn (3).svg";
import medai2 from "../assets/Press&Media/medicn (2).svg";
import medai3 from "../assets/Press&Media/medicn (1).svg";

function PressMediaSec() {
  return (
    <div className="py-[50px] bg-[#fff] space-y-[35px] bg-[#FAFAFA] px-[62px]">
      <div className="max-w-[1076px] relative space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[25px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Press & Media
          </h3>
        </div>
        <div className="flex gap-x-4 justify-center">
          <div className="bg-[#FAFAFA] max-w-[311px] rounded-[8px]  px-[17.6px] py-[37px] w-[100%] ">
            <div className="space-y-[25px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai1} className="h-[30px]" alt="" />
              </div>
              <p className="text-[13px] text-center leading-[187.5%] font-[400]">
              BlockchainFX is quickly becoming the go-to trading platform in 2025
              </p>
            </div>
          </div>
          <div className="bg-[#FAFAFA] max-w-[311px] rounded-[8px]  px-[17px] py-[37px] w-[100%] ">
            <div className="space-y-[25px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai2} className="h-[30px]" alt="" />
              </div>
              <p className="text-[13px] text-center leading-[187.5%] font-[400]">
              BlockchainFX revolutionises the financial trading landscape.
              </p>
            </div>
          </div>
          <div className="bg-[#FAFAFA] max-w-[311px] rounded-[8px]  px-[17.6px] pt-[37px] pb-[29px] w-[100%] ">
            <div className="space-y-[25px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai3} className="h-[30px]" alt="" />
              </div>
              <p className="text-[13px] text-center leading-[187.5%] font-[400]">
              BlockchainFX puts Wall Street in your pocket
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressMediaSec;
