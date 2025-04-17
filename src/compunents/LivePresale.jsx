import React from "react";
import live_cards from "../assets/presale-v3/live_cards.svg";
import live_cards_des from "../assets/presale-v3/live_cards_des.svg";

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
    <div className="w-[100%] fixed 2xl:bottom-unset mb-9 xl:bottom-unset lg:bottom-unset md:bottom-unset sm:bottom-0 bottom-0 2xl:top-0 h-[38px] xl:top-0 lg:top-0 md:top-0 sm:top-unset top-unset left-0 right-0 z-[999]"
    style={{
      background:
        "radial-gradient(50% 50% at 50% 50%, #FFEBAC 0%, #FCD149 100%)",
    }}
    >
      <div
        className=" max-w-[700px] mx-auto w-[100%] flex flex-row justify-between items-center p-2 ">
        <p className="font-[600] text-[11px]">BFX Presale is Live</p>
        <img src={live_cards} alt="live_cards" className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block" />
        <img src={live_cards_des} alt="live_cards" className="2xl:block xl:block lg:block md:block sm:hidden hidden" />
        <button
          onClick={handleScroll}
          className="text-[10px] font-[700] border border-1 border-[black] rounded-[3px] h-[22px] w-[64px]"
        >
          Buy BFX
        </button>
      </div>
    </div>
  );
}

export default LivePresale;
