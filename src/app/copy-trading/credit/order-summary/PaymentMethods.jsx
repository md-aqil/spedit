'use client'
import React, { useState } from "react";

import Image from "next/image";
import cardBlack from "../../../../assets/card-black.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import { Autoplay, Pagination, Navigation, EffectCoverflow, EffectCards } from "swiper/modules";

import Link from "next/link"; 


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
        
              <Swiper
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                pagination={true}
                slidesPerView={2}
                autoplay={{ delay: 2500, disableOnInteraction: false }}

                effect={'coverflow'}
                coverflowEffect={{
                  rotate: -10,
        stretch: 50,
        depth: 100,
        modifier: 2,
        slideShadows: true,
                }}

          
                className="w-full"
                modules={[Navigation, Pagination, EffectCoverflow]}
              >
                <SwiperSlide className="rounded-xl shadow-lg bg-white">
                  <Image className="w-full" src={cardBlack} alt="Card Black" />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl shadow-lg bg-white">
                  <Image className="w-full" src={cardBlack} alt="Card Black" />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl shadow-lg bg-white">
                  <Image className="w-full" src={cardBlack} alt="Card Black" />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl shadow-lg bg-white">
                  <Image className="w-full" src={cardBlack} alt="Card Black" />
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
                <div className="flex gap-3 h-12">
                  <Link href="/copy-trading/credit/order-success/" className="btn !px-10">
                    Pay
                  </Link>

                  <button className="btn btn-outline">
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
