import React from "react";
import icn1 from "../assets/KYCVerified/kycicn (1).svg";
import icn2 from "../assets/KYCVerified/kycicn (3).svg";
import icn3 from "../assets/KYCVerified/image_588254259.webp";
import { useTranslation } from "react-i18next";

function KYCVerifiedMob() {
  const { t } = useTranslation();

  const cardItems = [
    {
      img: "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/herosvg%20(2).svg",
    },
    {
      img: "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/KYCVerified/fycicn%20(1).webp",
    },
    {
      img: "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/KYCVerified/image_588254259.webp",
    },
  ];

  return (
    <div className="pb-[50px] pt-[20px] bg-[#020B10]">
      <div className="w-[90%] mx-auto relative">
        <div className="w-[100%] mx-auto">
          <h3 className=" pb-[30px] text-[#fff] max-w-[300px] mx-auto text-[30px] font-[600] leading-[120%] tracking-[-1.5px] text-center">
            {t("KYCVerified.security_verified_title")}
          </h3>
          <div className="grid grid-cols-1 gap-y-[19px]">
            {cardItems.map((item, index) => (
              <div
                key={index}
                className="pl-[16px] pr-[12px] w-[100%] flex flex-col justify-between pt-[20px] pb-[24px]  min-h-[200.384px] bg-[#010E11] rounded-[16px]"
                style={{
                  border: "1px solid rgba(230, 175, 3, 0.12)",
                }}
              >
                <div className="flex justify-between pb-[15px] items-center">
                  <img
                    src={item.img}
                    className="h-[28px] object-cover"
                    alt="security verified"
                  />
                  <p
                    style={{
                      background: "rgba(0, 124, 45, 0.16)",
                    }}
                    className=" py-[3px] rounded-[5px] px-[8px] text-[#01BA48] text-[14px] font-[500]"
                  >
                    {t("KYCVerified.completed")}
                  </p>
                </div>
                <div>
                  <div className="min-h-[30px] flex justify-start pb-[10px] items-center">
                    <h3 className="text-[20px] text-[#fff] font-[600] break-normal leading-[109.316%]">
                      {t(`KYCVerified.card_items.${index}.title`)}
                    </h3>
                  </div>
                  <h4 className="mobilepara text-[15px] max-w-[345px] text-[#fff] font-[400] leading-[135.796%]">
                    <span className="" dangerouslySetInnerHTML={{ __html: t(`KYCVerified.card_items.${index}.description`) }} />
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

export default KYCVerifiedMob;
