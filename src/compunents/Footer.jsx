import React, { handleScroll } from "react";

import logo from "../assets/footer/logo.svg";
import socil1 from "../assets/footer/Vector (2).svg";
import socil2 from "../assets/footer/Vector (3).svg";
import socil3 from "../assets/footer/Vector (4).svg";

function Footer() {
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
    <div className="bg-[#FAFAFA]">
      {/* desktop verion */}

      <div className="w-[100%] 2xl:block xl:block lg:block md:block sm:hidden hidden space-y-[40px] max-w-[1200px]  pt-[50px] mx-auto pb-[50px] ">
        <div className="flex justify-between">
          <div className="flex justify-between w-[60%]">
            <div className="max-w-[177px] space-y-[10px] w-[100%]">
              <img src={logo} alt="" />
              <p className="text-[#000] text-[12px] font-[400] leading-[166.667%]">
                Experience all-in-one trading with BlockchainFX: Trade Crypto,
                Forex, ETFs, Stocks, Indices, CFDs, and more with access to over
                500 assets.
              </p>
            </div>
            <div className="max-w-[83.276px] w-[100%] pt-[15px]">
              <ul>
                <li className="text-[#000] text-[13.3px] font-[600] leading-[108.333%]  list-disc  min-w-[100px]">
                  Quick Links
                  <a
                    className="text-[#949494] block text-[10.8px] pt-[20px] font-[400] leading-[108.333%]"
                    href=""
                    onClick={(e) => handleScroll(e, "how-to-buy", 90)}
                  >
                    How to Buy
                  </a>
                  <a
                    className="text-[#949494] block text-[10.8px] pt-[10px] font-[400] leading-[108.333%]"
                    href=""
                    onClick={(e) => handleScroll(e, "what-is-bfx-coin", 90)}
                  >
                    What is BFX
                  </a>
                  <a
                    className="text-[#949494] block text-[10.8px] pt-[10px] font-[400] leading-[108.333%]"
                    href=""
                    onClick={(e) => handleScroll(e, "roadmap", 90)}
                  >
                    Roadmap
                  </a>
                  <a
                    className="text-[#949494] block text-[10.8px] pt-[10px] font-[400] leading-[108.333%]"
                    href=""
                    onClick={(e) => handleScroll(e, "tokenomics", 90)}
                  >
                    Token Allocation
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-w-[114px] w-[100%] pt-[15px]">
              <ul className=" w-[100%]">
                <li className="text-[#000] text-[13.3px] list-disc font-[600] leading-[108.333%] min-w-[140px]">
                  Docs
                  <a
                    className="text-[#949494] text-[10.8px] pt-[20px] block font-[400] leading-[108.333%]"
                    href=""
                  >
                    Terms of Service{" "}
                  </a>
                  <a
                    className="text-[#949494] text-[10.8px] pt-[10px] block font-[400] leading-[108.333%]"
                    href=""
                  >
                    Privacy Policy{" "}
                  </a>
                  <a
                    className="text-[#949494] text-[10.8px] pt-[10px] block font-[400] leading-[108.333%]"
                    href=""
                  >
                    Token Sale Agreement
                  </a>
                  <a
                    className="text-[#949494] text-[10.8px] pt-[10px] block font-[400] leading-[108.333%]"
                    href=""
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[285px] space-y-[10px] w-[100%] pt-[12px]">
            <h4 className="text-[#000] text-[13.3px] font-[600] leading-[108.333%]">
              Join Our Socials
            </h4>
            <div className="flex space-x-6 px-[10px] pt-[10px] pb-[20px]">
              <a
                href="https://www.instagram.com/blockchain.fx?igsh=MWwybTk3cTRmbDhhcg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socil1} alt="" />
              </a>
              <a
                href="https://t.me/blockchainfx_chat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socil2} alt="" />
              </a>
              <a
                href="https://x.com/Blockchainfx1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socil3} alt="" />
              </a>
            </div>
            <div className="space-y-[5px]">
              <h4 className="text-[#949494] text-[10.8px] font-[400] leading-[108.333%]">
                Contact E-Mail:{" "}
              </h4>
              <h3 className="text-[#949494] text-[15px] font-[400] leading-[108.333%]">
                Support@blockchainfx.com
              </h3>
            </div>
          </div>
        </div>
        <div className="border-t border-b border-[#000] py-[46px]">
          <p className="text-[10px] font-[400] text-[#000] leading-[190%]">
            Cryptocurrency may be unregulated in your jurisdiction, and its
            value can fluctuate, leading to potential gains or losses. Any
            profits might be subject to capital gains or other taxes, depending
            on your local laws. The content on this platform does not constitute
            an offer, recommendation, or financial advice to buy, sell, or
            engage in any cryptocurrency transactions. You are solely
            responsible for assessing whether a transaction aligns with your
            personal goals, financial circumstances, and risk tolerance. We
            strongly recommend consulting trusted and licensed legal, tax, or
            financial professionals before making any decisions. <br />
            <br />
            Trading cryptocurrencies carries significant risks, including the
            potential for partial or total loss of your funds. Thorough research
            is crucial. Dreamcars does not guarantee any performance, outcome,
            or return of capital for any cryptocurrency mentioned on this
            platform. By using this platform, you agree to our Terms of Service,
            Privacy Policy, Cookie Policy, and any applicable token sale
            agreements. The platform's content is not intended for use in
            jurisdictions where its distribution or use would violate local laws
            or regulations.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-[12px] text-[#000] leading-[100%]">
            Copyright 2025. All Rights Reserved.
          </p>
          <div
            className="
          space-x-5"
          >
            <a href="" className=" text-[12px] text-[#000] leading-[100%]">
              Cookie Management
            </a>
          </div>
        </div>
      </div>

      {/* desktop version end */}

      {/* mobile version */}

      <div className="w-[90%] 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block space-y-[35px] py-[24px] mx-auto ">
        <div className=" space-y-[10px] w-[100%]">
          <img src={logo} alt="" />
          <p className="text-[#000] text-[14px] font-[400] leading-[200%]">
            Experience all-in-one trading with BlockchainFX: Trade Crypto,
            Forex, ETFs, Stocks, Indices, CFDs, and more with access to over 500
            assets.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="max-w-[150px] w-[100%] ">
            <ul>
              <li className="text-[#000] text-[16px] font-[600] leading-[108.333%] ">
                Quick Links
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%]"
                  href=""
                  onClick={(e) => handleScroll(e, "how-to-buy", 90)}
                >
                  How to Buy
                </a>
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%]"
                  href=""
                  onClick={(e) => handleScroll(e, "what-is-bfx-coin", 90)}
                >
                  What is BFX
                </a>
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%]"
                  href=""
                  onClick={(e) => handleScroll(e, "roadmap", 90)}
                >
                  Roadmap
                </a>
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%]"
                  href=""
                  onClick={(e) => handleScroll(e, "tokenomics", 90)}
                >
                  Token Allocation
                </a>
              </li>
            </ul>
          </div>
          <div className="max-w-[200px] w-[100%] ">
            <ul className=" w-[100%]">
              <li className="text-[#000] text-[16px] font-[600] leading-[108.333%]">
                Docs
                <a
                  className="text-[#949494] text-[13px] pt-[20px] block font-[400] leading-[108.333%]"
                  href=""
                >
                  Terms of Service{" "}
                </a>
                <a
                  className="text-[#949494] text-[13px] pt-[20px] block font-[400] leading-[108.333%]"
                  href=""
                >
                  Privacy Policy{" "}
                </a>
                <a
                  className="text-[#949494] text-[13px] pt-[20px] block font-[400] leading-[108.333%]"
                  href=""
                >
                  Token Sale Agreement
                </a>
                <a
                  className="text-[#949494] text-[13px] pt-[20px] block font-[400] leading-[108.333%]"
                  href=""
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="max-w-[285px] space-y-[25px] pt-[3px] w-[100%] ">
            <h4 className="text-[#000] text-[16px] font-[600] leading-[108.333%]">
              Join Our Socials
            </h4>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/blockchain.fx?igsh=MWwybTk3cTRmbDhhcg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-[24px] h-[24px]" src={socil1} alt="" />
              </a>
              <a
                href="https://t.me/blockchainfx_chat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-[24px] h-[24px]" src={socil2} alt="" />
              </a>
              <a
                href="https://x.com/Blockchainfx1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-[24px] h-[24px]" src={socil3} alt="" />
              </a>
            </div>
            <div className="space-y-[10px]">
              <h4 className="text-[#949494] text-[12px] font-[400] leading-[108.333%]">
                Contact E-Mail:{" "}
              </h4>
              <h3 className="text-[#949494] text-[15px] font-[400] leading-[108.333%]">
                Support@blockchainfx.com
              </h3>
            </div>
          </div>
        </div>
        <div className="border-t border-b border-[#000] py-[18px]">
          <p className="text-[10px] font-[400] text-[#000] leading-[190%]">
            Cryptocurrency may be unregulated in your jurisdiction, and its
            value can fluctuate, leading to potential gains or losses. Any
            profits might be subject to capital gains or other taxes, depending
            on your local laws. The content on this platform does not constitute
            an offer, recommendation, or financial advice to buy, sell, or
            engage in any cryptocurrency transactions. You are solely
            responsible for assessing whether a transaction aligns with your
            personal goals, financial circumstances, and risk tolerance. We
            strongly recommend consulting trusted and licensed legal, tax, or
            financial professionals before making any decisions. <br />
            <br />
            Trading cryptocurrencies carries significant risks, including the
            potential for partial or total loss of your funds. Thorough research
            is crucial. Dreamcars does not guarantee any performance, outcome,
            or return of capital for any cryptocurrency mentioned on this
            platform. By using this platform, you agree to our Terms of Service,
            Privacy Policy, Cookie Policy, and any applicable token sale
            agreements. The platform's content is not intended for use in
            jurisdictions where its distribution or use would violate local laws
            or regulations.
          </p>
        </div>
        {/* <div className='flex justify-center items-center'>
          <div className='space-x-4'>
            <a href="" className='text-[12px] text-[#000] leading-[100%]'>Cookie Management</a>
          </div>
        </div> */}
        <div>
          <p className="text-[10px] text-center text-[#000] leading-[100%]">
            Copyright 2025. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* mobile version end */}
    </div>
  );
}

export default Footer;
