'use client'
import * as React from "react";

function AdminPanelHeader() {
  return (
    <header className="flex flex-wrap gap-10 items-center justify-between w-full border-b border-solid border-b-stone-300 min-h-[128px] max-md:px-5 max-md:max-w-full">
    <div className="text-xl font-bold leading-none text-black">
      Admin Panel
    </div>
    <div className="flex gap-6 items-center">
      {/* Updated Search Input */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2290c4f96e9479ad8edf54630605c9692b71c7d901f8659d84f0314f34751a3?apiKey=b4d1b9e87b084579b1e2475047caf617&"
          alt="Search Icon"
          className="absolute right-2 w-4 h-4 text-gray-400"
        />
      </div>
      <button className="flex overflow-hidden gap-1.5 justify-center items-center self-stretch px-2 py-1.5 my-auto text-xs font-semibold rounded border border-solid border-neutral-500 min-h-[24px] text-neutral-500">
        <div className="self-stretch my-auto">Log Out</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8264b11295e46ffbd1ecd07ec9bf0b7f344b9f6a7f50760da45416bcc959716e?apiKey=b4d1b9e87b084579b1e2475047caf617&"
          alt="Logout Icon"
          className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
        />
      </button>
    </div>
  </header>
  
  );
}

export default AdminPanelHeader;
