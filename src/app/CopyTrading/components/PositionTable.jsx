import React from 'react';

const PositionTable = ({ positions }) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center p-9 mt-3.5 w-full font-semibold leading-none bg-white rounded-lg shadow-sm max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center items-start max-w-full w-[1040px]">
        <div className="flex flex-col pb-5 max-w-full bg-white rounded-lg w-[1003px]">
          <div className="flex flex-wrap gap-5 justify-between px-5 py-2 w-full text-xs max-w-[1003px] text-neutral-500 max-md:pl-5 max-md:max-w-full">
            <div className="flex gap-10 max-md:max-w-full">
              <div>OrderID</div>
              <div>Time Data</div>
              <div>Instrument</div>
            </div>
            <div className="flex gap-10 self-start">
              <div>Qty</div>
              <div>Entry Price</div>
              <div>Current Price</div>
              <div>Running PnL</div>
            </div>
          </div>
          <div className="flex flex-col mt-7 w-full text-sm text-neutral-800 max-md:max-w-full">
            {positions.map((position, index) => (
              <div key={index} className="flex flex-wrap gap-10 justify-center items-center mt-4 w-full max-md:max-w-full">
                <div className="self-stretch my-auto">{position.orderId}</div>
                <div className="grow shrink self-stretch my-auto w-[132px]">{position.timeData}</div>
                <div className="self-stretch my-auto">{position.instrument}</div>
                <div className="self-stretch my-auto">{position.qty}</div>
                <div className="grow shrink self-stretch my-auto w-14">{position.entryPrice}</div>
                <div className="grow shrink self-stretch my-auto w-14">{position.currentPrice}</div>
                <div className="flex gap-2 items-center self-stretch my-auto font-bold whitespace-nowrap text-stone-950">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/40209b71424afc71e449ae6ea3baa182772584eb58a9bc74c6f0d7bfe0bbcf47?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square fill-lime-500" />
                  <div className="self-stretch my-auto">{position.runningPnL}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionTable;