import React, { useState } from "react";
import Image from "next/image";
import JoinedUsers from "../../../assets/JoinedUsers.png";
import ConfirmationModal from "./ConfirmationModal"; // Import the modal component
import Link from "next/link";

function StrategyList({ index, name, followers, avatar, pnl, roi, aum, mdd, actionType, favorites, handleFavoriteToggle, heartIcon, heartFullIcon }) {
  const [showPauseModal, setShowPauseModal] = useState(false);
  const [showStopModal, setShowStopModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [timestamp, setTimestamp] = useState("");

  const handlePauseCopy = () => {
    setShowPauseModal(true);
  };

  const handleStopCopy = () => {
    setShowStopModal(true);
  };

  const closeModals = () => {
    setShowPauseModal(false);
    setShowStopModal(false);
  };

  const confirmPauseCopy = () => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setIsPaused(true);
    setTimestamp(currentTime);
    closeModals();
  };

  const confirmStopCopy = () => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setIsStopped(true);
    setTimestamp(currentTime);
    closeModals();
  };

  const handleCardClick = (id) => {
    router.push("/copy-trading/strategy-description/" + id);
  };

  return (
    <div className="relative">
      {/* Main Content Container */}
      <div
        id={`${index === 0 && "lastTourStepId"}`}
        className={`flex flex-wrap gap-10 justify-around items-center px-3 py-4 mt-1 w-full bg-white rounded-lg shadow-sm max-md:max-w-full ${
          isPaused || isStopped ? "opacity-50" : ""
        }`}
      >
        {/* Content */}
        <div className="flex gap-3 items-start self-stretch my-auto whitespace-nowrap">
          <Image loading="lazy" src={avatar} alt={`${name}'s avatar`} className="object-contain shrink-0 rounded-xl aspect-square w-[72px]" />
          <div className="flex flex-col w-[108px]">
            <div className="text-base font-bold text-stone-950 mb-2">{name}</div>
            <div className="text-xs text-neutral-500 flex items-center gap-1">
              <Image src={JoinedUsers} alt="followers" width={16} height={16} />
              {followers}
            </div>
          </div>
        </div>

        <div className="flex gap-1.5 justify-center items-end self-stretch py-2 my-auto text-base font-bold whitespace-nowrap rounded text-stone-950">
          <div>{pnl}</div>
        </div>
        <div className="self-stretch py-2 my-auto text-sm font-semibold whitespace-nowrap rounded text-stone-950">{roi}</div>
        <div className="self-stretch py-2 my-auto text-sm font-semibold whitespace-nowrap rounded text-stone-950">{aum}</div>
        <div className="self-stretch py-2 my-auto text-sm font-semibold whitespace-nowrap rounded text-stone-950">{mdd}</div>

        {/* Heart button for favorite functionality */}
        <button onClick={() => handleFavoriteToggle(index)} className="focus:outline-none">
          <Image
            src={favorites.includes(index) ? heartFullIcon : heartIcon}
            alt="Heart icon"
            width={24}
            height={24}
            className={`transition-transform duration-200 ${favorites.includes(index) ? "scale-125" : ""}`}
          />
        </button>

        {/* Conditional rendering based on actionType */}
        <div className="flex gap-4 items-center self-stretch my-auto text-sm font-bold text-center min-w-[240px]">
          {actionType === "copy" && !isPaused && !isStopped && (
            <button
              className="btn w-full"
              onClick={(e) => e.stopPropagation()} // Prevents redirect on click
            >
              <Link href="/copy-trading/strategy-description?name=copyStepOpen">Copy</Link>
            </button>
          )}
          {actionType === "stopPause" && (
            <>
              <button className="btn btn-outline" onClick={handlePauseCopy} disabled={isPaused || isStopped}>
                Pause Copy
              </button>
              <button className="btn-danger btn" onClick={handleStopCopy} disabled={isStopped}>
                Stop Copy
              </button>
            </>
          )}
        </div>
      </div>

      {/* Paused/Stopped label outside the opacity-50 container */}
      {(isPaused || isStopped) && <div className="absolute top-4 right-4 text-black stop-label">{isPaused ? `Paused (${timestamp})` : `Stopped (${timestamp})`}</div>}

      {/* Reusable Pause Copy Modal */}
      <ConfirmationModal
        isOpen={showPauseModal}
        title="Pause Copy"
        message="Are you sure you want to pause copying this strategy?"
        onCancel={closeModals}
        onConfirm={confirmPauseCopy}
        confirmText="Confirm"
        confirmButtonClass="btn-primary"
      />

      {/* Reusable Stop Copy Modal */}
      <ConfirmationModal
        isOpen={showStopModal}
        title="Stop Copy"
        message="Are you sure you want to stop copying this strategy?"
        onCancel={closeModals}
        onConfirm={confirmStopCopy}
        confirmText="Confirm"
        confirmButtonClass="btn-danger"
      />
    </div>
  );
}

export default StrategyList;
