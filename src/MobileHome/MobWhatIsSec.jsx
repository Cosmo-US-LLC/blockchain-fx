import React from "react";

import whatisimg from "../assets/WhatIsSec/whatisimg.png";

function MobWhatIsSec() {
 
  return (
    <div className="pt-[24px] pb-[24px] bgwhat" id="what-is-bfx">
      <div className="relative -space-y-[30px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          What is $BFX?
          </h3>
          <p className="text-[15px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          $BFX is BlockchainFX's native coin, offering exclusive early access and the chance to be part of the platform’s journey from the ground up as it grows in popularity.
          </p>
        </div>
       <div className="max-w-[664px] w-[100%] mx-auto pt-[2rem] pb-[4rem]">
        <img src={whatisimg} className="" alt="" />
       </div>
       <div className="flex justify-center items-center ">
            <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[102px] w-[100%] h-[40px]">
              Buy $BFX
            </button>
          </div>
      </div>
    </div>
  );
}

export default MobWhatIsSec;
