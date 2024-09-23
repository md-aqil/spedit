import React, { useState } from 'react';

const InstrumentList = () => {
  // Initialize state for the lot count
  const [lotCount, setLotCount] = useState(1);

  // Function to handle incrementing the lot count
  const incrementLot = () => setLotCount(prevCount => prevCount + 1);

  // Function to handle decrementing the lot count
  const decrementLot = () => {
    if (lotCount > 1) {
      setLotCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center px-5 py-3 mt-2 w-full leading-none bg-white rounded-lg max-md:max-w-full shadow-md">
      <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
        {/* Replace Drag handle image with span icon */}
        <span className="icon-menu text-2xl fill-neutral-500"></span>

        {/* Replace Delete icon image with span icon */}
        <span className="icon-trash text-2xl"></span>

        <div className="flex flex-wrap flex-1 shrink gap-2 justify-between items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex gap-2.5 items-center self-stretch my-auto min-h-[43px] w-[155px]">
            <div className="flex flex-col self-stretch py-1 my-auto w-[155px]">
              <div className="text-base font-bold text-neutral-800">Nifty50 JUL 26400</div>
              <div className="gap-1.5 self-start mt-1.5 text-xs text-neutral-500">LTP : Rs 235545</div>
            </div>
          </div>

          <div className="flex overflow-hidden gap-2 items-center self-stretch px-2 py-1.5 my-auto text-xs text-black whitespace-nowrap bg-red-200 rounded border border-black border-solid min-h-[19px]">
            <div className="gap-2.5 self-stretch my-auto">Market</div>
          </div>

          <div className="flex flex-col self-stretch my-auto text-xs text-black whitespace-nowrap w-[82px]">
            <div className="flex flex-col items-start w-full max-w-[82px]">
              <div className="flex overflow-hidden gap-2 items-center px-2 py-1.5 bg-green-200 rounded border border-black border-solid min-h-[19px]">
                <div className="gap-2.5 self-stretch my-auto">NRML</div>
              </div>
            </div>
          </div>

          {/* Stepper for Lot quantity */}
          <div className="flex flex-col self-stretch my-auto whitespace-nowrap">
            <div className="text-xs text-neutral-500">Lot</div>
            <div className="flex gap-1 items-center mt-1.5 text-sm font-semibold text-stone-950">
              {/* Minus button */}
              <span className=" object-contain shrink-0 self-stretch my-auto w-3 aspect-square cursor-pointer" onClick={decrementLot}>-</span>
              <div className="flex flex-col self-stretch my-auto">
                <div className="gap-2 self-stretch">{lotCount}</div>
              </div>
              {/* Plus button */}
              <span className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square cursor-pointer" onClick={incrementLot}>+</span>
            </div>
          </div>

          <div className="flex flex-col self-stretch my-auto whitespace-nowrap w-[82px]">
            <div className="text-xs text-neutral-500">Price</div>
            <div className="flex flex-col items-start mt-1 w-full text-sm font-semibold max-w-[82px] text-stone-950">
              <div className="gap-2 self-stretch">--</div>
            </div>
          </div>

          <div className="flex flex-col self-stretch my-auto">
            <div className="text-xs text-neutral-500">Margin Reqd.</div>
            <div className="flex flex-col mt-1 w-full text-sm font-semibold text-stone-950">
              <div className="gap-2 self-stretch">Rs 70,720.00</div>
            </div>
          </div>

          {/* Buy Button moved before the "More options" icon */}
          <div className="flex overflow-hidden gap-2 justify-end self-stretch py-1 pr-1 pl-3 my-auto text-xs font-bold text-black whitespace-nowrap bg-lime-500 rounded-2xl border border-black border-solid w-[62px]">
            <div className="my-auto">Buy</div>
            <div className="flex shrink-0 bg-white rounded-full fill-white h-[18px] w-[18px]" />
          </div>
        </div>

        {/* Replace More options icon image with span icon */}
        <span className="icon-trash text-2xl"></span>
      </div>
    </div>
  );
};

export default InstrumentList;
