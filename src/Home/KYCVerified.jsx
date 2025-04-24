import React from "react";
import { useTranslation } from "react-i18next";

import icn1 from "../assets/KYCVerified/kycicn (1).svg";
import icn2 from "../assets/KYCVerified/kycicn (3).svg";
import icn3 from "../assets/KYCVerified/kycicn (2).svg";

function KYCVerified() {
  const { t } = useTranslation();

  const cardItems = [
    {
      img: icn2,
      title: t("KYCVerified.card_items.0.title"),
      description: t("KYCVerified.card_items.0.description")
    },
    {
      img: icn1,
      title: t("KYCVerified.card_items.1.title"),
      description: t("KYCVerified.card_items.1.description")
    },
    {
      img: icn3,
      title: t("KYCVerified.card_items.2.title"),
      description: t("KYCVerified.card_items.2.description")
    }
  ];

  return (
    <div className="py-[50px] bg-[#020B10]">
      <div className="max-w-[1200px] pt-[35px] w-[100%] mx-auto relative">
        <h3 className="text-[40px] text-[#fff] font-[600] leading-[155.556%] leading-[-1px] text-center">
          {t("KYCVerified.security_verified_title")}
        </h3>
        <div className="pt-[25px] w-[100%] mx-auto">
          <div className="grid grid-cols-3 gap-x-[12px] gap-y-[19px]">
            {cardItems.map((item, index) => (
              <div
                key={index}
                className="pl-[16px] pr-[12px] w-[100%] flex flex-col justify-between pt-[20px] pb-[24px] max-h-[200.384px] min-h-[200.384px] bg-[#030F16] rounded-[16px]"
                style={{
                  border: "1px solid rgba(230, 175, 3, 0.12)"
                }}
              >
                <div className="flex justify-between pb-[15px] items-center">
                  <img src={item.img} className="h-[40px]" alt="Security_Verified" />
                  <p
                    style={{
                      background: "rgba(0, 124, 45, 0.16)"
                    }}
                    className="py-[3px] rounded-[5px] px-[8px] text-[#01BA48] text-[14px] font-[500]"
                  >
                    {t("KYCVerified.completed")}
                  </p>
                </div>
                <div>
                  <div className="min-h-[30px] flex justify-start pb-[10px] items-center">
                    <h3 className="text-[20px] text-[#fff] font-[600] break-normal leading-[109.316%]">
                      {item.title}
                    </h3>
                  </div>
                  <h4 className="text-[15px] text-[#fff] font-[400] leading-[135.796%]">
                    {item.description}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KYCVerified;
