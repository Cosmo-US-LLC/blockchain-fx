import React from "react";
import CoinImage from "../../assets/hoyToBuy/hero/howToBuyCoin1.webp";

function HowToBuyHero() {
  return (
    <div className="hidden md:block bg-gradient-to-br from-black via-[#020B10] to-black py-24 px-12">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="text-white max-w-[520px]">
          <h1 className="mb-4 text-5xl font-bold leading-tight">
            How To Buy <br />
            BlockchainFX <br />
            <span className="text-yellow-400">($BFX)</span>
          </h1>
          <p className="text-base leading-relaxed text-gray-300">
            Follow this simple step-by-step guide to secure your $BFX tokens and
            unlock daily crypto rewards. Whether you're paying with crypto or
            card, everything you need is outlined below.
          </p>
        </div>

        <div>
          <img
            src={CoinImage}
            alt="BFX Coin"
            className="w-[480px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HowToBuyHero;
