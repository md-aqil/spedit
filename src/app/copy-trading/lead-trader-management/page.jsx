import React from "react";
import StrategyTable from "./StrategyTable";
import LivePositionsTable from "./LivePositionsTable";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardIcons from "../components/DashboardIcons";
import TitleAction from "./TitleAction";

function LeadTraderManagement() {
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
      {/* <Header /> */}

      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />

          <main className="flex flex-col main-container">
            <DashboardIcons />
            <TitleAction />
            <StrategyTable />
            <LivePositionsTable />
          </main>
        </div>
      </div>
    </div>
  );
}

export default LeadTraderManagement;
