"use client";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOFA from "../assets/herosection/AOFA.webp";
import logo from "../assets/footer/logo.svg";
import socil1 from "../assets/footer/Vector (2).svg";
import socil2 from "../assets/footer/Vector (3).svg";
import socil3 from "../assets/footer/Vector (4).svg";

import icnft1 from "../assets/footer/ftricn (2).svg";
import icnft2 from "../assets/footer/image_588254259.webp";
import icnft3 from "../assets/footer/ftricn (1).svg";

function Footer() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const currentLang = (i18n.language || "en").toLowerCase();

  // languages used across app (keeps detection consistent)
  const supportedLangs = [
    "en",
    "vi",
    "de",
    "nl",
    "ja",
    "tr",
    "ko",
    "it",
    "no",
    "zh",
    "ru",
    "fr",
    "pt",
    "es",
    "ar",
  ];

  // helper: prefix path with current language (no /en prefix for English)
  const getLangPath = (path) => {
    const p = path === "/" ? "" : path; // normalize
    return currentLang === "en" ? p || "/" : `/${currentLang}${p}`;
  };

  // detect if current path is homepage (either "/" or "/:lang")
  const isHomePath = () => {
    const parts = location.pathname.split("/").filter(Boolean);
    if (parts.length === 0) return true;
    if (parts.length === 1 && supportedLangs.includes(parts[0])) return true;
    return false;
  };

  // direct scroll helper
  const scrollToTarget = (targetId, offset = 90) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // click handler: scroll if on homepage, otherwise navigate then scroll
  const handleSectionClick = (targetId, offset = 90) => {
    // close mobile nav if present — attempt best-effort (component local state isn't here)
    // Navigate or scroll accordingly
    if (isHomePath()) {
      scrollToTarget(targetId, offset);
    } else {
      // navigate to localized home then scroll after a short timeout (allow render)
      navigate(getLangPath("/"));
      setTimeout(() => scrollToTarget(targetId, offset), 120);
    }
  };

  return (
    <div className="bg-[#020B10] lg:bg-[#020B10]">
      {/* desktop verion */}
      <div className="w-[100%] 2xl:block xl:block lg:block md:block sm:hidden hidden space-y-[40px] max-w-[1200px]  pt-[50px] mx-auto pb-[50px] ">
        <div className="flex justify-between">
          <div className="flex justify-between w-[70%]">
            <div className="max-w-[315px] space-y-[10px] w-[100%]">
              <Link
                to={getLangPath("/")}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img src={logo || "/placeholder.svg"} alt="blockchainfx logo" />
              </Link>
              <p className="text-[#fff]  text-[16px] max-w-[260px] font-[400] leading-[166.667%]">
                {t("footer.description")}
              </p>
            </div>

            <div className="max-w-[190px] w-[100%] pt-[15px]">
              <ul>
                <li className="text-white text-[20px] font-[600] leading-[120%]  list-disc  min-w-[130px]">
                  {t("footer.quick_links.title")}

                  {/* How to buy */}
                  <Link to={getLangPath("/how-to-buy")}>
                    <p className="text-[#fff] block text-[16px] pt-[20px] font-[400] leading-[108.333%]">
                      {t("footer.quick_links.how_to_buy")}
                    </p>
                  </Link>

                  {/* What is BFX? -> scroll or navigate+scroll */}
                  <button
                    onClick={() => handleSectionClick("pioneering", 90)}
                    className="text-[#fff] block text-[16px] pt-[10px] font-[400] leading-[108.333%] border border-transparent transition duration-300 text-left"
                  >
                    {t("footer.quick_links.what_is_bfx")}
                  </button>

                  {/* Roadmap -> scroll or navigate+scroll */}
                  <button
                    onClick={() => handleSectionClick("roadmap", 90)}
                    className="text-[#fff] block text-[16px] pt-[10px] font-[400] leading-[108.333%] border border-transparent transition duration-300 text-left"
                  >
                    {t("footer.quick_links.roadmap")}
                  </button>

                  {/* Referral */}
                  <Link to={getLangPath("/referral")}>
                    <p className="text-[#fff] block text-[16px] pt-[10px] font-[400] leading-[108.333%]">
                      {t("footer.quick_links.referral")}
                    </p>
                  </Link>

                  {/* Win $500k */}
                  <Link to={getLangPath("/win-500")}>
                    <p className="text-[#fff] block text-[16px] pt-[10px] font-[400] leading-[108.333%]">
                      {t("footer.quick_links.Win_$500,000")}
                    </p>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="max-w-[190px] w-[100%] pt-[15px]">
              <ul className=" w-[100%]">
                <li className="text-white text-[20px] list-disc font-[600] leading-[120%] min-w-[140px]">
                  {t("footer.docs.title")}
                  <br />
                  <Link to={getLangPath("/privacy-policy")}>
                    <p className="text-[#fff] text-[16px] pt-[20px] block font-[400] leading-[108.333%]">
                      {t("footer.docs.privacy_policy")}
                    </p>
                  </Link>

                  <Link to={getLangPath("/cookies-policy")}>
                    <p className="text-[#fff] text-[16px] pt-[10px] block font-[400] leading-[108.333%]">
                      {t("footer.docs.cookie_policy")}
                    </p>
                  </Link>

                  <Link to={getLangPath("/terms-of-service")}>
                    <p className="text-[#fff] text-[16px] pt-[10px] block font-[400] leading-[108.333%]">
                      {t("footer.docs.terms_of_service")}
                    </p>
                  </Link>

                  <Link to={getLangPath("/token-sale")}>
                    <p className="text-[#fff] text-[16px] pt-[10px] block font-[400] leading-[108.333%]">
                      {t("footer.docs.token_sale")}
                    </p>
                  </Link>

                  <a
                    className="text-[#fff] text-[16px] pt-[10px] block font-[400] leading-[108.333%]"
                    href="https://t.me/blockchainfx_chat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("footer.docs.support")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-[285px] space-y-[10px] w-[100%] pt-[12px]">
            <h4 className="text-white text-[20px] font-[600]">
              {t("footer.socials.title")}
            </h4>
            <div className="flex space-x-6 pt-[10px] pb-[20px]">
              <a
                href="https://t.me/blockchainfx_chat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socil2 || "/placeholder.svg"} alt="telegram" />
              </a>
              <a
                href="https://x.com/BlockchainFXcom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socil3 || "/placeholder.svg"} alt="twitter" />
              </a>
            </div>
            <div className="space-y-[5px]">
              <h4 className="text-[#fff] text-[16px] font-[400] leading-[108.333%]">
                {t("footer.contact.email_label")}
              </h4>
              <h3 className="text-[#fff] text-[16px] font-[400] leading-[108.333%]">
                {t("footer.contact.email")}
              </h3>
              <h3 className="text-[#fff] text-[16px] pt-3 font-[400] leading-[108.333%]">
                License 16172
              </h3>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-[35px] pt-[25px] items-center">
          <img
            className="h-[38px]"
            src={icnft1 || "/placeholder.svg"}
            alt="certik"
          />
          <img
            className="h-[38px]"
            src={icnft2 || "/placeholder.svg"}
            alt="SolidProof logo shield icon and text"
          />
          <img
            className="h-[38px]"
            src={icnft3 || "/placeholder.svg"}
            alt="coinsult"
          />
        </div>
        <div className="border-t border-b border-white/10 py-[46px]">
          <div
            className="text-[14px] font-[400] text-[#fff] leading-[171%]"
            dangerouslySetInnerHTML={{ __html: t("footer.disclaimer") }}
          ></div>
        </div>
        <div className="flex items-center justify-between">
          <p className="w-[30%] text-[16px] text-[#fff] leading-[150%]">
            {t("footer.copyright")}
          </p>
          <div className="w-[30%] flex justify-center items-center">
            <img className="max-w-[150px]" src={AOFA} alt="" />
          </div>
          <div className="space-x-5 w-[30%] flex justify-end">
            <Link to={getLangPath("/cookie-management")}>
              <p className="text-[#fff] text-[16px]  block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#fff] transition duration-300 inline-block">
                {t("footer.cookie_management")}
              </p>
            </Link>
          </div>
        </div>
      </div>
      {/* desktop version end */}

      {/* mobile version */}
      <div className="w-[90%] 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block space-y-[35px] pt-[24px] pb-[80px] mx-auto ">
        <div className=" space-y-[10px] w-[100%]">
          <Link
            to={getLangPath("/")}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={logo || "/placeholder.svg"} alt="blockchainfx logo" />
          </Link>
          <p className="text-[#fff] text-[14px]  w-[300px] font-[400] leading-[200%]">
            {t("footer.description")}
          </p>
        </div>

        <div className="space-y-[35px]">
          <div className="max-w-[150px] w-[100%] ">
            <ul>
              <li className="text-[#fff] text-[16px] font-[600] leading-[108.333%] ">
                {t("footer.quick_links.title")}
                <br />

                <Link to={getLangPath("/how-to-buy")}>
                  <p className="text-[#fff] block text-[13px] pt-[20px] font-[400] leading-[108.333%] hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    {t("footer.quick_links.how_to_buy")}
                  </p>
                </Link>
                <br />

                <button
                  onClick={() => handleSectionClick("pioneering", 90)}
                  className="text-[#fff] block text-[13px] pt-[20px] font-[400] leading-[108.333%] hover:border-b-[#E5AE00] transition duration-300 inline-block text-left"
                >
                  {t("footer.quick_links.what_is_bfx")}
                </button>
                <br />

                <button
                  onClick={() => handleSectionClick("roadmap", 90)}
                  className="text-[#fff] block text-[13px] pt-[20px] font-[400] leading-[108.333%] hover:border-b-[#E5AE00] transition duration-300 inline-block text-left"
                >
                  {t("footer.quick_links.roadmap")}
                </button>
                <br />

                <Link to={getLangPath("/referral")}>
                  <p className="text-[#fff] block text-[13px] pt-[20px] font-[400] leading-[108.333%] hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    {t("footer.quick_links.referral")}
                  </p>
                </Link>
                <br />

                <Link to={getLangPath("/win-500")}>
                  <p className="text-[#fff] block text-[13px] pt-[20px] font-[400] leading-[108.333%] hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    {t("footer.quick_links.Win_$500,000")}
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="max-w-[200px] w-[100%] ">
            <ul className=" w-[100%]">
              <li className="text-[#fff] text-[16px] font-[600] leading-[108.333%]">
                {t("footer.docs.title")}
                <br />

                <Link to={getLangPath("/privacy-policy")}>
                  <p className="text-[#fff] text-[13px] pt-[20px] block font-[400] hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    {t("footer.docs.privacy_policy")}
                  </p>
                </Link>

                <Link to={getLangPath("/cookies-policy")}>
                  <p className="text-[#fff] text-[13px] pt-[20px] block font-[400]">
                    {t("footer.docs.cookie_policy")}
                  </p>
                </Link>

                <Link to={getLangPath("/terms-of-service")}>
                  <p className="text-[#fff] text-[13px] pt-[20px] block font-[400] hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    {t("footer.docs.terms_of_service")}
                  </p>
                </Link>

                <Link to={getLangPath("/token-sale")}>
                  <p className="text-[#fff] text-[13px] pt-[20px] block font-[400] hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    {t("footer.docs.token_sale")}
                  </p>
                </Link>

                <a
                  href="https://t.me/blockchainfx_chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fff] text-[13px] pt-[20px] block font-[400] hover:border-b-[#E5AE00] transition duration-300 inline-block"
                >
                  {t("footer.docs.support")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* socials */}
        <div className="flex justify-between">
          <div className="max-w-[285px] space-y-[25px] w-[100%] ">
            <h4 className="text-[#fff] text-[16px] font-[600]">
              {t("footer.socials.title")}
            </h4>
            <div className="flex space-x-6">
              <a
                href="https://t.me/blockchainfx_chat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-[24px] h-[24px]"
                  src={socil2 || "/placeholder.svg"}
                  alt="telegram"
                />
              </a>
              <a
                href="https://x.com/BlockchainFXcom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-[24px] h-[24px]"
                  src={socil3 || "/placeholder.svg"}
                  alt="twitter"
                />
              </a>
            </div>
            <div className="space-y-[10px]">
              <h4 className="text-[#fff] text-[12px] font-[400]">
                {t("footer.contact.email_label")}
              </h4>
              <h3 className="text-[#fff] text-[15px] font-[400]">
                {t("footer.contact.email")}
              </h3>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex justify-start space-x-[20px] pt-[10px] items-center">
          <img
            className="h-[22px]"
            src={icnft1 || "/placeholder.svg"}
            alt="certik"
          />
          <img
            className="h-[22px] object-cover"
            src={icnft2 || "/placeholder.svg"}
            alt="SolidProof logo shield icon and text"
          />
          <img
            className="h-[22px]"
            src={icnft3 || "/placeholder.svg"}
            alt="coinsult"
          />
        </div>
        <div className="border-t border-b border-[#FFF] border-opacity-10 py-[18px]">
          <div
            className="text-[10px] font-[400] text-[#fff] leading-[190%]"
            dangerouslySetInnerHTML={{ __html: t("footer.disclaimer") }}
          />
        </div>
        <div className="space-y-3">
          <div className="flex justify-center items-center">
            <img className="max-w-[150px]" src={AOFA} alt="" />
          </div>
          <h3 className="text-[#fff] text-center text-[15px] font-[400]">License 16172</h3>
          <div>
            <p className="text-[10px] text-center text-[#fff] leading-[100%] mb-8">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
      {/* mobile version end */}
    </div>
  );
}

export default Footer;
