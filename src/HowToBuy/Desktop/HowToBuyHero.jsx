import React from "react";
import { useTranslation } from "react-i18next";
import CoinImage from "../../assets/hoyToBuy/hero/hero-coin.webp";

function HowToBuyHero() {
  const { t } = useTranslation();
  return (
    <div className="  bg-[#000] pt-24 px-12 pb-10">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="text-white max-w-[520px]">
          <h1 className="mb-4 text-5xl font-bold leading-tight">
            {t("how_to_buy_hero.title")} <br />
            {t("how_to_buy_hero.blockchain_fx")} <br />
            <span className="text-yellow-400">{t("how_to_buy_hero.bfx_token")}</span>
          </h1>
          <p className="text-base leading-relaxed text-gray-300">
            {t("how_to_buy_hero.description")}
          </p>
        </div>

        <div className="">
          <img
            src={CoinImage}
            alt="BFX Coin"
            className="object-contain w-[460px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default HowToBuyHero;
