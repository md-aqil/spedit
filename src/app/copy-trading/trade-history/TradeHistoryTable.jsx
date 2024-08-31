"use client";
import React, { useState } from "react";

const tradeData = [
  {
    id: "12345i",
    time: "2024-07-08-10:21:06",
    price: "104.45",
    quantity: "536",
    instrument: "Nifty Fut",
    strategyId: "50963",
    profit: "1439",
    profitClass: "text-lime-500",
  },
  {
    id: "12345i",
    time: "2024-07-08-10:21:06",
    price: "740",
    quantity: "703",
    instrument: "Nifty 24500 CE",
    strategyId: "33981",
    profit: "-4349",
    profitClass: "text-pink-600",
  },
  // ... more trades
];

function TradeHistoryTable() {
  const [isTradeIdDropdownOpen, setIsTradeIdDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);

  const headers = [
    { title: "Trade ID", width: "w-[116px]", hasDropdown: true },
    { title: "Time", width: "w-[162px]" },
    { title: "Price", width: "w-24", hasDropdown: true },
    { title: "Quantity", width: "w-[116px]" },
    { title: "Instrument", width: "w-[126px]" },
    { title: "Strategy ID", width: "w-[126px]" },
    { title: "Realized Profit", width: "w-[178px]" },
  ];

  return (
    <section className="flex flex-col pb-1.5">
      <header className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <h2 className="self-stretch my-auto text-xl font-bold leading-none text-black">
          History
        </h2>
      </header>

      <div className="flex flex-col mt-6 w-full text-sm leading-none bg-white rounded-xl shadow-sm text-neutral-800 max-md:max-w-full">
        {/* Table Headers */}
        <div className="flex flex-wrap items-center w-full text-base font-bold leading-none text-lime-500 min-h-[61px] max-md:max-w-full">
          {headers.map((header, index) => (
            <div
              key={index}
              className={`relative flex grow shrink gap-1 justify-center items-center self-stretch p-6 my-auto ${header.width} whitespace-nowrap border-r border-b border-solid bg-neutral-800 border-b-zinc-300 border-r-zinc-300 min-h-[60px] max-md:px-5`}
            >
              <div className="self-stretch my-auto">{header.title}</div>
              {header.hasDropdown && (
                <div className="relative">
                  <button
                    onClick={() =>
                      header.title === "Trade ID"
                        ? setIsTradeIdDropdownOpen(!isTradeIdDropdownOpen)
                        : setIsPriceDropdownOpen(!isPriceDropdownOpen)
                    }
                    className="ml-2"
                  >
                    ▼
                  </button>
                  {/* Dropdown for Trade ID */}
                  {header.title === "Trade ID" && isTradeIdDropdownOpen && (
                    <div className="absolute left-0 z-10 mt-2 w-80 bg-white border border-gray-200 rounded shadow-lg">
                      <div className="p-4 flex flex-col">
                        <input
                          type="date"
                          className="border border-stone-950 rounded w-full bg-stone-100 px-2 py-4 mb-2"
                          placeholder="From"
                        />
                        <input
                          type="date"
                          className="border border-stone-950 rounded w-full bg-stone-100 px-2 py-4 mb-2"
                          placeholder="To"
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setIsTradeIdDropdownOpen(false)}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
                          >
                            Clear
                          </button>
                          <button
                            onClick={() => setIsTradeIdDropdownOpen(false)}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Dropdown for Price */}
                  {header.title === "Price" && isPriceDropdownOpen && (
                    <div className="absolute left-0 z-10 mt-2 w-80 bg-white border border-gray-200 rounded shadow-lg">
                      <div className="p-4 flex flex-col">
                        <input
                          type="number"
                          className="border border-gray-300 rounded w-full px-2 py-4 mb-2"
                          placeholder="Min Amount"
                        />
                        <input
                          type="number"
                          className="border border-gray-300 rounded w-full px-2 py-4 mb-2"
                          placeholder="Max Amount"
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setIsPriceDropdownOpen(false)}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
                          >
                            Clear
                          </button>
                          <button
                            onClick={() => setIsPriceDropdownOpen(false)}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Table Rows */}
        {tradeData.map((trade, index) => (
          <div
            key={index}
            className="flex overflow-hidden flex-wrap items-center w-full h-14 max-md:max-w-full"
          >
            {/* Trade Data */}
            <div className="overflow-hidden grow shrink gap-1.5 self-stretch px-6 py-9 my-auto font-semibold leading-none text-blue-500 whitespace-nowrap bg-white border-r border-b border-solid border-b-zinc-300 border-r-zinc-300 min-h-[82px] w-[116px] max-md:px-5">
              {trade.id}
            </div>
            <div className="overflow-hidden grow shrink gap-2.5 self-stretch px-3 py-8 my-auto whitespace-nowrap bg-white border-r border-b border-solid border-b-zinc-300 border-r-zinc-300 min-h-[82px] w-[162px]">
              {trade.time}
            </div>
            <div className="overflow-hidden grow shrink gap-2.5 self-stretch px-3 py-8 my-auto w-24 whitespace-nowrap bg-white border-r border-b border-solid border-b-zinc-300 border-r-zinc-300 min-h-[82px]">
              {trade.price}
            </div>
            <div className="overflow-hidden grow shrink gap-2.5 self-stretch px-6 py-8 my-auto whitespace-nowrap bg-white border-r border-b border-solid border-b-zinc-300 border-r-zinc-300 min-h-[82px] w-[116px] max-md:px-5">
              {trade.quantity}
            </div>
            <div className="overflow-hidden grow shrink gap-2.5 self-stretch px-5 py-8 my-auto bg-white border-r border-b border-solid border-b-zinc-300 border-r-zinc-300 min-h-[82px] w-[126px]">
              {trade.instrument}
            </div>
            <div className="overflow-hidden grow shrink gap-2.5 self-stretch px-5 py-8 my-auto whitespace-nowrap bg-white border-r border-b border-solid border-b-zinc-300 border-r-zinc-300 min-h-[82px] w-[126px]">
              {trade.strategyId}
            </div>
            <div
              className={`overflow-hidden grow shrink gap-2.5 self-stretch px-5 py-9 my-auto font-semibold leading-none ${trade.profitClass} whitespace-nowrap bg-white border-r border-b border-solid border-b-zinc-300 border-r-zinc-300 min-h-[82px] w-[178px]`}
            >
              {trade.profit}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TradeHistoryTable;
