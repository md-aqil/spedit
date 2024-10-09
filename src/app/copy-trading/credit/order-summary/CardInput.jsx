import React from "react";

export default function CardInput({ label, id, placeholder, withIcon }) {
  return (
    <div className="flex flex-col mt-5">
      <label htmlFor={id} className="leading-none opacity-80">
        {label}
      </label>
      <div className="flex items-center gap-2 focus:ring-1 focus:ring-[#D8F6B9] mt-3 bg-[#F7FAF5] border border-color[#F0F8E8] rounded-lg p-2.5">
        {withIcon && (
          <span className={withIcon}>
         
          </span>
        )}
        <input
          type="text"
          id={id}
          aria-label={label}
          placeholder={placeholder}
          className="w-full bg-transparent "
        />
      </div>
    </div>
  );
}
