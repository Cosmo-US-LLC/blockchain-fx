import React from "react";
import goldenShadow from "../../assets/hoyToBuy/mobile/ellipes-bg.png";
import walletImage from "../../assets/hoyToBuy/wallet/metamask.svg";
import coinbase from "../../assets/hoyToBuy/wallet/coinbase.svg";
import trust from "../../assets/hoyToBuy/wallet/trust.svg";
import phantom from "../../assets/HowToBuySec/phantomD.svg";
import walletconnect from "../../assets/hoyToBuy/wallet/walletconnect.svg";
import { useTranslation } from "react-i18next";
const StepOneWalletSetupSectionMobile = () => {
  const { t } = useTranslation();
  return (
    <div className="py-10 px-6 bg-[#000] relative top-[-1px]">
      <div className="relative px-4 py-6 border-[2px] border-[#E6AF0320] rounded-[16px] overflow-hidden flex flex-col gap-6">
        <img
          src={goldenShadow}
          alt="Golden Background Shadow"
          className="absolute top-0 left-0 z-10 h-auto"
        />

        <div className="relative z-20 flex flex-col gap-3 text-left">
          <h3 className="text-[25px] font-[700] text-[#E5AE00] leading-[30px] tracking-[-1.25px] uppercase">
           {t("stepOneWallet.step1")}
          </h3>
          <h2 className="text-[28px] text-[#FFF] font-[700] leading-[36px] tracking-[-1.5px]">
           {t("stepOneWallet.setupTitle")}
          </h2>
          <p className="text-[#9F9F9F] text-[15px] leading-[22px]">
           {t("stepOneWallet.setupDescription")}
          </p>
          <p className="text-[#E5AE00] font-[700] text-[16px] leading-[24px]">
             {t("stepOneWallet.noteLabel")}{" "}
            <span className="text-[#9F9F9F] font-[400] text-[14px]">
          {t("stepOneWallet.noteDescription")}
            </span>
          </p>
        </div>

        <div className="relative z-20 overflow-x-auto">
          <table className="min-w-full text-left border border-[#333] rounded-lg">
            <thead className="bg-[#1A1A1A] text-white">
              <tr>
                <th className="py-3 px-4 border border-[#333] text-[16px] font-[600] leading-[24px] tracking-[-0.36px]">
                 {t("stepOneWallet.table.platform")}
                </th>
                <th className="py-3 px-4 border border-[#333] text-[16px] font-[600] leading-[24px] tracking-[-0.36px]">
                   {t("stepOneWallet.table.walletOption")}
                </th>
              </tr>
            </thead>
            <tbody className="text-[#CCCCCC]">
              <tr className="border border-[#333]">
                <td className="px-4 py-3 border border-[#333] text-[14px] font-[400] leading-[24px] tracking-[-0.36px]">
                  {t("stepOneWallet.table.desktop")}
                </td>
                <td className="px-4 py-3 border border-[#333] text-[14px] font-[400] leading-[24px] tracking-[-0.36px]">
                 {t("stepOneWallet.table.desktopOption")}
                </td>
              </tr>
              <tr className="border border-[#333]">
                <td className="px-4 py-3 border border-[#333] text-[14px] font-[400] leading-[24px] tracking-[-0.36px]">
                   {t("stepOneWallet.table.mobile")}
                </td>
                <td className="px-4 py-3 border border-[#333] text-[14px] font-[400] leading-[24px] tracking-[-0.36px]">
                   {t("stepOneWallet.table.mobileOption")}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-[#333] text-[14px] font-[400] leading-[24px] tracking-[-0.36px]">
                  {t("stepOneWallet.table.anyDevice")}
                </td>
                <td className="px-4 py-3 border border-[#333] text-[14px] font-[400] leading-[24px] tracking-[-0.36px]">
                 {t("stepOneWallet.table.anyDeviceOption")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="relative z-20 flex flex-wrap items-center justify-evenly gap-1">
          <img src={coinbase} alt="Coinbase" className="w-[129px] h-auto" />
          <img src={trust} alt="Trust Wallet" className="w-[162px] h-auto" />
          <img src={phantom} alt="Phantom" className="w-[140px] h-auto" />
          <img
            src={walletconnect}
            alt="WalletConnect"
            className="w-[166px] h-auto"
          />
          <img src={walletImage} alt="MetaMask" className="w-[101px] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default StepOneWalletSetupSectionMobile;
