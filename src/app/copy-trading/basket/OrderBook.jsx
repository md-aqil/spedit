import React, { useState } from "react";

function OrderBook() {
  const [activeTab, setActiveTab] = useState("orderBook");

  const bidData = [
    { price: "53.5", orders: "30", qty: "1234" },
    { price: "53.4", orders: "12", qty: "4567" },
    { price: "53.3", orders: "11", qty: "8901" },
    { price: "53.2", orders: "16", qty: "2365" },
    { price: "53.1", orders: "24", qty: "4987" },
  ];

  const askData = [
    { price: "53.1", orders: "30", qty: "1234" },
    { price: "53.2", orders: "12", qty: "4567" },
    { price: "53.3", orders: "11", qty: "8901" },
    { price: "53.4", orders: "16", qty: "2365" },
    { price: "53.5", orders: "24", qty: "4987" },
  ];

  return (
    <div className="flex flex-col px-5 pt-7 pb-3.5 w-full bg-white rounded-xl shadow-md card" >
      {/* Tabs */}
      <div className="flex gap-5 justify-between w-full leading-none text-center max-md:mr-0.5">
        <div className="flex gap-2 items-center text-xs font-semibold">
          <button
            onClick={() => setActiveTab("orderBook")}
            className={`gap-2.5 px-4 py-2 my-auto rounded ${
              activeTab === "orderBook"
                ? "tb-active bg-lime-500 bg-opacity-40 text-stone-400"
                : "text-stone-400"
            }`}
          >
            Order Book
          </button>

          <button
            onClick={() => setActiveTab("recentTrades")}
            className={`my-auto ${
              activeTab === "recentTrades" ? "text-stone-950 tb-active" : "text-stone-400"
            }`}
          >
            Recent Trades
          </button>
        </div>
        <div className="flex gap-1 items-center text-sm font-bold whitespace-nowrap">
          <button className="gap-1 self-stretch px-2.5 my-auto w-7 h-7 bg-lime-500 rounded min-h-[28px] text-neutral-800">
            B
          </button>
          <button className="gap-1 self-stretch pr-2.5 pl-2.5 my-auto w-7 h-7 text-white bg-pink-700 rounded min-h-[28px]">
            S
          </button>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === "orderBook" ? (
        <div className="flex gap-10 justify-between items-center mt-4">
          <OrderBookSide title="Bid" data={bidData} type="bid" />
          <OrderBookSide title="Ask" data={askData} type="ask" />
        </div>
      ) : (
        <div className="mt-4 text-center text-stone-500 text-sm">
          There are no recent trades, traders will show up here.
        </div>
      )}
    </div>
  );
}

function OrderBookSide({ title, data, type }) {
  const bgColor = type === "bid" ? "bg-lime-500" : "bg-pink-700";

  return (
    <div className="flex flex-col self-stretch py-2 my-auto rounded-lg w-[114px]">
      <div className="flex flex-col w-full">
        <div className="flex gap-5 justify-between w-full text-xs leading-none text-center whitespace-nowrap text-neutral-500">
          <div className="flex gap-4">
            <div>{title}</div>
            <div>Orders</div>
          </div>
          <div>Qty</div>
        </div>
        <div className="flex gap-6 mt-3 w-full">
          <div className="flex flex-col items-start my-auto text-xs font-semibold leading-none text-center whitespace-nowrap text-stone-950">
            {data.map((item, index) => (
              <div key={index} className={index > 0 ? "mt-2.5" : ""}>
                {item.price}
              </div>
            ))}
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col items-start my-auto text-xs leading-none text-center whitespace-nowrap text-stone-950">
              {data.map((item, index) => (
                <div key={index} className={index > 0 ? "mt-2.5" : ""}>
                {item.orders}
                </div>
              ))}
            </div>
            <div className="flex z-10 flex-col items-start self-end text-xs leading-none text-center whitespace-nowrap text-stone-950">
              {data.map((item, index) => (
                <div key={index} className={index > 0 ? "mt-2.5" : ""}>
                {item.qty}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 justify-between items-center mt-5 w-full font-semibold leading-none whitespace-nowrap">
        <div className="self-stretch my-auto text-xs text-center text-neutral-500">
          Total
        </div>
        <div className="self-stretch my-auto text-xs text-right text-stone-950 w-[57px]">
          4987654
        </div>
      </div>
    </div>
  );
}

export default OrderBook;
