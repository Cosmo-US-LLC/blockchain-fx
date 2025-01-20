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
    <div className="mb-[20px]">
      <div
       className={`border flex justify-between py-[10px] px-[10px] bg-[#FFF] rounded-[4px] items-center cursor-pointer ${
        isOpen ? "border-[#000]" : "border-[#000]"
      }  border-solid`}
        onClick={handleClick}
      >
        <div
        
        className="flex items-center justify-center">
          <div className={`text-[16px] text-[#000] font-[600]`}>{question}</div>
        </div>

        <h4
          className={`text-[18px] xs:text-[10px] rounded-full w-[26px] h-[26px] xs:h-[16px] xs:w-[16px]  flex items-center justify-center plusIcon  ${
            !isOpen
              ? "text-[#C3BABA] border-none rotate-0"
              : " border-none text-[#c3baba]"
          }`}
        >
          {isOpen ? (
            <>
              <div>
                <img src={faqicn1} alt="" />
              </div>
            </>
          ) : (
            <>
              <div>
                <img src={faqicn2} alt="" />
              </div>
            </>
          )}
        </h4>
      </div>
      <div style={contentStyles}>
        <div className="w-[100%]  px-[25px] py-[20px]">
          <p
            className="pb-[10px]  text-[16px] text-[#000] leading-[150%] font-[400]"
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
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
      question: "What is a Crypto Pre-Sale?",
      answer:
        "A crypto pre-sale is an early opportunity to purchase a new cryptocurrency or token before it becomes publicly available, typically at a significantly lower price than the official launch price on exchanges.",
    },
    {
      question: "What is the goal of the Pre-Sale?",
      answer:
        "The goal of the pre-sale is to sell all tokens allocated for this phase while raising funds to enhance the platform and fuel its growth. These funds will be continuously reinvested into project development and marketing to attract more users. We aim to reach 25,000 daily traders and achieve multi-million dollar daily trading volume during the pre-sale. At the same time, we’re building a loyal and growing community, rewarding early participants with discounted tokens, and generating awareness ahead of the official launch.",
    },
    {
      question: "Where can I see my tokens?",
      answer:
        "You can view your tokens in your dashboard wallet. Just connect with the wallet you used to purchase on presale.blockchainfx.com and click on the top right corner to see your holdings.",
    },
    {
      question: "Are my tokens safe?",
      answer:
        "The safety of your tokens during the pre-sale is guaranteed through our smart contract. Additionally, the BFX token has been audited by CertiK, the leading Blockchain Security Enterprise.",
    },
    {
      question: "How to claim your BFX?",
      answer:
        "Once the pre-sale ends, you will be able to claim your BFX tokens in your dashboard wallet on presale.blockchainfx.com.",
    },
  ];
  const [openItems, setOpenItems] = useState([]);

  const handleClick = (index) => {
    setOpenItems(openItems === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#FAFAFA]" id="faq">
        <div className=" w-[100%] max-w-[1220px] space-y-[55px] pt-[73px] mx-auto pb-[85px]">
          <div className="text-center space-y-[40px]">
            <h2 className="text-[#000] leading-[100%] text-[50px] font-[600]">
              FAQs
            </h2>
            <p className="text-[20px] font-[400] text-[#000] text-center">
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