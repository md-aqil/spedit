"use client";

import React, { useState } from "react";
import Image from "next/image";
import userIcon from "../../../assets/user1.png";
import JoinedUsers from "../../../assets/JoinedUsers.png";
import { useRouter } from "next/navigation";
import { relative } from "path";

function PositionCard({ name, rating, netCopyAmount, unrealizedPnl, roi }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();

  const handleStopClick = (event) => {
    event.stopPropagation();
    setIsPopupVisible(true);
  };

  const handleConfirmStop = () => {
    setIsPopupVisible(false);
    setIsStopped(true);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
  };

  const handleRedirect = () => {
    router.push("/copy-trading/startegy-description");
  };

  return (
    <>
      {/* Card with reduced opacity when stopped */}
      <article
        onClick={handleRedirect}
        className={`relative flex cursor-pointer flex-col grow shrink self-stretch px-5 py-6 my-auto bg-white rounded-lg border border-solid border-stone-300 transition-opacity max-w-[388px] min-w-[300px] duration-300 ${
          isStopped ? "opacity-50" : "opacity-100"
        }`}
      >
        {/* Paused Label */}
        {isStopped && (
          <div className="stop-label">
            Paused
            <br /> (12 hrs ago)
          </div>
        )}

        <header className="flex gap-10 justify-between items-center max-w-full whitespace-nowrap">
          <div className="flex flex-col items-start self-stretch my-auto">
            <div className="flex gap-2.5 items-start h-[43px]">
              <Image
                loading="lazy"
                src={userIcon}
                alt={`${name}'s avatar`}
                className="object-contain shrink-0 w-10 rounded-full aspect-square"
              />
              <div className="flex flex-col py-1">
                <h2 className="text-base font-bold text-neutral-800">{name}</h2>
                <div className="flex gap-1.5 items-center self-start mt-1.5 text-xs text-neutral-500">
                  <Image
                    loading="lazy"
                    src={JoinedUsers}
                    alt="Rating"
                    className="object-contain shrink-0 gap-0 self-stretch my-auto w-12 aspect-[2.67]"
                  />
                  <span className="self-stretch my-auto">{rating}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden self-stretch px-2 py-1 my-auto text-xs text-center text-lime-500 rounded bg-neutral-800">
            Mock
          </div>
        </header>
        <div className="flex gap-6 justify-between mt-6">
          <div className="flex flex-col">
            <span className="text-xs text-neutral-500">Net Copy Amount</span>
            <span className="mt-2 text-xl font-bold text-black">
              {netCopyAmount.toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-neutral-500">Unrealized Pnl</span>
            <div
              className={`flex gap-2 items-center mt-2 text-base font-bold whitespace-nowrap`}
            >
              <span
                className={`text-white text-sm p-0.4 rounded-sm ${
                  unrealizedPnl >= 0
                    ? "bg-green-500 icon-arrow-up-3"
                    : "bg-[#CD0070] icon-arrow-down"
                }`}
              ></span>
              <span className="self-stretch my-auto">
                {unrealizedPnl.toFixed(4)}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end whitespace-nowrap">
            <span className="text-xs text-neutral-500">ROI</span>
            <div className={`flex gap-2 items-center mt-2 text-base font-bold`}>
              <span
                className={`text-white text-sm p-0.4 rounded-sm ${
                  roi >= 0
                    ? "bg-green-500 icon-arrow-up-3"
                    : "bg-[#CD0070] icon-arrow-down"
                }`}
              ></span>
              <span className="self-stretch my-auto">{roi.toFixed(2)}%</span>
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-between mt-6 w-full text-sm font-bold text-center">
          <button
            className="btn btn-danger-outline"
            onClick={(event) => handleStopClick(event)}
          >
            Stop Mock Copy
          </button>
          <a href="/copy-trading/startegy-description?name=copyStepOpen">
            <button className="btn w-[132px]">
              Copy
            </button>
          </a>{" "}
        </div>
      </article>

      {/* Stop Copy Confirmation Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-white mb-4">Wait</h2>
            <p className="text-white mb-4">
              Pausing the copy will stop copying new trades from the lead
              trader's strategy. Existing trades will continue but must be
              managed manually.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsPopupVisible(false)}
                className="px-4 py-2 border border-gray-300 text-white rounded hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmStop}
                className="px-4 py-2 bg-[#9BEC00] text-black rounded hover:bg-lime-600"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg">
          Successfully stopped copying!
        </div>
      )}
    </>
  );
}

export default PositionCard;
