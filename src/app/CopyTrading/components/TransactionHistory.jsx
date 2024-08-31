'use client'
import React from "react";

import WeekFilter from './WeekFilter'; // Import the new component


function TransactionHistory() {
  return (
    <section className="">

<div className="flex align-center justify-between mb-5">

<main className="flex gap-10 items-start p-6" id='week-filter'>
              <header className="w-full">
                <h1 className="text-xl font-semibold text-black">
                  Copy Transaction History
                </h1>
                <p className="mt-1 text-sm text-neutral-500">
                  This page only shows your copy history. To View Live positions -{" "}
                  <a href="#" className="font-semibold text-blue-500">
                    Click Here
                  </a>
                </p>
              </header>
             
            </main>

 
      </div>
      <div className="flex overflow-hidden flex-col w-full text-sm leading-none bg-white rounded-xl shadow-sm text-neutral-800 max-md:mr-1.5 max-md:max-w-full">
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="bg-neutral-800 text-lime-500">
        <th className="p-6 border-r border-b border-zinc-300 min-h-[60px] w-36">
          <div className="flex gap-1 justify-center items-center">
            Trade ID
            <img loading="lazy" src="./d-arrow.svg" alt="" className="w-2.5 aspect-square" />
            <img loading="lazy" src="./filter.svg" alt="" className="w-3.5 aspect-square" />
          </div>
        </th>
        <th className="p-6 border-r border-b border-zinc-300 min-h-[60px] w-48">
          <div className="flex gap-1 justify-center items-center">
            Time
            <img loading="lazy" src="./d-arrow.svg" alt="" className="w-2.5 aspect-square" />
            <img loading="lazy" src="./filter.svg" alt="" className="w-3.5 aspect-square" />
          </div>
        </th>
        <th className="p-6 border-r border-b border-zinc-300 min-h-[60px] w-[124px]">
          <div className="flex gap-1 justify-center items-center">
            Price
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb08aba0a42611a98211670133703ebf4eb1a5bc79525a3ec8f79d7a4f775839?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="w-2.5 aspect-square" />
            <img loading="lazy" src="./filter.svg" alt="" className="w-3.5 aspect-square" />
          </div>
        </th>
        <th className="p-6 border-r border-b border-zinc-300 min-h-[60px] w-36">
          <div className="flex gap-1 justify-center items-center">
            Quantity
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c086b6c816a93ce74f7b7a7ebc3b54367d99cf26ebcc2087c5e09337b643cfd?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="w-2.5 aspect-square" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/adce928802fc074a5d3bb67605171e7a3553812f8e67e34a713ac1964d2eb81f?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="w-3.5 aspect-square" />
          </div>
        </th>
        <th className="px-1.5 py-6 border-r border-b border-zinc-300 w-[154px]">
          <div className="flex gap-1 justify-center items-center">
            Instrument
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0dfb23ea60bc3961b0e0425ee8b70338aeb1ba75205f232121029783899dd61?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="w-2.5 aspect-square" />
            <img loading="lazy" src="./filter.svg" alt="" className="w-3.5 aspect-square" />
          </div>
        </th>
        <th className="pr-5 pl-5 py-6 border-r border-b border-zinc-300 min-h-[59px] w-[155px]">
          <div className="flex gap-1 justify-center items-center">
            Strategy ID
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d13afc601143a2073a4a343ef2559b4600b99ac0ea3070a903a0336dceb3f0b?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="w-2.5 aspect-square" />
            <img loading="lazy" src="./filter.svg" alt="" className="w-3.5 aspect-square" />
          </div>
        </th>
        <th className="px-6 py-5 border-r border-b border-zinc-300 min-h-[59px] w-52">
          <div className="flex gap-1 justify-center items-center">
            Realized Profit
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f384b7a3e6faba2f340d53d36bd7f6724d07627009517810d1cfe5016ea03da8?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="w-[18px] aspect-square" />
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="p-6 border-r border-b border-zinc-300">123456</td>
        <td className="p-6 border-r border-b border-zinc-300">12:30 PM</td>
        <td className="p-6 border-r border-b border-zinc-300">$120.50</td>
        <td className="p-6 border-r border-b border-zinc-300">10</td>
        <td className="p-6 border-r border-b border-zinc-300">AAPL</td>
        <td className="p-6 border-r border-b border-zinc-300">STRAT123</td>
        <td className="p-6 border-r border-b border-zinc-300">$150.00</td>
      </tr>
      <tr>
        <td className="p-6 border-r border-b border-zinc-300">123457</td>
        <td className="p-6 border-r border-b border-zinc-300">12:45 PM</td>
        <td className="p-6 border-r border-b border-zinc-300">$130.75</td>
        <td className="p-6 border-r border-b border-zinc-300">15</td>
        <td className="p-6 border-r border-b border-zinc-300">GOOGL</td>
        <td className="p-6 border-r border-b border-zinc-300">STRAT124</td>
        <td className="p-6 border-r border-b border-zinc-300">$200.00</td>
      </tr>
      <tr>
        <td className="p-6 border-r border-b border-zinc-300">123458</td>
        <td className="p-6 border-r border-b border-zinc-300">01:00 PM</td>
        <td className="p-6 border-r border-b border-zinc-300">$110.20</td>
        <td className="p-6 border-r border-b border-zinc-300">20</td>
        <td className="p-6 border-r border-b border-zinc-300">TSLA</td>
        <td className="p-6 border-r border-b border-zinc-300">STRAT125</td>
        <td className="p-6 border-r border-b border-zinc-300">$180.00</td>
      </tr>
      <tr>
        <td className="p-6 border-r border-b border-zinc-300">123459</td>
        <td className="p-6 border-r border-b border-zinc-300">01:15 PM</td>
        <td className="p-6 border-r border-b border-zinc-300">$140.10</td>
        <td className="p-6 border-r border-b border-zinc-300">8</td>
        <td className="p-6 border-r border-b border-zinc-300">MSFT</td>
        <td className="p-6 border-r border-b border-zinc-300">STRAT126</td>
        <td className="p-6 border-r border-b border-zinc-300">$170.00</td>
      </tr>
    </tbody>
  </table>
</div>


    </section>
  );
}

export default TransactionHistory;
