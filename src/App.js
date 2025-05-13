import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useParams,
  Outlet,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

import { useTranslation } from "react-i18next";
import Home from "./Home";
import Navbar from "./compunents/Navbar";
import Footer from "./compunents/Footer";
import MobileHome from "./MobileHome";
import TermsofService from "./TermsofService";
import TokenSale from "./TokenSale";
import PrivacyPolicy from "./PrivacyPolicy";
import CookieManagement from "./CookieManagement";
import NavbarMobile from "./compunents/NavbarMobile";
import RefferalProgram from "./RefferalProgram";
import HowToBuyDesktop from "./HowToBuy/Desktop";
import HowToBuyMobile from "./HowToBuy/Mobile";
import HowToBuyFooter from "./compunents/HowToBuyFooter";

function Layout({ isMobile }) {
  const { i18n } = useTranslation();
  return (
    <>
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function HowToBuyPageLayout({ isMobile }) {
  const { i18n } = useTranslation();
  return (
    <>
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <main>
        <Outlet />
      </main>
      <HowToBuyFooter />
    </>
  );
}

function LangGuard({ children }) {
  const { lang } = useParams();
  const supportedLangs = [
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
  if (!supportedLangs.includes(lang)) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [languageLoaded, setLanguageLoaded] = useState(false);
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const setLanguageFromURL = async () => {
      const parts = location.pathname.split("/").filter(Boolean);
      let currentLang = "en";

      if (parts.length > 0) {
        const urlLang = parts[0].toLowerCase();
        const supportedLangs = [
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
        if (supportedLangs.includes(urlLang)) {
          currentLang = urlLang;
        }
      }

      await i18n.changeLanguage(currentLang);
      setLanguageLoaded(true);
    };

    setLanguageFromURL();
  }, [location.pathname, i18n]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!languageLoaded) {
    return null;
  }

  return (
    <div className="bg-[#fff]">
      <ToastContainer />
      <Toaster position="bottom-center" />
      <Routes>
        {/* Default English routes */}
        <Route element={<Layout isMobile={isMobile} />}>
          <Route path="/" element={isMobile ? <MobileHome /> : <Home />} />
          <Route path="/terms-of-service" element={<TermsofService />} />
          <Route path="/referral" element={<RefferalProgram />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/token-sale" element={<TokenSale />} />
          <Route path="/cookie-management" element={<CookieManagement />} />
        </Route>

        <Route element={<HowToBuyPageLayout isMobile={isMobile} />}>
          <Route
            path="how-to-buy"
            element={isMobile ? <HowToBuyMobile /> : <HowToBuyDesktop />}
          />
        </Route>

        {/* Other languages routes */}
        <Route
          path="/:lang"
          element={
            <LangGuard>
              <Layout isMobile={isMobile} />
            </LangGuard>
          }
        >
          <Route index element={isMobile ? <MobileHome /> : <Home />} />
          <Route path="terms-of-service" element={<TermsofService />} />
          <Route path="referral" element={<RefferalProgram />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="token-sale" element={<TokenSale />} />
          <Route path="cookie-management" element={<CookieManagement />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
