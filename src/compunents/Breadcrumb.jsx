// components/Breadcrumb.jsx
import { Link, useLocation } from "react-router-dom";

const breadcrumbMap = {
  "/how-to-buy": "How To Buy",
  "/referral": "Referral",
  "/win-500": "Win 500",
};

export default function Breadcrumb() {
  const location = useLocation();
  const pageName = breadcrumbMap[location.pathname];
  const blackBgPages = ["/how-to-buy"];

  const isBlackBg = blackBgPages.includes(location.pathname);
  if (!pageName) return null;

  return (
    <div className={isBlackBg ? "bg-[#000]" : "bg-[#020B10]"}>
      <nav className="flex items-center  2xl:pt-[4rem] xl:pt-[4rem] lg:pt-[4rem] md:pt-[4rem] ms:pt-[1.5rem] pt-[1.5rem]  max-w-[1200px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%] mx-auto">
        <Link
          to="/"
          className="flex items-center text-[12px] text-white font-[400] hover:text-white/700 transition-colors"
        >
          <div className="mr-1 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M4.35986 11H2.5C2.23478 11 1.98043 10.8946 1.79289 10.7071C1.60536 10.5196 1.5 10.2652 1.5 10V4.5L6 1L10.5 4.5V10C10.5 10.2652 10.3946 10.5196 10.2071 10.7071C10.0196 10.8946 9.76522 11 9.5 11H7.60986"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.5 11V6H7.5V11"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          Home
        </Link>

        <div className="mr-1 ml-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M5.5 9L8 6.5L5.5 4"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <span className="text-[12px] text-white font-[400]">{pageName}</span>
      </nav>
    </div>
  );
}
