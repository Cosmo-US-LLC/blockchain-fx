import React from "react";

import graph from "../assets/LessThanSec/Frame 1410125779 (1).png";

import ernvet1 from "../assets/EarnOnSec/Ellipse 4.png";
import ernvet2 from "../assets/EarnOnSec/Ellipse 3.png";
import { useTranslation } from "react-i18next";

function LessThanSec() {
  const { t } = useTranslation();


  return (
    <div className="pt-[50px] pb-[50px] bg-[#020B10]">
        <div
              className="max-w-[1200px] py-[50px] relative overflow-hidden space-y-[50px] rounded-[16px] w-[100%] mx-auto"
              style={{
                background: "#030F16",
              }}
            >
              <div className="space-y-[18px] relative z-[99]">
                <h3 className="text-[40px] font-[700] text-center leading-[58px] text-[#fff] tracking-[-1px]">
                  {t("less_than_section.title")}
                </h3>
                <p className="text-[18px] font-[400] w-[750px] mx-auto text-center leading-[130%] text-[#fff] tracking-[-0.32px]" dangerouslySetInnerHTML={{ __html: t("less_than_section.description") }} />
              </div>
              <div className="space-y-[60px] relative z-[99]">
                <div className="relative">
                  <div className="flex justify-center">
                    <img
                      src={graph}
                      alt="graph"
                      loading="lazy"
                      className="h-[321px] w-[321px]"
                    />
                  </div>
                  <p className="text-[#fff] -top-3 left-[28%] leading-[110%] absolute text-[15px] font-[700] tracking-[-0.787px]" dangerouslySetInnerHTML={{ __html: t("less_than_section.chart.bonds") }}>
                  </p>
                  <p className="text-[#fff] absolute top-[8%] max-w-[230px] leading-[110%] left-[19%] text-[15px] font-[700] tracking-[-0.787px]" dangerouslySetInnerHTML={{ __html: t("less_than_section.chart.stocks") }}>
                  </p>
                  <p className="text-[#fff] absolute top-[21%] max-w-[260px] leading-[110%] left-[17%] text-[15px] font-[700] tracking-[-0.787px]" dangerouslySetInnerHTML={{ __html: t("less_than_section.chart.commodities") }}>
                  </p>
                   <p className="text-[#fff] absolute top-[33%] leading-[110%] left-[16%] max-w-[240px] text-[15px] font-[700] tracking-[-0.787px]" dangerouslySetInnerHTML={{ __html: t("less_than_section.chart.etfs") }}>
                  </p>
                  <p className="text-[#F3D885] py-1 px-2 border leading-[120%] border-[#F6CE69] max-w-[360px] absolute top-[50%] left-[5%] rounded-[5px] leading-[110%] text-[26px] font-[700] tracking-[-0.787px]" dangerouslySetInnerHTML={{ __html: t("less_than_section.chart.crypto") }}>
                  </p>
                  <p className="text-[#fff] absolute bottom-[5%] leading-[110%] right-[23%] max-w-[200px]  text-[15px] font-[700] tracking-[-0.787px]" dangerouslySetInnerHTML={{ __html: t("less_than_section.chart.forex") }}>
                  </p>
                </div>
                <div className="max-w-[887px] pt-[0px] flex justify-between items-center mx-auto w-[100%]">
                  <div className="flex items-center space-x-2">
                    <div className="w-[30px] h-[30px] bg-[#E9AD2F] rounded-[4px]"></div>
                    <p className="text-[#fff] text-[18px] font-[700] tracking-[-1px]">
                      {t("less_than_section.legend.forex")}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-[30px] h-[30px] bg-[#DCDCDC] rounded-[4px]"></div>
                    <p className="text-[#fff] text-[18px] font-[700] tracking-[-1px]">
                      {t("less_than_section.legend.bonds")}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-[30px] h-[30px] bg-[#B6B6B6] rounded-[4px]"></div>
                    <p className="text-[#fff] text-[18px] font-[700] tracking-[-1px]">
                      {t("less_than_section.legend.us_stock")}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-[30px] h-[30px] bg-[#7DBB6C] rounded-[4px]"></div>
                    <p className="text-[#fff] text-[18px] font-[700] tracking-[-1px]">
                      {t("less_than_section.legend.commodities")}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-[30px] h-[30px] bg-[#D39219] rounded-[4px]"></div>
                    <p className="text-[#fff] text-[18px] font-[700] tracking-[-1px]">
                      {t("less_than_section.legend.etfs")}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-[30px] h-[30px] bg-[#A36E00] rounded-[4px]"></div>
                    <p className="text-[#fff] text-[18px] font-[700] tracking-[-1px]">
                      {t("less_than_section.legend.crypto")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-[-8%] left-[-5%]">
                <img src={ernvet2} className=" " alt="BlockchainFX" />
              </div>
              <div className="absolute bottom-[0%] right-[0%]">
                <img src={ernvet1} className="" alt="BlockchainFX" />
              </div>
            </div>
    </div>
  );
}

export default LessThanSec;
