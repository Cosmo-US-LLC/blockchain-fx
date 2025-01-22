import React from "react";

import logo from "../assets/TheUltimateSec/logo.svg";

function MobTheUltimateSec() {
  return (
    <div className="bgtheylt !bg-cover !bg-center">
      <div className="flex items-center justify-center w-[90%] mx-auto  ">
      <div className=" py-[50px]">
            <div className="flex justify-center ">
            <img src={logo} className="h-[33.77px]" alt="" />
            </div>
            <h3 className="text-[33.358px] text-[#fff] font-[700] text-center leading-[117.143%] text-[#181A20] tracking-[-1px]">
              The Ultimate <br />
              Trading Experience
            </h3>
            <div className="flex justify-center pt-[10px] items-center  space-x-[17px]">
            <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[102px] w-[100%] h-[40px]"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Buy $BFX
            </button>
            <button className="hover:text-white text-[#fff] px-[12px] hover:bg-[#E5AE00]  bg-transparent text-[14px] font-[1000] border hover:border-[#E5AE00] border-[#E5AE00] rounded-[8px] max-w-[142px] w-[100%] h-[40px]">
            Beta Traiding
            </button>
          </div>
          </div>
      </div>
    </div>
  );
}

export default MobTheUltimateSec;
