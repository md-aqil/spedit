import React from 'react';

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
        <div className="flex overflow-hidden flex-col px-11 py-7 mt-10 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
            <div className="flex flex-col items-start">
              <div className="flex gap-px self-stretch text-xl leading-none">
                <div className="grow text-black">BANKNIFTY 24th</div>
                <div className="grow shrink font-bold text-black">
                  JUL 52400 CE
                </div>
              </div>
              <div className="flex gap-2 mt-2 text-sm text-black">
                <div className="grow leading-none">NFO</div>
                <div className="my-auto font-semibold leading-none">
                  Rs. 63.46
                </div>
              </div>
              <div className="flex overflow-hidden gap-1.5 items-center px-3 py-3 mt-4 leading-none whitespace-nowrap bg-white rounded-md border border-black border-solid min-h-[36px]">
                <div className="flex gap-1 items-end self-stretch my-auto">
                  <div className="text-xs font-semibold text-neutral-800">
                    Overnight
                  </div>
                  <div className="text-xs text-neutral-500">NRML</div>
                </div>
                <img loading="lazy" src="http://b.io/ext_20-" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square" alt="Dropdown icon" />
              </div>
            </div>
            <div className="flex flex-col my-auto leading-none whitespace-nowrap">
              <div className="flex gap-8 items-center text-xs font-bold text-black">
                <img loading="lazy" src="http://b.io/ext_21-" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" alt="Toggle icon" />
                <div className="flex overflow-hidden gap-6 justify-end self-stretch py-1 pr-1 pl-2.5 my-auto w-20 bg-lime-500 rounded-2xl border border-black border-solid">
                  <div className="my-auto">Buy</div>
                  <div className="flex shrink-0 bg-white rounded-full fill-white h-[18px] w-[18px]" />
                </div>
              </div>
              <div className="flex gap-1 items-center self-end mt-8 text-sm font-semibold text-neutral-800">
                <img loading="lazy" src="http://b.io/ext_22-" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" alt="Tags icon" />
                <div className="self-stretch my-auto">Tags</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 mt-8 w-full max-md:max-w-full">
            <div className="flex flex-wrap flex-auto gap-4">
              <div className="flex flex-col">
                <div className="flex gap-10 justify-between items-end w-full leading-none">
                  <div className="text-xs font-semibold text-neutral-800">
                    Lot Qty
                  </div>
                  <div className="text-xs text-black">1 lot = 25 shares</div>
                </div>
                <div className="flex gap-10 justify-center px-5 py-1.5 mt-2 max-w-full whitespace-nowrap rounded-md bg-stone-50 text-neutral-800 w-[180px] max-md:px-5">
                  <div className="self-start text-base">1</div>
                  <div className="text-sm opacity-40">Lot</div>
                </div>
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <div className="flex gap-10 justify-between items-end w-full leading-none">
                  <div className="text-xs font-semibold text-neutral-800">
                    Price
                  </div>
                  <div className="flex gap-1.5 items-center text-xs text-black">
                    <div className="flex gap-0.5 items-center self-stretch my-auto">
                      <img loading="lazy" src="http://b.io/ext_23-" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" alt="Market icon" />
                      <div className="self-stretch my-auto">Mkt</div>
                    </div>
                    <div className="flex gap-0.5 items-center self-stretch my-auto">
                      <img loading="lazy" src="http://b.io/ext_24-" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" alt="Limit icon" />
                      <div className="self-stretch my-auto">Limit</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start px-3 pt-1 pb-3 mt-2 max-w-full text-sm rounded-md bg-stone-50 text-neutral-800 w-[180px] max-md:pr-5">
                  <div className="opacity-40">00</div>
                </div>
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <div className="flex gap-10 justify-between items-end w-full leading-none">
                  <div className="text-xs font-semibold text-neutral-800">
                    Trigger
                  </div>
                  <div className="flex gap-1.5 items-center text-xs text-black">
                    <div className="flex gap-0.5 items-center self-stretch my-auto">
                      <img loading="lazy" src="http://b.io/ext_23-" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" alt="SL icon" />
                      <div className="self-stretch my-auto">SL</div>
                    </div>
                    <div className="flex gap-0.5 items-center self-stretch my-auto">
                      <img loading="lazy" src="http://b.io/ext_24-" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" alt="SL-M icon" />
                      <div className="self-stretch my-auto">SL-M</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-10 justify-end items-start px-5 py-1.5 mt-2 max-w-full rounded-md bg-stone-50 text-neutral-800 w-[180px]">
                  <div className="text-base">1</div>
                  <div className="text-sm opacity-40">Lot</div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center self-start mt-5 text-sm font-bold leading-none text-center whitespace-nowrap text-stone-950">
              <div className="gap-1 self-stretch px-7 py-3 my-auto bg-lime-500 rounded min-h-[36px] w-[123px] max-md:px-5">
                Save
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 justify-between mt-4 w-full max-md:max-w-full">
            <div className="flex gap-5 whitespace-nowrap text-neutral-800">
              <div className="flex flex-col">
                <div className="flex gap-1 items-center self-start text-xs font-semibold leading-none">
                  <img loading="lazy" src="http://b.io/ext_25-" className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square" alt="StopLoss icon" />
                  <div className="gap-3 self-stretch my-auto">StopLoss</div>
                </div>
                <div className="flex flex-col justify-center items-start px-14 py-2 mt-2 text-sm rounded-md bg-stone-50 w-[82px] max-md:pl-5">
                  <div className="opacity-40">%</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-1 items-center self-start text-xs font-semibold leading-none">
                  <img loading="lazy" src="http://b.io/ext_25-" className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square" alt="Target icon" />
                  <div className="gap-3 self-stretch my-auto">Target</div>
                </div>
                <div className="flex flex-col justify-center items-start px-14 py-2 mt-2 text-sm rounded-md bg-stone-50 w-[82px] max-md:pl-5">
                  <div className="opacity-40">%</div>
                </div>
              </div>
            </div>
            <div className="flex gap-6 items-center self-end mt-10 leading-none max-md:mt-10">
              <div className="flex items-center self-stretch my-auto">
                <div className="self-stretch my-auto text-xs text-neutral-500 w-[50px]">
                  Charges
                </div>
                <div className="self-stretch my-auto text-sm font-semibold text-black">
                  Rs 534,656
                </div>
                <img loading="lazy" src="http://b.io/ext_26-" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square" alt="Info icon" />
              </div>
              <div className="flex gap-2 items-start self-stretch my-auto">
                <div className="text-xs text-neutral-500">Margin</div>
                <div className="text-sm font-semibold text-right text-stone-950">
                  Rs 70,720.00
                </div>
              </div>
            </div>
          </div>
        </div>
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