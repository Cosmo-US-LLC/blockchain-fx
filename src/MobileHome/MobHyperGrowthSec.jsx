import React from "react";

import graph from "../assets/HyperGrowth/Graph.png";

function MobHyperGrowthSec() {
  return (
    <div className="pt-[24px] pb-[50px] bg-[#FAFAFA]">
      <div className="space-y-[30px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[32px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Hyper Growth Model
          </h3>
          <p className="text-[15px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
            BlockchainFX is the first community-driven trading platform that
            rewards users through a staking revenue model, building a loyal and
            active community. As the platform grows, so does the token, and vice
            versa, creating a cycle of continuous rewards and engagement.
            Studies show that incentivized communities grow up to 10 times
            faster than others, and BFX is designed to maximize that potential.
          </p>
        </div>
        <div
          className="space-y-[30px] bg-[#fff] rounded-[5.712px] px-[28.32px] py-[50px]"
          style={{
            boxShadow: "0px 7.032px 35.16px 0px rgba(169, 169, 169, 0.30)",
          }}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-[#000] font-[500] text-[10.56px]">
              Growth Forecasting
            </h4>
            <div className="flex space-x-3 items-center">
              <hr className="h-[2px] w-[8px] bg-[#E5AE00]" />
              <p className="text-[7px] text-[#949494] font-[500]">
                BlockchainFX
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              <hr className="h-[2px] w-[8px] bg-[#CE2A96]" />
              <p className="text-[7px] text-[#949494] font-[500]">
                Regular Trading Platform
              </p>
            </div>
          </div>
          <div>
            <img src={graph} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <button
            className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[102px] w-[100%] h-[40px]"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Buy $BFX
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobHyperGrowthSec;
