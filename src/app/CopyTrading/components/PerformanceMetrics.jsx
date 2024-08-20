/**
 * This code was generated by Builder.io.
 */
import React from "react";

const PerformanceMetrics = ({ pnl, roi, aum, mdd }) => {
  return (
    <div className="flex gap-4 justify-between items-end mt-5 w-full">
      <div className="flex flex-col w-[207px]">
        <div className="flex gap-5 items-center w-full">
          <div className="flex flex-col self-stretch my-auto w-28">
            <div className="text-xs text-neutral-500">7D PnL</div>
            <div className="flex gap-1.5 justify-center items-center py-1.5 mt-1 w-full text-xl font-bold whitespace-nowrap rounded text-stone-950">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/04a4875830827dfe99ab565cab2a22187ca9466b293f09bc752cac3fa30e4846?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square fill-lime-500"
              />
              <div className="self-stretch my-auto">{pnl}</div>
            </div>
          </div>
          <div className="flex flex-col self-stretch my-auto w-[79px]">
            <div className="text-xs text-neutral-500">7D ROI</div>
            <div className="flex gap-1.5 justify-center items-center mt-1.5 w-full text-xl font-bold whitespace-nowrap rounded text-stone-950">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/04a4875830827dfe99ab565cab2a22187ca9466b293f09bc752cac3fa30e4846?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square fill-lime-500"
              />
              <div className="self-stretch my-auto">{roi}</div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 mt-6 max-w-full w-[190px]">
          <div className="flex flex-col justify-center whitespace-nowrap rounded">
            <div className="text-xs text-neutral-500">AUM</div>
            <div className="mt-1.5 text-sm font-semibold text-neutral-800">
              {aum}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-xs text-stone-400">7D MDD</div>
            <div className="mt-1.5 text-sm font-semibold text-neutral-800">
              {mdd}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
