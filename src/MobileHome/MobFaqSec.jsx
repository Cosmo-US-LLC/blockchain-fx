import React, { useState } from "react";

import faqicn1 from "../assets/faqs/image (3).svg";
import faqicn2 from "../assets/faqs/image (4).svg";
const FaqItem = ({ question, answer, isOpen, handleClick }) => {
  const createMarkup = () => ({ __html: answer });
  const contentStyles = {
    maxHeight: isOpen ? "1000px" : "0",
    opacity: isOpen ? "1" : "0",
    overflow: "hidden",
    transition: "max-height 0.9 ease, opacity 2s ease",
  };

  return (
    <div
      onClick={handleClick}
      className="mb-[20px] border py-[15px] px-[20px] bg-[#030f16] rounded-[4px] cursor-pointer border-[#E6AF031F] border-solid"
    >
      <div className={`flex justify-between items-center`}>
        <div className="flex items-center justify-center">
          <div className={`text-[15px] text-[#FFF] font-[600]`}>{question}</div>
        </div>

        <h4
          className={`text-[18px] xs:text-[10px] rounded-full w-[26px] h-[26px] xs:h-[16px] xs:w-[16px]  flex items-center justify-center plusIcon  ${
            !isOpen
              ? "text-[#fff] border-none rotate-0"
              : " border-none text-[#fff]"
          }`}
        >
          {isOpen ? (
            <>
              <div>
                <img src={faqicn2} alt="" />
              </div>
            </>
          ) : (
            <>
              <div>
                <img src={faqicn1} alt="" />
              </div>
            </>
          )}
        </h4>
      </div>
      <div style={contentStyles}>
        <ul className="w-[90%] pt-[20px] pl-[20px] list-disc list-outside text-[#fff]">
          <li>
            <span
              className="pb-[10px] text-[15px] leading-[150%] font-[400]"
              dangerouslySetInnerHTML={createMarkup()}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

const MobFaqSec = () => {
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
      <div className="bg-[#000]" id="faq">
        <div className=" w-[90%]  space-y-[30px] pt-[30px] mx-auto pb-[30px]">
          <div className="text-center space-y-[20px]">
            <h2 className="text-[#FFF] leading-[100%] text-[30px] font-[600]">
              FAQs
            </h2>
            <p className="text-[15px] font-[400] text-[#fff] text-center">
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

export default MobFaqSec;