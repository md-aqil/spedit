"use client";

import React from "react";
import TraderCard from "./TraderCard";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import avatarF from "../../../assets/avatar-f.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const traders = [
  {
    name: "Karishma",
    rating: 502,
    avatar: avatarF,
    pnl: 74100.23,
    roi: 5.71,
    aum: 74100.23,
    mdd: 1.27,
    chart: "./chart.svg",
  },
  {
    name: "Karishma",
    rating: 502,
    avatar: avatarF,
    pnl: 74100.23,
    roi: 5.71,
    aum: 74100.23,
    mdd: 1.27,
    chart: "./chart.svg",
  },
  {
    name: "Karishma",
    rating: 502,
    avatar: avatarF,
    pnl: 74100.23,
    roi: 5.71,
    aum: 74100.23,
    mdd: 1.27,
    chart: "./chart.svg",
  },
  {
    name: "Karishma",
    rating: 502,
    avatar: avatarF,
    pnl: 74100.23,
    roi: 5.71,
    aum: 74100.23,
    mdd: 1.27,
    chart: "./chart.svg",
  },
];

function TopTraders() {
  return (
    <div className="w-full mx-auto relative">
      <style jsx>{`
        /* Swiper Pagination Bullets */
        .swiper-pagination-bullet {
          background: #a2ab9a !important;
          opacity: 0.5 !important;
        }

        .swiper-pagination-bullet-active {
          background: #9bec00 !important;
        }

        /* Swiper Navigation Buttons */
        .swiper-button-prev,
        .swiper-button-next {
          border: 1px solid #a2ab9a !important;
          color: #a2ab9a !important;
          --swiper-navigation-size: 24px !important;
          padding: 18px !important;
          border-radius: 4px !important;
          position: absolute !important;
          bottom: 10px !important;
        }

        .swiper-button-prev {
          left: 10px !important;
        }

        .swiper-button-next {
          right: 10px !important;
        }

        /* Position Pagination at the Bottom Center */
        .swiper-pagination {
          bottom: 10px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
        }
      `}</style>

      <div className="flex align-center justify-between mb-5">
        <div className="self-start text-xl font-bold leading-none text-neutral-800">Top traders of the week</div>

        <div className="overflow-hidden z-10 gap-1.5 self-end px-3 py-1.5 -mt-6 text-xs font-semibold rounded border border-solid border-neutral-800 min-h-[24px] text-neutral-800">
          View All
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper pb-44"
      >
        {traders.map((trader, index) => (
          <SwiperSlide key={index}>
            <TraderCard {...trader} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopTraders;
