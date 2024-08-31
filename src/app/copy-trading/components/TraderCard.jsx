
import Image from "next/image";
import React from "react";

function TraderCard({ name, rating, avatar, pnl, roi, aum, mdd, chart }) {
  return (
    <div className="flex flex-col grow shrink justify-center self-stretch px-4 py-5 my-auto  bg-white rounded-md shadow-sm min-h-[200px] min-w-[240px]">
      <div className="flex flex-col w-full">
        <div className="flex gap-10 justify-between items-center w-full whitespace-nowrap">
          <div className="flex gap-2.5 items-start self-stretch my-auto h-[43px]">
            <Image loading="lazy" src={avatar} alt={`${name}'s avatar`} className="object-contain shrink-0 w-10 rounded-full aspect-square" />
            <div className="flex flex-col py-1 w-[85px]">
              <div className="text-base font-bold text-neutral-800">{name}</div>
              <div className="flex gap-1.5 items-center self-start mt-1.5 text-xs text-neutral-500">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/baa6c5e4a3143b4b57b60de913356ec4c87f6a0b4b09b832b07a65edb0feb4d5?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  alt=""
                  className="object-contain shrink-0 gap-0 self-stretch my-auto w-12 aspect-[2.67]"
                />
                <div className="self-stretch my-auto">{rating}</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center self-stretch my-auto text-sm font-bold text-center text-stone-950">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8960c60d1f98cb6d89deb33aca8dcd75deb84880490b180214a301e987b2d45?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.2] stroke-[1px] stroke-stone-950 w-[18px]"
            />
            <button className="gap-2 self-stretch p-3 my-auto bg-lime-500 rounded min-h-[38px] w-[76px]">Copy</button>
          </div>
        </div>
        <div className="flex gap-4 justify-between items-end mt-5 w-full">
          <div className="flex flex-col w-[207px]">
            <div className="flex gap-5 items-center w-full">
              <div className="flex flex-col self-stretch my-auto w-28">
                <div className="text-xs text-neutral-500">7D PnL</div>
                <div className="flex gap-1.5 justify-center items-center py-1.5 mt-1 w-full text-xl font-bold whitespace-nowrap rounded text-stone-950">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c69492dab47c2d7412310c5076ec2966b027098210811324db02b8c8a51e28d1?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square fill-lime-500"
                  />
                  <div className="self-stretch my-auto">{pnl.toFixed(2)}</div>
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto w-[79px]">
                <div className="text-xs text-neutral-500">7D ROI</div>
                <div className="flex gap-1.5 justify-center items-center mt-1.5 w-full text-xl font-bold whitespace-nowrap rounded text-stone-950">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c69492dab47c2d7412310c5076ec2966b027098210811324db02b8c8a51e28d1?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square fill-lime-500"
                  />
                  <div className="self-stretch my-auto">{roi}%</div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 mt-6 max-w-full w-[190px]">
              <div className="flex flex-col justify-center whitespace-nowrap rounded">
                <div className="text-xs text-neutral-500">AUM</div>
                <div className="mt-1.5 text-sm font-semibold text-neutral-800">₹{aum.toFixed(2)}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs text-stone-400">7D MDD</div>
                <div className="mt-1.5 text-sm font-semibold text-neutral-800">{mdd}%</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-xs text-center text-stone-400 w-[105px]">
            <img loading="lazy" src={chart} alt="7 day performance chart" className="object-contain self-center rounded-sm aspect-[1.86] w-[89px]" />
            <div className="mt-3.5">Last 7 day</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TraderCard;
