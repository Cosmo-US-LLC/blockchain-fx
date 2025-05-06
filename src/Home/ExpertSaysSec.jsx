import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import expawr1 from "../assets/Expert/expawr (2).svg";
import expawr2 from "../assets/Expert/expawr (1).svg";
import stars from "../assets/Expert/Stars.png";
import ernvet1 from "../assets/EarnOnSec/Ellipse 4.png";
import ernvet2 from "../assets/EarnOnSec/Ellipse 3.png";

function ExpertSaysSec() {
  const { t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="flex items-center bg-[#000] pt-[90px]">
      <div className="max-w-[1200px] reative overflow-hidden flex justify-between items-center gap-[2rem] w-[100%] mx-auto border border-[#E6AF03] bg-[#000] relative rounded-[24px] px-[30px] pt-[50px] pb-[100px]">
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
                <div className="rounded-[16px] py-2 px-3 max-w-[266px]" style={{ border: "1px solid rgba(255, 255, 255, 0.10)" }}>
                  <h4 className="text-[#fff] text-[16px] font-[400]">
                  What Experts Say About BFX
                  </h4>
                </div>
                <p className="text-[#fff] text-[24px] font-[500]">
                “Imagine getting into Coinbase, or Binance at day one, that’s exactly what BFX is offering right now in its presale.”
                </p>
                <img src={stars} alt="" />
                <div>
                  <h3 className="text-[#D8D8D8] text-[18px] font-[600]">— Clay Bro</h3>
                  <p className="text-[#898989] text-[16px] font-[400]">Crypto Youtuber, 136K Followers</p>
                </div>
              </div>
              <div className="w-[50%]">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/aa3tldcsf0"
                  title="Wistia Video"
                  allow="fullscreen"
                  allowTransparency="true"
                  frameBorder="0"
                  scrolling="no"
                  className="wistia_embed"
                  name="wistia_embed"
                  style={{ height: "315px", borderRadius: "12px", width: "100%" }}
                ></iframe>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex items-center gap-5">
              <div className="w-[50%] space-y-[20px]">
                <div className="rounded-[16px] py-2 px-3 max-w-[266px]" style={{ border: "1px solid rgba(255, 255, 255, 0.10)" }}>
                  <h4 className="text-[#fff] text-[16px] font-[400]">
                    {t("experts.heading")}
                  </h4>
                </div>
                <p className="text-[#fff] text-[24px] font-[500]">
                  {t("experts.slide2.text")}
                </p>
                <img src={stars} alt="" />
                <div>
                  <h3 className="text-[#D8D8D8] text-[18px] font-[600]">— {t("experts.slide2.name")}</h3>
                  <p className="text-[#898989] text-[16px] font-[400]">{t("experts.slide2.role")}</p>
                </div>
              </div>
              <div className="w-[50%]">
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

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex items-center gap-5">
              <div className="w-[50%] space-y-[20px]">
                <div className="rounded-[16px] py-2 px-3 max-w-[266px]" style={{ border: "1px solid rgba(255, 255, 255, 0.10)" }}>
                  <h4 className="text-[#fff] text-[16px] font-[400]">
                    {t("experts.heading")}
                  </h4>
                </div>
                <p className="text-[#fff] text-[24px] font-[500]">
                  {t("experts.slide3.text")}
                </p>
                <img src={stars} alt="" />
                <div>
                  <h3 className="text-[#D8D8D8] text-[18px] font-[600]">— {t("experts.slide3.name")}</h3>
                  <p className="text-[#898989] text-[16px] font-[400]">{t("experts.slide3.role")}</p>
                </div>
              </div>
              <div className="w-[50%]">
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

        <div className="flex gap-3 mt-3 z-[99] absolute bottom-[8%]">
          <button ref={prevRef}>
            {activeSlide === 0 ? (
              <img className="h-[34px] w-[34px]" src={expawr2} alt="inactive" />
            ) : (
              <img className="h-[34px] w-[34px] rotate-[180deg]" src={expawr1} alt="active" />
            )}
          </button>

          <button ref={nextRef}>
            {activeSlide === 2 ? (
              <img className="h-[34px] w-[34px] rotate-[180deg]" src={expawr2} alt="inactive" />
            ) : (
              <img className="h-[34px] w-[34px]" src={expawr1} alt="active" />
            )}
          </button>
        </div>

        <div className="absolute top-[-8%] left-[-5%]">
          <img src={ernvet2} alt="left" />
        </div>
        <div className="absolute bottom-[0%] right-[0%]">
          <img src={ernvet1} alt="right" />
        </div>
      </div>
    </div>
  );
}

export default ExpertSaysSec;
