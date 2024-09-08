import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PortfolioList from "../components/PortfolioList";
import DashboardIcons from "../components/DashboardIcons";
import ListFilter from "../components/ListFilter";
import BrokerConnection from "./BrokerConnection";

function LeaderBoard() {
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
      <Header />

      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />

          <main className="flex flex-col main-container">
            <DashboardIcons />
            <BrokerConnection />
          </main>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
