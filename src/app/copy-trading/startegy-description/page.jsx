"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TraderCard2 from "../components/TraderCard2";
import PerformanceCard from "../components/PerformanceCard";
import PositionTable from "../components/PositionTable";
import DashboardIcons from "../components/DashboardIcons";
import { useSearchParams } from "next/navigation";
import TradeHistoryTable from "../trade-history/TradeHistoryTable";
import CopiersTable from "../lead-trader-management/CopiersTable"

import Link from "next/link";


export default function StrategyDescription({ handleCopyClick, showParameters, showConfirmTour }) {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("positions");
  const [handleCopy, setHandleCopy] = useState(false);

  const params = useSearchParams();

  const traderData = {
    traderId: "16473i",
    name: "Tanya",
    rating: "502",
    daysTrading: "195",
    currentCopiers: "950",
    allTimeCopiers: "1950",
    mockCopiers: "195",
    leadingMarginBalance: "1428496.89 INR",
    aum: "12245434.90 INR",
    minInvestmentReqd: "40000 INR",
    risk: "Moderate",
    copierPnL: "28496.89 INR",
    roiPercent: "4.52",
  };

  const performanceData = {
    mdd: "1.25%",
    winRate: "57.000%",
    profitablePositions: "122",
    totalPositions: "2014",
    roi: "5.71%",
    pnl: "94,23.5",
  };

  const positionsData = [
    {
      orderId: "1233467i",
      timeData: "12/12/2023 11:25:32",
      instrument: "BankNifty 24 JUL26400PE",
      qty: "50",
      entryPrice: "700.70",
      currentPrice: "700.70",
      runningPnL: "19,423.5",
    },
    // More position data...
  ];

  useEffect(() => {
    if (params.get("name") === "copyStepOpen") {
      setHandleCopy(true);
    }
  }, []);
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
      {/* <Header /> */}
      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex gap-5 w-full">
          <Sidebar />

          <div className="flex flex-col main-container">
            <DashboardIcons />

            <div className="flex gap-10 justify-between items-start w-full strat-row">
             
            
            <TraderCard2 {...traderData} />
            
             
              <PerformanceCard handleCopy={handleCopy} handleCopyClick={handleCopyClick} showParameters={showParameters} showConfirmTour={showConfirmTour} {...performanceData} />
            </div>

            {/* Tabs Section */}
            <div className="flex flex-col mt-10">
              {/* Navigation Tabs */}
              <nav className="flex flex-col w-full bg-white rounded-lg shadow-sm tb-tab">
                <ul className="flex gap-6 items-center pl-6 pb-2 text-sm font-medium text-neutral-500 tb-tab-list max-md:mb-5">
                  <li
                    className={`relative px-4 py-3 cursor-pointer ${activeTab === "positions" ? "text-neutral-800  tb-tab-active" : "text-neutral-500"}`}
                    onClick={() => setActiveTab("positions")}
                  >
                    Positions
                    {activeTab === "positions" && <span className="absolute left-0 bottom-0 w-full h-1 bg-lime-500 rounded-t-md" />}
                  </li>

                  <li
                    className={`relative px-4 py-3 cursor-pointer ${activeTab === "history" ? "text-neutral-800  tb-tab-active" : "text-neutral-500"}`}
                    onClick={() => setActiveTab("history")}
                  >
                    Position History
                    {activeTab === "history" && <span className="absolute left-0 bottom-0 w-full h-1 bg-lime-500 rounded-t-md" />}
                  </li>

                  <li
                    className={`relative px-4 py-3 cursor-pointer ${activeTab === "copiers" ? "text-neutral-800  tb-tab-active" : "text-neutral-500"}`}
                    onClick={() => setActiveTab("copiers")}
                  >
                    Copiers
                    {activeTab === "copiers" && <span className="absolute left-0 bottom-0 w-full h-1 bg-lime-500 rounded-t-md" />}
                  </li>

                  <li
                    className={`relative px-4 py-3 cursor-pointer ${activeTab === "mock-copiers" ? "text-neutral-800 tb-tab-active" : "text-neutral-500"}`}
                    onClick={() => setActiveTab("mock-copiers")}
                  >
                    Mock Copiers
                    {activeTab === "mock-copiers" && <span className="absolute left-0 bottom-0 w-full h-1 bg-lime-500 rounded-t-md" />}
                  </li>
                </ul>
              </nav>

              {/* Tab Content */}
              <div className="">
                {activeTab === "positions" && <PositionTable positions={positionsData} />}
                
      
                {activeTab === "history" && <TradeHistoryTable />}

                {activeTab === "copiers" && <CopiersTable />}
                {activeTab === "mock-copiers" && "mock-copiers"}
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
