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
      className="flex items-center sm:flex-col flex-col 2xl:flex-row 2xl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-3 py-3 xl:flex-row lg:flex-row md:flex-row w-[100%] justify-center 2xl:mb-12 xl:mb-12 lg:mb-12 md:mb-12 sm:mb-0 mb-0 fixed 2xl:bottom-unset xl:bottom-unset lg:bottom-unset md:bottom-unset sm:bottom-0 bottom-0 2xl:top-0 2xl:h-[56px] xl:h-[56px] lg:h-[56px] md:h-[56px] sm:h-[103px] h-[103px] xl:top-0 lg:top-0 md:top-0 sm:top-unset top-unset left-0 right-0 z-[999]"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #FFEBAC 0%, #FCD149 100%)",
      }}
    >
     
      <div className="max-w-[1200px] mx-auto w-[100%] 2xl:pb-0 xl:pb-0 lg:pb-0 md:pb-0 sm:pb-3 pb-3 2xl:border-b-[0px] xl:border-b-[0px] lg:border-b-[0px] md:border-b-[0px] sm:border-b-[1px] border-b-[1px] border-[#000] flex flex-row 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-center justify-center  2xl:space-x-[30px] xl:space-x-[30px] lg:space-x-[30px] md:space-x-[30px] sm:space-x-[15px] space-x-[15px] items-center px-2">
        <p className="font-[700] 2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[10px] text-[10px] leading-[110%]">
          {t("live_presale_section.title")}{" "}
          <span className="font-[600]">
            {t("live_presale_section.subtitle")}
          </span>
        </p>
        <div className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden space-x-6 text-center w-[40%] ">
          <div>
            <p className="text-[14px] font-bold">
              {timeLeft.days.toString().padStart(2, "0")}
            </p>
            <p className="text-[8px]">Days</p>
          </div>
          <p className="text-[14px] font-bold">:</p>
          <div>
            <p className="text-[14px] font-bold">
              {timeLeft.hours.toString().padStart(2, "0")}
            </p>
            <p className="text-[8px]">Hours</p>
          </div>
          <p className="text-[14px] font-bold">:</p>
          <div>
            <p className="text-[14px] font-bold">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </p>
            <p className="text-[8px]">Minutes</p>
          </div>
          <p className="text-[14px] font-bold">:</p>
          <div>
            <p className="text-[14px] font-bold">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </p>
            <p className="text-[8px]">Seconds</p>
          </div>
        </div>
        <button
          onClick={handleScroll}
          className="2xl:text-[12px] 2xl:flex xl:flex lg:flex md:flex items-center justify-center sm:hidden hidden xl:text-[12px] lg:text-[12px] md:text-[10px] sm:text-[9px] text-[8px] font-[700] bg-[#000] text-[#fff] rounded-[3px] h-[25px] px-[6px] md:px-[10px]"
        >
          {t("live_presale_section.buy_button")}
        </button>
          <button
          onClick={handleScroll}
          className="2xl:text-[12px] 2xl:hidden xl:hidden lg:hidden md:hidden items-center justify-center sm:flex flex xl:text-[12px] lg:text-[12px] md:text-[10px] sm:text-[9px] text-[8px] font-[700] border-[1px] border-[#000] text-[#000] rounded-[3px] h-[25px] px-[6px] md:px-[10px]"
        >
          {t("live_presale_section.buy_button")}
        </button>
      </div>
 <div className="2xl:hidden xl:hidden lg:hidden pt-[5px] md:hidden sm:flex flex space-x-2 text-center">
        <div>
          <p className="text-[14px] font-bold">
            {timeLeft.days.toString().padStart(2, "0")}
          </p>
          <p className="text-[8px]">Days</p>
        </div>
        <p className="text-[14px] font-bold">:</p>
        <div>
          <p className="text-[14px] font-bold">
            {timeLeft.hours.toString().padStart(2, "0")}
          </p>
          <p className="text-[8px]">Hours</p>
        </div>
        <p className="text-[14px] font-bold">:</p>
        <div>
          <p className="text-[14px] font-bold">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </p>
          <p className="text-[8px]">Minutes</p>
        </div>
        <p className="text-[14px] font-bold">:</p>
        <div>
          <p className="text-[14px] font-bold">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </p>
          <p className="text-[8px]">Seconds</p>
        </div>
      </div>

      
    </div>
  );
}

export default LivePresale;
