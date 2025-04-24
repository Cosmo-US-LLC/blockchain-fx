import React from "react";
import takeimg1 from "../assets/TradeOver/trdimg (5).webp";
import takeimg2 from "../assets/TradeOver/trdimg (4).webp";
import takeimg3 from "../assets/TradeOver/trdimg (3).webp";
import takeimg4 from "../assets/TradeOver/trdimg (2).webp";
import takeimg5 from "../assets/TradeOver/trdimg (1).webp";
import { useTranslation } from "react-i18next";

function TradeOverSec() {
  const { t } = useTranslation();

  return (
    <div className="py-[50px] bg-[#020B10]">
      <div className="max-w-[1200px] w-[100%] mx-auto space-y-[30px]">
        <h3 className="text-[40px] text-[#fff] font-[700] capitalize leading-[155%] text-center">
          {t("trade_over_section.title")}
        </h3>

        <div className="flex justify-center gap-4">
          <div
          style={{
            border:"1px solid rgba(230, 175, 3, 0.12)"
          }}
          className="rounded-[16px] min-h-[280px] overflow-hidden pb-[14px]  w-[100%] space-y-[13px] bg-[#030F16]">
            <img  loading="lazy" src={takeimg1} className="min-h-[167px] w-[100%] object-cover" alt="Top Crypto Presale" />
            <div className="space-y-[4px] px-[14px]">
              <h3 className="text-[24px] text-[#fff] font-[600] leading-[140%] tracking-[-0.32px]">
                {t("trade_over_section.crypto.title")}
              </h3>
              <p className="text-[16px] font-[400] text-[#fff] leading-[157.143%] tracking-[-0.32px]">
                {t("trade_over_section.crypto.description")}
              </p>
            </div>
          </div>

          <div
          style={{
            border:"1px solid rgba(230, 175, 3, 0.12)"
          }}
          className="rounded-[16px] min-h-[280px] overflow-hidden pb-[14px]  w-[100%] space-y-[13px] bg-[#030F16]">
            <img  loading="lazy" src={takeimg2} className="min-h-[167px] w-[100%] object-cover" alt="Top Crypto Presale" />
            <div className="space-y-[4px] px-[14px]">
              <h3 className="text-[24px] text-[#fff] font-[600] leading-[140%] tracking-[-0.32px]">
                {t("trade_over_section.stocks.title")}
              </h3>
              <p className="text-[16px] font-[400] text-[#fff] leading-[157.143%] tracking-[-0.32px]">
                {t("trade_over_section.stocks.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Second Row (3 Cards) */}
        <div className="flex justify-center gap-4">
          <div
          style={{
            border:"1px solid rgba(230, 175, 3, 0.12)"
          }}
          className="rounded-[16px] min-h-[280px] overflow-hidden pb-[14px]  w-[100%] space-y-[13px] bg-[#030F16]">
            <img  loading="lazy" src={takeimg3} className="min-h-[167px] w-[100%] object-cover" alt="Stocks Trading Platform" />
            <div className="space-y-[4px] px-[14px]">
              <h3 className="text-[24px] text-[#fff] font-[600] leading-[140%] tracking-[-0.32px]">
                {t("trade_over_section.forex.title")}
              </h3>
              <p className="text-[16px] font-[400] text-[#fff] leading-[157.143%] tracking-[-0.32px]">
                {t("trade_over_section.forex.description")}
              </p>
            </div>
          </div>

          <div
          style={{
            border:"1px solid rgba(230, 175, 3, 0.12)"
          }}
          className="rounded-[16px] min-h-[280px] overflow-hidden pb-[14px]  w-[100%] space-y-[13px] bg-[#030F16]">
            <img  loading="lazy" src={takeimg4} className="min-h-[167px] w-[100%] object-cover" alt="Crypto Assets Trading" />
            <div className="space-y-[4px] px-[14px]">
              <h3 className="text-[24px] text-[#fff] font-[600] leading-[140%] tracking-[-0.32px]">
                {t("trade_over_section.commodities.title")}
              </h3>
              <p className="text-[16px] font-[400] text-[#fff] leading-[157.143%] tracking-[-0.32px]">
                {t("trade_over_section.commodities.description")}
              </p>
            </div>
          </div>

          <div
          style={{
            border:"1px solid rgba(230, 175, 3, 0.12)"
          }}
          className="rounded-[16px] min-h-[280px] overflow-hidden pb-[14px]  w-[100%] space-y-[13px] bg-[#030F16]">
            <img  loading="lazy" src={takeimg5} className="min-h-[167px] w-[100%] object-cover" alt="" />
            <div className="space-y-[4px] px-[14px]">
              <h3 className="text-[24px] text-[#fff] font-[600] leading-[140%] tracking-[-0.32px]">
                {t("trade_over_section.indices.title")}
              </h3>
              <p className="text-[16px] font-[400] text-[#fff] leading-[157.143%] tracking-[-0.32px]">
                {t("trade_over_section.indices.description")}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TradeOverSec;
