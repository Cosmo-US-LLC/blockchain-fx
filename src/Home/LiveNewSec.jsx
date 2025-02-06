import React from "react";

import liveming from "../assets/LiveNews/liveimg.png";

function LiveNewSec() {
  return (
    <div className="py-[50px] bg-[#FFF]">
      <div className="max-w-[934px] w-[100%] mx-auto space-y-[37px]">
        <div className="space-y-[14px]">
          <h3 className="text-[30px] text-center font-[700] leading-[95%] text-[#181A20] tracking-[-1px]">
            Live News Trading Feature
          </h3>
          <p className="text-[14px] font-[400] text-center max-w-[660px] mx-auto w-[100%] leading-[130%] text-[#181A20] tracking-[-0.32px]">
            Stay ahead of the markets with lightning-fast live news.
            Get real-time updates on market developments and make smarter
            trading decisions based on the latest news.
          </p>
        </div>
        <div>
          <img className="" src={liveming} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LiveNewSec;
