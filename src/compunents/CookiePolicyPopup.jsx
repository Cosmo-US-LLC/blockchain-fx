import { useState } from 'react';


const CookiePolicyPopup = () => {
 const [showPopup, setShowPopup] = useState(true);

  if (!showPopup) return null;

  return (
    <div className="  flex items-center justify-center ">
      <div className=" fixed bg-[#060606] bottom-10 right-10 z-[999] text-white py-[47px] px-[38px] rounded-[24px] max-w-[360px] w-full shadow-lg">
        <p className="leading-[140%] tracking-[-0.32px] text-[#FFF] mb-4 font-[16px]">
          Cookies help us deliver the best experience on our website. By using
          our website, you agree to the use of cookies.{" "}
          <a href="#" className="underline">
            Find out how we use cookies.
          </a>
        </p>

        <button
          onClick={() => setShowPopup(false)}
          className="w-full text-black font-semibold py-3 rounded-[8px] mb-3 hover:opacity-90 transition"
          style={{ background: 'linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)' }}
        >
          Accept Cookies & Continue
        </button>

        <button
          onClick={() => setShowPopup(false)}
          className="w-full border border-[#E6B005] text-[#E6B005] font-semibold py-3 rounded-[8px] mb-3 hover:bg-yellow-500/10 transition"
        >
          Reject Additional Cookies
        </button>

        {/* Manage Cookies */}
        {/* <button
          className="block w-full text-sm underline text-center"
        >
          Manage Cookies
        </button> */}
      </div>
    </div>
  );
};

export default CookiePolicyPopup;
