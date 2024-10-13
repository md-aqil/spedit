import React from "react";

function BasketStep2() {
  return (
    <main className="flex overflow-hidden flex-col px-5 py-6  bg-white rounded-xl card">
   
      <section className=" px-4 py-12 w-full rounded-xl border bg-stone-50 border-stone-300  max-md:bg-transparent max-md:border-none max-md:p-0">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col max-md:ml-0 max-md:w-full">
            <div className="flex grow max-md:gap-5 max-md:flex-col">
              
              <label htmlFor="basketName" className="grow my-auto text-base font-bold leading-none text-black whitespace-nowrap">
                Name Basket /
              </label>
              <input
                type="text"
                id="basketName"
                placeholder="Enter Basket Name"
                className="flex flex-col justify-center border px-3.5 py-2.5 text-xs bg-white rounded-md text-neutral-800 max-md:pr-5"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">

            <div className="flex gap-2.5 items-start w-full leading-none max-md:mt-0 max-md:flex-col">
              <input
                type="text"
                placeholder="Search and Add Instruments"
                className="flex flex-col grow shrink-0 justify-center items-start border px-5 py-3 text-xs bg-white rounded-md basis-0 text-neutral-800 w-fit w-full"
              />
              <button className="gap-2 self-stretch px-3 py-3 text-sm font-bold text-center text-white rounded-md bg-neutral-800 min-h-[36px]">
                Add Instrument
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BasketStep2;