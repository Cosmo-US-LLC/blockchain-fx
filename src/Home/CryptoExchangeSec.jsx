import React from "react";
import { useTranslation } from "react-i18next";
import crpimg from "../assets/CryptoExchangeSec/crpimg.webp";
import ernvet1 from "../assets/CryptoExchangeSec/vec (1).png";
import ernvet2 from "../assets/CryptoExchangeSec/vec (2).png";

function CryptoExchangeSec() {
  const { t } = useTranslation();

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
    <div className="flex items-center bg-[#020B10] pt-[50px]" id="pioneering">
      <div className="max-w-[1200px] relative overflow-hidden flex justify-between items-center gap-[2rem] w-[100%] mx-auto border-[1px] border-[#575757] bg-[#030F16]  relative rounded-[24px]">
        <div className="flex relative z-[99]  pr-[96px] items-center gap-[5rem] z-[99]">
          <div className="w-[44%]">
            <img src={crpimg} className="max-h-[619.965px]" alt="" />
          </div>
          <div className="w-[56%] space-y-[20px] py-[60px]">
            <h4 className="text-[40px] text-[#fff] font-[600]">
              Pioneering Crypto Exchange
            </h4>
            <p className="text-[#fff] text-[18px] leading-[185%] max-w-[543px] w-[100%] font-[500]">
              BlockchainFX is redefining the future of trading with an
              all-in-one decentralised platform that lets users trade anything,
              anywhere —while maintaining full control of their assets. <br /><br /> The
              platform is currently in beta and will be publicly available soon.
              It was awarded “The Best New Crypto Trading App of 2025” earlier
              this year and has received overwhelmingly positive feedback from
              early users. With the launch of the $BFX presale, holders can now
              be part of the next major global trading platform.
            </p>
            <div className="flex justify-start pt-[20px] relative z-[99] pb-[0px] items-center space-x-[17px]">
              <button
                onClick={handleScroll}
                style={{
                  background:
                    "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
                }}
                className="text-[#000] px-[12px] hover:opacity-[0.8] text-[16px] font-[800] border border-[#E6B005] hover:border-[#E6B005] rounded-[8px] max-w-[138px] w-[100%] h-[50px]"
              >
                Buy BFX
              </button>
               <button
              // onClick={handleScrollToDemo}
              className="hover:text-[#000] hover:bg-[#E5AE00] px-[12px] text-[#E6B005] bg-transparent text-[16px] font-[500] border hover:border-[#E5AE00] border-[#E6B005] max-w-[222px] rounded-[8px] !w-[100%] h-[50px]"
            >
              Watch Live Trading Here
            </button>
            </div>
          </div>
        </div>
        <div className="absolute top-[-1%] left-[0%]">
          <img src={ernvet1} className="" alt="BlockchainFX" />
        </div>
        <div className="absolute bottom-[-85%]  right-[0%]">
          <img src={ernvet2} className="" alt="BlockchainFX" />
        </div>
      </div>
    </div>
  );
}

export default CryptoExchangeSec;
