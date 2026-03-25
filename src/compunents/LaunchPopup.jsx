import React, { useEffect, useState } from "react";
import popupHeroImage from "../assets/Popup/freepik_a_highly_detailed_3d_render_of_a_transparent_glass_67547_1_2x.webp";

const decorativeLineStyles = [
  { width: "155%", height: "68%", left: "-36%", bottom: "-34%" },
  { width: "140%", height: "60%", left: "-28%", bottom: "-28%" },
  { width: "124%", height: "52%", left: "-20%", bottom: "-22%" },
  { width: "108%", height: "44%", left: "-12%", bottom: "-16%" },
  { width: "92%", height: "36%", left: "-4%", bottom: "-10%" },
];

const overlayStyle = {
  background:
    "radial-gradient(circle at 78% 18%, rgba(255, 216, 105, 0.18) 0%, rgba(255, 216, 105, 0) 18%), radial-gradient(circle at 65% 28%, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0) 12%), linear-gradient(180deg, #060606 0%, #000000 100%)",
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
        className="relative w-full max-w-[320px] min-h-[490px] overflow-hidden rounded-[16px] border border-[#E5AE00] text-white shadow-[0_30px_80px_rgba(0,0,0,0.55)] md:max-w-[902px] md:min-h-[474px] md:rounded-[26px] md:border-2"
        onClick={(event) => event.stopPropagation()}
        style={overlayStyle}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 h-[262px] w-[206px] -translate-x-1/2 overflow-hidden opacity-[0.98] md:hidden"
            style={{
              backgroundImage: `url(${popupHeroImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 360px",
              backgroundPosition: "86% -44px",
            }}
          />
          <img
            src={popupHeroImage}
            alt=""
            className="pointer-events-none absolute bottom-[-14px] right-[18px] hidden h-[500px] w-auto max-w-none opacity-[0.97] md:block"
          />
          <div className="absolute inset-x-0 top-0 h-[54%] bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.98)_72%,rgba(0,0,0,0.68)_86%,rgba(0,0,0,0)_100%)] md:hidden" />
          <div className="absolute inset-y-0 left-0 hidden w-[50%] bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.98)_58%,rgba(0,0,0,0.72)_82%,rgba(0,0,0,0)_100%)] md:block" />
        </div>

        <div className="absolute inset-0">
          {decorativeLineStyles.map((style, index) => (
            <div
              key={index}
              className="absolute rounded-[50%] border border-white/[0.08]"
              style={style}
            />
          ))}
        </div>

        <div className="absolute left-1/2 top-[214px] h-[125px] w-[125px] -translate-x-1/2 rounded-full bg-[#E5AE00]/10 blur-[56px] md:left-auto md:right-[14%] md:top-[8%] md:h-[220px] md:w-[220px] md:translate-x-0 md:blur-[70px]" />

        <button
          onClick={closePopup}
          className="absolute right-3 top-3 z-20 text-white transition hover:text-[#E5AE00] md:right-4 md:top-4"
          aria-label="Close popup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M12.25 1.25L1.75 12.25M12.25 12.25L1.75 1.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="relative z-10 flex min-h-[470px] flex-col items-center px-[22px] pb-[224px] pt-[30px] text-center md:min-h-[474px] md:max-w-[460px] md:items-start md:justify-center md:px-[46px] md:pb-0 md:pt-0 md:text-left">
          <div className="max-w-[280px] md:max-w-[460px]">
            <p className="mb-2 font-[Onest] text-[16px] font-[800] uppercase leading-none tracking-[-0.02em] md:mb-2 md:whitespace-nowrap md:text-[24px]">
              Last Chance Before Launch
            </p>
            <h2 className="mb-4 whitespace-nowrap font-[Onest] text-[24px] font-[900] uppercase leading-none tracking-[-0.05em] text-[#E5AE00] md:mb-5 md:text-[34px]">
              Final Presale Stage
            </h2>
            <p className="mb-4 font-[Onest] text-[45px] font-[900] uppercase leading-[0.88] tracking-[-0.06em] md:mb-5 md:text-[68px]">
              $15M Goal
            </p>
            <p className="mb-6 font-[Onest] text-[14px] font-[800] uppercase leading-none tracking-[-0.02em] md:mb-7 md:text-[20px]">
              BFX Is About To Launch!
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={handleBuyNow}
                className="mx-auto flex h-[42px] min-w-[206px] items-center justify-center rounded-[6px] border border-[#E5AE00] px-5 font-[Onest] text-[13px] font-[800] uppercase text-black transition hover:opacity-90 md:mx-0 md:h-[50px] md:min-w-[190px] md:px-6 md:text-[16px]"
                style={{
                  background:
                    "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
                }}
              >
                Buy $BFX Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchPopup;
