import React from "react";

import liveming from "../assets/LiveNews/liveimg2.png";
import black from "../assets/GetInFirst/black2.png";

function LiveNewSec() {
  return (
    <div className="pt-[30px] px-[80px] pb-[60px] bg-[#020B10]">
      <div className="max-w-[1280px] py-[50px] rounded-xl w-[100%] mx-auto space-y-[10px]  bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${black})` }}>
      
       
        <div className="space-y-[14px]">
          <h3 className="text-[48px] text-center font-[600] leading-[120%] text-white tracking-[-3.36px]">
          Get In First and Gain the Edge          </h3>
          <p className="text-[18px] font-[400] text-center max-w-[836px] mx-auto w-[100%] leading-[155%] text-[#fff] tracking-[-0.36px]">
          Stay ahead of the markets with integrated lightning-fast live news. Get real-time updates to make smarter trades and act instantly with the 1-click trading feature.
          </p>
        </div>
        <div className="max-w-[934px] mx-auto">
          <img className="object-cover" src={liveming} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LiveNewSec;
