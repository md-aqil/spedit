import React from 'react';
import Image from 'next/image';
import heartIcon from '../../../assets/heart.svg';
import heartFullIcon from '../../../assets/heart-full.svg';

const CardActions = ({
  id,
  favorites,
  actionType,
  handleFavoriteToggle,
  handleStopPauseClick,
  handleCardClick,
}) => {
  return (
    <div className="flex items-center gap-3">
      <button
        style={{ position: 'relative', zIndex: '1000' }}
        className="relative focus:outline-none w-6"
        onClick={(e) => {
          e.stopPropagation(); // Prevents redirect on click
          handleFavoriteToggle(id);
        }}
      >
        <Image
          src={favorites.includes(id) ? heartFullIcon : heartIcon}
          alt="Heart icon"
          width={24}
          height={24}
          className={`transition-transform duration-200 ${
            favorites.includes(id) ? 'scale-125' : ''
          }`}
        />
      </button>
      {actionType === 'copy' ? (
        <button className="btn" onClick={(e) => e.stopPropagation()}>
          Copy
        </button>
      ) : (
        <div className="flex gap-2">
          <button
            className="btn btn-danger"
            onClick={(e) => {
              e.stopPropagation(); // Prevents redirect on click
              handleStopPauseClick('stop', id);
            }}
          >
            Stop
          </button>
          <button
            className="border btn btn-outline border-neutral-800 rounded px-3 py-2"
            onClick={(e) => {
              e.stopPropagation(); // Prevents redirect on click
              handleStopPauseClick('pause', id);
            }}
          >
            Pause
          </button>
        </div>
      )}
    </div>
  );
};

export default CardActions;
