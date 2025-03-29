import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // Swiper CSS
import line from "../assets/Roadmap/line.png"; // Image for roadmap line
import tick from "../assets/TraderReviewsSec/teenyicons_tick-circle-solid.svg"; // Tick icon
import user2 from "../assets/TraderReviewsSec/Image2.png";
import user3 from "../assets/TraderReviewsSec/image3.png";
import user4 from "../assets/TraderReviewsSec/image4.png";
import usern from "../assets/TraderReviewsSec/user.png";
import swpbtnl from "../assets/TraderReviewsSec/arwr.svg";
import swpbtnr from "../assets/TraderReviewsSec/arw.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RoadmapSection() {
  const phases = ["Genesis", "Foundations", "Takeoff"];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 3, // Scroll 3 slides at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideData = [
    {
      title: "Preparation",
      items: [
        "Idea + concept",
        "Raise Seed Funds",
        "Onboard Team & Advisors",
        "Trading Platform Beta Preparation",
      ],
    },
    {
      title: "Execution",
      items: [
        "Website, Tokenomics etc.",
        "Create $BFX Token",
        "Launch $BFX Pre-Sale",
        "Certik Token Audit",
      ],
    },
    {
      title: "Launch",
      items: [
        "Launch an Affiliate Program",
        "Sell Out the Pre-Sale",
        "Launch $BFX on Uniswap and CEX",
        "Achieving 10000 BFX Holders",
      ],
    },
    {
      title: "Performance",
      items: [
        "Multiple CEX Listing",
        "Achieving 100000 BFX Holders",
        "Reach $100M Daily Trading Volume",
        "Add Leaderboards & VIP accounts",
      ],
    },
    {
      title: "Expansion",
      items: [
        "Multiple CEX Listing",
        "Achieving 100000 BFX Holders",
        "Reach $100M Daily Trading Volume",
        "Add Leaderboards & VIP accounts",
      ],
    },
    {
      title: "Global Reach",
      items: [
        "US License",
        "Achieving 100,000 BFX Holders",
        "Global Marketing Campaigns",
        "Major Global Partnerships",
      ],
    },
  ];

  return (
    <div className="bg-[#020B10] pt-[30px] pb-[60px]">
      <h3 className="text-center text-[48px] font-[600] leading-[120%] text-white tracking-[-1.5px] mb-28">
        Roadmap <br />
        <span className="text-[#E5AE00] text-xl">
          From Fintech Startup to Global Market Leader
        </span>
      </h3>

      <div className="relative w-full mx-auto">
        {/* Image line with dots */}
        <img className="w-full" src={line} alt="Roadmap Line" />

        {/* Phases placed above the dots in the image */}
        <div className="absolute bottom-7 left-0 right-0 flex justify-between px-4">
          {phases.map((text, index) => {
            const isFirst = index === 0;
            const isLast = index === phases.length - 1;
            return (
              <div
                key={index}
                className="flex flex-col items-center absolute"
                style={{
                  left: isLast ? "calc(100% - 330px)" : `${(index / (phases.length - 1)) * 100}%`, // Fix rightmost phase position
                  transform: "translateX(-50%)", // Center text over dots
                  top: "-35px", // Adjust to position text above dots
                  marginLeft: isFirst ? "340px" : "0", // Adjust left phase position
                  marginRight: isLast ? "100px" : "0", // Adjust right phase position
                }}
              >
                <p className="text-white text-[24px]">{text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Swiper Section for Roadmap Slides */}
      <div className="max-w-[1280px] mx-auto mt-20">
      <Slider {...settings}>
          {slideData.map((slide, index) => (
            <div key={index} className="bg-[#181A20] border border-[#525252] rounded-[4px] p-6 m-4">
              <h4 className="text-[#E5AE00] text-[24px] mb-4">{slide.title}</h4>
              <ul className="text-white">
                {slide.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center mb-2">
                    <img className="w-4 h-4 mr-2" src={tick} alt="tick" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default RoadmapSection;
