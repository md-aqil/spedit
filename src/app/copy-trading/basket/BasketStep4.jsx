import React from 'react';
import { useState } from 'react';

import Instrument from "./Instrument"
import InstrumentList from './InstrumentList';


const BasketStep4 = () => {
  return (
    <div className="flex flex-col px-5 py-5  bg-white rounded-xl max-md:p-0">
     
      <div className="flex flex-col px-5 py-4  w-full rounded-xl border border-solid bg-stone-50 border-stone-300 card max-md:!bg-[#242620]">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <div className="my-auto text-base font-bold leading-none text-black">
            Basket 1
          </div>
          <div className="flex gap-2.5 items-start max-md:max-w-full">
            <div className="grow px-4 py-1.5 text-base bg-white rounded-md !text-neutral-800 w-fit max-md:pr-5">
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


<InstrumentList />

      

        <div className="flex flex-wrap gap-5 justify-between mt-9 leading-none max-md:max-w-full">
          <div className="flex flex-col">
            <div className="flex gap-2 items-end max-w-full">
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
          <span className='icon-arrow-up-2'></span>
          <div className="self-stretch my-auto">Done</div>
        </div>
      </div>
    </div>
  );
};

export default BasketStep4;