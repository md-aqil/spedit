
'use client'
import React, { useState } from 'react';

// Dummy data for positions
const positions = [
  {
    orderId: 'ORD001',
    strategyId: 'STRAT123',
    timeData: '12:30 PM',
    instrument: 'AAPL',
    entryPrice: '150.00',
    currentPrice: '155.00',
    qty: 10,
    runningPnL: '+50.00',
  },
  {
    orderId: 'ORD002',
    strategyId: 'STRAT456',
    timeData: '01:00 PM',
    instrument: 'GOOGL',
    entryPrice: '2800.00',
    currentPrice: '2790.00',
    qty: 5,
    runningPnL: '-50.00',
  },
];

function LivePositionsTable() {
  const [activeTab, setActiveTab] = useState('Live Positions');

  return (
    <div className="flex flex-col mt-8 w-full mx-auto shadow-md">
      <div className="flex flex-col w-full">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Tabs Navigation */}
          <nav className="flex gap-3 items-center py-3 px-6 bg-gray-100 text-xs font-medium text-neutral-500">
            {['Live Positions', 'Position History', 'Current Copiers', 'Mock Copiers'].map((tab) => (
              <div
                key={tab}
                className={`cursor-pointer px-4 py-2 rounded ${
                  activeTab === tab ? 'bg-white text-neutral-800 font-bold shadow' : 'hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </nav>
          <div className="border-b-2 border-lime-500 mx-6" />
        </div>

        {/* Content based on Active Tab */}
        {activeTab === 'Live Positions' && (
          <div className="overflow-hidden mt-3.5 bg-white rounded-lg shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white divide-y divide-gray-200">
                {/* Table Header */}
                <thead className="bg-gray-50 text-xs font-semibold text-neutral-600">
                  <tr>
                    <th className="px-6 py-3 text-left">OrderID</th>
                    <th className="px-6 py-3 text-left">StrategyID</th>
                    <th className="px-6 py-3 text-left">Time Data</th>
                    <th className="px-6 py-3 text-left">Instrument</th>
                    <th className="px-6 py-3 text-left">Entry Price</th>
                    <th className="px-6 py-3 text-left">Qty</th>
                    <th className="px-6 py-3 text-left">Current Price</th>
                    <th className="px-6 py-3 text-left">Running PnL</th>
                    <th className="px-6 py-3 text-left">Actions</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-200 text-sm text-neutral-800">
                  {positions.map((position, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap">{position.orderId}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{position.strategyId}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{position.timeData}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{position.instrument}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{position.entryPrice}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{position.qty}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{position.currentPrice}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`font-bold ${position.runningPnL.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {position.runningPnL}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="bg-pink-700 text-white px-3 py-1 rounded hover:bg-pink-800 transition">
                          Close
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Placeholder content for other tabs */}
        {activeTab !== 'Live Positions' && (
          <div className="p-6 mt-3.5 bg-white rounded-lg shadow-sm text-center text-neutral-600">
            {activeTab} content goes here.
          </div>
        )}
      </div>
    </div>
  );
}

export default LivePositionsTable;
