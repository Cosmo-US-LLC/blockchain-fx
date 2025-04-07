import React from "react";

import whatisimg from "../assets/WhatIsSec/whatisimg.webp"
import check from "../assets/WhatIsSec/check_02.webp"
import vecticn1 from "../assets/WhatIsSec/Ellipse 3 (1).png"
import vecticn2 from "../assets/WhatIsSec/Ellipse 4 (1).png"

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
    <div className="pt-[50px] pb-[50px]  bg-[#030B10]">
      <div className="relative overflow-hidden w-[90%] pt-[30px] mx-auto rounded-[8px]"
      style={{
        border:"0.319px solid var(--stroke, rgba(230, 175, 3, 0.12))",
        background:"#030F16"
      }}
      >
        <img className="absolute left-0 top-0" src={vecticn1} alt="" />
        <img className="absolute right-0 top-10" src={vecticn2} alt="" />
        <div className="space-y-[20px] relative z-[9]">
          <h3 className="text-[30px] capitalize font-[700] text-center leading-[120%] text-[#FFF] tracking-[-1px]">
          What Makes BFX Different?
          </h3>
          <p className="text-[15px] font-[400] max-w-[375px] mx-auto w-[100%] text-center leading-[130%] text-[#8497A2] tracking-[-0.32px]">
          $BFX is BlockchainFX's native coin, offering a unique opportunity to be part of a fast-growing global trading platform with the ambition to become one of the world’s leading trading networks.
          </p>
        </div>
        <div className="max-w-[400px] pt-[20px] flex-wrap mx-auto flex justify-center gap-[0.8rem] items-center">
          <div className="py-[8px] w-[150px] rounded-[4px]  flex pl-[15px] space-x-1 items-center border border-[#D2D2D2]">
            <img src={check} className="w-[19px] h-[19px] " alt="" />
            <p className="text-[10px] text-[#fff] font-[500] tracking-[-0.32px]">Early Access</p>
          </div>
          <div className="py-[8px] text-[#fff] w-[150px] rounded-[4px]  flex pl-[15px] space-x-1 items-center border border-[#D2D2D2]">
            <img src={check} className="w-[19px] h-[19px] " alt="" />
            <p className="text-[10px] font-[500] tracking-[-0.32px]">Daily Staking Rewards</p>
          </div>
          <div className="py-[8px] text-[#fff] w-[150px] rounded-[4px]  flex pl-[15px] space-x-1 items-center border border-[#D2D2D2]">
            <img src={check} className="w-[19px] h-[19px] " alt="" />
            <p className="text-[10px] font-[500] tracking-[-0.32px]">70% Less Trading Fees</p>
          </div>
          <div className="py-[8px] w-[150px] text-[#fff] rounded-[4px]  flex pl-[15px] space-x-1 items-center border border-[#D2D2D2]">
            <img src={check} className="w-[19px] h-[19px] " alt="" />
            <p className="text-[10px] font-[500] tracking-[-0.32px]">Trading Credits</p>
          </div>
          
        </div>
        <div className="max-w-[664px] w-[100%] mx-auto pt-[2rem]">
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
        {/* <div className="relative flex items-center justify-center ">
          <button
            className="absolute text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[102px] w-[100%] h-[40px]"
            onClick={handleScroll}
          >
            Buy $BFX
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default MobWhatIsSec;
