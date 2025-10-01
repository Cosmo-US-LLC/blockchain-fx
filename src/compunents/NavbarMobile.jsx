import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

import i18n from "../i18n";

import logo from "../assets/presale-v3/nav_icon.svg";
import flag from "../assets/navbar/flg.svg";
import menu from "../assets/presale-v3/menu.svg";
import arwdwn from "../assets/navbar/arw.png";
import flag1 from "../assets/navbar/flg (1).svg";
import flag2 from "../assets/navbar/flg (2).svg";
import flag3 from "../assets/navbar/flg (3).svg";
import flag4 from "../assets/navbar/flg (4).svg";
import flag5 from "../assets/navbar/flg (5).svg";
import flag6 from "../assets/navbar/flg (6).svg";
import flag7 from "../assets/navbar/flg (7).svg";
import flag8 from "../assets/navbar/flg (8).svg";
import flag9 from "../assets/navbar/flg (9).svg";
import flag10 from "../assets/navbar/flg (10).svg";
import flag11 from "../assets/navbar/flg (11).svg";
import flag12 from "../assets/navbar/flg (12).svg";
import flag13 from "../assets/navbar/flg (13).svg";
import flag14 from "../assets/navbar/flg (14).svg";
import flag15 from "../assets/navbar/ar.png";
import flag16 from "../assets/navbar/fi.png";

import WalletPopup from "./ui/WalletPopup";
import DashboardPopup from "./ui/DashboardPopup";
import { useAccount } from "../presale-gg/web3/hooks";
import {
  hideConnectWalletModal,
  showConnectWalletModal,
  useModalState,
} from "../presale-gg/stores/modal.store";
import LivePresale from "./LivePresale";

const flags = [
  { flag: flag1, abbreviation: "EN", name: "English" },
  { flag: flag2, abbreviation: "VI", name: "Vietnamese" },
  { flag: flag3, abbreviation: "DE", name: "German" },
  { flag: flag4, abbreviation: "NL", name: "Dutch" },
  { flag: flag5, abbreviation: "JA", name: "Japanese" },
  { flag: flag6, abbreviation: "TR", name: "Turkish" },
  { flag: flag15, abbreviation: "AR", name: "Arabic" },
  { flag: flag8, abbreviation: "IT", name: "Italian" },
  { flag: flag9, abbreviation: "NO", name: "Norwegian" },
  { flag: flag10, abbreviation: "ZH", name: "Chinese" },
  { flag: flag11, abbreviation: "RU", name: "Russian" },
  { flag: flag12, abbreviation: "FR", name: "French" },
  { flag: flag13, abbreviation: "PT", name: "Portuguese" },
  { flag: flag14, abbreviation: "ES", name: "Spanish" }
  // { flag: flag16, abbreviation: "FI", name: "Finnish" },
];

function NavbarMobile() {
  const { t } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(flags[0]);
  const navigate = useNavigate();
  const location = useLocation();
  const [languageChanged, setLanguageChanged] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const pdfUrl =
    "https://blockchainfx.com/BFX-Whitepaper.pdf?_gl=1*97cvu6*_gcl_au*MTEzODkzMzY0LjE3NTQzOTA1ODE.";

  const parts = location.pathname.split("/").filter(Boolean);
  const isHome =
    parts.length === 0 ||
    (parts.length === 1 &&
      flags.some((f) => f.abbreviation.toLowerCase() === parts[0]));

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const setLanguageFromURL = () => {
      const parts = location.pathname.split("/").filter(Boolean);
      let currentLang = "en";

      if (parts.length > 0) {
        if (parts[0] === "how-to-buy" && parts[1]) {
          currentLang = parts[1].toLowerCase();
        } else {
          const urlLang = parts[0].toLowerCase();
          if (flags.some((f) => f.abbreviation.toLowerCase() === urlLang)) {
            currentLang = urlLang;
          }
        }
      }

      let found = flags.find(
        (f) => f.abbreviation.toLowerCase() === currentLang
      );

      if (!found) {
        found = flags.find((f) => f.abbreviation.toLowerCase() === "en");
      }

      if (found) {
        setSelectedLang(found);

        if (i18n.language !== currentLang) {
          i18n.changeLanguage(currentLang);
        }
      }
    };

    setLanguageFromURL();
  }, [location.pathname, i18n, flags]);

  const handleSelectLanguage = (lang) => {
    const abbr = lang.abbreviation.toLowerCase();
    setSelectedLang(lang); // updates the selected language
    i18n.changeLanguage(abbr);
    setIsOpen(false);

    // update URL
    const parts = location.pathname.split("/").filter(Boolean);
    let newPath = "/";

    if (parts[0] === "how-to-buy") {
      newPath = abbr === "en" ? "/how-to-buy" : `/how-to-buy/${abbr}`;
    } else {
      const pagePath = parts.length > 1 ? `/${parts.slice(1).join("/")}` : "";
      newPath = abbr === "en" ? `${pagePath || "/"}` : `/${abbr}${pagePath}`;
    }

    if (newPath !== location.pathname) {
      navigate(newPath);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleScroll = (event, targetId, offset) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
    }
  };

  const accountData = useAccount();
  const modalData = useModalState();

  return (
    <nav
    aria-label="Breadcrumb"
    >
      <div className="relative h-[64px]">
        <div className="fixed w-[100%] bg-[#020B10] z-[999] border-b-[1px] border-[#262626]">
          <div className="2xl:h-[63px] xl:h-[63px] lg:h-[63px] md:h-[63px] sm:h-[64px] h-[64px] max-w-[1200px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%] mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3 2xl:block xl:block lg:block md:block sm:flex 2xl:space-x-0 xl:space-x-0 lg:space-x-0 md:space-x-0 sm:space-x-3">
              <div className="block 2xl:hidden xl:hidden lg:hidden md:hidden sm:block">
                <img
                  src={menu}
                  onClick={toggleMobileMenu}
                  className="cursor-pointer"
                  alt="menu"
                />
              </div>
              <div className="">
                <Link
                  to={
                    selectedLang.abbreviation.toLowerCase() === "en"
                      ? "/"
                      : `/${selectedLang.abbreviation.toLowerCase()}`
                  }
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <div className="flex flex-row items-center gap-2">
                    <img className="cursor-pointer" src={logo} alt="blockchainfx logo" />
                    <p className="font-[700] text-[17px] text-[white]">
                      BlockchainFX
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* mobile menu */}
            {isMobileMenuOpen && (
              <div className="absolute top-[100%] min-h-[100vh] left-0 w-full bg-[#020B10] shadow-md z-50 p-6">
                <a
                  className="block text-[16px] font-[500] text-[#fff] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
                  href=""
                  onClick={(e) => handleScroll(e, "pioneering", 60)}
                >
                  {t("navbar.whatIsBlockchainFX")}
                </a>

                <Link
                  to={
                    selectedLang.abbreviation.toLowerCase() === "en"
                      ? "/how-to-buy"
                      : `/${selectedLang.abbreviation.toLowerCase()}/how-to-buy`
                  }
                  className="block text-[16px] font-[500] text-[#fff] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("navbar.howToBuy")}
                </Link>

                {location.pathname.includes("how-to-buy") ? (
                  <a
                    className="block text-[16px] font-[500] text-[#fff] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("navbar.whitepaper")}
                  </a>
                ) : (
                  <a
                    className="block text-[16px] font-[500] text-[#fff] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
                    onClick={(e) => handleScroll(e, "whitepaper", 60)}
                    href="#"
                  >
                    {t("navbar.whitepaper")}
                  </a>
                )}

                <Link
                  to={
                    selectedLang.abbreviation.toLowerCase() === "en"
                      ? "/referral"
                      : `/${selectedLang.abbreviation.toLowerCase()}/referral`
                  }
                  className="block text-[16px] font-[500] text-[#fff] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("navbar.referral")}
                </Link>

                <a
                  className="block text-[16px] font-[500] text-[#fff] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
                  href="#"
                  onClick={(e) => handleScroll(e, "reviews", 90)}
                >
                  {t("navbar.reviews")}
                </a>

                <Link
                  to={
                    selectedLang.abbreviation.toLowerCase() === "en"
                      ? "/win-500"
                      : `/${selectedLang.abbreviation.toLowerCase()}/win-500`
                  }
                  className="block text-[16px] font-[500] text-[#fff] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Win $500k
                </Link>
              </div>
            )}

            <div>
              <button
                onClick={() => {
                  if (accountData.isConnected) setDashboardOpen(true);
                  else showConnectWalletModal();
                }}
                style={{
                  background:
                    "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
                }}
                className="h-[32px] w-[108px] font-[700] text-[12px] rounded-[6px]"
              >
                {accountData.isConnected
                  ? t("navbar.dashboard")
                  : t("navbar.connect_wallet")}
              </button>
              {modalData.connectWalletModalOpen && (
                <WalletPopup onClose={() => hideConnectWalletModal()} />
              )}

              {dashboardOpen && (
                <DashboardPopup onClose={() => setDashboardOpen(false)} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        ref={dropdownRef}
        className="fixed bottom-[10%] bg-[#030f16] right-2 border-[1px] border-[#E6AF0320]  h-[40px] w-[100px] flex items-center justify-center rounded-[8px] z-[9999]"
      >
        <div className="relative flex items-center justify-start space-x-2 z-[999] ">
          <img
            className="w-[20px]"
            src={selectedLang.flag}
            alt={selectedLang.name}
          />
          <span className="text-[#fff] text-[16px] font-[600]">
            {selectedLang.abbreviation}
          </span>

          <img
            src={arwdwn}
            alt="Dropdown Arrow"
            onClick={toggleDropdown}
            className={`cursor-pointer transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        {isOpen && (
          <div className="absolute border-[1px] border-[#E6AF0320] z-[9999] px-[10px] !bottom-[38px] h-[93px] overflow-scroll left-0  pb-2 rounded-[8px]  bg-[#020B10] shadow-lg">
            {/* <h3 className="text-[14px] text-[#fff] font-[700] mb-1">
                      Languages
                    </h3> */}
            <div className="grid grid-cols-1">
              {flags.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center p-1 space-x-1 rounded cursor-pointer hover:bg-gray-900"
                  onClick={() => handleSelectLanguage(lang)}
                >
                  <img
                    src={lang.flag}
                    alt={lang.name}
                    className="w-[14px] h-[14px]"
                  />
                  <span className="text-[10.599px] font-[500] text-[#fff]">
                    {lang.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavbarMobile;
