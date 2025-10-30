import React, { useState } from "react";
import faqicn2 from "../assets/faqs/down.png";
import up from "../assets/faqs/arrow-circle-right.png";
import { useTranslation } from "react-i18next";



const FaqItem = ({ question, answer, isOpen, handleClick }) => {
  const createMarkup = () => ({ __html: answer });
  return (
    <div className="mb-[20px] overflow-hidden rounded-[16px] border border-[#000] bg-[#030F16]">
      <div
        className="flex cursor-pointer items-center justify-between px-[21px] py-[28px]"
        onClick={handleClick}
      >
        <div className="text-[24px] font-[600] text-white">{question}</div>
        <div className="h-[26px] w-[26px]">
          <img src={isOpen ? up : faqicn2} alt={isOpen ? "Close" : "Open"} />
        </div>
      </div>
      <div
        className={`px-[25px] transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] pb-[20px] opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <p
          className="text-[16px] max-w-[880px] font-[400] leading-[150%] text-[#fff]"
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
    </div>
  );
};

const FaqSec = () => {
  const { t } = useTranslation();
  const faqs = t("faq_section.faqs", { returnObjects: true });
  const [openItemIndex, setOpenItemIndex] = useState(null);
  const handleClick = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };
  return (
    <div className="bg-[#020B10]" id="faq">
      <div className="w-full max-w-[1200px] space-y-[35px] pt-[30px] pb-[60px] mx-auto">
        <div className="text-center space-y-[10px]">
          <h2 className="text-white leading-[120%] text-[48px] font-[600]">
            {t("faq_section.title")}
          </h2>
          <p className="text-[18px] font-[400] text-[#fff] text-center">
            {t("faq_section.description")}
          </p>
        </div>
        <div className="w-full mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItemIndex === index}
              handleClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSec;