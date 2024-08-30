import React from "react";

function BasketStep2() {
  return (
    <main className="flex overflow-hidden flex-col px-16 pt-6 pb-60 bg-white rounded-xl max-md:px-5 max-md:pb-24">
      <header className="flex flex-wrap gap-10 justify-between items-center w-full leading-none max-md:max-w-full">
        <div className="flex flex-col justify-center self-stretch my-auto w-[193px]">
          <div className="flex gap-2 items-center self-start text-xl font-bold text-black">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/99a2384cdf0c69c485eaa1c65069c4aa004d61b09215248739b49c579d06d823?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <div className="flex gap-1 items-end self-stretch my-auto">
              <div className="gap-2 self-stretch">My Basket</div>
            </div>
          </div>
          <div className="flex flex-col mt-2 w-full max-w-[193px]">
            <div className="flex gap-2 items-center w-full">
              <div className="self-stretch my-auto text-xs text-neutral-500">Available Margin</div>
              <div className="self-stretch my-auto text-sm font-semibold text-black">Rs 170,720.00</div>
            </div>
            <div className="flex gap-2 items-center mt-2 w-full text-xs text-neutral-500">
              <div className="self-stretch my-auto">Broker Connected:</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/228f8a07609ae754cad8aadad1c9fb98567b297e0b29865d1f29b9f11c4ce235?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                alt="Broker logo"
                className="object-contain shrink-0 self-stretch my-auto rounded aspect-[1.06] w-[18px]"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-center self-stretch my-auto text-sm font-bold text-center min-w-[240px] text-neutral-800 w-[590px] max-md:max-w-full">
          <button className="flex gap-2 justify-center items-center self-stretch px-3 py-1.5 my-auto rounded border border-solid border-neutral-800 min-h-[36px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc633d8a989ea744ec23e265fff3d6b83198c68f31f091fdac4b38e138a3eb5f?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span>Add new Basket</span>
          </button>
        </div>
      </header>
      <section className="overflow-hidden px-16 py-12 mt-4 w-full rounded-xl border border-solid bg-stone-50 border-stone-300 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-px max-md:mt-10">
              <label htmlFor="basketName" className="grow my-auto text-base font-bold leading-none text-black">
                Name Basket /
              </label>
              <input
                type="text"
                id="basketName"
                placeholder="Enter Basket Name"
                className="flex flex-col justify-center px-3.5 py-2.5 text-xs bg-white rounded-md text-neutral-800 max-md:pr-5"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-2.5 items-start w-full leading-none max-md:mt-10 max-md:max-w-full">
              <input
                type="text"
                placeholder="Search and Add Instruments"
                className="flex flex-col grow shrink-0 justify-center items-start px-5 py-3 text-xs bg-white rounded-md basis-0 text-neutral-800 w-fit max-md:pr-5"
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