import React from 'react';

function TraderCard({ name, username, avatarSrc, returnPercentage, riskLevel, copiers, lastWeekPerformance }) {
  return (
    <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[297px]">
      <div className="flex flex-col px-4 py-5 w-full bg-white rounded">
        <div className="flex gap-4 items-start whitespace-nowrap min-h-[42px]">
          <img loading="lazy" src={avatarSrc} alt={`${name}'s avatar`} className="object-contain shrink-0 w-10 rounded-full aspect-square" />
          <div className="flex flex-col flex-1 shrink basis-0">
            <div className="flex flex-col w-full">
              <div className="text-base font-semibold text-zinc-900">{name}</div>
              <div className="mt-1 text-sm leading-none text-slate-500">{username}</div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 justify-between items-center mt-5">
          <div className="flex flex-col self-stretch my-auto rounded-none w-[126px]">
            <div className="flex gap-2.5 justify-center items-center py-1 text-3xl font-semibold whitespace-nowrap rounded text-slate-900">
              <img loading="lazy" src="./Arrowup-bg.svg" alt="" className="object-contain shrink-0 w-5 rounded-sm aspect-square" />
              <div>{returnPercentage}%</div>
            </div>
            <div className="flex gap-0.5 items-start self-start mt-1 text-sm">
              <div className="text-lime-500 uppercase">Return</div>
              <div className="capitalize text-slate-500 whitespace-nowrap">(Last 12M)</div>
            </div>
          </div>
          <div className="flex flex-col self-stretch my-auto whitespace-nowrap rounded w-[39px] justify-center">
            <div className="self-stretch py-1.5 text-xl font-semibold bg-white rounded border text-center border-gray-300 border-solid text-slate-900">
              {riskLevel}
            </div>
            <div className="text-sm capitalize text-slate-500 text-center">RISK</div>
          </div>
        </div>
        <div className="flex gap-3 items-start mt-12 w-full max-md:mt-10 justify-between">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center text-sm whitespace-nowrap text-slate-500">
              <img loading="lazy" src="./JoinedUsers.png" alt="" className="object-contain shrink-0 gap-0 self-stretch my-auto aspect-[2.71] w-[65px]" />
              <div className="flex-1 shrink self-stretch my-auto basis-0 text-ellipsis">
                {copiers} Copiers
              </div>
            </div>
            <div className="flex gap-2 self-start mt-3.5 text-base font-semibold leading-none text-slate-900">
              <img loading="lazy" src="./Arrow-d-red.svg" alt="" className="object-contain shrink-0 w-5 rounded-sm aspect-square" />
              <div className="basis-auto">{lastWeekPerformance}% LAST 7D</div>
            </div>
          </div>
          <button className="gap-1 self-stretch p-3 mt-5 text-sm font-extrabold leading-none text-center whitespace-nowrap bg-lime-500 rounded min-h-[44px] text-slate-900">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default TraderCard;