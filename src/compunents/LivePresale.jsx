import React, { useEffect, useState } from "react";
import live_cards from "../assets/presale-v3/live_cards.svg";
import live_cards_des from "../assets/presale-v3/live_cards_des.svg";
import { useTranslation } from "react-i18next";

function LivePresale() {
  const { t } = useTranslation();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-03T18:00:00Z"); // Oct 3rd, 6 PM UTC

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
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
    <>
      <div
        className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden  items-center w-[100%] 2xl:mb-12 xl:mb-12 lg:mb-12 md:mb-12 sm:mb-0 mb-0 fixed 2xl:bottom-unset xl:bottom-unset lg:bottom-unset md:bottom-unset sm:bottom-0 bottom-0 2xl:top-0 h-[38px] xl:top-0 lg:top-0 md:top-0 sm:top-unset top-unset left-0 right-0 z-[999]"
        style={{
          background:
            "#FCD149",
        }}
      >
         <div className="max-w-[1080px] mx-auto w-[100%] flex flex-row justify-center space-x-[20px]  items-center px-2">
          <p className="font-[600] leading-[100%] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[11px] text-[11px] text-center">
            <span className="font-[800]">Special Autumn Promo:</span> Get 35% More BFX with Code <span className="font-[800]">OCT35</span>
          </p>

          <div className="flex items-center space-x-2 ">
            <div>
              <h3 className="text-[16px] font-[600]">
                {timeLeft.days}{" "}
                <span className="text-[14px] font-[400]">Days</span> :{" "}
                {timeLeft.hours}{" "}
                <span className="text-[14px] font-[400]">Hours</span> :{" "}
                {timeLeft.minutes}{" "}
                <span className="text-[14px] font-[400]">Minutes</span> :{" "}
                {timeLeft.seconds}{" "}
                <span className="text-[14px] font-[400]">Seconds</span>
              </h3>
            </div>

            <button
              onClick={handleScroll}
              className="2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[10px] sm:text-[9px] text-[8px] font-[700] border border-1 border-[black] rounded-[3px] h-[25px] px-[6px] md:px-[10px]"
            >
              {t("live_presale_section.buy_button")}
            </button>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div
        className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex items-center w-[100%] 2xl:mb-12 xl:mb-12 lg:mb-12 md:mb-12 sm:mb-0 mb-0 fixed 2xl:bottom-unset xl:bottom-unset lg:bottom-unset md:bottom-unset sm:bottom-0 bottom-0 2xl:top-0  xl:top-0 lg:top-0 md:top-0 sm:top-unset top-unset left-0 right-0 z-[999] py-2"
        style={{
          background: "#FCD149",
        }}
      >
        <div className="max-w-[900px] mx-auto w-[100%] flex flex-col justify-center  items-center px-2">
          <p className="font-[600] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[11px] text-[11px] text-center">
            <span className="font-[800]">Special Autumn Promo:</span> Get 35% More BFX with Code <span className="font-[800]">OCT35</span>
          </p>

          <div className="flex items-center space-x-2 mb-1">
            <div>
              <h3 className="text-[14px] font-[600]">
                {timeLeft.days}{" "}
                <span className="text-[12px] font-[400]">Days</span> :{" "}
                {timeLeft.hours}{" "}
                <span className="text-[12px] font-[400]">Hours</span> :{" "}
                {timeLeft.minutes}{" "}
                <span className="text-[12px] font-[400]">Minutes</span> :{" "}
                {timeLeft.seconds}{" "}
                <span className="text-[12px] font-[400]">Seconds</span>
              </h3>
            </div>

            <button
              onClick={handleScroll}
              className="2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[10px] sm:text-[9px] text-[8px] font-[700] border border-1 border-[black] rounded-[3px] h-[22px] px-[6px] md:px-[10px]"
            >
              {t("live_presale_section.buy_button")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LivePresale;
