import React from "react";
import { useTranslation } from "react-i18next";
import icon_1 from "../assets/presale-v3/next_gen/icon_1.svg";
import icon_2 from "../assets/presale-v3/next_gen/icon_2.svg";
import icon_3 from "../assets/presale-v3/next_gen/icon_3.svg";
import icon_4 from "../assets/presale-v3/next_gen/icon_4.svg";
import icon_5 from "../assets/presale-v3/next_gen/icon_5.svg";
import icon_6 from "../assets/presale-v3/next_gen/icon_6.svg";
import icon_7 from "../assets/presale-v3/next_gen/icon_7.svg";
import icon_8 from "../assets/presale-v3/next_gen/icon_8.svg";
import icon_9 from "../assets/presale-v3/next_gen/icon_9.svg";
import icon_10 from "../assets/presale-v3/next_gen/icon_10.svg";
import ellipse2 from "../assets/presale-v3/ellipse2.svg";

function MobNextGenerationSec() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        border: "1.5px solid",
        borderRadius: "24px",
        borderImageSource:
          "linear-gradient(95.63deg, rgba(230, 175, 3, 0.3) 1.76%, rgba(29, 111, 66, 0) 99.42%)",
        borderImageSlice: 1,
      }}
      className="mt-[24px] relative mx-auto max-w-[404px]"
    >
      <img src={ellipse2} className="absolute" alt="ellipse2" />
      <div className="w-[90%] mx-auto space-y-[24px]">
        <h3 className="mt-8 text-[36px] font-[600] leading-[114%] leading-[-1px] text-center text-[white]"
         
        >
          {t("next_generation_section.title")}
        </h3>
        <div className="gap-y-[50px] grid grid-cols-2 pb-8">
          <div className="flex flex-col min-w-[185px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_1} className="w-[58px] h-[58px]" alt="icon_1" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]
            "
            dangerouslySetInnerHTML={{ __html: t(`next_generation_section.team_experience`) }}
            >
            </p>
          </div>
          <div className="flex flex-col min-w-[122px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_2} className="w-[58px] h-[58px]" alt="icon_2" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]
            "
            dangerouslySetInnerHTML={{ __html: t(`next_generation_section.one_click`) }}
            >
            </p>
          </div>
          <div className="flex flex-col min-w-[185px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_3} className="w-[58px] h-[58px]" alt="icon_3" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]
            "
            dangerouslySetInnerHTML={{ __html: t(`next_generation_section.assets`) }}
            >
            </p>
          </div>

          <div className="flex flex-col min-w-[122px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_4} className="w-[58px] h-[58px]" alt="icon_4" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]
            "
            dangerouslySetInnerHTML={{ __html: t(`next_generation_section.leverage`) }}
            >
            </p>
          </div>

          <div className="flex flex-col min-w-[185px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_5} className="w-[58px] h-[58px]" alt="icon_5" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]
            "
            dangerouslySetInnerHTML={{ __html: t(`next_generation_section.tight_spreads`) }}
            >
            </p>
          </div>

          <div className="flex flex-col min-w-[122px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_6} className="w-[58px] h-[58px]" alt="icon_6" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]
            "
            dangerouslySetInnerHTML={{ __html: t(`next_generation_section.charts`) }}
            >
            </p>
          </div>

          <div className="flex flex-col min-w-[185px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_7} className="w-[58px] h-[58px]" alt="icon_7" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]
            "
            dangerouslySetInnerHTML={{ __html: t(`next_generation_section.live_chat`) }}
            >
            </p>
          </div>

          <div className="flex flex-col min-w-[122px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_8} className="w-[58px] h-[58px]" alt="icon_8" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]
            "
            dangerouslySetInnerHTML={{ __html: t(`next_generation_section.indicators`) }}
            >
            </p>
          </div>

          <div className="flex flex-col min-w-[185px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_9} className="w-[58px] h-[58px]" alt="icon_9" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]
            "
            dangerouslySetInnerHTML={{ __html: t(`next_generation_section.register`) }}
            >
            </p>
          </div>

          <div className="flex flex-col min-w-[122px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_10} className="w-[58px] h-[58px]" alt="icon_10" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]
            "
            dangerouslySetInnerHTML={{ __html: t(`next_generation_section.tournaments`) }}
            >
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobNextGenerationSec;
