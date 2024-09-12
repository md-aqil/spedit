import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PortfolioList from "../components/PortfolioList";
import DashboardIcons from "../components/DashboardIcons";
import ListFilter from "../components/ListFilter";
import TradeHistoryTable from "./TradeHistoryTable";

function LeaderBoard() {
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
      <Header />

      <div className="z-10 w-full max-md:max-w-full main-body">
       
          <Sidebar />

          <main
           
            className="flex flex-col main-container"
          >
            <DashboardIcons />
            <TradeHistoryTable />
          </main>
      
      </div>
    </div>
  );
}

export default LeaderBoard;
