import React from "react";
import usdtIcon from "../../../assets/hoyToBuy/mobile/step2/USDT.svg";
import bfxIcon from "../../../assets/hoyToBuy/mobile/step2/bitCoin.svg";

function PaymentCardOneMobile() {
  return (
    <div className="bg-[#0F0F0F] border border-[#3F3F3F] rounded-xl px-2 py-3 flex items-center gap-2 w-full">
      <div className="flex-1">
        <p className="text-[#9F9F9F] text-[10px] font-[400] leading-[12px]">
          Enter the amount of <span className="font-semibold">$BFX</span>
          you want to buy.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex w-[180px] h-[40px] px-3 items-center justify-between bg-[#FFFFFF17] rounded-lg  ">
          <div className="flex flex-col">
            <label className="text-[#8D8D8D] text-[6px] font-[400] leading-[6px] mb-1">
              Amount You Pay in USDT
            </label>
            <input
              type="text"
              value="1000"
              readOnly
              className="text-[10px] w-[60px] font-[400] leading-[10.21px] text-white bg-transparent outline-none"
            />
          </div>
          <div className="flex">
            <img src={usdtIcon} alt="USDT" className="w-[65px] h-auto" />
          </div>
        </div>

        <div className="flex bg-[#FFFFFF17] w-[180px] h-[40px] px-3 items-center justify-between rounded-lg ">
          <div className="flex flex-col">
            <div className="flex items-center mb-1 text-xs font-light text-[#8D8D8D]">
              <span className="text-[#8D8D8D] text-[6px] font-[400] leading-[6px]">
                You Receive BFX
              </span>
              <span className="text-[#00FFA3] text-[6px] font-medium">
                + Novice NFT
              </span>
            </div>
            <input
              type="text"
              value="6,123,135"
              readOnly
              className="text-[8px] w-[60px] font-[400] leading-[10.21px] text-white bg-transparent outline-none"
            />
          </div>
          <div className="flex ">
            <img src={bfxIcon} alt="BFX" className="w-[65px] h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCardOneMobile;
