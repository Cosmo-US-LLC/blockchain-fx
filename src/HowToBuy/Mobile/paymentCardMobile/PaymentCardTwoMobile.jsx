import React from "react";
import visaIcon from "../../../assets/hoyToBuy/payment/card2/Group.svg";
import mastercardIcon from "../../../assets/hoyToBuy/payment/card2/Group (1).svg";
import icon1 from "../../../assets/hoyToBuy/mobile/step2/card2/button1.webp";
import icon2 from "../../../assets/hoyToBuy/mobile/step2/card2/button2.webp";
import icon3 from "../../../assets/hoyToBuy/mobile/step2/card2/button3.webp";
import icon4 from "../../../assets/hoyToBuy/mobile/step2/card2/button4.webp";
import icon5 from "../../../assets/hoyToBuy/mobile/step2/card2/button5.webp";
import icon6 from "../../../assets/hoyToBuy/mobile/step2/card2/button6.webp";

const currencyOptions = [
  { icon: icon1, label: "ETH", sub: "ERC-20" },
  { icon: icon2, label: "BNB", sub: "BEP-20" },
  { icon: icon3, label: "USDT", sub: "ERC-20" },
  { icon: icon4, label: "BTC", sub: "BITCOIN" },
  { icon: icon5, label: "SOL", sub: "SOLANA" },
  { icon: icon6, label: "More", sub: "", isMore: true },
];

function PaymentCardTwoMobile() {
  return (
    <div className=" bg-[#0F0F0F] border border-[#3F3F3F] rounded-xl px-2 py-3 flex items-center gap-2 w-full  ">
      <div className="flex flex-col gap-2">
        <p className="text-[#9F9F9F] text-[10px] font-[400] leading-[12px]">
          Select your preferred
          <br />
          currency or card option.
        </p>
      </div>

      <div className="flex flex-col gap-2 w-[180px]">
        <button className="bg-[#1C1C1C] w-[180px]  rounded-lg px-4 py-1 flex items-center gap-2 text-white text-[6px] font-[600] justify-center hover:bg-[#2A2A2A] transition">
          <img src={visaIcon} alt="Visa" className="w-5 h-5" />
          <img src={mastercardIcon} alt="Mastercard" className="w-5 h-5" />
          Buy with Card
        </button>
        <div className="flex flex-wrap justify-start gap-1">
          {currencyOptions.map((item, idx) => (
            <div
              key={idx}
               
            >
              {item.icon && (
                <img src={item.icon} alt={item.label} className="w-[56px] h-4" />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* 
      <button className="bg-[#1C1C1C] rounded-lg px-4 py-3 flex items-center gap-3 text-white text-sm font-semibold justify-center hover:bg-[#2A2A2A] transition">
        <img src={visaIcon} alt="Visa" className="w-5 h-5" />
        <img src={mastercardIcon} alt="Mastercard" className="w-5 h-5" />
        Buy with Card
      </button> */}
      {/* 
      <div className="flex flex-wrap justify-center gap-3">
        {currencyOptions.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1C1C1C] rounded-lg w-[100px] flex flex-col items-center gap-1 px-2 py-2 text-white text-sm hover:bg-[#2A2A2A] transition"
          >
            {item.icon ? (
              <img src={item.icon} alt={item.label} className="w-6 h-6" />
            ) : (
              <div className="w-6 h-6 rounded-full bg-[#333] flex items-center justify-center text-xs text-white font-semibold">
                +
              </div>
            )}
            <span className="font-semibold text-[12px]">{item.label}</span>
            {item.sub && (
              <span className="text-[10px] text-[#9F9F9F] font-light">
                {item.sub}
              </span>
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default PaymentCardTwoMobile;
