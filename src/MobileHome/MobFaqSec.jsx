import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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
      className="mb-[20px] border py-[15px] px-[20px] bg-[#111111] rounded-[4px] cursor-pointer border-[#E6AF0320] border-solid"
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
  const { t } = useTranslation();

  const faqData = t("faq_section.faqs", { returnObjects: true });

  const [openItems, setOpenItems] = useState([]);

  const handleClick = (index) => {
    setOpenItems(openItems === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#020B10]" id="faq">
        <div className=" w-[90%]  space-y-[30px] pt-[30px] mx-auto pb-[30px]">
          <div className="text-center space-y-[20px]">
            <h2 className="text-[#FFF] leading-[120%] text-[30px] tracking-[-1.5px] font-[600]">
              {t("faq_section.title")}
            </h2>
            <p className="text-[15px] font-[400] text-[#fff] text-center">
              {t("faq_section.description")}
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
