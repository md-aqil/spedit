import { useState } from "react";
import LineChart from "../../components/LineChart";
import Link from "next/link";

export function GraphSection({
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
}) {
  const data = [
    { label: "MDD", value: mdd },
    { label: "Win Rate", value: winRate },
    { label: "Profitable Positions", value: profitablePositions },
    { label: "Total Positions", value: totalPositions },
  ];
  const [selectedTab, setSelectedTab] = useState("ROI");
  const currentChartData = selectedTab === "ROI" ? chartData : pnlChartData;
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-center self-center mt-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center w-full">
          {data.map(({ label, value }) => (
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
              <span className="mt-2 text-xl font-bold leading-none text-stone-950">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-5 justify-between items-end mt-9 max-w-full text-sm leading-none text-center whitespace-nowrap roi-copy">
        <div className="flex flex-col px-5 py-5 font-semibold rounded-lg border border-solid border-stone-300 w-full">
          <div className="flex gap-3 items-center self-start">
            <button
              className={`gap-2.5 self-stretch px-4 py-2 my-auto rounded ${selectedTab === "ROI" ? "bg-lime-500 bg-opacity-40 text-stone-950" : "bg-white text-stone-400"}`}
              onClick={() => setSelectedTab("ROI")}
            >
              ROI
            </button>
            <button
              className={`gap-2.5 self-stretch px-4 py-2 my-auto rounded ${selectedTab === "PnL" ? "bg-lime-500 bg-opacity-40 text-stone-950" : "bg-white text-stone-400"}`}
              onClick={() => setSelectedTab("PnL")}
            >
              PnL
            </button>
          </div>
          <LineChart data={currentChartData} /> {/* Use LineChart component with selected tab's data */}
        </div>
        <div className="flex flex-col per-act">
          <Link id="copybuttonTour" className="px-7 py-5 btn mt-4 text-stone-950 w-[150px]" href="?name=copyStepOpen" shallow>
            Copy
          </Link>
          <Link href="?name=copyStepOpen" shallow className="btn btn-outline px-10 py-10 mt-4">
            Mock
          </Link>
        </div>
      </div>
    </div>
  );
}
