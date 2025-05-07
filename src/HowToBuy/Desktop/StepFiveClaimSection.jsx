import React from "react";
import walletImage from "../../assets/hoyToBuy/claim/wallet.webp";
import goldenShadow from "../../assets/hoyToBuy/claim/claim-left-top-shadow.png";

function StepFiveClaimSection() {
  return (
    <div className="py-12 bg-[#020B10]">
      <div className="max-w-[1200px] relative w-full mx-auto">
        <div className="relative overflow-hidden flex items-center justify-center gap-[134px] p-5 border border-[#545454] rounded-[16px] min-h-[482px]">
          <img
            src={goldenShadow}
            alt=""
            className="absolute top-0 left-0 z-20 h-auto"
          />

          <div className="w-[330px] text-white z-30">
            <p className="text-[30px] font-semibold text-[#E5AE00]">STEP 5</p>
            <h2 className="mb-4 text-[48px] font-[600] leading-[57.6px] tracking-[-3.36px]">
              Claim
            </h2>
            <p className="mb-2 text-[16px] text-[#9F9F9F] leading-[28px] tracking-[-0.4px]">
              After the presale ends:
            </p>
            <ul className="list-disc pl-5 mb-4 text-[16px] text-[#9F9F9F] leading-[28px] tracking-[-0.4px]">
              <li>
                Your $BFX tokens will be claimable in your dashboard with one
                click.
              </li>
            </ul>
            <p className="text-[16px] text-[#9F9F9F] leading-[28px] tracking-[-0.4px]">
              Thank you for being part of the BFX journey.
            </p>
          </div>
          <div className="w-[460px] z-30">
            <img
              src={walletImage}
              alt="Wallet"
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepFiveClaimSection;
