'use client'
import React, { useState } from 'react';

const strategies = [
  { id: 'abc123', type: 'API', name: 'Scalper', status: 'LIVE' },
  { id: 'def456', type: 'Manual', name: 'Batman', status: 'STOPPED' },
  { id: 'ghi789', type: 'API', name: 'Slimfingers', status: 'STOPPED' },
  { id: 'jkl012', type: 'Manual', name: 'Slimfingers', status: 'LIVE' },
  { id: 'mno345', type: 'Manual', name: 'Slimfingers', status: 'LIVE' },
];

function StrategyTable() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [strategyType, setStrategyType] = useState(strategies.map(() => false));

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleStrategyTypeToggle = (index) => {
    const newStrategyType = strategyType.map((open, i) => (i === index ? !open : false));
    setStrategyType(newStrategyType);
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        {/* Table */}
        <table className="min-w-full bg-white border border-gray-200">
          {/* Table Header */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Broker</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-gray-700">
            {strategies.map((strategy, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                {/* ID */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{strategy.id}</td>

                {/* Strategy Type Dropdown */}
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                {strategy.type}
                </td>

                {/* Strategy Name */}
                <td className="px-6 py-4 whitespace-nowrap text-sm">{strategy.name}</td>

                {/* Connect Broker Dropdown */}
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="flex items-center text-blue-500 hover:text-blue-600 transition"
                    >
                      Connect Broker
                      <svg
                        className={`w-4 h-4 ml-2 transform ${
                          dropdownOpen === index ? 'rotate-180' : 'rotate-0'
                        } transition-transform`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {dropdownOpen === index && (
                      <div className="absolute z-10 mt-2 bg-white border border-gray-200 rounded shadow-lg w-full">
                        <ul className="py-1">
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Broker 1</li>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Broker 2</li>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Broker 3</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 py-1 rounded-md text-white ${
                      strategy.status === 'LIVE' ? 'bg-lime-500' : 'bg-pink-700'
                    }`}
                  >
                    {strategy.status}
                  </span>
                
                </td>

             
                <td className="px-6 py-4 whitespace-nowrap text-sm flex space-x-2">
                  <button
                    className={`px-3 py-2 rounded text-white ${
                      strategy.status === 'LIVE' ? 'bg-pink-700' : 'bg-lime-500'
                    } hover:opacity-80 transition`}
                  >
                    {strategy.status === 'LIVE' ? 'Stop Strategy' : 'Start Strategy'}
                  </button>
                  <a href='./update-strategy/' className="px-3 py-2 border rounded border-neutral-800 text-neutral-800 hover:bg-neutral-100 transition">
                    Update Strategy
                  </a>
                  <button className="px-3 py-2 border rounded border-neutral-800 text-neutral-800 hover:bg-neutral-100 transition">
                   Start
                  </button>
                  <button className="px-3 py-2 border rounded border-neutral-800 text-neutral-800 hover:bg-neutral-100 transition">
                  Manage
                  </button>
                </td>

               
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StrategyTable;
