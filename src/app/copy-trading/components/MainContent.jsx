/**
 * This code was generated by Builder.io.
 */
import React from "react";
import DashboardIcons from "./DashboardIcons";
import PnLCurve from "./PnLCurve";
import CurrentLivePosition from "./CurrentLivePosition";
import StrategiesFollowed from "./StrategiesFollowed";
import TransactionHistory from "./TransactionHistory";
import TopTraders from "./TopTraders";
import Link from "next/link";

function MainContent() {
  return (
    <main className="main-container">
      <div className="my-5">
        <DashboardIcons />

        <div className="flex  gap-5 justify-between items-center self-center mt-10 pnlcrnt">
          <PnLCurve />
          <CurrentLivePosition />
        </div>
      </div>

      <div className="my-5">
      <div className="flex align-center justify-between mt-10 mb-5">
        <div className="self-start text-xl font-bold text-neutral-800 m-white">
          Strategies you follow
        </div>

        <Link href="/copy-trading/leader-board/" className="m-white z-10 gap-1.5  px-3 py-2 text-xs font-semibold rounded border flex items-center border-solid border-neutral-800  text-neutral-800">
          View More <span className="icon-arrow-right text-lg"></span>
        </Link>
      </div>

        <StrategiesFollowed />
      </div>
      <div className="my-5">
        <TopTraders />
      </div>
      <div className="my-5">
        <TransactionHistory />
      </div>
    </main>
  );
}

export default MainContent;
