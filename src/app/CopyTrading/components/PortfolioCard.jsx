import React from 'react';

const PortfolioCard = ({ name, rating, pnl, roi, aum, mdd, chartSrc }) => {
  return (
    <article className="flex flex-col grow shrink justify-center px-4 py-5 w-72 bg-white rounded-md shadow-sm min-h-[200px] min-w-[240px]">
      <div className="flex flex-col w-full">
        <header className="flex gap-10 justify-between items-center w-full whitespace-nowrap">
          <div className="flex gap-2.5 items-start self-stretch my-auto h-[43px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/270adb3606ee1d3784b0af464b59e50a13542e2044318273933d8f06e042dbf0?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt={`${name}'s profile picture`} className="object-contain shrink-0 w-10 rounded-full aspect-square" />
            <div className="flex flex-col py-1 w-[85px]">
              <h2 className="text-base font-bold text-neutral-800">{name}</h2>
              <div className="flex gap-1.5 items-center self-start mt-1.5 text-xs text-neutral-500">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc5ce9dc8e2d23be104e47c6bbc684a958e2fbf4aac48acce7ab0245196d26f8?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="Rating stars" className="object-contain shrink-0 gap-0 self-stretch my-auto w-12 aspect-[2.67]" />
                <span className="self-stretch my-auto">{rating}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center self-stretch my-auto text-sm font-bold text-center text-stone-950">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6c07232db1c6edef39898d79b866f608c5d06c81e6b945804cecc2e44abdef6?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.2] stroke-[1px] stroke-stone-950 w-[18px]" />
            <button className="gap-2 self-stretch p-3 my-auto bg-lime-500 rounded min-h-[38px] w-[76px]">
              Copy
            </button>
          </div>
        </header>
        <div className="flex gap-4 justify-between items-end mt-5 w-full">
          <div className="flex flex-col w-[207px]">
            <div className="flex gap-5 items-center w-full">
              <div className="flex flex-col self-stretch my-auto w-28">
                <span className="text-xs text-neutral-500">7D PnL</span>
                <div className="flex gap-1.5 justify-center items-center py-1.5 mt-1 w-full text-xl font-bold whitespace-nowrap rounded text-stone-950">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d491cef7465933f84a45e91e32148d243cc7b5e16a9866312b337704e274ad40?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square fill-lime-500" />
                  <span className="self-stretch my-auto">{pnl}</span>
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto w-[79px]">
                <span className="text-xs text-neutral-500">7D ROI</span>
                <div className="flex gap-1.5 justify-center items-center mt-1.5 w-full text-xl font-bold whitespace-nowrap rounded text-stone-950">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d491cef7465933f84a45e91e32148d243cc7b5e16a9866312b337704e274ad40?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square fill-lime-500" />
                  <span className="self-stretch my-auto">{roi}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-10 mt-6 max-w-full w-[190px]">
              <div className="flex flex-col justify-center whitespace-nowrap rounded">
                <span className="text-xs text-neutral-500">AUM</span>
                <span className="mt-1.5 text-sm font-semibold text-neutral-800">{aum}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-stone-400">7D MDD</span>
                <span className="mt-1.5 text-sm font-semibold text-neutral-800">{mdd}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-xs text-center text-stone-400 w-[105px]">
            <img loading="lazy" src={chartSrc} alt="Last 7 day performance chart" className="object-contain self-center rounded-sm aspect-[1.86] w-[89px]" />
            <span className="mt-3.5">Last 7 day</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;