import React from "react";

import Image from 'next/image';
import userIcon from "../../../assets/user1.png"; 
import JoinedUsers from "../../../assets/JoinedUsers.png"; 

const LivePositionsList = ({ positions }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {positions.map((position, index) => (
        <div key={index} className="flex items-center w-full justify-between gap-4 p-4 bg-white rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <Image
              loading="lazy"
              src={userIcon}
              alt={`${position.name}'s profile`}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <div className="text-lg font-semibold text-neutral-800">{position.name}</div>
              <div className="flex items-center gap-1 text-xs text-neutral-500">
                <Image
                  loading="lazy"
                  src={JoinedUsers}
                  alt="Rating"
                  
                />
                <span>{position.rating}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs text-neutral-500">Net Copy Amount</div>
            <div className="text-lg font-semibold text-neutral-800">
              {position.netCopyAmount.toLocaleString()}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs text-neutral-500">Unrealized Pnl</div>
            <div className={`text-lg font-semibold ${position.unrealizedPnl >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {position.unrealizedPnl.toFixed(2)}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs text-neutral-500">ROI</div>
            <div className={`text-lg font-semibold ${position.roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {Math.abs(position.roi).toFixed(2)}%
            </div>
          </div>
          <div className="flex gap-2">
            <button className="py-2 px-4 border border-pink-700 text-white rounded-sm">
              Stop Mock Copy
            </button>
            <button className="py-2 px-4 border  bg-lime-500 text-stone-600 rounded-sm">
               Copy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LivePositionsList;
