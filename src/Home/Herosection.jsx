import React from "react";
import heroimg from "../assets/herosection/heroimg.png"
import herobnr1 from "../assets/herosection/bnrhero (5).svg"
import herobnr2 from "../assets/herosection/bnrhero (4).svg"
import herobnr3 from "../assets/herosection/bnrhero (3).svg"
import herobnr4 from "../assets/herosection/bnrhero (2).svg"
import herobnr5 from "../assets/herosection/bnrhero (1).svg"

function Herosection() {
  return (
    <div className="pt-[9rem] pb-[2rem] bg-[#FFFFFF]">
      <div className="max-w-[1220px]  w-[100%] mx-auto ">
        <div className="space-y-[35px]">
          <div>
            <h4 className="text-[18px]  leading-[100%] font-[400] text-center text-[#000] tracking-[-1px] capitalize">
              Access all Global financial markets in one place
            </h4>
            <h2 className="pt-6 pb-8 text-[64px] font-[700] leading-[100.375%] tracking-[-1px] text-[#000] text-center">
              The Ultimate <br /> Trading Platform
            </h2>
            <p className="text-[18px] max-w-[865px] w-[100%] mx-auto font-[400] leading-[166.667%] text-center text-[#000] tracking-[-0.32px] ">
              Trade Crypto, Forex, ETFs, Stocks, Futures, Options, Bonds,
              Indices, CFDs, and more with BlockchainFX, featuring over 500
              assets. Secure early access to this all-in-one trading platform by
              holding $BFX  and earn up to 25,000 USDT daily staking rewards
              from collected trading fees. 
            </p>
          </div>
          <div className="flex justify-center items-center space-x-[17px]">
            <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[18px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[152px] w-[100%] h-[58px]">
              Buy $BFX
            </button>
            <button className="hover:text-white hover:bg-[#E5AE00] px-[12px] text-black bg-transparent text-[18px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px] max-w-[152px] w-[100%] h-[58px]">
              Beta Trading
            </button>
          </div>
          <div className="flex justify-center pt-[20px]">
            <img src={heroimg} alt="" />
          </div>
          <div className="flex justify-center space-x-[52px] border rounded-[20px] pt-[30px] pb-[35px]">
            <img src={herobnr1} alt="" />
            <img src={herobnr2} alt="" />
            <img src={herobnr3} alt="" />
            <img src={herobnr4} alt="" />
            <img src={herobnr5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
