import React from "react";
import goldenShadow from "../../../assets/hoyToBuy/mobile/ellipes-bg.png";
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
import GooglePay from "../../../assets/hoyToBuy/payment/stepTwoCards/GooglePay.svg";
import craditCard from "../../../assets/hoyToBuy/payment/stepTwoCards/craditCard.svg";
import visa from "../../../assets/hoyToBuy/payment/stepTwoCards/visa.svg";
import PaymentCardOneMobile from "./PaymentCardOneMobile";
import PaymentCardTwoMobile from "./PaymentCardTwoMobile";
import PaymentCardThreeMobile from "./PaymentCardThreeMobile";

const paymentIcons = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
  icon11,
];

const paymentMethods = [GooglePay, craditCard, visa];

function StepTwoPaymentCardMobile() {
  return (
    <div className="bg-[#020B10] py-10 px-6">
      <div className="relative w-full py-6 px-4 flex flex-col overflow-hidden gap-8 border-[2px] border-[#E6AF0320] rounded-[16px]  ">
      <img
          src={goldenShadow}
          alt="Golden Background Shadow"
          className="absolute top-0 left-0 z-10 h-auto"
        />

        <div className="z-30 flex flex-col items-center text-white">
          <p className="text-[25px] font-[700] leading-[30px] tracking-[-1.25px] text-[#E5AE00] uppercase mb-2">
            Step 2
          </p>
          <h2 className="text-[26px] font-[600] leading-[36px] tracking-[-1.5px] mb-1">
            Select Payment Method
          </h2>
          <p className="text-[14px] font-[400] leading-[20px] tracking-[-0.32px] text-[#9F9F9F] ">
            Choose from the following supported options:
          </p>
        </div>

        <div className="z-30 flex flex-wrap items-start justify-center gap-2">
          {paymentIcons.map((icon, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[42px] h-[42px] rounded-lg border border-[#3F3F3F]"
            >
              <img
                src={icon}
                alt={`Payment Icon ${index + 1}`}
                className="w-[26px] h-[26px] object-contain"
              />
            </div>
          ))}
        </div>

        <div className="z-30 flex flex-wrap items-center justify-center gap-2 ">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 w-[65px] h-[40px] px-3 py-2 rounded-lg border border-[#3F3F3F] text-white text-sm"
            >
              <img
                src={method}
                alt={`Payment Method ${index + 1}`}
                className="w-[40px] h-[40px] object-contain"
              />
            </div>
          ))}
        </div>

        <div className="z-30 flex flex-col items-center gap-6">
          <PaymentCardOneMobile />
          <PaymentCardTwoMobile />
          <PaymentCardThreeMobile />
        </div>
      </div>
    </div>
  );
}

export default StepTwoPaymentCardMobile;
