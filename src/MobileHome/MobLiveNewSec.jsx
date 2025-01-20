import React from "react";

import liveming from "../assets/LiveNews/liveimgmob.png";

function MobLiveNewSec() {
  return (
    <div className="pt-[24px]  pb-[24px] bg-[#FFF]">
      <div className=" w-[90%] mx-auto ">
          <div className="space-y-[20px]">
            <h3 className="text-[32px] text-center font-[700] leading-[95%] text-[#181A20] tracking-[-1px]">
            Live News <br /> Trading Feature
            </h3>
            <p className="text-[15px] font-[400] max-w-[330px] mx-auto text-center leading-[130%] text-[#181A20] ">
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

export default MobLiveNewSec;
