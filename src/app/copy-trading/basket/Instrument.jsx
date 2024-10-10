import React from "react";

const Instrument = ({ instrumentName, price, lotSize, charges, margin }) => {
  return (
    <section className="mt-8 p-6 bg-white border border-stone-300 rounded-xl card max-md:border-none mb-5 max-md:p-0 max-md:!bg-[#242620]">
      <div className="flex flex-col ">
        {/* Header Section */}
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold text-black max-md:text-lg">{instrumentName}</h2>
            <p className="my-1">NFO Rs. {price}</p>
          </div>
          <div className="gap-10 flex items-center max-md:gap-2">
            <span className="icon-trash text-2xl"></span>
            <button className="flex items-center gap-6 py-1 h-[30px] px-3 text-xs font-bold text-black bg-lime-500 rounded-2xl border border-black">
              <span>Buy</span>
              <div className="h-[18px] w-[18px] bg-white rounded-full"></div>
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex justify-between gap-5 mt-6">
          <div className="flex items-center gap-1.5 px-3 py-2 border border-black rounded-md">
            <span className="text-xs font-semibold text-neutral-800">
              Overnight
            </span>
            <span className="text-xs text-neutral-500">NRML</span>
            <span className="icon-arrow-square-down"></span>
          </div>
          <p>
            <i className="icon-tag text-lg"></i> Tags
          </p>
        </div>

        {/* Inputs Section */}
        <div className="flex gap-5 mt-6 max-md:flex-col">
          <div className="flex-1">
            <label htmlFor="lotQty" className="flex justify-between items-end">
              <span className="text-xs font-semibold text-neutral-800">
                Lot Qty
              </span>
              <span className="text-xs text-black">1 lot = {lotSize} shares</span>
            </label>
            <input
              type="number"
              id="lotQty"
              className="mt-2 px-5 py-1.5 bg-stone-50 text-neutral-800 rounded-md w-full"
              defaultValue="1"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="price" className="flex justify-between items-end">
              <span className="text-xs font-semibold text-neutral-800">
                Price
              </span>
              <div className="flex gap-1.5 items-center text-xs">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="orderType"
                    value="Mkt"
                    className="form-radio h-3 w-3 text-lime-500"
                  />
                  <span>Mkt</span>
                </label>
                <label className="flex items-center gap-0.5 cursor-pointer">
                  <input
                    type="radio"
                    name="orderType"
                    value="Limit"
                    className="form-radio h-3 w-3 text-lime-500"
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

          <div className="flex-1 ">
            <label htmlFor="trigger" className="flex justify-between items-end">
              <span className="text-xs font-semibold text-neutral-800">
                Trigger
              </span>
              <div className="flex gap-1.5 items-center text-xs">
                <label className="flex items-center gap-0.5 cursor-pointer">
                  <input
                    type="radio"
                    name="triggerType"
                    value="SL"
                    className="form-radio h-3 w-3 text-lime-500"
                  />
                  <span>SL</span>
                </label>
                <label className="flex items-center gap-0.5 cursor-pointer">
                  <input
                    type="radio"
                    name="triggerType"
                    value="SL-M"
                    className="form-radio h-3 w-3 text-lime-500"
                  />
                  <span>SL-M</span>
                </label>
              </div>
            </label>
            <input
              type="number"
              id="trigger"
              className="mt-2 px-5 py-1.5 bg-stone-50 text-neutral-800 rounded-md w-full"
              defaultValue="1"
            />
          </div>

          <button
            type="submit"
            className="mt-6 px-6 py-1.5 bg-lime-500 text-black rounded-md hover:bg-lime-600 max-md:mt-0"
          >
            Save
          </button>
        </div>

        {/* Stop Loss/Target and Charges Section */}
        <div className="flex gap-40 mt-5 max-md:flex-col max-md:gap-0">
          <div className="flex gap-5">
            <div className="flex-1">
              <label className="flex items-center gap-0.5 cursor-pointer">
                <input
                  type="radio"
                  name="stopLossTarget"
                  value="StopLoss"
                  className="form-radio h-3 w-3 text-lime-500"
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
                  className="form-radio h-3 w-3 text-lime-500"
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
          <div className="flex justify-between items-center mt-5 w-full">
            <div className="grow-1">
              <span className="text-xs text-neutral-500">Charges</span>
              <span className="ml-2 text-sm font-semibold text-black">
                Rs {charges}
              </span>
            </div>
            <div>
              <span className="text-xs text-neutral-500">Margin</span>
              <span className="ml-2 text-sm font-semibold text-black">
                Rs {margin}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instrument;
