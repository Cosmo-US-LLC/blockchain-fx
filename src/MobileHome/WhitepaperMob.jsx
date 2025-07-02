import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

import whitepaper from "../assets/Whitepaper/whitepaper.webp";
import vector from "../assets/EarnOnSec/Ellipse 4.png";

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
        className="py-6 rounded-[11.022px] overflow-hidden border-[1px] border-[#2B2B2B] relative px-4 space-y-[16px]"
        style={{
          background: "#030F16",
        }}
      >
        <div className="w-[100%] space-y-4">
          <div className="flex flex-col justify-start w-full p-2">
            <h3 className="text-[30px] font-[600] leading-[120%] tracking-[-1.5px] text-center mb-4 text-white">
              {t("whitepaper.heading")} {/* Use translation */}
            </h3>
            <p className="text-[16px] text-[#fff] text-center font-medium leading-[25px] font-inter">
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
                "https://blockchainfx.com/BFX-Whitepaper.pdf?_gl=1*6ya1sw*_gcl_au*Mzg3MTA3OTg2LjE3NDY2MDM5MTA.",
                "_blank"
              )
            }
            className="rounded-[10px] bg-black border border-[#E6B005] bg-[#000] text-[#E6B005] w-[178px] h-[50px] py-1"
          >
            {t("whitepaper.accessButton")} {/* Use translation */}
          </button>
        </div>

        <div className="w-[100%]">
          <div className="w-full p-2 relative z-[9]">
            <img
              src={whitepaper}
              className="w-[453px] h-auto object-cover"
              alt="whitepaper"
            />
          </div>
        </div>
         <div className="absolute bottom-[0%] right-0 w-[100%]">
                  <img src={vector} alt="" />
                </div>
      </div>
    </div>
  );
}
