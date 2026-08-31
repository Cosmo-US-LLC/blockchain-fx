import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import iconcls from "../assets/HowToBuySec/ei_arrow-up (1).svg";
import iconapon from "../assets/presale-v3/ei_arrow-up.svg";
import ClaimWidget from "../compunents/ClaimWidget";
import ExchangeListingsBar from "../compunents/ExchangeListingsBar";

const claimSteps = [1, 2, 3, 4];

const MobileWalletSec = () => {
  const { t } = useTranslation();
  const [selectedClaimStep, setSelectedClaimStep] = useState(0);

  return (
    <section
      className="bg-[#020B10] pb-[35px] pt-[42px]"
      id="Wallet"
      data-scroll-target="bfx-claim"
    >
      <div className="mx-auto w-[90%] max-w-[955px] space-y-[20px] rounded-[8px] border border-[#262626] bg-[#020B10] px-[24px] py-[20px]">
        <header className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <h2 className="text-[30px] font-[700] leading-[120%] tracking-[-1.5px] text-white">
              {t("claim_section.title")}
            </h2>
            <span
              className="inline-flex min-h-[22px] items-center rounded-[7px] bg-[#E9C03D] px-2.5 text-[10px] font-[700] uppercase tracking-[0.04em] text-[#020B10]"
            >
              {t("claim_section.status_live")}
            </span>
          </div>
          <p className="mobilepara mx-auto mt-3 max-w-[345px] pb-6 text-center font-inter text-[16px] font-[400] leading-[160%] text-white">
            {t("claim_section.description_live")}
          </p>
        </header>

        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <ClaimWidget />

          <div
            id="how-to-claim"
            className="relative mx-auto w-full max-w-[413.763px] space-y-[10px] rounded-[20px] border border-white px-[10px] pb-[11px] pt-[22px]"
            style={{
              background:
                "linear-gradient(211.91deg, rgba(100, 100, 100, 0.5) 0.66%, rgba(20, 20, 20, 0.75) 49.48%, rgba(40, 40, 40, 0.5) 103.45%)",
              backdropFilter: "blur(19px)",
              WebkitBackdropFilter: "blur(19px)",
            }}
          >
            <div className="absolute left-0 top-0 w-full -translate-y-1/2">
              <div className="mx-auto flex h-[30px] w-[112px] items-center rounded-[6px] border border-white bg-[#020B10]">
                <h3 className="w-full text-center text-[10px] font-[700] text-white">
                  {t("claim_section.how_to_claim")}
                </h3>
              </div>
            </div>

            <div>
              {claimSteps.map((step, index) => {
                const isOpen = selectedClaimStep === index;
                const panelId = `mobile-claim-step-${step}`;

                return (
                  <div
                    key={step}
                    className="border-b border-[#545454] px-1 py-[5px] last:border-none"
                  >
                    <button
                      type="button"
                      className="flex min-h-[44px] w-full items-center justify-between gap-4 rounded-[4px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5AE01]"
                      onClick={() =>
                        setSelectedClaimStep(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span
                        className={`text-[14px] font-[600] ${
                          isOpen ? "text-[#F3C742]" : "text-white"
                        }`}
                      >
                        {t(`claim_section.step_${step}_title`)}
                      </span>
                      <img
                        src={isOpen ? iconcls : iconapon}
                        alt=""
                        aria-hidden="true"
                        className="h-[24px] w-[24px] shrink-0"
                      />
                    </button>
                    <div
                      id={panelId}
                      className={`grid transition-all duration-300 motion-reduce:transition-none ${
                        isOpen
                          ? "mt-[8px] grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                      aria-hidden={!isOpen}
                    >
                      <div className="min-h-0 overflow-hidden text-[12px] font-[400] leading-[1.55] text-white">
                        {t(`claim_section.step_${step}_description`)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-[14px] border-t border-[#545454] pt-4">
              <h4 className="px-1 py-[5px] text-[14px] font-[600] text-white">
                {t("claim_section.exchange_title")}
              </h4>
              <ExchangeListingsBar className="mx-auto w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileWalletSec;
