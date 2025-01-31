import React, { useState } from "react";
import info from "../assets/wallet/i.svg";
import arw from "../assets/navbar/arw.svg";
import wltcoin1 from "../assets/wallet/wltcoin (6).svg";
import wltcoin2 from "../assets/wallet/wltcoin (5).svg";
import wltcoin3 from "../assets/wallet/wltcoin (4).svg";
import wltcoin4 from "../assets/wallet/wltcoin (3).svg";
import wltcoin5 from "../assets/wallet/wltcoin (2).svg";
import wltcoin6 from "../assets/wallet/wltcoin (1).svg";
import bfxicn from "../assets/wallet/bfx.svg";
import swpicon from "../assets/wallet/swp.svg";
import cer from "../assets/wallet/cer.svg";

const coins = [
  { name: "ETH", icon: wltcoin1 },
  { name: "BTC", icon: wltcoin2 },
  { name: "SOL", icon: wltcoin3 },
  { name: "BNB", icon: wltcoin4 },
  { name: "USDT", icon: wltcoin5 },
  { name: "USDC", icon: wltcoin6 },
];
const Dropcoins = [
  { name: "ETH", icon: wltcoin1 },
  { name: "BTC", icon: wltcoin2 },
  { name: "SOL", icon: wltcoin3 },
  { name: "BNB", icon: wltcoin4 },
  { name: "USDT", icon: wltcoin5 },
  { name: "USDC", icon: wltcoin6 },
];

