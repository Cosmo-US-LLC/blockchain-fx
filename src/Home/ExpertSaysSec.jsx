import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import expimg1 from "../assets/Expert/expert (1).webp";
// import expimg2 from "../assets/Expert/expert (2).webp";
import expawr1 from "../assets/Expert/expawr (2).svg";
import expawr2 from "../assets/Expert/expawr (1).svg";
import stars from "../assets/Expert/Stars.png";
import ernvet1 from "../assets/EarnOnSec/Ellipse 4.png";
import ernvet2 from "../assets/EarnOnSec/Ellipse 3.png";

function ExpertSaysSec() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="flex items-center bg-[#020B10] py-[50px]">
      <div className="max-w-[1200px] reative overflow-hidden flex justify-between items-center gap-[2rem] w-[100%] mx-auto border border-[#E6AF03] bg-[#030F16] relative rounded-[24px] px-[30px] pt-[50px] pb-[100px]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={false}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          className="w-full relative z-[99]"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex items-center gap-5">
              <div className="w-[50%] space-y-[20px]">
                <div
                  className="rounded-[16px] py-2 px-3 max-w-[266px]"
                  style={{
                    background: "",
                    border: "1px solid rgba(255, 255, 255, 0.10)",
                  }}
                >
                  <h4 className="text-[#898989] text-[16px] font-[400]">
                    What Experts Say About BFX
                  </h4>
                </div>
                <p className="text-[#fff] text-[24px] font-[500]">
                  “Hold BFX and earn daily USDT rewards from trading fees, even
                  when you're not trading. It’s not just a token, it’s your key
                  to passive staking income.”
                </p>
                <img src={stars} alt="" />
                <div>
                  <h3 className="text-[#D8D8D8] text-[18px] font-[600]">
                    — Crypto Volt
                  </h3>
                  <p className="text-[#898989] text-[16px] font-[400]">
                    Crypto Youtuber, 178K Followers
                  </p>
                </div>
              </div>
              <div className="w-[50%]">
                {/* <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/WyfOYLbvCf8"
                  title="YouTube video player"
                  allow="encrypted-media"
                  allowFullScreen
                ></iframe> */}
                <iframe
                  src="https://fast.wistia.net/embed/iframe/aa3tldcsf0"
                  title="Wistia Video"
                  allow="fullscreen"
                  allowTransparency="true"
                  frameBorder="0"
                  scrolling="no"
                  className="wistia_embed"
                  name="wistia_embed"
                  style={{ height: "315px", borderRadius:"12px", width: "100%" }}
                ></iframe>
                {/* <img src={expimg1} alt="Expert 1" /> */}
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex items-center gap-5">
              <div className="w-[50%] space-y-[20px]">
                <div
                  className="rounded-[16px] py-2 px-3 max-w-[266px]"
                  style={{
                    background: "",
                    border: "1px solid rgba(255, 255, 255, 0.10)",
                  }}
                >
                  <h4 className="text-[#898989] text-[16px] font-[400]">
                    What Experts Say About BFX
                  </h4>
                </div>
                <p className="text-[#fff] text-[24px] font-[500]">
                  “Forex, indices, stocks, ETFs, even options — you can trade
                  them all in one place. It’s the first platform of its kind.”
                </p>
                <img src={stars} alt="" />
                <div>
                  <h3 className="text-[#D8D8D8] text-[18px] font-[600]">
                    — Crypto Dealer
                  </h3>
                  <p className="text-[#898989] text-[16px] font-[400]">
                    Youtuber, 102K Followers
                  </p>
                </div>
              </div>
              <div className="w-[50%]">
                {/* <img src={expimg2} alt="Expert 2" /> */}
                <iframe
                  src="https://fast.wistia.net/embed/iframe/y8jip6h7gy"
                  title="Wistia Video"
                  allow="fullscreen"
                  allowTransparency="true"
                  frameBorder="0"
                  scrolling="no"
                  className="wistia_embed"
                  name="wistia_embed"
                  style={{ height: "315px", width: "100%" }}
                ></iframe>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-5">
              <div className="w-[50%] space-y-[20px]">
                <div
                  className="rounded-[16px] py-2 px-3 max-w-[266px]"
                  style={{
                    background: "",
                    border: "1px solid rgba(255, 255, 255, 0.10)",
                  }}
                >
                  <h4 className="text-[#898989] text-[16px] font-[400]">
                    What Experts Say About BFX
                  </h4>
                </div>
                <p className="text-[#fff] text-[24px] font-[500]">
                  “Every time someone trades on this platform, you will earn —
                  the more BFX you hold, the higher your rewards will be"
                </p>
                <img src={stars} alt="" />
                <div>
                  <h3 className="text-[#D8D8D8] text-[18px] font-[600]">
                    — Crypto Pandas
                  </h3>
                  <p className="text-[#898989] text-[16px] font-[400]">
                    Youtuber, 22.7K Followers
                  </p>
                </div>
              </div>
              <div className="w-[50%]">
                {/* <img src={expimg2} alt="Expert 2" /> */}
                <iframe
                  src="https://fast.wistia.net/embed/iframe/rln8cnlwja"
                  title="Wistia Video"
                  allow="fullscreen"
                  allowTransparency="true"
                  frameBorder="0"
                  scrolling="no"
                  className="wistia_embed"
                  name="wistia_embed"
                  style={{ height: "315px", width: "100%" }}
                ></iframe>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="flex gap-3 mt-3 z-[99] absolute bottom-[8%]">
                  <button ref={prevRef} className="">
                   <img className="h-[34px] w-[34px]" src={expawr2} alt="" />
                  <img className="h-[34px] w-[34px]" src={expawr1} alt="" />

                  </button>
                  <button ref={nextRef} className="">
                  <img className="h-[34px] w-[34px]" src={expawr1} alt="" />
                  <img className="h-[34px] w-[34px]" src={expawr2} alt="" />
                  </button>
                </div> */}
        {/* <div className="flex gap-3 mt-3 z-[99] absolute bottom-[8%]">
          <button ref={prevRef} className="">
            {activeSlide === 2 ? (
              <img className="h-[34px] w-[34px]" src={expawr2} alt="" />
            ) : (
              <img className="h-[34px] w-[34px] rotate-[180deg]" src={expawr1} alt="" />
            )}
          </button>
          <button ref={nextRef} className="">
            {activeSlide === 2 ? (
              <img className="h-[34px] w-[34px]" src={expawr1} alt="" />
            ) : (
              <img className="h-[34px] w-[34px] rotate-[180deg]" src={expawr2} alt="" />
            )}
          </button>
        </div> */}

        <div className="flex gap-3 mt-3 z-[99] absolute bottom-[8%]">
          {/* Previous Button */}
          <button ref={prevRef} className="">
            {activeSlide === 0 ? ( // First item, left button inactive
              <img
                className="h-[34px] w-[34px] "
                src={expawr2}
                alt="inactive"
              />
            ) : (
              <img
                className="h-[34px] w-[34px] rotate-[180deg]"
                src={expawr1}
                alt="active"
              />
            )}
          </button>

          {/* Next Button */}
          <button ref={nextRef} className="">
            {activeSlide === 2 ? ( // Third item, right button inactive
              <img
                className="h-[34px] w-[34px] rotate-[180deg]"
                src={expawr2}
                alt="inactive"
              />
            ) : (
              <img className="h-[34px] w-[34px]" src={expawr1} alt="active" />
            )}
          </button>
        </div>

        <div className="absolute top-[-8%] left-[-5%]">
          <img src={ernvet2} className=" " alt="" />
        </div>
        <div className="absolute bottom-[0%] right-[0%]">
          <img src={ernvet1} className="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ExpertSaysSec;
