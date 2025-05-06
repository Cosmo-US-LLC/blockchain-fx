import React from "react";
import qrImage from "../../assets/hoyToBuy/confirm-transaction/deposit_eth.webp";
import goldenShadow from "../../assets/hoyToBuy/claim/claim-left-top-shadow.png";

function StepThreeTransactionSection() {
  return (
    <div className="py-12 bg-[#020B10]">
      <div className="max-w-[1200px] relative w-full mx-auto">
        <div className="relative overflow-hidden flex items-center justify-center gap-[134px] px-5 py-7 border border-[#545454] rounded-[16px] min-h-[482px]">
          <img
            src={goldenShadow}
            alt=""
            className="absolute top-0 left-0 z-20 h-auto"
          />

          <div className="w-[460px] text-white z-30">
            <p className="text-[30px] font-semibold text-[#E5AE00]">STEP 3</p>
            <h2 className="mb-6 text-[48px] font-semibold leading-[57.6px] tracking-[-3.36px]">
              Confirm Transaction
            </h2>
            <ol className="list-decimal pl-5 text-[#9F9F9F] text-[16px] leading-[28px] tracking-[-0.4px] space-y-6">
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

          {/* <div className="w-[330px] bg-[#1C1C1C] flex flex-col text-white rounded-xl p-6 z-30">
            <div className="flex items-center justify-center w-full ">
              <p className="text-[12px] tracking-[-0.218px] font-[600]">
                Buy Token
              </p>
            </div>
            <p className="mb-4 font-[400] text-[12px] bg-[#696969] rounded-lg px-4 py-1">
              <span className="text-[#E5AE00] text-[13px] font-[500]">Send 0.001 ETH</span>{" "}
              to the address <br /> listed below to get{" "}
              <span className="font-[500] text-[13px] text-[#E5AE00]">500,000.00 BFX</span>
            </p>
            <img
              src={qrImage}
              alt="QR Code"
              className="w-[160px] h-[160px] mx-auto mb-4"
            />

            <div className="bg-[#333] px-3 py-2 rounded-md text-xs mb-3 text-center break-all">
              ETH Wallet Address (ERC-20):
              <br />
              <span className="font-mono text-white">
                0x8WMVMDVN4UNNnfrNWVX8SN4x0bf3l3Ceq
              </span>
            </div>

            <div className="mb-4 text-center">
              <p className="text-xs text-[#FFA500] font-medium">
                🛑 Only send ETH on the Ethereum (ERC-20) blockchain
              </p>
            </div>

            <button className="w-full py-2 mb-4 font-semibold text-black transition bg-yellow-400 rounded-md hover:bg-yellow-500">
              Copy The Wallet Address
            </button>

            <ul className="text-[12px] text-gray-400 space-y-2 leading-relaxed list-decimal pl-5">
              <li>
                BFX tokens, bonuses, staking rewards and NFTs (if eligible) are
                added to your dashboard instantly.
              </li>
              <li>
                Connect the same wallet at BlockchainFX.com to check your
                dashboard and BFX balance.
              </li>
              <li>
                Any amount sent to this wallet is automatically credited and
                added to your dashboard.
              </li>
            </ul>
          </div> */}
          <div>
            <img
              src={qrImage}
              alt="QR Code"
              className="w-[291px] h-auto mx-auto mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepThreeTransactionSection;
