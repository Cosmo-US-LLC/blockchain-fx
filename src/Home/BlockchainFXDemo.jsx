import React from "react";
import demoimg from "../assets/BlockchainFXDemo/demo.webp"
import stars from "../assets/Expert/Stars.png"

function BlockchainFXDemo() {
  
  return (
    <div className="flex items-center bg-[#020B10] py-[50px]">
      <div className="max-w-[1200px] flex justify-between items-center gap-[2rem] w-[100%] mx-auto border border-[#E6AF03] bg-[#030F16] relative rounded-[24px]">
        
            <div className="flex items-center gap-5">
              <div className="w-[50%] space-y-[20px] pl-[50px] py-[30px]">
                <h4 className="text-[#ffff] text-[40px] font-[480]">BlockchainFX Demo</h4>
                <p className="text-[#fff] text-[24px] font-[500]">
                Within less than 2 minutes, we’re trading BTC, Tesla, Gold, Pepe, ETFs, CFDs, and more — all streamlined  on one platform with no need to switch brokers.
                </p>
                <button
              className="text-[#000] bg-[#E5AE00] px-[12px] hover:text-[#E5AE00] hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#E5AE00] rounded-[8px] max-w-[138px] w-[100%] h-[39px]"
            >
              Buy $BFX
            </button>
              </div>
              <div className="w-[50%]">
                <img src={demoimg} alt="Expert 1" />
              </div>
            </div>
      </div>
    </div>
  );
}

export default BlockchainFXDemo;
