import React from "react";
import walletImage from "../../assets/hoyToBuy/claim/wallet.webp";
import goldenShadow from "../../assets/hoyToBuy/claim/claim-left-top-shadow.png";

function StepFiveClaimSectionMobile() {
  return (
    <div className="md:hidden py-10 bg-[#020B10]">
      <div className="relative w-full max-w-[95%] mx-auto p-6 border border-[#545454] rounded-[16px] overflow-hidden">
        
        {/* Background Shadow */}
        <img
          src={goldenShadow}
          alt="Golden Background Shadow"
          className="absolute top-0 left-0 z-10 h-auto opacity-30"
        />

        {/* Text Section */}
        <div className="z-20 mb-8 text-center text-white">
          <p className="text-[26px] font-semibold text-[#E5AE00] uppercase mb-4">
            Step 5
          </p>
          <h2 className="text-[36px] font-semibold leading-tight tracking-tight mb-6">
            Claim
          </h2>
          <p className="text-[16px] text-[#9F9F9F] leading-relaxed mb-4">
            After the presale ends:
          </p>
          <ul className="list-disc pl-6 text-[16px] text-[#9F9F9F] leading-relaxed space-y-2 mb-4">
            <li>
              Your $BFX tokens will be claimable in your dashboard with one
              click.
            </li>
          </ul>
          <p className="text-[16px] text-[#9F9F9F] leading-relaxed mb-6">
            Thank you for being part of the BFX journey.
          </p>
          <button className="w-full py-2 font-semibold text-black transition bg-yellow-400 rounded-md hover:bg-yellow-500">
            Claim Now
          </button>
        </div>

        {/* Image Section */}
        <div className="z-20 w-full">
          <img
            src={walletImage}
            alt="Wallet"
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default StepFiveClaimSectionMobile;
