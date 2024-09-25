import Image from 'next/image';
import React from 'react';

/**
 * QuestCardBig component displays detailed information about a quest
 * @param {Object} props
 * @param {string} props.questName - The name of the quest
 * @param {number} props.currentProgress - Current progress of the quest
 * @param {number} props.totalProgress - Total progress required for the quest
 * @param {number} props.currentPoints - Current points earned
 * @param {number} props.totalPoints - Total points available
 * @param {string} props.description - Description of the quest
 * @param {number} props.rewardPoints - Points rewarded for completing the quest
 * @param {string} props.endDate - End date of the quest
 * @param {number} props.multiplier - Point multiplier for the quest
 * @returns {JSX.Element}
 */
function QuestCardBig({
  questName,
  currentProgress,
  totalProgress,
  currentPoints,
  totalPoints,
  description,
  rewardPoints,
  endDate,
  multiplier
}) {
  return (
    <article className="flex flex-col max-w-[348px]">
      <div className="flex overflow-hidden gap-5 pb-2.5 pl-4 bg-white rounded-lg shadow-sm">
        <div className="flex flex-col self-start mt-5">
          <div className="flex gap-10 items-center">
            <h2 className="self-stretch my-auto text-base font-bold leading-none text-neutral-800">
              {questName}
            </h2>
            <div className="flex gap-1 items-center self-stretch my-auto">
              <div className="flex gap-1 items-center self-stretch my-auto w-3">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4314a8e6b257916804543cb8a5356a9e4683736d41b4475da07ac59720284ab?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  alt=""
                  width={12}
                  height={12}
                  className="object-contain self-stretch my-auto w-3 aspect-square"
                />
              </div>
              <div className="self-stretch my-auto text-xs font-semibold leading-none text-neutral-800">
                {currentProgress}/{totalProgress}
              </div>
            </div>
          </div>
          <div className="flex gap-1 items-center self-start text-xs font-semibold leading-none text-stone-400">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a98e08b51213e30bd48f2224fb9019dec51741c24d0da0a69d9fa86318a3dd5f?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt=""
              width={38}
              height={14}
              className="object-contain shrink-0 gap-0 self-stretch my-auto aspect-[2.72]"
            />
            <div className="self-stretch my-auto">
              <span className="text-neutral-800">{currentPoints}k </span>
              <span className="text-xs text-stone-400">/ {totalPoints}k</span>
            </div>
          </div>
          <p className="mt-2.5 text-xs leading-4 text-neutral-500">
            {description}
          </p>
          <div className="flex gap-7 justify-between items-center self-start mt-14 leading-none">
            <div className="flex flex-col self-stretch my-auto w-[53px]">
              <div className="flex gap-1 items-center text-xs whitespace-nowrap text-stone-400">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/654f3ccc2332feca1b5e059671826b1c87f3c1770af2cac118867dae66ce25ff?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  alt=""
                  width={13}
                  height={12}
                  className="object-contain shrink-0 self-stretch my-auto aspect-[1.08]"
                />
                <div className="self-stretch my-auto">Reward</div>
              </div>
              <div className="gap-1 self-stretch w-full text-sm font-bold text-neutral-800">
                {rewardPoints} pts
              </div>
            </div>
            <div className="shrink-0 self-stretch my-auto w-0 h-7 border border-solid bg-stone-400 border-stone-400" />
            <div className="flex flex-col self-stretch my-auto w-[66px]">
              <div className="flex gap-1 items-center text-xs text-stone-400">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc83a4ce3176b606d0a8b12f0f8538091400e3fda61e12535af138ddd6c0a238?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  alt=""
                  width={14}
                  height={14}
                  className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                />
                <div className="self-stretch my-auto">End Date</div>
              </div>
              <div className="gap-1 self-stretch w-full text-sm font-bold text-neutral-800">
                {endDate}
              </div>
            </div>
          </div>
        </div>
        <div className="flex z-10 flex-col whitespace-nowrap">
          <div className="flex z-10 gap-0.5 justify-center items-center self-end px-1 py-1 w-11 bg-blue-500 rounded-xl">
            <div className="gap-2 self-stretch py-0.5 pr-1 pl-0.5 my-auto text-xs leading-none text-white rounded-xl bg-neutral-800 min-h-[12px] w-[19px]">
              {rewardPoints}
            </div>
            <div className="self-stretch my-auto text-xs font-bold leading-none text-white">
              {multiplier}x
            </div>
          </div>
          <div className="flex relative flex-col px-5 pt-44 pb-1.5 mt-0 max-w-full text-xs font-extrabold leading-none text-lime-500 rounded aspect-[0.505] w-[100px]">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7855d29ac75f7a94c94a61e7342d0e7430b868baf997edfa53119ca685bdf1d?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className="flex relative gap-1 justify-center items-center px-1 py-1 rounded-3xl border border-lime-500 border-solid shadow-sm bg-neutral-800 min-h-[20px]">
              <div className="flex shrink-0 gap-2 self-stretch my-auto w-1.5 h-1.5 bg-lime-500 rounded-xl" />
              <div className="self-stretch my-auto">LIVE</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default QuestCardBig;