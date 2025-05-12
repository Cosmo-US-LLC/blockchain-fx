import React from "react";
import usdtIcon from "../../../assets/hoyToBuy/mobile/step2/USDT.svg";
import bfxIcon from "../../../assets/hoyToBuy/mobile/step2/bitCoin.svg";

function PaymentCardThree() {
  return (
    <div className="bg-[#0F0F0F] border border-[#E6AF0320] rounded-xl px-6 py-6 flex items-center justify-between gap-10 w-full max-w-[808px]">
      <div className="flex-1 pl-4">
        <p className="text-[#9F9F9F] text-[18px] leading-[28px]">
          Click “<span className="font-medium">Buy Now</span>.”
        </p>
      </div>

      <div className="flex flex-col gap-3 w-[360px]">
        <div className="bg-[#FFFFFF17] rounded-lg px-4 py-2">
          <p className="text-[10px] font-[400] leading-[8.839px] text-[#8D8D8D] mb-1">
            Amount You Pay in USDT
          </p>
          <div className="flex items-center justify-between">
            <input
              type="text"
              value="1000"
              readOnly
              className=" text-white bg-transparent outline-none text-[18px] font-[400] leading-[19.839px]"
            />
            <div className="flex items-center">
              <img src={usdtIcon} alt="USDT" className="w-20 h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF17]   rounded-lg px-4 py-2">
          <div className="flex items-center mb-1 text-[10px] font-[400] leading-[8.839px] text-[#8D8D8D]">
            <span>You Receive BFX</span>
            <span className="text-[#00FFA3] font-medium">+ Novice NFT</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#F5C71A] text-[18px] font-[400] leading-[19.839px]">
              6,123,135
            </span>
            <div className="flex items-center">
              <img src={bfxIcon} alt="USDT" className="w-20 h-auto" />
            </div>
          </div>
        </div>
        <button className="mt-1 w-full bg-[#F5C71A] hover:bg-yellow-400 text-black font-[700] py-2 rounded-lg transition">
          Buy BFX
        </button>
      </div>
    </div>
  );
}

export default PaymentCardThree;
