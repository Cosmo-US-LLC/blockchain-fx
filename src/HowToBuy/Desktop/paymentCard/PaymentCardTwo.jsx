import React from "react";
import visaIcon from "../../../assets/hoyToBuy/payment/card2/Group.svg";
import mastercardIcon from "../../../assets/hoyToBuy/payment/card2/Group (1).svg";
import icon1 from "../../../assets/hoyToBuy/mobile/step2/card2/button1.webp";
import icon2 from "../../../assets/hoyToBuy/mobile/step2/card2/button2.webp";
import icon3 from "../../../assets/hoyToBuy/mobile/step2/card2/button3.webp";
import icon4 from "../../../assets/hoyToBuy/mobile/step2/card2/button4.webp";
import icon5 from "../../../assets/hoyToBuy/mobile/step2/card2/button5.webp";
import icon6 from "../../../assets/hoyToBuy/mobile/step2/card2/button6.webp";
import { useTranslation } from "react-i18next";
const currencyOptions = [
  { icon: icon1, label: "ETH", sub: "ERC-20" },
  { icon: icon2, label: "BNB", sub: "BEP-20" },
  { icon: icon3, label: "USDT", sub: "ERC-20" },
  { icon: icon4, label: "BTC", sub: "BITCOIN" },
  { icon: icon5, label: "SOL", sub: "SOLANA" },
  { icon: icon6, label: "More", sub: "", isMore: true },
];

function PaymentCardTwo() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#0F0F0F] border border-[#E6AF0320] rounded-xl px-6 py-6 flex items-center justify-between gap-10  w-[808px]">
      <div className="flex-1 pl-4">
        <p className="text-[#9F9F9F] text-[18px] leading-[28px]">
          {t("paymentCardTwo.selectText1")}
          <br />
          {t("paymentCardTwo.selectText2")}
        </p>
      </div>

      <div className="flex flex-col gap-3 w-[360px]">
        <button className="bg-[#1C1C1C] rounded-lg px-4 py-2 flex items-center gap-3 text-white text-[12px] leading-[6.504px] font-[600] justify-center">
          <img src={visaIcon} className="w-5 h-5" />
          <img src={mastercardIcon} className="w-5 h-5" />
          {t("paymentCardTwo.buyWithCard")}
        </button>

        <div className="flex flex-wrap justify-start gap-2">
          {currencyOptions.map((item, idx) => (
            <div key={idx}>
              {item.icon && (
                <img src={item.icon} className="w-[114px] h-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaymentCardTwo;
