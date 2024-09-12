import React from "react";
import Image from 'next/image';
import userIcon from "../../../assets/user1.png"; 
import JoinedUsers from "../../../assets/JoinedUsers.png"; 

function PositionCard({
  name,
  rating,
  netCopyAmount,
  unrealizedPnl,
  roi,
  avatarSrc,
  ratingSrc,
  arrowSrc,
}) {
  return (
    <article className="flex flex-col grow shrink self-stretch px-5 py-6 my-auto bg-white rounded-lg border border-solid border-stone-300">
      <header className="flex gap-10 justify-between items-center max-w-full whitespace-nowrap">
        <div className="flex flex-col items-start self-stretch my-auto">
          <div className="flex gap-2.5 items-start h-[43px]">
            <Image
              loading="lazy"
              src={userIcon}
              alt={`${name}'s avatar`}
              className="object-contain shrink-0 w-10 rounded-full aspect-square"
            />
            <div className="flex flex-col py-1">
              <h2 className="text-base font-bold text-neutral-800">{name}</h2>
              <div className="flex gap-1.5 items-center self-start mt-1.5 text-xs text-neutral-500">
                <Image
                  loading="lazy"
                  src={JoinedUsers}
                  alt="Rating"
                  className="object-contain shrink-0 gap-0 self-stretch my-auto w-12 aspect-[2.67]"
                />
                <span className="self-stretch my-auto">{rating}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden self-stretch px-2 py-1 my-auto text-xs text-center text-lime-500 rounded bg-neutral-800">
          Mock
        </div>
      </header>
      <div className="flex gap-6 justify-between mt-6">
        <div className="flex flex-col">
          <span className="text-xs text-neutral-500">Net Copy Amount</span>
          <span className="mt-2 text-xl font-bold text-black">
            {netCopyAmount.toLocaleString()}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-neutral-500">Unrealized Pnl</span>
          <div className={`flex gap-2 items-center mt-2 text-base font-bold whitespace-nowrap ${unrealizedPnl >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          <span class={` text-white text-sm p-0.4 rounded-sm ${unrealizedPnl >= 0 ? 'bg-green-500  icon-arrow-up-3' : 'bg-[#CD0070] icon-arrow-down'}`}>

</span>
            <span className="self-stretch my-auto">
              {unrealizedPnl.toFixed(4)}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end whitespace-nowrap">
          <span className="text-xs text-neutral-500">ROI</span>
          <div className={`flex gap-2 items-center mt-2 text-base font-bold ${roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          <span class={` text-white text-sm p-0.4 rounded-sm ${roi >= 0 ? 'bg-green-500  icon-arrow-up-3' : 'bg-[#CD0070] icon-arrow-down'}`}>

</span>
            <span className="self-stretch my-auto">{roi.toFixed(2)}%</span>
          </div>
        </div>
      </div>
      <div className="flex gap-6 justify-between mt-6 w-full text-sm font-bold text-center">
        <button className="gap-1 self-stretch px-6 py-3.5 text-pink-700 bg-white rounded-sm border border-pink-700 border-solid min-h-[40px] max-md:px-5">
          Stop Mock Copy
        </button>
        <button className="gap-1 self-stretch px-1.5 py-3.5 whitespace-nowrap bg-lime-500 rounded-sm min-h-[40px] text-stone-950 w-[132px]">
          Copy
        </button>
      </div>
    </article>
  );
}

export default PositionCard;
