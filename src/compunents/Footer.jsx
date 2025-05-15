"use client"
import { Link } from "react-router-dom"


import logo from "../assets/footer/logo.svg"
import socil1 from "../assets/footer/Vector (2).svg"
import socil2 from "../assets/footer/Vector (3).svg"
import socil3 from "../assets/footer/Vector (4).svg"

import icnft1 from "../assets/footer/ftricn (2).svg"
import icnft2 from "../assets/footer/image_588254259.webp"
import icnft3 from "../assets/footer/ftricn (1).svg"


const footer ={
    "description": "Be part of the next-gen trading ecosystem and join the fast growing BFX movement.",
    "quick_links": {
      "title": "Quick Links",
      "how_to_buy": "How to Buy?",
      "what_is_bfx": "What is BFX?",
      "roadmap": "Roadmap",
      "token_allocation": "Token Allocation"
    },
    "docs": {
      "title": "Docs",
      "terms_of_service": "Terms of Service",
      "privacy_policy": "Privacy Policy",
      "token_sale": "Token Sale Agreement",
      "support": "Live 24/7 Support"
    },
    "socials": {
      "title": "Join Our Socials"
    },
    "contact": {
      "email_label": "Contact E-Mail:",
      "email": "Support@blockchainfx.com"
    },
    "disclaimer": <p>Cryptocurrency may be unregulated in your jurisdiction, and its value can fluctuate, leading to potential gains or losses. Any profits might be subject to capital gains or other taxes, depending on your local laws. The content on this platform does not constitute an offer, recommendation, or financial advice to buy, sell, or engage in any cryptocurrency transactions. You are solely responsible for assessing whether a transaction aligns with your personal goals, financial circumstances, and risk tolerance. We strongly recommend consulting trusted and licensed legal, tax, or financial professionals before making any decisions.<br/> <br/>Trading cryptocurrencies carries significant risks, including the potential for partial or total loss of your funds. Thorough research is crucial. BlockchainFX does not guarantee any performance, outcome, or return of capital for any cryptocurrency mentioned on this platform. By using this platform, you agree to our Terms of Service, Privacy Policy, Cookie Policy, and any applicable token sale agreements. The platform's content is not intended for use in jurisdictions where its distribution or use would violate local laws or regulations.</p>,
    "copyright": "Copyright 2025. All Rights Reserved.",
    "cookie_management": "Cookie Management"
  }

