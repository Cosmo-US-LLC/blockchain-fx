import React from "react";
import { useTranslation } from "react-i18next";
import whitepaperbook from "../assets/Whitepaper/whitepaper.webp";
import ernvet1 from "../assets/CryptoExchangeSec/vec (1).png";

export default function Whitepaper() {
  const { t } = useTranslation();

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <div className="flex items-center justify-center bg-[#020B10] pt-[50px] pb-[50px] px-[80px]" id="whitepaper">
      <div
        className="p-6 w-full max-w-[1200px] overflow-hidden relative min-h-[454px] bg-no-repeat bg-cover bg-center flex flex-row items-center rounded-[16px] bg-[#030F16]"
        
        style={{ border:"1px solid #2B2B2B"}}
      >
        <div className="w-[50%] relative z-[99]">
          <div className="w-full p-2">
            <img src={whitepaperbook} className="w-[453px] h-auto object-cover" alt="whitepaper" />
          </div>
        </div>

        <div className="w-[50%] max-w-[460px] space-y-4 pl-4">
          <div className="w-full p-2 flex flex-col justify-start">
            <h3 className="text-[40px] font-[800] leading-[52px] mb-4 text-white">
              {t("whitepaper.heading")}
            </h3>
            <p className="text-[18px] text-[#fff] font-[400] leading-[155.5%] tracking-[-0.36px]">
              {t("whitepaper.description")}
            </p>
          </div>

          <div className="w-full p-2 flex space-x-3 justify-start">
            <button
              onClick={handleScroll}
              style={{
                background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
              }}
              className="text-[#000] px-[30px] hover:opacity-[0.8] text-[16px] font-[800] border border-[#E6B005] hover:border-[#E6B005] rounded-[8px]  w-fit h-[50px]"
            >
              {t("whitepaper.buyButton")}
            </button>
            <a href="/BFX-Whitepaper.pdf" target="_blank" rel="noopener noreferrer">
              <button className="hover:text-black hover:bg-[#E5AE00] px-[18px] text-[#E5AE00] bg-transparent text-[16px] font-[700] border hover:border-[#E5AE00] border-[#E5AE00] rounded-[8px] w-fit h-[50px]">
                {t("whitepaper.accessButton")}
              </button>
            </a>
          </div>
        </div>
        <div className="absolute top-[0%]  left-[0%]">
                   <img src={ernvet1} className="" alt="BlockchainFX" />
                 </div>
      </div>
    </div>
  );
}
