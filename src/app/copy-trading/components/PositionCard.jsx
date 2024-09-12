import React, { useState } from 'react';
import Image from 'next/image';
import userIcon from "../../../assets/user1.png"; 
import JoinedUsers from "../../../assets/JoinedUsers.png"; 



function PositionCard({ name, rating, netCopyAmount, unrealizedPnl, roi }) {
  return (
    <article className="flex flex-col p-5 bg-white rounded-lg shadow-sm max-w-[500px]  grow">
      <div className="flex gap-4 items-start">
        <Image
          loading="lazy"
          src={userIcon}
          alt={`${name}'s profile picture`}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-neutral-800">{name}</h2>
          <div className="flex items-center gap-2 mt-1.5 text-xs text-neutral-500">
            <Image
              loading="lazy"
              src={JoinedUsers}
              alt="Rating"
              className="w-8"
            />
            <span>{rating}</span>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <span className="text-xs text-neutral-500">Net Copy Amount</span>
          <span className="text-xl font-bold text-black">{netCopyAmount.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex gap-6 mt-4">
      
        <div className="flex flex-col flex-1">
          <span className="text-xs text-neutral-500">Unrealized Pnl</span>
          <div className={`flex items-center gap-2 mt-2 text-base  ${unrealizedPnl >= 0 ? 'text-green-500' : 'text-red-500'}`}>
           
          <span class={` text-white text-sm p-0.4 rounded-sm ${unrealizedPnl >= 0 ? 'bg-green-500  icon-arrow-up-3' : 'bg-[#CD0070] icon-arrow-down'}`}>

</span>
            <span>{unrealizedPnl.toFixed(4)}</span>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-xs text-neutral-500">ROI</span>

          <div className={`flex items-center gap-2 mt-2 text-base  ${roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>

          <span class={` text-white text-sm p-0.4 rounded-sm ${roi >= 0 ? 'bg-green-500  icon-arrow-up-3' : 'bg-[#CD0070] icon-arrow-down'}`}>

</span>
            <span>{roi.toFixed(2)}%</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        <button className="flex-1 py-2 px-4 text-white bg-pink-700 rounded-sm border border-pink-700 hover:bg-pink-800">
          Stop Copy
        </button>
        <button className="flex-1 py-2 px-4 bg-white border border-stone-950 text-stone-950 rounded-sm hover:bg-stone-100">
          Pause Copy
        </button>
      </div>
    </article>
  );
}

export default PositionCard;
