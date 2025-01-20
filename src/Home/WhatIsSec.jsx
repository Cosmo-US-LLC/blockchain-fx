import React from "react";

import whatisimg from "../assets/WhatIsSec/whatisimg.png";

function WhatIsSec() {
 
  return (
    <div className="pt-[77px] space-y-[35px] pb-[45px] bgwhat" id="what-is-bfx">
      <div className="max-w-[866px] relative -space-y-[30px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          What is $BFX?
          </h3>
          <p className="text-[20px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          $BFX is BlockchainFX's native coin, offering exclusive early access and the chance to be part of the platform’s journey from the ground up as it grows in popularity.
          </p>
        </div>
       <div className="max-w-[664px] w-[100%] mx-auto pt-[2rem] pb-[4rem]">
        <img src={whatisimg} className="!ml-[15px]" alt="" />
       </div>
          <div className="flex justify-center">
          <button className="text-white bg-[#E5AE00]  px-[12px] hover:text-black hover:bg-transparent text-[18px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[152px] w-[100%] h-[58px]">
          Buy $BFX
            </button>
          </div>
      </div>
    </div>
  );
}

export default WhatIsSec;
