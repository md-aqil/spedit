import React, { useState } from 'react';
import Image from 'next/image';
import userIcon from "../../../assets/user1.png"; 
import JoinedUsers from "../../../assets/JoinedUsers.png"; 

function PositionCard({ name, rating, netCopyAmount, unrealizedPnl, roi }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessNotificationVisible, setIsSuccessNotificationVisible] = useState(false);
  const [isCardDimmed, setIsCardDimmed] = useState(false);

  const handleStopCopyClick = () => {
    setIsModalOpen(true);
  };

  const handlePauseCopyClick = () => {
    setIsModalOpen(true);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleModalProceed = () => {
    setIsModalOpen(false);
    setIsSuccessNotificationVisible(true);
    setIsCardDimmed(true);

    // Hide the success notification after a few seconds
    setTimeout(() => {
      setIsSuccessNotificationVisible(false);
    }, 2000); // Adjust time as needed
  };

  return (
    <article
      className={`relative flex flex-col p-5 bg-white rounded-lg shadow-sm min-w-[310px] justify-between transition-opacity duration-500 ${isCardDimmed ? 'opacity-70' : ''}`}
    >
      <div className={`relative ${isCardDimmed ? '' : ''}`}>
        <div className="flex gap-4 items-start">
          <Image
            loading="lazy"
            src={userIcon}
            alt={`${name}'s profile picture`}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-neutral-800">{name}</h2>
            <div className="flex items-center gap-2 mt-1.5 text-xs text-neutral-500">
              <Image
                loading="lazy"
                src={JoinedUsers}
                alt="Rating"
                className="w-8"
              />
              <span>{rating}</span>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <span className="text-xs text-neutral-500">Net Copy Amount</span>
            <span className="text-xl font-bold text-black">{netCopyAmount.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex gap-6 mt-4">
          <div className="flex flex-col flex-1">
            <span className="text-xs text-neutral-500">Unrealized Pnl</span>
            <div className={`flex items-center gap-2 mt-2 font-bold`}>
              <span className={`text-white text-sm p-0.4 rounded-sm ${unrealizedPnl >= 0 ? 'bg-green-500 icon-arrow-up-3' : 'bg-[#CD0070] icon-arrow-down'}`}></span>
              <span>{unrealizedPnl.toFixed(4)}</span>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-xs text-neutral-500">ROI</span>
            <div className={`flex items-center gap-2 mt-2 font-bold`}>
              <span className={`text-white text-sm p-0.4 rounded-sm ${roi >= 0 ? 'bg-green-500 icon-arrow-up-3' : 'bg-[#CD0070] icon-arrow-down'}`}></span>
              <span>{roi.toFixed(2)}%</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <button
            onClick={handleStopCopyClick}
            className="flex-1 py-3 px-4 text-white bg-pink-700 rounded-md border border-pink-700 hover:bg-pink-800 transition-colors"
          >
            Stop Copy
          </button>
          <button
            onClick={handlePauseCopyClick}
            className="flex-1 py-3 px-4 bg-white border border-stone-950 text-stone-950 rounded-md hover:bg-stone-100 transition-colors"
          >
            Pause Copy
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-10">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-white mb-4">Wait</h2>
            <p className="text-white mb-4">
              Pausing the copy will stop copying new trades from the lead trader's strategy. Existing trades will continue but must be managed manually.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleModalCancel}
                className="px-4 py-2 border border-gray-300 text-white rounded hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleModalProceed}
                className="px-4 py-2 bg-[#9BEC00] text-black rounded hover:bg-lime-600"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {isSuccessNotificationVisible && (
        <div className="fixed bottom-4 right-4 flex items-center justify-center bg-black text-white p-4 rounded-md shadow-lg z-20">
          <p className="text-green-600 font-bold">Paused Successfully!</p>
        </div>
      )}

      {/* Paused Label */}
      {isCardDimmed && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80">
          <span className="text-lg font-bold text-gray-700">Paused (12hrs ago)</span>
        </div>
      )}
    </article>
  );
}

export default PositionCard;
