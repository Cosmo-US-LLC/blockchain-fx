import React from "react";

import ellipse from "../assets/EarnOnSec/Ellipse 3.png";
import ellipse2 from "../assets/EarnOnSec/Ellipse 4.png";

import icon1 from "../assets/Gateway/gticons (4).svg";
import icon2 from "../assets/Gateway/gticons (3).svg";
import icon3 from "../assets/Gateway/gticons (2).svg";
import icon4 from "../assets/Gateway/gticons (1).svg";
import cardicon1 from "../assets/Gateway/tblicn (2).svg";
import cardicon2 from "../assets/Gateway/tblicn (1).svg";

import { useTranslation } from "react-i18next";

function MobileGatewaySec() {
  const { t } = useTranslation();
 

  return (
     <div 
            className="relative space-y-[33px]  rounded-[16px] py-[30px] px-[20px] overflow-hidden w-[90%] mx-auto"
            style={{
              border:"1px solid rgba(230, 175, 3, 0.12)",
              background:"#020B10"
            }}
          >
            <img
              src={ellipse || "/placeholder.svg"}
              className="absolute top-[0%] left-[0%]"
              alt=""
            />
            <img
              src={ellipse2 || "/placeholder.svg"}
              className="max-w-[400px] h-[450px] absolute bottom-[0%] right-[0%]"
              alt=""
            />
            <div className="space-y-[20px] relative z-[9]">
              <h3 className="text-[30px] font-[600] leading-[120%] tracking-[-1.5px] text-center text-[#FFF] ">
                {t("gateway_section.title")}
              </h3>
              <p className=" max-w-[881px] font-inter mx-auto w-[100%] text-center text-[16px] text-[#fff] font-medium leading-[25px] mobilepara"
                dangerouslySetInnerHTML={{ __html: t("gateway_section.description") }}
              >
              </p>
            </div>
            <div
              className="px-[15px] py-[20px] space-y-[32px] max-w-[366px] mx-auto rounded-[13px] bg-[#030F16] border-[1px] border-[#2B2B2B] relative z-[9]"
            >
              <div className="flex items-start space-x-[3rem] justify-center">
                <div className="flex space-y-[14px] flex-col items-center justify-start">
                  <img className="w-[54px] h-[54px]" src={cardicon1 || "/placeholder.svg"} alt="" />
                  <h3 className="text-[#fff] text-center text-[18px] font-[600] leading-[105%] tracking-[-1.219]">
                    {t("gateway_section.other_exchanges.title")}
                  </h3>
                </div>
                <div className="flex space-y-[20px] flex-col items-center justify-start">
                  <img className="w-[54px] h-[54px]" src={cardicon2 || "/placeholder.svg"} alt="" />
                  <h3 className="text-[#fff] text-center text-[18px] font-[600] leading-[105%] tracking-[-1.219]">
                    {t("gateway_section.blockchainfx.title")}
                  </h3>
                </div>
              </div>
              <div className="space-y-[20px]">
                <div className="rounded-[16px] border border-[#2B2B2B]">
                  <div className="flex justify-center py-[10px] items-center flex-col">
                    <img className="w-[23px] h-[20.815px]" src={icon1 || "/placeholder.svg"} alt="" />
                    <h4 className="text-[#FFF] font-[700] text-[14px] leading-[105%]">
                      {t("gateway_section.features.fees")}
                    </h4>
                  </div>
                  <div className="flex border-t border-[#2B2B2B]">
                    <div className="w-[50%] py-[3px] border-r border-[#2B2B2B]">
                      <div className="flex items-center justify-center space-x-2">
                        <h4 className="text-[#fff] font-[500] text-[13px] text-center tracking-[-1px] leading-[120%]">
                          {t("gateway_section.other_exchanges.high_fees")}
                        </h4>
                      </div>
                    </div>
                    <div className="w-[50%] py-[3px]">
                      <div className="flex items-center justify-center">
                        <h4 className="text-[#fff] font-[500] text-[13px] text-center tracking-[-1px] leading-[120%]">
                          {t("gateway_section.blockchainfx.shares_profits")}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[16px] border border-[#2B2B2B]">
                  <div className="flex justify-center py-[10px] items-center flex-col">
                    <img className="w-[23px] h-[20.815px]" src={icon2 || "/placeholder.svg"} alt="" />
                    <h4 className="text-[#FFF] font-[700] text-[14px] leading-[105%]">
                      {t("gateway_section.features.asset_variety")}
                    </h4>
                  </div>
                  <div className="flex border-t border-[#2B2B2B]">
                    <div className="w-[50%] py-[3px] border-r border-[#2B2B2B] flex items-center justify-center">
                      <div className="flex items-center justify-center space-x-2  p-1">
                        <h4 className="text-[#fff] font-[500] text-[13px] text-center tracking-[-1px] leading-[120%]">
                          {t("gateway_section.other_exchanges.crypto_only")}
                        </h4>
                      </div>
                    </div>
                    <div className="w-[50%] py-[3px] ">
                      <div className="flex items-center justify-center p-1">
                        <h4 className="text-[#fff] font-[500] text-[13px] text-center tracking-[-1px] leading-[120%]">
                          {t("gateway_section.blockchainfx.swap_instantly")}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[16px] border border-[#2B2B2B]">
                  <div className="flex justify-center py-[10px] items-center flex-col">
                    <img className="w-[23px] h-[20.815px]" src={icon3 || "/placeholder.svg"} alt="" />
                    <h4 className="text-[#FFF] font-[700] text-[14px] leading-[105%]">
                      {t("gateway_section.features.user_experience")}
                    </h4>
                  </div>
                  <div className="flex border-t border-[#2B2B2B]">
                    <div className="w-[50%] py-[3px] border-r border-[#2B2B2B]">
                      <div className="flex justify-center space-x-2 px-1 py-[5px] items-center ">
                        <h4 className="text-[#fff] font-[500] text-center text-[13px] tracking-[-1px] leading-[120%]">
                         {t("gateway_section.other_exchanges.account_restrictions")}
                        </h4>
                      </div>
                    </div>
                    <div className="w-[50%] flex items-center justify-center py-[3px]">
                      <div className="flex items-center justify-center  p-1">
                        <h4 className="text-[#fff] font-[500] text-[13px] text-center tracking-[-1px] leading-[120%]">
                         {t("gateway_section.blockchainfx.withdraw_anytime")}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[16px] border border-[#2B2B2B]">
                  <div className="flex justify-center py-[10px] items-center flex-col">
                    <img className="w-[23px] h-[20.815px]" src={icon4 || "/placeholder.svg"} alt="" />
                    <h4 className="text-[#FFF] font-[700] text-[14px] leading-[105%]">
                      {t("gateway_section.features.community")}
                    </h4>
                  </div>
                  <div className="flex border-t border-[#2B2B2B]">
                    <div className="w-[50%] py-[3px] border-r border-[#2B2B2B]">
                      <div className="flex justify-center space-x-2 px-1 py-[5px] items-center">
                        <h4 className="text-[#fff] font-[500] text-[13px] text-center tracking-[-1px] leading-[120%]">
                         {t("gateway_section.other_exchanges.users_excluded")}
                        </h4>
                      </div>
                    </div>
                    <div className="w-[50%] flex items-center justify-center py-[3px]">
                      <div className="flex items-center justify-center  px-1">
                        <h4 className="text-[#fff] font-[500] text-[13px] text-center tracking-[-1px] leading-[120%]">
                          {t("gateway_section.blockchainfx.community_earns")}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}

export default MobileGatewaySec;
