
import React from "react";

function PnLCurve() {
  return (
    <div className="flex flex-col self-stretch pt-5  text-xl font-bold bg-white rounded-xl shadow-sm mt-0 min-w-[240px] text-neutral-800 w-[761px] max-md:max-w-full">
      <div className="gap-2 self-start px-9 max-md:px-5">PnL Curve</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/782e968aa47b79801ec1ecf7a87eec51827260fab56508d743f8636fe7e986f1?apiKey=b4d1b9e87b084579b1e2475047caf617&"
        alt="PnL Curve graph"
        className="object-contain mt-6 w-full aspect-[1.86] max-md:max-w-full"
      />
    </div>
  );
}

export default PnLCurve;
