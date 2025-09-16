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

// function LangGuard({ children }) {
//   const { lang } = useParams();
//    const location = useLocation();
//   const supportedLangs = [
//     "vi",
//     "de",
//     "nl",
//     "ja",
//     "tr",
//     "ko",
//     "it",
//     "no",
//     "zh",
//     "ru",
//     "fr",
//     "pt",
//     "es",
//     "ar",
//   ];
//   if (!supportedLangs.includes(lang)) {
//     if (location.pathname.startsWith("/how-to-buy")) {
//       return <Navigate to="/how-to-buy" replace />;
//     }
//     return <Navigate to="/" replace />;
//   }
//   return children;
// }

function LangGuard({ children }) {
  const { lang } = useParams();
  const location = useLocation();
  const supportedLangs = [
    "vi", "de", "nl", "ja", "tr", "ko", "it", "no", "zh", "ru", "fr", "pt", "es", "ar",
  ];

  if (location.pathname.startsWith("/how-to-buy")) {
    const parts = location.pathname.split("/").filter(Boolean);
    const lastSegment = parts[1]; 
    if (lastSegment && supportedLangs.includes(lastSegment)) {
      return children; 
    }
    return <Navigate to="/how-to-buy" replace />;
  }

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

      if (parts.length > 0) {
        if (parts[0] === "how-to-buy" && parts[1]) {
          currentLang = parts[1].toLowerCase();
        } else {
          const urlLang = parts[0].toLowerCase();
          const supportedLangs = [
            "vi", "de", "nl", "ja", "tr", "ko", "it", "no",
            "zh", "ru", "fr", "pt", "es", "ar",
          ];
          if (supportedLangs.includes(urlLang)) {
            currentLang = urlLang;
          }
        }
      }

      if (i18n.language !== currentLang) {
        await i18n.changeLanguage(currentLang);
      }
      setLanguageLoaded(true);
    };

    setLanguageFromURL();
  }, [location.pathname, i18n]);

  // useEffect(() => {
  //   const setLanguageFromURL = async () => {
  //     const parts = location.pathname.split("/").filter(Boolean);
  //     let currentLang = "en";

  //     if (parts.length > 0) {
  //       const urlLang = parts[0].toLowerCase();
  //       const supportedLangs = [
  //         "vi",
  //         "de",
  //         "nl",
  //         "ja",
  //         "tr",
  //         "ko",
  //         "it",
  //         "no",
  //         "zh",
  //         "ru",
  //         "fr",
  //         "pt",
  //         "es",
  //         "ar",
  //       ];
  //       if (supportedLangs.includes(urlLang)) {
  //         currentLang = urlLang;
  //       }
  //     }

  //     await i18n.changeLanguage(currentLang);
  //     setLanguageLoaded(true);
  //   };

  //   setLanguageFromURL();
  // }, [location.pathname, i18n]);

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
        <Route element={<Layout isMobile={isMobile} />}>
          <Route path="/" element={isMobile ? <MobileHome /> : <Home />} />
          <Route path="/how-to-buy" element={isMobile ? <HowToBuyMobile /> : <HowToBuyDesktop />} />
          <Route path="/terms-of-service" element={<TermsofService />} />
          <Route path="/referral" element={<RefferalProgram />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/token-sale" element={<TokenSale />} />
          <Route path="/cookie-management" element={<CookieManagement />} />
          <Route path="/win-500" element={<Win500 />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
        </Route>

    
        <Route element={<HowToBuyPageLayout isMobile={isMobile} />}>
          <Route
            path="how-to-buy"
            element={isMobile ? <HowToBuyMobile /> : <HowToBuyDesktop />}
          />

          <Route
            path="how-to-buy/:lang"
            element={
              <LangGuard>
                {isMobile ? <HowToBuyMobile /> : <HowToBuyDesktop />}
              </LangGuard>
            }
          />
        </Route>

        <Route
          path="/:lang"
          element={
            <LangGuard>
              <Layout isMobile={isMobile} />
            </LangGuard>
          }
        >
          <Route index element={isMobile ? <MobileHome /> : <Home />} />
          <Route path="how-to-buy" element={isMobile ? <HowToBuyMobile /> : <HowToBuyDesktop />} />
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
