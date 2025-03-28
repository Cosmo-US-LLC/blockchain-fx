import React, { useState, useEffect, useRef } from "react";
import info from "../assets/wallet/i.png";
import arw from "../assets/navbar/arw.svg";
import downarw from "../assets/wallet/chevron-down.png";
import coinss from "../assets/wallet/coinss.png";
import bnsicn1 from "../assets/wallet/bons (2).png";
import bnsicn2 from "../assets/wallet/bons (1).png";

import wltcoin1 from "../assets/wallet/wltcoin (6).png";
import wltcoin2 from "../assets/wallet/wltcoin (5).svg";
import wltcoin3 from "../assets/wallet/wltcoin (4).svg";
import wltcoin4 from "../assets/wallet/wltcoin (3).svg";
import wltcoin5 from "../assets/wallet/wltcoin (2).svg";
import wltcoin6 from "../assets/wallet/wltcoin (1).svg";
import card1 from "../assets/wallet/card (1).png";
import card2 from "../assets/wallet/card (2).png";

import wltbtn1 from "../assets/wallet/wltbtn (3).png";
import wltbtn2 from "../assets/wallet/wltbtn (2).png";
import wltbtn3 from "../assets/wallet/wltbtn (1).png";
import bfxicn from "../assets/wallet/bfx.webp";
import oneicon1 from "../assets/OneAppSec/oneicon (1).svg";
import oneicon2 from "../assets/OneAppSec/oneicon (4).svg";
import oneicon3 from "../assets/OneAppSec/oneicon (2).svg";
import oneicon4 from "../assets/OneAppSec/oneicon (3).svg";
import iconapon from "../assets/wallet/ei_arrow-up.png";
import iconcls from "../assets/HowToBuySec/ei_arrow-up (1).svg";
import swpicon from "../assets/wallet/swp.svg";
import cer from "../assets/wallet/cer.svg";
import CardList from "../compunents/ui/CardList";

const coins = [
  { name: "ETH", subtitle: "ERC-20", icon: wltcoin1 },
  { name: "USDT", subtitle: "ERC-20", icon: wltcoin5 },
  { name: "BNB", subtitle: "ERC-20", icon: wltcoin4 },
  { name: "BTC", subtitle: "BITCOIN", icon: wltcoin2 },
  { name: "SOL", subtitle: "SOLANA", icon: wltcoin1 },
  { name: "More" },
];
const Dropcoins = [
  { name: "USDT", sub: "ERC-20", icon: wltcoin5 },
  { name: "USDT", sub: "BEP-20", icon: wltcoin5 },
  { name: "ETH", sub: "ERC-20", icon: wltcoin1 },
  { name: "BNB", sub: "ERC-20", icon: wltcoin4 },
];
const buttons = [
  { label: "Buy", img: wltbtn1 },
  { label: "Stake", img: wltbtn2 },
  { label: "History", img: wltbtn3 },
];

const items = [
  {
    icon: oneicon1,
    title: "1. Select Payment Method",
    description:
      "<li>Choose between ETH, BNB, or USDT (ERC-20 or BEP-20) </li><li>Enter the amount you want to buy</li>",
  },
  {
    icon: oneicon2,
    title: "2. Confirm Transaction",
    description:
      "<li>Click “Buy Now” and send the funds to the wallet listed</li><li>Important: Make sure to use a decentralised wallet like Metamask, Phantom, Coinbase or Trust Wallet </li><li>Your BFX will be linked to the same wallet address you used for payment and will show up on your dashboard instantly. </li><li>Connect your wallet using the “Connect Wallet” button in the top right corner to access the dashboard and check your BFX balance.</li>",
  },
  {
    icon: oneicon3,
    title: "3. Start Earning Today",
    description:
      "<p>Earn BFX and USDT rewards from day one! </p><li>Staking rewards are added to your dashboard daily</li><li>USDT (ERC-20) payouts are sent to your wallet every Monday </li>",
  },
  {
    icon: oneicon4,
    title: "4. Claim",
    description:
      "<p>Congratulations! Your tokens will be transferred to your wallet automatically after the presale ends. You don’t need to do anything. <br/><br/> Thank you for being part of the BFX journey!</p>",
  },
];

