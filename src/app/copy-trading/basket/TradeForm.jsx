import React from "react";

function TradeForm() {
  return (
    <div className="flex flex-col px-5 py-8 mt-1.5 w-full bg-white rounded-xl shadow-md card">
      <h2 className="self-start text-xl font-bold text-black">Nifty Commodity</h2>

      <div className="flex justify-between gap-5 mt-6">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-white border border-black rounded-md min-h-[30px]">
          <div className="flex gap-1">
            <span className="text-xs font-semibold text-neutral-800">Overnight</span>
            <span className="text-xs text-neutral-500">NRML</span>
          </div>
        </div>
        <button className="flex items-center gap-6 py-1 pr-1 pl-2.5 text-xs font-bold text-black bg-lime-500 rounded-2xl border border-black">
          <span>Buy</span>
          <div className="h-[18px] w-[18px] bg-white rounded-full"></div>
        </button>
      </div>

      <div className="flex gap-5 mt-6">
        <div className="flex-1">
          <label htmlFor="lotQty" className="flex justify-between items-end">
            <span className="text-xs font-semibold text-neutral-800">Lot Qty</span>
            <span className="text-xs text-black">1 lot = 25 shares</span>
          </label>
          <input
            type="number"
            id="lotQty"
            className="mt-2 px-5 py-1 bg-stone-50 text-neutral-800 rounded-md w-full"
            defaultValue="1"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="price" className="flex justify-between items-end">
            <span className="text-xs font-semibold text-neutral-800">Price</span>
            <div className="flex gap-1.5 items-center text-xs">
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="orderType"
                  value="Mkt"
                  className="form-radio h-3 w-3 text-lime-500 border-gray-300"
                />
                <span>Mkt</span>
              </label>
              <label className="flex items-center gap-0.5 cursor-pointer">
                <input
                  type="radio"
                  name="orderType"
                  value="Limit"
                  className="form-radio h-3 w-3 text-lime-500 border-gray-300"
                />
                <span>Limit</span>
              </label>
            </div>
          </label>
          <input
            type="number"
            id="price"
            className="mt-2 px-3 py-1.5 bg-stone-50 text-neutral-800 rounded-md w-full"
            placeholder="00"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="trigger" className="flex justify-between items-end">
          <span className="text-xs font-semibold text-neutral-800">Trigger</span>
          <div className="flex gap-1.5 items-center text-xs">
            <label className="flex items-center gap-0.5 cursor-pointer">
              <input
                type="radio"
                name="triggerType"
                value="SL"
                className="form-radio h-3 w-3 text-lime-500 border-gray-300"
              />
              <span>SL</span>
            </label>
            <label className="flex items-center gap-0.5 cursor-pointer">
              <input
                type="radio"
                name="triggerType"
                value="SL-M"
                className="form-radio h-3 w-3 text-lime-500 border-gray-300"
              />
              <span>SL-M</span>
            </label>
          </div>
        </label>
        <input
          type="number"
          id="trigger"
          className="mt-2 px-5 py-1 bg-stone-50 text-neutral-800 rounded-md w-full"
          defaultValue="1"
        />
      </div>

      <div className="flex gap-3 mt-5">
        <div className="flex-1">
          <label className="flex items-center gap-0.5 cursor-pointer">
            <input
              type="radio"
              name="stopLossTarget"
              value="StopLoss"
              className="form-radio h-3 w-3 text-lime-500 border-gray-300"
            />
            <span className="text-sm">StopLoss</span>
          </label>
          <input
            type="number"
            id="stopLoss"
            className="mt-2 px-10 py-1.5 bg-stone-50 text-neutral-800 rounded-md w-full"
            placeholder="%"
          />
        </div>

        <div className="flex-1">
          <label className="flex items-center gap-0.5 cursor-pointer">
            <input
              type="radio"
              name="stopLossTarget"
              value="Target"
              className="form-radio h-3 w-3 text-lime-500 border-gray-300"
            />
            <span className="text-sm">Target</span>
          </label>
          <input
            type="number"
            id="target"
            className="mt-2 px-10 py-1.5 bg-stone-50 text-neutral-800 rounded-md w-full"
            placeholder="%"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-5">
        <div>
          <span className="text-xs text-neutral-500">Charges</span>
          <span className="ml-2 text-sm font-semibold text-black">Rs 534,656</span>
        </div>
        <div>
          <span className="text-xs text-neutral-500">Margin</span>
          <span className="ml-2 text-sm font-semibold text-black">Rs 53,461</span>
        </div>
      </div>

      <div className="flex gap-3 mt-5">
        <button className="px-7 py-2 bg-lime-500 text-stone-950 rounded">Buy</button>
        <button className="px-7 py-2 border border-neutral-800 text-neutral-800 rounded">
          To basket
        </button>
      </div>
    </div>
  );
}

export default TradeForm;
