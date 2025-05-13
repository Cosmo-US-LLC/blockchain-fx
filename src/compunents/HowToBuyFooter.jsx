 import { Link } from "react-router-dom";

const footer = {
  description:
    "Be part of the next-gen trading ecosystem and join the fast growing BFX movement.",
  quick_links: {
    title: "Quick Links",
    how_to_buy: "How to Buy?",
    what_is_bfx: "What is BFX?",
    roadmap: "Roadmap",
    token_allocation: "Token Allocation",
  },
  docs: {
    title: "Docs",
    terms_of_service: "Terms of Service",
    privacy_policy: "Privacy Policy",
    token_sale: "Token Sale Agreement",
    support: "Live 24/7 Support",
  },
  socials: {
    title: "Join Our Socials",
  },
  contact: {
    email_label: "Contact E-Mail:",
    email: "Support@blockchainfx.com",
  },
  disclaimer: (
    <p>
      Cryptocurrency may be unregulated in your jurisdiction, and its value can
      fluctuate, leading to potential gains or losses. Any profits might be
      subject to capital gains or other taxes, depending on your local laws. The
      content on this platform does not constitute an offer, recommendation, or
      financial advice to buy, sell, or engage in any cryptocurrency
      transactions. You are solely responsible for assessing whether a
      transaction aligns with your personal goals, financial circumstances, and
      risk tolerance. We strongly recommend consulting trusted and licensed
      legal, tax, or financial professionals before making any decisions.
      <br /> <br />
      Trading cryptocurrencies carries significant risks, including the
      potential for partial or total loss of your funds. Thorough research is
      crucial. BlockchainFX does not guarantee any performance, outcome, or
      return of capital for any cryptocurrency mentioned on this platform. By
      using this platform, you agree to our Terms of Service, Privacy Policy,
      Cookie Policy, and any applicable token sale agreements. The platform's
      content is not intended for use in jurisdictions where its distribution or
      use would violate local laws or regulations.
    </p>
  ),
  copyright: "Copyright 2025. All Rights Reserved.",
  cookie_management: "Cookie Management",
};

function HowToBuyFooter() {
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
    <div className="bg-[#000] lg:bg-[#000] relative top-[-1px]">
      {/* desktop verion */}

      <div className="w-[100%] 2xl:block xl:block lg:block md:block sm:hidden hidden space-y-[40px] max-w-[1200px]  pt-[10px] mx-auto pb-[50px] ">
        <div className="border-b border-white/10 py-[46px]">
          <p className="text-[14px] font-[400] text-gray-300 leading-[171%]">
            {footer.disclaimer}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className=" text-[16px] text-[#fff] leading-[150%]">
            {footer.copyright}
          </p>
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
        <div className="border-t border-b border-[#FFF] border-opacity-10 py-[18px]">
          <p className="text-[10px] font-[400] text-gray-300 leading-[190%]">
            {footer.disclaimer}
          </p>
        </div>
        <div>
          <p className="text-[10px] text-center text-[#fff] leading-[100%] mb-8">
            {footer.copyright}
          </p>
        </div>
      </div>

      {/* mobile version end */}
    </div>
  );
}

export default HowToBuyFooter;