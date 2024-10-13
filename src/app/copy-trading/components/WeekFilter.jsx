// components/WeekFilter.jsx
import React, { useState } from 'react';

const WeekFilter = ({ selectedDate, onDateSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDateSelect = (date) => {
    onDateSelect(date);
    setIsDropdownOpen(false);
  };

  return (
    <section className="relative w-full max-w-[216px]">
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full px-5 py-2 text-base text-black bg-white rounded-lg border border-stone-400"
        aria-haspopup="listbox"
        aria-expanded={isDropdownOpen}
      >
        <span>{selectedDate}</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a77bfc52a9d1c38751d7d50a9bd2f22f1578962d0ce1434af24e0b269c7f14f4?apiKey=b4d1b9e87b084579b1e2475047caf617&"
          alt=""
          className="w-6 h-6 object-contain"
        />
      </button>

      {isDropdownOpen && (
        <ul
          className="absolute z-10 w-full mt-1 bg-white border border-stone-400 rounded-md shadow-lg"
          role="listbox"
        >
          {["This Week", "Last Week", "This Month", "Last Month"].map(
            (date) => (
              <li key={date}>
                <button
                  onClick={() => handleDateSelect(date)}
                  className="w-full text-left px-5 py-2 hover:bg-gray-100"
                  role="option"
                  aria-selected={selectedDate === date}
                >
                  {date}
                </button>
              </li>
            )
          )}
        </ul>
      )}
    </section>
  );
};

export default WeekFilter;
