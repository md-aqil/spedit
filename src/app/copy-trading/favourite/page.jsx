import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CopytraderCard from "../components/CopytraderCard";
import DashboardIcons from "../components/DashboardIcons";
import FavTable from "../components/FavTable";

function LeaderBoard() {
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
      <Header />
      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />

          <main className="flex flex-col main-container">
            <DashboardIcons />

            <div className="z-10 shrink-0 self-center mt-8 max-w-full" />
            <div className="flex flex-col items-center mt-0 w-full max-md:max-w-full">
              <div className="flex flex-col max-w-full w-[1120px]">
                <nav className="flex flex-wrap gap-10 items-start px-0.5 w-full rounded-none max-w-[1120px] max-md:max-w-full">
                  <div className="flex flex-col flex-1 mt-2 text-sm font-semibold text-center">
                    <div className="flex gap-8 items-center">
                      <span className="self-stretch my-auto text-stone-950 w-[75px]">
                        Portfolios
                      </span>
                      <span className="self-stretch my-auto text-stone-400 w-[97px]">
                        My Favorites
                      </span>
                    </div>
                    <div className="flex shrink-0 ml-6 h-0.5 bg-lime-500 rounded-sm w-[30px] max-md:ml-2.5" />
                  </div>
                  <div className="flex justify-end flex-1 gap-6 items-start text-xs text-right text-stone-400">
                    <form className="flex gap-1 justify-center items-center">
                      <label htmlFor="searchInput" className="sr-only">
                        Search traders or strategies
                      </label>
                      <input
                        type="search"
                        id="searchInput"
                        placeholder="Search traders|strategies.."
                        className="self-stretch my-auto rounded-none w-[150px]"
                      />

                      <button type="submit" aria-label="Search">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc6607116dc7ad6bf48aeb42012737f62d0ecd9d87ddaa484b46d1c5d08c6760?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                          alt=""
                          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                        />
                      </button>
                    </form>

                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab4c0238bc26e17161b431e88dc8d5042544a7c477a432ac1c348087106c9bad?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                      alt="User profile"
                      className="object-contain shrink-0 w-6 aspect-square"
                    />
                  </div>
                </nav>
                <div className="flex flex-wrap gap-5 items-center mt-4 max-w-full text-sm font-semibold text-center h-[30px] text-stone-400 w-[522px]">
                  <button className="gap-2.5 self-stretch px-4 py-2 my-auto whitespace-nowrap rounded bg-lime-500 bg-opacity-40 text-stone-950">
                    PnL
                  </button>
                  <button className="self-stretch my-auto">ROId</button>
                  <button className="self-stretch my-auto">MDD</button>
                  <button className="self-stretch my-auto">AUM</button>
                  <button className="self-stretch my-auto">Copy Traders</button>
                  <button className="self-stretch my-auto">
                    Copy Traders PnL
                  </button>
                </div>
              </div>

              <CopytraderCard />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
