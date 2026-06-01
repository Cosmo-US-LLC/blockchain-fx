import React from "react";
import { useTranslation } from "react-i18next";
import swpicon from "../assets/wallet/swp.svg";
import lbankLogo from "../assets/Popup/lbank-logo.svg";

const pillStyle = {
  background: "rgba(176, 176, 176, 0.17)",
};

const blurredPlaceholders = [
  { color: "#0052FE" },
  { color: "#00F0FF" },
  { color: "#7635F5" },
];

const ExchangePill = ({ blurred = false, children }) => (
  <div
    className={`flex h-[24px] min-w-[61.5px] items-center gap-[4px] rounded-[4.44px] border border-[#ABABAB] px-[4px] ${
      blurred ? "blur-[3.25px] opacity-[0.73]" : ""
    }`}
    style={pillStyle}
  >
    {children}
  </div>
);

const ExchangeListingsBar = ({ className = "" }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`w-full max-w-[414px] rounded-[8px] border border-[#545454] px-[6px] pb-[16px] pt-[14px] ${className}`}
    >
      <h4 className="mb-[12px] md:text-start text-center text-[10px] font-semibold leading-[75%] text-[#808080]">
        {t("wallet_section.exchanges")}
      </h4>
      <div className="flex flex-wrap justify-center gap-[8px]">
        <ExchangePill>
          <img
            src={swpicon}
            className="h-[14.813px] w-[14.813px]"
            alt={t("wallet_section.uniswap")}
          />
          <span className="text-[8px] font-bold leading-none text-white">
            {t("wallet_section.uniswap")}
          </span>
        </ExchangePill>

        <ExchangePill>
          <span className="flex h-[14.813px] w-[14.813px] shrink-0 items-center justify-center rounded-full bg-[#F0B90B]">
            <img src={lbankLogo} className="h-[8px] w-[6px]" alt="LBANK" />
          </span>
          <span className="text-[8px] font-bold leading-none text-white">
            LBANK
          </span>
        </ExchangePill>

        {blurredPlaceholders.map((item) => (
          <ExchangePill key={item.color} blurred>
            <span
              className="h-[14.813px] w-[14.813px] shrink-0 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-[6.913px] font-bold leading-none text-white">
              {t("wallet_section.uniswap")}
            </span>
          </ExchangePill>
        ))}
      </div>
    </div>
  );
};

export default ExchangeListingsBar;
