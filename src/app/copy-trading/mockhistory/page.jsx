import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardIcons from "../components/DashboardIcons";
import TradeHistoryTable from "./TradeHistoryTable";

function LeaderBoard() {
  return (
    <div className="flex  flex-col pb-20 bg-stone-50">
      {/* <Header /> */}
      <div className="flex flex-1  main-body">
        <Sidebar />
        <main className="flex flex-col transition-all duration-300 p-5 bg-white main-container">
          <DashboardIcons />

          <TradeHistoryTable />
        </main>
      </div>
    </div>
  );
}

export default LeaderBoard;
