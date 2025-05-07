import React from "react";
import goldenShadow from "../../assets/hoyToBuy/viewCoin/viewClaimGoldenShadow.png";
import walletImage from "../../assets/hoyToBuy/wallet/metamask.svg";
import coinbase from "../../assets/hoyToBuy/wallet/coinbase.svg";
import trust from "../../assets/hoyToBuy/wallet/trust.svg";
import walletconnect from "../../assets/hoyToBuy/wallet/walletconnect.svg";

const StepOneWalletSetupSectionMobile = () => {
  return (
    <div className="md:hidden py-10 bg-[#0D0D0D]">
      <div className="w-full max-w-[95%] mx-auto relative p-6 border border-[#545454] rounded-[16px] overflow-hidden">
        <img
          src={goldenShadow}
          alt="Golden Background Shadow"
          className="absolute top-0 left-0 z-10 h-auto opacity-30"
        />

        <div className="relative z-20 mb-8 text-center">
          <h3 className="text-[28px] font-semibold text-[#E5AE00] uppercase mb-4">
            Step 1
          </h3>
          <h2 className="text-[36px] font-semibold text-white leading-[1.2] mb-6">
            Set up a Wallet
          </h2>
          <p className="text-[#9F9F9F] text-[16px] leading-[24px] mb-4">
            Before you purchase BFX, make sure you're using a decentralised
            crypto wallet. This ensures your tokens are properly linked to your
            wallet address and your rewards are activated.
          </p>
          <p className="text-[#E5AE00] font-semibold text-[16px] leading-[24px]">
            Note:{" "}
            <span className="text-[#9F9F9F] text-[14px]">
              Do not use centralised exchange wallets (e.g., Binance, Coinbase
              main app) — they won’t display your tokens or rewards
            </span>
          </p>
        </div>

        <div className="relative z-20 mb-8 overflow-x-auto">
          <table className="min-w-full text-left border border-[#333] rounded-md">
            <thead className="bg-[#1A1A1A] text-white">
              <tr>
                <th className="py-3 px-4 border border-[#333] text-[16px]">
                  Platform
                </th>
                <th className="py-3 px-4 border border-[#333] text-[16px]">
                  Wallet Option
                </th>
              </tr>
            </thead>
            <tbody className="text-[#CCCCCC]">
              <tr className="border border-[#333]">
                <td className="px-4 py-3 border border-[#333]">Desktop</td>
                <td className="px-4 py-3 border border-[#333]">
                  MetaMask (Chrome or Firefox extension)
                </td>
              </tr>
              <tr className="border border-[#333]">
                <td className="px-4 py-3 border border-[#333]">Mobile</td>
                <td className="px-4 py-3 border border-[#333]">
                  Trust Wallet, Coinbase Wallet, Metamask
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-[#333]">Any Device</td>
                <td className="px-4 py-3 border border-[#333]">
                  WalletConnect-compatible apps
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="relative z-20 flex flex-wrap items-center justify-center gap-6">
          <img src={walletImage} alt="MetaMask" className="w-[120px] h-auto" />
          <img src={coinbase} alt="Coinbase" className="w-[120px] h-auto" />
          <img src={trust} alt="Trust Wallet" className="w-[120px] h-auto" />
          <img
            src={walletconnect}
            alt="WalletConnect"
            className="w-[120px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default StepOneWalletSetupSectionMobile;
