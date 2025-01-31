import React from "react";
import heroimg from "../assets/herosection/herogif.gif"
import fobicn from "../assets/herosection/forbes-ar21 1.svg"
import herobnr2 from "../assets/herosection/bnrhero (4).svg"
import herobnr3 from "../assets/herosection/bnrhero (3).svg"
import herobnr4 from "../assets/herosection/bnrhero (2).svg"
import herobnr5 from "../assets/herosection/bnrhero (1).webp"

function MobileHero() {
  return (
    <div className="pt-[6rem] pb-[2rem] bg-[#FFFFFF]">
      <div className="w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <div>
            <h4 className="text-[16px]  leading-[100%] font-[400] text-center text-[#000] tracking-[-1px] capitalize">
            Blockchain Meets Global Financial Markets
            </h4>
            <h2 className="pt-6 pb-8 text-[36px] font-[700] leading-[111.375%] tracking-[-1px] text-[#000] text-center">
            The Ultimate <br /> Trading Platform
            </h2>
            <p className="text-[15px] max-w-[865px] w-[100%] mx-auto font-[400] leading-[153.667%] text-center text-[#000] tracking-[-0.32px] ">
            BlockchainFX is the first crypto-native platform providing access to the world’s largest financial markets. Trade Crypto, Forex, ETFs, Stocks, Futures, Options, Bonds, Indices, CFDs, and more—all in one place. Secure early access by holding $BFX and earn up to 25,000 USDT in daily staking rewards from collected trading fees. 
            </p>
          </div>
          <div className="flex justify-center items-center space-x-[17px]">
            <button className="text-white bg-[#E5AE00] px-[14px] hover:text-black hover:bg-transparent text-[14px] font-[700] border border-[#E5AE00] hover:border-[#000] rounded-[8px]  h-[48px]">
              Buy $BFX
            </button>
            <button className="hover:text-white hover:bg-[#E5AE00] px-[14px] text-black bg-transparent text-[14px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px]  h-[48px]">
              Beta Trading
            </button>
          </div>
          <div className="flex justify-center">
            <img src={heroimg} alt="" />
          </div>
          
          <div className="border rounded-[6px] py-[20px] !mt-[20px] px-[13px]">
            <h3 className="text-center text-[15px] font-[600]">Featured In:</h3>
           <div className="flex justify-center items-center space-x-[9px]">
           {/* <img className="h-[12px]" src={herobnr1} alt="" /> */}
            <img className="h-[14px] !mt-[2px]" src={herobnr2} alt="" />
            <img className="" src={fobicn} alt="" />
            <img className="h-[17px]" src={herobnr4} alt="" />
            <img className="max-w-[100.25px] h-[11.7px]" src={herobnr5} alt="" />
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHero;
