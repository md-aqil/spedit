import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const brokerData = [
  { id: '12345i', time: '2024-07-08-10:21:06', type: 'Connected', reason: '-', name: 'Zerodha' },
  { id: '12345i', time: '2024-07-08-10:21:06', type: 'Connected', reason: '-', name: 'Angelone' },
  { id: '12345i', time: '2024-07-08-10:21:06', type: 'Disconnected', reason: 'Token Expired', name: 'Zerodha' },
  { id: '12345i', time: '2024-07-08-10:21:06', type: 'Connected', reason: '-', name: 'Zerodha' },
  { id: '12345i', time: '2024-07-08-10:21:06', type: 'Disconnected', reason: 'Stopped Copying', name: '5 paisa' },
  { id: '12345i', time: '2024-07-08-10:21:06', type: 'Disconnected', reason: 'Paused Copying', name: 'Angelone' },
  { id: '12345i', time: '2024-07-08-10:21:06', type: 'Connected', reason: '-', name: 'Groww' },
  { id: '12345i', time: '2024-07-08-10:21:06', type: 'Disconnected', reason: 'Token Expired', name: '5 paisa' },
];

function BrokerHistory() {
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState(brokerData);

  const toggleDateFilter = () => {
    setShowDateFilter(!showDateFilter);
  };

  const handleApplyFilter = () => {
    if (startDate && endDate) {
      const filtered = brokerData.filter((item) => {
        const itemDate = new Date(item.time);
        return itemDate >= startDate && itemDate <= endDate;
      });
      setFilteredData(filtered);
    }
  };

  const handleClearFilter = () => {
    setStartDate(null);
    setEndDate(null);
    setFilteredData(brokerData);
  };

  return (
    <section className="flex flex-col mt-5">
      <header className="flex flex-wrap gap-10 justify-between items-center w-full max-md:mr-1 max-md:max-w-full text-black max-md:text-white">
        <h2 className="self-stretch my-auto text-xl font-bold leading-none ">
          Broker History
        </h2>
        <div className="flex gap-4 items-center self-stretch my-auto">
            <span className='icon-filter text-2xl'></span>
            <span className='icon-eye-slash text-2xl'></span>
            <span className='icon-export text-2xl'></span>
        </div>
      </header>
      <div className="flex flex-col mt-6 w-full text-sm leading-none bg-white max-md:bg-transparent rounded-xl shadow-sm min-h-[509px] text-neutral-800 max-md:max-w-full">
        
        {/* Table for desktop */}
        <table className="hidden md:table w-full border-collapse">
          <thead>
            <tr className="text-base font-bold leading-none text-lime-500 bg-neutral-800">
              <th className="p-6 border-r border-b border-zinc-300 min-h-[60px] w-[178px] max-md:px-5">Event ID</th>
              <th className="p-6 border-r border-b border-zinc-300 min-h-[60px] min-w-[240px] w-[248px] max-md:px-5">
                <div className="flex justify-center items-center gap-1">
                  <span>Event Time</span>
                  <button onClick={toggleDateFilter}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/499841e3ecceb3e0ad13443b2eeabd8bfa6fbc0e405217cc2ebcb0e7903c0ad5?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                      className="object-contain shrink-0 w-2.5 aspect-square"
                      alt=""
                    />
                  </button>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a7ef6e394750a22efda5f1c15cd17aef917deb71ab17e8b7cf72f3a5f9d9a11?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                    className="object-contain shrink-0 w-3.5 aspect-square"
                    alt=""
                  />
                </div>
                {showDateFilter && (
                  <div className="absolute mt-2 p-4 bg-white border rounded shadow-lg">
                    <div className="flex gap-4 mb-4">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Start Date"
                        className="p-2 border rounded"
                      />
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        placeholderText="End Date"
                        className="p-2 border rounded"
                      />
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={handleApplyFilter}
                        className="px-4 py-2 bg-lime-500 text-white rounded hover:bg-lime-600"
                      >
                        Apply
                      </button>
                      <button
                        onClick={handleClearFilter}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                )}
              </th>
              <th className="p-6 border-r border-b border-zinc-300 min-h-[60px] w-[147px] max-md:px-5">
                <div className="flex justify-center items-center gap-1">
                  <span>Type</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/72537c18dbadda205ab94cdeebbfeb17b30f0a635a9175f9155afdd33bc01090?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                    className="object-contain shrink-0 w-2.5 aspect-square"
                    alt=""
                  />
                </div>
              </th>
              <th className="p-6 border-r border-b border-zinc-300 min-h-[60px] w-[178px] max-md:px-5">Reason</th>
              <th className="px-1.5 py-6 border-r border-b border-zinc-300 w-[193px]">
                <div className="flex justify-center items-center gap-1">
                  <span>Broker Name</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a7ef6e394750a22efda5f1c15cd17aef917deb71ab17e8b7cf72f3a5f9d9a11?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                    className="object-contain shrink-0 w-3.5 aspect-square"
                    alt=""
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((broker, index) => (
              <tr key={index} className="border-b border-zinc-300">
                <td className="p-6 font-semibold text-blue-500 border-r min-h-[82px] w-[178px] max-md:px-5">{broker.id}</td>
                <td className="p-3 border-r min-h-[82px] min-w-[240px] w-[246px]">{broker.time}</td>
                <td className={`p-3 font-semibold ${broker.type === 'Disconnected' ? 'text-red-500' : 'text-lime-500'} border-r min-h-[82px] w-[147px]`}>
                  {broker.type}
                </td>
                <td className="p-3 border-r min-h-[82px] w-[178px]">{broker.reason}</td>
                <td className="p-3 font-semibold text-neutral-800 border-r min-h-[82px] w-[193px]">{broker.name}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Card view for mobile */}
        <div className="block md:hidden space-y-4">
          {filteredData.map((broker, index) => (
            <div key={index} className="border-b mb-4 py-4 text-[#A2AB9A] bg-[#242620] card-table">
              <div className="flex justify-between">
                <span className="font-bold text-lime-500">Event ID: {broker.id}</span>
                <span className={` ${broker.type === 'Disconnected' ? 'text-pink-700' : 'text-lime-500'}`}>
                  {broker.type}
                </span>
              </div>
              <p className="mt-2"> <span>Event Time: </span> {broker.time}</p>
              <p className="mt-1"><span>Reason:</span> {broker.reason}</p>
              <p className="mt-1"><span>Broker Name:</span> {broker.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrokerHistory;
