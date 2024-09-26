import * as React from "react";
import Image from "next/image";

/**
 * @typedef {Object} QuestCardSmallProps
 * @property {string} brandName - The name of the brand
 * @property {string} questName - The name of the quest
 * @property {number} currentProgress - The current progress of the quest
 * @property {number} totalProgress - The total progress required for the quest
 * @property {number} rewardPoints - The number of points rewarded for completing the quest
 * @property {string} endDate - The end date of the quest
 * @property {number} boostMultiplier - The boost multiplier for the quest
 */

/**
 * QuestCardSmall component displays information about a quest
 * @param {QuestCardSmallProps} props
 */
function QuestCardSmall({
  brandName,
  questName,
  currentProgress,
  totalProgress,
  rewardPoints,
  endDate,
  boostMultiplier,
}) {
  return (
    <article className="flex flex-col max-w-[400px]  w-full relative">
      <div className="flex  gap-5 justify-between items-start p-2 bg-white rounded-lg shadow-md border border-color-[#E9F0E1]">
        <div className="flex flex-col items-start my-auto">
          <div className="flex gap-1 justify-center items-center px-2 py-1 mb-3 rounded-full bg-[#D3DEC8]">
            <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch my-auto w-3 h-3 rounded-xl bg-neutral-500">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/00f70ac7b4fc5660065ec36e50b5a808a333133ddb67dd082570ee8250b21589?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                alt=""
                width={26}
                height={12}
                className="object-contain self-stretch my-auto aspect-[2.16] w-[26px]"
              />
            </div>
            <div className="self-stretch my-auto text-xs font-semibold leading-none text-neutral-800">
              {brandName}
            </div>
          </div>
          <h2 className="self-stretch text-base font-bold leading-none text-neutral-800">
            {questName}
          </h2>
          <div className="flex gap-1 items-center mt-2 text-xs font-semibold leading-none text-stone-400">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a98e08b51213e30bd48f2224fb9019dec51741c24d0da0a69d9fa86318a3dd5f?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt=""
              width={38}
              height={14}
              className="object-contain shrink-0 gap-0 self-stretch my-auto aspect-[2.72] w-[38px]"
            />
            <div className="self-stretch my-auto">
              <span className="text-neutral-800">{currentProgress}k </span>
              <span className="text-xs text-stone-400">/ {totalProgress}k</span>
            </div>
          </div>
          <div className="flex flex-col items-start mt-9 leading-none w-[78px]">
            <div className="flex flex-col w-[53px]">
              <div className="flex gap-1 items-center text-xs whitespace-nowrap text-stone-400">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/654f3ccc2332feca1b5e059671826b1c87f3c1770af2cac118867dae66ce25ff?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  alt=""
                  width={13}
                  height={12}
                  className="object-contain shrink-0 self-stretch my-auto aspect-[1.08] w-[13px]"
                />
                <div className="self-stretch my-auto">Reward</div>
              </div>
              <div className="gap-1 self-stretch w-full text-sm font-bold text-neutral-800">
                {rewardPoints} pts
              </div>
            </div>
            <div className="flex flex-col mt-3 w-full max-w-[66px]">
              <div className="flex gap-1 items-center text-xs text-stone-400">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc83a4ce3176b606d0a8b12f0f8538091400e3fda61e12535af138ddd6c0a238?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  alt=""
                  width={14}
                  height={14}
                  className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                />
                <div className="self-stretch my-auto whitespace-nowrap">End Date</div>
              </div>
              <div className="gap-1 self-stretch w-full text-sm font-bold text-neutral-800 whitespace-nowrap">
                {endDate}
              </div>
            </div>
          </div>
        </div>
        <div className="flex z-10 flex-col self-end mt-0 whitespace-nowrap">

          <div className="flex z-10 gap-1 justify-center items-center  px-4 py-1 w-16 bg-blue-500 rounded-full absolute top-[-5px] -right-3">

            <div className="gap-2 py-1 pr-1 pl-1 my-auto text-xs leading-none text-white rounded-xl bg-neutral-800 ">
              100
            </div>

            <div className="self-stretch my-auto text-xs font-bold leading-none text-white">
              {boostMultiplier}x
            </div>

          </div>


          <div className="flex relative flex-col px-6 pt-48 pb-2.5 mt-0 max-w-full text-xs font-extrabold leading-none text-lime-500 rounded aspect-[0.536] w-[120px]">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/76adda75b1bb0360fa191c1b4c89a345f01244bbc334a85df0334bf8265dac90?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 size-full"
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

export default QuestCardSmall;