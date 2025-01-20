import React from "react";

import rwdimg1 from "../assets/OurAwardSec/rwdimg (1).png";
import rwdimg2 from "../assets/OurAwardSec/rwdimg (2).png";
import rwdimg3 from "../assets/OurAwardSec/rwdimg (3).png";

function OurAwardSec() {
  return (
    <div className="pt-[77px] space-y-[35px] bg-[#FAFAFA] pb-[80px]" id="win">
      <div className="max-w-[1032.65px] relative space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[10px]">
          <h4 className="text-[35px] font-[400] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Multi-Awarded Trading Platform
          </h4>
          <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          Our Awards speak for themselves
          </h3>
        </div>
        <div className="flex justify-between">
         <div className="max-w-[486px] space-y-[10px] px-[80px] max-h-[673px] pt-[35px] rounded-[20px] w-[100%] border border-[#9D9D9D]"
         style={{
            background:"rgba(241, 241, 241)",
            backdropFilter:"blur(49.51113510131836px)"
         }}
         >
            <div className="space-y-[10px] max-w-[324.48px] h-[225px] flex items-center justify-center flex-col w-[100%] relative mx-auto pb-[2.4rem]">
                <h3 className="text-[15px] text-center text-[#181A20] uppercase font-[700]">TheCoinRisE</h3>
                <p className="text-[20px] text-center leading-[115%] uppercase text-[#181A20] font-[400]">Best Trading <br /> Platform <br /> 2025 </p>
                <img src={rwdimg1} className="absolute top-[-3%]"  alt="" />
            </div>
            <div className="flex justify-center">
                <img src={rwdimg2} alt="" />
            </div>
         </div>
         <div className="max-w-[486px] space-y-[10px] px-[60px] max-h-[673px] pt-[35px] rounded-[20px] w-[100%] border border-[#9D9D9D]"
         style={{
            background:"rgba(241, 241, 241)",
            backdropFilter:"blur(49.51113510131836px)"
         }}
         >
            <div className="space-y-[10px] max-w-[324.48px] h-[225px] flex items-center justify-center flex-col w-[100%] relative mx-auto pb-[2.4rem]">
                <h3 className="text-[15px] text-center text-[#181A20] uppercase font-[700]">AltcoinDaily</h3>
                <p className="text-[20px] text-center leading-[115%] uppercase text-[#181A20] font-[400]">Fastest Growing  <br /> Trading Broker <br /> 2025 </p>
                <img src={rwdimg1} className="absolute top-[-3%]"  alt="" />
            </div>
            <div className="">
                <img src={rwdimg3} className="w-[100%]"  alt="" />
            </div>
         </div>

        </div>
      </div>
    </div>
  );
}

export default OurAwardSec;
