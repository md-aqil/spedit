import React from 'react';

// Dummy data for positions
const positions = [
  {
    orderId: '1233467i',
    strategyId: '150230si',
    timeData: '12/12/2023 11:25:32',
    instrument: 'BankNifty 24 JUL26400PE',
    entryPrice: '700.70',
    currentPrice: '700.70',
    qty: 10,
    runningPnL: '+19,423.5',
  },

  {
    orderId: '1233467i',
    strategyId: '150230si',
    timeData: '12/12/2023 11:25:32',
    instrument: 'BankNifty 24 JUL26400PE',
    entryPrice: '700.70',
    currentPrice: '700.70',
    qty: 10,
    runningPnL: '-19,423.5',
  },

 
];

function LivePositionsTable() {
  return (
    <div className="overflow-hidden mt-3.5 bg-white rounded-lg shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-gray-50 text-xs font-semibold text-neutral-600">
            <tr>
              <th className="px-6 py-3 text-left">OrderID</th>
              <th className="px-6 py-3 text-left">StrategyID</th>
              <th className="px-6 py-3 text-left">Time Data</th>
              <th className="px-6 py-3 text-left">Instrument</th>
              <th className="px-6 py-3 text-left">Qty</th>
              <th className="px-6 py-3 text-left">Entry Price</th>
          
              <th className="px-6 py-3 text-left">Current Price</th>
              <th className="px-6 py-3 text-left">Running PnL</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm text-neutral-800">
            {positions.map((position, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">{position.orderId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{position.strategyId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{position.timeData}</td>
                <td className="px-6 py-4 whitespace-nowrap">{position.instrument}</td>
                <td className="px-6 py-4 whitespace-nowrap">{position.qty}</td>

                <td className="px-6 py-4 whitespace-nowrap">{position.entryPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap">{position.currentPrice}</td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                   
                  >
                   <i  className={`${
                      position.runningPnL.startsWith('+') ? 'icon-arrow-up-3 profit-arrow' : 'icon-arrow-down loss-arrow'
                    }`}></i> {position.runningPnL}
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
  );
}

export default LivePositionsTable;
