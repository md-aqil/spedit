'use client'
import React, { useState } from 'react';

const BasketStep3 = () => {
  const [basketName, setBasketName] = useState('');
  const [instrumentName, setInstrumentName] = useState('Nifty50 JUL 24600 PE');
  const [lotQuantity, setLotQuantity] = useState(1);
  const [price, setPrice] = useState('');
  const [trigger, setTrigger] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [target, setTarget] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    // Handle save logic here
  };

  return (
    <main className="flex flex-col px-5 py-6 bg-white rounded-xl shadow-md ">
    
      <form onSubmit={handleSave} className="mt-6 p-6 bg-stone-50 border border-stone-300 rounded-xl">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <label htmlFor="basketName" className="text-base font-bold text-black">
              Name Basket
            </label>
            <input
              id="basketName"
              type="text"
              className="mt-2 p-2 bg-white border border-stone-300 rounded-md text-neutral-800"
              placeholder="Enter Basket Name"
              value={basketName}
              onChange={(e) => setBasketName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="instrumentName" className="text-base font-bold text-black">
              Instrument Name
            </label>
            <div className="flex gap-2 mt-2">
              <input
                id="instrumentName"
                type="text"
                className="flex-grow p-2 bg-white border border-stone-300 rounded-md text-neutral-800"
                value={instrumentName}
                onChange={(e) => setInstrumentName(e.target.value)}
              />
              <button type="button" className="px-4 py-2 bg-neutral-800 text-white whitespace-nowrap rounded hover:bg-neutral-900">
                Add Instrument
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Instrument Details Section */}
      <section className="mt-8 p-6 bg-white border border-stone-300 rounded-xl">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-black">Nifty50 JUL 24600 PE</h2>
            <p className="text-sm text-neutral-500">NFO - Rs. 53.46</p>
            <div className="flex items-center gap-2 px-3 py-2 bg-white border border-black rounded-md">
              <span className="text-xs font-semibold text-neutral-800">Overnight</span>
              <span className="text-xs text-neutral-500">NRML</span>
              <img src="http://b.io/ext_14-" alt="" className="w-3 h-3 object-contain" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-lime-500 text-black rounded-md border border-black hover:bg-lime-600">
                Buy
              </button>
            </div>
            <div className="flex items-center gap-2">
              <img src="http://b.io/ext_16-" alt="Tags Icon" className="w-4 h-4 object-contain" />
              <span className="text-sm font-semibold text-neutral-800">Tags</span>
            </div>
          </div>
        </div>

        {/* Order Controls Section */}
        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-neutral-800">Lot Qty</label>
            <input
              type="number"
              className="p-2 bg-stone-50 border border-stone-300 rounded-md text-neutral-800"
              value={lotQuantity}
              onChange={(e) => setLotQuantity(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-neutral-800">Price</label>
            <input
              type="text"
              className="p-2 bg-stone-50 border border-stone-300 rounded-md text-neutral-800"
              placeholder="00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-neutral-800">Trigger</label>
            <input
              type="text"
              className="p-2 bg-stone-50 border border-stone-300 rounded-md text-neutral-800"
              value={trigger}
              onChange={(e) => setTrigger(e.target.value)}
            />
          </div>
        </div>

        {/* Actions Section */}
        <div className="mt-8 flex gap-4 items-center">
          <button type="submit" className="px-6 py-2 bg-lime-500 text-black rounded-md hover:bg-lime-600">
            Save
          </button>
        </div>

        {/* Additional Controls */}
        <div className="mt-6 grid gap-4 grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="stopLoss" className="text-xs font-semibold text-neutral-800">StopLoss</label>
            <input
              id="stopLoss"
              type="text"
              className="p-2 bg-stone-50 border border-stone-300 rounded-md text-neutral-800"
              placeholder="%"
              value={stopLoss}
              onChange={(e) => setStopLoss(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="target" className="text-xs font-semibold text-neutral-800">Target</label>
            <input
              id="target"
              type="text"
              className="p-2 bg-stone-50 border border-stone-300 rounded-md text-neutral-800"
              placeholder="%"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-8 flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-neutral-500">Charges</span>
            <span className="text-sm font-semibold text-black">Rs 534,656</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-neutral-500">Margin</span>
            <span className="text-sm font-semibold text-black">Rs 53,461</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BasketStep3;
