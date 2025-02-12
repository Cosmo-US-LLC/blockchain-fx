import React, { useState } from "react";
import info from "../assets/wallet/i.svg";
import arw from "../assets/navbar/arw.svg";
import wltcoin1 from "../assets/wallet/wltcoin (6).png";
import wltcoin2 from "../assets/wallet/wltcoin (5).svg";
import wltcoin3 from "../assets/wallet/wltcoin (4).svg";
import wltcoin4 from "../assets/wallet/wltcoin (3).svg";
import wltcoin5 from "../assets/wallet/wltcoin (2).svg";
import wltcoin6 from "../assets/wallet/wltcoin (1).svg";
import bfxicn from "../assets/wallet/bfx.webp";
import oneicon1 from "../assets/OneAppSec/oneicon (1).svg";
import oneicon2 from "../assets/OneAppSec/oneicon (4).svg";
import oneicon3 from "../assets/OneAppSec/oneicon (2).svg";
import oneicon4 from "../assets/OneAppSec/oneicon (3).svg";
import iconapon from "../assets/HowToBuySec/ei_arrow-up.svg";
import iconcls from "../assets/HowToBuySec/ei_arrow-up (1).svg";
import swpicon from "../assets/wallet/swp.svg";
import cer from "../assets/wallet/cer.svg";
import CardList from "../compunents/ui/CardList";

