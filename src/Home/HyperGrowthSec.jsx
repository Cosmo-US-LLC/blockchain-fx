import React from "react";

import graph from "../assets/HyperGrowth/Graph.png";

function HyperGrowthSec() {
 
  return (
    <div className="pt-[61px] space-y-[35px] pb-[66px] bg-[#FAFAFA]">
      <div className="max-w-[919px] space-y-[60px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          Hyper Growth Model
          </h3>
          <p className="text-[20px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          BlockchainFX is the first community-driven trading platform with a staking revenue redistribution model that continuously rewards users and its community. This drives rapid organic growth through network effects. As the platform grows, so will the token, and vice versa. Studies show that incentivized communities grow up to 10 times faster on average than others.
          </p>
        </div>
        <div className="space-y-[70px] bg-[#fff] rounded-[14px] p-[70.32px]" 
        style={{
            boxShadow:"0px 7.032px 35.16px 0px rgba(169, 169, 169, 0.30)"
        }}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-[#000] font-[500] text-[26px]">Growth Forecasting</h4>
            <div className="flex space-x-3 items-center">
                <hr className="h-[5px] w-[20px] bg-[#E5AE00]"/>
                <p className="text-[18px] text-[#949494] font-[500]">BlockchainFX</p>
            </div>
            <div className="flex space-x-3 items-center">
                <hr className="h-[5px] w-[20px] bg-[#CE2A96]"/>
                <p className="text-[18px] text-[#949494] font-[500]">Regular Trading Platform</p>
            </div>
          </div>
          <div>
            <img src={graph} alt="" />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default HyperGrowthSec;
