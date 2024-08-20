
import React from "react";

function StrategyItem({
  name,
  rating,
  avatar,
  profit,
  profitPercentage,
  roi,
  amount,
}) {
  return (
    <div className="flex flex-wrap gap-10 justify-around items-center px-3 py-4 mt-1 w-full bg-white rounded-lg shadow-sm max-md:max-w-full">
      <div className="flex gap-3 items-start self-stretch my-auto whitespace-nowrap">
        <img
          loading="lazy"
          src={avatar}
          alt={`${name}'s avatar`}
          className="object-contain shrink-0 rounded-xl aspect-square w-[72px]"
        />
        <div className="flex flex-col w-[108px]">
          <div className="text-base font-bold text-stone-950">{name}</div>
          <div className="flex gap-1.5 items-center self-start mt-2 text-xs text-neutral-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f541c647e3f4cfe9b0e78e497862b107847de05efbb13b46e204710a72eeecc?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt=""
              className="object-contain shrink-0 gap-0 self-stretch my-auto w-12 aspect-[2.67]"
            />
            <div className="self-stretch my-auto">{rating}</div>
          </div>
        </div>
      </div>
      <div className="flex gap-1.5 justify-center items-end self-stretch py-2 my-auto text-base font-bold whitespace-nowrap rounded text-stone-950">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/40209b71424afc71e449ae6ea3baa182772584eb58a9bc74c6f0d7bfe0bbcf47?apiKey=b4d1b9e87b084579b1e2475047caf617&"
          alt=""
          className="object-contain shrink-0 w-3.5 aspect-square fill-lime-500"
        />
        <div>{profit.toFixed(2)}</div>
      </div>
      <div className="flex gap-1.5 justify-center items-end self-stretch py-2 my-auto text-base font-bold whitespace-nowrap rounded text-stone-950">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/40209b71424afc71e449ae6ea3baa182772584eb58a9bc74c6f0d7bfe0bbcf47?apiKey=b4d1b9e87b084579b1e2475047caf617&"
          alt=""
          className="object-contain shrink-0 w-3.5 aspect-square fill-lime-500"
        />
        <div>+{profitPercentage}%</div>
      </div>
      <div className="self-stretch py-2 my-auto text-sm font-semibold whitespace-nowrap rounded text-stone-950">
        {roi}%
      </div>
      <div className="gap-2 self-stretch p-2 my-auto text-sm font-semibold text-stone-950">
        ₹{amount.toFixed(2)}
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/72b00afa2935ce36d6e7360659afa27520b3515f5dff2cca2aaa30ff7f129141?apiKey=b4d1b9e87b084579b1e2475047caf617&"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
      />
      <div className="flex gap-4 items-center self-stretch my-auto text-sm font-bold text-center min-w-[240px]">
        <button className="gap-1 self-stretch px-2 py-3 my-auto rounded border border-solid border-neutral-800 min-h-[36px] text-neutral-800 w-[116px]">
          Pause Copy
        </button>
        <button className="gap-1 self-stretch px-2 py-3 my-auto text-white bg-pink-700 rounded min-h-[36px] w-[116px]">
          Stop Copy
        </button>
      </div>
    </div>
  );
}

export default StrategyItem;
