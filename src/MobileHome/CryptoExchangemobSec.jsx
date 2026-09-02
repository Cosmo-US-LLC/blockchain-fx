import React from "react";
import { useTranslation } from "react-i18next";
import crpimg from "../assets/CryptoExchangeSec/crpimg.webp";
import ernvet1 from "../assets/CryptoExchangeSec/vec (1).png";
import ernvet2 from "../assets/CryptoExchangeSec/vec (2).png";

function CryptoExchangemobSec() {
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
    <div className="flex items-center bg-[#020B10] pt-[30px]" id="pioneering">
      <div className="relative overflow-hidden border-[1px] border-[#E5E7EB] flex justify-between items-center gap-[2rem] w-[90%] mx-auto border bg-[#020B10]  relative rounded-[24px] pt-[35px] pb-[25px]">
        <div className=" relative z-[99] px-[20px]">
          <div className="space-y-[20px] ">
            <h4 className="text-center text-[#fff] max-w-[230px] mx-auto text-[30px] font-[600] leading-[120%] tracking-[-1.5px]">
              {t("crypto_exchange_sec.title")}
            </h4>
            <p className="text-[#fff] text-center text-[16px] leading-[156.25%] font-[500]">
              <span dangerouslySetInnerHTML={{ __html: t("crypto_exchange_sec.description") }} />
            </p>
          </div>
          <div className="flex justify-center mr-3">
            <img src={'assets/blockchainfx/CryptoExchange/crpimg.webp'} className="crypto exchange" alt="BlockchainFX mobile trading app with portfolio overview and crypto coins in the background." />
          </div>
          {/* "Buy $BFX" CTA hidden site-wide per request (Dashboard/Connect Wallet CTAs kept); keep the markup for easy restoration
          <div className="flex justify-center  relative z-[99] pb-[0px] items-center space-x-[17px]">
            <button
              onClick={handleScroll}
              style={{
                background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
              }}
              className="text-[#000] px-[12px] hover:opacity-[0.8] text-[16px] font-[800] border border-[#E6B005] hover:border-[#E6B005] rounded-[8px] max-w-[138px] w-[100%] h-[50px]"
            >
              {t("crypto_exchange_sec.buy_button")}
            </button>
          </div>
          */}
          <div className="flex justify-center relative z-[99] pb-[0px] items-center flex-wrap gap-3">
            <a
              href="https://app.uniswap.org/explore/tokens/ethereum/0x87aD29bc7A161d7cA644EB1DB221d962e2D383D2"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
              }}
              className="text-[#000] px-[12px] hover:opacity-[0.8] text-[16px] font-[800] border border-[#E6B005] hover:border-[#E6B005] rounded-[8px] max-w-[180px] w-[100%] h-[50px] flex items-center justify-center"
            >
              Buy on Uniswap
            </a>
            <a
              href="https://trade.blockfx.com/traderoom"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#000] hover:bg-[#E5AE00] px-[14px] text-[#E6B005] bg-transparent text-[14px] font-[700] whitespace-nowrap border hover:border-[#E5AE00] border-[#E6B005] rounded-[8px] w-fit h-[50px] flex items-center justify-center"
            >
              Visit the BFX Trading App
            </a>
          </div>
        </div>
        <div className="absolute top-[-1%] left-[0%]">
          <img src={'assets/blockchainfx/CryptoExchange/vec%20(1).png'} className="" alt="BlockchainFX" />
        </div>
        <div className="absolute bottom-[-85%]  right-[0%]">
          <img src={'assets/blockchainfx/CryptoExchange/vec%20(2).png'} className="" alt="BlockchainFX" />
        </div>
      </div>
    </div>
  );
}

export default CryptoExchangemobSec;
