import React from "react";

import whatisimg from "../assets/WhatIsSec/whatisimg.webp"
import check from "../assets/WhatIsSec/check_02.webp"

function WhatIsSec() {
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
    <div
      className="pt-[50px] pb-[50px] bgwhat" 
      id="what-is-bfx-coin"
      style={{ height: "auto" }}
    >
      <div className="max-w-[866px] relative  w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[30px] capitalize font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            What is BFX?
          </h3>
          <p className="text-[14px] font-[400] max-w-[540px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          $BFX is BlockchainFX's native coin, offering a unique opportunity to be part of a fast-growing global trading platform with the ambition to become one of the world’s leading trading networks.
          </p>
        </div>
        <div className="max-w-[690px] pt-[30px] mx-auto flex justify-between items-center">
          <div className="p-[10px] rounded-[4px] flex justify-between items-center border border-[#D2D2D2]">
            <img src={check} className="w-[24px] h-[24px] " alt="" />
            <p className="text-[14px] font-[500] tracking-[-0.32px]">Early Access</p>
          </div>
          <div className="p-[10px] rounded-[4px] flex justify-between items-center border border-[#D2D2D2]">
            <img src={check} className="w-[24px] h-[24px] " alt="" />
            <p className="text-[14px] font-[500] tracking-[-0.32px]">Daily Staking Rewards</p>
          </div>
          <div className="p-[10px] rounded-[4px] flex justify-between items-center border border-[#D2D2D2]">
            <img src={check} className="w-[24px] h-[24px] " alt="" />
            <p className="text-[14px] font-[500] tracking-[-0.32px]">70% Less Trading Fees</p>
          </div>
          <div className="p-[10px] rounded-[4px] flex justify-between items-center border border-[#D2D2D2]">
            <img src={check} className="w-[24px] h-[24px] " alt="" />
            <p className="text-[14px] font-[500] tracking-[-0.32px]">Trading Credits</p>
          </div>
          
        </div>
        <div className="max-w-[664px] w-[100%] mx-auto mt-[-1rem] pb-[7rem]">
          <img
            src={whatisimg}
            className="!ml-[70px] max-w-[519px] h-[454px] pt-[40px]"
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleScroll}
            className="text-white bg-[#E5AE00]  px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[138px] w-[100%] h-[39px]"
          >
            Buy $BFX
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhatIsSec;
