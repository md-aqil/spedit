import React from "react";

const BasketStep7 = () => {
  const basketItems = [
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/11e488dc9dfcdb565f1f1ce7b8f57769c04997e82edd7b1ed91beacc5a6755fa?apiKey=b4d1b9e87b084579b1e2475047caf617&",
      imgAlt: "BankNifty 24 JUL 24600 PE",
      title: "BankNifty 24 JUL 24600 PE",
      ltp: "Rs 165745",
      market: "Market",
      nrml: "NRML",
      lot: "1",
      price: "--",
      margin: "Rs 70,720.00",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/11e488dc9dfcdb565f1f1ce7b8f57769c04997e82edd7b1ed91beacc5a6755fa?apiKey=b4d1b9e87b084579b1e2475047caf617&",
      imgAlt: "Nifty50 JUL 26400",
      title: "Nifty50 JUL 26400",
      ltp: "Rs 235545",
      market: "Market",
      nrml: "NRML",
      lot: "1",
      price: "--",
      margin: "Rs 70,720.00",
    },
  ];

  return (
    <main>
      <section className="flex flex-col px-14 pt-28 bg-white rounded-xl max-md:px-5 max-md:pt-24">
        <header className="flex flex-col px-14 pt-12 w-full rounded-xl border border-solid bg-stone-50 border-stone-300 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
            <h2 className="my-auto text-base font-bold leading-none text-black">
              Basket 1
            </h2>
            <div className="flex gap-2.5 items-start max-md:max-w-full">
              <div className="grow px-4 py-1.5 text-base bg-white rounded-md text-neutral-800 w-fit max-md:pr-5">
                BANKNIFTY 24th JUL 52400 CE
              </div>
              <button
                onClick={() => console.log("Add instrument clicked!")}
                className="gap-2 self-stretch px-3 py-3 text-sm font-bold leading-none text-center text-white rounded-md bg-neutral-800 min-h-[36px]"
              >
                Add Instrument
              </button>
            </div>
          </div>
        </header>

        {basketItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center px-5 py-3 mt-7 w-full leading-none bg-white rounded-lg max-md:max-w-full"
          >
            <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
              <img
                loading="lazy"
                src={item.imgSrc}
                alt={item.imgAlt}
                className="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[0.55] fill-neutral-500"
              />
              <div className="flex flex-wrap flex-1 shrink gap-7 justify-between items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                <div className="flex gap-2.5 items-center self-stretch my-auto w-52 min-h-[43px]">
                  <div className="flex flex-col self-stretch py-1 my-auto w-52">
                    <div className="text-base font-bold text-neutral-800">
                      {item.title}
                    </div>
                    <div className="gap-1.5 self-start mt-1.5 text-xs text-neutral-500">
                      LTP : {item.ltp}
                    </div>
                  </div>
                </div>
                <div className="flex overflow-hidden gap-2 items-center self-stretch px-2 py-1.5 my-auto text-xs text-black whitespace-nowrap bg-red-200 rounded border border-black border-solid min-h-[19px]">
                  <div className="gap-2.5 self-stretch my-auto">
                    {item.market}
                  </div>
                </div>
                <div className="flex flex-col self-stretch my-auto w-11 text-xs text-black whitespace-nowrap">
                  <div className="flex flex-col w-full max-w-[44px]">
                    <div className="flex overflow-hidden gap-2 items-center px-2 py-1.5 bg-green-200 rounded border border-black border-solid min-h-[19px]">
                      <div className="gap-2.5 self-stretch my-auto">
                        {item.nrml}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col self-stretch my-auto whitespace-nowrap">
                  <div className="text-xs text-neutral-500">Lot</div>
                  <div className="flex gap-1 items-center mt-1.5 text-sm font-semibold text-stone-950">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e610629df265a35113a632b64aee170603932779f9bafc3f4da461f438c3d99?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                    />
                    <div className="flex flex-col self-stretch my-auto">
                      <div className="gap-2 self-stretch">{item.lot}</div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6db00f71c46cc511432c1f9b93450fd47b40416a1b717e80b6195b4638b28091?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                    />
                  </div>
                </div>
                <div className="flex flex-col self-stretch my-auto whitespace-nowrap w-[62px]">
                  <div className="text-xs text-neutral-500">Price</div>
                  <div className="flex flex-col items-start mt-1 w-full text-sm font-semibold max-w-[82px] text-stone-950">
                    <div className="gap-2 self-stretch">{item.price}</div>
                  </div>
                </div>
                <div className="flex flex-col self-stretch my-auto w-[82px]">
                  <div className="text-xs text-neutral-500">Margin Reqd.</div>
                  <div className="flex flex-col mt-1 w-full text-sm font-semibold max-w-[82px] text-stone-950">
                    <div className="gap-2 self-stretch">{item.margin}</div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d06726f22ef01506886f989ebc1025f74ac4ce5ca5725def93eff29873090a64?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                />
                <button className="flex overflow-hidden gap-2 justify-end self-stretch py-1 pr-1 pl-3 my-auto text-xs font-bold text-black whitespace-nowrap bg-lime-500 rounded-2xl border border-black border-solid w-[62px]">
                  <div className="my-auto">Buy</div>
                  <div className="flex shrink-0 bg-white rounded-full fill-white h-[18px] w-[18px]" />
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-9 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full leading-none max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[257px]">
                  <div className="flex gap-2 items-start max-w-full text-xs w-[183px]">
                    <span className="text-neutral-500">*Available Margin</span>
                    <span className="text-black">Rs 170,720.00</span>
                  </div>
                  <div className="flex gap-3 items-center mt-3 w-full text-sm font-bold text-center">
                    <button className="gap-1 self-stretch px-7 py-3 my-auto bg-lime-500 rounded min-h-[36px] text-stone-950 max-md:px-5">
                      Execute Basket Order
                    </button>
                    <button className="gap-1 self-stretch py-3 pr-5 pl-5 my-auto whitespace-nowrap rounded border border-solid border-neutral-800 min-h-[36px] text-neutral-800 w-[88px] max-md:pl-5">
                      Cancel
                    </button>
                  </div>
                </div>
                <button className="flex gap-2 justify-center items-center self-end px-3 py-2.5 mt-4 text-sm font-bold text-center text-lime-500 whitespace-nowrap rounded-md bg-neutral-800 min-h-[36px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d806a2db7e29eb71462792875fc1e965744975939dd63550dacc42743a6c347?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                  />
                  <span className="self-stretch my-auto">Done</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-1 w-full leading-none max-md:mt-10">
                <div className="flex gap-2 items-end">
                  <span className="text-xs text-neutral-500">Overall Margin</span>
                  <span className="text-xl font-bold text-black">
                    Rs 70,720.00
                  </span>
                </div>
                <div className="flex gap-5 justify-between items-end mt-4">
                  <span className="text-xs text-neutral-500">Final Margin</span>
                  <span className="text-xl font-bold text-black">
                    Rs 70,720.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="flex flex-wrap gap-5 justify-between px-14 py-5 mt-2 w-full rounded-xl border border-solid bg-stone-50 border-stone-300 max-md:px-5 max-md:max-w-full">
        <h2 className="my-auto text-base font-bold leading-none text-black">
          Basket 2
        </h2>
        <div className="flex gap-4 items-center">
          <button className="gap-1 self-stretch px-7 py-3 my-auto text-sm font-bold leading-none text-center bg-lime-500 rounded min-h-[36px] text-stone-950 max-md:px-5">
            Execute Basket Order
          </button>
          <div className="flex gap-1 justify-center items-center self-stretch px-2 my-auto w-9 h-9 rounded border border-solid border-neutral-800 min-h-[36px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcb1bb7dd828cfbf35ca81a360be10b0a40e06e98e990895322b13db70a61a71?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt=""
              className="object-contain self-stretch my-auto aspect-square w-[18px]"
            />
          </div>
        </div>
      </nav>

      <div className="flex shrink-0 mt-1 h-1 rounded-xl border border-solid bg-stone-50 border-stone-300 max-md:max-w-full" />
    </main>
  );
};

export default BasketStep7;