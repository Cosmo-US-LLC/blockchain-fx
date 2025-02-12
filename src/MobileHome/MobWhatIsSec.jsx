import React from "react";

import whatisimg from "../assets/WhatIsSec/whatisimg.webp"
import check from "../assets/WhatIsSec/check_02.webp"

function MobWhatIsSec() {
  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 80;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <div className="pt-[50px] pb-[50px] bgwhatmob" id="what-is-bfx-coin">
      <div className="relative w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[30px] capitalize font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            What is BFX?
          </h3>
          <p className="text-[15px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          $BFX is BlockchainFX's native coin, offering a unique opportunity to be part of a fast-growing global trading platform with the ambition to become one of the world’s leading trading networks.
          </p>
        </div>
        <div className="max-w-[690px] pt-[20px] flex-wrap mx-auto flex justify-center gap-[1rem] items-center">
          <div className="p-[8px] rounded-[4px] flex justify-between items-center border border-[#D2D2D2]">
            <img src={check} className="w-[19px] h-[19px] " alt="" />
            <p className="text-[11.308px] font-[500] tracking-[-0.32px]">Early Access</p>
          </div>
          <div className="p-[8px] rounded-[4px] flex justify-between items-center border border-[#D2D2D2]">
            <img src={check} className="w-[19px] h-[19px] " alt="" />
            <p className="text-[11.308px] font-[500] tracking-[-0.32px]">Daily Staking Rewards</p>
          </div>
          <div className="p-[8px] rounded-[4px] flex justify-between items-center border border-[#D2D2D2]">
            <img src={check} className="w-[19px] h-[19px] " alt="" />
            <p className="text-[11.308px] font-[500] tracking-[-0.32px]">70% Less Trading Fees</p>
          </div>
          <div className="p-[8px] rounded-[4px] flex justify-between items-center border border-[#D2D2D2]">
            <img src={check} className="w-[19px] h-[19px] " alt="" />
            <p className="text-[11.308px] font-[500] tracking-[-0.32px]">Trading Credits</p>
          </div>
          
        </div>
        <div className="max-w-[664px] w-[100%] mx-auto pt-[1rem] pb-[5rem]">
          <img src={whatisimg} className="" alt="" />
          {/* <video
            width={500}
            height={410}
            className=""
            muted
            autoPlay={"autoplay"}
            preload="auto"
            playsInline
            loop
          >
            <source src={whatisimg} type="video/webm" />
          </video> */}
        </div>
        <div className="flex relative justify-center  items-center ">
          <button
            className="absolute text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[102px] w-[100%] h-[40px]"
            onClick={handleScroll}
          >
            Buy $BFX
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobWhatIsSec;
