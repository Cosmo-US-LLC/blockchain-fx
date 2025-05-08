import { useState } from "react";
import stars from "../assets/presale-v3/Stars.svg";
import eclipse from "../assets/presale-v3/eclipse.svg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";


export default function YoutubeSec() {
  const { t } = useTranslation();
  const [videoIndex, setVideoIndex] = useState(0);

  // Use translation data for the video slides
  const videoData = [
    {
      description: "experts.slide1.text",
      link: "https://fast.wistia.net/embed/iframe/aa3tldcsf0",
      id: "big_pottential",
      dealer: "experts.slide1.name",
      meta: "experts.slide1.role",
    },
    {
      description: "experts.slide2.text",
      link: "https://fast.wistia.net/embed/iframe/y8jip6h7gy",
      id: "hidden_gem",
      dealer: "experts.slide2.name",
      meta: "experts.slide2.role",
    },
    {
      description: "experts.slide3.text",
      link: "https://fast.wistia.net/embed/iframe/rln8cnlwja",
      id: "hidden_trades",
      dealer: "experts.slide3.name",
      meta: "experts.slide3.role",
    },
  ];

  const handleNextVideo = () => {
    if (videoIndex < videoData.length - 1) {
      setVideoIndex(videoIndex + 1);
    }
  };

  const handlePrevVideo = () => {
    if (videoIndex > 0) {
      setVideoIndex(videoIndex - 1);
    }
  };

  return (
    <div className="relative p-2 bg-[#000] rounded-[24px]">
      <img className="absolute" src={eclipse} alt="eclipse" />
      <div
        style={{
          border: "1.5px solid",
          borderRadius: "24px",
          borderImageSource:
            "linear-gradient(95.63deg, rgba(230, 175, 3, 0.3) 1.76%, rgba(29, 111, 66, 0) 99.42%)",
          borderImageSlice: 1,
        }}
        className="max-w-[413.763px] py-[20px] w-[100%] px-4"
      >
        <div className="flex flex-row items-center pr-2 py-2 justify-between mt-4">
        <div className="rounded-[16px] py-2 px-3 max-w-[266px]" style={{ border: "1px solid rgba(255, 255, 255, 0.10)" }}>
                  <h4 className="text-[#fff] text-[16px] font-[400]">
                  What Experts Say About BFX
                  </h4>
                </div>
          {/* Arrow Buttons Container */}
          <div className="flex justify-between gap-2">
            {/* Previous Button */}
            <div
              onClick={handlePrevVideo}
              className={`w-[28px] h-[28px] flex justify-center items-center rounded-[6px] cursor-pointer ${
                videoIndex > 0 ? "bg-[#E5AE00]" : "bg-[#616161]"
              }`}
            >
              <MdKeyboardArrowLeft
                className={`text-${
                  videoIndex > 0 ? "black" : "white"
                } text-2xl`}
              />
            </div>

            {/* Next Button */}
            <div
              onClick={handleNextVideo}
              className={`w-[28px] h-[28px] flex justify-center items-center rounded-[6px] cursor-pointer ${
                videoIndex < videoData.length - 1
                  ? "bg-[#E5AE00]"
                  : "bg-[#616161]"
              }`}
            >
              <MdKeyboardArrowRight
                className={`text-${
                  videoIndex < videoData.length - 1 ? "black" : "white"
                } text-2xl`}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[white] font-[500] text-[18px] text-left">
            
            {t(videoData[videoIndex].description)}
          </p>
          <img className="mt-3" src={stars} alt="stars" />
          <p className="text-[#D8D8D8] font-[600] text-[15px] mt-2">
            {t(videoData[videoIndex].dealer)}
          </p>
          <p className="text-[#898989] font-[400] text-[13px]">
            {t(videoData[videoIndex].meta)}
          </p>
          <div className="mt-2">
            <iframe
              width="100%"
              height="200px"
              src={videoData[videoIndex].link.replace("watch?v=", "embed/")}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
              style={{ borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
