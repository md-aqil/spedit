import React from 'react';
import cogIcon from "../../../assets/cog.svg";
import Image from "next/image";

const BasketStep6 = () => {
  const baskets = [1, 2, 3, 4];

  return (
    <main className="flex overflow-hidden flex-col px-5  py-5 bg-white rounded-xl">
      {baskets.map((basketNumber) => (
        <section
          key={basketNumber}
          className="flex overflow-hidden flex-wrap gap-5 justify-between px-14 py-5 mt-1 w-full rounded-xl border border-solid bg-stone-50 border-stone-300 max-md:px-5 max-md:max-w-full"
        >
          <p className="my-auto text-base font-bold leading-none text-black">
            Basket {basketNumber}
          </p>
          <div className="flex gap-4 items-center">
            <button
              className="gap-1 self-stretch px-7 py-3 my-auto text-sm font-bold leading-none text-center bg-lime-500 rounded min-h-[36px] text-stone-950 max-md:px-5"
              aria-label={`Execute Basket ${basketNumber} Order`}
            >
              Execute Basket Order
            </button>
            <div
              className="flex gap-1 justify-center items-center self-stretch px-2 my-auto w-9 h-9 rounded border border-solid border-neutral-800 min-h-[36px]"
              tabIndex="0"
              role="button"
              aria-label={`Basket ${basketNumber} Info`}
            >
             <span className='icon-trash '></span>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default BasketStep6;