function WalletSec() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [activeIndexbuy, setActiveIndexbuy] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(Dropcoins[0]);
  const [popupVisible, setPopupVisible] = useState(false);
  const dropdownRef = useRef(null);
  const popupRef = useRef(null);
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActiveIndexbuy(index === activeIndexbuy ? -1 : index);
  };

  const handleSelectCoin = (coin, index) => {
    setSelectedCoin(coin);
    setSelectedIndex(index);
    setDropdownOpen(false);
  };

  const handleCoinClick = (index) => {
    setActiveIndex(index);
    setSelectedIndex(index);
    if (index === 2) {
      setPopupVisible(true);
    } else {
      setPopupVisible(false);
      if (index === 0) {
        setSelectedCoin(Dropcoins[2]);
      } else if (index === 1) {
        setSelectedCoin(Dropcoins[3]);
      }
    }
  };

  const handlePopupSelection = (option) => {
    if (option === "USDT ERC-20") {
      setSelectedCoin(Dropcoins[0]);
    } else if (option === "USDT BEP-20") {
      setSelectedCoin(Dropcoins[1]);
    }
    setPopupVisible(false);
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
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupVisible(false);
      }
    }

    if (popupVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [popupVisible]);

  return (
    <div className="pt-[42px] pb-[35px] bg-[#020B10]" id="how-to-buy">
      <div
        className="space-y-[30px] px-[67px]  py-[20px] max-w-[1200px] w-[100%] mx-auto border border-[#575757] rounded-[8px]"
        id="Wallet"
      >
        <div className="flex flex-col justify-center space-x-3 items-center">
          <div className="flex justify-center space-x-3 items-center">
          <h3 className="text-[40px] font-[700] text-[#fff] tracking-[-1px]">
            BFX Presale
          </h3>
          <div className="w-[58px] text-[14px] font-[600] text-[#fff] rounded-[7px] bg-[#E9C03D] h-[22px] flex justify-center items-start">
            <span className="text-[38px] leading-[9%] !-mt-[1px] pr-[2px] animate-blink">
              .
            </span>
            Live
          </div>
          </div>
          <p className="text-[16px] max-w-[670px] w-[100%] mx-auto font-[400] leading-[150%] text-center text-[#8497A2]  tracking-[-0.32px]">BFX is the world’s first cryptocurrency backed by a global multi-asset trading platform, where holders earn real USDT rewards anytime someone trades — even during the presale.</p>
        </div>
        <div className="flex justify-center space-x-[2rem] pb-[30px]">
          <div
            style={{
              background:
                "linear-gradient(212deg, rgb(207 207 207 / 21%) 0.66%, rgba(23, 23, 23, 0.68) 49.48%, rgb(30 30 30 / 32%) 103.45%)",
              backdropFilter: "blur(9.56px)"
            }}
            className="w-[413.763px]  space-y-[10px] relative rounded-[19.249px] px-[33px] pt-[22px] pb-[11px] max-h-[620px] border border-[#B0B0B0] "
            
          >
            <div className="w-[100%] absolute top-[-3%] left-0">
              <div className=" w-[100%] h-[30.612px] flex items-center rounded-[6px] mx-auto w-[102.877px] border border-[#fff] bg-[#020B10]">
                <h3 className="text-[9.875px] text-[#fff] text-center w-[100px] font-[700]  ">
                  Buy $BFX
                </h3>
              </div>
            </div>
            <div
      className="rounded-[19.249px] py-[5px] flex justify-center space-x-[px] border border-white"
      style={{ background: "transparent" }}
    >
      {buttons.map(({ label, img }, index) => (
        <button
          key={index}
          className={`flex items-center justify-center text-[8.422px] text-[#fff] space-x-2 py-1 px-6 rounded-[100px] transition-all duration-300 ${
            active === label ? "bg-[#5C5C5C]" : "bg-transparent"
          }`}
          onClick={() => setActive(label)}
        >
          <img src={img} alt={label} className="" />
          <span>{label}</span>
        </button>
      ))}
    </div>
            <div
              className="px-[11px] py-[9px] rounded-[8.422px] space-y-[5px] border border-[#D3D3D3]"
              style={{
                background: "#000",
                border:"0.602px solid #FBD914"
              }}
            >
              <h3 className="text-center text-[#fff] text-[21.64px] leading-[100%] font-[700]">
                $768,992.47
              </h3>
              <div className="pt-3">
                <div className="flex justify-between items-center pb-1">
                  <span className="text-[#fff] text-[7.219px] font-[400] leading-[100%]">
                    78.92% of softcap raised
                  </span>
                  <img src={info} className="w-[8.912px] h-[8.912px]" alt="" />
                </div>
                <div className="bg-[#E5E7EB] w-[100%] h-[10px] rounded-[20px]">
                  <div className="bg-[#E5AE00] w-[75%] h-[10px] rounded-[20px]"></div>
                </div>
                <div>
                  <p className="text-[#fff] text-end text-[7.219px] pt-1 font-[400] leading-[150%]">
                  $1,000,000
                  </p>
                </div>
              </div>
              <h5 className="text-[#fff] text-[9.74px] text-center font-[400] leading-[100%]">
                1259 Transactions
              </h5>
              <h5 className="text-[#A9A7A7]  text-[7.219px] text-center font-[400] leading-[100%]">
              Launch Price = $0.05
              </h5>
            </div>
            <div
              className="px-[24px] py-[10px] rounded-[10.713px]"
              style={{
                background: "rgba(255, 255, 255, 0.09)",
                  backdropFilter: "blur(9.56px)"
              }}
            >
              <h4 className="text-center text-[#fff] text-[9.875px] leading-[75%] font-[700]">
              You Own  =  <span className="text-[#FBD914] font-[700]">1,500,000 BFX</span>
              </h4>
            </div>
            <div
              className="px-[24px] py-[7px] flex space-x-2 justify-center items-center rounded-[10.713px]"
              style={{
                background: "rgba(255, 255, 255, 0.09)",
                  backdropFilter: "blur(9.56px)"
              }}
            >
              <div className="flex space-x-1">
                <img src={card1} alt="" />
                <img src={card2} alt="" />
              </div>
              <h4 className="text-center text-[#fff] text-[7px] leading-[75%] font-[700]">
              BUY WITH CARD
              </h4>
            </div>
            <div className="grid grid-cols-3 gap-[10px]">
              {coins.map((coin, index) => (
                <div
                  key={index}
                  onClick={() => handleCoinClick(index)}
                  style={{
                    background:
                      activeIndex === index
                        ? "rgba(176, 176, 176, 0.7)"
                        : "rgba(176, 176, 176, 0.17)",
                  }}
                  className="flex justify-between items-center px-[10px] w-[100%] py-[10px] space-x-1 cursor-pointer transition-all rounded-[13px]"
                >
                 <div className="flex items-center space-x-2">
                 { coin.icon &&
                  <img
                  className="w-[15.813px] h-[15.813px] object-cover"
                  src={coin.icon}
                  alt={coin.name}
                />
                 }
                 <div className="">
                 <h4 className="text-[#fff] text-[7px] font-[700]">
                    {coin.name}
                  </h4>
                  <p className="text-[#fff] text-center text-[5px] font-[700]">{coin.subtitle}</p>
                 </div>
                 </div>
                 <img src={downarw} alt="" />
                </div>
              ))}
            </div>
            {popupVisible && (
              <div className="fixed inset-0 flex items-center -top-10 justify-center bg-black bg-opacity-50 z-[999]">
                <div className="bg-white p-5 rounded-md shadow-lg min-w-[300px]"
                ref={popupRef}
                >
                  <div
                    className="h-[26px] w-[26px] mt-[-15px] tracking-[-1px] ml-[-15px] flex justify-center items-center rounded-full bg-gray-100 cursor-pointer"
                    onClick={() => setPopupVisible(false)}
                  >
                    <h2 className="text-[16px] text-[#000] leading-[0px]">x</h2>
                  </div>
                  <h2 className="text-lg text-center font-semibold mb-2">
                    Switch Network for USDT
                  </h2>
                  <div className="space-y-2">
                    <button
                      className={`flex items-center w-full p-2 text-[14px] rounded-md ${
                        selectedCoin.name === "USDT" &&
                        selectedCoin.sub === "ERC-20"
                          ? "bg-[#E5AE00] text-white"
                          : "bg-transparent"
                      }`}
                      onClick={() => handlePopupSelection("USDT ERC-20")}
                    >
                      <img src={wltcoin5} className="mr-2" alt="" />
                      USDT ERC-20
                      {selectedCoin.name === "USDT" &&
                        selectedCoin.sub === "ERC-20" && (
                          <span className="text-[#fff] pl-7 mt-[-10px]">
                            connected{" "}
                            <span className="text-[50px] leading-[10px] text-green-500">
                              .
                            </span>
                          </span>
                        )}
                    </button>

                    <button
                      className={`flex items-center w-full p-2 text-[14px] rounded-md ${
                        selectedCoin.name === "USDT" &&
                        selectedCoin.sub === "BEP-20"
                          ? "bg-[#E5AE00] text-white"
                          : "bg-transparent"
                      }`}
                      onClick={() => handlePopupSelection("USDT BEP-20")}
                    >
                      <img src={wltcoin5} className="mr-2" alt="" />
                      USDT BEP-20
                      {selectedCoin.name === "USDT" &&
                        selectedCoin.sub === "BEP-20" && (
                          <span className="text-[#fff] pl-7 mt-[-10px]">
                            connected{" "}
                            <span className="text-[50px] leading-[10px] text-green-500">
                              .
                            </span>
                          </span>
                        )}
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* <div className="flex justify-center items-center py-[0px] space-x-[15px]">
              <hr className="h-[1px] w-[33%]" />
              <span className="text-[#636363] text-end text-[9.618px] font-[700] leading-[75%]">
                1 $BFX = $0.0021
              </span>
              <hr className="h-[1px] w-[33%]" />
            </div> */}
            <div className="flex items-center justify-center space-x-2">
              <img src={coinss} alt="" />
              <p className="text-[#fff] text-center text-[7px] leading-[5px] font-[700]">+ Other Cryptos</p>
            </div>
            <div
              className="px-[24px] py-[7px] flex justify-center items-center rounded-[10.713px]"
              style={{
                background: "rgba(255, 255, 255, 0.09)",
                  backdropFilter: "blur(9.56px)"
              }}
            >
              <h4 className="text-center text-[#fff] text-[9px] leading-[75%] font-[500]">
              Presale Price  = <span className="text-[#FBD914]">$0.011</span>
              </h4>
            </div>
            <div className="rounded-[8.422px] px-[10px]"
            style={{
                background: "rgba(255, 255, 255, 0.09)",
                  backdropFilter: "blur(9.56px)"
              }}
            >
              <div className=" h-[40.612px] py-1 flex justify-between items-center">
                <div className="w-[80%] flex flex-col justify-center space-y-1">
              <label className="text-[#8D8D8D] text-[7.888px] font-[700] leading-[8.888px]">
              Amount You Pay in USDT
              </label>
                  <input
                    type="text"
                    className="h-[17.281px] text-[#fff]  w-[100%] text-[11.85px] font-[700] outline-none bg-[transparent] placeholder:text-[#fff]"
                    placeholder="1000"
                  />
                </div>
                <div
                  ref={dropdownRef}
                  className="relative border rounded-[50px] px-[4px]  w-[75px]"
                >
                  <div
                    className="justify-start flex h-[24px] items-center space-x-[3px] cursor-pointer"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <img
                      className="w-[15.813px] h-[15.813px] object-cover"
                      src={selectedCoin.icon}
                      alt=""
                    />
                   <div className="space-y-[-5px]">
                   <p className="text-[#fff] !overflow-hidden !text-clip text-[8.888px] font-[700]">
                      {selectedCoin.name}
                    </p>
                    <p className="text-[#8D8D8D] !overflow-hidden !text-clip text-[4.888px] font-[700]">
                      {selectedCoin.sub}
                    </p>
                   </div>
                    <img
                      src={downarw}
                      alt="Dropdown Arrow"
                      className={`transform h-[11.85px] transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {dropdownOpen && (
                    <div className="absolute top-[32px] z-[999] space-y-[5px] p-2 left-0 bg-white rounded-md shadow-lg z-10">
                      {Dropcoins.map((coin, index) => (
                        <div
                          key={index}
                          className="flex justify-start items-center space-x-2 px-2 py-1 w-[110px] cursor-pointer hover:bg-gray-100"
                          onClick={() => handleSelectCoin(coin, index)}
                        >
                          <img
                            className="w-[15.813px] h-[15.813px] object-cover"
                            src={coin.icon}
                            alt="coin"
                          />
                          <h4 className="text-[9px] font-[700] text-[#545454]">
                            {coin.name}
                          </h4>
                          <p className="text-[9px] text-[#545454]">
                            {coin.sub}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="rounded-[8.422px] px-[10px]"
            style={{
                background: "rgba(255, 255, 255, 0.09)",
                  backdropFilter: "blur(9.56px)"
              }}>
              <div className=" h-[40px] border-[#454545] p-1 flex justify-between items-center">
                {/* <div className="relative max-w-[75px] "></div> */}
                <div className="w-[80%] flex flex-col space-y-[2px]">
              <label className="text-[#8D8D8D] text-[7.219px] font-[700] leading-[8.888px]">
                You Receive $BFX +{" "}
                <span
                  onClick={(e) => handleScroll(e, "premium", 90)}
                  className="cursor-pointer text-[#299A00] underline"
                >
                  Novice Trading NFT
                </span>
              </label>
                  <input
                    type="text"
                    className="h-[17.281px] text-[#fff] w-[80%] text-[11.85px] font-[700] outline-none bg-[transparent] placeholder:text-[#fff]"
                    placeholder="26039.75"
                  />
                </div>
                <div className="relative w-[74px] border rounded-[60px] px-[4px] ">
                  <div className="justify-start flex h-[24px]  items-center space-x-[5px] cursor-pointer">
                    <img
                      className="w-[15.8px] h-[15.8px] object-cover"
                      src={bfxicn}
                      alt=""
                    />
                    <span className="text-[#fff] text-[7.888px] font-[700] leading-[50px]">
                      BFX
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => setShowPopup(true)}
                className="text-black rounded-[24.663px] bg-[#FBD914] px-[12px] hover:text-[#FBD914] hover:bg-transparent text-[13px] font-[700] border border-[#E5AE00]  hover:border-[#FBD914] w-[100%] h-[34px]"
              >
                Buy Now
              </button>
              {/* {showPopup && (
                <CardList
                  selectedCoin={selectedCoin}
                  onClose={() => setShowPopup(false)}
                />
              )} */}
            </div>
            <div
              className="flex justify-center space-x-[15px]"
            >
             <button className="bg-[#414141] text-[#fff] flex justify-center px-3 py-1 items-center rounded-[50px] text-[6.64px]"> <img src={bnsicn1} className="pr-1 mt-[-1px]" alt="" /> Bonus Code</button>
             <button className="bg-[#414141] text-[#fff] flex justify-center px-3 py-1 items-center rounded-[50px] text-[6.64px]"> <img src={bnsicn2} className="pr-1 mt-[-1px]" alt="" /> 5% Referral Link</button>
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(212deg, rgb(207 207 207 / 21%) 0.66%, rgba(23, 23, 23, 0.68) 49.48%, rgb(30 30 30 / 32%) 103.45%)",
              backdropFilter: "blur(9.56px)"
            }}
            className="w-[413.763px] space-y-[10px] relative rounded-[6.419px] px-[10px] pt-[22px] pb-[11px] max-h-[620px] border border-[#B0B0B0]"
          >
            <div className="w-[100%] absolute top-[-3%] left-0">
              <div className=" w-[100%] h-[30.612px] flex items-center rounded-[6px] mx-auto w-[102.877px] border border-[#fff] bg-[#020B10]">
                <h3 className="text-[9.875px] text-[#fff] text-center w-[100px] font-[700]  ">
                  How To Buy
                </h3>
              </div>
            </div>
            <div className="">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`py-[20px] px-1 border-b last:border-none  transition-all duration-300`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    <div className="flex w-[100%]  justify-between items-center space-x-4 space-y-[15px]">
                      <div className=" w-[100%] flex flex-col justify-center">
                        <div className="flex justify-between items-center">
                          <h3
                            className={`text-[14px] capitalize font-[600] ${
                              index === activeIndexbuy
                                ? "text-[#E5AE00]"
                                : "text-[#fff] "
                            }`}
                          >
                            {item.title}
                          </h3>
                          <div>
                            <img
                              src={
                                index === activeIndexbuy ? iconcls : iconapon
                              }
                              alt={
                                index === activeIndexbuy ? "Collapse" : "Expand"
                              }
                              className="w-[32px] h-[32px]"
                            />
                          </div>
                        </div>
                        <div
                          className={` transition-all duration-300 desc  ${
                            index === activeIndexbuy
                              ? "max-h-[200px] opacity-100 mt-[8px]  text-[11.688px] font-[400] text-[#D0D0D0] overflow-hidden block"
                              : "max-h-0 hidden opacity-0 text-[11.688px]"
                          }`}
                          style={{
                            transition:
                              "max-height 0.3s ease, opacity 0.3s ease",
                          }}
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-[14px]">
              <h4 className="text-[#181A20] text-[14px] font-[600] px-1">
                5. Launch
              </h4>
              <div
                className="max-w-[414px] px-[10px] pt-[14px] pb-[16px] border border-[#3B3B3B] w-[100%] mx-auto "
              >
                <div className=" space-y-[13px]">
                  <h4 className="text-start text-[#808080] text-[9.875px] leading-[75%] font-[600]">
                    $BFX Launches On Multiple Top-Tier Exchanges
                  </h4>
                  <div className="flex justify-center space-x-[8px]">
                    <div
                      className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                      }}
                    >
                      <img
                        src={swpicon}
                        className="w-[14.813px] h-[14.813px]"
                        alt=""
                      />
                      <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                    <div
                      className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#F0B90B] rounded-full"></div>
                      <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                    <div
                      className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#0052FE] rounded-full"></div>
                      <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                    <div
                      className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#00F0FF] rounded-full"></div>
                      <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                    <div
                      className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#7635F5] rounded-full"></div>
                      <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className="px-[28px] pt-[10px] pb-[10px] border border-[#B0B0B0] w-[100%] mx-auto "
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <div className="flex justify-center items-center space-x-[10px]">
            <h4 className="text-center text-[#808080] text-[13.1px] leading-[85%] font-[600]">
              Audited by the Leading Blockchain Security Company
            </h4>
            <div className="w-[113.97px]">
              <img src={cer} className="" alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default WalletSec;
