// Sidebar.jsx
import React from "react";
import PropTypes from "prop-types";
import SidebarItem from "./SidebarItem";

function Sidebar({ items, onSelect, activeItem }) {
  return (
    <aside className="flex flex-col max-md:ml-0 max-md:w-full dash-sidebar">
      <div className="flex flex-col items-center py-8 pr-5 mx-auto w-full bg-stone-950 dash-sidebar-content">
        <div className="flex gap-7 items-start text-xl leading-7 text-neutral-500">
          <div className="w-[126px]">
            <span className="">Welcome,</span>
            <br />
            Joe
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5ef3aad35b9b309f96c51485aeb383b8010a2d643048f6a86a12143295fa997?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            alt="User avatar"
            className="object-contain shrink-0 w-14 rounded-xl aspect-square"
          />
        </div>
        <nav className="flex gap-6 self-start mt-5 text-xl text-white ml-7">
          <div className="flex flex-col items-start">
            {items.map((item, index) => (
              <SidebarItem
                key={index}
                {...item}
                onClick={() => onSelect(item.text)}
                isActive={activeItem === item.text}
              />
            ))}
          </div>
        </nav>
        {/* Rest of the sidebar content */}
        <div className="flex flex-col mt-20 max-w-full w-[233px] max-md:mt-10">
          {/* Footer Content */}
        </div>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
      subtext: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ),
  onSelect: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
};

export default Sidebar;
