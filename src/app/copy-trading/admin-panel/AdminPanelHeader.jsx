'use client'
import * as React from "react";

function AdminPanelHeader() {
  return (
    <header className="flex flex-wrap gap-10 items-center justify-between w-full border-b border-solid border-b-stone-300 min-h-[128px] max-md:p-0 max-md:max-w-full max-md:min-h-[90px]">
    <div className="text-xl font-bold leading-none text-black max-md:text-white">
      Admin Panel
    </div>
    <div className="flex gap-6 items-center">
      {/* Updated Search Input */}
      <div className="relative flex items-center mr-5 max-md:hidden">
        <input
          type="text"
          placeholder="Search Setting options"
          className="block w-full px-4 py-2 text-sm text-right text-gray-700  focus:outline-none bg-transparent"
        />
       
        <i className="icon-search-normal-1 absolute right-[-20px] text-2xl"></i>
      </div>
      <button className="flex overflow-hidden gap-1.5 justify-center items-center self-stretch px-2 py-1.5 my-auto  font-semibold rounded border border-solid border-neutral-500 min-h-[24px] text-neutral-500 max-md:text-white max-md:border-white">
        <div className="self-stretch my-auto">Log Out</div>
       <i className="icon-login "></i>
      </button>
    </div>
  </header>
  
  );
}

export default AdminPanelHeader;
