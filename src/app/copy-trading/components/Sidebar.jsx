'use client';
import React, { useState } from "react";
import PropTypes from "prop-types";

const SidebarItems = [
  {
    icon: "icon-profile", 
    text: "Profile",
    url: "/",
  },
  {
    icon: "fa fa-chart-line", 
    text: "Transaction Monitor",
    url: "/transaction-monitor",
  },
  {
    icon: "fa fa-cog", // Font Awesome class for CMS icon
    text: "CMS",
    url: "/cms",
  },
  {
    icon: "fa fa-chart-pie", // Font Awesome class for Analytics & Reporting icon
    text: "Analytics & Reporting",
    url: "/analytics-reporting",
  },
  {
    icon: "fa fa-bullhorn", // Font Awesome class for Marketing Tools icon
    text: "Marketing Tools",
    url: "/marketing-tools",
  },
  {
    icon: "fa fa-ticket-alt", // Font Awesome class for Support & Ticketing icon
    text: "Support & Ticketing",
    url: "/support-ticketing",
  },
  {
    icon: "fa fa-lock", // Font Awesome class for Rights Management icon
    text: "Rights Management",
    url: "/rights-management",
  },
  {
    icon: "fa fa-trash", // Font Awesome class for Trash icon
    text: "Trash",
    url: "/trash",
  },
];

function Sidebar({ items = SidebarItems, onSelect, activeItem }) {
  const [active, setActive] = useState(activeItem || items[0].text);

  const handleSelect = (item) => {
    setActive(item.text);
    if (item.url) {
      window.location.href = item.url;
    }
    onSelect(item.text);
  };

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
              <div
                key={index}
                className={`flex gap-2 items-center dash-item mt-6 ${active === item.text ? "dash-item-active" : ""}`}
                onClick={() => handleSelect(item)}
                role="button"
                tabIndex="0"
              >
                <i className={`${item.icon} w-6 aspect-square`}></i>
                <div>
                  {item.text}
                </div>
              </div>
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
