'use client'
import React, { useState } from "react";
import Image from 'next/image';

import ConfirmationModal from './ConfirmationModal'; // Adjust the import path if needed
import heartFullIcon from "../../../assets/heart-full.svg"; 
import Arrowup from "../../../assets/Arrowup-bg.svg"; 
import Arrowdown from "../../../assets/Arrow-d-red.svg"; 





function StrategyItem({
  index,
  name,
  rating,
  avatar,
  profit,
  profitPercentage,
  roi,
  amount,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState(null);
  const [successNotificationVisible, setSuccessNotificationVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [stoppedTime, setStoppedTime] = useState(null);

  const handlePauseCopyClick = () => {
    setActionType('pause');
    setIsModalOpen(true);
  };

  const handleStopCopyClick = () => {
    setActionType('stop');
    setIsModalOpen(true);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleModalProceed = () => {
    setIsModalOpen(false);
    setSuccessNotificationVisible(true);
    
    // Set stopped time
    if (actionType === 'stop') {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setStoppedTime(currentTime);
    }
    
    // Hide the success notification after a few seconds
    setTimeout(() => {
      setSuccessNotificationVisible(false);
    }, 2000);

    // Update state based on action type
    if (actionType === 'pause') {
      setPaused(true);
    } else if (actionType === 'stop') {
      setStopped(true);
    }
  };

  return (
    <div
      className={`relative flex flex-wrap gap-10 justify-around items-center px-3 py-4 mt-1 card transition-opacity duration-500 ${paused || stopped ? 'opacity-50' : ''}`}
    >
      {/* Paused or Stopped Label */}
      {paused && <div className="stop-label">
          Paused (06:51 PM)
        </div>
        }

      {stopped && (
        <div className="stop-label">
          Stoped {stoppedTime && `(${stoppedTime})`}
        </div>
      )}


<div className="flex w-full  items-center gap-10 st-top">
      <div className="w-full flex-wrap gap-10 justify-between items-center flex st-wrap">
      <div className="flex gap-3 items-start self-stretch my-auto whitespace-nowrap">
        <img
          loading="lazy"
          src={avatar}
          alt={`${name}'s avatar`}
          className="object-contain shrink-0 rounded-xl aspect-square w-[72px]"
        />
        <div className="flex flex-col w-[108px]">
          <div className="text-base font-bold text-stone-950">{name}</div>
          <div className="flex gap-1.5 items-center self-start mt-2 text-xs text-neutral-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f541c647e3f4cfe9b0e78e497862b107847de05efbb13b46e204710a72eeecc?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt=""
              className="object-contain shrink-0 gap-0 self-stretch my-auto w-12 aspect-[2.67]"
            />
            <div className="self-stretch my-auto">{rating}</div>
          </div>
        </div>
      </div>

      {/* Profit and Profit Percentage */}

      <div className="flex gap-20">
      <div className="flex gap-1.5 justify-center items-center self-stretch py-2 my-auto text-base font-bold whitespace-nowrap rounded text-stone-950">
        <Image
          loading="lazy"
          src={Arrowup}
          alt=""
          className="object-contain shrink-0 w-3.5 aspect-square fill-lime-500"
        />
        <div>{profit.toFixed(2)}</div>
      </div>

      <div className="flex gap-1.5 justify-center items-center self-stretch py-2 my-auto text-base font-bold whitespace-nowrap rounded text-stone-950">
        <Image
          loading="lazy"
          src={Arrowup}
          alt=""
          className="object-contain shrink-0 w-3.5 aspect-square fill-lime-500"
        />
        <div>+{profitPercentage}%</div>
      </div>

      </div>
      <div className="flex gap-20  justify-between">
      <div className="self-stretch py-2 my-auto text-sm font-semibold whitespace-nowrap rounded text-stone-950">
        {roi}%
      </div>
      <div className="gap-2 self-stretch p-2 my-auto text-sm font-semibold text-stone-950">
        ₹{amount.toFixed(2)}
      </div>
      </div>

      {/* Heart Icon */}
      <Image
        loading="lazy"
        src={heartFullIcon}
        alt="Heart icon"
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px] hidden-xs"
      />
      </div>
      <div>
    {/* Action Buttons */}
    <div className="flex gap-4 items-center self-stretch my-auto text-sm font-bold text-center min-w-[240px] stia">
        <button
          onClick={handlePauseCopyClick}
          className="gap-1 self-stretch px-2 py-3 my-auto rounded border border-solid border-neutral-800 min-h-[36px] text-neutral-800 w-[116px]"
        >
          Pause Copy
        </button>
        <button
          onClick={handleStopCopyClick}
          className="gap-1 self-stretch px-2 py-3 my-auto text-white bg-pink-700 rounded min-h-[36px] w-[116px]"
        >
          Stop Copy
        </button>
      </div>

      </div>

</div>
      

  
      {/* Confirmation Modal */}
      {isModalOpen && (
        <ConfirmationModal
          isOpen={isModalOpen}
          title={actionType === 'pause' ? "Pause Copy" : "Stop Copy"}
          message={actionType === 'pause'
            ? "Are you sure you want to pause copying this strategy?"
            : "Are you sure you want to stop copying this strategy?"}
          onCancel={handleModalCancel}
          onConfirm={handleModalProceed}
          confirmText="Confirm"
          confirmButtonClass="btn-danger"
        />
      )}

      {/* Success Notification */}
      {successNotificationVisible && (
        <div className="fixed bottom-4 right-4 flex items-center justify-center bg-black text-white p-4 rounded-md shadow-lg z-20">
          <p className="text-green-600 font-bold">
            {actionType === 'pause' ? "Paused Successfully!" : "Stopped Successfully!"}
          </p>
        </div>
      )}
    </div>
  );
}

export default StrategyItem;
