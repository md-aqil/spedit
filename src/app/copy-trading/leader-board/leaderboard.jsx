"use client";

import Sidebar from "../components/Sidebar";
import DashboardIcons from "../components/DashboardIcons";
import StrategyCard from "../components/strategy-card";
import React, { useState, useRef } from "react";
import userIcon from "../../../assets/user1.png";
import "@sjmc11/tourguidejs/src/scss/tour.scss"; // Import the SCSS file
import StrategyFilter from "../components/StrategyFilter";
import StrategyList from "../components/StrategyList";

import heartIcon from "../../../assets/heart.svg";
import heartFullIcon from "../../../assets/heart-full.svg";

export function LeaderBoard() {
  const [toggleList, setToggleList] = useState(false);
  const [fav, setFav] = useState(false);
  const [viewType, setViewType] = useState("card"); // State to manage the view type
  const handleToggleListing = () => {
    setToggleList(!toggleList);
  };

  const copyTraderData = [
    {
      name: "Karishma",
      followers: 502,
      actionType: "copy",
      pnl: "₹74,100.23",
      roi: "5.71%",
      aum: "₹74,100.23",
      mdd: "1.27%",
      id: 1,
      avatar: userIcon,
    },
    {
      name: "Kareena",
      followers: 502,
      actionType: "stopPause",
      pnl: "₹74,100.23",
      roi: "5.71%",
      aum: "₹74,100.23",
      mdd: "1.27%",
      avatar: userIcon,
      id: 2,
    },
    {
      name: "Raj",
      followers: 600,
      actionType: "stopPause",
      pnl: "₹50,000.00",
      roi: "4.50%",
      aum: "₹50,000.00",
      mdd: "0.90%",
      id: 3,
      avatar: userIcon,
    },
  ];

  const handleCopyClick = () => {
    setShowParameters(true);
  };

  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (index) => {
    setFavorites((prevFavorites) => (prevFavorites.includes(index) ? prevFavorites.filter((favIndex) => favIndex !== index) : [...prevFavorites, index]));
  };

  // Function to switch view type
  const handleViewToggle = () => {
    setViewType((prev) => (prev === "card" ? "list" : "card"));
  };

  return (
    <>
      <div className="flex flex-col pb-20 bg-stone-50">
        <div className="z-10 w-full max-md:max-w-full main-body">
          <div className="flex gap-5 w-full">
            <Sidebar />
            <main className="flex flex-col main-container">
              <DashboardIcons />
              <StrategyFilter
                fav={fav}
                setFav={setFav}
                handleToggleListing={handleToggleListing}
                handleViewToggle={handleViewToggle} // Pass toggle function to filter
                viewType={viewType} // Pass the current view type
              />
              {viewType === "card" ? (
                <StrategyCard />
              ) : (
                <div>
                  {copyTraderData.map((trader, index) => (
                    <StrategyList
                      key={trader.id}
                      index={index}
                      {...trader}
                      favorites={favorites}
                      handleFavoriteToggle={handleFavoriteToggle}
                      heartIcon={heartIcon}
                      heartFullIcon={heartFullIcon}
                    />
                  ))}
                </div>
              )}

              {/* Favorites Section */}
              <div className="favorites-section mt-10 p-4 bg-white shadow-md rounded-md">
                <h2 className="text-xl font-semibold mb-2">My Favorites</h2>
                <div className="empty-state text-center text-gray-500">
                  <p>You don’t have any favorite strategies yet.</p>
                  <p className="mt-2">Start exploring the leader board!</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
