import React, { useEffect, useState } from "react";
import rocketLaunchDesktop from "../assets/Popup/rocket-launch-desktop.webp";
import rocketLaunchMobile from "../assets/Popup/rocket-launch-mobile.webp";
import closeIcon from "../assets/Popup/close-icon.svg";

const LaunchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
      onClick={closePopup}
      role="dialog"
      aria-modal="true"
      aria-label="Presale phase ended popup"
    >
      <div
        className="relative w-full max-w-[330px] min-h-[549px] overflow-hidden rounded-[12px] border-2 border-[#E5AE00] bg-black text-white shadow-[0_30px_80px_rgba(0,0,0,0.55)] md:max-w-[902px] md:min-h-[474px] md:rounded-[24px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute left-1/2 top-[-16px] h-[500px] w-[800px] -translate-x-1/2 bg-[rgba(217,154,38,0.85)] mix-blend-color md:hidden" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-[-198px] top-[-36px] h-[602px] w-[553px] md:hidden">
            <img
              src={rocketLaunchMobile}
              alt=""
              className="absolute inset-0 h-full w-full max-w-none object-cover opacity-[0.97]"
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(80.4518108900653deg, rgb(0,0,0) 15.344%, rgba(0,0,0,0) 52.009%)",
              }}
            />
          </div>

          <div className="absolute left-[-2px] top-[-51px] hidden h-[572px] w-[903px] md:block">
            <img
              src={rocketLaunchDesktop}
              alt=""
              className="absolute inset-0 h-full w-full max-w-none object-cover opacity-[0.97]"
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(73.8768283870228deg, rgb(0,0,0) 15.344%, rgba(0,0,0,0) 52.009%)",
              }}
            />
          </div>
        </div>

        <button
          onClick={closePopup}
          className="absolute right-[11px] top-[9px] z-20 transition hover:opacity-70 md:right-[25px] md:top-[21px]"
          aria-label="Close popup"
        >
          <img src={closeIcon} alt="" className="w-6 h-6" />
        </button>

        <div className="relative z-10 flex min-h-[549px] flex-col items-center px-[24px] pt-[39px] text-center md:min-h-[474px] md:items-start md:justify-center md:px-[51px] md:py-[60px] md:text-left">
          <div className="flex w-full max-w-[282px] flex-col items-center gap-[10px] md:max-w-[456px] md:items-start md:gap-[12px]">
            <p className="font-[Onest] text-[17px] font-black uppercase leading-[1.05] tracking-[-0.02em] text-white underline underline-offset-2 md:text-[23.874px]">
              PRESALE PHASE ENDED!
            </p>

            <p className="font-[Onest] text-[18px] font-black uppercase leading-[0.98] text-[#E5AE00] md:w-[398px] md:text-[29px]">
              <span className="md:hidden">LAST CHANCE TO BUY <br /> BFX BEFORE LAUNCH</span>
              <span className="hidden md:inline">LAST CHANCE TO BUY BFX</span>
            </p>

            <p className="font-[Onest] font-black uppercase leading-[0.9] text-white md:leading-[0.86]">
              <span className="block text-[20px] md:inline md:text-[42.3px]">
                BFX OFFICIALLY{" "}
              </span>
              <span className="block text-[26px] md:inline md:text-[56px]">
                LAUNCHES ON
              </span>
            </p>

            <div className="mt-[6px] flex flex-col items-center gap-[8.229px] md:mt-0 md:items-start md:gap-[16px]">
              <div className="flex w-[240px] items-center justify-center rounded-[10.851px] border-[2.444px] border-[#E5AE00] bg-[#E5AE00] px-[46.884px] py-[7.814px] md:w-[411px] md:rounded-[15.824px] md:border-[3.564px] md:px-[68.372px] md:py-[11.395px]">
                <p className="whitespace-nowrap font-[Inter] text-[16.863px] font-bold leading-[20.285px] text-black md:text-[24.592px] md:leading-[29.582px]">
                  31st AUGUST | 3 PM UTC
                </p>
              </div>

              <p className="w-[152px] text-center text-[12px] font-bold uppercase leading-none text-white md:w-[419px] md:text-left md:text-[16px] md:leading-[1.2]">
                <span className="md:hidden">GET READY FOR LIFTOFF</span>
                <span className="hidden md:inline">
                  THE COUNTDOWN IS ON, GET READY FOR LIFTOFF
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchPopup;
