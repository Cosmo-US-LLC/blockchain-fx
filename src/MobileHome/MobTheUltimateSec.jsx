import React from "react";
import { useTranslation } from "react-i18next";

import logo from "../assets/TheUltimateSec/logo.svg";

function MobTheUltimateSec() {
  const { t } = useTranslation();

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
     <div className="bg-[#000] !bg-cover !bg-center">
      <div className="flex items-center bgtheyltmob min-h-[410px]  justify-center w-[90%] mx-auto  ">
      <div className=" pb-[50px] pt-[30px] space-y-[15px]">
            <div className="flex justify-center ">
            <img src={logo} className="h-[45.77px]" alt="" />
            </div>
            <h3 className="text-[36.401px] manrope text-[#fff] font-[700] text-center leading-[117.143%] text-[#181A20] tracking-[-1px]">
             The Ultimate <br />
          Trading Platform
            </h3>
            <div className="flex justify-center pt-[10px] items-center  space-x-[17px]">
            <button
            style={{
              background:"linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
             className="text-{#000} px-[12px]  text-[14px] font-[600] border border-[#E5AE00] hover:border-[#E5AE00] rounded-[8px] w-[140px] h-[40px]"
            onClick={handleScroll}
            >
              Buy $BFX
            </button>
            <button
             onClick={() =>
                  window.open("https://t.me/blockchainfx_chat", "_blank")
                }
            className="hover:text-white text-[#fff] px-[12px] hover:bg-[#E5AE00]  bg-transparent text-[14px] font-[600] border hover:border-[#E5AE00] border-[#E5AE00] rounded-[8px] w-[140px] h-[40px]">
            Need Support
            </button>
          </div>
          </div>
      </div>
    </div>
  );
}

export default MobTheUltimateSec;
