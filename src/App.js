import React, { useState, useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from './Home';
import Navbar from './compunents/Navbar';
import Footer from './compunents/Footer';
import MobileHome from './MobileHome';


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-[#fff]">
      <ToastContainer />
      <Navbar />
      {isMobile ? <MobileHome /> : <Home />}
      <Footer />
    </div>
  );
}

export default App;
