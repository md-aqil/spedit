
import React from "react";

function Chart() {
  return (
    <div className="flex overflow-hidden flex-col grow pb-7 w-full text-xs leading-none whitespace-nowrap bg-white rounded-xl max-md:mt-1 max-md:max-w-full">
      <div className="flex overflow-hidden relative flex-col items-start px-16 pt-16 w-full min-h-[610px] pb-[529px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbd516f0fa53d12b1c213e4ed31c0cd21861f5503f774182bd2d9edbb4aa58f1?apiKey=b4d1b9e87b084579b1e2475047caf617&"
          className="object-cover absolute inset-0 size-full"
          alt="Chart background"
        />
        <div className="flex relative gap-3 items-center mb-0 max-md:mb-2.5">
          <ChartInfo label="O" value="188.16" />
          <ChartInfo label="H" value="200" />
          <ChartInfo label="L" value="180" />
          <ChartInfo label="C" value="190" />
          <div className="self-stretch my-auto font-semibold text-lime-600">
            +0.25%
          </div>
          <ChartInfo label="Vol" value="84.62M" />
        </div>
      </div>
    </div>
  );
}

function ChartInfo({ label, value }) {
  return (
    <div className="flex gap-0.5 items-center self-stretch my-auto">
      <div className="self-stretch my-auto text-neutral-500">{label}</div>
      <div className="self-stretch my-auto font-semibold text-lime-600">
        {value}
      </div>
    </div>
  );
}

export default Chart;
