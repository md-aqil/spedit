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
    <div className="flex flex-col justify-center items-center py-10 bg-white rounded-lg shadow-sm w-full px-10">
      <div className="flex flex-wrap gap-10 justify-between items-start w-full text-black border-b border-neutral-200 pb-4">
        {showParameters === true ||
          (showParametersa === true && (
            <div className="flex items-center gap-2">
              <span
                className="icon-arrow-square-left text-gray-600 text-xl cursor-pointer"
                onClick={handleBackClick}
              />
              <h2 className="text-xl font-bold leading-none">Performance</h2>
            </div>
          )) || <h2 className="text-xl font-bold leading-none">Performance</h2>}
        <div className="flex gap-2 items-center text-sm leading-none">
          <span className="self-stretch my-auto">7 days</span>
          <span className="icon-arrow-square-down text-gray-600 text-xl" />
        </div>
      </div>
      {showParameters && (
        <StartegyCopyParameters2
          showConfirmTour={showConfirmTour}
          showParameters={showParameters}
        />
      )}
      {showParametersa ? (
        <StartegyCopyParameters />
      ) : (
        <div className="flex flex-col w-full">
          <div className="flex flex-col justify-center self-center mt-6 w-full w-full">
            <div className="flex flex-wrap gap-10 justify-between items-center w-full">
              {[
                {
                  label: "MDD",
                  value: mdd,
                  width: "50px",
                },
                {
                  label: "Win Rate",
                  value: winRate,
                  width: "82px",
                },
                {
                  label: "Profitable Positions",
                  value: profitablePositions,
                  width: "127px",
                },
                {
                  label: "Total Positions",
                  value: totalPositions,
                  width: "24",
                },
              ].map(({ label, value, width }) => (
                <div
                  key={label}
                  className={`flex flex-col self-stretch my-auto whitespace-nowrap w-[${width}]`}
                >
                  <span className="text-sm leading-none text-neutral-500">
                    {label}
                  </span>
                  <span className="mt-2 text-base font-bold leading-none text-black">
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-10 justify-between items-center mt-8 w-full whitespace-nowrap max-md:max-w-full">
              {[
                {
                  label: "ROI",
                  value: roi,
                  width: "79px",
                },
                {
                  label: "Pnl",
                  value: pnl,
                  width: "99px",
                },
              ].map(({ label, value, width }) => (
                <div
                  key={label}
                  className={`flex flex-col self-stretch my-auto w-[${width}]`}
                >
                  <span className="text-sm leading-none text-neutral-500">
                    {label}
                  </span>
                  <div className="flex gap-2 items-center mt-2 text-xl font-bold leading-none text-stone-950">
                    <span className="self-stretch my-auto">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-5 justify-between items-end mt-9 max-w-full text-sm leading-none text-center whitespace-nowrap w-[569px]">
            <div className="flex flex-col px-5 py-5 font-semibold rounded-lg border border-solid border-stone-300 min-h-[246px] min-w-[240px] w-[400px]">
              <div className="flex gap-3 items-center self-start">
                <button
                  className={`gap-2.5 self-stretch px-4 py-2 my-auto rounded ${
                    selectedTab === "ROI"
                      ? "bg-lime-500 bg-opacity-40 text-stone-950"
                      : "bg-white text-stone-400"
                  }`}
                  onClick={() => handleTabClick("ROI")}
                >
                  ROI
                </button>
                <button
                  className={`gap-2.5 self-stretch px-4 py-2 my-auto rounded ${
                    selectedTab === "PnL"
                      ? "bg-lime-500 bg-opacity-40 text-stone-950"
                      : "bg-white text-stone-400"
                  }`}
                  onClick={() => handleTabClick("PnL")}
                >
                  PnL
                </button>
              </div>
              <LineChart data={currentChartData} />{" "}
              {/* Use LineChart component with selected tab's data */}
            </div>
            <div className="flex flex-col">
              <button
                id="copybuttonTour"
                className="gap-1 px-7 py-5 max-w-full bg-lime-500 rounded min-h-[50px] mt-4 text-stone-950 w-[150px] max-md:px-5"
                onClick={
                  showParameters ? handleCopyClick : handleCopyClickAgain
                }
              >
                Copy
              </button>
              <button
                onClick={handleCopyClickAgain}
                className="gap-1 px-7 py-5 mt-4 max-w-full rounded border border-solid border-neutral-800 min-h-[50px] text-neutral-800 w-[150px] max-md:px-5"
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
