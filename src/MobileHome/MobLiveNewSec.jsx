import React from "react";

import liveming from "../assets/LiveNews/liveimgmob1.webp";

function MobLiveNewSec() {
  return (
    <div className="pt-[24px]  pb-[24px] bg-[#030B10]">
      <div className=" w-[90%] mx-auto ">
          <div className="space-y-[20px]">
            <h3 className="text-[30px] text-center font-[700] leading-[95%] text-[#FFF] tracking-[-1px]">
            Live News <br /> Trading Feature
            </h3>
            <p className="text-[15px] font-[400] max-w-[330px] mx-auto text-center leading-[130%] text-[#fff] ">
            Stay ahead of the markets with lightning-fast live news. Get real-time updates on market developments and make smarter trading decisions based on the latest news.
            </p>
          </div>
          <div className="min-h-[1000px] pt-1 flex relative justify-center">
            <img className="absolute" src={liveming} alt="" />
          </div>
      </div>
    </div>
  );
}

export default MobLiveNewSec;
