import React from "react";
import goldenShadow from "../../assets/hoyToBuy/viewCoin/viewClaimGoldenShadow.png";
import walletImage from "../../assets/hoyToBuy/wallet/metamask.svg";
import coinbase from "../../assets/hoyToBuy/wallet/coinbase.svg";
import trust from "../../assets/hoyToBuy/wallet/trust.svg";
import walletconnect from "../../assets/hoyToBuy/wallet/walletconnect.svg";

const StepOneWalletSetupSection = () => {
  return (
    <div className="py-12 bg-[#000]">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="relative overflow-hidden flex flex-col gap-8 items-center justify-center p-5 border-[2px] border-[#E6AF0320] rounded-[16px]  min-h-[580px]">
          <img
            src={goldenShadow}
            alt=""
            className="absolute top-0 left-0 z-20 h-auto"
          />
          <div className="flex flex-row items-center gap-[100px]">
            <div className="flex flex-col w-[420px]">
              <h3 className="mb-2 text-[30px] font-semibold text-[#E5AE00] uppercase">
                Step 1
              </h3>
              <h2 className="mb-4 text-[48px] text-[#FFF] font-semibold leading-[57.6px] tracking-[-3.36px]">
                Set up a Wallet
              </h2>
              <p className="text-[#9F9F9F] mb-4 test-[16px] leading-[28px] tracking-[-0.4px]">
                Before you purchase BFX, make sure you're using a decentralised
                crypto wallet. This ensures your tokens are properly linked to
                your wallet address and your rewards are activated.
              </p>
              <p className=" mb-4 test-[16px] leading-[28px] tracking-[-0.4px] font-semibold text-[#E5AE00]">
                Note:{" "}
                <span className="text-[#9F9F9F] test-[14px] leading-[28px] tracking-[-0.4px]">
                  Do not use centralized exchange wallets (e.g., Binance,
                  Coinbase main app) — they won’t display your tokens or rewards
                </span>
              </p>
            </div>

            <div className="overflow-x-auto w-[450px]">
              <table className="min-w-full text-left text-sm border border-[#333] rounded-md">
                <thead className="bg-[#1A1A1A] text-white">
                  <tr>
                    <th className="py-2 px-4 border border-[#333] text-[18px] leading-[24px] tracking-[-0.36px]">
                      Platform
                    </th>
                    <th className="py-2 px-4 border border-[#333] text-[18px] leading-[24px] tracking-[-0.36px]">
                      Wallet Option
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[#CCCCCC]">
                  <tr className="border border-[#333]">
                    <td className="px-4 py-2 border border-[#333] text-[16px] leading-[24px] tracking-[-0.36px]">
                      Desktop
                    </td>
                    <td className="px-4 py-2 border border-[#333] text-[16px] leading-[24px] tracking-[-0.36px]">
                      MetaMask (Chrome or Firefox extension)
                    </td>
                  </tr>
                  <tr className="border border-[#333]">
                    <td className="px-4 py-2 border border-[#333] text-[16px] leading-[24px] tracking-[-0.36px]">
                      Mobile
                    </td>
                    <td className="px-4 py-2 border border-[#333] text-[16px] leading-[24px] tracking-[-0.36px]">
                      Trust Wallet, Coinbase Wallet, Metamask
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-[#333] text-[16px] leading-[24px] tracking-[-0.36px]">
                      Any Device
                    </td>
                    <td className="px-4 py-2 border border-[#333] text-[16px] leading-[24px] tracking-[-0.36px]">
                      WalletConnect-compatible apps
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 ">
            <img
              src={walletImage}
              alt="MetaMask"
              className="w-[180px] h-auto"
            />
            <img src={coinbase} alt="Coinbase" className="w-[180px] h-auto" />
            <img src={trust} alt="Trust Wallet" className="w-[180px] h-auto" />
            <img
              src={walletconnect}
              alt="WalletConnect"
              className="w-[180px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOneWalletSetupSection;
