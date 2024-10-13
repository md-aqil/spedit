import React from 'react';

function BasketHeader() {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center w-full leading-none max-md:max-w-full bg-white shadow-sm px-4 py-4 rounded-lg mb-3 card">
      <div className="flex flex-col justify-center self-stretch my-auto">
        <div className="flex gap-2 items-center self-start text-xl font-bold text-black ">
        <i className='icon-bag max-md:!text-white'></i>
          <div className="flex gap-1 items-end self-stretch my-auto">
            <div className="gap-2 self-stretch">My Basket</div>
          </div>
        </div>
        <div className="flex flex-col mt-2 w-full">
          <div className="flex gap-2 items-center w-full">
            <div className="self-stretch my-auto text-xs text-neutral-500">Available Margin</div>
            <div className="self-stretch my-auto text-sm font-semibold text-black">Rs 170,720.00</div>
          </div>
          <div className="flex gap-2 items-center mt-2 w-full text-xs text-neutral-500">
            <div className="self-stretch my-auto">Broker Connected:</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/228f8a07609ae754cad8aadad1c9fb98567b297e0b29865d1f29b9f11c4ce235?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="Broker logo" className="object-contain shrink-0 self-stretch my-auto rounded aspect-[1.06] w-[18px]" />
          </div>
        </div>
      </div>
      <div className="flex gap-10 items-center self-stretch my-auto text-sm font-bold text-center  text-neutral-800 max-md:max-w-full">
        <button className="flex gap-2 justify-center items-center self-stretch px-3 py-1.5 my-auto rounded border border-solid border-neutral-800 min-h-[36px]">
          <span className='icon-add max-md:!text-white text-2xl'></span>
          <span>Add new Basket</span>
        </button>
      </div>
    </header>
  );
}

export default BasketHeader;