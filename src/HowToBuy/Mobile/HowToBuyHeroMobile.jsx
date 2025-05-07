import React from "react";
import CoinImage from "../../assets/hoyToBuy/hero/howToBuyCoin1.webp";

function HowToBuyHeroMobile() {
  return (
    <div className="md:hidden bg-gradient-to-br from-black via-[#020B10] to-black py-16 px-6">
      <div className="max-w-[95%] mx-auto flex flex-col items-center text-center">
        <div className="text-white">
          <h1 className="mb-6 text-4xl font-bold leading-tight drop-shadow-md">
            How To Buy <br />
            BlockchainFX <br />
            <span className="text-[#FFD700]">($BFX)</span>
          </h1>
          <p className="mb-8 text-base leading-relaxed text-gray-300">
            Secure your $BFX tokens and unlock daily crypto rewards. Follow this
            step-by-step guide for easy purchase.
          </p>
        </div>

        <div>
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
