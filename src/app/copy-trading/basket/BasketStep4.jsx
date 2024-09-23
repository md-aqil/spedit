import React from 'react';
import Instrument from "./Instrument"

const BasketStep4 = () => {
  return (
    <div className="flex flex-col px-5 py-5  bg-white rounded-xl max-md:px-5">
     
      <div className="flex overflow-hidden flex-col px-5 py-4  w-full rounded-xl border border-solid bg-stone-50 border-stone-300 max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <div className="my-auto text-base font-bold leading-none text-black">
            Basket 1
          </div>
          <div className="flex gap-2.5 items-start max-md:max-w-full">
            <div className="grow px-4 py-1.5 text-base bg-white rounded-md text-neutral-800 w-fit max-md:pr-5">
              BANKNIFTY 24th JUL 52400 CE
            </div>
            <div className="gap-2 self-stretch px-3 py-3 text-sm font-bold leading-none text-center text-white rounded-md bg-neutral-800 min-h-[36px]">
              Add Intsrument
            </div>
          </div>
        </div>


        <Instrument
        instrumentName="BANKNIFTY 24th JUL 52400 CE"
        price="53.46"
        lotSize="25"
        charges="534,656"
        margin="53,461"
      />


        <div className="flex flex-col justify-center px-5 py-3 mt-2 w-full leading-none bg-white rounded-lg max-md:max-w-full">
          <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
            <img loading="lazy" src="http://b.io/ext_27-" className="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[0.55] fill-neutral-500" alt="Drag handle" />
            <img loading="lazy" src="http://b.io/ext_28-" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" alt="Delete icon" />
            <div className="flex flex-wrap flex-1 shrink gap-6 justify-between items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex gap-2.5 items-center self-stretch my-auto min-h-[43px] w-[155px]">
                <div className="flex flex-col self-stretch py-1 my-auto w-[155px]">
                  <div className="text-base font-bold text-neutral-800">
                    Nifty50 JUL 26400
                  </div>
                  <div className="gap-1.5 self-start mt-1.5 text-xs text-neutral-500">
                    LTP : Rs 235545
                  </div>
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
              <div className="flex flex-col self-stretch my-auto whitespace-nowrap">
                <div className="text-xs text-neutral-500">Lot</div>
                <div className="flex gap-1 items-center mt-1.5 text-sm font-semibold text-stone-950">
                  <img loading="lazy" src="http://b.io/ext_29-" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" alt="Minus icon" />
                  <div className="flex flex-col self-stretch my-auto">
                    <div className="gap-2 self-stretch">1</div>
                  </div>
                  <img loading="lazy" src="http://b.io/ext_30-" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" alt="Plus icon" />
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto whitespace-nowrap w-[82px]">
                <div className="text-xs text-neutral-500">Price</div>
                <div className="flex flex-col items-start mt-1 w-full text-sm font-semibold max-w-[82px] text-stone-950">
                  <div className="gap-2 self-stretch">--</div>
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto w-[82px]">
                <div className="text-xs text-neutral-500">Margin Reqd.</div>
                <div className="flex flex-col mt-1 w-full text-sm font-semibold max-w-[82px] text-stone-950">
                  <div className="gap-2 self-stretch">Rs 70,720.00</div>
                </div>
              </div>
              <div className="flex overflow-hidden gap-2 justify-end self-stretch py-1 pr-1 pl-3 my-auto text-xs font-bold text-black whitespace-nowrap bg-lime-500 rounded-2xl border border-black border-solid w-[62px]">
                <div className="my-auto">Buy</div>
                <div className="flex shrink-0 bg-white rounded-full fill-white h-[18px] w-[18px]" />
              </div>
            </div>
            <img loading="lazy" src="http://b.io/ext_31-" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" alt="More options icon" />
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between mt-9 leading-none max-md:max-w-full">
          <div className="flex flex-col">
            <div className="flex gap-2 items-end max-w-full text-xs w-[183px]">
              <div className="text-neutral-500">*Available Margin</div>
              <div className="text-black">Rs 170,720.00</div>
            </div>
            <div className="flex gap-3 items-center mt-3 w-full text-sm font-bold text-center">
              <div className="flex gap-3 items-center self-stretch my-auto min-w-[240px]">
                <div className="gap-1 self-stretch px-7 py-3 my-auto bg-lime-500 rounded min-h-[36px] text-stone-950 max-md:px-5">
                  Execute Basket Order
                </div>
                <div className="gap-1 self-stretch py-3 pr-5 pl-5 my-auto whitespace-nowrap rounded border border-solid border-neutral-800 min-h-[36px] text-neutral-800 w-[88px] max-md:pl-5">
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
        <div className="flex gap-2 justify-center items-center self-center px-3 py-2.5 mt-10 ml-2.5 text-sm font-bold leading-none text-center text-lime-500 whitespace-nowrap rounded-md opacity-50 bg-neutral-800 min-h-[36px]">
          <img loading="lazy" src="http://b.io/ext_32-" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" alt="Done icon" />
          <div className="self-stretch my-auto">Done</div>
        </div>
      </div>
    </div>
  );
};

export default BasketStep4;