const coins = [
  { name: "ETH", icon: wltcoin1 },
  { name: "BNB", icon: wltcoin4 },
  { name: "USDT", icon: wltcoin5 },
];
const Dropcoins = [
  { name: "USDT", sub:"ERC-20",  icon: wltcoin5 },
  { name: "USDT", sub:"BEP-20",  icon: wltcoin5 },
  { name: "ETH", sub:"ERC-20", icon: wltcoin1 },
  { name: "BNB", sub:"ERC-20", icon: wltcoin4 },
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
  
  const [selectedCoin, setSelectedCoin] = useState({
    name: "USDT",
    icon: wltcoin5,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const [activeIndexbuy, setActiveIndexbuy] = useState(0);

  const handleToggle = (index) => {
    setActiveIndexbuy(index === activeIndexbuy ? -1 : index);
  };

  const handleSelectCoin = (coin, index) => {
    setSelectedCoin(coin);
    setSelectedIndex(index);
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
    <div className="pt-[42px] pb-[35px] " id="how-to-buy">
      <div
        className="space-y-[30px] px-[67px]  py-[20px] bg-[#FFF] max-w-[955px] w-[100%] mx-auto border border-[#D4D4D4] rounded-[8px]"
        id="Wallet"
      >
        <div className="flex justify-center space-x-3 items-center">
          <h3 className="text-[30px] font-[700] tracking-[-1px]">
            BFX Presale
          </h3>
          <div className="w-[58px] text-[14px] font-[600] text-[#fff] rounded-[7px] bg-[#E9C03D] h-[22px] flex justify-center items-start">
            <span className="text-[38px] leading-[9%] !-mt-[1px] pr-[2px] animate-blink">.</span>
            Live
          </div>
        </div>
        <div
          className="px-[24px] py-[8px] space-y-[5px] border border-[#D3D3D3]"
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <h4 className="text-center text-[#444] text-[12px] font-[700]">
            Price Increases In
          </h4>
          <div className="flex justify-center space-x-[22px]">
            <div className=" space-y-[2px]">
              <p className="leading-[100%] text-center text-[#E5AE00] text-[26px] font-[700]">
                00
              </p>
              <p className="text-center text-[#444] text-[7.9px] font-[700]">
                DAYS
              </p>
            </div>
            <div className=" space-y-[2px]">
              <p className="leading-[100%] text-center text-[#E5AE00] text-[26px] font-[700]">
                20
              </p>
              <p className="text-center text-[#444] text-[7.9px] font-[700]">
                HOURS
              </p>
            </div>
            <div className=" space-y-[2px]">
              <p className="leading-[100%] text-center text-[#E5AE00] text-[26px] font-[700]">
                37
              </p>
              <p className="text-center text-[#444] text-[7.9px] font-[700]">
                MINS
              </p>
            </div>
            <div className=" space-y-[2px]">
              <p className="leading-[100%] text-center text-[#E5AE00] text-[26px] font-[700]">
                38
              </p>
              <p className="text-center text-[#444] text-[7.9px] font-[700]">
                SECS
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between space-x-[2rem]">
          <div
            style={{
              background: "rgba(247, 247, 247, 0.70)",
            }}
            className="max-w-[413.763px] space-y-[10px] relative rounded-[6.419px] px-[33px] pt-[22px] pb-[11px] max-h-[554.944px] border border-[#B0B0B0] w-[100%] mx-auto "
          >
            <div className="w-[100%] absolute top-[-2%] left-0">
              <div className=" w-[100%] h-[30.612px] flex items-center rounded-[6px] mx-auto w-[102.877px] border border-[#454545] bg-[#f9f9f9]">
                <h3 className="text-[9.875px] text-[#444] text-center w-[100px] font-[700]  ">
                  $BFX Pre-Sale
                </h3>
              </div>
            </div>
            <div
              className="px-[11px] py-[9px] space-y-[5px] border border-[#D3D3D3]"
              style={{
                background: "rgba(237, 237, 237, 0.40)",
              }}
            >
              <h3 className="text-center text-[21.64px] leading-[100%] font-[700]">
                $210,992
              </h3>
              <div className="pt-3">
                <div className="flex justify-between items-center pb-1">
                  <span className="text-[#444] text-[9.74px] font-[400] leading-[100%]">
                    78.92% of softcap raised
                  </span>
                  <img src={info} className="w-[6.912px] h-[6.912px]" alt="" />
                </div>
                <div className="bg-[#E5E7EB] w-[100%] h-[4.938px] rounded-[20px]">
                  <div className="bg-[#E5AE00] w-[75%] h-[4.938px] rounded-[20px]"></div>
                </div>
                <div>
                  <p className="text-[#444] text-end text-[9.74px] font-[400] leading-[150%]">
                    $300,000
                  </p>
                </div>
              </div>
              <h5 className="text-[#444] text-[9.74px] text-center font-[400] leading-[100%]">
                1259 Transactions
              </h5>
            </div>
            <div
              className="px-[24px] py-[7px] border border-[#D3D3D3]"
              style={{
                background: "rgba(237, 237, 237, 0.40)",
              }}
            >
              <h4 className="text-center text-[#636363] text-[9.875px] leading-[75%] font-[700]">
                Listing Price: 1 $BFX = $0.01
              </h4>
            </div>
            <div className="flex justify-center space-x-[12px]">
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
                  className={`flex justify-center items-center px-[30px] py-[5px] space-x-1 cursor-pointer transition-all`}
                >
                  <img
                    className="w-[15.813px] h-[15.813px] object-cover"
                    src={coin.icon}
                    alt={coin.name}
                  />
                  <span className="text-[#545454] text-[11.688px] font-[700]">
                    {coin.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center py-[0px] space-x-[15px]">
              <hr className="h-[1px] w-[34%]" />
              <span className="text-[#636363] text-end text-[9.618px] font-[700] leading-[75%]">
                1 BFX = $0.002
              </span>
              <hr className="h-[1px] w-[34%]" />
            </div>
            <div className="">
              <label className="text-[#2F2F2F] text-[8.888px] font-[700] leading-[8.888px]">
                You Pay in USDT:
              </label>
              <div className="border h-[30.612px] border-[#454545] p-1 flex justify-between items-center">
                <div className="w-[80%] flex items-center space-x-2">
                  <input
                    type="text"
                    className="h-[17.281px] w-[100%] text-[11.85px] font-[700] outline-none bg-[transparent] placeholder:text-[#000]"
                    placeholder="1000"
                  />
                </div>
                <div className="relative border px-[4px] w-[74px]">
                  <div
                    className="justify-start flex h-[24px] items-center space-x-[3px] cursor-pointer"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <img
                      className="w-[15.813px] h-[15.813px] object-cover"
                      src={selectedCoin.icon}
                      alt=""
                    />
                    <span className="text-[#545454] !overflow-hidden !text-clip text-[8.888px] font-[700]">
                      {/* {selectedCoin?.name?.trim().split(/\s+/).slice(0, 1).join(" ")} */}
                      {selectedCoin.name}
                    </span>
                    <img
                      src={arw}
                      alt="Dropdown Arrow"
                      className={`transform  h-[11.85px] transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {dropdownOpen && (
                    <div className="absolute top-[32px] space-y-[5px] p-2  left-0 bg-white rounded-md shadow-lg  z-10">
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
                          <p className="text-[9px] text-[#545454]">{coin.sub}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="">
              <label className="text-[#2F2F2F] text-[8.888px] font-[700] leading-[8.888px]">
                You Receive $BFX +{" "}
                <span
                  onClick={(e) => handleScroll(e, "premium", 90)}
                  className="cursor-pointer text-[#299A00] underline"
                >
                  Novice Trading NFT
                </span>
              </label>
              <div className="border h-[30px] border-[#454545] p-1 flex justify-between items-center">
                {/* <div className="relative max-w-[75px] "></div> */}
                <div className="w-[80%] flex items-center h-[17.281px] space-x-2">
                  <input
                    type="text"
                    className="h-[17.281px] w-[80%] text-[11.85px] font-[700] outline-none bg-[transparent] placeholder:text-[#000]"
                    placeholder="26039.75"
                  />
                </div>
                <div className="relative w-[74px] border px-[4px] ">
                  <div className="justify-start flex h-[24px]  items-center space-x-[5px] cursor-pointer">
                    <img
                      className="w-[15.8px] h-[15.8px] object-cover"
                      src={bfxicn}
                      alt=""
                    />
                    <span className="text-[#545454] text-[8.888px] font-[700] leading-[50px]">
                      BFX
                    </span>
                    {/* <img
                      src={arw}
                      alt="Dropdown Arrow"
                      className={`transform  h-[11.85px] transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button 
              onClick={() => setShowPopup(true)}
              className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[11.85px] font-[800] border border-[#E5AE00]  hover:border-[#000] w-[100%] h-[32.094px]">
                Buy Now
              </button>
              {showPopup && <CardList selectedCoin={selectedIndex} onClose={() => setShowPopup(false)} />}

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
              <p className="text-[8.888px] font-[700] underline cursor-pointer">
                Bonus Code
              </p>
              <p className="text-[8.888px] font-[700] underline cursor-pointer">
                5% Referral Link
              </p>
            </div>
          </div>
          <div
            style={{
              background: "rgba(247, 247, 247, 0.70)",
            }}
            className="max-w-[413.763px] space-y-[10px] relative rounded-[6.419px] px-[10px] pt-[22px] pb-[11px] max-h-[554.944px] border border-[#B0B0B0] w-[100%] mx-auto "
          >
            <div className="w-[100%] absolute top-[-2%] left-0">
              <div className=" w-[100%] h-[30.612px] flex items-center rounded-[6px] mx-auto w-[102.877px] border border-[#454545] bg-[#f9f9f9]">
                <h3 className="text-[9.875px] text-[#444] text-center w-[100px] font-[700]  ">
                  How To Buy
                </h3>
              </div>
            </div>
            <div className="">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`py-[15px] px-1 border-b last:border-none  transition-all duration-300`}
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
                                : "text-[#181A20] "
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
                              className="w-[24px] h-[24px]"
                            />
                          </div>
                        </div>
                        <div
                          className={` transition-all duration-300 desc  ${
                            index === activeIndexbuy
                              ? "max-h-[200px] opacity-100 mt-[8px]  text-[11.688px] font-[400] text-[#000] overflow-hidden block"
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
            <h4 className="text-[#181A20] text-[14px] font-[600] px-1">5. Launch</h4>
            <div
              className="max-w-[414px] px-[10px] pt-[14px] pb-[16px] border border-[#B0B0B0] w-[100%] mx-auto "
              style={{
                background: "rgba(237, 237, 237, 0.40)",
              }}
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
        <div
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
        </div>
      </div>
    </div>
  );
}

export default WalletSec;
