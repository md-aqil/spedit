"use client";

import React, { useState } from "react";
import Link from "next/link";

const StartegyCopyParameters = () => {
  const [isFixedRatio, setIsFixedRatio] = useState(true);
  const [copyAmount, setCopyAmount] = useState("");
  const [totalStopLoss, setTotalStopLoss] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleToggle = (isRatio) => {
    setIsFixedRatio(isRatio);
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleAgreementChange = () => {
    setIsAgreed(!isAgreed);
  };

  const handleConfirm = () => {
    if (isAgreed && copyAmount && totalStopLoss) {
      setIsPopupVisible(true); // Show the popup
      console.log("Confirmed:", { copyAmount, totalStopLoss, isFixedRatio });
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // Hide the popup
  };

  const TabItem = ({ icon, text }) => (
    <div className="flex gap-2 justify-center items-center">
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <div className="self-stretch my-auto  whitespace-nowrap">{text}</div>
    </div>
  );

  const InfoItem = ({ label, value, className = "" }) => (
    <div className={`flex flex-col leading-none ${className}`}>
      <div className="text-xs text-neutral-500">{label}</div>
      <div className="mt-1 text-base  text-white">{value}</div>
    </div>
  );

  const tabItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b83a9e4cf7316342329cfdb588dbfda22a7e446a6751a6cc4179a566848c61f1?apiKey=b4d1b9e87b084579b1e2475047caf617&",
      text: "User Login",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/eef803a2cd17abf01f2bc1f8dc51e65a4a1ce4f7dc434125b4258e9f3c175ee5?apiKey=b4d1b9e87b084579b1e2475047caf617&",
      text: "Broker Connect",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/eef803a2cd17abf01f2bc1f8dc51e65a4a1ce4f7dc434125b4258e9f3c175ee5?apiKey=b4d1b9e87b084579b1e2475047caf617&",
      text: "Available Credits",
    },
  ];

  return (
    <main className="flex flex-col justify-center  bg-white rounded-lg shadow-sm">
      <section className="flex flex-col mt-16 w-full max-md:mt-10">
        {/* Tabs for Fixed Ratio and Fixed Amount */}
        <div className="flex gap-3 justify-center w-full text-sm font-semibold">
          <button
            className={`px-4 py-2 rounded-t-lg ${isFixedRatio ? "bg-lime-500 text-stone-950 border-b-2 border-lime-500" : "text-stone-400 border-b"}`}
            onClick={() => handleToggle(true)}
          >
            Fixed Ratio
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg ${!isFixedRatio ? "bg-lime-500 text-stone-950 border-b-2 border-lime-500" : "text-stone-400 border-b"}`}
            onClick={() => handleToggle(false)}
          >
            Fixed Amount
          </button>
        </div>

        {/* Input Sections */}
        <div id="copyAmountSection" className="flex px-10 gap-10 items-start mt-6 w-full">
          {/* Copy Amount Section */}
          <div className="flex flex-col w-[53%]">
            <label className="text-base font-bold opacity-80 text-stone-950">Copy Amount</label>
            <div className="flex items-center gap-2 mt-3 bg-stone-50 px-5 py-3.5 rounded-lg">
              <input
                type="text"
                className="flex-1 text-sm text-stone-950 bg-transparent border-none outline-none"
                placeholder="5,000.00"
                value={copyAmount}
                onChange={handleInputChange(setCopyAmount)}
              />
              <button className="bg-blue-500 text-white px-3 py-1 text-xs rounded">INR</button>
              <button className="bg-blue-500 text-white px-3 py-1 text-xs rounded">MAX</button>
            </div>
            <p className="mt-3 text-sm text-zinc-800">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate...</p>
          </div>

          {/* Total Stop Loss Section */}
          <div className="flex flex-col w-[50%]">
            <label className="text-base font-bold opacity-80 text-stone-950">Total Stop Loss</label>
            <div className="flex items-center gap-2 mt-3 bg-stone-50 px-5 py-3.5 rounded-lg">
              <input
                type="text"
                className="flex-1 text-sm text-stone-950 bg-transparent border-none outline-none"
                placeholder="0-95"
                value={totalStopLoss}
                onChange={handleInputChange(setTotalStopLoss)}
              />
              <span className="text-base font-bold text-blue-500">%</span>
            </div>
            <p className="mt-3 text-sm text-zinc-800">
              When the estimated margin balance of the copier reaches stop loss, a market order will be triggered to close all positions.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="flex flex-col items-center mt-16 w-full max-md:mt-10">
        <div className="flex gap-2 items-center py-2">
          <input type="checkbox" id="agreement" className="sr-only" checked={isAgreed} onChange={handleAgreementChange} />
          <label htmlFor="agreement" className="flex items-center cursor-pointer">
            <span className={`w-6 h-6 border-2 rounded-sm flex items-center justify-center ${isAgreed ? "bg-black border-black" : "border-gray-300"}`}>
              {isAgreed && (
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 20 20">
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              )}
            </span>
            <span className="ml-2">
              <span className="text-zinc-800">I agree to our </span>
              <a href="#" className="text-blue-500">
                User service Agreement
              </a>
            </span>
          </label>
        </div>

        <button
          id="tourConfirmButton"
          className={`px-7 py-5 rounded text-stone-950 min-h-[50px] w-[393px] ${
            isAgreed && copyAmount && totalStopLoss ? "bg-[#9BEC00] cursor-pointer" : "bg-gray-300 cursor-not-allowed"
          }`}
          onClick={handleConfirm}
          disabled={!isAgreed || !copyAmount || !totalStopLoss}
        >
          Confirm
        </button>
      </footer>

      {/* Full-Page Popup */}

      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <main className="flex overflow-hidden flex-col px-9 py-9 rounded-xl shadow-md bg-neutral-900  max-md:px-5">
            <nav className="flex flex-wrap gap-6 items-start pb-5 text-base font-bold leading-none text-white border-b border-solid border-b-neutral-800 max-md:max-w-full">
              {tabItems.map((item, index) => (
                <TabItem key={index} icon={item.icon} text={item.text} />
              ))}
            </nav>
            <section className="mt-7 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-start w-full max-md:mt-3.5">
                    <InfoItem label="Strategy Amount" value="50000 INR" />
                    <InfoItem label="Strategy" value="Karishma657" className="mt-7" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col leading-none text-right max-md:mt-4">
                    <InfoItem label="Stop Loss %" value="20" className=" ml-3 self-end" />
                    <InfoItem label="Credits Charge" value="10" className="mt-8 self-end" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-center mt-11 whitespace-nowrap max-md:mt-10">
                <Link
                  href="/copy-trading/dashboard/"
                  className="gap-1 self-stretch py-3.5 my-auto text-sm font-bold leading-none text-center rounded min-h-[42px] px-7 w-36 bg-lime-500 text-stone-950 max-md:px-5"
                >
                  Confirm
                </Link>
                <button
                  onClick={handleClosePopup}
                  className="gap-1 self-stretch py-3.5 my-auto text-sm font-bold leading-none text-center rounded min-h-[42px] px-3.5 w-[87px] border border-solid border-neutral-500 text-stone-300"
                >
                  Cancel
                </button>
              </div>
            </section>
          </main>
        </div>
      )}
    </main>
  );
};

export default StartegyCopyParameters;
