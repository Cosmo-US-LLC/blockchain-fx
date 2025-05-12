import React from "react";
import qrImage from "../../assets/hoyToBuy/confirm-transaction/deposit_eth.webp";
import goldenShadow from "../../assets/hoyToBuy/mobile/ellipes-bg.png";

function StepThreeTransactionSectionMobile() {
  return (
    <div className="py-10 px-6 bg-[#111111]">
      <div className="relative w-full flex flex-col gap-10 px-4 py-6 border-[2px] border-[#E6AF0320] rounded-[16px] overflow-hidden">
      <img
          src={goldenShadow}
          alt="Golden Background Shadow"
          className="absolute top-0 left-0 z-30 w-full h-auto "
        />

        <div className="z-20 flex flex-col text-left text-white">
          <p className="text-[25px] font-[700] leading-[30px] tracking-[-1.25px] text-[#E5AE00] uppercase mb-2">
            Step 3
          </p>
          <h2 className="text-[30px] font-[700] leading-[36px] tracking-[-1.5px] mb-4">
            Confirm Transaction
          </h2>
          <ol className="list-decimal pl-4 text-[#9F9F9F] text-[14px] font-[400] leading-[26px] space-y-4">
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

        <div className="z-20 flex justify-center">
          <img
            src={qrImage}
            alt="Ethereum QR Code"
            className="w-[241px] h-auto mb-4"
          />
        </div>
      </div>
    </div>
  );
}

export default StepThreeTransactionSectionMobile;
