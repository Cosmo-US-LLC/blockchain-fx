import React from "react";

import graph from "../assets/HyperGrowth/Graph.png";

function HyperGrowthSec() {
  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    }, 200); 
  };

  return (
    <div className="py-[50px] bg-[#FAFAFA]">
      <div className="max-w-[1200px] space-y-[35px] w-[100%] mx-auto ">
        <div className="space-y-[14px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Hyper Growth Model
          </h3>
          <p className="text-[14px] font-[400] max-w-[890px] mx-auto w-[100%] text-center leading-[21px] text-[#181A20] tracking-[-0.32px]">
          BlockchainFX is a community-driven trading platform that rewards users with daily staking rewards, fostering a loyal and active community.  As the platform grows, so does the token, creating a cycle of rewards and engagement. Studies* show that incentivized communities can  grow significantly faster than others, and BFX is designed to maximize that potential.
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
        <p className="text-[14px] font-[400] max-w-[908px] mx-auto w-[100%] text-center leading-[21px] text-[#181A20] tracking-[-0.32px]">
        (*Source: Harvard Business Review, When Community Becomes Your Competitive Advantage, 2020)
          </p>
        <div className="flex justify-center items-center">
          <button
            onClick={handleScroll}
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
