import React from "react";

import excixn1 from "../assets/ExclusiveSec/excixn (1).webp";
import excixn2 from "../assets/ExclusiveSec/excixn5.webp";
import excixn3 from "../assets/ExclusiveSec/Vector (1).webp";
import excixn4 from "../assets/ExclusiveSec/excixn (4).webp";
import { useTranslation } from "react-i18next";



function MobExclusiveSec() {
  const { t } = useTranslation();
  const cardItems = [
    {
      id: "01",
      img: excixn1,
      title: t("exclusive_benefits_section.items.benefit_1.title"),
      description: t("exclusive_benefits_section.items.benefit_1.description"),
    },
    {
      id: "02",
      img: excixn2,
      title: t("exclusive_benefits_section.items.benefit_2.title"),
      description: t("exclusive_benefits_section.items.benefit_2.description"),
    },
    {
      id: "03",
      img: excixn3,
      title: t("exclusive_benefits_section.items.benefit_3.title"),
      description: t("exclusive_benefits_section.items.benefit_3.description"),
    },
    {
      id: "04",
      img: excixn4,
      title: t("exclusive_benefits_section.items.benefit_4.title"),
      description: t("exclusive_benefits_section.items.benefit_4.description"),
    },
  ];
  return (
    <div className="pt-[34px] pb-[34px] bg-[#020B10]">
      <div className="w-[100%] mx-auto relative">
        <h3 className="text-[30px] font-[600] leading-[120%] tracking-[-1.5px] capitalize  text-[#FFF] text-center ">
          <span dangerouslySetInnerHTML={{ __html: t("exclusive_benefits_section.title") }} />
        </h3>

        <div className="pt-[22px] px-6 mx-auto ">
          <div className="space-y-[16px]">
            {cardItems.map((item) => (
              <div
                key={item.id}
                className="py-6 px-4 rounded-[16px] bg-[#010E11] flex flex-col justify-center gap-4  "
                style={{
                  border:"1px solid rgba(230, 175, 3, 0.12)"
                }}
              >
                <div className="max-h-[127px] flex justify-center items-center">
                  <img src={item.img} className="max-h-[120px] " alt="" />
                </div>
                <h3
                  className="text-[20px] text-center  text-[#FFF] font-[600] tracking-[-1.672px] leading-[120%]"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h3>
                <h4 className="text-[15px] mx-auto text-center text-[#fff] font-[400] leading-[160%] tracking-[-0.3182px]"
                 dangerouslySetInnerHTML={{ __html: item.description }}
                >
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
