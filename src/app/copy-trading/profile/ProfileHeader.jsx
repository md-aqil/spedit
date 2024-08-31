import React from 'react';

function ProfileHeader() {
  return (
    <header className="flex overflow-hidden relative flex-col px-10 py-6 w-full leading-none bg-white rounded-xl shadow-sm mb-5">
      <div className="flex z-0 flex-col w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
          <div className="flex gap-4 self-stretch my-auto">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b567848700f7484487aaafc96a8191098cd64c0f6caa45e3ef224bab4eb531a?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="Profile" className="object-contain shrink-0 my-auto rounded-none aspect-[0.93] w-[86px]" />
            <div className="flex flex-col justify-between w-[134px]">
              <div className="flex flex-col w-full">
                <div className="text-xs text-blue-500">123456i</div>
                <div className="flex flex-col mt-2 w-full text-black">
                  <div className="text-base font-bold">Swati Patidar</div>
                  <div className="mt-1 text-xs">@swati345</div>
                </div>
              </div>
              <div className="mt-8 text-xs text-stone-500">
                DOJ: <span className="font-semibold">01-01-1994</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center self-stretch py-4 pr-2.5 pl-2.5 my-auto w-24 text-sm font-bold text-center text-lime-500 whitespace-nowrap rounded-xl bg-neutral-800 min-h-[44px]">
            <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-lime-500 rounded-full fill-lime-500" />
            <div className="self-stretch my-auto">Essential</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;