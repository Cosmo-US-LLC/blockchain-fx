import React from "react";

import chart from "../assets/TokenAllocationSec/chart.png";

function MobTokenAllocationSec() {
 
  return (
    <div className="pt-[24px] bg-[#FAFAFA] pb-[24px]" id="tokenomics">
      <div className="relative space-y-[20px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          Token Allocation
          </h3>
          <p className="text-[15px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          Our token allocation is designed to give back the most to our early supporters.
          </p>
        </div>
       <div className="w-[100%] mx-auto ">
        <img src={chart} className="" alt="" />
       </div>
      </div>
    </div>
  );
}

export default MobTokenAllocationSec;
