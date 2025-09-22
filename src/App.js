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
import Win500 from "./Win500";
import CookiesPolicy from "./CookiesPolicy";

function Layout({ isMobile }) {
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
    "vi", "de", "nl", "ja", "tr", "ko", "it", "no", "zh", "ru", "fr", "pt", "es", "ar",
  ];

  if (lang && !supportedLangs.includes(lang)) {
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

      const supportedLangs = [
        "vi","de","nl","ja","tr","ko","it","no",
        "zh","ru","fr","pt","es","ar",
      ];

      if (parts.length > 0 && supportedLangs.includes(parts[0])) {
        currentLang = parts[0].toLowerCase();
      }

      if (i18n.language !== currentLang) {
        await i18n.changeLanguage(currentLang);
      }
      setLanguageLoaded(true);
    };

    setLanguageFromURL();
  }, [location.pathname, i18n]);

  useEffect(() => {
    if (!languageLoaded) return;

    const baseUrl = "https://blockchainfx.com";
    const parts = location.pathname.split("/").filter(Boolean);

    const supportedLangs = [
      "en","vi","de","nl","ja","tr","ko","it","no",
      "zh","ru","fr","pt","es","ar",
    ];

    const currentLang = supportedLangs.includes(parts[0]) ? parts[0] : "en";
    const pagePath = supportedLangs.includes(parts[0])
      ? `/${parts.slice(1).join("/")}`
      : location.pathname;

    const canonical =
      currentLang === "en"
        ? `${baseUrl}${pagePath}`
        : `${baseUrl}/${currentLang}${pagePath}`;

    // Remove old canonical/hreflang
    document
      .querySelectorAll("link[rel='canonical'], link[rel='alternate']")
      .forEach((el) => el.remove());

    // Add canonical
    const canonicalTag = document.createElement("link");
    canonicalTag.setAttribute("rel", "canonical");
    canonicalTag.setAttribute("href", canonical);
    document.head.appendChild(canonicalTag);

    // Add hreflang for each language
    supportedLangs.forEach((lang) => {
      const href =
        lang === "en"
          ? `${baseUrl}${pagePath}`
          : `${baseUrl}/${lang}${pagePath}`;

      const link = document.createElement("link");
      link.setAttribute("rel", "alternate");
      link.setAttribute("hreflang", lang);
      link.setAttribute("href", href);
      document.head.appendChild(link);
    });

    // Add x-default
    const xDefault = document.createElement("link");
    xDefault.setAttribute("rel", "alternate");
    xDefault.setAttribute("hreflang", "x-default");
    xDefault.setAttribute("href", `${baseUrl}${pagePath}`);
    document.head.appendChild(xDefault);
  }, [location.pathname, i18n.language, languageLoaded]);

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
        {/* Default layout (no lang prefix) */}
        <Route element={<Layout isMobile={isMobile} />}>
          <Route path="/" element={isMobile ? <MobileHome /> : <Home />} />
          <Route path="/terms-of-service" element={<TermsofService />} />
          <Route path="/referral" element={<RefferalProgram />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/token-sale" element={<TokenSale />} />
          <Route path="/cookie-management" element={<CookieManagement />} />
          <Route path="/win-500" element={<Win500 />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
        </Route>

        {/* How-to-buy (with redirect based on current language) */}
        <Route element={<HowToBuyPageLayout isMobile={isMobile} />}>
          {/* If English → stay, otherwise → redirect to /:lang/how-to-buy */}
          <Route
            path="/how-to-buy"
            element={
              i18n.language !== "en" ? (
                <Navigate to={`/${i18n.language}/how-to-buy`} replace />
              ) : (
                isMobile ? <HowToBuyMobile /> : <HowToBuyDesktop />
              )
            }
          />
          {/* Language version */}
          <Route
            path=":lang/how-to-buy"
            element={
              <LangGuard>
                {isMobile ? <HowToBuyMobile /> : <HowToBuyDesktop />}
              </LangGuard>
            }
          />
        </Route>

        {/* Language-prefixed pages */}
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
          <Route path="cookies-policy" element={<CookiesPolicy />} />
          <Route path="win-500" element={<Win500 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
