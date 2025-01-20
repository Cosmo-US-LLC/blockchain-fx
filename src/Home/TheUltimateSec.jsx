import React from "react";

import logo from "../assets/TheUltimateSec/logo.svg";

function TheUltimateSec() {
  return (
    <div className="bgtheylt ">
      <div className="max-w-[717px] min-h-[767px] flex items-center justify-center w-[100%] mx-auto  ">
      <div className=" pt-[3rem]">
            <div className="flex justify-center pb-[20px]">
            <img src={logo} className="h-[63.77px]" alt="" />
            </div>
            <h3 className="text-[70px] text-[#fff] font-[700] text-center leading-[117.143%] text-[#181A20] tracking-[-1px]">
              The Ultimate <br />
              Trading Experience
            </h3>
            <div className="flex justify-center items-center px-[2rem] pt-[35px] space-x-[17px]">
            <button className="text-white bg-[#E5AE00] px-[12px] hover:text-[#FFF] hover:bg-transparent text-[18px] font-[800] border border-[#E5AE00] hover:border-[#fff] rounded-[8px] max-w-[152px] w-[100%] h-[58px]">
              Buy $BFX
            </button>
            <button className="hover:text-white hover:bg-[#E5AE00] px-[12px] text-[#FFF] bg-transparent text-[18px] font-[500] border hover:border-[#E5AE00] border-[#fff] rounded-[8px] max-w-[152px] w-[100%] h-[58px]">
            Need Help?
            </button>
          </div>
          </div>
      </div>
    </div>
  );
}

export default TheUltimateSec;
