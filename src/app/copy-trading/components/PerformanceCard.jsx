"use client";

import React, { useEffect, useState } from "react";
import StartegyCopyParameters from "./StartegyCopyParameters";
import LineChart from "./LineChart"; // Import your LineChart component
import { useSearchParams } from "next/navigation";

import StartegyCopyParameters2 from "./StargegyCopyParams2";

const PerformanceCard = ({
  handleCopyClick,
  handleCopy,
  showParameters,
  showConfirmTour,
  mdd,
  winRate,
  profitablePositions,
  totalPositions,
  roi,
  pnl,
  chartData = {
    labels: ["January", "February", "March", "April", "May"],
    values: [10, 20, 30, 40, 50],
  }, // Default to sample data if not provided
  pnlChartData = {
    labels: ["June", "July", "August", "September", "October"],
    values: [15, 25, 35, 45, 55],
  }, // Example PnL data
}) => {
  const [showParametersa, setShowParametersA] = useState(false);
  const [selectedTab, setSelectedTab] = useState("ROI");

  const params = useSearchParams();

  const handleCopyClickAgain = () => {
    console.log("hellow ");
    setShowParametersA(true);
  };

  const handleBackClick = () => {
    setShowParametersA(false);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    if (params.get("name") === "copyStepOpen") {
      setShowParametersA(true);
    }
  }, []);

  // Determine which data to use for the LineChart based on the selected tab
  const currentChartData = selectedTab === "ROI" ? chartData : pnlChartData;

  return (
    <div className="flex flex-col justify-center items-center py-10 bg-white rounded-lg shadow-sm w-full px-10 PerformanceCard">
      <div className="flex flex-wrap gap-10 justify-between items-start w-full text-black border-b border-neutral-200 pb-4 per-header">
        {showParameters === true ||
          (showParametersa === true && (
            <div className="flex items-center gap-2">
              <span className="icon-arrow-square-left text-gray-600 text-xl cursor-pointer" onClick={handleBackClick} />
              <h2 className="text-xl font-bold leading-none">Performance</h2>
            </div>
          )) || <h2 className="text-xl font-bold leading-none">Performance</h2>}
        <div className="flex gap-2 items-center text-sm leading-none">
          <span className="self-stretch my-auto">7 days</span>
          <span className="icon-arrow-square-down text-gray-600 text-xl" />
        </div>
      </div>
      {showParameters && <StartegyCopyParameters2 showConfirmTour={showConfirmTour} showParameters={showParameters} />}
      {showParametersa ? (
        <StartegyCopyParameters />
      ) : (
        <div className="flex flex-col w-full">


          
<div className="flex flex-col justify-center self-center mt-6 w-full">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center w-full">
    {[
      { label: "MDD", value: mdd },
      { label: "Win Rate", value: winRate },
      { label: "Profitable Positions", value: profitablePositions },
      { label: "Total Positions", value: totalPositions },
    ].map(({ label, value }) => (
      <div key={label} className="flex flex-col text-left">
        <span className="text-sm leading-none text-neutral-500">{label}</span>
        <span className="mt-2 text-base font-bold leading-none text-black">{value}</span>
      </div>
    ))}
  </div>

  {/* ROI and PnL section with space-between */}
  <div className="flex justify-between items-center mt-8 w-full pr-5">
    {[
      { label: "ROI", value: roi },
      { label: "PnL", value: pnl },
    ].map(({ label, value }) => (
      <div key={label} className="flex flex-col text-left">
        <span className="text-sm leading-none text-neutral-500">{label}</span>
        <span className="mt-2 text-xl font-bold leading-none text-stone-950"><i class="icon-arrow-up-3 bg-lime-500 p-0.5 bold mr-1 rounded-sm shadow-sm text-sm"></i> {value}</span>
      </div>
    ))}
  </div>
</div>



          <div className="flex gap-5 justify-between items-end mt-9 max-w-full text-sm leading-none text-center whitespace-nowrap roi-copy">
            <div className="flex flex-col px-5 py-5 font-semibold rounded-lg border border-solid border-stone-300 w-full">
              <div className="flex gap-3 items-center self-start">
                <button
                  className={`gap-2.5 self-stretch px-4 py-2 my-auto rounded ${selectedTab === "ROI" ? "bg-lime-500 bg-opacity-40 text-stone-950" : "bg-white text-stone-400"}`}
                  onClick={() => handleTabClick("ROI")}
                >
                  ROI
                </button>
                <button
                  className={`gap-2.5 self-stretch px-4 py-2 my-auto rounded ${selectedTab === "PnL" ? "bg-lime-500 bg-opacity-40 text-stone-950" : "bg-white text-stone-400"}`}
                  onClick={() => handleTabClick("PnL")}
                >
                  PnL
                </button>
              </div>
              <LineChart data={currentChartData} /> {/* Use LineChart component with selected tab's data */}
            </div>
            <div className="flex flex-col per-act">
              <button
                id="copybuttonTour"
                className="px-7 py-5 btn mt-4 text-stone-950 w-[150px]"
                onClick={showParameters ? handleCopyClick : handleCopyClickAgain}
              >
                Copy
              </button>
              <button
                onClick={handleCopyClickAgain}
                className="btn btn-outline px-10 py-10 mt-4"
              >
                Mock
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceCard;
