"use client";
import React, { useState } from "react";

const tradeData = [
  {
    id: "12345i",
    time: "2024-07-08 10:21:06",
    price: "104.45",
    quantity: "536",
    instrument: "Nifty Fut",
    strategyId: "50963",
    profit: "1439",
    profitClass: "text-lime-500",
  },
  {
    id: "12345i",
    time: "2024-07-08 10:21:06",
    price: "740",
    quantity: "703",
    instrument: "Nifty 24500 CE",
    strategyId: "33981",
    profit: "4349",
    profitClass: "text-pink-600",
  },
  // ... more trades
];

const strategyData = [
  {
    id: "12345i",
    strategyId: "50963",
    amount: "104.45",
    stopLoss: "2",
    transactionTime: "2024-07-08 10:21:06",
    closedTime: "2024-07-08 10:21:06",
    reason: "User stopped copying",
  },
  // ... more strategies
];

function TradeHistoryTable() {
  const [isTradeIdDropdownOpen, setIsTradeIdDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
  const [isStrategyIdDropdownOpen, setIsStrategyIdDropdownOpen] = useState(false);
  const [isAmountDropdownOpen, setIsAmountDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Trade");

  const headers = [
    { title: "Trade ID", width: "w-[116px]", hasDropdown: true },
    { title: "Time", width: "w-[162px]" , hasDropdown: true },
    { title: "Price", width: "w-24", hasDropdown: true },
    { title: "Quantity", width: "w-[116px]" },
    { title: "Instrument", width: "w-[126px]" },
    { title: "Strategy ID", width: "w-[126px]" },
    { title: "Realized Profit", width: "w-[178px]" },
  ];

  const strategyHeaders = [
    { title: "Trade ID", width: "w-[116px]", hasDropdown: true },
    { title: "Strategy ID", width: "w-[126px]", hasDropdown: true },
    { title: "Amount", width: "w-24", hasDropdown: true },
    { title: "Stop loss %", width: "w-24", hasDropdown: false },
    { title: "Transaction Time", width: "w-[162px]", hasDropdown: false },
    { title: "Closed Time", width: "w-[162px]", hasDropdown: false },
    { title: "Reason", width: "w-[200px]", hasDropdown: false },
  ];

  return (
    <section className="w-full mt-5">
      <header className="flex flex-wrap gap-10 justify-between items-center w-full mb-5">
        <h1 className="self-stretch my-auto text-xl font-bold leading-none text-black">
          History
        </h1>
        <nav className="flex gap-4 items-center self-stretch my-auto">
        <span className="icon-eye-slash text-2xl"></span>
          <span className="icon-refresh text-2xl"></span>
          <span className="icon-export text-2xl"></span>
        </nav>
      </header>

      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab("Trade")}
          className={`py-2 px-4 text-sm font-medium ${activeTab === "Trade" ? "bg-[#CDE8A3] text-black" : "text-gray-600 hover:bg-gray-100"} border rounded-l`}
        >
          Trade
        </button>
        <button
          onClick={() => setActiveTab("Strategy")}
          className={`py-2 px-4 text-sm font-medium ${activeTab === "Strategy" ? "bg-[#CDE8A3] text-black" : "text-gray-600 hover:bg-gray-100"} border rounded-r`}
        >
          Strategy
        </button>
      </div>

      <div className="relative  p-6 bg-white shadow rounded-lg">
        <table className="w-full table-auto text-left text-gray-600 border-collapse">
          <thead>
            <tr className="border-b text-sm bg-gray-100">
              {(activeTab === "Trade" ? headers : strategyHeaders).map((header, index) => (
                <th
                  key={index}
                  className={`px-4 py-2 ${header.width} border-r border-b font-bold text-gray-700 relative`}
                >
                  <div className="flex items-center justify-between">
                    {header.title}
                    {header.hasDropdown && (
                      <button
                        onClick={() =>
                          header.title === "Trade ID"
                            ? (activeTab === "Trade" ? setIsTradeIdDropdownOpen(!isTradeIdDropdownOpen) : setIsStrategyIdDropdownOpen(!isStrategyIdDropdownOpen))
                            : header.title === "Price"
                            ? setIsPriceDropdownOpen(!isPriceDropdownOpen)
                            : header.title === "Amount"
                            ? setIsAmountDropdownOpen(!isAmountDropdownOpen)
                            : null
                        }
                        className="text-gray-500"
                      >
                        <span className="icon-arrow-down-1 "></span>
                      </button>
                    )}
                  </div>
                  {/* Dropdowns */}
                  {(header.title === "Trade ID" && (activeTab === "Trade" ? isTradeIdDropdownOpen : isStrategyIdDropdownOpen)) && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded shadow-lg">
                      <div className="p-4 flex flex-col">
                        <input
                          type="date"
                          className="border border-gray-300 rounded w-full px-2 py-1 mb-2"
                          placeholder="From"
                        />
                        <input
                          type="date"
                          className="border border-gray-300 rounded w-full px-2 py-1 mb-2"
                          placeholder="To"
                        />
                        <div className="flex justify-end gap-2 mt-2">
                          <button
                            onClick={() => (activeTab === "Trade" ? setIsTradeIdDropdownOpen(false) : setIsStrategyIdDropdownOpen(false))}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
                          >
                            Clear
                          </button>
                          <button
                            onClick={() => (activeTab === "Trade" ? setIsTradeIdDropdownOpen(false) : setIsStrategyIdDropdownOpen(false))}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {(header.title === "Price" && isPriceDropdownOpen) && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded shadow-lg">
                      <div className="p-4 flex flex-col">
                        <input
                          type="number"
                          className="border border-gray-300 rounded w-full px-2 py-1 mb-2"
                          placeholder="Min Amount"
                        />
                        <input
                          type="number"
                          className="border border-gray-300 rounded w-full px-2 py-1 mb-2"
                          placeholder="Max Amount"
                        />
                        <div className="flex justify-end gap-2 mt-2">
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
                  {(header.title === "Amount" && isAmountDropdownOpen) && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded shadow-lg">
                      <div className="p-4 flex flex-col">
                        <input
                          type="number"
                          className="border border-gray-300 rounded w-full px-2 py-1 mb-2"
                          placeholder="Min Amount"
                        />
                        <input
                          type="number"
                          className="border border-gray-300 rounded w-full px-2 py-1 mb-2"
                          placeholder="Max Amount"
                        />
                        <div className="flex justify-end gap-2 mt-2">
                          <button
                            onClick={() => setIsAmountDropdownOpen(false)}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
                          >
                            Clear
                          </button>
                          <button
                            onClick={() => setIsAmountDropdownOpen(false)}
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
          <tbody>
            {(activeTab === "Trade" ? tradeData : strategyData).map((item, index) => (
              <tr
                key={index}
                className={`border-t ${index % 2 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}
              >
                {activeTab === "Trade" ? (
                  <>
                    <td className="px-4 py-2 text-sm">{item.id}</td>
                    <td className="px-4 py-2 text-sm">{item.time}</td>
                    <td className="px-4 py-2 text-sm">{item.price}</td>
                    <td className="px-4 py-2 text-sm">{item.quantity}</td>
                    <td className="px-4 py-2 text-sm">{item.instrument}</td>
                    <td className="px-4 py-2 text-sm">{item.strategyId}</td>
                    <td className="px-4 py-2 text-sm font-semibold">
                      <div className="flex items-center">
                        <i className={`icon-arrow-up-3 ${item.profitClass} p-0.5 mr-2 rounded-sm profit-arrow`}></i>
                        {item.profit}
                      </div>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-4 py-2 text-sm">{item.id}</td>
                    <td className="px-4 py-2 text-sm">{item.strategyId}</td>
                    <td className="px-4 py-2 text-sm">{item.amount}</td>
                    <td className="px-4 py-2 text-sm">{item.stopLoss}</td>
                    <td className="px-4 py-2 text-sm">{item.transactionTime}</td>
                    <td className="px-4 py-2 text-sm">{item.closedTime}</td>
                    <td className="px-4 py-2 text-sm">{item.reason}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TradeHistoryTable;
