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
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    }, 200);
  };

  return (
    <div className="flex items-center bg-[#000] pt-[30px]">
      <div className="relative overflow-hidden flex justify-between items-center gap-[2rem] w-[90%] mx-auto border bg-[#000]  relative rounded-[24px] pt-[35px] pb-[25px]">
        <div className=" relative z-[99] px-[20px]">
      
          <div className="space-y-[20px] ">
            <h4
              className="text-[30px] text-center text-[#fff] leading-[120%] tracking-[-1.5px] font-[600]"
            >
             Pioneering <br /> Crypto Exchange 
            </h4>
            <p className="text-[#fff] text-center text-[16px] leading-[137.5%] font-[500]">
            BlockchainFX is the world’s first crypto super app, merging blockchain technology with global financial markets. The exchange is currently live in its Beta phase, and the user base is growing rapidly. With the launch of $BFX, holders now have the chance to be part of building the next leading global trading platform.
            </p>
          </div>
          <div className="flex justify-center mr-3">
           <img src={crpimg} className="" alt="" />
          </div>
          <div className="flex justify-center  relative z-[99] pb-[0px] items-center space-x-[17px]">
              <button
                onClick={handleScroll}
                style={{
                  background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
                }}
                className="text-[#000] px-[12px] hover:opacity-[0.8] text-[16px] font-[800] border border-[#E6B005] hover:border-[#E6B005] rounded-[8px] max-w-[138px] w-[100%] h-[50px]"
              >
              Buy BFX
              </button>
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

export default CryptoExchangemobSec;
