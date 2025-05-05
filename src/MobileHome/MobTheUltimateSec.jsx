import React from "react";
import { useTranslation } from "react-i18next";

import logo from "../assets/TheUltimateSec/logo.svg";

function MobTheUltimateSec() {
  const { t } = useTranslation();

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 80;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <div className="p-5 bg-black">
      <div className="bgtheyltmob h-[410px] w-full !bg-cover !bg-center rounded-xl">
        <div className="flex items-center h-[410px] justify-center w-full">
          <div className="pb-[50px] pt-[30px] space-y-[15px]">
            <div className="flex justify-center">
              <img src={logo} className="h-[30px]" alt="Logo" />
            </div>
            <h3
              className="text-[33.358px] text-[#fff] font-[600] text-center leading-[117.143%]"
              dangerouslySetInnerHTML={{
                __html: t("the_ultimate_section.title"),
              }}
            />
            <div className="flex justify-center pt-[10px] items-center space-x-[17px]">
              <button
                className="text-black bg-[#E5AE00] px-[14px] hover:text-black hover:bg-transparent text-[12px] font-[800] border border-[#E5AE00] hover:border-[#E5AE00] rounded-[8px] w-[88px] h-[31px]"
                onClick={handleScroll}
              >
                {t("the_ultimate_section.buy_bfx")}
              </button>
              <button
                onClick={() =>
                  window.open("https://t.me/blockchainfx_chat", "_blank")
                }
                className="hover:text-[#E6B005] text-[#E6B005] font-[400] px-[8px] hover:bg-[#E5AE00] bg-transparent text-[12px] border hover:border-[#E5AE00] border-[#E5AE00] rounded-[8px] w-[107px] h-[31px]"
              >
                {t("the_ultimate_section.need_support")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobTheUltimateSec;
