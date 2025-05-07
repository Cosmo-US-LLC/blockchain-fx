import React from "react";
import dashboardImage from "../../assets/hoyToBuy/viewCoin/mac.webp";
import goldenShadow from "../../assets/hoyToBuy/viewCoin/viewClaimGoldenShadow.png"; // Reuse same shadow

function StepFourViewCoinsSectionMobile() {
  return (
    <div className="md:hidden py-10 bg-[#020B10]">
      <div className="relative w-full max-w-[95%] mx-auto p-6 border border-[#545454] rounded-[16px] overflow-hidden">
        <img
          src={goldenShadow}
          alt="Golden Background Shadow"
          className="absolute top-0 left-0 z-10 h-auto opacity-30"
        />

        {/* Image Section */}
        <div className="z-20 w-full mb-8">
          <img
            src={dashboardImage}
            alt="BlockchainFX Dashboard View"
            className="object-contain w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="z-20 text-center text-white">
          <p className="text-[26px] font-semibold text-[#E5AE00] uppercase mb-4">
            Step 4
          </p>
          <h2 className="text-[36px] font-semibold leading-tight tracking-tight mb-6">
            View Your BFX Coins
          </h2>
          <p className="text-[16px] text-[#9F9F9F] leading-[26px] mb-4">
            Once your payment is confirmed:
          </p>
          <ul className="list-disc pl-6 text-[16px] text-[#9F9F9F] leading-[26px] space-y-2 mb-6">
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
  );
}

export default StepFourViewCoinsSectionMobile;
