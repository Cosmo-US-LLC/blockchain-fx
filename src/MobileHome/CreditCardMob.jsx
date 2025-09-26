import React from "react";
import { useTranslation } from "react-i18next";
import card from "../assets/CreditCard/card.webp";
import ellipse from "../assets/EarnOnSec/Ellipse 3.png";
import applepay from "../assets/CreditCard/btnsvg (2).png";
import googlelepay from "../assets/CreditCard/btnsvg (1).png";

function CreditCardMob() {
  const { t } = useTranslation();


  return (
    <div className="pt-[10px] pb-[34px] px-6 bg-[#020B10]">
      <div
        style={{
          border: "1px solid rgba(231, 178, 9, 0.17)",
        }}
        className="relative flex flex-col gap-6 rounded-[16px] px-6 py-6 overflow-hidden bg-[#010E11]"
      >
        <img
          src={ellipse}
          className="absolute top-[0%] w-[500px] h-[520px] left-[0%]"
          alt="BlockchainFX"
        />
        <h3 className=" text-left capitalize text-[30px] font-[600] leading-[120%] tracking-[-1.5px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FACE43]">
          {t("creditCard.title")}
        </h3>

        <ul className="list-disc space-y-[6px]">
          <div className="w=[100%] h-[0.3px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 py-[8px] font-[500]">
            {t("creditCard.item2")}
          </li>
           <div className="w=[100%] h-[0.5px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 py-[8px] font-[500]">
            {t("creditCard.item7")}
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 py-[8px] font-[500]">
            {t("creditCard.item3")}
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 py-[8px] font-[500]">
            {t("creditCard.item4")}
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 py-[8px] font-[500]">
            {t("creditCard.item5")}
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 py-[8px] font-[500]">
            {t("creditCard.item6")}
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 pt-[8px] font-[500]">
            {t("creditCard.item8")}
          </li>
        </ul>

        <div className="flex items-center justify-center space-x-2">
          <h4 className="text-[14px] text-[#fff] font-[400]">
            {t("creditCard.compatibleWith")}
          </h4>
          <button className="w-[80.2px] h-[36px] hover:opacity-[0.7] flex justify-center items-center rounded-[4.8px]">
            <img src={applepay} className="h-[36px]" alt="Apple Pay" />
          </button>
          <button className="w-[80.2px] h-[36px] hover:opacity-[0.7] flex justify-center items-center rounded-[4.8px]">
            <img src={googlelepay} className="h-[36px]" alt="Google Pay" />
          </button>
        </div>

        <div
          style={{
            border: "1px solid rgba(255, 255, 255, 0.30)",
          }}
          className="w-[100%] rounded-[16px] items-center py-[20px] flex justify-center"
        >
          <img src={card} className="mx-auto max-w-[258px]" alt="BlockchainFX credit Card" />
        </div>
        <p className="text-[12px] text-[#FFF] max-w-[315px] mx-auto font-[400] text-center leading-[175%] tracking-[-0.32px]">
          {t("creditCard.shippingNote")}
        </p>
      </div>
    </div>
  );
}

export default CreditCardMob;
