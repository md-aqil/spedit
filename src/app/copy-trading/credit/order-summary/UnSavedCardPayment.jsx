'use client'
import React, { useState } from "react";
import CardInput from "./CardInput";
import Image from "next/image";
import cards from "../../../../assets/cards.png";

export default function UnSavedCardPayment() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedCardType, setSelectedCardType] = useState("credit");

  return (
    <section className="flex flex-col mt-10 w-full  max-md:max-w-full">
      {/* Collapsible Header */}
      <header
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h2 className="flex gap-2 items-center text-xl font-bold text-neutral-800">
         
          <span>Pay by Unsaved Card</span>
        
        </h2>


        <span className={`text-neutral-500 text-2xl ${isCollapsed ? "icon-arrow-up-2" : "icon-arrow-down-1"}`}>
        </span>

      </header>

      {/* Collapsible Content */}
      {!isCollapsed && (
        <>
        <nav className="flex gap-5 mt-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="cardType"
              value="credit"
              checked={selectedCardType === "credit"}
              onChange={() => setSelectedCardType("credit")}
              className="form-radio text-lime-500"
            />
           
            <span className="text-neutral-800">Credit Card</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="cardType"
              value="debit"
              checked={selectedCardType === "debit"}
              onChange={() => setSelectedCardType("debit")}
              className="form-radio text-lime-500"
            />
           
            <span className="text-neutral-800">Debit Card</span>
          </label>
        </nav>
        <Image className="my-5" src={cards}/>
        <form className="flex flex-col mt-8 gap-4 w-full max-md:max-w-full">
          <div className="flex gap-x-12 justify-between">
          <div className="flex-col">
          <CardInput
          label="Name on Card"
          id="nameOnCard"
          placeholder="Eg: John Doe"
        />
        <CardInput
          label="Card Number"
          id="cardNumber"
          placeholder="Eg: 1234 5678 9012 3456"
          withIcon
        />
          </div>
          <div className="flex-col">
          <CardInput label="Expiry" id="cardExpiry" placeholder="Eg: 06/22" />
        <CardInput label="CVV" id="unsavedCvv" placeholder="Eg: 243" />

          </div>
       
          </div>
         
     
        {/* Buttons Container */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="px-6 py-2 bg-lime-500 rounded text-white font-bold min-w-[100px] hover:bg-lime-600 transition">
            Pay
          </button>
          <button className="px-6 py-2 border border-neutral-800 rounded text-neutral-800 font-bold min-w-[100px] hover:bg-neutral-100 transition">
            Cancel
          </button>
        </div>
      </form>
        </>
      )}

    
    </section>
  );
}
