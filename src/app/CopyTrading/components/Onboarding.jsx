"use client";

import React, { useState } from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import processIcon from "../../../assets/process.svg";

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
      <div
        className={`fixed inset-0 z-10 flex items-start justify-center transition-transform duration-300 ease-out ${
          open ? "translate-y-0" : "-translate-y-full"
        } bg-black bg-opacity-50`}
      >
        <div
          className="w-full bg-white shadow-lg"
          style={{
            transition: "transform 0.3s ease-out",
            transform: open ? "translateY(0)" : "translateY(-100%)",
          }}
        >
          <section className="container h-full">
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
              pagination={{
                clickable: true,
               
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <main className="flex flex-wrap justify-center items-center font-black text-stone-950 gap-28">
                  <section className="flex flex-col self-stretch my-auto min-w-[240px] w-[514px] max-md:max-w-full">
                    <h1 className="text-5xl max-md:max-w-full">
                      <span className="font-medium">
                        Profit from the markets
                      </span>
                      <span> no matter the experience</span>
                    </h1>
                    <p className="mt-6 text-base font-medium leading-6 text-neutral-500 max-md:max-w-full">
                      Beginner to trading or don’t have time to analyse and
                      monitor trade? With
                      <span className="font-bold"> SPEDIT</span> you can copy
                      your favorite lead trader. And if you are a lead trader
                      yourself, share your strategies to earn monthly
                      subscription fees.
                    </p>
                  </section>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/175228524d2384ac782a1f57a3d2af2507639bdde6f9773338c6f0dc4aad7dbe?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                    alt="Description of the hero image"
                    className="object-contain self-stretch my-auto aspect-[0.93] min-w-[240px] w-[500px] max-md:max-w-full"
                  />
                </main>
              </SwiperSlide>
              <SwiperSlide>
                <section className="flex flex-col px-44">
                  <h2 className="text-3xl font-medium text-stone-950 max-md:max-w-full mt-10 ml-8">
                    <span className="font-bold">Why </span>use our platform?
                  </h2>
                  <div className="flex overflow-hidden flex-wrap gap-4 items-start py-7 pr-6 pl-7  w-full text-center rounded-2xl bg-stone-50 max-md:px-5 max-md:max-w-full">
                    <article className="flex flex-col grow shrink justify-center px-6 py-12 rounded-xl bg-neutral-900 min-h-[318px] w-[187px] max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cb124447fd3694c7139ae5106998d584a8e7b1d6e70263ca975f2448bce8a02?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                        alt="User Friendly"
                        className="object-contain self-center w-20 aspect-square"
                      />
                      <div className="flex flex-col mt-8 w-full">
                        <h3 className="text-base font-bold leading-none text-white">
                          User Friendly
                        </h3>
                        <p className="mt-2 text-base leading-5 text-stone-300">
                          Our platform is designed with simplicity in mind,
                          making it easy for anyone to start copy trading.
                        </p>
                      </div>
                    </article>
                    <article className="flex flex-col grow shrink justify-center px-6 py-12 bg-white rounded-xl min-h-[318px] w-[187px] max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/047c1bf422da010299f257d8e460156f83dfaf40d61a98859e761166bf2c8738?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                        alt="Real Time"
                        className="object-contain self-center w-20 aspect-square"
                      />
                      <div className="flex flex-col mt-8 w-full">
                        <h3 className="text-base font-bold leading-none text-black">
                          Real Time
                        </h3>
                        <p className="mt-2 text-base leading-5 text-neutral-500">
                          Lead traders' trades will be copied to your account in
                          real time as and when they trade.
                        </p>
                      </div>
                    </article>
                    <article className="flex flex-col grow shrink justify-center px-6 py-10 bg-white rounded-xl min-h-[318px] min-w-[240px] w-[200px] max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3ad7d88825fa0c80a454d37b21d44d9144980802b49e8cb97af3a469c0916ae?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                        alt="Trade Anytime Anywhere"
                        className="object-contain self-center w-20 aspect-square"
                      />
                      <div className="flex flex-col items-start mt-8 w-full">
                        <h3 className="text-base font-bold leading-none text-black">
                          Trade Anytime Anywhere
                        </h3>
                        <p className="mt-2 text-base leading-5 text-neutral-500">
                          Access our platform from any device from anyplace,
                          allowing you to trade on the go.
                        </p>
                      </div>
                    </article>
                    <article className="flex flex-col grow shrink justify-center px-6 py-10 bg-white rounded-xl min-h-[318px] min-w-[240px] w-[202px] max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3ad7d88825fa0c80a454d37b21d44d9144980802b49e8cb97af3a469c0916ae?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                        alt="Leverage their Expertise"
                        className="object-contain self-center w-20 aspect-square"
                      />
                      <div className="flex flex-col mt-8 w-full">
                        <h3 className="text-base font-bold leading-none text-black">
                          Leverage their Expertise
                        </h3>
                        <p className="mt-2 text-base leading-5 text-neutral-500">
                          Benefit from the strategies of expert traders and
                          improve your own trading performance.
                        </p>
                      </div>
                    </article>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mx-auto max-w-[1000px;]">
                  <h2 className="text-3xl font-medium text-stone-950 max-md:max-w-full mt-10 ml-8 mb-10">
                    The process is{" "}
                    <span className="font-bold">quick and easy </span>
                  </h2>
                  <Image
                    className="w-full"
                    src={processIcon}
                    alt="Process Icon"
                  />
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="flex justify-center my-5">
              <a
                href="/CopyTrading/leaderboard"
                className="flex overflow-hidden gap-4 justify-center items-center self-start px-9 py-3.5 text-base whitespace-nowrap bg-lime-500 rounded-md max-md:px-5"
                tabIndex="0"
                role="button"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/60fee776a94c6e45e257178b87b618cdfa0615402efe5070acc9b16a997e29d5?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  alt="Explore"
                  className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-square w-[22px]"
                />
                <span className="self-stretch my-auto">Explore</span>
              </a>
            </div>
          </section>

          {/* Custom Navigation and Pagination */}
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev swiper-button-bottom"></div>
          <div className="swiper-button-next swiper-button-bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
