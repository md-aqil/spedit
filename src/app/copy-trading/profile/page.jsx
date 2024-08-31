"use client";

import React, { useState } from "react";
import ProfileTab from "./ProfileTab";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Profile from "./profile";
import CreditHistory from "./CreditHistory";
import TransactionHistory from "../components/TransactionHistory";
import BrokerHistory from "../broker-connection/BrokerHistory";

function MyComponent() {
  const [selectedDate, setSelectedDate] = useState("This Week");
  const [selectedTab, setSelectedTab] = useState("Profile"); // State to manage selected tab

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
      <Header />
      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
          <main className="flex flex-col main-container">
            <ProfileTab activeTab={selectedTab} onTabChange={handleTabChange} />

            {/* Conditionally render content based on selected tab */}
            {selectedTab === "Profile" && <Profile />}
            {selectedTab === "Copy History" && <TransactionHistory />}
            {selectedTab === "Credit History" && <CreditHistory />}
            {selectedTab === "Broker Connect History" && <BrokerHistory />}
          </main>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
