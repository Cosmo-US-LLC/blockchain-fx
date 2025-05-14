import React from "react";
import { useTranslation } from "react-i18next";
import rwdimg1 from "../assets/OurAwardSec/rwdimg (1).png";
import rwdimg2 from "../assets/OurAwardSec/rwdimg (2).webp";
import rwdimg3 from "../assets/OurAwardSec/rwdimg (3).webp";

function MobOurAwardSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[24px] bg-[#020B10] pb-[24px]" id="win">
      <div className="relative space-y-[20px] w-[90%] mx-auto">
        <div className="space-y-[10px]">
          <h4 className="text-[20px] font-[400] text-center capitalize leading-[114%] text-[#FFF] tracking-[-1px]">
            {t("multiAward.heading")} 
          </h4>
          <h3 className="text-[30px] font-[700] text-center leading-[120%] text-[#FFF] tracking-[-1.5px]"
          dangerouslySetInnerHTML={{ __html: t(`multiAward.subheading`) }}
          >
          </h3>
        </div>
        <div className="space-y-[40px]">
          <div
            className="space-y-[10px] px-[80px] max-h-[673px] pt-[15px] rounded-[12.839px] w-[100%]"
            style={{
              background: "#111111",
              backdropFilter: "blur(49.51113510131836px)",
              border: "1.102px solid #E6AF0320",
            }}
          >
            <div className="space-y-[10px] max-w-[324.48px] h-[160px] flex items-center justify-center flex-col w-[100%] relative mx-auto pb-[2.4rem]">
              <div className="flex flex-col items-center pb-2">
                <h3 className="text-[7px] text-center text-[#FFF] uppercase font-[700]">
                  {t("multiAward.theCoinRise")}
                </h3>
                <p className="text-[10px] text-center leading-[115%] uppercase text-[#FFF] font-[400]"
                dangerouslySetInnerHTML={{ __html: t(`multiAward.theCoinRise_desp`) }}
                >
                </p>
              </div>
              <img
                src={rwdimg1}
                className="max-w-[194px] w-[100%] absolute top-[-3%]"
                alt="Award"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={rwdimg2}
                className="max-h-[240px] object-cover"
                alt="Award image"
              />
            </div>
          </div>
          <div
            className="space-y-[10px] px-[60px] max-h-[673px] pt-[15px] rounded-[12.839px] w-[100%]"
            style={{
              background: "#111111",
              backdropFilter: "blur(49.51113510131836px)",
              border: "1.102px solid #E6AF0320",
            }}
          >
            <div className="space-y-[10px] max-w-[324.48px] h-[160px] flex items-center justify-center flex-col w-[100%] relative mx-auto pb-[2.4rem]">
              <div className="flex flex-col items-center pb-2">
                <h3 className="text-[7px] text-center text-[#FFF] uppercase font-[700]">
                  {t("multiAward.altcoinDaily")} 
                </h3>
                <p className="text-[10px] text-center leading-[115%] uppercase text-[#FFF] font-[400]"
                dangerouslySetInnerHTML={{ __html: t(`multiAward.altcoinDaily_desp`) }}
                >
                </p>
              </div>
              <img
                src={rwdimg1}
                className="max-w-[194px] w-[100%] absolute top-[-3%]"
                alt="Award"
              />
            </div>
            <div className="">
              <img
                src={rwdimg3}
                className="w-[100%] object-cover"
                alt="Award image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobOurAwardSec;
