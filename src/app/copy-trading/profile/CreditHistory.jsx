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
    <main className="flex flex-col rounded-none p-6">
      <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full mb-6">
        <h1 className="my-auto text-xl font-semibold text-black">
          Credit History
        </h1>

      

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

      <div className="flex mb-4">
        <button
         
          className={`py-2 px-4 text-sm font-medium hover:bg-gray-100 border rounded-l bg-[#CDE8A3] text-black`}
        >
          All
        </button>

        
        <button
          className={`py-2 px-4 text-sm font-medium  "text-gray-600 hover:bg-gray-100 border rounded-r`}
        >
          Top Ups
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium  "text-gray-600 hover:bg-gray-100 border rounded-r`}
        >
        Debit
        </button>

      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm font-semibold leading-none rounded-lg text-neutral-800">
          <thead>
            <tr className="text-xl font-bold text-lime-500 bg-neutral-800">
              <th className="px-6 text-left border-r border-b border-zinc-300 w-[168px]">
                <div className="flex gap-2.5 items-center">
                 <span className='icon-calendar-1'></span>
                  <span>ID</span>
                </div>
              </th>
              <th className="px-6 text-left border-r border-b border-zinc-300 w-[290px]">
                <div className="flex gap-2.5 items-center">
                 <span className='icon-textalign-justifyleft'></span>
                  <span>Type</span>
                </div>
              </th>
              <th className="px-6 text-left border-r border-b border-zinc-300 w-[272px]">
                <div className="flex gap-2.5 items-center">
                 <span className='icon-user'></span>
                  <span>Credits</span>
                </div>
              </th>
              <th className="px-6 py-3 text-left border-r border-b border-zinc-300 w-[396px]">
                <div className="flex gap-2.5 items-center">
                  <span className='icon-clock'></span>
                  <span>Date Time</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {creditHistoryData.map((row, index) => (
              <tr key={index} className="border-b border-black bg-zinc-50">
                <td className="p-6 border-r border-b border-zinc-300">
                  <a href={`#${row.id}`} className="text-blue-500 underline">
                    {row.id}
                  </a>
                </td>
                <td className="p-6 border-r border-b border-zinc-300">{row.type}</td>
                <td className={`p-6 border-r border-b border-zinc-300 font-bold ${
                  row.credits.startsWith('+') ? 'text-green-600' : 'text-red-700'
                }`}>
                  {row.credits}
                </td>
                <td className="p-6 border-r border-b border-zinc-300">{row.dateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default CreditHistory;