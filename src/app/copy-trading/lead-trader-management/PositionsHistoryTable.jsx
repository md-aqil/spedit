import React from 'react';

// Dummy data for positions
const positions = [
  {
    orderId: '1233467i',
    strategyId: '150230si',
    timeData: '12/12/2023 11:25:32',
    instrument: 'BankNifty 24 JUL26400PE',
    qty: 50,
    entryPrice: '700.70',
    exitPrice: '700.70',
    realizedPnL: '19,423.5',
  },
];

function PositionsHistoryTable() {
  return (
    <div className="overflow-hidden mt-3.5 bg-white rounded-lg shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-gray-50 text-xs font-semibold text-neutral-600">
            <tr>
              <th className="px-6 py-3 text-left">Order ID</th>
              <th className="px-6 py-3 text-left">Strategy ID</th>
              <th className="px-6 py-3 text-left">Time Data</th>
              <th className="px-6 py-3 text-left">Instrument</th>
              <th className="px-6 py-3 text-left">Entry Price</th>
              <th className="px-6 py-3 text-left">Qty</th>
              <th className="px-6 py-3 text-left">Exit Price</th>
              <th className="px-6 py-3 text-left">Realized PnL</th>
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

                <td className="px-6 py-4 whitespace-nowrap">{position.exitPrice}</td>

                <td className="px-6 py-4 whitespace-nowrap"> <span className='icon-arrow-up-3 profit-arrow'></span> {position.realizedPnL}</td>
                
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PositionsHistoryTable;
