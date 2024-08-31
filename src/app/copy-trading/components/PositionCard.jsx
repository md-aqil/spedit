import React from 'react';

function PositionCard({ name, rating, netCopyAmount, unrealizedPnl, roi }) {
  return (
    <article className="flex flex-col grow shrink self-stretch px-5 py-5 my-auto bg-white rounded-lg shadow-sm min-h-[198px] min-w-[240px] w-[236px]">
      <div className="flex gap-2.5 justify-between items-start w-full max-w-[255px]">
        <div className="flex gap-2.5 items-start whitespace-nowrap h-[43px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c62b7d3f937fbd4b1613119320479795c50ea47f5855156f0fa337c0804bc40?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt={`${name}'s profile picture`} className="object-contain shrink-0 w-10 rounded-full aspect-square" />
          <div className="flex flex-col py-1 w-[85px]">
            <h2 className="text-base font-bold text-neutral-800">{name}</h2>
            <div className="flex gap-1.5 items-center self-start mt-1.5 text-xs text-neutral-500">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b99c038199eab66280f10cefdcd28661cd93af3f708fb7eab5781568d26a3df?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 gap-0 self-stretch my-auto w-12 aspect-[2.67]" />
              <span className="self-stretch my-auto">{rating}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end w-[111px]">
          <span className="text-xs text-neutral-500">Net Copy Amount</span>
          <span className="mt-2 text-xl font-bold text-black">{netCopyAmount.toFixed(1)}</span>
        </div>
      </div>
      <div className="flex gap-10 justify-between items-start mt-6 max-w-full w-[255px]">
        <div className="flex flex-col w-[79px]">
          <span className="text-xs text-neutral-500">Unrealized Pnl</span>
          <div className="flex gap-2 items-center mt-2 text-base font-bold whitespace-nowrap text-stone-950">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f35eb60031bfa9aeaf85e3055c0488ff889a43a40ce5a949e47b5b04349f78e9?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 rounded-sm aspect-square" />
            <span className="self-stretch my-auto">{unrealizedPnl.toFixed(4)}</span>
          </div>
        </div>
        <div className="flex flex-col items-end whitespace-nowrap w-[82px]">
          <span className="text-xs text-neutral-500">ROI</span>
          <div className="flex gap-2 items-center mt-2 text-base font-bold text-stone-950">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f35eb60031bfa9aeaf85e3055c0488ff889a43a40ce5a949e47b5b04349f78e9?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 rounded-sm aspect-square" />
            <span className="self-stretch my-auto">{roi.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    

      <div className="flex gap-2 justify-between items-start mt-6 w-full text-sm font-bold text-center ">
      <button className="px-5 py-3.5 text-white bg-pink-700 rounded-sm border border-pink-700 border-solid">
        Stop Copy
      </button>
      <button className="self-stretch px-5 py-3.5 bg-white rounded-sm border border-solid border-stone-950  text-stone-950">
        Pause Copy
      </button>
    </div>


    </article>
  );
}

export default PositionCard;