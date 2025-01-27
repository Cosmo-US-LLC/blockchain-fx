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
          BlockchainFX is the first community-driven trading platform with a staking revenue model that rewards users and the community, fueling rapid growth through network effects. As the platform grows, so does the token, and vice versa. Studies show that Incentivized communities grow up to 10 times faster than others.
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
        <div className="flex justify-center items-center">
        <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
        className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[18px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[152px] w-[100%] h-[58px]">
              Buy $BFX
            </button>
        </div>
      </div>
    </div>
  );
}

export default HyperGrowthSec;
