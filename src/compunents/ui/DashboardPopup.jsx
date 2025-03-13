import React, {useState, useEffect, useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import icon1 from "../../assets/navbar/wallet/dash (5).svg";
import icon2 from "../../assets/navbar/wallet/dash (4).svg";
import icon3 from "../../assets/navbar/wallet/dash (3).svg";
import icon4 from "../../assets/navbar/wallet/dash (2).svg";
import icon5 from "../../assets/navbar/wallet/dash (1).svg";
import icon6 from "../../assets/navbar/wallet/dash (6).svg";
import arw from "../../assets/navbar/wallet/awr.svg";
import cross from "../../assets/navbar/wallet/x.svg";
import copy from "../../assets/navbar/wallet/copy-right.png";
import cardimg1 from "../../assets/PremiumSec/cardimg (1).webp";
import cardimg2 from "../../assets/PremiumSec/cardimg (2).webp";
import cardimg3 from "../../assets/PremiumSec/cardimg (3).webp";
import cardimg4 from "../../assets/PremiumSec/cardimg (4).webp";
import cardimg5 from "../../assets/PremiumSec/cardimg (5).webp";
import cardimg6 from "../../assets/PremiumSec/cardimg (6).webp";
import cardimg7 from "../../assets/PremiumSec/cardimg (7).webp";

import cer from "../../assets/wallet/cer.svg";
import { Bounce } from "react-toastify";
import { useAccount } from "../../presale-gg/web3/hooks";
import { useUserState } from "../../presale-gg/stores/user.store";


const cards = [
  {
    img: cardimg1,
    Access:"Early Access",
    Bonus:"10% BFX Bonus",
  },
  {
    img: cardimg2,
    Access:"20% BFX Bonus",
    Bonus:"$500 Trading Credits",
  },
  {
    img: cardimg3,
    Access:"30% BFX Bonus",
    Bonus:"$1,000 Trading Credits",
  },
  {
    img: cardimg4,
    Access:"40% BFX Bonus",
    Bonus:"$2,000 Trading Credits",
  },
  {
    img: cardimg5,
    Access:"50% BFX Bonus",
    Bonus:"$5,000 Trading Credits",
  },
  {
    img: cardimg6,
    Access:"60% BFX Bonus",
    Bonus:"$10,000 Trading Credits",
  },
  {
    img: cardimg7,
    Access:"80% BFX Bonus",
    Bonus:"$25,000 Trading Credits",
  },
];

const DashboardPopup = ({ onClose }) => {
    const accountData = useAccount()
    const userData = useUserState()
    const [value, setValue] = useState(50);
    const modalRef = useRef(null);
    const mobileModalRef = useRef(null);

    const handleChange = (e) => {
      setValue(e.target.value);
    };

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (!modalRef.current && !mobileModalRef.current) return
          if (modalRef.current.contains(event.target) || modalRef.current.isEqualNode(event.target)) return
          if (mobileModalRef.current.contains(event.target) || mobileModalRef.current.isEqualNode(event.target)) return

          onClose();
        };
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [onClose]);

  return (
   <div className="fixed flex items-center inset-0 bg-black bg-opacity-50 h-[100vh] !z-[999]">
   {/* desktop version */}
   <div className=" 2xl:flex xl:flex w-[100%] max-w-[1240px] mx-auto pt-[20px] lg:flex md:flex sm:hidden hidden justify-end items-center"
   >
      <div className="w-[790px] flex items-center pr-5 overflow-y-auto overflow-x-hidden rounded-lg  flex justify-end  pt-[15px]  ">
       <div className="h-[86vh] mt-[10px] ">
       <div className="w-[700px] bg-white rounded-lg relative">
        <div className="flex justify-center">
          <div className="border-[#B0B0B0] bg-[#F5F5F5] absolute top-[-2.5%] border rounded-[5.725px] py-[0px] mx-auto w-[190px]">
            <p className="text-[16px] font-[700] text-center">
              Personal Dashboard
            </p>
          </div>
          <div className="absolute top-[-1.5%] right-[-13px]">
           <img src={cross} alt=""  onClick={onClose} className="cursor-pointer" />
          </div>
        </div>
        <div className="p-[20px] space-y-[7px] rounded-[4.913px]" ref={modalRef}>
          <div
            className="border border-[#E3E3E3] space-y-[3px] p-[7px]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <h2 className="text-[14px] text-[#444] font-[600] text-center">
              Wallet Address
            </h2>
            <p className="text-[14px] font-[500] text-[#636363] text-center">
              {accountData.address}
            </p>
          </div>
          <div className="border bg-[FFFBF2] bg-[#FFFBF2] border-[#E3E3E3] space-y-[7px] p-[7px]">
            <h4 className="text-center text-[16px] text-[#272626]">
              {" "}
              Total Portfolio on BFX Launch
            </h4>
            <h3 className="text-center text-[#FA0] text-[30px] leading-[100%] font-[700]">
              $5,233.32
            </h3>
            <p className="text-center text-[#02953B] text-[14px]">
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
            <p className="text-[14px] font-[500] text-[#272626] text-center">
              February 5, 2025
            </p>
          </div>
          <div
            className="py-[7px] border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <p className="text-[14px] font-[700] text-[#636363] text-center">
              BFX Listing Price = $0.01
            </p>
          </div>
         <div className="flex justify-between space-x-[10px]">
          <div className="w-[50%] space-y-[10px]">
          <div className="bg-[#F5F5F5] space-y-[10px] p-[10px] h-[230px]">
            <div
            className="py-[3px] px-[5px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgb(227 227 227 / 46%)",
            }}
          >
            <div className="flex space-x-2 items-center">
              <img src={icon1} className="w-[15px] h-[15px] object-cover" alt="" />
              <p className="text-[14px] text-[#636363] font-[700] text-center">
                BFX
              </p>
            </div>
            <p className="text-[14px] text-[#272626] font-[700] text-center">
              12,254.35{" "}
            </p>
          </div>
          <div
            className="py-[3px] px-[5px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgb(227 227 227 / 46%)",
            }}
          >
            <div className="flex space-x-2 items-center">
              <img src={icon2} className="w-[15px] h-[15px] object-cover" alt="" />
              <p className="text-[14px] text-[#636363] font-[600] text-center">
                Bonus BFX
              </p>
            </div>
            <p className="text-[14px] text-[#272626] font-[700] text-center">
              2450.87{" "}
            </p>
          </div>
          <div
            className="py-[3px] px-[5px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgb(227 227 227 / 46%)",
            }}
          >
            <div className="flex space-x-2 items-center">
              <img src={icon3} className="w-[15px] h-[15px] object-cover" alt="" />
              <p className="text-[14px] text-[#636363] font-[700] text-center">
                BFX Rewards
              </p>
            </div>
            <p className="text-[14px] text-[#272626] font-[700] text-center">
              8900
            </p>
          </div>
          <div
            className="py-[3px] px-[5px]  flex justify-between items-center border border-[#D3D3D3]"
            style={{
              background: "rgb(227 227 227 / 46%)",
            }}
          >
            <div className="flex space-x-2 items-center">
              <img src={icon4} className="w-[16px] h-[16px] object-cover" alt="" />
              <p className="text-[14px] text-[#636363] font-[700] text-center">
                USDT Rewards
              </p>
            </div>
            <p className="text-[14px] text-[#272626] font-[700] text-center">
              785
            </p>
          </div>
          <div
            className="py-[3px] px-[5px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgb(227 227 227 / 46%)",
            }}
          >
            <div className="flex space-x-2 items-center">
              <img src={icon5} className="w-[15px] h-[10px] object-cover" alt="" />
              <p className="text-[14px] text-[#636363] font-[700] text-center">
                Trading Account Credits
              </p>
            </div>
            <p className="text-[14px] text-[#272626] font-[700] text-center">
              -
            </p>
          </div>
            </div>
          <div
            className="py-[18.7px] px-[16px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex space-x-2 items-center">
              <img src={icon6} alt="" />
              <p className="text-[14px] text-[#636363] font-[700] text-center">
              Referral Bonus 
              </p>
            </div>
            <p className="text-[14px] text-[#272626] font-[700] text-center">
              -
            </p>
          </div>
          <div>
          <button
          className="text-white bg-[#E5AE00] flex items-center justify-center px-[10px] hover:text-black hover:bg-transparent  text-[10.886px] font-[800] border border-[#E5AE00] hover:border-[#000] w-[100%]  h-[31px]">
            Copy 10% Referral Link <img src={copy} className="ml-2" alt="" />
          </button>
          </div>
          </div>
            <div className="w-[50%] space-y-[10px]">
            <div
            className="pb-[10px] h-[230px] pt-[5px] px-[5px]  flex justify-between"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="relative w-[304px] mx-auto">
              <button className="swiper-button-prev-swp rotate-[182deg] absolute z-10 !left-[-2%] top-[50%] transform -translate-y-1/2">
                <img className="w-[16px] h-[16px]" src={arw} alt="" />
              </button>
              <button className="swiper-button-next-swp  absolute z-20 !right-[-2%] top-[50%] transform -translate-y-1/2">
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
                      <h3 className="text-[14px] text-[#525252] text-center font-[600]">
                        Your Founder’s Club NFT
                      </h3>
                      <div className="flex w-[80%] mx-auto justify-center">
                        <img className="" src={card.img} alt="" />
                      </div>
                      <div className="flex justify-between items-center pt-[10px] space-x-2">
                        <button className="rounded-[2.964px] bg-[#fff] border border-[#E9E9E9] text-[12px] font-[500] text-[#403E3E] px-[2px] w-[100%] py-[3px]">
                         {card.Access}
                        </button>
                        <button className="rounded-[2.964px] bg-[#fff] border border-[#E9E9E9] text-[12px] font-[500] text-[#403E3E] px-[2px] w-[100%] py-[3px]">
                        {card.Bonus} 
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div
            className="py-[8.5px] space-y-[-10px] px-[7px] border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex justify-between space-x-1 items-center">
              <p className="text-[12.187px] text-[#636363] font-[700] text-center">
                $ 1,200 left to reach the next NFT level
              </p>
              <p className="text-[14px] leading-[100%] text-[#E5AE00] font-[700] text-center">
                $2,500
              </p>
            </div>
              <input 
               type="range"
               min="0"
               max="100"
               value={value}
               onChange={handleChange}
               className="custom-range -mt-2"
               style={{
                 background: `linear-gradient(to right,  #E5AE00 ${value}%, #DDD ${value}%)`
               }}
              />
          </div>
          <div
            className="w-[100%]"
          >
          <button
          onClick={onClose}
          className="text-white bg-[#E5AE00] px-[10px] hover:text-black hover:bg-transparent  text-[10.886px] font-[800] border border-[#E5AE00] hover:border-[#000] w-[100%]  h-[31px]">
            Disconnect
          </button>
          </div>
            </div>
         </div>
          <div
          className="py-[9px] border border-[#D3D3D3] w-[100%] mx-auto "
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <div className="flex justify-center space-x-[10px] items-center">
            <h4 className="text-center text-[#808080] text-[12px] leading-[85%] font-[500]">
            Audited by the Leading Blockchain Security Company  
            </h4>
            <div className="w-[88px]">
              <img src={cer} className="" alt="" />
            </div>
          </div>
        </div>
        </div>
        </div>
       </div>
      </div>
    </div>
   {/* desktop version end */}

   {/* mobile version */}
   <div className=" 2xl:hidden xl:hidden w-[100%] lg:hidden md:hidden sm:flex flex justify-center items-center">
      <div className="overflow-y-scroll h-[670px] pt-[35px] w-[98%] flex justify-center rounded-[8px]"
       ref={mobileModalRef}
      >
        <div className="w-[90%] rounded-lg relative h-[1040px] bg-[#fff] ">
        <div className="flex justify-center pt-[24px]">
          <div className="border-[#B0B0B0] bg-[#F5F5F5] absolute top-[1%] border rounded-[5.725px] py-[0px] mx-auto w-[190px]">
            <p className="text-[14px] font-[700] text-center">
              Personal Dashboard
            </p>
          </div>
          <div className="absolute top-[-15px] right-[-15px]">
           <img src={cross} alt=""  onClick={onClose} className="cursor-pointer" />
          </div>
        </div>
        <div className="border border-[#E3E3E3] p-[20px] space-y-[7px] rounded-[4.913px]">
          <div
            className="border border-[#E3E3E3] space-y-[3px] p-[7px]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <h2 className="text-[14px] text-[#444] font-[600] text-center">
              Wallet Address
            </h2>
            <p className="text-[14px] font-[500] text-[#636363] text-center">
              0x7bb9Ed8Df7656b...870840d214e!
            </p>
          </div>
          <div className="border bg-[FFFBF2] bg-[#FFFBF2] border-[#E3E3E3] space-y-[7px] p-[7px]">
            <h4 className="text-center text-[14px] text-[#272626]">
              {" "}
              Total Portfolio on BFX Launch
            </h4>
            <h3 className="text-center text-[#FA0] text-[30px] leading-[100%] font-[700]">
              $5,233.32
            </h3>
            <p className="text-center text-[#02953B] text-[14px]">
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
            <p className="text-[14px] font-[500] text-[#272626] text-center">
              February 5, 2025
            </p>
          </div>
          <div
            className="py-[7px] border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <p className="text-[14px] font-[700] text-[#636363] text-center">
              BFX Listing Price = $0.01
            </p>
          </div>
         <div className="block justify-between space-y-[10px]">
          <div className="w-[100%] space-y-[10px]">
          <div className="bg-[#F5F5F5] space-y-[10px] p-[10px]">
            <div
            className="py-[3px] px-[5px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex space-x-2 items-center">
              <img src={icon1} className="w-[15px] h-[15px] object-cover" alt="" />
              <p className="text-[14px] text-[#636363] font-[700] text-center">
                BFX
              </p>
            </div>
            <p className="text-[14px] text-[#272626] font-[700] text-center">
              12,254.35{" "}
            </p>
          </div>
          <div
            className="py-[3px] px-[5px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex space-x-2 items-center">
              <img src={icon2} className="w-[15px] h-[15px] object-cover" alt="" />
              <p className="text-[14px] text-[#636363] font-[600] text-center">
                Bonus BFX
              </p>
            </div>
            <p className="text-[14px] text-[#272626] font-[700] text-center">
              2450.87{" "}
            </p>
          </div>
          <div
            className="py-[3px] px-[5px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex space-x-2 items-center">
              <img src={icon3} className="w-[15px] h-[15px] object-cover" alt="" />
              <p className="text-[14px] text-[#636363] font-[700] text-center">
                BFX Rewards
              </p>
            </div>
            <p className="text-[14px] text-[#272626] font-[700] text-center">
              8900
            </p>
          </div>
          <div
            className="py-[3px] px-[5px]  flex justify-between items-center border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex space-x-2 items-center">
              <img src={icon4} className="w-[16px] h-[16px] object-cover" alt="" />
              <p className="text-[14px] text-[#636363] font-[700] text-center">
                USDT Rewards
              </p>
            </div>
            <p className="text-[14px] text-[#272626] font-[700] text-center">
              785
            </p>
          </div>
          <div
            className="py-[3px] px-[5px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex space-x-2 items-center">
              <img src={icon5} className="w-[15px] h-[10px] object-cover" alt="" />
              <p className="text-[14px] text-[#636363] font-[700] text-center">
                Trading Account Credits
              </p>
            </div>
            <p className="text-[14px] text-[#272626] font-[700] text-center">
              -
            </p>
          </div>
            </div>
          </div>
            <div className="w-[100%] space-y-[10px]">
            <div
            className="pb-[10px] pt-[8px] px-[5px]  flex justify-between"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="relative w-[100%] mx-auto">
              <button className="swiper-button-prev-swp rotate-[182deg] absolute z-10 !left-[-3%] top-[50%] transform -translate-y-1/2">
                <img className="w-[16px] h-[16px]" src={arw} alt="" />
              </button>
              <button className="swiper-button-next-swp  absolute z-20 !right-[-3%] top-[50%] transform -translate-y-1/2">
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
                      <h3 className="text-[10px] text-[#525252] text-center font-[600]">
                        Your Founder’s Club NFT
                      </h3>
                      <div className="flex w-[80%] mx-auto justify-center">
                        <img className="" src={card.img} alt="" />
                      </div>
                      <div className="flex justify-between items-center pt-[17px] space-x-2">
                        <button className="rounded-[2.964px] bg-[#fff] border border-[#E9E9E9] text-[10px] font-[500] text-[#403E3E] px-[2px] w-[100%] py-[3px]">
                          {card.Access}
                        </button>
                        <button className="rounded-[2.964px] bg-[#fff] border border-[#E9E9E9] text-[10px] font-[500] text-[#403E3E] px-[2px] w-[100%] py-[3px]">
                          {card.Bonus}
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div
            className="py-[8.5px] space-y-[-10px] px-[7px] border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex justify-between space-x-1 itmes-center">
              <p className="text-[9.187px] text-[#636363] font-[700] text-center">
                $ 1,200 left to reach the next NFT level
              </p>
              <p className="text-[14px] leading-[100%] text-[#E5AE00] font-[700] text-center">
                $2,500
              </p>
            </div>
              <input 
               type="range"
               min="0"
               max="100"
               value={value}
               onChange={handleChange}
               className="custom-range -mt-2"
               style={{
                 background: `linear-gradient(to right,  #E5AE00 ${value}%, #DDD ${value}%)`
               }}
              />
          </div>
            </div>
         </div>
          <div
          className="py-[9px] border border-[#D3D3D3] w-[100%] mx-auto "
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <div className="flex flex-col justify-center space-y-[10px] items-center">
            <h4 className="text-center text-[#808080] text-[10px] leading-[85%] font-[500]">
            Audited by the Leading Blockchain Security Company  
            </h4>
            <div className="w-[71px]">
              <img src={cer} className="" alt="" />
            </div>
          </div>
        </div>
        <div
            className="py-[10px] px-[16px]  flex justify-between border border-[#D3D3D3]"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <div className="flex space-x-2 items-center">
              <img src={icon6} alt="" />
              <p className="text-[10px] text-[#636363] font-[700] text-center">
              Referral Bonus 
              </p>
            </div>
            <p className="text-[14px] text-[#272626] font-[700] text-center">
              -
            </p>
          </div>
          
         <div
            className="w-[100%] flex items-center space-x-3 justify-between"
          >
             <button
          className="text-white bg-[#E5AE00] flex items-center justify-center px-[10px] hover:text-black hover:bg-transparent  text-[7.886px] font-[800] border border-[#E5AE00] hover:border-[#000] w-[100%]  h-[31px]">
            Copy 10% Referral Link <img src={copy} className="ml-1" alt="" />
          </button>
          <button
          onClick={onClose}
          className="text-white bg-[#E5AE00] px-[10px] hover:text-black hover:bg-transparent  text-[7.886px] font-[800] border border-[#E5AE00] hover:border-[#000] w-[100%]  h-[31px]">
            Disconnect
          </button>
          </div>
        </div>
        </div>
      </div>
    </div>
   {/* mobie version end */}
   </div>
  );
};

export default DashboardPopup;
