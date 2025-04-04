import React from "react";

import graph from "../assets/HyperGrowth/Graph.png";
import ernvet1 from "../assets/EarnOnSec/Ellipse 4.png";
import ernvet2 from "../assets/EarnOnSec/Ellipse 3.png";
function HyperGrowthSec() {
  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <div className="py-[50px] bg-[#020B10]">
      <div className="max-w-[1200px] relative overflow-hidden bg-[#030F16] py-[50px] rounded-[16px] space-y-[35px] w-[100%] mx-auto ">
        <div className="space-y-[14px]">
          <h3 className="text-[40px] font-[700] text-center leading-[114%] text-[#fff] tracking-[-1px]">
            Designed for Exponential Growth
          </h3>
          <p className="text-[18px] font-[400] max-w-[890px] mx-auto w-[100%] text-center leading-[21px] text-[#ACC4D1] tracking-[-0.32px] italic">
            BlockchainFX is a community-powered trading platform that rewards
            BFX holders daily. As the platform grows, so does the token —
            creating a powerful cycle of growth and engagement. Studies* show
            that incentivized communities can grow significantly faster than
            others, and BFX is designed to maximize that potential.
          </p>
        </div>
        <div
          className="space-y-[53px] bg-[#030F16] rounded-[10.672px] p-[53.32px] w-[667px] h-[413px] mx-auto"
          style={{
            border: "1px solid #2B2B2B",
            // box-shadow: 0px 5.336px 26.68px 0px rgba(169, 169, 169, 0.30);
          }}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-[#fff] font-[500] text-[19.7px]">
              Growth Forecasting
            </h4>
            <div className="flex space-x-3 items-center">
              <hr className="h-[0px] w-[20px] border-[2px] border-[#E5AE00]" />
              <p className="text-[13.659px] text-[#949494] font-[500]">
                BlockchainFX
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              <hr className="h-[0px] w-[20px] border-[2px] border-[#CE2A96]" />
              <p className="text-[13.659px] text-[#949494] font-[500]">
                Regular Trading Platform
              </p>
            </div>
          </div>
          <div>
            <img src={graph} alt="" className="" />
          </div>
        </div>
        <p className="text-[18px] font-[400] max-w-[908px] mx-auto w-[100%] text-center leading-[21px] text-[#ACC4D1] tracking-[-0.32px]">
          (*Source: Harvard Business Review, When Community Becomes Your
          Competitive Advantage, 2020)
        </p>
        {/* <div className="flex justify-center items-center">
          <button
            onClick={handleScroll}
            className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[152px] w-[100%] h-[39px]"
          >
            Buy $BFX
          </button>
        </div> */}
        <div className="absolute top-[-8%] left-[-5%]">
          <img src={ernvet2} className=" " alt="" />
        </div>
        <div className="absolute bottom-[0%] right-[0%]">
          <img src={ernvet1} className="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HyperGrowthSec;
