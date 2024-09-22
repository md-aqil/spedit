import React from "react";

const TraderCard = ({
  traderId,
  name,
  rating,
  daysTrading,
  currentCopiers,
  allTimeCopiers,
  mockCopiers,
  leadingMarginBalance,
  aum,
  minInvestmentReqd,
  risk,
  copierPnL,
  roiPercent,
}) => {
  return (
    <div className="flex flex-col p-10 rounded-lg  bg-none w-[400px]">
      <div className="flex gap-10 justify-between items-start w-full">
        <div className="flex flex-col leading-none whitespace-nowrap w-[280px]">
          <div className="flex flex-col w-full">
            <div className="flex relative gap-4 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4174d01cf8d0b9d29cea119a8b30d1a15ff406b4bf81b081887bfb5de49f078b?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                alt={`${name}'s profile picture`}
                className="object-contain z-0 shrink-0 rounded-xl aspect-[0.84] w-[53px]"
              />
              <div className="flex z-0 flex-col justify-center w-48">
                <div className="text-xs text-blue-600">{traderId}</div>
                <h2 className="mt-1.5 text-xl font-bold text-zinc-900">
                  {name}
                </h2>
                <div className="flex gap-1.5 items-center self-start mt-1.5 text-sm font-semibold text-stone-950">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/67bfdbde5c861bdd6179cb0aee69864ed34188c6f34c93ed6ccaa233a1c1a809?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                    alt="Rating stars"
                    className="object-contain shrink-0 gap-0 self-stretch my-auto w-16 aspect-[2.91]"
                  />
                  <span className="self-stretch my-auto">{rating}</span>
                </div>
              </div>
              <div className="flex absolute z-0 shrink-0 bottom-[18px] h-[18px] left-[68px] w-[18px]" />
            </div>
          </div>
        </div>
        <button className="flex gap-3 items-center w-[18px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e71ac430aaf048f7d72d609f0aef2678e79e9443c3f8376ef0f8d156dcd7adc7?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            alt="More options"
            className="object-contain self-stretch my-auto aspect-square w-[18px]"
          />
        </button>
      </div>
      <p className="flex-1 shrink gap-2 self-stretch mt-5 w-full text-sm leading-5 text-zinc-800">
        Our goal is to achieve consistent capital appreciation with a target
        annual return of 6-8%, while maintaining a risk level{" "}
        <span className="font-semibold leading-4 text-lime-500">
          <a href="/copy-trading/startegy-description/readmore">Read more</a>
        </span>
      </p>
      <div className="flex flex-col justify-center mt-5 w-full">
        <div className="flex gap-10 justify-between items-center w-full h-[38px]">
          <div className="flex flex-col self-stretch my-auto rounded">
            <span className="text-sm leading-none text-neutral-500">
              Days trading
            </span>
            <span className="mt-1.5 text-base font-bold leading-none text-stone-950">
              {daysTrading}
            </span>
          </div>
          <div className="flex flex-col items-end self-stretch my-auto rounded">
            <span className="text-sm leading-none text-neutral-500">
              Current Copiers
            </span>
            <span className="mt-1.5 text-base font-bold leading-none text-stone-950">
              {currentCopiers}
            </span>
          </div>
        </div>
        <div className="flex gap-10 justify-between items-center mt-6 w-full">
          <div className="flex flex-col self-stretch my-auto rounded">
            <span className="text-sm leading-none text-neutral-500">
              All time Copiers
            </span>
            <span className="mt-1.5 text-base font-bold leading-none text-stone-950">
              {allTimeCopiers}
            </span>
          </div>
          <div className="flex flex-col items-end self-stretch my-auto rounded">
            <span className="text-sm leading-none text-neutral-500">
              Mock Copiers
            </span>
            <span className="mt-1.5 text-base font-bold leading-none text-stone-950">
              {mockCopiers}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-8 justify-between items-start mt-5 max-w-full w-[334px]">
        <div className="flex flex-col w-[151px]">
          <div className="flex flex-col max-w-full w-[151px]">
            <span className="text-sm leading-none text-neutral-500">
              Leading Margin Balance
            </span>
            <span className="mt-2 text-base font-bold leading-none text-stone-950">
              {leadingMarginBalance}
            </span>
          </div>
          <div className="flex flex-col mt-5 w-full">
            <span className="text-sm leading-none text-neutral-500">AUM</span>
            <span className="mt-2 text-base font-bold leading-none text-stone-950">
              {aum}
            </span>
          </div>
        </div>
        <div className="flex flex-col text-right w-[151px]">
          <div className="flex flex-col w-full">
            <span className="text-sm leading-none text-neutral-500">
              Min. Investment Reqd.
            </span>
            <span className="mt-2 text-base font-bold leading-none text-stone-950">
              {minInvestmentReqd}
            </span>
          </div>
          <div className="flex flex-col mt-5 w-full">
            <span className="text-sm leading-none text-neutral-500">Risk</span>
            <span className="mt-2 text-base font-bold leading-none text-stone-950">
              {risk}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5 max-w-full w-[143px]">
        <div className="flex flex-col w-full max-w-[143px]">
          <span className="text-sm leading-none text-neutral-500">
            Copier PnL <span className="text-xs leading-4">(last 30 days)</span>
          </span>
          <div className="flex gap-2 items-center self-start mt-2 text-base font-bold leading-none text-stone-950">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/81e2c383663fe87021cdb8f72d72d7061429f443dfbeb75e3e0a45c41bea1777?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square fill-lime-500"
            />
            <span className="self-stretch my-auto">{copierPnL}</span>
          </div>
        </div>
        <div className="flex flex-col mt-5 w-full">
          <span className="text-sm leading-none text-neutral-500">
            RoI % <span className="text-xs">(last 30 days)</span>
          </span>
          <span className="mt-2 text-base font-bold leading-none text-stone-950">
            {roiPercent}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TraderCard;
