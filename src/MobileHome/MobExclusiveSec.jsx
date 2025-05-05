import React from "react";
import { useTranslation } from "react-i18next";

import excixn1 from "../assets/ExclusiveSec/excixn (1).webp";
import excixn2 from "../assets/ExclusiveSec/excixn5.webp";
import excixn3 from "../assets/ExclusiveSec/excixn (3).svg";
import excixn4 from "../assets/ExclusiveSec/excixn (4).webp";

function MobExclusiveSec() {
  const { t } = useTranslation();

  const cardItems = [
    {
      id: "benefit_1",
      img: excixn1,
    },
    {
      id: "benefit_2",
      img: excixn2,
    },
    {
      id: "benefit_3",
      img: excixn3,
    },
    {
      id: "benefit_4",
      img: excixn4,
    },
  ];

  return (
    <div className="pt-[34px] pb-[34px] bg-[#030B10]">
      <div className="w-[100%] mx-auto relative">
        <h3
          className="text-[30px] capitalize leading-[120%] text-[#FFF] text-center tracking-[-2.548px] font-[600]"
          
        >
          {t("exclusive_benefits_section.title")}
        </h3>

        <div className="pt-[22px] px-6 mx-auto">
          <div className="space-y-[16px]">
            {cardItems.map((item) => (
              <div
                key={item.id}
                className="py-6 px-4 rounded-[16px] bg-[#030F16] flex flex-col justify-center gap-4 border border-[rgba(230,175,3,0.12)]"
              >
                <div className="max-h-[127px] flex justify-center items-center">
                  <img src={item.img} className="max-h-[90px]" alt="" />
                </div>
                <h3
                  className="text-[20px] text-center text-[#FFF] font-[600] tracking-[-1.672px] leading-[120%]"
                  dangerouslySetInnerHTML={{
                    __html: t(
                      `exclusive_benefits_section.items.${item.id}.title`
                    ),
                  }}
                />
                <h4 className="text-[15px] mx-auto text-center text-[#fff] font-[400] leading-[160%] tracking-[-0.3182px]">
                  {t(`exclusive_benefits_section.items.${item.id}.description`)}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobExclusiveSec;
