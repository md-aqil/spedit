import * as React from "react";

const CardComponent = ({
  label,
  value,
  maxValue,
  minDate,
  maxDate,
  progressColor = 'bg-[#9BEC00]', // default color for the progress bar
  textColor,
  backgroundColor,
  icon
}) => {
  return (
    <article className={`flex overflow-hidden flex-col items-start p-5 rounded-xl shadow-sm border border-gray-200 ${backgroundColor}`}>
      <span className={`px-2 py-1.5 text-xs leading-none ${progressColor} rounded-sm min-h-[21px] ${textColor}`}>
        {label}
      </span>
      <div className="flex flex-col pt-1 font-bold leading-none whitespace-nowrap w-[95px]">
        <div className="flex gap-0.5 items-start pt-4 pb-2 w-full">
          <span className={`grow text-xl ${textColor}`}>{value}</span>
          <span className="text-base text-neutral-500">/{maxValue}</span>
        </div>
      </div>
      <div className="flex flex-col self-stretch pt-1 min-h-[8px]">
        {/* Updated progress bar */}
        <div className="relative w-full bg-gray-200 rounded-sm h-1">
          <div className={`absolute top-0 left-0 h-1 rounded-sm ${progressColor}`} style={{ width: '10%' }} />
        </div>
      </div>
      <time className="mt-10 text-xs leading-none text-neutral-500">
        {minDate} <span className="text-neutral-500">to</span> {maxDate}
      </time>
   
    </article>
  );
};

export default CardComponent;
