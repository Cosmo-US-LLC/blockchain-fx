import React, { useState } from "react";

// import faqicn1 from "../assets/faqs/image (3).svg";
import faqicn2 from "../assets/faqs/down.png";
import up from "../assets/faqs/arrow-circle-right.png";
const FaqItem = ({ question, answer, isOpen, handleClick }) => {
  const createMarkup = () => ({ __html: answer });
  // const contentStyles = {
  //   maxHeight: isOpen ? "1000px" : "0",
  //   opacity: isOpen ? "1" : "0",
  //   overflow: "hidden",
  //   transition: "max-height 0.9 ease, opacity 2s ease",
  // };

  return (
    <div className="mb-[20px] overflow-hidden rounded-[16px] border border-[#000] bg-[#030F16]">
      <div
        className={`flex cursor-pointer items-center justify-between px-[21px] py-[28px]`}
        onClick={handleClick}
      >
        <div className="text-[24px] font-[600] text-white">{question}</div>
        <div className="h-[26px] w-[26px]">
          {isOpen ? (
            <img src={up} alt="Close" />
          ) : (
            <img src={faqicn2} alt="Open" />
          )}
        </div>
      </div>
      <div
        className={`px-[25px] transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[1000px] pb-[20px] opacity-100"
            : "max-h-0 py-0 opacity-0"
        }`}
      >
        <p
          className="text-[16px] max-w-[880px] font-[400] leading-[150%] text-[#8497A2]"
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
    </div>
  );
};

const FaqSec = () => {
  const faqData = [
    {
      question: "What is BlockchainFX?",
      answer:
        "BlockchainFX is an international multi-asset trading platform offering a wide range of trading opportunities, including Forex, Crypto, ETFs, and more, with advanced technical tools and risk management features.",
    },
    {
      question: "What is BFX?",
      answer:
        "BFX is the native token of the BlockchainFX platform, enabling early access, staking rewards in BFX and USDT, and providing access to premium features, as well as participation in the platform's ecosystem.",
    },
    {
      question: "What is a crypto presale?",
      answer:
        "A crypto pre-sale is an early opportunity to purchase a new cryptocurrency or token before it becomes publicly available, typically at a significantly lower price than the official launch price on exchanges.",
    },
    {
      question: "What is the goal of the presale?",
      answer:
        "The community event is dedicated to selling all pre-sale allocated tokens to accelerate platform growth and expansion. These funds will be strategically allocated to development, marketing, and securing top-tier exchange listings for BFX. <br/><br/>Our goal is to reach 100,000 active daily traders and generate multi-million dollar daily trading volume before the official launch. At the same time, we’re building a strong, loyal, and engaged community, rewarding early supporters with discounted tokens, and maximizing awareness for the BFX launch.",
    },
    {
      question: "Where can I see my tokens?",
      answer:
        "You can view your tokens in your dashboard wallet. Simply click 'Connect Wallet' in the top right corner and connect the wallet you used for the purchase to see your BFX balance.",
    },
    {
      question: "Are my tokens safe?",
      answer:
        "The safety of your tokens during the pre-sale is 100% guaranteed through our smart contract.",
    },
    {
      question: "How to claim your BFX?",
      answer:
        "Your tokens will be transferred to your wallet automatically after the presale ends. You don’t need to do anything.",
    },
  ];
  const [openItems, setOpenItems] = useState([]);

  const handleClick = (index) => {
    setOpenItems(openItems === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#020B10]" id="faq">
        <div className=" w-[100%] max-w-[1280px] space-y-[35px] pt-[30px] pb-[60px] mx-auto ">
          <div className="text-center space-y-[10px]">
            <h2 className="text-white leading-[120%] text-[48px] font-[600]">
              FAQs
            </h2>
            <p className="text-[18px] font-[400] text-[#ACC4D1] text-center">
            Find answers to some of the most common questions.
            </p>
          </div>
          <div className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] mx-auto">
            <div className="">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems === index}
                  handleClick={() => handleClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSec;