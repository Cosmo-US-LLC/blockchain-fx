import React, { useEffect, useState } from "react";
import popupHeroImage from "../assets/Popup/freepik_a_highly_detailed_3d_render_of_a_transparent_glass_67547_1_2x.webp";
import uniswapIcon from "../assets/wallet/swp.svg";
import lbankLogo from "../assets/Popup/lbank-logo.svg";
import closeIcon from "../assets/Popup/close-icon.svg";

const exchangeButtonStyle = {
  background: "rgba(176, 176, 176, 0.17)",
};

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

  const getPresaleSection = () =>
    document.querySelector("[data-scroll-target='bfx-presale']") ||
    document.getElementById("Wallet") ||
    document.getElementById("how-to-buy");

  const handleBuyNow = () => {
    closePopup();

    window.setTimeout(() => {
      const walletSection = getPresaleSection();

      if (!walletSection) {
        return;
      }

      const offset = window.innerWidth < 700 ? 96 : 118;
      const top =
        walletSection.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }, 180);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
      onClick={closePopup}
      role="dialog"
      aria-modal="true"
      aria-label="Final presale stage popup"
    >
      <div
        className="relative w-full max-w-[330px] min-h-[549px] overflow-hidden rounded-[12px] border-2 border-[#E5AE00] bg-black text-white shadow-[0_30px_80px_rgba(0,0,0,0.55)] md:max-w-[902px] md:min-h-[474px] md:rounded-[24px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute left-1/2 top-[-16px] h-[500px] w-[800px] -translate-x-1/2 bg-[rgba(217,154,38,0.85)] mix-blend-color md:hidden" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 md:hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.25) 36%, rgba(0,0,0,0.75) 46%, black 54%, black 100%)",
              maskImage:
                "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.25) 36%, rgba(0,0,0,0.75) 46%, black 54%, black 100%)",
            }}
          >
            <img
              src={popupHeroImage}
              alt=""
              className="absolute left-[-360px] top-[170px] h-[450px] w-[700px] max-w-none opacity-[0.97]"
            />
          </div>
          <img
            src={popupHeroImage}
            alt=""
            className="absolute left-[-2px] top-[-51px] hidden h-[572px] w-[903px] max-w-none opacity-[0.97] md:block"
          />
          <div className="absolute inset-0 hidden bg-[linear-gradient(74deg,#000_15.34%,rgba(0,0,0,0)_52%)] md:block" />
        </div>

        <button
          onClick={closePopup}
          className="absolute right-[11px] top-[9px] z-20 transition hover:opacity-70 md:right-[25px] md:top-[21px]"
          aria-label="Close popup"
        >
          <img src={closeIcon} alt="" className="h-6 w-6" />
        </button>

        <div className="relative z-10 flex min-h-[549px] flex-col items-center px-[24px] pt-[39px] text-center md:min-h-[474px] md:items-start md:justify-center md:px-[51px] md:py-[60px] md:text-left">
          <div className="flex w-full max-w-[282px] flex-col items-center md:max-w-[456px] md:items-start">
            <p className="font-[Onest] text-[16.5px] font-black uppercase leading-[1.05] tracking-[-0.02em] text-white md:mb-2 md:text-[24px]">
              LAST CHANCE BEFORE LAUNCH
            </p>

            <div className="mt-[7px] flex flex-wrap items-center justify-center gap-x-2 gap-y-2 md:mb-4 md:mt-0 md:justify-start">
              <p className="font-[Onest] text-[23px] font-black uppercase leading-[1.05] text-[#E5AE00] md:text-[34px]">
                FINAL PRESALE STAGE
              </p>
            </div>

            <h2 className="mt-[12px] font-[Onest] text-[33px] font-black uppercase leading-[0.86] tracking-[-0.04em] text-white md:mb-5 md:mt-0 md:text-[56px]">
              LBANK Listing confirmed!
            </h2>

            <div className="mt-[12px] flex flex-col items-center gap-[11px] md:mt-0 md:items-start md:gap-[20px]">
              <p className="font-[Onest] text-[16.5px] font-bold uppercase leading-[1.4] text-white md:text-[20px]">
                BFX Is About To Launch!
              </p>

              <div className="flex items-center justify-center gap-[8.5px] md:justify-start md:gap-3 md:mt-6">
                <button
                  onClick={handleBuyNow}
                  className="flex h-[37px] w-fit items-center rounded-[7px] border-[1.5px] border-[#ABABAB] px-[8px] py-[4px] transition hover:opacity-90 md:h-[52px] md:min-w-fit md:rounded-[10px] md:border-2 md:px-4"
                  style={exchangeButtonStyle}
                >
                  <span className="flex h-[23px] w-[23px] shrink-0 items-center justify-center overflow-hidden rounded-full md:h-[32px] md:w-[32px]">
                    <img
                      src={uniswapIcon}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="ml-[6px] font-[Inter] text-[11px] font-bold uppercase leading-none text-white md:ml-2 md:text-[15px]">
                    Uniswap
                  </span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="flex h-[37px] w-[84px] items-center rounded-[7px] border-[1.5px] border-[#ABABAB] px-[8px] transition hover:opacity-90 md:h-[52px] md:min-w-fit md:rounded-[10px] md:border-2 md:px-4"
                  style={exchangeButtonStyle}
                >
                  <span className="flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full bg-[#F0B90B] md:h-[32px] md:w-[32px]">
                    <img
                      src={lbankLogo}
                      alt=""
                      className="h-[13px] w-[10px] md:h-[18px] md:w-[14px]"
                    />
                  </span>
                  <span className="ml-[6px] font-[Inter] text-[11px] font-bold uppercase leading-none text-white md:ml-2 md:text-[15px]">
                    Lbank
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchPopup;
