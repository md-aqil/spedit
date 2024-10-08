import React, { useState } from "react";
import Image from 'next/image';
import userIcon from "../../../assets/user1.png"; 
import JoinedUsers from "../../../assets/JoinedUsers.png"; 
import ConfirmationModal from './ConfirmationModal'; // Adjust the import path as needed

const LivePositionsList = ({ positions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState(null);
  const [successNotificationVisible, setSuccessNotificationVisible] = useState(false);
  const [pausedPositions, setPausedPositions] = useState(new Set()); // Track paused positions
  const [stoppedPositions, setStoppedPositions] = useState(new Set()); // Track stopped positions
  const [selectedIndex, setSelectedIndex] = useState(null); // Track which position index is selected

  const handleStopCopyClick = (index) => {
    setActionType('stop');
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handlePauseCopyClick = (index) => {
    setActionType('pause');
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleModalProceed = () => {
    setIsModalOpen(false);
    setSuccessNotificationVisible(true);

    // Hide the success notification after a few seconds
    setTimeout(() => {
      setSuccessNotificationVisible(false);
    }, 2000); // Adjust time as needed

    // Update states based on action type
    if (actionType === 'pause') {
      setPausedPositions((prev) => new Set(prev).add(selectedIndex)); // Add to paused positions
    } else if (actionType === 'stop') {
      setStoppedPositions((prev) => new Set(prev).add(selectedIndex)); // Add to stopped positions
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {positions.map((position, index) => (

<div key={index} className={`flex items-center relative justify-between gap-4 p-4 bg-white rounded-lg shadow-md transition-opacity duration-500 `}>

          <div className="flex items-center gap-4">
            <Image
              loading="lazy"
              src={userIcon}
              alt={`${position.name}'s profile`}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <div className="text-lg font-semibold text-neutral-800">{position.name}</div>
              <div className="flex items-center gap-1 text-xs text-neutral-500">
                <Image
                  loading="lazy"
                  src={JoinedUsers}
                  alt="Rating"
                />
                <span>{position.rating}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs text-neutral-500">Net Copy Amount</div>
            <div className="text-lg font-semibold text-neutral-800">
              {position.netCopyAmount.toLocaleString()}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs text-neutral-500">Unrealized Pnl</div>
            <div className={`text-lg font-semibold ${position.unrealizedPnl >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {position.unrealizedPnl.toFixed(2)}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs text-neutral-500">ROI</div>
            <div className={`text-lg font-semibold ${position.roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {Math.abs(position.roi).toFixed(2)}%
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleStopCopyClick(index)}
              className="btn btn-danger"
            >
              Stop Copy
            </button>
            <button
              onClick={() => handlePauseCopyClick(index)}
              className="btn btn-outline"
            >
              Pause Copy
            </button>
          </div>

          {/* Paused or Stopped Label */}
          {pausedPositions.has(index) && (
            
         
              <div class="mt-4  text-black stop-label">Paused (01:57 AM)</div>
          
          )}
          {stoppedPositions.has(index) && (
           
           <div class="mt-4  text-black stop-label">Stopped (01:57 AM)</div>
          
          )}
        </div>
      ))}

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
          <p className="text-green-600 font-bold">{actionType === 'pause' ? "Paused Successfully!" : "Stopped Successfully!"}</p>
        </div>
      )}
    </div>
  );
};

export default LivePositionsList;
