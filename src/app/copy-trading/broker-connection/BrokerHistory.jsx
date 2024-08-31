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
    <section className="flex flex-col">
      <header className="flex flex-wrap gap-10 justify-between items-center w-full max-md:mr-1 max-md:max-w-full">
        <h2 className="self-stretch my-auto text-xl font-bold leading-none text-black">
          Broker History
        </h2>
        <div className="flex gap-4 items-center self-stretch my-auto w-6">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f43592abef64f07c803217ea61199ffbbc2adc5a251e40da77ac3f68b1d94088?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="object-contain self-stretch my-auto w-6 aspect-square"
            alt=""
          />
        </div>
      </header>
      <div className="flex overflow-hidden flex-col mt-6 w-full text-sm leading-none bg-white rounded-xl shadow-sm min-h-[509px] text-neutral-800 max-md:max-w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-base font-bold leading-none text-lime-500 bg-neutral-800">
              <th className="p-6 border-r border-b border-zinc-300 min-h-[60px] w-[178px] max-md:px-5">
                Event ID
              </th>
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
              <th className="p-6 border-r border-b border-zinc-300 min-h-[60px] w-[178px] max-md:px-5">
                Reason
              </th>
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
                <td className="p-6 font-semibold text-blue-500 border-r min-h-[82px] w-[178px] max-md:px-5">
                  {broker.id}
                </td>
                <td className="p-3 border-r min-h-[82px] min-w-[240px] w-[246px]">
                  {broker.time}
                </td>
                <td
                  className={`p-3 font-semibold border-r min-h-[82px] w-[147px] ${
                    broker.type === 'Disconnected' ? 'text-pink-700' : ''
                  }`}
                >
                  {broker.type}
                </td>
                <td className="p-6 border-r min-h-[82px] w-[178px] max-md:px-5">
                  {broker.reason}
                </td>
                <td className="p-5 border-r min-h-[82px] w-48">{broker.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default BrokerHistory;