
import React from "react";

function SidebarItem({ icon, text, subtext, isActive }) {
  return (
    <div
      className={`flex gap-2 items-center dash-item mt-6 ${
        isActive ? "dash-item-active" : ""
      }`}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 w-6 aspect-square"
      />
      <div>
        {text}
        {subtext && (
          <span className="text-xs">
            <br />
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
}

export default SidebarItem;
