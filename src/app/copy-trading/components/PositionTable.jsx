import React from 'react';

const PositionTable = ({ positions }) => {
  return (
    <div className="p-6 mt-4 bg-white shadow rounded-lg pstable">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 hidden-xs">Positions</h2>
      
      {/* Table for desktop */}
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full table-auto text-left text-gray-600">
          <thead>
            <tr className="border-b text-sm">
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Instrument</th>
              <th className="px-4 py-2">Qty</th>
              <th className="px-4 py-2">Entry Price</th>
              <th className="px-4 py-2">Current Price</th>
              <th className="px-4 py-2">Running PnL</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((position, index) => (
              <tr key={index} className={`border-t hover:bg-gray-50 ${index % 2 ? 'bg-gray-100' : ''}`}>
                <td className="px-4 py-2 text-sm">{position.orderId}</td>
                <td className="px-4 py-2 text-sm">{position.timeData}</td>
                <td className="px-4 py-2 text-sm">{position.instrument}</td>
                <td className="px-4 py-2 text-sm">{position.qty}</td>
                <td className="px-4 py-2 text-sm">{position.entryPrice}</td>
                <td className="px-4 py-2 text-sm">{position.currentPrice}</td>
                <td className="px-4 py-2 text-sm font-bold text-stone-950">
                  <div className="flex items-center">
                    <i className='icon-arrow-up-3 bg-lime-500 p-0.5 bold mr-1 rounded-sm shadow-sm'></i>
                    {position.runningPnL}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards for mobile */}
      <div className="block md:hidden">
        {positions.map((position, index) => (
          <div key={index} className="border-b mb-4 py-4 text-[#A2AB9A] bg-[#242620] card-table">
            <p className="font-bold mb-2 text-white">Order ID - {position.orderId}</p>
            <p className="text-sm"><b>Time:</b> {position.timeData}</p>
            <p className="text-sm"><b>Instrument:</b> {position.instrument}</p>
            <p className="text-sm"><b>Qty:</b> {position.qty}</p>
            <p className="text-sm"><b>Entry Price:</b> {position.entryPrice}</p>
            <p className="text-sm"><b>Current Price:</b> {position.currentPrice}</p>
            <p className="text-sm">
              Running PnL
              <div className="flex items-center  ">
                <i className='icon-arrow-up-3 bg-lime-500 p-0.5 bold mr-1 rounded-sm shadow-sm text-black text-xs'></i>
                {position.runningPnL}
              </div>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PositionTable;
