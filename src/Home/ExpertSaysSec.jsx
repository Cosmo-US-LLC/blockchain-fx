import { useState } from "react";
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
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="flex items-center bg-[#020B10] pt-[90px]">
      <div className="max-w-[1200px] reative overflow-hidden flex justify-between items-center gap-[2rem] w-[100%] mx-auto border border-[#E6AF03] bg-[#030F16] relative rounded-[24px] px-[30px] pt-[50px] pb-[100px]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={false}
          navigation={{
            prevEl: ".experts-swiper-prev",
            nextEl: ".experts-swiper-next",
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          className="w-full relative z-[99]"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex items-center gap-5">
              <div className="w-[50%] space-y-[20px]">
                <div className="rounded-[16px] py-2 px-3 inline-block " style={{ border: "1px solid rgba(255, 255, 255, 0.10)" }}>
                  <h4 className="text-[#fff] text-[16px] font-[400]">
                    {t("experts.heading")}
                  </h4>
                </div>
                <p className="text-[#fff] text-[24px] font-[500] max-w-[400px]">
                  "{t("experts.slide1.text")}"
                </p>
               <img src={stars} alt="reviews" />
                <div>
                  <h3 className="text-[#D8D8D8] text-[18px] font-[600]">- {t("experts.slide1.name")}</h3>
                  <p className="text-[#898989] text-[16px] font-[400]">{t("experts.slide1.role")}</p>
                </div>
              </div>
              <div className="w-[50%] ">
                <iframe
                  src="https://fast.wistia.com/embed/iframe/qw2brqylfy.js?autoplay=0"
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
                <div className="rounded-[16px] py-2 px-4 inline-block " style={{ border: "1px solid rgba(255, 255, 255, 0.10)" }}>
                  <h4 className="text-[#fff] text-[16px] font-[400]">
                    {t("experts.heading")}
                  </h4>
                </div>
                <p className="text-[#fff] text-[24px] font-[500] max-w-[400px]">
                  "{t("experts.slide2.text")}"
                </p>
                <img src={stars} alt="reviews" />
                <div>
                  <h3 className="text-[#D8D8D8] text-[18px] font-[600]">- {t("experts.slide2.name")}</h3>
                  <p className="text-[#898989] text-[16px] font-[400]">{t("experts.slide2.role")}</p>
                </div>
              </div>
              <div className="w-[50%] mb-10">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/aa3tldcsf0?autoplay=0"
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

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex items-center gap-5">
              <div className="w-[50%] space-y-[20px]">
                <div className="rounded-[16px] py-2 px-3 inline-block " style={{ border: "1px solid rgba(255, 255, 255, 0.10)" }}>
                  <h4 className="text-[#fff] text-[16px] font-[400]">
                    {t("experts.heading")}
                  </h4>
                </div>
                <p className="text-[#fff] text-[24px] font-[500] max-w-[400px]">
                  "{t("experts.slide3.text")}"
                </p>
                <img src={stars} alt="reviews" />
                <div>
                  <h3 className="text-[#D8D8D8] text-[18px] font-[600]">- {t("experts.slide3.name")}</h3>
                  <p className="text-[#898989] text-[16px] font-[400]">{t("experts.slide3.role")}</p>
                </div>
              </div>
              <div className="w-[50%]">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/y8jip6h7gy?autoplay=0"
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

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="flex items-center gap-5">
              <div className="w-[50%] space-y-[20px]">
                <div className="rounded-[16px] py-2 px-3 max-w-[266px]" style={{ border: "1px solid rgba(255, 255, 255, 0.10)" }}>
                  <h4 className="text-[#fff] text-[16px] font-[400]">
                    {t("experts.heading")}
                  </h4>
                </div>
                <p className="text-[#fff] text-[24px] font-[500] max-w-[400px]">
                  "{t("experts.slide4.text")}"
                </p>
                <img src={stars} alt="reviews" />
                <div>
                  <h3 className="text-[#D8D8D8] text-[18px] font-[600]">- {t("experts.slide4.name")}</h3>
                  <p className="text-[#898989] text-[16px] font-[400]">{t("experts.slide4.role")}</p>
                </div>
              </div>
              <div className="w-[50%]">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/rln8cnlwja?autoplay=0"
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
          <button type="button" className="experts-swiper-prev">
            {activeSlide === 0 ? (
              <img className="h-[34px] w-[34px]" src={expawr2} alt="inactive" />
            ) : (
              <img className="h-[34px] w-[34px] rotate-[180deg]" src={expawr1} alt="active" />
            )}
          </button>

          <button type="button" className="experts-swiper-next">
            {activeSlide === 3 ? (
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
