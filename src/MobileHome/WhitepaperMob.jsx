import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

import whitepaper from "../assets/Whitepaper/whitepaperbook.png";
import whitepaperBg from "../assets/Whitepaper/whitepaper_bg.png";

export default function WhitepaperMob() {
  const { t } = useTranslation(); // Get the translation function

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <div className="w-full py-[24px] px-[24px] bg-[#000]" id="whitepaper">
      <div
        className="py-6 rounded-[11.022px] px-4 space-y-[16px]"
        style={{
          background: "#111",
          borderColor: "rgba(230, 175, 3, 0.12)",
        }}
      >
        <div className="w-[100%] space-y-4">
          <div className="flex flex-col justify-start w-full p-2">
            <h3 className="text-[30px] text-center font-[600] leading-[115%] mb-4 text-white tracking-tighter">
              {t("whitepaper.heading")} {/* Use translation */}
            </h3>
            <p className="text-[14px] text-center text-[#fff]">
              {t("whitepaper.description")} {/* Use translation */}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleScroll}
            className="rounded-[10px] w-[137px] h-[50px] font-[700] py-1 bg-gradient-to-r from-[#E5AE00] to-[#FFD551]"
          >
            {t("whitepaper.buyButton")} {/* Use translation */}
          </button>
          <button
            onClick={() =>
              window.open(
                "https://vip.blockchainfx.com/BFX-Whitepaper.pdf",
                "_blank"
              )
            }
            className="rounded-[10px] bg-black border border-[#E6B005] text-[#E6B005] w-[178px] h-[50px] py-1"
          >
            {t("whitepaper.accessButton")} {/* Use translation */}
          </button>
        </div>

        <div className="w-[100%]">
          <div className="w-full p-2">
            <img
              src={whitepaper}
              className="w-[453px] h-auto object-cover"
              alt="whitepaper"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
