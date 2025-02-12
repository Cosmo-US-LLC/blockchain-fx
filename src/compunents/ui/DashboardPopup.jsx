import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import icon1 from "../../assets/navbar/wallet/dash (5).svg";
import icon2 from "../../assets/navbar/wallet/dash (4).svg";
import icon3 from "../../assets/navbar/wallet/dash (3).svg";
import icon4 from "../../assets/navbar/wallet/dash (2).svg";
import icon5 from "../../assets/navbar/wallet/dash (1).svg";
import arw from "../../assets/navbar/wallet/awr.svg";
import cardimg1 from "../../assets/PremiumSec/cardimg (1).webp";
import cardimg2 from "../../assets/PremiumSec/cardimg (2).webp";
import cardimg3 from "../../assets/PremiumSec/cardimg (3).webp";
import cardimg4 from "../../assets/PremiumSec/cardimg (4).webp";
import cardimg5 from "../../assets/PremiumSec/cardimg (5).webp";
import cardimg6 from "../../assets/PremiumSec/cardimg (6).webp";
import cardimg7 from "../../assets/PremiumSec/cardimg (7).webp";

import cer from "../../assets/wallet/cer.svg";


const cards = [
  {
    img: cardimg1,
  },
  {
    img: cardimg2,
  },
  {
    img: cardimg3,
  },
  {
    img: cardimg4,
  },
  {
    img: cardimg5,
  },
  {
    img: cardimg6,
  },
  {
    img: cardimg7,
  },
];

