
import React from "react";
import { useTranslation } from "react-i18next";
import goldenShadow from "../../assets/hoyToBuy/viewCoin/viewClaimGoldenShadow.png";
import walletImage from "../../assets/hoyToBuy/wallet/metamask.svg";
import coinbase from "../../assets/hoyToBuy/wallet/coinbase.svg";
import trust from "../../assets/hoyToBuy/wallet/trust.svg";
import phantom from "../../assets/HowToBuySec/phantomD.svg";
import walletconnect from "../../assets/hoyToBuy/wallet/walletconnect.svg";

const StepOneWalletSetupSection = () => {
  const { t } = useTranslation();

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
            <div className="flex flex-col w-[452px]">
              <h3 className="mb-2 text-[30px] font-semibold text-[#E5AE00] uppercase">
                {t("stepOneWallet.step1")}
              </h3>
              <h2 className="mb-4 text-[48px] text-[#FFF] font-semibold leading-[57.6px] tracking-[-3.36px]">
                {t("stepOneWallet.setupTitle")}
              </h2>
              <p className="text-[#9F9F9F] mb-4 test-[16px] leading-[28px] tracking-[-0.4px]">
                {t("stepOneWallet.setupDescription")}
              </p>
              <p className=" mb-4 test-[16px] leading-[28px] tracking-[-0.4px] font-semibold text-[#E5AE00]">
                {t("stepOneWallet.noteLabel")}{" "}
                <span className="text-[#9F9F9F] test-[14px] leading-[28px] tracking-[-0.4px]">
                  {t("stepOneWallet.noteDescription")}
                </span>
              </p>
            </div>

            <div className="overflow-x-auto w-[450px]">
              <table className="min-w-full text-left text-sm border border-[#333] rounded-md">
                <thead className="bg-[#1A1A1A] text-white">
                  <tr>
                    <th className="py-2 px-4 border border-[#333] text-[18px] leading-[24px] tracking-[-0.36px]">
                      {t("stepOneWallet.table.platform")}
                    </th>
                    <th className="py-2 px-4 border border-[#333] text-[18px] leading-[24px] tracking-[-0.36px]">
                      {t("stepOneWallet.table.walletOption")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[#CCCCCC]">
                  <tr className="border border-[#333]">
                    <td className="px-4 py-2 border border-[#333] text-[16px] leading-[24px] tracking-[-0.36px]">
                      {t("stepOneWallet.table.desktop")}
                    </td>
                    <td className="px-4 py-2 border border-[#333] text-[16px] leading-[24px] tracking-[-0.36px]">
                      {t("stepOneWallet.table.desktopOption")}
                    </td>
                  </tr>
                  <tr className="border border-[#333]">
                    <td className="px-4 py-2 border border-[#333] text-[16px] leading-[24px] tracking-[-0.36px]">
                      {t("stepOneWallet.table.mobile")}
                    </td>
                    <td className="px-4 py-2 border border-[#333] text-[16px] leading-[24px] tracking-[-0.36px]">
                      {t("stepOneWallet.table.mobileOption")}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-[#333] text-[16px] leading-[24px] tracking-[-0.36px]">
                      {t("stepOneWallet.table.anyDevice")}
                    </td>
                    <td className="px-4 py-2 border border-[#333] text-[16px] leading-[24px] tracking-[-0.36px]">
                      {t("stepOneWallet.table.anyDeviceOption")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 w-full max-w-[1040px]">
            <img
              src={walletImage}
              alt="MetaMask"
              className="w-[125px] h-auto"
            />
            <img src={coinbase} alt="Coinbase" className="w-[160px] h-auto" />
            <img src={trust} alt="Trust Wallet" className="w-[201px] h-auto" />
            <img src={phantom} alt="Phantom" className="w-[212px] h-auto" />
            <img
              src={walletconnect}
              alt="WalletConnect"
              className="w-[206px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOneWalletSetupSection;

