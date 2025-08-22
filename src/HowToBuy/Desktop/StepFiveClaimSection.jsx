import React from "react";
import walletImage from "../../assets/hoyToBuy/claim/wallet.webp";
import goldenShadow from "../../assets/hoyToBuy/claim/claim-left-top-shadow.png";
import { useTranslation } from "react-i18next";
function StepFiveClaimSection() {
   const { t } = useTranslation();
  return (
     <div className="py-12 bg-[#000]">
      <div className="max-w-[1200px] relative w-full mx-auto">
        <div className="relative overflow-hidden flex items-center justify-center gap-[134px] p-5 border-[2px] border-[#E6AF0320] rounded-[16px] min-h-[482px]">
          <img src={goldenShadow} className="absolute top-0 left-0 z-20 h-auto" />

          <div className="w-[330px] text-white z-30">
            <p className="text-[30px] font-semibold text-[#E5AE00]">
              {t("stepFiveClaim.step")}
            </p>
            <h2 className="mb-4 text-[48px] font-[600] leading-[57.6px] tracking-[-3.36px]">
              {t("stepFiveClaim.title")}
            </h2>
            <p className="mb-2 text-[16px] text-[#9F9F9F] leading-[28px] tracking-[-0.4px]">
              {t("stepFiveClaim.subtitle")}
            </p>
            <ul className="list-disc pl-5 mb-4 text-[16px] text-[#9F9F9F] leading-[28px] tracking-[-0.4px]">
              <li>{t("stepFiveClaim.list.0")}</li>
            </ul>
            <p className="text-[16px] text-[#9F9F9F] leading-[28px] tracking-[-0.4px]">
              {t("stepFiveClaim.thankYou")}
            </p>
          </div>

          <div className="w-[460px] z-30">
            <img src={walletImage} className="object-contain w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepFiveClaimSection;
