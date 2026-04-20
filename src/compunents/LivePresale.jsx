import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import live_cards from "../assets/presale-v3/live_cards.svg";
import live_cards_des from "../assets/presale-v3/live_cards_des.svg";

function LivePresale() {
  const { t } = useTranslation();
  const promoCode = "CEX60";

const [timeLeft, setTimeLeft] = useState({
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
});

useEffect(() => {
  // 1 June 2026, 6:00 PM Dubai time (UTC+4) = 2:00 PM UTC
  const targetDate = new Date(Date.UTC(2026, 5, 1, 14, 0, 0));

  const interval = setInterval(() => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

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
        className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden  items-center w-[100%] 2xl:mb-12 xl:mb-12 lg:mb-12 md:mb-12 sm:mb-0 mb-0 fixed 2xl:bottom-unset xl:bottom-unset lg:bottom-unset md:bottom-unset sm:bottom-0 bottom-0 2xl:top-0 h-[38px] xl:top-0 lg:top-0 md:top-0 sm:top-unset top-unset left-0 right-0 z-[999] "
        style={{
          background: "#FCD149",
        }}
      >
        <div className="max-w-[1060px] mx-auto w-[100%] flex flex-row justify-between space-x-[20px]  items-center px-2">
          <p className="font-[600] leading-[100%] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[11px] text-[11px] text-center">
            <span className="font-[800]">{t("live_presale_section.First_Exchange_Listing_Reveal")}:</span> {t("live_presale_section.Special_XMAS_Offer_des")} <span className="font-[800]">{promoCode}</span>
          </p>

          <div className="flex items-center space-x-2">
            <div>
              <h3 className="text-[16px] font-[600]">
                {timeLeft.days}{" "}
                <span className="text-[14px] font-[400]">
                  {t("live_presale_section.day")}
                </span>{" "}
                : {timeLeft.hours}{" "}
                <span className="text-[14px] font-[400]">
                  {t("live_presale_section.Hours")}
                </span>{" "}
                : {timeLeft.minutes}{" "}
                <span className="text-[14px] font-[400]">
                  {t("live_presale_section.Minutes")}
                </span>{" "}
                : {timeLeft.seconds}{" "}
                <span className="text-[14px] font-[400]">
                  {t("live_presale_section.Seconds")}
                </span>
              </h3>
            </div>
          </div>
          <button
            onClick={handleScroll}
            className="2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[10px] sm:text-[9px] text-[8px] font-[700]  text-[#fff]  bg-[black] rounded-[3px] h-[25px] px-[6px] md:px-[10px]"
          >
            {t("live_presale_section.buy_button")}
          </button>
        </div>
      </div>

       <div
        className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex items-center w-[100%] 2xl:mb-12 xl:mb-12 lg:mb-12 md:mb-12 sm:mb-0 mb-0 fixed 2xl:bottom-unset xl:bottom-unset lg:bottom-unset md:bottom-unset sm:bottom-0 bottom-0 2xl:top-0  xl:top-0 lg:top-0 md:top-0 sm:top-unset top-unset left-0 right-0 z-[999] py-2"
        style={{
          background: "#FCD149",
        }}
      >
        <div className="max-w-[900px] mx-auto w-[100%] flex flex-col justify-center  items-center">
          <div className="flex w-[100%] justify-center items-center space-x-2 border-b-[1px] border-[#000] pb-2 mb-2">
            <p className="font-[600] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] text-[12px] text-center">
             <span className="font-[800]">{t("live_presale_section.First_Exchange_Listing_Reveal")}:</span> {t("live_presale_section.Special_XMAS_Offer_des")} <span className="font-[800]">{promoCode}</span>
          </p>
            
          </div>
          <div className="flex justify-center space-x-2">
            <h3 className="text-[14px] font-[600]">
              {timeLeft.days}{" "}
              <span className="text-[12px] font-[400]">
                {" "}
                {t("live_presale_section.day")}
              </span>{" "}
              : {timeLeft.hours}{" "}
              <span className="text-[12px] font-[400]">
                {t("live_presale_section.Hours")}
              </span>{" "}
              : {timeLeft.minutes}{" "}
              <span className="text-[12px] font-[400]">
                {t("live_presale_section.Minutes")}
              </span>{" "}
              : {timeLeft.seconds}{" "}
              <span className="text-[12px] font-[400]">
                {t("live_presale_section.Seconds")}
              </span>
            </h3>
            <button
              onClick={handleScroll}
              className="2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[10px] sm:text-[9px] text-[8px] font-[700] text-[#fff]  bg-[black] rounded-[3px] h-[22px] px-[6px] md:px-[10px]"
            >
              {t("live_presale_section.buy_button")}
            </button>
          </div>
        </div>
      </div> 
    
     {/* <div
      className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden items-center w-[100%] 2xl:mb-12 xl:mb-12 lg:mb-12 md:mb-12 sm:mb-0 mb-0 fixed 2xl:bottom-unset xl:bottom-unset lg:bottom-unset md:bottom-unset sm:bottom-0 bottom-0 2xl:top-0 h-[38px] xl:top-0 lg:top-0 md:top-0 sm:top-unset top-unset left-0 right-0 z-[999]"
      style={{
        background: "#FCD149",
      }}
    >
      <div className="2xl:max-w-[1100px] xl:max-w-[1100px] lg:max-w-[1100px] md:max-w-[1100px] sm:max-w-[1100px] max-w-[360px] mx-auto 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] flex flex-row justify-between 2xl:space-x-[30px] xl:space-x-[30px] lg:space-x-[30px] md:space-x-[30px] sm:space-x-[10px] space-x-[5px] items-center px-2">
        <div className="hidden 2xl:block xl:block lg:block md:block sm:hidden"></div>
        <p className="font-[600] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[10px] text-[10px]">
          {t("live_presale_section.title")}
          The Valentine's Special: Get 50% More BFX with Code <strong>LOVE50</strong> 
        </p>
          <div className="flex items-center space-x-2">
            <div>
              <h3 className="text-[16px] font-[600]">
                {timeLeft.days}{" "}
                <span className="text-[14px] font-[400]">
                  {t("live_presale_section.day")}
                </span>{" "}
                : {timeLeft.hours}{" "}
                <span className="text-[14px] font-[400]">
                  {t("live_presale_section.Hours")}
                </span>{" "}
                : {timeLeft.minutes}{" "}
                <span className="text-[14px] font-[400]">
                  {t("live_presale_section.Minutes")}
                </span>{" "}
                : {timeLeft.seconds}{" "}
                <span className="text-[14px] font-[400]">
                  {t("live_presale_section.Seconds")}
                </span>
              </h3>
            </div>
          </div>
        <img
          src={live_cards}
          alt="live_cards"
          className="block 2xl:hidden xl:hidden lg:hidden md:hidden sm:block"
        />
        <img
          src={live_cards_des}
          alt="live_cards"
          className="hidden 2xl:block xl:block lg:block md:block sm:hidden"
        />
        <button
          onClick={handleScroll}
          className="2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[10px] sm:text-[9px] text-[8px] font-[700] bg-[black] text-white rounded-[3px] h-[25px] px-[6px] md:px-[10px]"
        >
          {t("live_presale_section.buy_button")}
        </button>
      </div>
    </div> */}
      {/* <div
      className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex flex-col justify-center items-center w-[100%] 2xl:mb-12 xl:mb-12 lg:mb-12 md:mb-12 sm:mb-0 mb-0 fixed 2xl:bottom-unset xl:bottom-unset lg:bottom-unset md:bottom-unset sm:bottom-0 bottom-0 2xl:top-0 h-[60px] xl:top-0 lg:top-0 md:top-0 sm:top-unset top-unset left-0 right-0 z-[999]"
      style={{
        background: "#FCD149",
        
      }}
    >
      <div className="2xl:max-w-[1100px] xl:max-w-[1100px] lg:max-w-[1100px] md:max-w-[1100px] sm:max-w-[1100px] max-w-[100%] mx-auto 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] flex flex-col justify-between 2xl:space-x-[30px] xl:space-x-[30px] lg:space-x-[30px] md:space-x-[30px] sm:space-x-[0px] space-x-[0px] items-center ">
        <div className="hidden 2xl:block xl:block lg:block md:block sm:hidden"></div>
        <p className="font-[600] 2xl:text-[16px] pb-1 xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[10px] text-[10px]">
          {t("live_presale_section.title")}
          The Valentine's Special: Get 50% More BFX with Code <strong>LOVE50</strong> 
        </p>
       <div className="flex items-center justify-center space-x-3 pt-1 border-t-[1px] border-[#000] w-[100%]">
           <div className="flex items-center ">
            <div>
              <h3 className="text-[14px] font-[600]">
                {timeLeft.days}{" "}
                <span className="text-[12px] font-[400]">
                  {t("live_presale_section.day")}
                </span>{" "}
                : {timeLeft.hours}{" "}
                <span className="text-[12px] font-[400]">
                  {t("live_presale_section.Hours")}
                </span>{" "}
                : {timeLeft.minutes}{" "}
                <span className="text-[12px] font-[400]">
                  {t("live_presale_section.Minutes")}
                </span>{" "}
                : {timeLeft.seconds}{" "}
                <span className="text-[12px] font-[400]">
                  {t("live_presale_section.Seconds")}
                </span>
              </h3>
            </div>
          </div>
        <button
          onClick={handleScroll}
          className="2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[10px] sm:text-[9px] text-[8px] font-[700] bg-[black] text-white rounded-[3px] h-[25px] px-[6px] md:px-[10px]"
        >
          {t("live_presale_section.buy_button")}
        </button>
       </div>
      </div>
    </div> */}
        # Original Banner 
     {/* <div
      className="flex items-center w-[100%] 2xl:mb-12 xl:mb-12 lg:mb-12 md:mb-12 sm:mb-0 mb-0 fixed 2xl:bottom-unset xl:bottom-unset lg:bottom-unset md:bottom-unset sm:bottom-0 bottom-0 2xl:top-0 h-[38px] xl:top-0 lg:top-0 md:top-0 sm:top-unset top-unset left-0 right-0 z-[999]"
      style={{
        background: "#FCD149",
      }}
    >
      <div className="max-w-[900px] mx-auto w-[100%] flex flex-row justify-center 2xl:space-x-[30px] xl:space-x-[30px] lg:space-x-[30px] md:space-x-[30px] sm:space-x-[15px] space-x-[15px] items-center px-2">
        <p className="font-[600] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[11px] text-[10px]">
          {t("live_presale_section.title")}
        </p>
        <img
          src={live_cards}
          alt="live_cards"
          className="block 2xl:hidden xl:hidden lg:hidden md:hidden sm:block"
        />
        <img
          src={live_cards_des}
          alt="live_cards"
          className="hidden 2xl:block xl:block lg:block md:block sm:hidden"
        />
        <button
          onClick={handleScroll}
          className="2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[10px] sm:text-[9px] text-[8px] font-[700] border border-1 border-[black] rounded-[3px] h-[25px] px-[6px] md:px-[10px]"
        >
          {t("live_presale_section.buy_button")}
        </button>
      </div>
    </div> */}
   
    </>
  );
}

export default LivePresale;
