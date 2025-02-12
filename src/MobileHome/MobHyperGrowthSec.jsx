import React from "react";

import graph from "../assets/HyperGrowth/Graph.png";

function MobHyperGrowthSec() {
  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 80;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    }, 200); 
  };

  return (
    <div className="pt-[24px] pb-[50px] bg-[#FAFAFA]">
      <div className="space-y-[30px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Hyper Growth Model
          </h3>
          <p className="text-[15px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          BlockchainFX is a community-driven trading platform that rewards users with daily staking rewards, fostering a loyal and active community.  As the platform grows, so does the token, creating a cycle of rewards and engagement. Studies* show that incentivized communities can  grow significantly faster than others, and BFX is designed to maximize that potential.
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
        <div>
          <p className="text-[15px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">(*Source: Harvard Business Review, When Community Becomes Your Competitive Advantage, 2020)</p>
        </div>
        <div className="flex justify-center items-center ">
          <button
            className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[102px] w-[100%] h-[40px]"
            onClick={handleScroll}
          >
            Buy $BFX
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobHyperGrowthSec;
