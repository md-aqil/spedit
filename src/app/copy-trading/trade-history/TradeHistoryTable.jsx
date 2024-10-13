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
    { title: "Time", width: "w-[162px]", hasDropdown: true },
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
      
      <div className="w-full max-md:flex justify-between max-md:flex-row-reverse">
      <header className="flex flex-wrap gap-10 justify-between items-center w-full mb-5 max-md:justify-end">
        <h1 className="self-stretch my-auto text-xl font-bold leading-none text-black hidden-xs">
          History
        </h1>
        <nav className="flex gap-4 items-center self-stretch my-auto max-md:text-white">
          <span className="icon-eye-slash text-2xl"></span>
          <span className="icon-refresh text-2xl"></span>
          <span className="icon-export text-2xl"></span>
        </nav>

      </header>

      {/* Tabs for Trade and Strategy */}
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab("Trade")}
          className={`py-2 px-4 text-sm font-medium ${activeTab === "Trade" ? "tab-active" : "tab"} border rounded-l`}
        >
          Trade
        </button>
        <button
          onClick={() => setActiveTab("Strategy")}
          className={`py-2 px-4 text-sm font-medium ${activeTab === "Strategy" ? "tab-active" : "tab"} border rounded-r`}
        >
          Strategy
        </button>
      </div>

      </div>

      {/* Table for Desktop */}
      <div className="relative p-6 bg-white shadow rounded-lg hidden lg:block">
        <table className="w-full table-auto text-left text-gray-600 border-collapse">
          <thead>
            <tr className="border-b text-sm bg-slate-900 py-5">
              {(activeTab === "Trade" ? headers : strategyHeaders).map((header, index) => (
                <th key={index} className={`px-4 py-4 ${header.width} border-r border-b font-bold text-primary mb-4 relative`}>
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
                        className="text-primary"
                      >
                        <span className="icon-arrow-down-1 "></span>
                      </button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(activeTab === "Trade" ? tradeData : strategyData).map((item, index) => (
              <tr key={index} className={`border-t ${index % 2 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
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

      {/* Card Layout for Mobile */}
      <div className="block lg:hidden">
        {(activeTab === "Trade" ? tradeData : strategyData).map((item, index) => (
          <div key={index} className="text-[#A2AB9A] border-b bg-[#242620] card-table my-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-white">Trade ID: {item.id}</h3>
              <span className={`font-semibold ${item.profitClass}`}>{item.profit}</span>
            </div>
            <p className="text-sm"><span>Time:</span> {item.time}</p>
            <p className="text-sm"><span>Price:</span> {item.price}</p>
            <p className="text-sm"><span>Quantity: </span>{item.quantity}</p>
            <p className="text-sm"><span>Instrument: </span>{item.instrument}</p>
            <p className="text-sm"><span>Strategy ID:</span> {item.strategyId}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TradeHistoryTable;
