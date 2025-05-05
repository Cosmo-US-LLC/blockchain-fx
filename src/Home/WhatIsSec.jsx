import React from "react";
import { useTranslation } from "react-i18next";

import coin from "../assets/WhatIsSec/coin.png"
import black from "../assets/GetInFirst/black2.png";

import check from "../assets/WhatIsSec/tick-circle.svg"

function WhatIsSec() {
  const { t } = useTranslation();

  // const handleScroll = () => {
  //   setTimeout(() => {
  //     const element = document.getElementById("Wallet");
  //     if (element) {
  //       const elementPosition =
  //         element.getBoundingClientRect().top + window.pageYOffset;
  //       const offset = 50;
  //       window.scrollTo({
  //         top: elementPosition - offset,
  //         behavior: "smooth",
  //       });
  //     }
  //   }, 200);
  // };
  return (
    <div
      className="bg-[#020B10] pt-[50px] pb-[50px] px-[205px]" 
     
    >
      <div className="max-w-[1280] px-[80px] pt-[69px] relative  w-[100%] mx-auto rounded-xl  bg-no-repeat bg-cover bg-center "
            style={{ backgroundImage: `url(${black})` }}>
      
        <div className="space-y-[30px]">
          <h3 className="text-[48px] capitalize font-[600] text-center leading-[120%] text-white tracking-[-3.36px]">
            {t("what_is_section.title")}
          </h3>
          <p className="text-[18px] font-[400] max-w-[854px] mx-auto w-[100%] text-center leading-[155.5%] text-[#fff] tracking-[-0.36px]">
            {t("what_is_section.description")}
          </p>
        </div>
        <div className="max-w-[983px] pt-[30px] mx-auto flex justify-between items-center text-white">
          <div className="p-[10px] rounded-lg flex justify-between items-center border border-white/10">
            <img src={check} className="w-[24px] h-[24px] mr-1.5 " alt="" />
            <p className="text-[20px] font-[400] leading-[120%] tracking-[-1.4px]">
              {t("what_is_section.features.early_access")}
            </p>
          </div>
          <div className="p-[10px] rounded-lg flex justify-between items-center border border-white/10">
            <img src={check} className="w-[24px] h-[24px] mr-1.5" alt="" />
            <p className="text-[20px] font-[400] leading-[120%] tracking-[-1.4px]">
              {t("what_is_section.features.daily_staking_rewards")}
            </p>
          </div>
          <div className="p-[10px] rounded-lg flex justify-between items-center border border-white/10">
            <img src={check} className="w-[24px] h-[24px] mr-1.5" alt="" />
            <p className="text-[20px] font-[400] leading-[120%] tracking-[-1.4px]">
              {t("what_is_section.features.lower_trading_fees")}
            </p>
          </div>
          <div className="p-[10px] rounded-lg flex justify-between items-center border border-white/10">
            <img src={check} className="w-[24px] h-[24px] mr-1.5" alt="" />
            <p className="text-[20px] font-[400] leading-[120%] tracking-[-1.4px]">
              {t("what_is_section.features.trading_credits")}
            </p>
          </div>
          
        </div>
        <div className="max-w-[950px] w-[100%] mx-auto  ">
          <img
            src={coin}
            loading="lazy"
            className="!ml-[70px] max-w-[906px] h-[590px] pt-[40px] mx-auto"
            alt=""
          />
        </div>
        {/* <div className="flex justify-center">
          <button
            onClick={handleScroll}
            className="text-white bg-[#E5AE00]  px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[138px] w-[100%] h-[39px]"
          >
            Buy $BFX
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default WhatIsSec;
