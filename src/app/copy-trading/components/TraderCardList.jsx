import React from 'react';

const TraderCardList = ({ name, pnl, roi, mdd, aum, copiers }) => {
  return (
    <article className="flex grow shrink -w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center py-4 pr-11 pl-5 h-full bg-white rounded-lg shadow-sm w-full">
        <div className="flex gap-4 self-stretch my-auto whitespace-nowrap min-h-[86px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d63ec8ee0bd1a7a291d56f125726bfc58033354e7d1c02a6febd250eba26e83?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt={`${name}'s profile picture`} className="object-contain shrink-0 self-start rounded-xl aspect-[0.84] w-[72px]" />
          <div className="flex flex-col justify-between w-[116px]">
            <div className="flex gap-10 justify-between items-start max-w-full text-base w-[116px]">
              <div>{name}</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/72b00afa2935ce36d6e7360659afa27520b3515f5dff2cca2aaa30ff7f129141?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 aspect-square w-[18px]" />
            </div>
            <div className="flex gap-4 items-center mt-8 w-full text-sm text-center max-w-[109px]">
              <button className="flex-1 shrink gap-1 self-stretch px-2 py-3 my-auto w-full bg-lime-500 rounded min-h-[36px]">
                Copy
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-1.5 justify-center items-end self-stretch py-2 my-auto text-base whitespace-nowrap rounded">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/99fc17cca393f947878c24cceda41ea700b54b1b5f1ccc8c8b56a2e09ae5935c?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 w-3.5 aspect-square fill-lime-500" />
          <div>{pnl}</div>
        </div>
        <div className="flex gap-1.5 justify-center items-end self-stretch py-2 my-auto text-base whitespace-nowrap rounded">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fa8ac39cdc7afcc54a1b496074efac07d5cdd31ce6ed36015472331c47955d6?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 w-3.5 aspect-square fill-lime-500" />
          <div>{roi}</div>
        </div>
        <div className="self-stretch py-2 my-auto text-sm font-semibold whitespace-nowrap rounded">
          {mdd}
        </div>
        <div className="gap-2 self-stretch p-2 my-auto text-sm font-semibold">
          {aum}
        </div>
        <div className="flex gap-1.5 items-center self-stretch my-auto text-sm font-semibold whitespace-nowrap">
          <div className="self-stretch my-auto">{copiers}</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ed2a5cb5c8c1931ae340c7377b8ad2379c75618b0934d9f5c059fe1659bb6d3?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 gap-0 self-stretch my-auto w-16 aspect-[2.91]" />
        </div>
      </div>
    </article>
  );
};

export default TraderCardList;