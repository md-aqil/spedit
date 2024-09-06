// ArrowIcon.js
import React from "react";
import PropTypes from "prop-types";

function ArrowIcon({ isCollapsed, toggleSidebar }) {
  return (
    <span
      className={`icon-arrow-circle-right text-lime-500 cursor-pointer transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
      onClick={toggleSidebar}
    ></span>
  );
}

ArrowIcon.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default ArrowIcon;
