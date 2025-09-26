import { useState, useEffect } from 'react';


const CookiePolicyPopup = () => {
   const [showPopup, setShowPopup] = useState(true); 

  useEffect(() => {
    const handleClick = () => {
      setShowPopup(false); 
      document.removeEventListener("click", handleClick); 
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!showPopup) return null;

  return (
    <div className="  flex items-center justify-center ">
      <div className=" fixed bg-[#060606] bottom-3 right-3 z-[999] text-white py-[22px] px-[20px] rounded-[14px] max-w-[260px] w-full shadow-lg">
        <p className="leading-[140%] tracking-[-0.32px] text-[#FFF] mb-4 text-[14px]">
          Cookies help us deliver the best experience on our website. By using
          our website, you agree to the use of cookies.{" "}
          <span >
           More info <a className="underline" href="https://blockchainfx.com/cookies-policy" target="_blank" rel="noopener noreferrer">here.</a>
          </span>
        </p>

        <button
          onClick={() => setShowPopup(false)}
          className="w-full text-black font-semibold text-[14px] py-2 rounded-[8px] mb-3 hover:opacity-90 transition"
          style={{ background: 'linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)' }}
        >
          Accept Cookies & Continue
        </button>

        <button
          onClick={() => setShowPopup(false)}
          className="w-full border border-[#E6B005] text-[14px] text-[#E6B005] font-semibold py-2 rounded-[8px] hover:bg-yellow-500/10 transition"
        >
          Reject Additional Cookies
        </button>

      </div>
    </div>
  );
};

export default CookiePolicyPopup;
