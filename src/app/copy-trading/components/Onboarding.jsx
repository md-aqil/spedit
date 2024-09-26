"use client";

import React, { useState, useEffect } from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import processIcon from "../../../assets/process.svg";
import arrowupsquare from "../../../assets/arrow-up-square.svg";
import logo from "../../../assets/logo.svg";
import whychoose from "../../../assets/whychoose.svg";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

function Onboarding() {
  const [open, setOpen] = useState(true); // By default, the dialog is open

  return (
    <div className="flex flex-col items-center justify-center">
    
      {/* Dialog */}
      {open && (
        <div
          className="fixed inset-0 z-10 flex items-start justify-center bg-black bg-opacity-50 transition-transform duration-300 ease-out h-full"
        >
          <div className="w-full bg-white shadow-lg h-[90%] overflow-y-auto">
            <section className="container mx-auto">
              <header className="mx-16 my-5">
                <Image src={logo} alt="Company Logo" />
              </header>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true }}
              >
                {/* Slide 1 */}
                <SwiperSlide>

                  <main className="flex justify-center items-center font-black text-stone-950 gap-15  w-[70%] mx-auto ">
                    <section className="flex flex-col self-stretch my-auto ">
                      <h1 className="text-5xl">
                        <span className="font-medium">Profit from the markets</span>
                        <span> no matter the experience</span>
                      </h1>
                      <p className="mt-6 text-base font-medium leading-6 text-neutral-500">
                        Beginner to trading or don’t have time to analyse and monitor trade? With
                        <span className="font-bold"> SPEDIT</span> you can copy your favorite lead trader. And if you are a lead trader yourself, share your strategies to earn
                        monthly subscription fees.
                      </p>
                    </section>
                    <Image
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/175228524d2384ac782a1f57a3d2af2507639bdde6f9773338c6f0dc4aad7dbe?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                      alt="Market strategy representation"
                      width={400}
                      height={400}
                      className="object-contain"
                    />
                  </main>
                </SwiperSlide>

            
                {/* Slide 3 */}
                <SwiperSlide>
                  <div className="mx-auto max-w-[1000px]">
                    <h2 className="text-3xl font-medium text-stone-950 mt-10 ml-8 mb-10">
                    Why <span className="font-bold">use our platform? </span>
                    </h2>
                    <Image
                      src={whychoose}
                      alt="Process visualization"
                     
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="mx-auto max-w-[1000px]">
                    <h2 className="text-3xl font-medium text-stone-950 mt-10 ml-8 mb-10">
                      The process is <span className="font-bold">quick and easy </span>
                    </h2>
                    <Image
                      src={processIcon}
                      alt="Process visualization"
                     
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>

              </Swiper>

              {/* Explore Button */}
              <div className="flex justify-center my-5">
                <a
                  href="/copy-trading/leader-board"
                  className="flex gap-4 justify-center items-center px-9 py-3.5 text-base bg-lime-500 rounded-md"
                >
                  <Image
                    loading="lazy"
                    src={arrowupsquare}
                    alt="Explore button"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                  <span>Explore</span>
                </a>
              </div>
            </section>

            {/* Custom Navigation */}
            <div className="swiper-button-prev swiper-button-bottom"></div>
            <div className="swiper-button-next swiper-button-bottom"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Onboarding;
