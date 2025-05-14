import React from "react";
import logo from "../assets/TheUltimateSec/logo.svg";


function TheUltimateSec() {
 

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
    <div className="bg-[#020B10] pt-[30px] pb-[60px] ">
      <div className="bgtheylt w-full max-w-[1200px] rounded-xl flex">
        <div className="max-w-[717px] min-h-[544px] max-h-[544px] flex items-center justify-center w-[100%] mx-auto">
          <div className="">
            <div className="flex justify-center pb-[20px]">
              <img src={logo} className="h-[44.54px]" alt="" />
            </div>
            <h3 className="text-[50px] text-[#fff] font-[600] text-center leading-[130%] text-[#181A20] tracking-[-3px]"
            >
              The Ultimate <br/>Trading Platform
            </h3>
            <div className="flex justify-center items-center pt-[35px] space-x-[17px]">
              <button
                onClick={handleScroll}
                className="text-white bg-[#E5AE00] hover:text-[#FFF] hover:bg-transparent text-[16px] font-[700] border border-[#E5AE00] hover:border-[#fff] rounded-[8px] !max-w-[159px] w-[100%] h-[50px]"
              >
                Buy BFX
              </button>
              <button
                onClick={() =>
                  window.open("https://t.me/blockchainfx_chat", "_blank")
                }
                className="hover:text-white hover:bg-[#E5AE00] text-[#E5AE00] bg-transparent text-[16px] font-[500] border hover:border-[#E5AE00] border-[#E5AE00] rounded-[8px] !max-w-[159px] w-[100%] h-[50px]"
              
              >
                Need Support?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheUltimateSec;
