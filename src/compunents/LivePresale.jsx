import React, { useState, useEffect } from "react";
import live_cards from "../assets/presale-v3/live_cards.svg";
import live_cards_des from "../assets/presale-v3/live_cards_des.svg";
import { useTranslation } from "react-i18next";

function LivePresale() {
  const { t } = useTranslation();

  const targetDate = new Date("2025-09-01T16:00:00+04:00");

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      className="2xl:flex xl:flex lg:flex md:block sm:block block 2xl:items-center xl:items-center lg:items-center md:items-center sm:items-start items-start sm:flex-col flex-col 2xl:flex-row 2xl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-3 py-3 xl:flex-row lg:flex-row md:flex-row w-[100%] justify-center 2xl:mb-12 xl:mb-12 lg:mb-12 md:mb-12 sm:mb-0 mb-0 fixed 2xl:bottom-unset xl:bottom-unset lg:bottom-unset md:bottom-unset sm:bottom-0 bottom-0 2xl:top-0 2xl:h-[48px] xl:h-[48px] lg:h-[48px] md:h-[48px] sm:h-[60px] h-[60px] xl:top-0 lg:top-0 md:top-0 sm:top-unset top-unset left-0 right-0 z-[999] "
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #FFEBAC 0%, #FCD149 100%)",
      }}
    >
     <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex px-2 max-w-[350px] mx-auto">
       <p className="font-[700] text-[11px] leading-[110%] ">
        {t("live_presale_section.title")}{" "}
        <span
          className="font-[600]"
          dangerouslySetInnerHTML={{
            __html: t("live_presale_section.subtitle"),
          }}
        ></span>
      </p>
     </div>
      <div className="max-w-[1200px] 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden mx-auto w-[100%] space-x-2 border-[#000] flex flex-row justify-center  items-center px-2">
        <p className="font-[700]  text-[16px] leading-[110%] ">
          {t("live_presale_section.title")}{" "}
          <span
            className="font-[600]"
            dangerouslySetInnerHTML={{
              __html: t("live_presale_section.subtitle"),
            }}
          ></span>
        </p>
        <div className="flex items-center space-x-2 pb-1 text-center">
          <div className="flex items-end space-x-1">
            <p className="text-[18.329px] font-bold leading-[80%]">
              {timeLeft.days.toString().padStart(2, "0")}
            </p>
            <p className="text-[8px] leading-[100%]">Days</p>
          </div>
          <p className="text-[14px] font-bold leading-[100%]">:</p>
          <div className="flex items-end space-x-1">
            <p className="text-[18.329px] font-bold leading-[80%]">
              {timeLeft.hours.toString().padStart(2, "0")}
            </p>
            <p className="text-[8px] leading-[100%]">Hours</p>
          </div>
          <p className="text-[14px] font-bold leading-[100%]">:</p>
          <div className="flex items-end space-x-1">
            <p className="text-[18.329px] font-bold leading-[80%]">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </p>
            <p className="text-[8px] leading-[100%]">Minutes</p>
          </div>
          <p className="text-[14px] font-bold leading-[100%]">:</p>
          <div className="flex items-end space-x-1">
            <p className="text-[18.329px] font-bold leading-[80%]">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </p>
            <p className="text-[8px] leading-[100%]">Seconds</p>
          </div>
        </div>
        <button
          onClick={handleScroll}
          className="2xl:text-[12px] 2xl:flex xl:flex lg:flex md:flex items-center justify-center sm:hidden hidden  text-[16px] font-[700] border-[1px] border-[#000] text-[#000] rounded-[3px] h-[28px] px-[6px] md:px-[10px]"
        >
          {t("live_presale_section.buy_button")}
        </button>
      </div>
      <div className="pt-[8px] max-w-[350px] mx-auto 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex  w-[100%] space-x-2 border-[#000]  justify-between  items-center px-2">
        <div className="flex space-x-[4px] text-center">
          <div className="flex items-end space-x-1">
            <p className="text-[14px] font-bold leading-[80%]">
              {timeLeft.days.toString().padStart(2, "0")}
            </p>
            <p className="text-[10px] leading-[100%]">Days</p>
          </div>
          <p className="text-[14px] font-bold leading-[100%]">:</p>
          <div className="flex items-end space-x-1">
            <p className="text-[14px] font-bold leading-[80%]">
              {timeLeft.hours.toString().padStart(2, "0")}
            </p>
            <p className="text-[10px] leading-[100%]">Hours</p>
          </div>
          <p className="text-[14px] font-bold leading-[100%]">:</p>
          <div className="flex items-end space-x-1">
            <p className="text-[14px] font-bold leading-[80%]">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </p>
            <p className="text-[10px] leading-[100%]">Minutes</p>
          </div>
          <p className="text-[14px] font-bold leading-[100%]">:</p>
          <div className="flex items-end space-x-1">
            <p className="text-[14px] font-bold leading-[80%]">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </p>
            <p className="text-[10px] leading-[100%]">Seconds</p>
          </div>
        </div>
        <button
          onClick={handleScroll}
          className="2xl:text-[12px]  items-center justify-center  xl:text-[12px] lg:text-[12px] md:text-[10px] sm:text-[9px] text-[8px] font-[700] border-[1px] border-[#000] text-[#000] rounded-[3px] h-[25px] px-[6px] md:px-[10px]"
        >
          {t("live_presale_section.buy_button")}
        </button>
      </div>
    </div>
  );
}

export default LivePresale;
