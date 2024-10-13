import React, { useState } from 'react';
import InstrumentList from './InstrumentList';

const BasketStep7 = () => {
  // State to track which basket is expanded, defaulting to the first basket
  const [expandedBasketId, setExpandedBasketId] = useState(1);

  // Function to toggle the expanded basket
  const toggleExpand = (id) => {
    setExpandedBasketId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="flex flex-col px-5 py-5 bg-white rounded-xl max-md:p-0 max-md:!bg-[#242620]">
      {[1, 2].map((basketId) => (
        <div key={basketId} className="flex flex-col mb-5">
          <div
            className={`flex flex-col px-5 py-5 w-full rounded-xl border border-solid card bg-stone-50  cursor-pointer ${expandedBasketId === basketId ? 'border-lime-500' : 'border-stone-300'}`}
            onClick={() => toggleExpand(basketId)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
              <div className="flex items-center gap-2 text-base font-bold  text-black">
                Basket {basketId} <span className={`text-2xl icon-arrow-${expandedBasketId === basketId ? 'down-1' : 'up-2'}`}></span>
              </div>

              </div>
             

              <div
                className="flex gap-1 justify-center items-center self-stretch px-2 my-auto w-9 h-9 rounded border border-solid border-neutral-800 cursor-pointer"
                role="button"
                aria-label={`Basket ${basketId} Info`}
              >

                <span className="icon-trash"></span>
              </div>
            </div>

            {/* Show items inline if expanded */}
            {expandedBasketId === basketId && (
              <div className="flex flex-wrap gap-5 mt-2">
                <div className="flex gap-2.5 items-start">
                  <div className="grow px-4 py-1.5 text-base bg-white rounded-md text-neutral-800 w-fit">
                    BANKNIFTY 24th JUL 52400 CE
                  </div>
                  <div className="gap-2 self-stretch px-3 py-3 text-sm font-bold leading-none text-center text-white rounded-md bg-neutral-800 min-h-[36px]">
                    Add Instrument
                  </div>
                </div>
                <InstrumentList />
                <InstrumentList />
              </div>
            )}

            {/* Order Execution Section */}
            {expandedBasketId === basketId && (
              <div className="flex flex-wrap gap-5 justify-between mt-9 leading-none">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-end">
                    <div className="text-neutral-500">*Available Margin</div>
                    <div className="text-black">Rs 170,720.00</div>
                  </div>
                  <div className="flex gap-3 items-center mt-3 w-full text-sm font-bold text-center">
                    <div className="flex gap-3 items-center self-stretch my-auto min-w-[240px]">
                      <div className="gap-1 self-stretch px-7 py-3 my-auto bg-lime-500 rounded min-h-[36px] text-stone-950 cursor-pointer">
                        Execute Basket Order
                      </div>
                      <div className="gap-1 self-stretch py-3 pr-5 pl-5 my-auto whitespace-nowrap rounded border border-solid border-neutral-800 min-h-[36px] text-neutral-800 w-[88px]">
                        Cancel
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col self-start mt-1">
                  <div className="flex gap-2 items-end">
                    <div className="text-xs text-neutral-500">Overall Margin</div>
                    <div className="text-xl font-bold text-black">Rs 70,720.00</div>
                  </div>
                  <div className="flex gap-5 justify-between items-end mt-4">
                    <div className="text-xs text-neutral-500">Final Margin</div>
                    <div className="text-xl font-bold text-black">Rs 70,720.00</div>
                  </div>
                </div>
              </div>
            )}
          </div>


        
        </div>
      ))}
    </div>
  );
};

export default BasketStep7;
