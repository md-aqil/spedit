
'use client'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import SwiperCore, { EffectCoverflow } from 'swiper';

import cardBlack from "../../../../assets/card-black.png";
import Image from "next/image";



// Initialize Swiper modules
SwiperCore.use([EffectCoverflow]);

export default function PaymentMethods() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  


  return (
    <section className="flex overflow-hidden flex-col items-center py-14  mx-auto w-full bg-white">
      <header className="flex flex-col justify-center self-stretch w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between w-full leading-none max-md:max-w-full">
          <h2 className="flex gap-2 items-center my-auto text-xl font-bold text-neutral-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e83dfbda5d19489a5221744aa69e1273799a1c13ace3ca93243020c90d0b470a?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt="Saved Card Icon"
              className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
            />
            <span className="self-stretch my-auto cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Saved Card
            </span>

            <svg
              className={`w-4 h-4 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </h2>

          <div className="flex gap-4">
          {/* Saved Debit Cards Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-md min-h-[44px]">
            <img
              loading="lazy"
              src=""
              alt="Saved Debit Cards"
              className="w-4 h-4"
            />
            <span>Saved Debit Cards</span>
          </button>
          
          {/* Add Card Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-md min-h-[44px]">
            <img
              loading="lazy"
              src=""
              alt="Add Card"
              className="w-4 h-4"
            />
            <span>Add Card</span>
          </button>
        </div>


        </div>
        {isDropdownOpen && (
          <>
         
          <div className="flex flex-col self-center mt-6 w-full">
          {/* Swiper Slider with Effect */}
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'3'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className="w-full"
          >
            <SwiperSlide className="rounded-xl shadow-lg bg-white">
              <Image src={cardBlack} />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl shadow-lg bg-white">
              <Image src={cardBlack} />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl shadow-lg bg-white">
              <Image src={cardBlack} />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl shadow-lg bg-white">
              <Image src={cardBlack} />
            </SwiperSlide>
            {/* Add more SwiperSlide components here for more images/cards */}
          </Swiper>
          <div className="flex flex-wrap gap-10 justify-between mt-5">
            <div className="flex flex-col text-base text-neutral-800 ">
              <label
                htmlFor="cvvInput"
                className="font-bold leading-none opacity-80"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvvInput"
                aria-label="CVV"
                className="flex flex-col justify-center items-start px-5 py-2.5 mt-3 max-w-full rounded-lg bg-stone-50 w-[290px]"
                placeholder="Eg: 243"
              />
            </div>
            <div className="flex gap-3 text-sm font-bold leading-none text-center whitespace-nowrap min-w-[240px]">
              <button className="gap-1 self-stretch px-3 py-4 my-auto bg-lime-500 rounded min-h-[44px] text-stone-950 w-[122px]">
                Pay
              </button>
              <button className="gap-1 self-stretch px-3 py-4 my-auto rounded border border-solid border-neutral-800 min-h-[44px] text-neutral-800 w-[126px]">
                Cancel
              </button>
            </div>
          </div>
        </div>
          </>
        )}

       
      </header>
    </section>
  );
}
