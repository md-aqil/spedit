import * as React from "react";
import Image from "next/image";

/**
 * Featured component displays featured quests with brand information and rewards.
 * @returns {JSX.Element} The Featured component
 */
function FeaturedCard() {
  return (
    <section className="py-2 pr-2 pl-8 bg-white rounded-2xl border border-solid shadow-sm border-stone-300 max-w-[700px]">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10">
            <div className="flex gap-10 justify-between items-center w-full font-semibold">
              <div className="flex gap-0.5 justify-center items-center self-stretch px-1 py-1 my-auto text-xs leading-none rounded-3xl bg-stone-300 text-neutral-800">
                <div className="flex shrink-0 gap-2 self-stretch my-auto w-3 h-3 rounded-xl bg-neutral-500" />
                <div className="self-stretch my-auto">Brand Name</div>
              </div>
              <div className="flex gap-1 items-center self-stretch my-auto text-xs leading-none text-neutral-500">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a98e08b51213e30bd48f2224fb9019dec51741c24d0da0a69d9fa86318a3dd5f?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  alt="Progress icon"
                  width={38}
                  height={14}
                  className="object-contain shrink-0 gap-0 self-stretch my-auto"
                />
                <div className="self-stretch my-auto">
                  <span className="text-neutral-800">25k </span>
                  <span className="text-xs">/ 50k</span>
                </div>
              </div>
            </div>
            <h2 className="self-start mt-3 text-xl font-bold leading-none text-stone-950">
              Featured Quests
            </h2>
            <p className="self-start mt-1.5 text-sm leading-5 text-neutral-500">
              Lorem ipsum dolor sit amet consectetur. In lorem diam ut sit et sed velit tincidunt.
            </p>
            <div className="flex gap-7 justify-between items-center mt-20 leading-none max-md:mt-10">
              <div className="flex flex-col self-stretch my-auto w-[60px]">
                <div className="flex gap-1 items-center text-xs whitespace-nowrap text-neutral-500">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/654f3ccc2332feca1b5e059671826b1c87f3c1770af2cac118867dae66ce25ff?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                    alt="Reward icon"
                    width={13}
                    height={12}
                    className="object-contain shrink-0 self-stretch my-auto"
                  />
                  <div className="self-stretch my-auto">Reward</div>
                </div>
                <div className="gap-1 self-stretch w-full text-sm font-bold text-neutral-800">
                  100 pts
                </div>
              </div>
              <div className="shrink-0 self-stretch my-auto w-0 h-7 border border-solid bg-stone-400 border-stone-400" />
              <div className="flex flex-col self-stretch my-auto w-[184px]">
                <div className="flex gap-1 items-center self-start text-xs text-neutral-500">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e797e2200780b3083010cd66f98881d2ea01891cbe036f77ec5a152f618bff6?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                    alt="Calendar icon"
                    width={14}
                    height={14}
                    className="object-contain shrink-0 self-stretch my-auto"
                  />
                  <div className="self-stretch my-auto">
                    23 July, 2024 | 15:30 IST
                  </div>
                </div>
                <div className="gap-1 self-stretch w-full text-sm font-bold text-neutral-800">
                  till 23 July, 2024 | 15:30 IST
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col items-center px-14 pt-6 pb-16 w-full leading-none text-white rounded aspect-[1.034] max-md:px-5 max-md:mt-10">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/04da6e2840a79e801c927f0adad7f7bb49f8478d61c7ae4735ded66cd66d7015?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt="Featured Quest background"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className="flex relative gap-1 justify-center items-center px-1 py-1 text-xs font-extrabold text-lime-500 whitespace-nowrap rounded-3xl border border-lime-500 border-solid shadow-sm bg-neutral-800 w-[57px]">
              <div className="flex shrink-0 gap-2 self-stretch my-auto w-1.5 h-1.5 bg-lime-500 rounded-xl" />
              <div className="self-stretch my-auto">LIVE</div>
            </div>
            <div className="flex relative gap-0.5 justify-center items-center px-1 py-1 mt-14 text-xs font-semibold rounded-3xl bg-neutral-800 bg-opacity-80 max-md:mt-10">
              <div className="flex shrink-0 gap-2 self-stretch my-auto w-3 h-3 rounded-xl bg-neutral-500" />
              <div className="self-stretch my-auto">Brand Name</div>
            </div>
            <h1 className="relative mt-1.5 text-4xl font-bold leading-9 text-center">
              Featured Quests
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCard;