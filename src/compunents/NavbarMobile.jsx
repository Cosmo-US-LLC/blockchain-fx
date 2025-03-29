import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/presale-v3/nav_icon.svg";
import flag from "../assets/navbar/flg.svg";
import menu from "../assets/presale-v3/menu.svg";
import arwdwn from "../assets/navbar/arw.svg";
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
  { flag: flag7, abbreviation: "KO", name: "Korean" },
  { flag: flag8, abbreviation: "IT", name: "Italian" },
  { flag: flag9, abbreviation: "NO", name: "Norwegian" },
  { flag: flag10, abbreviation: "ZH", name: "Chinese" },
  { flag: flag11, abbreviation: "RU", name: "Russian" },
  { flag: flag12, abbreviation: "FR", name: "French" },
  { flag: flag13, abbreviation: "PT", name: "Portuguese" },
  { flag: flag14, abbreviation: "ES", name: "Spanish" },
];

function NavbarMobile() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    flag: flags[0].flag,
    abbreviation: flags[0].abbreviation,
    name: flags[0].name,
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectLanguage = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
    setIsMobileMenuOpen(false);
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
    <div className="relative h-[100px]">
      <div className="fixed w-[100%] bg-[#020B10] z-[999]">
        <LivePresale />
        <div className="2xl:h-[63px] xl:h-[63px] lg:h-[63px] md:h-[63px] sm:h-[64px] h-[64px] max-w-[1200px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%] mx-auto flex items-center justify-between">
          <div className="2xl:block xl:block lg:block md:block sm:flex flex items-center 2xl:space-x-0 xl:space-x-0 lg:space-x-0 md:space-x-0 sm:space-x-3 space-x-3">
            <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
              <img
                src={menu}
                onClick={toggleMobileMenu}
                className="cursor-pointer"
                alt=""
              />
            </div>
            <div className="">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="flex flex-row gap-2 items-center">
                  <img className="cursor-pointer" src={logo} alt="" />
                  <p className="text-600 text-[17px] text-[white]">
                    BlockchainFX
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* mobile menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-[100%] min-h-[100vh] left-0 w-full bg-white shadow-md z-50 p-6">
              <a
                className="block text-[16px] font-[500] text-[#000] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
                href=""
                onClick={(e) => handleScroll(e, "what-is-bfx-coin", 60)}
              >
                What is BlockchainFX?
              </a>{" "}
              <br />
              <br />
              <a
                className="block text-[16px] font-[500] text-[#000] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
                href=""
                onClick={(e) => handleScroll(e, "Wallet", 60)}
              >
                How to Buy
              </a>{" "}
              <br />
              <br />
              <a
                className="block text-[16px] font-[500] text-[#000] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
                href=""
                onClick={(e) => handleScroll(e, "whitepaper", 90)}
              >
                Whitepaper
              </a>{" "}
              <br />
              <br />
              <a
                className="block text-[16px] font-[500] text-[#000] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
                href=""
                onClick={(e) => handleScroll(e, "roadmap", 90)}
              >
                Roadmap
              </a>{" "}
              <br />
              <br />
              <a
                className="block text-[16px] font-[500] text-[#000] border border-transparent hover:border-b-[#E5AE00] transition duration-300 mb-4"
                href="#"
                onClick={(e) => handleScroll(e, "reviews", 90)}
              >
                Reviews
              </a>{" "}
              <br />
              <br />
              {/* <a
            className="block text-[16px] font-[500] text-[#000] mb-4"
            href=""
            onClick={(e) => handleScroll(e, "win", 90)}
          >
            Win $100k
          </a> */}
              <div
                ref={dropdownRef}
                className="flex relative  justify-start items-center space-x-2"
              >
                <img
                  className="w-[20px]"
                  src={selectedLang.flag}
                  alt={selectedLang.name}
                />
                <span className="text-[#000] text-[16px] font-[600]">
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

                {isOpen && (
                  <div className="absolute !top-[30px] w-[300px] pb-2 rounded-[8px] px-[10px] bg-white shadow-lg">
                    <h3 className="text-[14px] text-[#444] font-[700] mb-1">
                      Languages
                    </h3>
                    <div className="grid grid-cols-2">
                      {flags.map((lang, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-1 cursor-pointer hover:bg-gray-100 p-1 rounded"
                          onClick={() => handleSelectLanguage(lang)}
                        >
                          <img
                            src={lang.flag}
                            alt={lang.name}
                            className="w-[14px] h-[14px]"
                          />
                          <span className="text-[12.599px] font-[500] text-[#444]">
                            {lang.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* menu end */}
          <div>
            <button
              onClick={() => {
                if (accountData.isConnected) setDashboardOpen(true);
                else showConnectWalletModal();
              }}
              style={{
                background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
              }}
              className="h-[32px] w-[108px] font-[700] text-[12px] rounded-[6px]"
            >
              {accountData.isConnected ? "Dashboard" : "Connect Wallet"}
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
  );
}

export default NavbarMobile;
