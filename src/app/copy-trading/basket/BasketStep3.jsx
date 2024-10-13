'use client'
import React, { useState } from 'react';
import Instrument from "./Instrument";

const BasketStep3 = () => {
  const [basketName, setBasketName] = useState('');
  const [instrumentName, setInstrumentName] = useState('Nifty50 JUL 24600 PE');
  const [lotQuantity, setLotQuantity] = useState(1);
  const [price, setPrice] = useState('');
  const [trigger, setTrigger] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [target, setTarget] = useState('');
  const [showInstrument, setShowInstrument] = useState(false); // New state for controlling instrument visibility

  const handleSave = (e) => {
    e.preventDefault();
    // Handle save logic here
  };

  const handleAddInstrument = () => {
    setShowInstrument(true); // Show the Instrument component when button is clicked
  };

  return (
    <main className="flex flex-col px-5 py-5 bg-white rounded-xl shadow-md card ">
    
      <form onSubmit={handleSave} className="p-6 bg-stone-50 border border-stone-300 rounded-xl card max-md:p-0 max-md:border-none">
        <div className="flex justify-between max-md:flex-col max-md:gap-5">
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
              Search and Add Instrument
            </label>
            <div className="flex gap-4 mt-2 max-md:flex-col">
              <input
                id="instrumentName"
                type="text"
                className="flex-grow p-2 bg-white border border-stone-300 rounded-md text-neutral-800"
                value={instrumentName}
                onChange={(e) => setInstrumentName(e.target.value)}
              />
              <button
                type="button"
                onClick={handleAddInstrument}
                className="px-4 py-2 bg-neutral-800 text-white whitespace-nowrap rounded hover:bg-neutral-900 transition"
              >
                Add Instrument
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Instrument Details Section */}
      {showInstrument && (
        <div className={`transition-opacity duration-500 ease-in-out mt-4 ${showInstrument ? 'opacity-100' : 'opacity-0'}`}>
          <Instrument
            instrumentName="BANKNIFTY 24th JUL 52400 CE"
            price="53.46"
            lotSize="25"
            charges="534,656"
            margin="53,461"
          />
        </div>
      )}
    </main>
  );
};

export default BasketStep3;
