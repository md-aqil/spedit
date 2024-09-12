"use client";

import React, { useState, useEffect } from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import processIcon from "../../../assets/process.svg";
import arrowupsquare from "../../../assets/arrow-up-square.svg";
import logo from "../../../assets/logo.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

function Onboarding() {
  const [open, setOpen] = useState(true); // By default, the dialog is open

  return (
    <div className="flex flex-col items-center justify-center">
      <style jsx>{`
        .swiper-pagination-vertical .swiper-pagination-bullet {
          background: #a2ab9a;
          opacity: 0.5;
          margin: 12px 0 !important;
          gap: 10px;
        }

        .swiper-pagination-vertical .swiper-pagination-bullet-active {
          background: #9bec00 !important;
        }

        .swiper-pagination-vertical {
          position: absolute;
          left: 98%;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          justify-content: flex-end;
        }

        .swiper-button-prev,
        .swiper-button-next {
          border: 1px solid #a2ab9a;
          color: #a2ab9a;
          --swiper-navigation-size: 24px;
          padding: 18px;
          border-radius: 4px;
        }

        .swiper-button-bottom {
          position: absolute;
          top: 90%;
        }
      `}</style>

      {/* Dialog */}
      {open && (
        <div
          className="fixed inset-0 z-10 flex items-start justify-center bg-black bg-opacity-50 transition-transform duration-300 ease-out"
        >
          <div className="w-full bg-white shadow-lg">
            <section className="container h-full">
              <header className="mx-20 my-5">
                <Image src={logo} alt="Company Logo" />
              </header>

              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
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
                  <main className="flex flex-wrap justify-center items-center font-black text-stone-950 gap-28">
                    <section className="flex flex-col self-stretch my-auto min-w-[240px] w-[514px]">
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
                      width={500}
                      height={500}
                      className="object-contain"
                    />
                  </main>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                  <section className="flex flex-col px-44">
                    <h2 className="text-3xl font-medium text-stone-950 mt-10 ml-8">
                      <span className="font-bold">Why </span>use our platform?
                    </h2>
                    <div className="flex flex-wrap gap-4 items-start py-7 pr-6 pl-7 bg-stone-50 rounded-2xl">
                      {/* User Friendly */}
                      <article className="flex flex-col px-6 py-12 rounded-xl bg-neutral-900 min-h-[318px] w-[187px]">
                        <Image
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cb124447fd3694c7139ae5106998d584a8e7b1d6e70263ca975f2448bce8a02?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                          alt="User-friendly interface icon"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                        <h3 className="mt-8 text-base font-bold text-white">User Friendly</h3>
                        <p className="mt-2 text-base text-stone-300">
                          Our platform is designed with simplicity in mind, making it easy for anyone to start copy trading.
                        </p>
                      </article>

                      {/* Real Time */}
                      <article className="flex flex-col px-6 py-12 bg-white rounded-xl min-h-[318px] w-[187px]">
                        <Image
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/047c1bf422da010299f257d8e460156f83dfaf40d61a98859e761166bf2c8738?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                          alt="Real-time trade execution icon"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                        <h3 className="mt-8 text-base font-bold text-black">Real Time</h3>
                        <p className="mt-2 text-base text-neutral-500">
                          Lead traders' trades will be copied to your account in real time.
                        </p>
                      </article>

                      {/* Add more articles as needed */}
                    </div>
                  </section>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                  <div className="mx-auto max-w-[1000px]">
                    <h2 className="text-3xl font-medium text-stone-950 mt-10 ml-8 mb-10">
                      The process is <span className="font-bold">quick and easy </span>
                    </h2>
                    <Image
                      src={processIcon}
                      alt="Process visualization"
                      width={500}
                      height={500}
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