function Footer() {
  

  const handleScroll = (event, targetId, offset) => {
    event.preventDefault()

    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="bg-[#020B10] lg:bg-[#020B10]">
      {/* desktop verion */}

      <div className="w-[100%] 2xl:block xl:block lg:block md:block sm:hidden hidden space-y-[40px] max-w-[1200px]  pt-[50px] mx-auto pb-[50px] ">
        <div className="flex justify-between">
          <div className="flex justify-between w-[70%]">
            <div className="max-w-[315px] space-y-[10px] w-[100%]">
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <img src={logo || "/placeholder.svg"} alt="" />
              </Link>
              <p className="text-[#fff]  text-[16px] font-[400] leading-[166.667%]">{footer.description}</p>
            </div>
            <div className="max-w-[190px] w-[100%] pt-[15px]">
              <ul>
                <li className="text-white text-[20px] font-[600] leading-[120%]  list-disc  min-w-[130px]">
                  {footer.quick_links.title}
                  <a
                    className="text-[#fff] block text-[16px] pt-[20px] font-[400] leading-[108.333%] border border-transparent transition duration-300 "
                    href=""
                    onClick={(e) => handleScroll(e, "how-to-buy", 90)}
                  >
                    {footer.quick_links.how_to_buy}
                  </a>
                  <a
                    className="text-[#fff] block text-[16px] pt-[10px] font-[400] leading-[108.333%] border border-transparent transition duration-300 "
                    href=""
                    onClick={(e) => handleScroll(e, "pioneering", 90)}
                  >
                    {footer.quick_links.what_is_bfx}
                  </a>
                  <a
                    className="text-[#fff] block text-[16px] pt-[10px] font-[400] leading-[108.333%] border border-transparent  transition duration-300 "
                    href=""
                    onClick={(e) => handleScroll(e, "roadmap", 90)}
                  >
                    {footer.quick_links.roadmap}
                  </a>
                  <a
                    className="text-[#fff] block text-[16px] pt-[10px] font-[400] leading-[108.333%] border border-transparent  transition duration-300 "
                    href=""
                    onClick={(e) => handleScroll(e, "allocation", 60)}
                  >
                    {footer.quick_links.token_allocation}
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-w-[190px] w-[100%] pt-[15px]">
              <ul className=" w-[100%]">
                <li className="text-white text-[20px] list-disc font-[600] leading-[120%] min-w-[140px]">
                  {footer.docs.title}
                  <br />
                 
                  <Link to="/terms-of-service" className="text-blue-600 ">
                    <p className="text-[#fff] text-[16px] pt-[20px] block font-[400] leading-[108.333%] border border-transparent transition duration-300 ">
                      {footer.docs.terms_of_service}
                    </p>
                  </Link>
                  <Link to="/privacy-policy" className="text-blue-600 ">
                    <p className="text-[#fff] text-[16px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent  transition duration-300 ">
                      {footer.docs.privacy_policy}
                    </p>
                  </Link>
                  <Link to="/token-sale" className="text-blue-600 ">
                    <p className="text-[#fff] text-[16px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent  transition duration-300 ">
                      {footer.docs.token_sale}
                    </p>
                  </Link>
                  <a
                    className="text-[#fff] text-[16px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent  transition duration-300 "
                    href="https://t.me/blockchainfx_chat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {footer.docs.support}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[285px] space-y-[10px] w-[100%] pt-[12px]">
            <h4 className="text-white text-[20px] font-[600] leading-[120%]">{footer.socials.title}</h4>
            <div className="flex space-x-6 pt-[10px] pb-[20px]">
              <a
                href="https://www.instagram.com/blockchain.fx?igsh=MWwybTk3cTRmbDhhcg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img src={socil1 || "/placeholder.svg"} alt="" />
              </a>
              <a
                href="https://t.me/blockchainfx_chat"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img src={socil2 || "/placeholder.svg"} alt="" />
              </a>
              <a
                href="https://x.com/BlockchainFXcom"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img src={socil3 || "/placeholder.svg"} alt="" />
              </a>
            </div>
            <div className="space-y-[5px]">
              <h4 className="text-[#fff] text-[16px] font-[400] leading-[108.333%]">
                {footer.contact.email_label}
              </h4>
              <h3 className="text-[#fff] text-[16px] font-[400] leading-[108.333%]">{footer.contact.email}</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-[35px] pt-[25px] items-center">
          <img className="h-[38px]" src={icnft1 || "/placeholder.svg"} alt="" />
          <img className="h-[38px]" src={icnft2 || "/placeholder.svg"} alt="" />
          <img className="h-[38px]" src={icnft3 || "/placeholder.svg"} alt="" />
        </div>
        <div className="border-t border-b border-white/10 py-[46px]">
          <p className="text-[14px] font-[400] text-[#fff] leading-[171%]">{footer.disclaimer}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className=" text-[16px] text-[#fff] leading-[150%]">{footer.copyright}</p>
          <div className="space-x-5">
            <Link to="/cookie-management" className="text-blue-600 ">
              <p className="text-[#fff] text-[16px] pt-[20px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#fff] transition duration-300 inline-block">
                {footer.cookie_management}
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* desktop version end */}

      {/* mobile version */}

      <div className="w-[90%] 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block space-y-[35px] py-[24px] mx-auto ">
        <div className=" space-y-[10px] w-[100%]">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src={logo || "/placeholder.svg"} alt="" />
          </Link>
          <p className="text-[#fff] text-[14px]  w-[300px] font-[400] leading-[200%]">{footer.description}</p>
        </div>
        <div className="space-y-6">
          <div className="max-w-[150px] w-[100%] ">
            <ul>
              <li className="text-[#fff] text-[16px] font-[600] leading-[108.333%] ">
                {footer.quick_links.title}
                <br />
                <a
                  className="text-[#fff] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "Wallet", 90)}
                >
                  {footer.quick_links.how_to_buy}
                </a>{" "}
                <br />
                <a
                  className="text-[#fff] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "pioneering", 90)}
                >
                  {footer.quick_links.what_is_bfx}
                </a>{" "}
                <br />
                <a
                  className="text-[#fff] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "roadmap", 90)}
                >
                  {footer.quick_links.roadmap}
                </a>{" "}
                <br />
                <a
                  className="text-[#fff] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "allocation", 60)}
                >
                  {footer.quick_links.token_allocation}
                </a>
              </li>
            </ul>
          </div>
          <div className="max-w-[200px] w-[100%] ">
            <ul className=" w-[100%]">
              <li className="text-[#fff] text-[16px] font-[600] leading-[108.333%]">
                {footer.docs.title}
                <br />
                <Link to="/terms-of-service" className="text-blue-600 ">
                  <p className="text-[#fff] text-[13px] pt-[20px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    {footer.docs.terms_of_service}
                  </p>
                </Link>
                <br />
                <Link to="/privacy-policy" className="text-blue-600 ">
                  <p className="text-[#fff] text-[13px] pt-[20px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    {footer.docs.privacy_policy}
                  </p>
                </Link>
                <br />
                <Link to="/token-sale" className="text-blue-600 ">
                  <p className="text-[#fff] text-[13px] pt-[20px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    {footer.docs.token_sale}
                  </p>
                </Link>
                <br />
                <a
                  className="text-[#fff] text-[13px] pt-[20px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                  href="https://t.me/blockchainfx_chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {footer.docs.support}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="max-w-[285px] space-y-[25px] pt-[3px] w-[100%] ">
            <h4 className="text-[#fff] text-[16px] font-[600] leading-[108.333%]">{footer.socials.title}</h4>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/blockchain.fx?igsh=MWwybTk3cTRmbDhhcg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img className="w-[24px] h-[24px]" src={socil1 || "/placeholder.svg"} alt="" />
              </a>
              <a
                href="https://t.me/blockchainfx_chat"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img className="w-[24px] h-[24px]" src={socil2 || "/placeholder.svg"} alt="" />
              </a>
              <a
                href="https://x.com/BlockchainFXcom"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img className="w-[24px] h-[24px]" src={socil3 || "/placeholder.svg"} alt="" />
              </a>
            </div>
            <div className="space-y-[10px]">
              <h4 className="text-[#fff] text-[12px] font-[400] leading-[108.333%]">
                {footer.contact.email_label}
              </h4>
              <h3 className="text-[#fff] text-[15px] font-[400] leading-[108.333%]">{footer.contact.email}</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-start space-x-[20px] pt-[10px] items-center">
          <img className="h-[22px]" src={icnft1 || "/placeholder.svg"} alt="" />
          <img className="h-[22px] object-cover" src={icnft2 || "/placeholder.svg"} alt="" />
          <img className="h-[22px]" src={icnft3 || "/placeholder.svg"} alt="" />
        </div>

        <div className="border-t border-b border-[#FFF] border-opacity-10 py-[18px]">
          <p className="text-[10px] font-[400] text-[#fff] leading-[190%]">{footer.disclaimer}</p>
        </div>
        <div>
          <p className="text-[10px] text-center text-[#fff] leading-[100%] mb-8">{footer.copyright}</p>
        </div>
      </div>

      {/* mobile version end */}
    </div>
  )
}

export default Footer
