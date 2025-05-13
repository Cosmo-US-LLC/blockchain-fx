import React from "react";
import CoinImage from "../../assets/hoyToBuy/mobile/hero/hero-coin.webp";
import ellipse from "../../assets/hoyToBuy/mobile/hero/ellipse.webp";

function HowToBuyHeroMobile() {
  return (
    <div className="bg-[#000] w-full px-6 py-6">
      <div className="flex flex-col items-center justify-center gap-16 text-center">
        <div className="flex flex-col text-left text-white">
          <h1 className="mb-2 text-[38px] font-[500] leading-[47px] tracking-[-2.8px]">
            How To Buy <br />
            BlockchainFX
            <span className="text-[#E5AE00]">($BFX)</span>
          </h1>
          <p className="text-[15px] leading-[22px] tracking-[-0.32px] text-[#9F9F9F]">
            Follow this simple step-by-step guide to secure your $BFX tokens and
            unlock daily crypto rewards. Whether you're paying with crypto or
            card, everything you need is outlined below.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <img
            src={ellipse}
            alt=""
            className="absolute top-0 left-0 z-20 h-auto "
          />

          <img
            src={CoinImage}
            alt="BlockchainFX Token ($BFX) - How to Buy"
            className="w-[90%] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HowToBuyHeroMobile;