const DashboardPopup = ({ onClose }) => {
    const [value, setValue] = useState(50);

    const handleChange = (e) => {
      setValue(e.target.value);
    };

  return (
    <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-end items-start">
      <div className="bg-white overflow-scroll h-[100vh] rounded-lg shadow-lg relative w-[487px] px-[18px] py-[40px] rounded-[8px] mt-[4rem] 2xl:mr-10 xl:mr-10 lg:mr-10 md:mr-0 sm:mr-0 mr-0">
        <div className="flex justify-center">
          <div className="border-[#B0B0B0] bg-[#F5F5F5] absolute top-[2%] border rounded-[5.725px] py-[8px] mx-auto w-[115px]">
            <p className="text-[8.808px] font-[700] text-center">
              Personal Dashboard
            </p>
          </div>
        </div>
        <div className="border border-[#E3E3E3] p-[20px] space-y-[7px] rounded-[4.913px]">
          <div
            className="border border-[#E3E3E3] space-y-[7px] p-[7px]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <h2 className="text-[12.774px] text-[#444] font-[600] text-center">
              Wallet Address
            </h2>
            <p className="text-[9.187px] font-[500] text-[#636363] text-center">
              0x7bb9Ed8Df7656b...870840d214e!
            </p>
          </div>
          <div className="border bg-[FFFBF2] bg-[#FFFBF2] border-[#E3E3E3] space-y-[7px] p-[7px]">
            <h4 className="text-center text-[6.686px] text-[#272626]">
              {" "}
              Total Portfolio on BFX Launch
            </h4>
            <h3 className="text-center text-[#FA0] text-[23.86px] leading-[100%] font-[700]">
              $5,233.32
            </h3>
            <p className="text-center text-[#02953B] text-[4.931px]">
              +$1785{" "}
              <span
                className="p-[2px] rounded-[1px]"
                style={{
                  background: "rgba(124, 241, 177, 0.42)",
                }}
              >
                +%289
              </span>
            </p>
            <p className="text-[6.603px] font-[500] text-[#272626] text-center">
              February 5, 2025
            </p>
          </div>
          <div
            className="py-[7px] border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <p className="text-[9.187px] font-[700] text-[#636363] text-center">
              BFX Listing Price = $0.01
            </p>
          </div>
          <div
            className="py-[7px] px-[7px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex space-x-1 itmes-center">
              <img src={icon1} alt="" />
              <p className="text-[9.187px] text-[#636363] font-[700] text-center">
                BFX
              </p>
            </div>
            <p className="text-[9.187px] text-[#272626] font-[700] text-center">
              12,254.35{" "}
            </p>
          </div>
          <div
            className="py-[7px] px-[7px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex space-x-1 itmes-center">
              <img src={icon2} alt="" />
              <p className="text-[9.187px] text-[#636363] font-[600] text-center">
                Bonus BFX
              </p>
            </div>
            <p className="text-[9.187px] text-[#272626] font-[700] text-center">
              2450.87{" "}
            </p>
          </div>
          <div
            className="py-[7px] px-[7px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex space-x-1 itmes-center">
              <img src={icon3} alt="" />
              <p className="text-[9.187px] text-[#636363] font-[700] text-center">
                BFX Rewards
              </p>
            </div>
            <p className="text-[9.187px] text-[#272626] font-[700] text-center">
              8900
            </p>
          </div>
          <div
            className="py-[7px] px-[7px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex space-x-1 itmes-center">
              <img src={icon4} alt="" />
              <p className="text-[9.187px] text-[#636363] font-[700] text-center">
                USDT Rewards
              </p>
            </div>
            <p className="text-[9.187px] text-[#272626] font-[700] text-center">
              785
            </p>
          </div>
          <div
            className="py-[7px] px-[7px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex space-x-1 itmes-center">
              <img src={icon5} alt="" />
              <p className="text-[9.187px] text-[#636363] font-[700] text-center">
                Trading Account Credits
              </p>
            </div>
            <p className="text-[9.187px] text-[#272626] font-[700] text-center">
              -
            </p>
          </div>
          <div
            className="py-[7px] px-[7px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="relative w-[179.822px] mx-auto">
              <button className="swiper-button-prev-swp rotate-[182deg] absolute z-10 !left-[-30%] top-[50%] transform -translate-y-1/2">
                <img className="w-[16px] h-[16px]" src={arw} alt="" />
              </button>
              <button className="swiper-button-next-swp  absolute z-20 !right-[-30%] top-[50%] transform -translate-y-1/2">
                <img className="w-[16px] h-[16px]" src={arw} alt="" />
              </button>

              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={false}
                navigation={{
                  nextEl: ".swiper-button-next-swp",
                  prevEl: ".swiper-button-prev-swp",
                  enabled: true,
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                {cards.map((card) => (
                  <SwiperSlide key={card.id}>
                    <div className="space-y-[8px]">
                      <h3 className="text-[9.072px] text-[#525252] text-center font-[600]">
                        Your Founder’s Club NFT
                      </h3>
                      <div className="flex justify-center">
                        <img className="" src={card.img} alt="" />
                      </div>
                      <div className="flex justify-between items-center space-x-2">
                        <button className="rounded-[2.964px] border border-[#E9E9E9] text-[7.317px] font-[500] text-[#403E3E] px-[8px] w-[100%] py-[3px]">
                          Early Access
                        </button>
                        <button className="rounded-[2.964px] border border-[#E9E9E9] text-[7.317px] font-[500] text-[#403E3E] px-[8px] w-[100%] py-[3px]">
                          10% BFX Bonus
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div
            className="py-[7px] space-y-[0px] px-[7px] border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex justify-between space-x-1 itmes-center">
              <p className="text-[9.187px] text-[#636363] font-[700] text-center">
                $ 1,200 left to reach the next NFT level
              </p>
              <p className="text-[9.187px] text-[#E5AE00] font-[700] text-center">
                $2,500
              </p>
            </div>
              <input 
               type="range"
               min="0"
               max="100"
               value={value}
               onChange={handleChange}
               className="custom-range"
               style={{
                 background: `linear-gradient(to right,  #E5AE00 ${value}%, #DDD ${value}%)`
               }}
              />
          </div>
          <div
          className="py-[7px] border border-[#D3D3D3] w-[100%] mx-auto "
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <div className="flex space-y-[8px] justify-center flex-col items-center">
            <h4 className="text-center text-[#808080] text-[5.352px] leading-[85%] font-[500]">
            Audited by the Leading Blockchain Security Company  
            </h4>
            <div className="w-[42.112px]">
              <img src={cer} className="" alt="" />
            </div>
          </div>
        </div>
          <div
            className="py-[7px] px-[7px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex space-x-1 itmes-center">
              <p className="text-[9.187px] text-[#636363] font-[600] text-center">
              Referral Bonus 
              </p>
            </div>
            <p className="text-[9.187px] text-[#272626] font-[700] text-center">
             -
            </p>
          </div>
          <div
            className="space-x-2 flex justify-between"
         
          >
             <button
          className="text-white bg-[#E5AE00] px-[10px] hover:text-black hover:bg-transparent  text-[10.886px] font-[800] border border-[#E5AE00] hover:border-[#000] w-[100%]  h-[29.398px]">
            Connect Wallet{" "}
          </button>
          <button
          onClick={onClose}
          className="text-white bg-[#E5AE00] px-[10px] hover:text-black hover:bg-transparent  text-[10.886px] font-[800] border border-[#E5AE00] hover:border-[#000] w-[100%]  h-[29.398px]">
            Disconnect
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPopup;
