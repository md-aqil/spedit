import React from "react";

function PositionItem({ name, amount, roi, unrealizedPnl, chart }) {
  const isPositive = roi > 0;
  const arrowIconClass = isPositive ? "icon-arrow-up-3" : "icon-arrow-down";
  const arrowBgColor = isPositive ? "bg-[#9BEC00]" : "bg-[#F87171]"; // Assuming #F87171 for a red color

  return (
    <div className="flex flex-col pb-5 mt-5 w-full border-solid border-b-[0.5px] border-b-stone-400">
      <div className="flex gap-10 justify-between items-center w-full text-sm font-semibold whitespace-nowrap text-neutral-800">
        <div className="self-stretch my-auto">{name}</div>
        <img
          loading="lazy"
          src={chart}
          alt={`${name} chart`}
          className="object-contain shrink-0 self-stretch my-auto w-20 aspect-[3.08] stroke-[1px] stroke-lime-500"
        />
      </div>
      <div className="flex gap-7 justify-between items-start mt-3.5 w-full">
        <div className="flex flex-col whitespace-nowrap">
          <div className="text-xs text-neutral-500">Amount</div>
          <div className="mt-2 text-xl font-bold text-stone-950">
            {amount.toLocaleString()}
          </div>
        </div>
        <div className="flex flex-col whitespace-nowrap w-[66px]">
          <div className="text-xs text-neutral-500">ROI</div>
          <div
            className={`flex gap-1 justify-center items-center mt-3 w-full text-sm font-semibold rounded text-stone-950`}
          >
            <span
              className={`icon ${arrowIconClass} ${arrowBgColor} p-[1px]`}
              aria-label="ROI indicator"
            ></span>
            <div className="self-stretch my-auto">
              {Math.abs(roi).toFixed(2)}%
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[84px]">
          <div className="text-xs text-neutral-500">Unrealized Pnl</div>
          <div
            className={`flex gap-1 justify-center items-center self-start mt-3 text-sm font-semibold whitespace-nowrap rounded text-stone-950`}
          >
            <span
              className={`icon ${arrowIconClass} ${arrowBgColor} p-[1px]`}
              aria-label="Unrealized PnL indicator"
            ></span>
            <div className="self-stretch my-auto">
              {Math.abs(unrealizedPnl).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PositionItem;
