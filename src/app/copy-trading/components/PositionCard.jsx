import React, { useState } from 'react';
import Image from 'next/image';
import userIcon from "../../../assets/user1.png"; 
import JoinedUsers from "../../../assets/JoinedUsers.png"; 
import ConfirmationModal from './ConfirmationModal'; // Adjust the import path as needed

function PositionCard({ name, rating, netCopyAmount, unrealizedPnl, roi }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessNotificationVisible, setIsSuccessNotificationVisible] = useState(false);
  const [isCardDimmed, setIsCardDimmed] = useState(false);
  const [actionType, setActionType] = useState(null); // to track the action type (pause or stop)

  const handleStopCopyClick = () => {
    setActionType('stop');
    setIsModalOpen(true);
  };

  const handlePauseCopyClick = () => {
    setActionType('pause');
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
      className={`relative flex flex-col p-5 bg-white rounded-lg shadow-sm min-w-[310px] max-md:w-full justify-between card transition-opacity duration-500 ${isCardDimmed ? 'opacity-70' : ''}`}
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
            className="btn btn-danger"
          >
            Stop Copy
          </button>

          <button
            onClick={handlePauseCopyClick}
            className="btn btn-outline"
          >
            Pause Copy
          </button>
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
      {isSuccessNotificationVisible && (
        <div className="fixed bottom-4 right-4 flex items-center justify-center bg-black text-white p-4 rounded-md shadow-lg z-20">
          <p className="text-green-600 font-bold">{actionType === 'pause' ? "Paused Successfully!" : "Stopped Successfully!"}</p>
        </div>
      )}

      {/* Paused or Stopped Label */}
      {isCardDimmed && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80">
          <span className={`stop-label ${actionType === 'pause' ? 'text-black' : 'text-black'}`}>
            {actionType === 'pause' ? "Paused" : "Stopped"} (12hrs ago)
          </span>
        </div>
      )}
    </article>
  );
}

export default PositionCard;
