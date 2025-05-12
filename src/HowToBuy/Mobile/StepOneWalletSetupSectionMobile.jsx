import React from "react";
import goldenShadow from "../../assets/hoyToBuy/mobile/ellipes-bg.png";
import walletImage from "../../assets/hoyToBuy/wallet/metamask.svg";
import coinbase from "../../assets/hoyToBuy/wallet/coinbase.svg";
import trust from "../../assets/hoyToBuy/wallet/trust.svg";
import walletconnect from "../../assets/hoyToBuy/wallet/walletconnect.svg";

const StepOneWalletSetupSectionMobile = () => {
  return (
    <div className="py-10 px-6 bg-[#111111]">
      <div className="relative px-4 py-6 border-[2px] border-[#E6AF0320] rounded-[16px] overflow-hidden flex flex-col gap-6">
        <img
          src={goldenShadow}
          alt="Golden Background Shadow"
          className="absolute top-0 left-0 z-10 h-auto"
        />

        <div className="relative z-20 flex flex-col gap-3 text-left">
          <h3 className="text-[25px] font-[700] text-[#E5AE00] leading-[30px] tracking-[-1.25px] uppercase">
            Step 1
          </h3>
          <h2 className="text-[28px] text-[#FFF] font-[700] leading-[36px] tracking-[-1.5px]">
            Set up a Wallet
          </h2>
          <p className="text-[#9F9F9F] text-[15px] leading-[22px]">
            Before you purchase BFX, make sure you're using a decentralised
            crypto wallet. This ensures your tokens are properly linked to your
            wallet address and your rewards are activated.
          </p>
          <p className="text-[#E5AE00] font-[700] text-[16px] leading-[24px]">
            Note:{" "}
            <span className="text-[#9F9F9F] font-[400] text-[14px]">
              Do not use centralised exchange wallets (e.g., Binance, Coinbase
              main app) — they won’t display your tokens or rewards
            </span>
          </p>
        </div>

        <div className="relative z-20 overflow-x-auto">
          <table className="min-w-full text-left border border-[#333] rounded-lg">
            <thead className="bg-[#1A1A1A] text-white">
              <tr>
                <th className="py-3 px-4 border border-[#333] text-[16px] font-[600] leading-[24px] tracking-[-0.36px]">
                  Platform
                </th>
                <th className="py-3 px-4 border border-[#333] text-[16px] font-[600] leading-[24px] tracking-[-0.36px]">
                  Wallet Option
                </th>
              </tr>
            </thead>
            <tbody className="text-[#CCCCCC]">
              <tr className="border border-[#333]">
                <td className="px-4 py-3 border border-[#333] text-[14px] font-[400] leading-[24px] tracking-[-0.36px]">
                  Desktop
                </td>
                <td className="px-4 py-3 border border-[#333] text-[14px] font-[400] leading-[24px] tracking-[-0.36px]">
                  MetaMask (Chrome or Firefox extension)
                </td>
              </tr>
              <tr className="border border-[#333]">
                <td className="px-4 py-3 border border-[#333] text-[14px] font-[400] leading-[24px] tracking-[-0.36px]">
                  Mobile
                </td>
                <td className="px-4 py-3 border border-[#333] text-[14px] font-[400] leading-[24px] tracking-[-0.36px]">
                  Trust Wallet, Coinbase Wallet, Metamask
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-[#333] text-[14px] font-[400] leading-[24px] tracking-[-0.36px]">
                  Any Device
                </td>
                <td className="px-4 py-3 border border-[#333] text-[14px] font-[400] leading-[24px] tracking-[-0.36px]">
                  WalletConnect-compatible apps
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="relative z-20 flex flex-wrap items-center justify-center">
          <img src={walletImage} alt="MetaMask" className="w-[140px] h-auto" />
          <img src={coinbase} alt="Coinbase" className="w-[140px] h-auto" />
          <img src={trust} alt="Trust Wallet" className="w-[140px] h-auto" />
          <img
            src={walletconnect}
            alt="WalletConnect"
            className="w-[140px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default StepOneWalletSetupSectionMobile;
