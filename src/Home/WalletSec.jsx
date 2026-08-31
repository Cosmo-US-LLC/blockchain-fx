import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import iconapon from "../assets/HowToBuySec/ei_arrow-up.svg";
import iconcls from "../assets/HowToBuySec/ei_arrow-up (1).svg";
import ClaimWidget from "../compunents/ClaimWidget";
import ExchangeListingsBar from "../compunents/ExchangeListingsBar";

const claimSteps = [1, 2, 3, 4];

const WalletSec = () => {
  const { t } = useTranslation();
  const [selectedClaimStep, setSelectedClaimStep] = useState(0);

  return (
    <section
      className="min-h-[700px] bg-[#020B10] pb-[25px] pt-[42px]"
      id="claim-bfx"
      data-scroll-target="bfx-claim"
    >
      <div
        className="mx-auto w-full max-w-[1200px] space-y-[30px] rounded-[41px] border border-[#575757] px-[40px] py-[26px] <md:px-6 <sm:px-4"
        id="Wallet"
      >
        <header className="pb-[20px] text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <h2 className="text-[40px] font-[700] tracking-[-1px] text-white">
              {t("claim_section.title")}
            </h2>
            <span
              className="inline-flex min-h-[22px] items-center rounded-[7px] bg-[#E9C03D] px-3 text-[12px] font-[700] uppercase tracking-[0.04em] text-[#020B10]"
            >
              {t("claim_section.status_live")}
            </span>
          </div>
          <p className="mx-auto mt-2 max-w-[760px] text-[18px] font-[400] leading-[1.5] tracking-[-0.32px] text-white">
            {t("claim_section.description_live")}
          </p>
        </header>

        <div className="flex justify-center gap-4 <md:flex-col">
          <ClaimWidget />

          <div
            id="how-to-claim"
            className="relative mx-auto w-full max-w-[450px] rounded-[26.227px] border border-white px-[25px] pb-[11px] pt-[8px]"
            style={{
              background:
                "linear-gradient(212deg, rgb(207 207 207 / 25%) 0.66%, rgba(23, 23, 23, 0.68) 49.48%, rgb(30 30 30 / 22%) 103.45%)",
              backdropFilter: "blur(13.031462669372559px)",
              WebkitBackdropFilter: "blur(13.031462669372559px)",
            }}
          >
            <div className="absolute left-0 top-0 w-full -translate-y-1/2">
              <div className="mx-auto flex h-[30.612px] w-[112px] items-center rounded-[6px] border border-[#454545] bg-black">
                <h3 className="w-full text-center text-[9.875px] font-[700] text-white">
                  {t("claim_section.how_to_claim")}
                </h3>
              </div>
            </div>

            <div>
              {claimSteps.map((step, index) => {
                const isOpen = selectedClaimStep === index;
                const panelId = `desktop-claim-step-${step}`;

                return (
                  <div
                    key={step}
                    className="border-b border-[#545454] px-1 py-[30px] last:border-none"
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
                      <div className="min-h-0 overflow-hidden text-[11.688px] font-[400] leading-[1.55] text-white">
                        {t(`claim_section.step_${step}_description`)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="!mt-0 space-y-[18px] border-t border-[#545454] pt-10">
              <h4 className="px-1 text-[14px] font-[600] text-white">
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

export default WalletSec;
