"use client";
import React, { useState } from "react";
import PositionCard from "./PositionCard";
import LivePositionsList from "./LivePositionsList";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardIcons from "../components/DashboardIcons";

const positionsData = [
  {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47,
  },
  {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47,
  },
  {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47,
  },
  {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: 47.5654,
    roi: 0.47,
  },
  {
    name: "Md Aquil",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: 47.5654,
    roi: 0.47,
  },
  // Add additional positions as needed
];

function LivePositions() {
  const [isListView, setIsListView] = useState(false);

  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
      {/* <Header />   */}
      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex gap-5 max-md:flex-col w-full">
          <Sidebar />
          <main className="flex flex-col main-container">
            <DashboardIcons />
            <header className="flex flex-wrap gap-10 justify-between items-center w-full">
              <h1 className="self-stretch my-auto text-xl font-bold leading-none text-black">
                Live Positions
              </h1>
              <nav className="flex gap-4 items-center self-stretch my-auto">
                {/* <span
                  onClick={() => setIsListView(!isListView)}
                  loading="lazy"
                  className="aspect-square cursor-pointer icon-firstline text-2xl"
                /> */}
          <span className="icon-refresh"></span>

              </nav>
            </header>

            

            <main className="w-full flex w-full mt-5 ">
              {isListView ? (
                <LivePositionsList positions={positionsData} />
              ) : (
                <div className="flex flex-wrap grow gap-5 items-center leading-none max-md:mt-5">
                  {positionsData.map((position, index) => (
                    <PositionCard key={index} {...position} />
                  ))}
                </div>
              )}
            </main>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LivePositions;
