import React from "react";
import icon_1 from "../assets/presale-v3/next_gen/icon_1.svg";
import icon_2 from "../assets/presale-v3/next_gen/icon_2.svg";
import icon_3 from "../assets/presale-v3/next_gen/icon_3.svg"; // Add icon_3
import icon_4 from "../assets/presale-v3/next_gen/icon_4.svg"; // Add icon_4
import icon_5 from "../assets/presale-v3/next_gen/icon_5.svg"; // Add icon_5
import icon_6 from "../assets/presale-v3/next_gen/icon_6.svg"; // Add icon_6
import icon_7 from "../assets/presale-v3/next_gen/icon_7.svg"; // Add icon_7
import icon_8 from "../assets/presale-v3/next_gen/icon_8.svg"; // Add icon_8
import icon_9 from "../assets/presale-v3/next_gen/icon_9.svg"; // Add icon_9
import icon_10 from "../assets/presale-v3/next_gen/icon_10.svg"; // Add icon_10
import ellipse2 from "../assets/presale-v3/ellipse2.svg";

function MobNextGenerationSec() {
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
        <h3 className="mt-8 text-[36px] font-[600] leading-[114%] leading-[-1px] text-center text-[white]">
          Next Generation <br /> Trading Experience
        </h3>
        <div className="gap-y-[50px] grid grid-cols-2 pb-8">
          <div className="flex flex-col min-w-[185px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_1} className="w-[58px] h-[58px]" alt="icon_1" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              25 Years <br /> Of Experience
            </p>
          </div>
          <div className="flex flex-col min-w-[122px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_2} className="w-[58px] h-[58px]" alt="icon_2" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              One-Click <br /> Trading
            </p>
          </div>
          {/* icon_3 */}
          <div className="flex flex-col min-w-[185px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_3} className="w-[58px] h-[58px]" alt="icon_3" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              500+ <br /> Assets
            </p>
          </div>

          {/* icon_4 */}
          <div className="flex flex-col min-w-[122px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_4} className="w-[58px] h-[58px]" alt="icon_4" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              Leverage <br /> Trading
            </p>
          </div>

          {/* icon_5 */}
          <div className="flex flex-col min-w-[185px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_5} className="w-[58px] h-[58px]" alt="icon_5" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              Ultra <br /> Tight Spreads
            </p>
          </div>

          {/* icon_6 */}
          <div className="flex flex-col min-w-[122px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_6} className="w-[58px] h-[58px]" alt="icon_6" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              Up to 9 <br /> Charts
            </p>
          </div>

          {/* icon_7 */}
          <div className="flex flex-col min-w-[185px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_7} className="w-[58px] h-[58px]" alt="icon_7" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              24/7 Live <br /> Chat Support
            </p>
          </div>

          {/* icon_8 */}
          <div className="flex flex-col min-w-[122px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_8} className="w-[58px] h-[58px]" alt="icon_8" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              100+ <br /> Indicators
            </p>
          </div>

          {/* icon_9 */}
          <div className="flex flex-col min-w-[185px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_9} className="w-[58px] h-[58px]" alt="icon_9" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]">
            Register <br /> in Seconds
            </p>
          </div>

          {/* icon_10 */}
          <div className="flex flex-col min-w-[122px] items-center space-y-[15px]">
            <div className="min-h-[40px]">
              <img src={icon_10} className="w-[58px] h-[58px]" alt="icon_10" />
            </div>
            <p className="text-[14px] text-[white] text-center leading-[140%] font-[400] tracking-[-0.32px]">
              Monthly <br /> Tournaments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobNextGenerationSec;
