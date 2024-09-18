'use client'
import React, { useState } from "react";

function TitleAction() {
  // State to manage dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="flex flex-wrap gap-10 justify-between items-center leading-none mt-5">
      <h1 className="self-stretch my-auto text-xl font-bold text-black">
        Lead Trader Management
      </h1>
      <nav className="flex gap-3 justify-center items-center self-stretch my-auto text-sm min-w-[240px] relative">
        {/* Saved Strategy Type Button */}
        <div className="relative">
          <button
            className="flex overflow-hidden gap-6 items-center px-5 py-2.5 font-semibold bg-white rounded-md border border-black text-neutral-800 min-w-[240px]"
            onClick={toggleDropdown}
          >
            <div className="flex gap-1 items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/351730186382ab58220b1dd5fc1f368b690b96176a9590e56e357b9b3f1abf0c?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                alt=""
                className="object-contain w-6 aspect-square"
              />
              <span>Saved Strategy type</span>
            </div>
           <i className="icon-arrow-square-down text-2xl"></i>
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="text-left text-sm">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setDropdownOpen(false)}
                >
                  Build
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setDropdownOpen(false)}
                >
                  Code
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setDropdownOpen(false)}
                >
                  Purchased
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Create Strategy Button */}
        <a href="./update-strategy" className="flex gap-2 justify-center items-center px-4 py-4 font-bold bg-lime-500 rounded-md text-stone-950">
          <span>+ Create Strategy</span>
        </a>
      </nav>
    </header>
  );
}

export default TitleAction;