function WalletSec() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState({
    name: "ETH",
    icon: wltcoin1,
  });
  const handleSelectCoin = (coin) => {
    setSelectedCoin(coin);
    setDropdownOpen(false);
  };

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
    }
  };
  return (
    <div className="pt-[42px] pb-[29px] space-y-[14px] bg-[#FFF]">
      <div
        style={{
          background: "rgba(247, 247, 247, 0.70)",
        }}
        className="max-w-[413.763px] space-y-[10px] relative rounded-[6.419px] px-[33px] pt-[22px] pb-[11px] max-h-[534.944px] border border-[#B0B0B0] w-[100%] mx-auto "
      >
       <div className="w-[100%] absolute top-[-2%] left-0">
       <div className=" w-[100%] h-[30.612px] flex items-center rounded-[6px] mx-auto w-[102.877px] border border-[#454545] bg-[#f9f9f9]"
        >
          <h3 className="text-[9.875px] text-[#444] text-center w-[100px] font-[700]  "
          >$BFX Pre-Sale</h3>
        </div>
       </div>
        <div
          className="px-[11px] pt-[7px] space-y-[5px] border border-[#D3D3D3]"
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <h3 className="text-center text-[22.219px] leading-[100%] font-[700]">$210,992 SOLD</h3>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[#444] text-[7.9px] font-[400] leading-[100%]">
                78.92% of softcap raised
              </span>
              <img src={info} className="w-[6.912px] h-[6.912px]" alt="" />
            </div>
            <div className="bg-[#E5E7EB] w-[100%] h-[4.938px] rounded-[20px]">
              <div className="bg-[#E5AE00] w-[75%] h-[4.938px] rounded-[20px]"></div>
            </div>
            <div>
              <p className="text-[#444] text-end text-[7.9px] font-[400] leading-[150%]">
                $300,000
              </p>
            </div>
          </div>
        </div >
        <div
          className="px-[24px] py-[8px] space-y-[5px] border border-[#D3D3D3]"
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <h4 className="text-center text-[#444] text-[8.888px] font-[700]">
            Price Increase In
          </h4>
          <div className="flex justify-center space-x-[22px]">
            <div className=" space-y-[2px]">
              <p className="leading-[100%] text-center text-[#444] text-[29.024px] font-[700]">
                00
              </p>
              <p className="text-center text-[#444] text-[7.9px] font-[700]">
                DAYS
              </p>
            </div>
            <div className=" space-y-[2px]">
              <p className="leading-[100%] text-center text-[#444] text-[29.024px] font-[700]">
                20
              </p>
              <p className="text-center text-[#444] text-[7.9px] font-[700]">
                HOURS
              </p>
            </div>
            <div className=" space-y-[2px]">
              <p className="leading-[100%] text-center text-[#444] text-[29.024px] font-[700]">
                37
              </p>
              <p className="text-center text-[#444] text-[7.9px] font-[700]">
                MINS
              </p>
            </div>
            <div className=" space-y-[2px]">
              <p className="leading-[100%] text-center text-[#444] text-[29.024px] font-[700]">
                38
              </p>
              <p className="text-center text-[#444] text-[7.9px] font-[700]">
                SECS
              </p>
            </div>
          </div>
        </div>
        <div
          className="px-[24px] py-[6px] border border-[#D3D3D3]"
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <h4 className="text-center text-[#636363] text-[9.875px] leading-[75%] font-[700]">
            $BFX Listing Price = $0.01
          </h4>
        </div>
        <div
          className="px-[24px] flex justify-center py-[12px] space-x-[12px]"
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          {coins.map((coin, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                background:
                  activeIndex === index
                    ? "rgba(176, 176, 176, 0.7)"
                    : "rgba(176, 176, 176, 0.17)",
              }}
              className={`flex justify-center items-center px-[12px] py-[5px] space-x-1 cursor-pointer transition-all`}
            >
              <img
                className="w-[14.813px] h-[14.813px]"
                src={coin.icon}
                alt={coin.name}
              />
              <span className="text-[#545454] text-[6.913px] font-[700]">
                {coin.name}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center py-[5px] space-x-[15px]">
          <hr className="h-[1px] w-[35%]" />
          <span className="text-[#636363] text-end text-[9.875px] font-[700] leading-[75%]">
            1 BFX = $0.002
          </span>
          <hr className="h-[1px] w-[35%]" />
        </div>
        <div className="">
          <label className="text-[#2F2F2F] text-[8.888px] font-[700] leading-[8.888px]">
            You Pay in USDT:
          </label>
          <div className="border h-[30.612px] border-[#454545] p-1 flex justify-between items-center">
            <div className="relative max-w-[75px] ">
              <div
                className="bg-[#EFEFEF] justify-center flex items-center space-x-[1pxs] p-1 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img
                  className="w-[14.813px] h-[14.813px]"
                  src={selectedCoin.icon}
                  alt={selectedCoin.name}
                />
                <img
                  src={arw}
                  alt="Dropdown Arrow"
                  className={`transform  h-[11.85px] transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {dropdownOpen && (
                <div className="absolute top-[50px] space-y-[5px] p-2  left-0 bg-white rounded-md shadow-lg  z-10">
                  {Dropcoins.map((coin, index) => (
                    <div
                      key={index}
                      className="flex justify-start items-center space-x-2 p-2 w-[70px] cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSelectCoin(coin)}
                    >
                      <img
                        className="w-[14.813px] h-[14.813px]"
                        src={coin.icon}
                        alt="coin"
                      />
                      <h4 className="text-[9px] font-[700] text-[#545454]">{coin.name}</h4>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-[80%] flex items-center justify-end space-x-2">
              <input type="text" className="h-[17.281px] w-[80%] text-[11.85px] font-[700] outline-none text-end bg-[transparent] placeholder:text-[#000]" placeholder="1000" />
              <span className="text-[#545454] text-[8.888px] font-[700] leading-[50px]">
                USDT
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <label className="text-[#2F2F2F] text-[8.888px] font-[700] leading-[8.888px]">
          You Receive $BFX + <span  onClick={(e) => handleScroll(e, "premium", 90)} className="cursor-pointer text-[#299A00] underline">Novice Trading NFT</span>
          </label>
          <div className="border h-[30px] border-[#454545] p-1 flex justify-between items-center">
            <div className="relative max-w-[75px] ">
              <div
                className="bg-[#EFEFEF] justify-center flex items-center space-x-1 p-1 px-1 cursor-pointer"
              >
                <img
                  className="w-[15.8px] h-[15.8px]"
                  src={bfxicn}
                  alt=""
                />
                <span className="text-[10.369px] text-[#2F2F2F]">=</span>
              </div>
            </div>
            <div className="w-[80%] flex items-center h-[17.281px] justify-end space-x-2">
              <input type="text" className="h-[17.281px] w-[80%] text-[11.85px] font-[700] outline-none text-end bg-[transparent] placeholder:text-[#000]" placeholder="26039.75" />
              <span className="text-[#545454] text-[8.888px] font-[700] leading-[50px]">
              BFX
              </span>
            </div>
          </div>
        </div>
        <div>
          <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[11.85px] font-[800] border border-[#E5AE00]  hover:border-[#000] w-[100%] h-[32.094px]">
          Buy Now
          </button>
        </div>
        <div
          className="px-[24px] py-[5px] space-y-[5px] border border-[#939393]"
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <h4 className="text-center text-[#636363] text-[8.888px] leading-[70%] font-[700]">
          You get 10% more tokens!
          </h4>
          <h4 className="text-center text-[#636363] text-[8.888px] leading-[70%] font-[700]">
          Buy $1,500 more to unlock 20% bonus tokens
          </h4>
        </div>
        <div className="flex justify-center items-center space-x-[24px]">
          <p className="text-[8.888px] font-[700] underline cursor-pointer">Bonus Code</p>
          <p className="text-[8.888px] font-[700] underline cursor-pointer">Full Bonus Chart</p>
          <p className="text-[8.888px] font-[700] underline cursor-pointer"> 5% Referral Link</p>
        </div>
      </div>
      <div  className="max-w-[414px] px-[28px] pt-[10px] pb-[16px] border border-[#B0B0B0] w-[100%] mx-auto "
       style={{
        background: "rgba(237, 237, 237, 0.40)",
      }}>
      <div
          className=" space-y-[13px]"
         
        >
          <h4 className="text-center text-[#808080] text-[9.875px] leading-[75%] font-[600]">
          $BFX Launches On Multiple Top-Tier Exchanges
          </h4>
          <div className="flex justify-center space-x-[10px]">
            <div className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
            style={{
              background:"rgba(176, 176, 176, 0.17)"
            }}
            >
              <img src={swpicon} className="w-[14.813px] h-[14.813px]" alt="" />
              <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">UNISWAP</h4>
            </div>
            <div className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]" 
            style={{
              background:"rgba(176, 176, 176, 0.17)",
              filter:"blur(6.5px",
              opacity: "0.73"
            }}
            >
             <div className="w-[14.813px] h-[14.813px] bg-[#F0B90B] rounded-full"></div>
              <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">UNISWAP</h4>
            </div>
            <div className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
          style={{
            background:"rgba(176, 176, 176, 0.17)",
            filter:"blur(6.5px",
            opacity: "0.73"
          }}
          >
           <div className="w-[14.813px] h-[14.813px] bg-[#0052FE] rounded-full"></div>
              <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">UNISWAP</h4>
            </div>
            <div className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
            style={{
              background:"rgba(176, 176, 176, 0.17)",
              filter:"blur(6.5px",
              opacity: "0.73"
            }}
            >
             <div className="w-[14.813px] h-[14.813px] bg-[#00F0FF] rounded-full"></div>
              <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">UNISWAP</h4>
            </div>
            <div className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
            style={{
              background:"rgba(176, 176, 176, 0.17)",
              filter:"blur(6.5px",
              opacity: "0.73"
            }}
            >
             <div className="w-[14.813px] h-[14.813px] bg-[#7635F5] rounded-full"></div>
              <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">UNISWAP</h4>
            </div>
            
          </div>
        </div>
      </div>
      <div  className="max-w-[414px] px-[28px] pt-[8px] pb-[12px] border border-[#B0B0B0] w-[100%] mx-auto "
       style={{
        background: "rgba(237, 237, 237, 0.40)",
      }}>
      <div
          className="flex justify-center items-center space-x-[8px]"
         
        >
          <h4 className="text-center text-[#808080] text-[9.875px] leading-[85%] font-[600]">
          Audited By The Leading Blockchain Security Company 
          </h4>
          <div className="w-[85px]">
            <img src={cer} className=""  alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletSec;
