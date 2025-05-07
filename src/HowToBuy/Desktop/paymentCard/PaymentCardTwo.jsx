import React from "react";
import visaIcon from "../../../assets/hoyToBuy/payment/card2/Group.svg";
import mastercardIcon from "../../../assets/hoyToBuy/payment/card2/Group (1).svg";
import icon1 from "../../../assets/hoyToBuy/payment/stepTwoCards/icon1.svg";
import icon2 from "../../../assets/hoyToBuy/payment/stepTwoCards/icon2.svg";
import icon3 from "../../../assets/hoyToBuy/payment/stepTwoCards/icon3.svg";
import icon4 from "../../../assets/hoyToBuy/payment/stepTwoCards/icon4.svg";
import icon5 from "../../../assets/hoyToBuy/payment/stepTwoCards/icon5.svg";
import icon6 from "../../../assets/hoyToBuy/payment/stepTwoCards/icon6.svg";
import icon7 from "../../../assets/hoyToBuy/payment/stepTwoCards/icon7.svg";
import icon8 from "../../../assets/hoyToBuy/payment/stepTwoCards/icon8.svg";
import icon9 from "../../../assets/hoyToBuy/payment/stepTwoCards/icon9.svg";
import icon10 from "../../../assets/hoyToBuy/payment/stepTwoCards/icon10.svg";
import icon11 from "../../../assets/hoyToBuy/payment/stepTwoCards/icon11.svg";

function PaymentCardTwo() {
  return (
    <div className="bg-[#0F0F0F] border border-[#3F3F3F] rounded-xl px-6 py-6 flex items-center justify-between gap-10  w-[808px]">
      <div className="flex-1">
        <p className="text-[#9F9F9F] text-[18px] leading-[28px]">
          Select your preferred
          <br />
          currency or card option.
        </p>
      </div>

      <div className="flex flex-col gap-3 w-[360px]">
        <button className="bg-[#1C1C1C]   rounded-lg px-4 py-2 flex items-center gap-3 text-white text-[12px] leading-[6.504px] font-[600] justify-center">
          <img src={visaIcon} alt="Visa" className="w-5 h-5" />
          <img src={mastercardIcon} alt="Mastercard" className="w-5 h-5" />
          Buy with Card
        </button>

        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: icon1, label: "ETH", sub: "ERC-20" },
            { icon: icon2, label: "BNB", sub: "BEP-20" },
            { icon: icon3, label: "USDT", sub: "ERC-20" },
            { icon: icon4, label: "BTC", sub: "BITCOIN" },
            { icon: icon5, label: "SOL", sub: "SOLANA" },
            { icon: null, label: "More", sub: "", isMore: true },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1C1C1C] rounded-lg w-[115px] flex items-center justify-between px-2 py-[6px] text-white text-sm"
            >
              <div className="flex items-center gap-2">
                {item.icon ? (
                  <img src={item.icon} alt={item.label} className="w-6 h-6" />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[#333]" />
                )}
                <div className="flex flex-col gap-1 text-left">
                  <span className="font-[500] text-[10px] leading-[6.504px]">{item.label}</span>
                  {item.sub && (
                    <span className="text-[8px] text-[#9F9F9F] font-[400] leading-[6.504px]">
                      {item.sub}
                    </span>
                  )}
                </div>
              </div>
              <svg
                className="w-3 h-3 text-[#9F9F9F]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaymentCardTwo;
