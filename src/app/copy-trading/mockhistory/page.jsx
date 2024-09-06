import React from "react";
import Sidebar from '../components/Sidebar';
import Header from "../components/Header";
import DashboardIcons from "../components/DashboardIcons";
import TradeHistoryTable from "./TradeHistoryTable";

function LeaderBoard() {
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
      <Header />
      <div className="flex flex-1 overflow-hidden main-body">
        <Sidebar />
        <main className="flex flex-col flex-1 transition-all duration-300 p-5 bg-white">
          <DashboardIcons />
          <TradeHistoryTable />
        </main>
      </div>
    </div>
  );
}

export default LeaderBoard;
