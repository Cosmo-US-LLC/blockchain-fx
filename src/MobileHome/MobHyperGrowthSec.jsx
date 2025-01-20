import React from "react";

import graph from "../assets/HyperGrowth/Graph.png";

function MobHyperGrowthSec() {
 
  return (
    <div className="pt-[24px] pb-[24px] bg-[#FAFAFA]">
      <div className="space-y-[30px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          Hyper Growth Model
          </h3>
          <p className="text-[15px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          BlockchainFX is the first community-driven trading platform with a staking revenue redistribution model that continuously rewards users and its community. This drives rapid organic growth through network effects. As the platform grows, so will the token, and vice versa. Studies show that incentivized communities grow up to 10 times faster on average than others.
          </p>
        </div>
        <div className="space-y-[20px] bg-[#fff] rounded-[5.712px] p-[28.32px]" 
        style={{
            boxShadow:"0px 7.032px 35.16px 0px rgba(169, 169, 169, 0.30)"
        }}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-[#000] font-[500] text-[10.56px]">Growth Forecasting</h4>
            <div className="flex space-x-3 items-center">
                <hr className="h-[2px] w-[8px] bg-[#E5AE00]"/>
                <p className="text-[7px] text-[#949494] font-[500]">BlockchainFX</p>
            </div>
            <div className="flex space-x-3 items-center">
                <hr className="h-[2px] w-[8px] bg-[#CE2A96]"/>
                <p className="text-[7px] text-[#949494] font-[500]">Regular Trading Platform</p>
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

export default MobHyperGrowthSec;
