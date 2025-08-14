import React from "react";
import GleamWidget from "../compunents/GleamWidget";

function Win500() {
  return (
    <div className="pt-12 bg-[#020b10] px-4">
      <h1 className="text-[#E5AE00] font-extrabold text-[40px] pb-[20px] max-w-4xl mx-auto text-center">
        JOIN OUR $500K GIVEAWAY!
      </h1>
      <p className="text-[#fff] text-[18px] pb-[40px] max-w-4xl mx-auto text-center">
        Enter our BlockchainFX competition below to stand a chance to win one of
        10 prize allocations. We aim to reward our community with $500,000 worth
        of $BFX tokens in total. Terms and conditions apply.
      </p>
      <div className="border border-transparent">
        <GleamWidget />
      </div>
    </div>
  );
}

export default Win500;
