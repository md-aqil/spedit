import * as React from "react";

function StrategyTable() {
  return (
    <div className="p-6 max-md:p-2">
      {/* Table format for desktop */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm p-6 hidden md:block">
        <table className="min-w-full text-left text-sm font-semibold text-neutral-800">
          <thead className="text-xs text-neutral-500 uppercase border-b">
            <tr>
              <th className="px-4 py-3">Strategy</th>
              <th className="px-4 py-3">Copier User ID</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Stoploss</th>
              <th className="px-4 py-3">Date/Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {/* Strategy 1 */}
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-bold" rowSpan={4}>
                Strategy 1
              </td>
              <td className="px-4 py-3">39475ci</td>
              <td className="px-4 py-3">9462</td>
              <td className="px-4 py-3">9.4</td>
              <td className="px-4 py-3">12/12/2023 11:25:32</td>
            </tr>
            <tr>
              <td className="px-4 py-3">28733ci</td>
              <td className="px-4 py-3">1148</td>
              <td className="px-4 py-3">1.1</td>
              <td className="px-4 py-3">12/12/2023 11:25:32</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3">28450ci</td>
              <td className="px-4 py-3">1374</td>
              <td className="px-4 py-3">1.3</td>
              <td className="px-4 py-3">12/12/2023 11:25:32</td>
            </tr>
            <tr>
              <td className="px-4 py-3">34985ci</td>
              <td className="px-4 py-3">5626</td>
              <td className="px-4 py-3">N/A</td>
              <td className="px-4 py-3">12/12/2023 11:25:32</td>
            </tr>

            {/* Strategy 2 */}
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-bold" rowSpan={4}>
                Strategy 2
              </td>
              <td className="px-4 py-3">79479ci</td>
              <td className="px-4 py-3">4349</td>
              <td className="px-4 py-3">4.3</td>
              <td className="px-4 py-3">12/12/2023 11:25:32</td>
            </tr>
            <tr>
              <td className="px-4 py-3">34575ci</td>
              <td className="px-4 py-3">5560</td>
              <td className="px-4 py-3">5.5</td>
              <td className="px-4 py-3">12/12/2023 11:25:32</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3">34985ci</td>
              <td className="px-4 py-3">7791</td>
              <td className="px-4 py-3">7.7</td>
              <td className="px-4 py-3">12/12/2023 11:25:32</td>
            </tr>
            <tr>
              <td className="px-4 py-3">34508ci</td>
              <td className="px-4 py-3">8861</td>
              <td className="px-4 py-3">8.5</td>
              <td className="px-4 py-3">12/12/2023 11:25:32</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Card format for mobile */}
      <div className="md:hidden space-y-4">
        {/* Strategy 1 */}
        <div className="card-table text-gray border-b">
          <h2 className="font-bold text-lg mb-2 text-white space-y-3">Strategy 1</h2>
          <div className="text-sm space-y-3">
            <p><span className="font-semibold">Copier User ID:</span> 39475ci</p>
            <p><span className="font-semibold">Amount:</span> 9462</p>
            <p><span className="font-semibold">Stoploss:</span> 9.4</p>
            <p><span className="font-semibold">Date/Time:</span> 12/12/2023 11:25:32</p>
          </div>
        </div>
        <div className="card-table">
          <h2 className="font-bold text-lg mb-2 text-white">Strategy 2</h2>
          <div className="text-sm text-gray space-y-3">
            <p><span className="font-semibold">Copier User ID:</span> 79479ci</p>
            <p><span className="font-semibold">Amount:</span> 4349</p>
            <p><span className="font-semibold">Stoploss:</span> 4.3</p>
            <p><span className="font-semibold">Date/Time:</span> 12/12/2023 11:25:32</p>
          </div>
        </div>
        {/* You can add more cards similarly */}
      </div>
    </div>
  );
}

export default StrategyTable;
