import React from "react";
import dashboardImage from "../../assets/hoyToBuy/viewCoin/mac.webp";
import goldenShadow from "../../assets/hoyToBuy/mobile/ellipes-bg.png";

function StepFourViewCoinsSectionMobile() {
  return (
    <div className=" py-10 px-6 bg-[#111111]">
      <div className="relative w-full px-4 py-6 border-[2px] border-[#E6AF0320] rounded-[16px] overflow-hidden">
      <img
          src={goldenShadow}
          alt="Golden Background Shadow"
          className="absolute top-0 left-0 z-30 w-full h-auto "
        />

        <div className="z-20 flex flex-col text-left text-white">
          <p className="text-[25px] font-[700] leading-[30px] tracking-[-1.25px] text-[#E5AE00] uppercase mb-2">
            Step 4
          </p>
          <h2 className="text-[30px] font-[700] leading-[36px] tracking-[-1.5px] mb-4">
            View Your BFX Coins
          </h2>
          <p className="text-[14px] font-[400] leading-[20px] tracking-[-0.28px] text-[#9F9F9F] mb-4">
            Once your payment is confirmed:
          </p>
          <ul className="list-disc pl-6 text-[14px] text-[#9F9F9F] leading-[20px] tracking-[-0.28px] space-y-2 mb-10">
            <li>Daily BFX staking rewards will be added to your dashboard.</li>
            <li>USDT (ERC-20) payouts are sent to your wallet every Monday.</li>
            <li>
              You can view all rewards and transactions via your BlockchainFX
              dashboard.
            </li>
          </ul>
        </div>
        <div className="z-20 w-full mb-2">
          <img
            src={dashboardImage}
            alt="BlockchainFX Dashboard View"
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default StepFourViewCoinsSectionMobile;
