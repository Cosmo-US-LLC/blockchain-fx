import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import line from "../assets/Roadmap/line.png";
import tick from "../assets/TraderReviewsSec/teenyicons_tick-circle-solid.svg";
import rightArrow from "../assets/Roadmap/rightarrow.png";
import leftArrow from "../assets/Roadmap/rightarrow.png"; // Make sure to add this import

function RoadmapSection() {
  const sliderRef = useRef(null);
  const [currentGroup, setCurrentGroup] = useState(0);

  // Define our card groups and their corresponding phase texts
  const cardGroups = [
    {
      slides: [0, 1, 2], // Preparation, Execution, Launch
      phases: ["Genesis", "Foundations", "Takeoff"]
    },
    {
      slides: [3, 4, 5], // Performance, Expansion, Global Reach
      phases: ["Scale", "Expansion", "Global Reach"]
    }
  ];

  // Custom Arrow Components
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 cursor-pointer z-10 hover:opacity-80 transition-opacity"
        onClick={onClick}
      >
        <img src={rightArrow} alt="next" className="h-10 w-10" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute left-[-20px] top-1/2 -translate-y-1/2 cursor-pointer z-10 hover:opacity-80 transition-opacity"
        onClick={onClick}
      >
        <img src={leftArrow} alt="previous" className="h-10 w-10 rotate-[180deg]" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />, // Now showing previous arrow
    beforeChange: (_, newIndex) => {
      // Update group immediately when slide starts changing
      const newGroup = cardGroups.findIndex(group => 
        group.slides.includes(newIndex)
      );
      if (newGroup !== -1 && newGroup !== currentGroup) {
        setCurrentGroup(newGroup);
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }
      }
    ]
  };

  // Effect to handle initial group detection
  useEffect(() => {
    if (sliderRef.current) {
      const initialSlide = sliderRef.current.innerSlider.state.currentSlide;
      const initialGroup = cardGroups.findIndex(group => 
        group.slides.includes(initialSlide)
      );
      setCurrentGroup(initialGroup >= 0 ? initialGroup : 0);
    }
  }, []);

  const slideData = [
    // First group
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
    // Second group
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
    <div className="bg-[#020B10] pt-[30px] pb-[60px]" id="roadmap">
      <h3 className="text-center text-[48px] font-[600] leading-[120%] text-white tracking-[-1.5px] mb-28">
        Roadmap <br />
        <span className="text-[#E5AE00] text-xl italic">
          From Fintech Startup to Global Market Leader
        </span>
      </h3>

      <div className="relative w-full mx-auto">
        <img className="w-full" src={line} alt="Roadmap Line" />

        <div className="absolute bottom-7 left-0 right-0 flex justify-between px-4">
          {cardGroups[currentGroup].phases.map((text, index) => {
            const isFirst = index === 0;
            const isLast = index === cardGroups[currentGroup].phases.length - 1;
            return (
              <div
                key={index}
                className="flex flex-col items-center absolute"
                style={{
                  left: isLast ? "calc(100% - 330px)" : `${(index / (cardGroups[currentGroup].phases.length - 1)) * 100}%`,
                  transform: "translateX(-50%)",
                  top: "-35px",
                  marginLeft: isFirst ? "340px" : "0",
                  marginRight: isLast ? "100px" : "0",
                }}
              >
                <p className="text-white text-[24px]">{text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto mt-20 relative px-12">
        <Slider ref={sliderRef} {...settings}>
          {slideData.map((slide, index) => (
            <div key={index} className="px-2">
              <div className="bg-[#030F16] border border-[#242424] rounded-[4px] p-6 h-full">
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
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default RoadmapSection;