import React from "react";

import chart from "../assets/TokenAllocationSec/chart.webp";

function TokenAllocationSec() {
 
  return (
    <div className="pt-[50px] space-y-[35px] bg-[#FAFAFA] pb-[50px] px-[252px] " id="tokenomics">
      <div className="max-w-[696px] relative space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          Token Allocation
          </h3>
          <p className="text-[14px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          The token allocation is structured to reward early supporters the most.
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
