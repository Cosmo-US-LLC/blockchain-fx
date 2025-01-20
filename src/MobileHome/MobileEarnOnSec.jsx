import React from "react";

import eranimg from "../assets/EarnOnSec/mobearnimg.png";


function MobileEarnOnSec() {
  
  return (
    <div className="pt-[24px] pb-[24px] bg-[#FBFBFB]">
     <div className="pt-[14px] pb-[31px] px-[15px] border border-[#B0B0B0] rounded-[13px] space-y-[20px]  w-[90%] mx-auto bg-[#fff]">
        <div className="w-[100%] max-w-[521px] space-y-[20px]">
          <h3 className="text-[32px] font-[700] leading-[114%] text-[#181A20] tracking-[-1px] text-center">
          Earn on every <br /> trade with $BFX
          </h3>
          <p className="text-[15px] max-w-[330px] mx-auto text-[#181A20] font-[400] leading-[153.333%] tracking-[-0.32px] text-center">
          $BFX is the first cryptocurrency to offer daily USDT staking rewards from every trade made on an international multi-asset trading platform. $BFX holders earn returns based on their holdings. The more $BFX you hold, the more USDT you earn.
          </p>
        </div>
        <div className="w-[100%] ">
          <img src={eranimg} className="" alt="" />
        </div>
        <div className="flex justify-center">
         <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[138px] w-[100%] h-[40px]">
          Buy $BFX
            </button>
         </div>
      </div>
    </div>
  );
}

export default MobileEarnOnSec;
