import React from "react";
import cogIcon from "../../../assets/cog.svg";
import Image from "next/image";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 flex flex-wrap items-center px-8 pt-3 pb-3.5 w-full border-b border-solid bg-stone-950 border-b-neutral-800 max-md:px-5 max-md:max-w-full dash-header">
      <div className="self-stretch my-auto text-2xl font-black text-lime-500 w-[58px]">SPEDIT</div>

      <div className="flex flex-col flex-1 shrink justify-center items-center self-stretch pl-8 my-auto text-base whitespace-nowrap basis-0 min-w-[240px] text-neutral-500 max-md:max-w-full">
        <div className="w-full max-w-md">
          <div className="relative">
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-sm border border-neutral-700 rounded-lg bg-stone-900 text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/236c2f2a224a9f91bae67ba81d33f8bda2f0f7291e9fff1454bf2f90daf16dfc?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                alt="Search Icon"
                className="object-contain w-5 h-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center self-stretch my-auto text-sm leading-none text-center text-white">
        <div className="overflow-hidden gap-2 self-stretch px-3 py-1 my-auto rounded-md shadow-lg bg-lime-500 bg-opacity-30">50 Credits</div>
        <Image loading="lazy" alt="User Icon" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" src={cogIcon} />
      </div>
    </header>
  );
}

export default Header;
