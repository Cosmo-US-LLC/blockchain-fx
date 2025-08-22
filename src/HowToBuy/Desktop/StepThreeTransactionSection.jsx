import React from "react";
import qrImage from "../../assets/hoyToBuy/confirm-transaction/deposit_eth.webp";
import goldenShadow from "../../assets/hoyToBuy/claim/claim-left-top-shadow.png";
import { useTranslation } from "react-i18next";
function StepThreeTransactionSection() {
   const { t } = useTranslation();
  return (
    <div className="py-12 bg-[#000]">
      <div className="max-w-[1200px] relative w-full mx-auto">
        <div className="relative overflow-hidden flex items-center justify-center gap-[134px] px-5 py-7 border-[2px] border-[#E6AF0320] rounded-[16px] min-h-[482px]">
          <img src={goldenShadow} className="absolute top-0 left-0 z-20 h-auto" />

          <div className="w-[460px] text-white z-30">
            <p className="text-[30px] font-semibold text-[#E5AE00]">
              {t("stepThreeTransaction.step")}
            </p>
            <h2 className="mb-6 text-[48px] font-semibold leading-[57.6px] tracking-[-3.36px]">
              {t("stepThreeTransaction.title")}
            </h2>
            <ol className="list-decimal pl-5 text-[#9F9F9F] text-[16px] leading-[28px] tracking-[-0.4px] space-y-6">
              <li>{t("stepThreeTransaction.instructions.0")}</li>
              <li>{t("stepThreeTransaction.instructions.1")}</li>
              <li>{t("stepThreeTransaction.instructions.2")}</li>
            </ol>
          </div>

          <div>
            <img src={qrImage} className="w-[291px] h-auto mx-auto mb-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepThreeTransactionSection;
