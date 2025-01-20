import React from "react";

import chart from "../assets/TokenAllocationSec/chart.png";

function TokenAllocationSec() {
 
  return (
    <div className="pt-[77px] space-y-[35px] bg-[#FAFAFA] pb-[80px]" id="tokenomics">
      <div className="max-w-[953px] relative space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          Token Allocation
          </h3>
          <p className="text-[20px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
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

export default TokenAllocationSec;
