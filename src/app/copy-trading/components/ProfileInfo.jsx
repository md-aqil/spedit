
import React from "react";

const ProfileInfo = ({ name, followers }) => {
  return (
    <div className="flex gap-2.5 items-start self-stretch my-auto h-[43px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bba9259288bb77aecf6f258a1b4d94e598e654daff91a8933b1ea232336070ed?apiKey=b4d1b9e87b084579b1e2475047caf617&"
        alt={`${name}'s profile picture`}
        className="object-contain shrink-0 w-10 rounded-full aspect-square"
      />
      <div className="flex flex-col py-1 w-[85px]">
        <div className="text-base font-bold text-neutral-800">{name}</div>
        <div className="flex gap-1.5 items-center self-start mt-1.5 text-xs text-neutral-500">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee2bc911c5d31b6e7bd54437578a77505ee3f8b93981d6dbae42fa32dd784ddb?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            alt="Followers icon"
            className="object-contain shrink-0 gap-0 self-stretch my-auto w-12 aspect-[2.67]"
          />
          <div className="self-stretch my-auto">{followers}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
