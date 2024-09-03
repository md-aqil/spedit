// SidebarItem.jsx
import React from "react";
import PropTypes from "prop-types";

function SidebarItem({ icon, text, subtext, isActive, onClick }) {
  return (
    <div
      className={`flex gap-2 items-center dash-item mt-6 ${isActive ? "dash-item-active" : ""}`}
      onClick={onClick}
      role="button"
      tabIndex="0"
    >
      <img
        loading="lazy"
        src={icon}
        alt={text}
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

SidebarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default SidebarItem;
