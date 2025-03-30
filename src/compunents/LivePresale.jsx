import React from "react";
import live_cards from "../assets/presale-v3/live_cards.svg";

function LivePresale() {
  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 80;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };
  return (
    <div
      className="h-[38px] flex flex-row justify-between items-center p-2"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #FFEBAC 0%, #FCD149 100%)",
      }}
    >
      <p className="font-[600] text-[11px]">BFX Presale is Live</p>
      <img src={live_cards} alt="live_cards" className="" />
      <button onClick={handleScroll} className="text-[10px] font-[700] border border-1 border-[black] rounded-[3px] h-[22px] w-[64px]">
        Buy BFX
      </button>
    </div>
  );
}

export default LivePresale;
