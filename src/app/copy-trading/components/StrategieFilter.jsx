// src/components/StrategieFilter.js
import React, { useState } from "react";
import Image from "next/image"; 
const StrategieFilter = ({ fav, setFav, setIsCardView , handleViewToggle, viewType, index, name, avatar, favorites, handleFavoriteToggle, heartIcon, heartFullIcon}) => {
  const [selectedFilter, setSelectedFilter] = useState("PnL");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const toggleView = () => {
    setIsCardView((prev) => !prev); // Toggle the view
  };

  return (
    <div className="flex flex-col items-center  w-full max-md:max-w-full my-10">
      <div className="flex flex-col w-full">
        <nav className="flex flex-wrap gap-10 items-start px-0.5 w-full bor-filter">
          <div className="flex flex-col flex-1 mt-2 text-sm font-semibold text-center">
            <div className="flex gap-8 items-center">
              <button
                onClick={() => setFav(false)}
                className={`self-stretch my-auto w-[75px] ${
                  !fav ? "text-stone-950 border-b-2 border-lime-500 is-fav" : "text-stone-400"
                }`}
              >
                Portfolios
              </button>

              <button
                onClick={() => setFav(true)}
                className={`self-stretch my-auto w-[97px] ${
                  fav ? "text-stone-950 pb-2 border-b-2 border-lime-500 is-fav" : "text-stone-400"
                }`}
              >
                My Favorites
              </button>

       
    
            </div>
          </div>

          <div className="flex justify-end flex-1 gap-6 items-center text-xs text-right text-stone-600 hidden-xs">
            <div className="w-full max-w-md">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search Setting options"
                  className="block w-full px-4 py-2 text-sm text-right text-gray-700 focus:outline-none bg-transparent pr-10"
                />
                <i className="icon-search-normal-1 absolute right-0 text-2xl"></i>
              </div>
            </div>
            {/* View Toggle Button */}


            <span
        className={`${
          viewType === "card" ? "icon-menu-1" : "icon-menu"
        } text-2xl cursor-pointer hover:text-lime-500`}
        onClick={handleViewToggle} // Toggle view on click
      ></span>

          </div>
        </nav>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 items-center mt-4 max-w-full text-sm font-semibold text-center h-[30px] f-scroll">
          {["PnL", "ROI", "MDD", "AUM", "Copy Traders", "Copy Traders PnL"].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-4 py-2 rounded ${
                selectedFilter === filter
                  ? "bg-lime-500 text-stone-950"
                  : "text-stone-400 hover:text-stone-950"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrategieFilter;
