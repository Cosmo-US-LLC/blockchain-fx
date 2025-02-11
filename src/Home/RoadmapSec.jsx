import React from "react";

import vector1 from "../assets/Roadmap/vector (11).png";
import vector2 from "../assets/Roadmap/vector (10).png";
import vector3 from "../assets/Roadmap/vector (9).png";
import vector4 from "../assets/Roadmap/vector (8).png";
import vector5 from "../assets/Roadmap/vector (7).png";
import vector6 from "../assets/Roadmap/vector (6).png";
import vector7 from "../assets/Roadmap/vector (5).png";
import vector8 from "../assets/Roadmap/vector (4).png";
import vector9 from "../assets/Roadmap/vector (3).png";
import vector10 from "../assets/Roadmap/vector (2).png";
import vector11 from "../assets/Roadmap/vector (1).png";

function RoadmapSec() {
 
  return (
    <div className="pt-[50px] space-y-[35px] pb-[50px] px-[73px]" id="roadmap">
      <div className="max-w-[1054px] relative space-y-[120px] w-[100%] mx-auto ">
        <div className="">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          Roadmap
          </h3>
        </div>
      <div className="space-y-[62px]">
      <div className="w-[693px] border border-[#9D9D9D] rounded-[8px] max-w-[799px] pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px]">
            <img src={vector1} className="border border-[#000]" alt="" />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[22px] font-[500] leading-[138%]">Preparation</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px] text-[14px]">
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Idea + Concept</p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Raise Seed Funds</p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Onboard Team & Advisors</p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Trading Platform Beta Preparation </p>
                </div>
            </div>
        </div>
        <img src={vector2} className="absolute right-[24%] top-[-34%]" alt="" />
        <img src={vector4} className="absolute z-[-1] right-[-18%] top-[50%]" alt="" />
       </div>
       <div className="w-[693px] border border-[#9D9D9D] rounded-[8px] max-w-[799px] ml-auto pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px]">
            <img src={vector1} className="border border-[#000]" alt="" />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[22px] font-[500] leading-[138%]">Execution</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px] text-[14px]">
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Website, Tokenomics etc.</p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Create $BFX Token</p>
                </div>
                <div className="max-w-[324px] flex items-center text-[14px] px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Launch $BFX Pre-Sale </p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">CertiK Token Audit </p>
                </div>
            </div>
        </div>
        <img src={vector7} className="absolute right-[5%] top-[-51%]" alt="" />
        <img src={vector3} className="absolute z-[-1] left-[-15%] top-[50%]" alt="" />
       </div>
       <div className="w-[693px] border border-[#9D9D9D] rounded-[8px] max-w-[799px] mr-auto pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px]">
            <img src={vector5} className="" alt="" />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[22px] font-[500] leading-[138%]">Launch</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px] text-[14px]">
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Launch an Affiliate Program </p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Sell Out the Pre-Sale</p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Launch $BFX on Uniswap and CEX</p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Achieving 10’000 BFX Holders  </p>
                </div>
            </div>
        </div>
        <img src={vector8} className="absolute left-[14%] top-[-72%]" alt="" />
        <img src={vector4} className="absolute right-[-15%] z-[-1] top-[50%]" alt="" />
       </div>
       <div className="w-[693px] border border-[#9D9D9D] rounded-[8px] max-w-[799px] ml-auto pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px]">
            <img src={vector5} className="" alt="" />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[22px] font-[500] leading-[138%]">Performance</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px] text-[14px]">
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Cashback System for Traders</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Public Chats for Trading Platform</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Add Copy Trading Feature</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Launch iOS and Android App </p>
                </div>
            </div>
        </div>
        <img src={vector11} className="absolute right-[18%] top-[-32%]" alt="" />
        <img src={vector10} className="absolute left-[-25%]  top-[-25%]" alt="" />
        <img src={vector3} className="absolute left-[-15%] z-[-1] top-[50%]" alt="" />
       </div>
       <div className="w-[693px] border border-[#9D9D9D] rounded-[8px] max-w-[799px] mr-auto pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px]">
            <img src={vector5} className="" alt="" />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[22px] font-[500] leading-[138%]">Expansion</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px] text-[14px]">
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Multiple CEX Listing</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Reach $100M Daily Trading Volume</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Achieving 100’000 BFX Holders</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Add Leaderboards & VIP accounts</p>
                </div>
            </div>
        </div>
        <img src={vector6} className="absolute left-[0%] top-[-62%]" alt="" />
        <img src={vector4} className="absolute right-[-15%] z-[-1] top-[50%]" alt="" />
       </div>
       <div className="w-[693px] border border-[#9D9D9D] rounded-[8px] max-w-[799px] ml-auto pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px]">
            <img src={vector5} className="" alt="" />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[22px] font-[500] leading-[138%]">Global Reach</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px] text-[14px]">
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">US License </p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Global Marketing Campaigns </p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Achieving 1’000’000 BFX Holders </p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">Major Partnerships </p>
                </div>
            </div>
        </div>
        <img src={vector8} className="absolute right-[19%] top-[-45%]" alt="" />
       </div>
      </div>
      </div>
    </div>
  );
}

export default RoadmapSec;
