import React from "react";
import { useTranslation } from "react-i18next";
import creditVideo from "../assets/CreditCard/cred.mp4";
import applepay from "../assets/CreditCard/btnsvg (2).png";
import googlelepay from "../assets/CreditCard/btnsvg (1).png";
import ernvet1 from "../assets/EarnOnSec/Ellipse 4.png";
import ernvet2 from "../assets/EarnOnSec/Ellipse 3.png";

function CreditCard() {
  const { t } = useTranslation(); 

  return (
    <div className="pt-[20px] pb-[50px] bg-[#000]">
      <div
        className="max-w-[1200px] reative overflow-hidden relative bg-[#111] min-h-[480px] p-[30px] w-[100%] space-y-[25px] mx-auto rounded-[13px]"
        style={{
          border: "1px solid #2B2B2B",
        }}
      >
        <div className="relative z-[9] space-x-[2rem] flex justify-between items-center">
          <div className="w-[45%] p-[40px] min-h-[460px] rounded-[11px] space-y-[20px]">
            <h3
              className="text-[40px] capitalize font-[700] leading-[128%] tracking-[-1px]"
              style={{
                background: "linear-gradient(90deg, #FFF 0%, #FACD42 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("creditCard.title")}
            </h3>
            <ul className="list-disc">
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500]">{t("creditCard.item1")}</li>
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500]">{t("creditCard.item2")}</li>
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500]">{t("creditCard.item3")}</li>
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500]">{t("creditCard.item4")}</li>
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500]">{t("creditCard.item5")}</li>
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500]">{t("creditCard.item6")}</li>
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500]">{t("creditCard.item7")}</li>
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500]">{t("creditCard.item8")}</li>
            </ul>
            <div className="flex justify-start items-center space-x-3">
              <h4 className="text-[16px] text-[#fff] font-[400]">
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
          <div className="w-[54%] flex items-center flex-col justify-center min-h-[460px] space-y-[20px] rounded-[11px]">
            <video
              width="500"
              className="!rounded-[11px]"
              height="260"
              playsInline
              controls={false}
              autoPlay
              muted
              loop
            >
              <source src={creditVideo} type="video/mp4" />
            </video>
            <div>
              <p className="text-[10px] text-center max-w-[816px] text-[#fff] mx-auto tracking-[-0.32px] leading-[230%] font-[400]">
                {t("creditCard.shippingNote")}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-[-8%] left-[-5%]">
          <img src={ernvet2} alt="" />
        </div>
        <div className="absolute bottom-[0%] right-[0%]">
          <img src={ernvet1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
