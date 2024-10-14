"use client";

import React, { useState } from "react";
import Link from "next/link";
import { StrategyCopyConfirmation } from "./confirmation";
import { useRouter, useSearchParams } from "next/navigation";

export const AmountSection = ({}) => {
  const query = useSearchParams();
  const router = useRouter();
  const isPopupVisible = query.get("confirmation") === "true";
  const [isFixedRatio, setIsFixedRatio] = useState(true);
  const [copyAmount, setCopyAmount] = useState("1");
  const [totalStopLoss, setTotalStopLoss] = useState("1");
  const [isAgreed, setIsAgreed] = useState(true);
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
      router.push(`?name=copyStepOpen&confirmation=true`);
    }
  };

  const handleClosePopup = () => {
    router.push(`?name=copyStepOpen`);
  };

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

      {isPopupVisible && <StrategyCopyConfirmation onClose={handleClosePopup} />}
    </main>
  );
};
