import React from "react";

const StrategieFilter = ({ fav, setFav, handleToggleListing }) => {
  return (
    <div className="flex flex-col items-center mt-0 w-full max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1120px]">
        <nav className="flex flex-wrap gap-10 items-start px-0.5 w-full rounded-none max-w-[1120px] max-md:max-w-full">
          <div className="flex flex-col flex-1 mt-2 text-sm font-semibold text-center">
            <div className="flex gap-8 items-center">
              <span
                className={`self-stretch my-auto ${
                  fav === false ? "text-stone-950" : "text-stone-400"
                }  w-[75px]`}
              >
                <button onClick={() => setFav(false)}>Portfolios</button>
                {fav === false && (
                  <div className="flex shrink-0 ml-6 h-0.5 bg-lime-500 rounded-sm w-[30px] max-md:ml-2.5" />
                )}
              </span>

              <span
                className={`self-stretch my-auto ${
                  fav === true ? "text-stone-950" : "text-stone-400"
                }  w-[97px]`}
              >
                <button onClick={() => setFav(true)}>My Favorites</button>
                {fav === true && (
                  <div className="flex shrink-0 ml-6 h-0.5 bg-lime-500 rounded-sm w-[30px] max-md:ml-2.5" />
                )}
              </span>
            </div>
          </div>

          <div className="flex justify-end flex-1 gap-6 items-start text-xs text-right text-stone-400">
          <div className="w-full max-w-md">
  <div className="relative">
    <input
      className="w-full py-2 pl-10 pr-4 text-sm border border-neutral-700 rounded-lg  focus:outline-none focus:ring-2 focus:ring-lime-500"
      placeholder="Search..."
      type="text"
    />
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <i className="icon-search-normal-1 text-lg"></i>
    </div>
  </div>
</div>

          </div>


          
        </nav>

        <div className="flex flex-wrap gap-5 items-center mt-4 max-w-full text-sm font-semibold text-center h-[30px] text-stone-400 w-[522px]">
          <button className="gap-2.5 self-stretch px-4 py-2 my-auto whitespace-nowrap rounded bg-lime-500 bg-opacity-40 text-stone-950">
            PnL
          </button>
          <button className="self-stretch my-auto">ROI</button>
          <button className="self-stretch my-auto">MDD</button>
          <button className="self-stretch my-auto">AUM</button>
          <button className="self-stretch my-auto">Copy Traders</button>
          <button className="self-stretch my-auto">Copy Traders PnL</button>
        </div>
      </div>
    </div>
  );
};

export default StrategieFilter;
