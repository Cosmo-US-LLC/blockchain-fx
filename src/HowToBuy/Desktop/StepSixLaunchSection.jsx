import React from "react";
import UniswapIcon from "../../assets/hoyToBuy/step6/uniswap.svg";
import goldenShadow from "../../assets/hoyToBuy/step6/goldenShadow.png";

function StepSixLaunchSection() {
  return (
    <div className="py-12 bg-[#020B10]">
      <div className="max-w-[1200px] relative w-[100%] mx-auto ">
        <div className="relative overflow-hidden  flex items-center justify-center gap-[134px] p-5 border border-[#545454] rounded-[16px] min-h-[482px]">
          <img
            src={goldenShadow}
            alt=""
            className="absolute top-0 left-0 z-20 h-auto"
          />
          <div className="w-[460px] backdrop-blur-md border border-[#545454] rounded-[12px] relative z-30 p-5">
            <p className="mb-4 text-[16px] font-medium capitalize text-[#808080]">
              $BFX Launches On Multiple Top-Tier Exchanges
            </p>

            <div className="flex flex-wrap items-center justify-center  max-w-[450px] gap-4">
              <div className="flex items-center justify-center gap-2 w-[152px] h-[61px] border rounded-md bg-white/5 border-white/20 backdrop-blur-md">
                <div className="w-[38px] h-[38px] rounded-full bg-[#FF007A] flex items-center justify-center">
                  <img src={UniswapIcon} alt="Uniswap" className="w-7 h-7" />
                </div>

                <span className="text-sm font-semibold text-[#808080]">
                  UNISWAP
                </span>
              </div>
              <div className="blur-sm flex items-center justify-center gap-2 w-[152px] h-[61px] border rounded-md bg-white/5 border-white/20 backdrop-blur-md">
                <div className="w-[38px] h-[38px] rounded-full bg-[#F0B90B] flex items-center justify-center">
                  <img src={UniswapIcon} alt="Uniswap" className="w-7 h-7" />
                </div>

                <span className="text-sm font-semibold text-[#808080]">
                  UNISWAP
                </span>
              </div>
              <div className="blur-sm flex items-center justify-center gap-2 w-[152px] h-[61px] border rounded-md bg-white/5 border-white/20 backdrop-blur-md">
                <div className="w-[38px] h-[38px] rounded-full bg-[#0052FE] flex items-center justify-center">
                  <img src={UniswapIcon} alt="Uniswap" className="w-7 h-7" />
                </div>

                <span className="text-sm font-semibold text-[#808080]">
                  UNISWAP
                </span>
              </div>
              <div className=" blur-sm flex items-center justify-center gap-2 w-[152px] h-[61px] border rounded-md bg-white/5 border-white/20 backdrop-blur-md">
                <div className="w-[38px] h-[38px] rounded-full bg-[#00F0FF] flex items-center justify-center">
                  <img src={UniswapIcon} alt="Uniswap" className="w-7 h-7" />
                </div>

                <span className="text-sm font-semibold text-[#808080]">
                  UNISWAP
                </span>
              </div>
              <div className="blur-sm flex items-center justify-center gap-2 w-[152px] h-[61px] border rounded-md bg-white/5 border-white/20 backdrop-blur-md">
                <div className="w-[38px] h-[38px] rounded-full bg-[#7635F5] flex items-center justify-center">
                  <img src={UniswapIcon} alt="Uniswap" className="w-7 h-7" />
                </div>

                <span className="text-sm font-semibold text-[#808080]">
                  UNISWAP
                </span>
              </div>
            </div>
          </div>

          <div className="w-[330px] text-white">
            <p className="text-[30px] font-[30px] text-[#E5AE00]">STEP 6</p>
            <h2 className=" mb-4 text-[48px] font-[600] leading-[57.6px] tracking-[-3.36px]">
              Launch
            </h2>
            <p className="mb-4 text-[16px] text-[#9F9F9F] font-[400] leading-[28px] tracking-[-0.4px]">
              $BFX will officially launch on multiple top-tier exchanges after
              the presale concludes.
            </p>
            <p className="mb-6 text-[16px] text-[#9F9F9F] font-[400] leading-[28px] tracking-[-0.4px]">
              Stay updated via our website and social channels for listing
              announcements.
            </p>
            <button className="px-6 py-3 font-semibold text-black transition bg-yellow-400 rounded-md hover:bg-yellow-500">
              Buy BFX Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepSixLaunchSection;
