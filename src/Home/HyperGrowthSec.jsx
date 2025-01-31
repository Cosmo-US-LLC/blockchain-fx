import React from "react";

import graph from "../assets/HyperGrowth/Graph.png";

function HyperGrowthSec() {
  return (
    <div className="py-[50px] bg-[#FAFAFA]">
      <div className="max-w-[1200px] space-y-[35px] w-[100%] mx-auto ">
        <div className="space-y-[14px]">
          <h3 className="text-[45px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Hyper Growth Model
          </h3>
          <p className="text-[14px] font-[400] max-w-[908px] mx-auto w-[100%] text-center leading-[21px] text-[#181A20] tracking-[-0.32px]">
            BlockchainFX is the first community-driven trading platform with a
            staking revenue redistribution model that continuously rewards users
            and its community. This drives rapid organic growth through network
            effects. As the platform grows, so will the token, and vice versa.
            Studies show that incentivized communities grow up to 10 times
            faster on average than others.
          </p>
        </div>
        <div
          className="space-y-[53px] bg-[#fff] rounded-[14px] p-[53.32px] w-[667px] h-[413px] mx-auto"
          style={{
            boxShadow: "0px 5.336px 26.68px 0px rgba(169, 169, 169, 0.30)",
            // box-shadow: 0px 5.336px 26.68px 0px rgba(169, 169, 169, 0.30);
          }}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-[#000] font-[500] text-[19.7px]">
              Growth Forecasting
            </h4>
            <div className="flex space-x-3 items-center">
              <hr className="h-[0px] w-[20px] border-[2px] border-[#E5AE00]" />
              <p className="text-[13.6px] text-[#949494] font-[500]">
                BlockchainFX
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              <hr className="h-[0px] w-[20px] border-[2px] border-[#CE2A96]" />
              <p className="text-[13.6px] text-[#949494] font-[500]">
                Regular Trading Platform
              </p>
            </div>
          </div>
          <div>
            <img src={graph} alt="" className="" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[152px] w-[100%] h-[39px]"
          >
            Buy $BFX
          </button>
        </div>
      </div>
    </div>
  );
}

export default HyperGrowthSec;
