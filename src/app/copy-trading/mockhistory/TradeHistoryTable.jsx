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
    { title: "Trade ID", key: "id", hasDropdown: true },
    { title: "Time", key: "time" },
    { title: "Price", key: "price", hasDropdown: true },
    { title: "Quantity", key: "quantity" },
    { title: "Instrument", key: "instrument" },
    { title: "Strategy ID", key: "strategyId" },
    { title: "Realized Profit", key: "profit" },
  ];

  return (
    <section className="flex flex-col pb-1.5">
      <header className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <h2 className="self-stretch my-auto text-xl font-bold leading-none text-black">
          History
        </h2>
      </header>

      <div className="relative mt-6 w-full text-sm leading-none bg-white rounded-xl shadow-sm text-neutral-800 max-md:max-w-full">
        {/* Table Headers */}
        <table className="w-full min-w-max bg-white border border-neutral-300">
          <thead>
            <tr className="text-base font-bold text-lime-500 border-b border-neutral-300">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={`p-4 ${header.hasDropdown ? 'relative' : ''} text-left border-r border-neutral-300`}
                >
                  {header.title}
                  {header.hasDropdown && (
                    <button
                      onClick={() =>
                        header.title === "Trade ID"
                          ? setIsTradeIdDropdownOpen(!isTradeIdDropdownOpen)
                          : setIsPriceDropdownOpen(!isPriceDropdownOpen)
                      }
                      className="ml-2 text-lg"
                    >
                      ▼
                    </button>
                  )}
                  {/* Dropdowns */}
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
                </th>
              ))}
            </tr>
          </thead>
          {/* Table Rows */}
          <tbody>
            {tradeData.map((trade, index) => (
              <tr key={index} className="border-b border-neutral-300">
                <td className="p-4 text-blue-500 font-semibold">{trade.id}</td>
                <td className="p-4">{trade.time}</td>
                <td className="p-4">{trade.price}</td>
                <td className="p-4">{trade.quantity}</td>
                <td className="p-4">{trade.instrument}</td>
                <td className="p-4">{trade.strategyId}</td>
                <td className={`p-4 font-semibold ${trade.profitClass}`}>{trade.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TradeHistoryTable;
