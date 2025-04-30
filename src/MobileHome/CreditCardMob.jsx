import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import creditVideo from "../assets/CreditCard/cred.mp4";
import ellipse from "../assets/EarnOnSec/Ellipse 3.png";
import applepay from "../assets/CreditCard/btnsvg (2).png";
import googlelepay from "../assets/CreditCard/btnsvg (1).png";

function CreditCardMob() {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;
      video.setAttribute("playsInline", "");
      video.setAttribute("muted", "");
      video.play().catch((error) => {
        console.log("Autoplay failed. Error:", error);
      });
    }
  }, []);

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 80;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <div className="pt-[34px] pb-[34px] px-6 bg-[#030B10]">
      <div className="relative flex flex-col gap-8 rounded-[16px] px-6 py-6 border border-[#E7B2092B] overflow-hidden">
        <img
          src={ellipse}
          className="absolute top-[0%] w-[500px] h-[520px] left-[0%]"
          alt=""
        />
        <h3 className="text-[32px] text-left capitalize font-[600] leading-[128%] tracking-[-2.52px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FACE43]">
          {t("creditCard.title")}
        </h3>

        <ul className="list-disc space-y-[6px]">
          <li className="text-[14px] text-[#fff] ml-3 py-[8px] font-[500]">
            {t("creditCard.item1")}
          </li>
          <div className="w=[100%] h-[0.3px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 py-[8px] font-[500]">
            {t("creditCard.item2")}
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
          <li className="text-[14px] text-[#fff] ml-3 py-[8px] font-[500]">
            {t("creditCard.item7")}
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 pt-[8px] font-[500]">
            {t("creditCard.item8")}
          </li>
        </ul>

        <div className="w-[100%] bg-[#030B10] rounded-[16px] items-center flex justify-center flex-col space-y-5">
          <video
            width="300"
            height="260"
            className="!rounded-[8px]"
            autoPlay
            playsInline
            muted
            loop
          >
            <source src={creditVideo} type="video/mp4" />
          </video>
        </div>
        <p className="text-[12px] text-[#FFF] font-[400] text-center leading-[175%] tracking-[-0.32px]">
          {t("creditCard.shippingNote")}
        </p>
        <div className="flex justify-center items-center space-x-2">
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
      </div>
    </div>
  );
}

export default CreditCardMob;
