"use client";

import React from "react";
import TraderCard from "./TraderCard";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const copytraderData = [
  // Your copytrader data
  { id: 1, name: "Karishma", followers: 100, pnl: "5%", roi: "2%", aum: "1000", mdd: "1%", actionType: "copy", period: "7D" },
  { id: 2, name: "John Doe", followers: 150, pnl: "3%", roi: "1.5%", aum: "1500", mdd: "0.5%", actionType: "stop", period: "7D" },
  { id: 2, name: "John Doe", followers: 150, pnl: "3%", roi: "1.5%", aum: "1500", mdd: "0.5%", actionType: "stop", period: "7D" },
  { id: 2, name: "John Doe", followers: 150, pnl: "3%", roi: "1.5%", aum: "1500", mdd: "0.5%", actionType: "stop", period: "7D" },
  { id: 2, name: "John Doe", followers: 150, pnl: "3%", roi: "1.5%", aum: "1500", mdd: "0.5%", actionType: "stop", period: "7D" },
  // Add more trader data as needed
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

      <div className="flex align-center justify-between mb-5 mt-10">
        <div className="self-start text-xl font-bold leading-none text-neutral-800">
          Top traders of the week
        </div>

        <a
          href="/copy-trading/top-traders"
          className="overflow-hidden z-10 gap-1.5 self-end px-3 py-1.5 -mt-6 text-xs font-semibold rounded border border-solid border-neutral-800 min-h-[24px] text-neutral-800"
        >
          View All
        </a>
      </div>

      <Swiper
  slidesPerView={3} // Default slides per view on larger screens
  spaceBetween={25} // Space between slides
  pagination={{
    clickable: true,
  }}
  autoplay={true}
  modules={[Navigation, Pagination]}
  className="mySwipertraders"
  breakpoints={{
    // When the window width is >= 0px (mobile), show 1 slide
    0: {
      slidesPerView: 1,
      spaceBetween: 10, // Adjust space for mobile
    },
    // When the window width is >= 768px (tablet and larger), show 2 slides
    768: {
      slidesPerView: 2,
      spaceBetween: 20, // Adjust space for tablet
    },
    // When the window width is >= 1024px (desktop and larger), show 3 slides
    1024: {
      slidesPerView: 3,
      spaceBetween: 25, // Adjust space for desktop
    },
  }}
>
  {copytraderData.map((trader) => (
    <SwiperSlide key={trader.id}> {/* Use trader.id as the key */}
      <TraderCard copytraderData={[trader]} /> {/* Pass only the current trader's data */}
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
}

export default TopTraders;
