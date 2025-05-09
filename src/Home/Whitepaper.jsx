import React from "react";
import { useTranslation } from "react-i18next";
import whitepaper from "../assets/Whitepaper/whitepaper.webp";
import whitepaperbg from "../assets/Whitepaper/whitepaperbg.png";
import whitepaperbook from "../assets/Whitepaper/whitesvg.svg";
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
    <div className="flex items-center justify-center bg-[#000] pt-[50px] pb-[50px] px-[80px]" id="whitepaper">
      <div
        className="p-6 w-full max-w-[1200px] overflow-hidden relative min-h-[454px] bg-no-repeat bg-cover bg-center flex flex-row items-center rounded-[16px] bg-[#111]"
        
        // style={{ backgroundImage: `url(${whitepaperbg})` }}
      >
        <div className="w-[50%] relative z-[99]">
          <div className="w-full p-2">
            <img src={whitepaperbook} className="w-[453px] h-auto object-cover" alt="whitepaper" />
          </div>
        </div>

        <div className="w-[50%] max-w-[460px] space-y-4 pl-4">
          <div className="w-full p-2 flex flex-col justify-start">
            <h3 className="text-[40px] font-[800] leading-[52px] mb-4 text-white">
            BFX Whitepaper
            </h3>
            <p className="text-[18px] text-[#fff] font-[400] leading-[155.5%] tracking-[-0.36px]">
            Explore the whitepaper to learn how BFX powers a next-gen trading ecosystem. Discover its key features and advantages, and see how BlockchainFX is bridging the gap between blockchain and traditional finance by creating the crypto industry's first trading super app.
            </p>
          </div>

          <div className="w-full p-2 flex space-x-3 justify-start">
            <button
              onClick={handleScroll}
              className="text-white bg-[#E5AE00] px-[12px] hover:text-white hover:bg-transparent text-[16px] font-[700] border border-[#E5AE00] hover:border-white rounded-[8px] max-w-[143px] w-[100%] h-[50px]"
            >
              Buy BFX
            </button>
            <a href="https://blockchainfx.com/BFX-Whitepaper.pdf" target="_blank" rel="noopener noreferrer">
              <button className="hover:text-white hover:bg-[#E5AE00] px-[10px] text-[#E5AE00] bg-transparent text-[16px] font-[700] border hover:border-[#E5AE00] border-[#E5AE00] rounded-[8px] max-w-[193px] w-[100%] h-[50px]">
              Access Whitepaper
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
