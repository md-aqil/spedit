import React from 'react';


const LivePositionsList = () => {
  return (
    <article className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center w-full basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex gap-2.5 items-center self-stretch my-auto whitespace-nowrap h-[43px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc941d17db5230ceb5e647a8b3d71fe9377a0fa55b22b259452050b561fcad30?apiKey=b4d1b9e87b084579b1e2475047caf617&"
          alt="Karishma's profile"
          className="object-contain shrink-0 self-stretch my-auto w-10 rounded-full aspect-square"
        />
        <div className="flex flex-col self-stretch py-1 my-auto w-[85px]">
          <div className="text-base font-bold text-neutral-800">Karishma</div>
          <div className="flex gap-1.5 items-center self-start mt-1.5 text-xs text-neutral-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8b726502541564553e8978e3ae509c774eb50430c818a712adb55b4763af956?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt="Rating"
              className="object-contain shrink-0 gap-0 self-stretch my-auto w-12 aspect-[2.67]"
            />
            <div className="self-stretch my-auto">502</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-stretch my-auto w-[111px]">
        <div className="text-xs text-neutral-500">Net Copy Amount</div>
        <div className="mt-2 text-xl font-bold text-black">10,000.0</div>
      </div>
      <div className="flex flex-col self-stretch my-auto">
        <div className="text-xs text-neutral-500">Unrealized Pnl</div>
        <div className="flex gap-2 items-center mt-2 text-base font-bold whitespace-nowrap text-stone-950">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2e2ecb24b1cae4a0553a230969abdd9219ec17ae4fc410bc869a2d938af6729?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-3.5 rounded-sm aspect-square"
          />
          <div className="self-stretch my-auto">-47.5654</div>
        </div>
      </div>
      <div className="flex flex-col self-stretch my-auto whitespace-nowrap w-[82px]">
        <div className="text-xs text-neutral-500">ROI</div>
        <div className="flex gap-2 items-center self-start mt-2 text-base font-bold text-stone-950">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdcb90aff925f4a7a6ca74f121b9415811a9a918c7d7ee04a62e74a6829132b3?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-3.5 rounded-sm aspect-square"
          />
          <div className="self-stretch my-auto">-0.47%</div>
        </div>
      </div>
      <div className="flex gap-3 justify-center items-start self-stretch my-auto text-sm font-bold text-center">
        <button className="gap-1 self-stretch py-3.5 pr-5 pl-5 text-white bg-pink-700 rounded-sm border border-pink-700 border-solid min-h-[40px] w-[108px]">
          Stop Copy
        </button>
        <button className="gap-1 self-stretch px-1.5 py-3.5 bg-white rounded-sm border border-solid border-stone-950 min-h-[40px] text-stone-950 w-[108px]">
          Pause Copy
        </button>
      </div>
    </article>
  );
};

export default LivePositionsList;