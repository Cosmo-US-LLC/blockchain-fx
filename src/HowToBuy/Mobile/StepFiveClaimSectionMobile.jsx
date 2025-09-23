import React from "react";
import walletImage from "../../assets/hoyToBuy/claim/wallet.webp";
import goldenShadow from "../../assets/hoyToBuy/mobile/ellipes-bg.png";
import { useTranslation } from "react-i18next";
function StepFiveClaimSectionMobile() {
  const { t } = useTranslation();
  return (
    <div className="py-10 px-6 bg-[#000] relative top-[-5px]">
      <div className="relative w-full flex flex-col gap-6 px-4 py-6 border-[2px] border-[#E6AF0320] rounded-[16px] overflow-hidden"
      >
        <img
          src={goldenShadow}
          alt="Golden Background Shadow"
          className="absolute top-0 left-0 z-30 w-full h-auto "
          
        />

        <div className="z-20 flex flex-col text-left text-white">
          <p className="text-[25px] font-[700] leading-[30px] tracking-[-1.25px] text-[#E5AE00] uppercase mb-2">
            {t("stepFiveClaim.step")}
          </p>
          <h2 className="text-[30px] font-[700] leading-[36px] tracking-[-1.5px] mb-3">
            {t("stepFiveClaim.title")}
          </h2>
          <p className="text-[14px] font-[400] leading-[20px] tracking-[-0.32px] text-[#9F9F9F] mb-4">
             {t("stepFiveClaim.subtitle")}
          </p>
          <ul className="list-disc pl-6 text-[14px] font-[400] text-[#9F9F9F] leading-[22px] tracking-[-0.32px]  space-y-2 mb-4">
            <li>
          {t("stepFiveClaim.list.0")}
            </li>
          </ul>
          <p className="text-[14px] text-[#9F9F9F] font-[400] leading-[20px] tracking-[-0.32px]  mb-6">
         {t("stepFiveClaim.thankYou")}
          </p>
        </div>

        <div className="z-20 flex items-center justify-center w-full">
          <img
            src={walletImage}
            alt="Wallet"
            className="object-contain w-[280px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default StepFiveClaimSectionMobile;
