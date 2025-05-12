import React from "react";
import CoinImage from "../../assets/hoyToBuy/hero/hero-coin.webp";

function HowToBuyHero() {
  return (
    <div className="  bg-[#020B10] py-24 px-12">
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

        <div className="">
          <img
            src={CoinImage}
            alt="BFX Coin"
            className="object-contain w-[460px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default HowToBuyHero;
