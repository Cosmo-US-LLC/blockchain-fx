import React from "react";
import qrImage from "../../assets/hoyToBuy/confirm-transaction/deposit_eth.webp";
import goldenShadow from "../../assets/hoyToBuy/claim/claim-left-top-shadow.png";

function StepThreeTransactionSectionMobile() {
  return (
    <div className="md:hidden py-10 bg-[#020B10]">
      <div className="relative w-full max-w-[95%] mx-auto p-6 border border-[#545454] rounded-[16px] overflow-hidden">
        <img
          src={goldenShadow}
          alt="Golden Background Shadow"
          className="absolute top-0 left-0 z-10 h-auto opacity-20"
        />

        {/* Text Section */}
        <div className="z-20 mb-8 text-center text-white">
          <p className="text-[26px] font-semibold text-[#E5AE00] uppercase mb-4">
            Step 3
          </p>
          <h2 className="text-[36px] font-semibold leading-tight tracking-tight mb-6">
            Confirm Transaction
          </h2>
          <ol className="list-decimal pl-6 text-[#9F9F9F] text-[16px] leading-[26px] space-y-4">
            <li>
              After clicking “Buy Now”, a unique wallet address will be
              generated.
            </li>
            <li>
              Send the exact amount of your chosen crypto to that address.
            </li>
            <li>
              Approve the transaction through your wallet (MetaMask, Trust
              Wallet, etc.).
            </li>
          </ol>
        </div>

        {/* QR Code Section */}
        <div className="z-20 flex justify-center">
          <img
            src={qrImage}
            alt="Ethereum QR Code"
            className="w-[200px] h-auto mb-4"
          />
        </div>
      </div>
    </div>
  );
}

export default StepThreeTransactionSectionMobile;
