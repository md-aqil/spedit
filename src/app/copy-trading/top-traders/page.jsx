"use client";
import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import DashboardIcons from "../components/DashboardIcons";

import Onboarding from "../components/Onboarding";
import StrategyCard from "../components/strategy-card";

function TopTraders() {
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
      {/* <Header /> */}

      <div className="z-10 w-full max-md:max-w-full main-body">
        <Sidebar />

        <main className="flex flex-col main-container">
          <DashboardIcons />

          <header className="flex flex-wrap gap-10 justify-between mb-5">
            <h1 className="self-stretch my-auto text-xl font-bold leading-none text-black">Top Traders</h1>
            <nav className="flex gap-4 items-center self-stretch my-auto">
              <span className="icon-refresh text-2xl"></span>
              <span className="icon-eye-slash text-2xl"></span>
            </nav>
          </header>

          <StrategyCard />
        </main>
      </div>
    </div>
  );
}

export default TopTraders;
