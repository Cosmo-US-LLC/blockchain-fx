import React from "react";

import liveming from "../assets/LiveNews/liveimg.png";

function LiveNewSec() {
  return (
    <div className="pt-[98px]  pb-[92px] bg-[#FFF]">
      <div className="max-w-[1220px] w-[100%] mx-auto ">
          <div className="space-y-[20px]">
            <h3 className="text-[50px] text-center font-[700] leading-[95%] text-[#181A20] tracking-[-1px]">
            Live News Trading Feature
            </h3>
            <p className="text-[20px] font-[400] max-w-[832px] mx-auto w-[100%] leading-[130%] text-[#181A20] tracking-[-0.32px]">
            Stay ahead of the markets with our lightning-fast live news feature. Get real-time updates on market developments and make smarter trading decisions based on the latest news.
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
