'use client'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from "next/image";
import cardBlack from "../../../../assets/card-black.png";

import { Navigation, Pagination } from "swiper/modules";




// Initialize Swiper modules

export default function PaymentMethods() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  return (
    <section className="flex overflow-hidden flex-col items-center py-14 mx-auto w-full bg-white">
      <header className="flex flex-col justify-center self-stretch w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between w-full leading-none max-md:max-w-full">
          <h2 className="flex gap-2 items-center my-auto text-xl font-bold text-neutral-800">
           
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
              <i className="icon-card"></i>
              <span>Saved Debit Cards</span>
            </button>

            {/* Add Card Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-md min-h-[44px]">
              <i className="icon-card-add"></i>
              <span>Add Card</span>
            </button>
          </div>
        </div>

        {isDropdownOpen && (
          <>
            <div className="flex flex-col self-center mt-6 w-full">
              {/* Swiper Slider with Pagination and Autoplay */}
              <Swiper
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
          
                className="w-full"
                modules={[Navigation, Pagination]}
              >
                <SwiperSlide className="rounded-xl shadow-lg bg-white">
                  <Image src={cardBlack} alt="Card Black" />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl shadow-lg bg-white">
                  <Image src={cardBlack} alt="Card Black" />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl shadow-lg bg-white">
                  <Image src={cardBlack} alt="Card Black" />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl shadow-lg bg-white">
                  <Image src={cardBlack} alt="Card Black" />
                </SwiperSlide>
              </Swiper>

              <div className="flex flex-wrap gap-10 justify-between mt-5">
                <div className="flex flex-col text-base text-neutral-800">
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
                    className="flex px-5 py-2.5 mt-3 max-w-full rounded-lg border border-gray-300 bg-stone-50 w-[290px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
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
