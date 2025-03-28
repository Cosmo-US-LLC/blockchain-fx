import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Toaster } from "react-hot-toast";

import Home from "./Home";
import Navbar from "./compunents/Navbar";
import Footer from "./compunents/Footer";
import MobileHome from "./MobileHome";
import TermsofService from "./TermsofService";
import TokenSale from "./TokenSale";
import PrivacyPolicy from "./PrivacyPolicy";
import CookieManagement from "./CookieManagement";
import NavbarMobile from "./compunents/NavbarMobile";
import LivePresale from "./compunents/LivePresale";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#fff]">
      <ToastContainer />
      <Toaster position="bottom-center" />
      {isMobile ? (
        <div className="flex flex-col">
          <LivePresale />
          <NavbarMobile />
        </div>
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={isMobile ? <MobileHome /> : <Home />} />
        <Route path="/terms-of-service" element={<TermsofService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/token-sale" element={<TokenSale />} />
        <Route path="/cookie-management" element={<CookieManagement />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
