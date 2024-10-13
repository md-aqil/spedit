import React from 'react';
import Image from 'next/image';
import userIcon from '../../../assets/user1.png';
import JoinedUsers from '../../../assets/JoinedUsers.png';

const CardHeader = ({ name, followers }) => {
  return (
    <div className="flex gap-2.5 items-start my-auto h-[43px]">
      <Image
        src={userIcon}
        alt={`${name}'s profile picture`}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col py-1">
        <div className="text-base font-bold text-neutral-800">{name}</div>
        <div className="flex gap-1.5 items-center mt-1.5 text-xs text-neutral-500">
          <Image
            src={JoinedUsers}
            alt="Followers icon"
            width={48}
            height={18}
          />
          <span>{followers}</span>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
