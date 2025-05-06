import React from "react";
import usdtIcon from "../../../assets/hoyToBuy/payment/Group 1410116278.svg";
import bfxIcon from "../../../assets/hoyToBuy/payment/Screenshot 2025-02-05 at 07.05.22 1.svg";

function PaymentCardOne() {
  return (
    <div className="bg-[#0F0F0F] border border-[#3F3F3F] rounded-xl px-6 py-6 flex items-center justify-between gap-10  w-[808px]">
      <div className="flex-1">
        <p className="text-[#9F9F9F] text-[18px] leading-[28px]">
          Enter the amount of <span className="font-semibold">$BFX</span>
          <br />
          you want to buy.
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
            <div className="flex items-center gap-2 px-2 py-1 bg-[#2A2A2A] rounded-md">
              <img src={usdtIcon} alt="USDT" className="w-5 h-5" />
              <span className="text-sm text-white">USDT</span>
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
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
            <div className="flex items-center gap-2 px-2 py-1 bg-[#2A2A2A] rounded-md">
              <img src={bfxIcon} alt="BFX" className="w-5 h-5" />
              <span className="text-sm text-white">BFX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCardOne;
