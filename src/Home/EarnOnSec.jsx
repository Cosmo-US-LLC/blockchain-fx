import React from "react";

import eranimg from "../assets/EarnOnSec/earnimg.png";


function EarnOnSec() {
  
  return (
    <div className="pt-[56px] pb-[45px] bg-[#FBFBFB]">
     <div className="max-w-[1400px] w-[100%] mx-auto relative">
     <div className="max-w-[1220px] py-[90px] px-[46px] border border-[#B0B0B0] rounded-[13px] space-x-[3rem] flex justify-between w-[100%] mx-auto bg-[#fff]">
        <div className="w-[50%]">
          <img src={eranimg} className="absolute top-[-1%] left-[8%]" alt="" />
        </div>
        <div className="w-[50%] max-w-[521px] space-y-[40px]">
          <h3 className="text-[50px] font-[700] leading-[114%] text-[#181A20] leading-[-1px] text-start">
          Earn on every <br /> trade with $BFX
          </h3>
          <p className="text-[18px] text-[#181A20] font-[400] leading-[127.778%] leading-[-0.32px] text-start">
          $BFX is the first cryptocurrency to offer daily USDT staking rewards from every trade made on an international multi-asset trading platform. $BFX holders earn returns based on their holdings. The more $BFX you hold, the more USDT you earn.
          </p>
          <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[18px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[152px] w-[100%] h-[58px]">
          Buy $BFX
            </button>
        </div>
      </div>
     </div>
    </div>
  );
}

export default EarnOnSec;
