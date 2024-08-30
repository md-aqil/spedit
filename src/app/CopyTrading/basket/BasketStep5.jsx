import React from 'react';

const BasketStep5 = () => {
  return (
    <div className="flex overflow-hidden flex-col px-14 pt-7 pb-20 bg-white rounded-xl max-md:px-5">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full leading-none max-md:max-w-full">
        <div className="flex flex-col justify-center self-stretch my-auto w-[193px]">
          <div className="flex gap-2 items-center self-start text-xl font-bold text-black">
            <img loading="lazy" src="http://b.io/ext_11-" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="Basket icon" />
            <div className="flex gap-1 items-end self-stretch my-auto">
              <div className="gap-2 self-stretch">My Basket</div>
            </div>
          </div>
          <div className="flex flex-col mt-2 w-full max-w-[193px]">
            <div className="flex gap-2 items-center w-full">
              <div className="self-stretch my-auto text-xs text-neutral-500">
                Available Margin
              </div>
              <div className="self-stretch my-auto text-sm font-semibold text-black">
                Rs 170,720.00
              </div>
            </div>
            <div className="flex gap-2 items-center mt-2 w-full text-xs text-neutral-500">
              <div className="self-stretch my-auto">Broker Connected:</div>
              <img loading="lazy" src="http://b.io/ext_12-" className="object-contain shrink-0 self-stretch my-auto rounded aspect-[1.06] w-[18px]" alt="Broker icon" />
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-center self-stretch my-auto text-sm font-bold text-center min-w-[240px] text-neutral-800 w-[590px] max-md:max-w-full">
          <div className="flex gap-2 justify-center items-center self-stretch px-3 py-1.5 my-auto rounded border border-solid border-neutral-800 min-h-[36px]">
            <img loading="lazy" src="http://b.io/ext_13-" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="Add icon" />
            <div className="self-stretch my-auto">Add new Basket</div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col px-14 pt-12 mt-4 w-full rounded-xl border border-solid bg-stone-50 border-stone-300 max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
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
        <div className="flex flex-col justify-center px-5 py-3 mt-7 w-full leading-none bg-white rounded-lg max-md:max-w-full">
          <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
            <img loading="lazy" src="http://b.io/ext_14-" className="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[0.55] fill-neutral-500" alt="Drag handle" />
            <div className="flex flex-wrap flex-1 shrink gap-7 justify-between items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex gap-2.5 items-center self-stretch my-auto w-52 min-h-[43px]">
                <div className="flex flex-col self-stretch py-1 my-auto w-52">
                  <div className="text-base font-bold text-neutral-800">
                    BankNifty 24 JUL 24600 PE
                  </div>
                  <div className="gap-1.5 self-start mt-1.5 text-xs text-neutral-500">
                    LTP : Rs 165745
                  </div>
                </div>
              </div>
              <div className="flex overflow-hidden gap-2 items-center self-stretch px-2 py-1.5 my-auto text-xs text-black whitespace-nowrap bg-red-200 rounded border border-black border-solid min-h-[19px]">
                <div className="gap-2.5 self-stretch my-auto">Market</div>
              </div>
              <div className="flex flex-col self-stretch my-auto w-11 text-xs text-black whitespace-nowrap">
                <div className="flex flex-col w-full max-w-[44px]">
                  <div className="flex overflow-hidden gap-2 items-center px-2 py-1.5 bg-green-200 rounded border border-black border-solid min-h-[19px]">
                    <div className="gap-2.5 self-stretch my-auto">NRML</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto whitespace-nowrap">
                <div className="text-xs text-neutral-500">Lot</div>
                <div className="flex gap-1 items-center mt-1.5 text-sm font-semibold text-stone-950">
                  <img loading="lazy" src="http://b.io/ext_15-" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" alt="Minus" />
                  <div className="flex flex-col self-stretch my-auto">
                    <div className="gap-2 self-stretch">1</div>
                  </div>
                  <img loading="lazy" src="http://b.io/ext_16-" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" alt="Plus" />
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto whitespace-nowrap w-[62px]">
                <div className="text-xs text-neutral-500">Price</div>
                <div className="flex flex-col items-start mt-1 w-full text-sm font-semibold max-w-[62px] text-stone-950">
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
              <img loading="lazy" src="http://b.io/ext_17-" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" alt="Delete" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-5 py-3 mt-2 w-full leading-none bg-white rounded-lg max-md:max-w-full">
          <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
            <img loading="lazy" src="http://b.io/ext_14-" className="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[0.55] fill-neutral-500" alt="Drag handle" />
            <div className="flex flex-wrap flex-1 shrink gap-7 justify-between items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex gap-2.5 items-center self-stretch my-auto min-h-[43px] w-[203px]">
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
              <div className="flex flex-col self-stretch my-auto w-11 text-xs text-black whitespace-nowrap">
                <div className="flex flex-col w-full max-w-[44px]">
                  <div className="flex overflow-hidden gap-2 items-center px-2 py-1.5 bg-green-200 rounded border border-black border-solid min-h-[19px]">
                    <div className="gap-2.5 self-stretch my-auto">NRML</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto whitespace-nowrap">
                <div className="text-xs text-neutral-500">Lot</div>
                <div className="flex gap-1 items-center mt-1.5 text-sm font-semibold text-stone-950">
                  <img loading="lazy" src="http://b.io/ext_18-" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" alt="Minus" />
                  <div className="flex flex-col self-stretch my-auto">
                    <div className="gap-2 self-stretch">1</div>
                  </div>
                  <img loading="lazy" src="http://b.io/ext_19-" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" alt="Plus" />
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto whitespace-nowrap w-[62px]">
                <div className="text-xs text-neutral-500">Price</div>
                <div className="flex flex-col items-start mt-1 w-full text-sm font-semibold max-w-[62px] text-stone-950">
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
              <img loading="lazy" src="http://b.io/ext_17-" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" alt="Delete" />
            </div>
          </div>
        </div>
        <div className="mt-9 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full leading-none max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[257px]">
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
                <div className="flex gap-2 justify-center items-center self-end px-3 py-2.5 mt-4 text-sm font-bold text-center text-lime-500 whitespace-nowrap rounded-md bg-neutral-800 min-h-[36px]">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/042687fc55193b1252d9bef4dd737412c50fb73efeed0b4660bd1d9b458148d5?apiKey=b4d1b9e87b084579b1e2475047caf617&" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" alt="Done icon" />
                  <div className="self-stretch my-auto">Done</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-1 w-full leading-none max-md:mt-10">
                <div className="flex gap-2 items-end">
                  <div className="text-xs text-neutral-500">Overall Margin</div>
                  <div className="text-xl font-bold text-black">
                    Rs 70,720.00
                  </div>
                </div>
                <div className="flex gap-5 justify-between items-end mt-4">
                  <div className="text-xs text-neutral-500">Final Margin</div>
                  <div className="text-xl font-bold text-black">
                    Rs 70,720.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketStep5;