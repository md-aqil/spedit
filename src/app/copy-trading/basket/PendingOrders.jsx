import React, { useState } from "react";

function PendingOrders() {
  const [activeTab, setActiveTab] = useState("pending");

  const orders = [
    {
      date: "12/12/2023",
      time: "11:25:32",
      instrument: "BankNifty 24 JUL26400PE",
      lot: "50",
      price: "700.70",
    },
    {
      date: "12/12/2023",
      time: "11:25:32",
      instrument: "BankNifty 24 JUL26400PE",
      lot: "50",
      price: "700.70",
    },
    {
      date: "1/20/2021",
      time: "10:39:30",
      instrument: "BankNifty 24 JUL22400PE",
      lot: "25",
      price: "600.70",
    },
    {
      date: "1/20/2021",
      time: "10:39:30",
      instrument: "BankNifty 24 JUL22400PE",
      lot: "25",
      price: "600.70",
    },
    {
      date: "3/9/2021",
      time: "10:20:20",
      instrument: "BankNifty 24 JUL23400PE",
      lot: "15",
      price: "400.70",
    },
    {
      date: "3/9/2021",
      time: "10:20:20",
      instrument: "BankNifty 24 JUL23400PE",
      lot: "15",
      price: "400.70",
    },
    {
      date: "1/12/2021",
      time: "9:20:20",
      instrument: "BankNifty 24 JUL23400PE",
      lot: "05",
      price: "300.70",
    },
    {
      date: "1/12/2021",
      time: "9:20:20",
      instrument: "BankNifty 24 JUL23400PE",
      lot: "05",
      price: "300.70",
    },
  ];

  return (
    <div className="flex  flex-col items-start px-6 py-5 mx-auto w-full bg-white rounded-xl card">
      {/* Tabs for Pending and Completed Orders */}
      <div className="flex gap-2 items-center text-xs font-semibold leading-none text-center">
        <button
          onClick={() => setActiveTab("pending")}
          className={`gap-2.5 self-stretch px-4 py-2 my-auto rounded ${
            activeTab === "pending"
              ? "bg-lime-500 bg-opacity-40 tb-active text-stone-950"
              : "text-stone-400"
          }`}
        >
          Pending Orders
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`self-stretch my-auto ${
            activeTab === "completed" ? "text-stone-950 tb-active" : "text-stone-400"
          }`}
        >
          Completed Orders
        </button>
      </div>

      {/* Content: Pending Orders or Completed Orders */}
      {activeTab === "pending" ? (
        <div className="overflow-x-auto mt-6 w-full">
          <table className="w-full text-left text-xs">
            <thead className="text-neutral-500">
              <tr>
                <th className="px-1 py-2">Time</th>
                <th className="px-2 py-2">Instrument</th>
                <th className="px-1 py-2">Lot</th>
                <th className="px-1 py-2">Price(Rs)</th>
                <th className="px-1 py-2"></th>
                <th className="px-1 py-2"></th>
              </tr>
            </thead>
            <tbody className="text-neutral-800">
              {orders.map((order, index) => (
                <tr key={index} className="">
                  <td className="px-1 py-2">
                    {order.date}
                    <br />
                    {order.time}
                  </td>
                  <td className="px-2 py-2">{order.instrument}</td>
                  <td className="px-1 py-2">{order.lot}</td>
                  <td className="px-1 py-2">{order.price}</td>

                  <td className="py-2">

                    <button className="flex justify-center items-center w-[22px] h-[22px] border border-neutral-800 rounded">
                     <i className="icon-edit"></i>
                    </button>

                  </td>
                  <td className="py-2">
                    <button className="flex justify-center items-center w-[22px] h-[22px] bg-pink-700 rounded">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f11074d587c0741cc95b02137e46997b96c52aaf40e19a07f76545695290fff9?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                        alt=""
                        className="w-3"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-6 text-center text-stone-500 text-sm">
          There are no orders now, orders will show up here.
        </div>
      )}
    </div>
  );
}

export default PendingOrders;
