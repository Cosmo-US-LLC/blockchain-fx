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
import Breadcrumb from "./compunents/Breadcrumb";

function Layout({ isMobile }) {
  return (
    <>
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <main>
         <Breadcrumb />
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
        <Breadcrumb />
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
    // "fi",
  ];

  if (lang && !supportedLangs.includes(lang)) {
    return <Navigate to="/" replace />;
  }

  return children;
}


function MetaManager() {
  const location = useLocation();

  useEffect(() => {
    let title =
      "BlockchainFX | Decentralized Crypto & Multi-Asset Exchange";
    let description =
      "Join BlockchainFX, the soon-to-be-incepted crypto exchange (CEX) offering 500+ assets — crypto, stocks, gold, forex & more in one platform.";

    if (location.pathname === "/how-to-buy") {
      title =
        "How to Buy Crypto Presale | BFX Token Guide | BlockchainFX";
      description =
        "Learn how to buy BFX token in our step-by-step guide. Get in at presale stage before the $0.05 launch. Earn daily USDT rewards by joining early.";
    }

    document.title = title;

    const updateMeta = (attrName, attrValue, content) => {
      let el = document.querySelector(`meta[${attrName}='${attrValue}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Update or create meta tags dynamically
    updateMeta("name", "description", description);
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", `https://blockchainfx.com${location.pathname}`);
  }, [location.pathname]);

  return null;
}



function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [languageLoaded, setLanguageLoaded] = useState(false);
  const { i18n } = useTranslation();
  const location = useLocation();


   useEffect(() => {
    const breadcrumbMap = {
      "/how-to-buy": "How To Buy",
      "/token-sale": "Token Sale",
      "/referral": "Referral",
      "/win-500": "Win 500",
      "/privacy-policy": "Privacy Policy",
      "/cookie-management": "Cookie Policy",
      "/terms-of-service": "Terms of Service",
    };

    const pageName = breadcrumbMap[location.pathname];
    if (!pageName) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://blockchainfx.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: pageName,
          item: `https://blockchainfx.com${location.pathname}`,
        },
      ],
    };
    const old = document.getElementById("breadcrumb-schema");
    if (old) old.remove();

    const script = document.createElement("script");
    script.id = "breadcrumb-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }, [location]);


  useEffect(() => {
    const setLanguageFromURL = async () => {
      const parts = location.pathname.split("/").filter(Boolean);
      let currentLang = "en";

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
        // "fi",
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
      // "fi",
    ];

    const currentLang = supportedLangs.includes(parts[0]) ? parts[0] : "en";

    let pagePath = supportedLangs.includes(parts[0])
      ? `/${parts.slice(1).join("/")}`
      : location.pathname;

    // ✅ Normalize root path so "/" becomes ""
    if (pagePath === "/") pagePath = "";

    const canonical =
      currentLang === "en"
        ? `${baseUrl}${pagePath}`
        : `${baseUrl}/${currentLang}${pagePath}`;

    // Remove old canonical/hreflang
    document
      .querySelectorAll("link[rel='canonical'], link[rel='alternate']")
      .forEach((el) => el.remove());

    const canonicalTag = document.createElement("link");
    canonicalTag.setAttribute("rel", "canonical");
    canonicalTag.setAttribute("href", canonical);
    document.head.appendChild(canonicalTag);

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
      <MetaManager />
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
              ) : isMobile ? (
                <HowToBuyMobile />
              ) : (
                <HowToBuyDesktop />
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
