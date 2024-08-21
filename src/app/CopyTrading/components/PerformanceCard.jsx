import React from 'react';
import StartegyCopyParameters from "./StartegyCopyParameters";


const PerformanceCard = ({ mdd, winRate, profitablePositions, totalPositions, roi, pnl }) => {

  return (
    <div className="flex flex-col justify-center items-center py-10 bg-white rounded-lg shadow-sm min-h-[546px] min-w-[240px] w-[685px] max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[583px]">
        <div className="flex flex-wrap gap-10 justify-between items-start w-full text-black max-md:max-w-full">
          <h2 className="text-xl font-bold leading-none">Performance</h2>
          <div className="flex gap-2 items-center text-sm leading-none">
            <span className="self-stretch my-auto">7 days</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c296cf6667a009c8f981d82faa0357b67d9e274f3f2117b189e6612b611401df?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 rounded-none aspect-[0.93]" />
          </div>
        </div>


        <div className="flex flex-col justify-center self-center mt-6 w-full max-w-[582px] min-h-[141px] max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-center w-full">
            <div className="flex flex-col self-stretch my-auto whitespace-nowrap w-[50px]">
              <span className="text-sm leading-none text-neutral-500">MDD</span>
              <span className="mt-2 text-base font-bold leading-none text-black">{mdd}</span>
            </div>
            <div className="flex flex-col self-stretch my-auto w-[82px]">
              <span className="text-sm leading-none text-neutral-500">Win Rate</span>
              <span className="mt-2 text-base font-bold leading-none text-black">{winRate}</span>
            </div>
            <div className="flex flex-col self-stretch my-auto w-[127px]">
              <span className="text-sm leading-none text-neutral-500">Profitable Positions</span>
              <span className="mt-2 text-base font-bold leading-none text-black">{profitablePositions}</span>
            </div>
            <div className="flex flex-col self-stretch my-auto w-24">
              <span className="text-sm leading-none text-neutral-500">Total Positions</span>
              <span className="mt-2 text-base font-bold leading-none text-black">{totalPositions}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 justify-between items-center mt-8 w-full whitespace-nowrap max-md:max-w-full">
            <div className="flex flex-col self-stretch my-auto w-[79px]">
              <span className="text-sm leading-none text-neutral-500">ROI</span>
              <div className="flex gap-2 items-center mt-2 text-xl font-bold leading-none text-stone-950">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a44251c291de26e108239c7b5e48a9a7e2399179a33184c8b28142d583cb2158?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-[0.93] fill-lime-500" />
                <span className="self-stretch my-auto">{roi}</span>
              </div>
            </div>
            <div className="flex flex-col self-stretch my-auto w-[99px]">
              <span className="text-sm leading-none text-neutral-500">Pnl</span>
              <div className="flex gap-2 items-center mt-2 text-xl font-bold leading-none text-stone-950">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a44251c291de26e108239c7b5e48a9a7e2399179a33184c8b28142d583cb2158?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-[0.93] fill-lime-500" />
                <span className="self-stretch my-auto">{pnl}</span>
              </div>
            </div>
          </div>
        </div>





      </div>
      <div className="flex gap-5 justify-between items-end mt-9 max-w-full text-sm leading-none text-center whitespace-nowrap w-[569px]">
        <div className="flex flex-col px-5 py-5 font-semibold rounded-lg border border-solid border-stone-300 min-h-[246px] min-w-[240px] w-[400px]">
          <div className="flex gap-3 items-center self-start">
            <span className="gap-2.5 self-stretch px-4 py-2 my-auto rounded bg-lime-500 bg-opacity-40 text-stone-950">ROI</span>
            <span className="self-stretch my-auto text-stone-400">PnL</span>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2da753f8a7a9e5532f91f59b2432fe28dcdefdc7afb720af9729244283c2c5e8?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="ROI and PnL chart" className="object-contain mt-2 max-w-full rounded-sm aspect-[2.08] w-[360px]" />
        </div>
        <div className="flex flex-col">
          <button className="gap-1  px-7 py-5 max-w-full bg-lime-500 rounded min-h-[50px] mt-4 text-stone-950 w-[150px] max-md:px-5">Copy</button>
          <button className="gap-1  px-7 py-5 mt-4 max-w-full rounded border border-solid border-neutral-800 min-h-[50px] text-neutral-800 w-[150px] max-md:px-5">Mock</button>
        </div>
      </div>

      <StartegyCopyParameters />
        
        


    </div>
  );
};

export default PerformanceCard;