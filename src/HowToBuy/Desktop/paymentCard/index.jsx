import React from "react";
import PaymentCardOne from "./PaymentCardOne";
import PaymentCardTwo from "./PaymentCardTwo";
import PaymentCardThree from "./PaymentCardThree";
import goldenShadow from "../../../assets/hoyToBuy/claim/claim-left-top-shadow.png";
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

function StepTwoPaymentCard() {
  return (
    <div className="py-12 bg-[#020B10]">
      <div className="max-w-[1200px] relative w-full mx-auto">
        <div className="relative flex items-center justify-center overflow-hidden flex-col gap-6 p-6 border-[2px] border-[#E6AF0320] rounded-[16px] h-[999px] ">
          <img
            src={goldenShadow}
            alt=""
            className="absolute top-0 left-0 z-10 h-auto"
          />
          <div className="z-30 flex flex-col items-center justify-center text-white ">
            <p className="text-[30px] font-semibold text-[#E5AE00]">STEP 2</p>
            <h2 className="mb-2 text-[48px] font-[600] leading-[57.6px] tracking-[-3.36px]">
              Select Payment Method
            </h2>
            <p className="text-[16px] text-[#9F9F9F] leading-[24px] tracking-[-0.32px]">
              Choose from the following supported options:
            </p>
          </div>
          <div className="z-30 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center justify-center w-[54px] h-[54px] rounded-lg border border-[#E6AF0320]">
              <img src={icon1} alt="Icon 1" className="" />
            </div>
            <div className="flex items-center justify-center w-[54px] h-[54px] rounded-lg border border-[#E6AF0320]">
              <img src={icon2} alt="Icon 2" className="" />
            </div>
            <div className="flex items-center justify-center w-[54px] h-[54px] rounded-lg border border-[#E6AF0320]">
              <img src={icon3} alt="Icon 3" className="" />
            </div>
            <div className="flex items-center justify-center w-[54px] h-[54px] rounded-lg border border-[#E6AF0320]">
              <img src={icon4} alt="Icon 4" className="" />
            </div>
            <div className="flex items-center justify-center w-[54px] h-[54px] rounded-lg border border-[#E6AF0320]">
              <img src={icon5} alt="Icon 5" className="" />
            </div>
            <div className="flex items-center justify-center w-[54px] h-[54px] rounded-lg border border-[#E6AF0320]">
              <img src={icon6} alt="Icon 6" className="" />
            </div>
            <div className="flex items-center justify-center w-[54px] h-[54px] rounded-lg border border-[#E6AF0320]">
              <img src={icon7} alt="Icon 6" className="" />
            </div>
            <div className="flex items-center justify-center w-[54px] h-[54px] rounded-lg border border-[#E6AF0320]">
              <img src={icon8} alt="Icon 7" className="" />
            </div>
            <div className="flex items-center justify-center w-[54px] h-[54px] rounded-lg border border-[#E6AF0320]">
              <img src={icon9} alt="Icon 8" className="" />
            </div>
            <div className="flex items-center justify-center w-[54px] h-[54px] rounded-lg border border-[#E6AF0320]">
              <img src={icon10} alt="Icon 9" className="" />
            </div>
            <div className="flex items-center justify-center w-[54px] h-[54px] rounded-lg border border-[#E6AF0320]">
              <img src={icon11} alt="Icon 9" className="" />
            </div>
          </div>

          <div className="z-30 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-2 w-[86px] h-[53px] px-3 py-2 rounded-lg border border-[#E6AF0320]  text-white text-sm">
              <img src={GooglePay} alt="G Pay" className="" />
            </div>
            <div className="flex items-center gap-2 justify-center w-[86px] h-[53px] px-3 py-2 rounded-lg  border border-[#E6AF0320] text-white text-sm">
              <img src={craditCard} alt="Apple Pay" className="" />
            </div>
            <div className="flex items-center gap-2 px-3 py-2 justify-center w-[86px] h-[53px] rounded-lg border border-[#E6AF0320]  text-white text-sm">
              <img src={visa} alt="VISA" className="" />
            </div>
          </div>
          <div className="z-30 flex flex-col items-center justify-center gap-6">
            <PaymentCardOne />
            <PaymentCardTwo />
            <PaymentCardThree />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepTwoPaymentCard;
