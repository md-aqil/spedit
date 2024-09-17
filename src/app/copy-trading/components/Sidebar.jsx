"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import cogIcon from "../../../assets/cog.svg";
import Image from "next/image";
import ArrowIcon from "./ArrowIcon"; // Adjust the path as needed

const SidebarItems = [
  {
    icon: "icon-profile-tick",
    text: "Profile",
    url: "/",
  },
  {
    icon: "icon-folder",
    text: "Portfolio",
    url: "/",
  },
  {
    icon: "icon-code",
    text: "Build",
    url: "/",
  },
  {
    icon: "icon-code-1",
    text: "Code",
    url: "/",
  },
  {
    icon: "icon-copy",
    text: "Copy",
    url: "/",
  },
  {
    icon: "icon-setting-3",
    text: "Live Tool",
    url: "/",
  },
  {
    icon: "icon-game",
    text: "Quest",
    url: "/",
  },
  {
    icon: "icon-message-question",
    text: "Learn",
    url: "/",
  },
];

function Sidebar({ items = SidebarItems, onSelect, activeItem }) {
  const [active, setActive] = useState(activeItem || items[0].text);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const handleSelect = (item) => {
    setActive(item.text);
    if (item.url) {
      window.location.href = item.url;
    }
    onSelect(item.text);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleMenu = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-20 flex flex-wrap items-center px-8 pt-3 pb-3.5 w-full border-b border-solid bg-stone-950 border-b-neutral-800 max-md:px-5 max-md:max-w-full dash-header">
        <div className="flex items-center">
          <div className="text-2xl font-black text-lime-500 mr-5">SPEDIT</div>
         
        </div>

        <div className="flex flex-col flex-1 shrink justify-center items-center self-stretch pl-8 my-auto text-base whitespace-nowrap basis-0 min-w-[240px] text-neutral-500 max-md:max-w-full header-search">
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
          <div className="overflow-hidden gap-2 self-stretch px-3 py-1 my-auto rounded-md shadow-lg bg-lime-500 bg-opacity-30">
            50 Credits
          </div>
          <Image
            loading="lazy"
            alt="User Icon"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            src={cogIcon}
          />
        </div>
      </header>

      {/* desktop view */}
      <aside
        className={`flex flex-col desktop-view max-md:ml-0 max-md:w-full dash-sidebar ${
          isActiveMenu ? "display-block" : "display-none"
        } ${
          isCollapsed
            ? "w-[85px] sidebar-collapsed"
            : "w-[20%] sidebar-expanded"
        } transition-all duration-300`}
      >
        <div className="flex flex-col items-center py-8 pr-5 mx-auto w-full bg-stone-950 dash-sidebar-content">
          <div className="flex items-between justify-between text-xl leading-7 text-neutral-500 px-3 w-full">
            {!isActiveMenu && (
              <span
                className={`icon-arrow-circle-right text-lime-500 cursor-pointer absolute z-50 ${
                  isCollapsed ? "rotate-180" : ""
                }`}
                onClick={toggleSidebar}
              ></span>
            )}

            {!isCollapsed && (
              <div className="relative">
                <span className="">Welcome,</span>
                <br />
                Joe
              </div>
            )}

            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5ef3aad35b9b309f96c51485aeb383b8010a2d643048f6a86a12143295fa997?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt="User avatar"
              className="object-contain shrink-0 w-14 rounded-xl aspect-square "
            />
          </div>
          <nav className="flex  gap-6 self-start mt-5 text-xl text-white ml-7">
            <div className="flex flex-col items-start">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-2 items-center dash-item mt-6 ${
                    active === item.text ? "dash-item-active" : ""
                  }`}
                  onClick={() => handleSelect(item)}
                  role="button"
                  tabIndex="0"
                >
                  <i className={`${item.icon} w-6 aspect-square`}></i>

                  {!isCollapsed && <div>{item.text}</div>}
                </div>
              ))}
            </div>
          </nav>
       
        </div>
      </aside>

     
    </>
  );
}

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      url: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ),
  onSelect: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
};

export default Sidebar;
