import React from "react";
import { useTranslation } from "react-i18next";

// import howimg from "../assets/HowDoesItSec/hiwimg.png";
import excixn1 from "../assets/ExclusiveSec/excixn (1).webp";
import excixn2 from "../assets/ExclusiveSec/excixn (2).png";
import excixn3 from "../assets/ExclusiveSec/excixn (3).svg";
import excixn4 from "../assets/ExclusiveSec/excixn (4).webp";

const cardItems = [
  {
    id: "01",
    img: excixn1,
    title: "exclusive_benefits_section.items.benefit_1.title",
    description: "exclusive_benefits_section.items.benefit_1.description",
    alt: "best crypto presales to buy now"
  },
  {
    id: "02",
    img: excixn2,
    title: "exclusive_benefits_section.items.benefit_2.title",
    description: "exclusive_benefits_section.items.benefit_2.description",
    alt: "Best Crypto Trading"
  },
  {
    id: "03",
    img: excixn3,
    title: "exclusive_benefits_section.items.benefit_3.title",
    description: "exclusive_benefits_section.items.benefit_3.description",
    alt: "Professional Trading Platform"
  },
  {
    id: "04",
    img: excixn4,
    title: "exclusive_benefits_section.items.benefit_4.title",
    description: "exclusive_benefits_section.items.benefit_4.description",
    alt: "Global Trading Network"
  },
];

function ExclusiveBenefitsSec() {
  const { t } = useTranslation();

  return (
    <div className="py-[50px] bg-[#000]">
      <div className="max-w-[1400px] w-[100%] mx-auto relative">
        <div>
          <h3 className="text-[40px] capitalize leading-[155.556%] text-[#fff] text-center font-[700]">
            {t("exclusive_benefits_section.title")}
          </h3>
        </div>
        <div className="max-w-[1200px] pt-[30px] w-[100%] mx-auto ">
          <div className="grid grid-cols-4 gap-x-[21px]">
            {cardItems.map((item) => (
              <div
                key={item.id}
                className="mx-auto px-[15px] flex flex-col justify-center pt-[20px] pb-[34px] min-h-[310px] max-h-[330px]  rounded-[9px] space-y-[20px] "
                style={{
                  border: "1.139px solid #2F2F2F",
                  background:"rgba(17, 17, 17, 0.66)"
                }}
              >
                <div className="max-h-[116px] h-[100%] flex justify-center items-center">
                  <img src={item.img} className="max-h-[116px] h-[100%]" alt={item.alt} />
                </div>
                <h3
                  className="text-[22px] text-center text-[#fff] font-[600] leading-[115%]"
                  dangerouslySetInnerHTML={{ __html: t(item.title) }}
                ></h3>
                <h4 className="text-[15px] text-center text-[#fff] font-[400] leading-[111.111%]">
                  {t(item.description)}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExclusiveBenefitsSec;
