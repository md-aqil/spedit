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
  const [activeTab, setActiveTab] = useState("Trade");

  const headers = [
    { title: "Trade ID", width: "w-[116px]" },
    { title: "Time", width: "w-[162px]" },
    { title: "Price", width: "w-24" },
    { title: "Quantity", width: "w-[116px]" },
    { title: "Instrument", width: "w-[126px]" },
    { title: "Strategy ID", width: "w-[126px]" },
    { title: "Realized Profit", width: "w-[178px]" },
  ];

  const strategyHeaders = [
    { title: "Trade ID", width: "w-[116px]" },
    { title: "Strategy ID", width: "w-[126px]" },
    { title: "Amount", width: "w-24" },
    { title: "Stop loss %", width: "w-24" },
    { title: "Transaction Time", width: "w-[162px]" },
    { title: "Closed Time", width: "w-[162px]" },
    { title: "Reason", width: "w-[200px]" },
  ];

  return (
    <section className="w-full mt-5">
      <header className="w-full flex justify-between mb-10 hidden-xs">
        <div className="">
          <h1 className="text-xl font-semibold text-black">Copy Transaction History</h1>
          <p className="mt-1 text-sm text-neutral-500">
            This page only shows your copy history. To View Live positions -{" "}
            <a href="#" className="font-semibold text-blue-500">
              Click Here
            </a>
          </p>
        </div>

        <div className="relative">
          <input
            type="date"
            id="date"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm appearance-none"
          />
        </div>
      </header>

      {/* Tab Buttons */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex mobile-filter">
          <button
            onClick={() => setActiveTab("Trade")}
            className={`py-2 px-4 text-sm font-medium ${activeTab === "Trade" ? "bg-[#CDE8A3] text-black tb-active" : "text-gray-600 hover:bg-gray-100"} border rounded-l`}
          >
            Live
          </button>

          <button
            onClick={() => setActiveTab("Strategy")}
            className={`py-2 px-4 text-sm font-medium ${activeTab === "Strategy" ? "bg-[#CDE8A3] text-black tb-active" : "text-gray-600 hover:bg-gray-100"} border rounded-r`}
          >
            Mock
          </button>
        </div>

        {/* Filter Button with underline on mobile */}
        <span className="block md:hidden text-lime-500 underline icon-filter text-2xl"></span>
      </div>

      {/* Table or Card layout based on screen size */}
      <div className="relative p-6 bg-white shadow rounded-lg max-md:p-0 max-md:bg-transparent">
        <table className="hidden md:table w-full table-auto text-left text-gray-600 border-collapse">
          <thead>
            <tr className="border-b text-sm bg-gray-100">
              {(activeTab === "Trade" ? headers : strategyHeaders).map((header, index) => (
                <th key={index} className={`px-4 py-2 ${header.width} border-r border-b font-bold text-gray-700`}>
                  {header.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(activeTab === "Trade" ? tradeData : strategyData).map((item, index) => (
              <tr key={index} className={`border-t ${index % 2 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}>
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
                        <i className={`icon-arrow-up-3 ${item.profitClass} p-0.5 mr-2 rounded-sm`}></i>
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

        {/* Card layout for mobile */}
        <div className="block md:hidden space-y-4">
          {(activeTab === "Trade" ? tradeData : strategyData).map((item, index) => (
            <div key={index} className="border-b mb-4 py-4 text-[#A2AB9A] bg-[#242620] card-table">
              <p className="text-white"><span className="font-bold">Trade ID:</span> {item.id}</p>
              {activeTab === "Trade" ? (
                <>
                  <p><span className="font-bold">Time:</span> {item.time}</p>
                  <p><span className="font-bold">Price:</span> {item.price}</p>
                  <p><span className="font-bold">Quantity:</span> {item.quantity}</p>
                  <p><span className="font-bold">Instrument:</span> {item.instrument}</p>
                  <p><span className="font-bold">Strategy ID:</span> {item.strategyId}</p>
                  <p><span className="font-bold">Profit:</span> {item.profit}</p>
                </>
              ) : (
                <>
                  <p><span className="font-bold">Strategy ID:</span> {item.strategyId}</p>
                  <p><span className="font-bold">Amount:</span> {item.amount}</p>
                  <p><span className="font-bold">Stop Loss:</span> {item.stopLoss}</p>
                  <p><span className="font-bold">Transaction Time:</span> {item.transactionTime}</p>
                  <p><span className="font-bold">Closed Time:</span> {item.closedTime}</p>
                  <p><span className="font-bold">Reason:</span> {item.reason}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TradeHistoryTable;
