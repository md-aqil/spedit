import React, { useState } from 'react';

const creditHistoryData = [
  { id: '12345i', type: 'Quest', credits: '+40', dateTime: '09-01-2024 | 12:30' },
  { id: '12345i', type: 'Copy', credits: '-40', dateTime: '09-01-2024 | 12:30' },
  { id: '12345i', type: 'Top-up', credits: '+1640', dateTime: '09-01-2024 | 12:30' },
  { id: '12345i', type: 'Referral', credits: '+40', dateTime: '09-01-2024 | 12:30' },
  { id: '12345i', type: 'Build', credits: '-40', dateTime: '09-01-2024 | 12:30' },
];

function CreditHistory() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Week');

  return (
    <main className="flex flex-col rounded-none mt-5">
      <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full mb-6 hidden-xs">
        <h1 className="my-auto text-xl font-semibold text-black ">Credit History</h1>

        <div className="flex gap-6 items-center text-base text-neutral-800">
          <div className="flex flex-col self-stretch my-auto rounded-md border border-solid border-stone-400 w-[216px]">
            <div className="flex flex-col w-full rounded-lg max-w-[216px]">
              <button
                onClick={() => setSelectedPeriod(selectedPeriod === 'This Week' ? 'Last Week' : 'This Week')}
                className="flex gap-10 justify-between items-center px-5 py-2 bg-white rounded-lg min-h-[38px] w-full"
                aria-haspopup="listbox"
                aria-expanded="false"
              >
                <span className="self-stretch my-auto opacity-40">{selectedPeriod}</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd2ae6da03cb0038ed24cc8da14f6a7e89547dd90566e2c6bf8b04bd7d68073?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  alt="Toggle period selection"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-5">
        <div className="flex mb-4 max-md:mb-0">
          <button className="py-2 px-4 text-sm font-medium hover:bg-gray-100 border rounded-l bg-[#CDE8A3] text-black">All</button>
          <button className="py-2 px-4 text-sm font-medium text-gray-600 hover:bg-gray-100 border rounded-r">Top Ups</button>
          <button className="py-2 px-4 text-sm font-medium text-gray-600 hover:bg-gray-100 border rounded-r">Debit</button>
        </div>
        <span className="block md:hidden text-lime-500 underline icon-filter text-2xl"></span>
      </div>

      {/* Table for desktop */}
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full text-sm font-semibold leading-none rounded-lg text-neutral-800">
          <thead>
            <tr className="font-bold text-lime-500 bg-neutral-800">
              <th className="px-6 py-4 text-left border-r border-b border-zinc-300 w-[168px]">ID</th>
              <th className="px-6 text-left border-r border-b border-zinc-300 w-[290px]">Type</th>
              <th className="px-6 text-left border-r border-b border-zinc-300 w-[272px]">Credits</th>
              <th className="px-6 text-left border-r border-b border-zinc-300 w-[396px]">Date Time</th>
            </tr>
          </thead>
          <tbody>
            {creditHistoryData.map((row, index) => (
              <tr key={index} className="border-b border-black bg-zinc-50">
                <td className="p-6 border-r border-b border-zinc-300">
                  <a href={`#${row.id}`} className="text-blue-500 underline">{row.id}</a>
                </td>
                <td className="p-6 border-r border-b border-zinc-300">{row.type}</td>
                <td className={`p-6 border-r border-b border-zinc-300 font-bold ${row.credits.startsWith('+') ? 'text-green-600' : 'text-red-700'}`}>
                  {row.credits}
                </td>
                <td className="p-6 border-r border-b border-zinc-300">{row.dateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card view for mobile */}
      <div className="md:hidden space-y-4">
        {creditHistoryData.map((row, index) => (
          <div key={index} className="border-b mb-4 py-4 text-[#A2AB9A] bg-[#242620] card-table">
            <div className="flex justify-between items-center">
              <span className="text-neutral-800 font-bold">ID</span>
              <a href={`#${row.id}`} className="text-blue-500 underline">{row.id}</a>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-neutral-800 font-bold">Type</span>
              <span>{row.type}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-neutral-800 font-bold">Credits</span>
              <span className={`${row.credits.startsWith('+') ? 'text-green-600' : 'text-red-700'} font-bold`}>{row.credits}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-neutral-800 font-bold">Date Time</span>
              <span>{row.dateTime}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default CreditHistory;
