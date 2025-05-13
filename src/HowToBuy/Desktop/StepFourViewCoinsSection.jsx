import React from "react";
import dashboardImage from "../../assets/hoyToBuy/viewCoin/mac.webp";
import goldenShadow from "../../assets/hoyToBuy/viewCoin/viewClaimGoldenShadow.png"; // reuse same shadow

function StepFourViewCoinsSection() {
  return (
    <div className="py-12 bg-[#000]">
      <div className="max-w-[1200px] relative w-full mx-auto">
        <div className="relative overflow-hidden flex items-center justify-center gap-[100px] p-5 border-[2px] border-[#E6AF0320] rounded-[16px] min-h-[482px]">
          
        
          <img
            src={goldenShadow}
            alt=""
            className="absolute top-0 left-0 z-20 h-auto"
          />

      
          <div className="w-[560px] z-30">
            <img
              src={dashboardImage}
              alt="Dashboard View"
              className="object-contain w-full h-auto"
            />
          </div>

    
          <div className="w-[330px] text-white z-30">
            <p className="text-[30px] font-semibold text-[#E5AE00]">STEP 4</p>
            <h2 className="mb-4 text-[48px] font-semibold leading-[57.6px] tracking-[-3.36px]">
              View Your BFX Coins
            </h2>
            <p className="mb-2 text-[16px] text-[#9F9F9F] leading-[28px] tracking-[-0.4px]">
              Once your payment is confirmed:
            </p>
            <ul className="list-disc pl-5 text-[16px] text-[#9F9F9F] leading-[28px] tracking-[-0.4px] mb-4">
              <li>Daily BFX staking rewards will be added to your dashboard.</li>
              <li>USDT (ERC-20) payouts are sent to your wallet every Monday.</li>
              <li>
                You can view all rewards and transactions via your BlockchainFX
                dashboard.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepFourViewCoinsSection;
