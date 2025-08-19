import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import icon1 from "../assets/Gateway/gticons (4).svg";
import icon2 from "../assets/Gateway/gticons (3).svg";
import icon3 from "../assets/Gateway/gticons (2).svg";
import icon4 from "../assets/Gateway/gticons (1).svg";
import cardicon1 from "../assets/Gateway/tblicn (2).svg";
import Iicon from "../assets/Gateway/i.svg";
import cardicon2 from "../assets/Gateway/tblicn (1).svg";
import ernvet1 from "../assets/EarnOnSec/Ellipse 4.png";
import ernvet2 from "../assets/EarnOnSec/Ellipse 3.png";
function GatewaySec() {
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="pt-[50px] pb-[30px] bg-[#020B10]">
      <div className="max-w-[1200px] rounded-[16px] py-[80px] relative overflow-hidden space-y-[40px] w-[100%] mx-auto "
       style={{
            // background: "#030F16",
            background:"#030F16",
          }}
      >
        <div className="space-y-[14px]">
          <h3 className="text-[40px] demobr capitalize font-[700] text-center leading-[114%] text-[#fff] tracking-[-1px]" dangerouslySetInnerHTML={{ __html: t("gateway_section.title") }}>
          </h3>
          <p className="text-[18px] font-[400] max-w-[890px] mx-auto w-[100%] text-center leading-[130%] text-[#fff] tracking-[-0.32px]" dangerouslySetInnerHTML={{ __html: t("gateway_section.description") }} />
        </div>
        <div className="max-w-[1025px] relative z-[99] mx-auto flex justify-between itees-center ">
          <div className="max-w-[267px] w-[100%]">
            <ul className="max-w-[267px] w-[100%]">
              <li className="h-[83px]"></li>
              <li className="flex space-x-3 px-[18px] items-center min-h-[65px]">
                <div className="w-[65px]">
                  <img src={icon1} alt="" className="w-[37px]" />
                </div>
                <span className="text-[#B5B5B5] text-[20px] font-[700] tracking-[-1px]">
                  {t("gateway_section.features.fees")}
                </span>
              </li>
              <li className="flex space-x-3 px-[18px] items-center min-h-[65px] border-t border-[#C2C2C2]">
                <div className="w-[65px]">
                  <img src={icon2} alt="" className="w-[36px]" />
                </div>
                <span className="text-[#B5B5B5] text-[20px] font-[700] tracking-[-1px]">
                  {t("gateway_section.features.asset_variety")}
                </span>
              </li>
              <li className="flex space-x-3 px-[18px] items-center min-h-[65px] border-t border-[#C2C2C2]">
                <div className="w-[65px]">
                  <img src={icon3} alt="" className="w-[36px]" />
                </div>
                <span className="text-[#B5B5B5] text-[20px] font-[700] tracking-[-1px]">
                  {t("gateway_section.features.user_experience")}
                </span>
              </li>
              <li className="flex space-x-3 px-[18px] items-center min-h-[65px] border-t border-[#C2C2C2]">
                <div className="w-[65px]">
                  <img src={icon4} alt="" className="w-[39px]" />
                </div>
                <span className="text-[#B5B5B5] text-[20px] font-[700] tracking-[-1px]">
                  {t("gateway_section.features.community")}
                </span>
              </li>
            </ul>
          </div>
          <div
            className="max-w-[360px] rounded-[11px] py-[23px] px-[16px] w-[100%] "
            style={{
              background: "#030F16",
              border: "1px solid #2B2B2B"
            }}
          >
            <div className="flex justify-start pl-[19px] space-x-4 items-center">
              <img src={cardicon1} alt="" className="w-[56.7px] h-[56.7px]" />
              <h4 className="text-[#CBCBCB] text-[20.862px] font-[700] tacking-[-1px] leading-[100%]">
                {t("gateway_section.other_exchanges.title")}
              </h4>
            </div>
            <ul>
              <li className="py-[20px] flex items-center space-x-2 border-b border-[#C2C2C2]">
                <span className="text-[white] text-[16px] font-[500] ">
                  {t("gateway_section.other_exchanges.high_fees")}
                </span>
              </li>
              <li className="text-[white] text-[16px] font-[500] flex items-center  min-h-[65px] border-b border-[#C2C2C2]">
                {t("gateway_section.other_exchanges.crypto_only")}
              </li>
              <li className="text-white text-[16px] font-[500] flex items-center min-h-[65px] border-b border-[#C2C2C2]">
                {t("gateway_section.other_exchanges.account_restrictions")}
              </li>
              <li className="text-[white] text-[16px] font-[500] py-[18px] tracking-[-0.8px]">
                {t("gateway_section.other_exchanges.users_excluded")}
              </li>
            </ul>
          </div>
          <div
            className="max-w-[360px] rounded-[11px] py-[23px] px-[16px] w-[100%] "
            style={{
              background: "#030F16",
              border: "1px solid #575757"
            }}
          >
            <div className="flex justify-start space-x-4 items-center ">
              <img src={cardicon2} alt="" className="w-[56.7px] h-[56.7px]" />
              <h4 className="text-[white] text-[20.862px] font-[700] tacking-[-1px] leading-[100%]">
                {t("gateway_section.blockchainfx.title")}
              </h4>
            </div>
            <ul>
              <li className="text-[white] text-[16px]  h-[61.5px] font-[500] py-[27px] h-[66px] border-b border-[#C2C2C2]">
                {t("gateway_section.blockchainfx.shares_profits")}
              </li>
              <li className="text-[white] text-[16px]  font-[500] py-[12px] min-h-[65px] border-b border-[#C2C2C2]">
                {t("gateway_section.blockchainfx.swap_instantly")}
              </li>
              <li className="text-[white] text-[16px]  font-[500] py-[12px] min-h-[65px] border-b border-[#C2C2C2]">
                {t("gateway_section.blockchainfx.withdraw_anytime")}
              </li>
              <li className="text-[white] text-[16px]  font-[500] py-[27px]">
                {t("gateway_section.blockchainfx.community_earns")}
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute top-[-8%] left-[-5%]">
          <img src={ernvet2} className=" " alt="" />
        </div>
        <div className="absolute bottom-[0%] right-[0%]">
          <img src={ernvet1} className="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default GatewaySec;
