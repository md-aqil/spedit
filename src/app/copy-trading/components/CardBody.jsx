import React from 'react';

const CardBody = ({ pnl, roi, aum, mdd, period, cardsStatus, id }) => {
  return (
    <div className="flex justify-between">
      <div className="w-full">
        <div className="flex justify-between mt-5">
          <div>
            <div className="text-xs text-neutral-500">7D PnL</div>
            <div className="flex items-center gap-1 text-xl font-bold text-stone-950">
              <span className="text-gray-900 text-sm p-0.5 rounded-sm bg-lime-500 icon-arrow-up-3 mr-1"></span>
              {pnl}
            </div>
          </div>
          <div>
            <div className="text-xs text-neutral-500">7D ROI</div>
            <div className="flex items-center gap-1 text-xl font-bold text-stone-950">
              <span className="text-gray-900 text-sm p-0.5 rounded-sm bg-lime-500 icon-arrow-up-3 mr-1"></span>
              {roi}
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div>
            <div className="text-xs text-neutral-500">AUM</div>
            <div className="text-sm text-neutral-800">{aum}</div>
          </div>
          <div>
            <div className="text-xs text-neutral-500">MDD</div>
            <div className="text-sm text-neutral-800">{mdd}</div>
          </div>
          <div>
            <div className="text-xs text-neutral-500">Period</div>
            <div className="text-sm text-neutral-800">{period}</div>
          </div>
        </div>
        {cardsStatus[id] && (
          <div className="text-xs text-gray-500 mt-3 italic">
            {cardsStatus[id]}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardBody;
