import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import chart from "../../../assets/chart.svg";
import heartIcon from "../../../assets/heart.svg";
import heartFullIcon from "../../../assets/heart-full.svg";
import userIcon from "../../../assets/user1.png";
import JoinedUsers from "../../../assets/JoinedUsers.png";

const StrategieCard = () => {
  //   const router = useRouter();
  const [favorites, setFavorites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardsStatus, setCardsStatus] = useState({});

  const copytraderData = [
    {
      name: "Karishma",
      followers: 502,
      actionType: "copy",
      pnl: "₹74,100.23",
      roi: "5.71%",
      aum: "₹74,100.23",
      mdd: "1.27%",
      period: "7 day",
      id: 1,
    },
    {
      name: "Kareena",
      followers: 502,
      actionType: "stopPause",
      pnl: "₹74,100.23",
      roi: "5.71%",
      aum: "₹74,100.23",
      mdd: "1.27%",
      period: "7 day",
      id: 2,
    },
    {
      name: "Kareena",
      followers: 502,
      actionType: "stopPause",
      pnl: "₹74,100.23",
      roi: "5.71%",
      aum: "₹74,100.23",
      mdd: "1.27%",
      period: "7 day",
      id: 3,
    },
  ];

  const handleFavoriteToggle = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const handleCardClick = (id) => {
    router.push("/copy-trading/strategy-description/" + id);
  };

  const handleStopPauseClick = (type, id) => {
    setShowModal(true);
    setActionType(type);
    setSelectedCard(id);
  };

  const handleModalProceed = () => {
    setShowModal(false);
    if (selectedCard) {
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCardsStatus((prev) => ({
        ...prev,
        [selectedCard]: `${
          actionType === "stop" ? "Stopped" : "Paused"
        } (${timestamp})`,
      }));
    }
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      {/* Popup Modal */}
      {showModal && (
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

      {/* Card List */}
      <a href="/copy-trading/startegy-description">
        <div className="flex flex-wrap gap-5 items-start">
          {copytraderData.map((trader) => (
            <div
              key={trader.id}
              id={`${trader.name === "Karishma" && "firstTour"}`}
              className={`flex  flex-col grow shrink justify-center px-4 py-5 w-72 bg-white rounded-md shadow-sm min-h-[200px] min-w-[240px] transition-opacity ${
                cardsStatus[trader.id] ? "opacity-50" : "opacity-100"
              }`}
              onClick={() => handleCardClick(trader.id)}
            >
              <div className="flex flex-col w-full">
                <div className="flex gap-10 justify-between items-center w-full whitespace-nowrap">
                  <div className="flex gap-2.5 items-start my-auto h-[43px]">
                    <Image
                      src={userIcon}
                      alt={`${trader.name}'s profile picture`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex flex-col py-1">
                      <div className="text-base font-bold text-neutral-800">
                        {trader.name}
                      </div>
                      <div className="flex gap-1.5 items-center mt-1.5 text-xs text-neutral-500">
                        <Image
                          src={JoinedUsers}
                          alt="Followers icon"
                          width={48}
                          height={18}
                        />
                        <span>{trader.followers}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      className="relative focus:outline-none"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents redirect on click
                        handleFavoriteToggle(trader.id);
                      }}
                    >
                      <Image
                        src={
                          favorites.includes(trader.id)
                            ? heartFullIcon
                            : heartIcon
                        }
                        alt="Heart icon"
                        width={24}
                        height={24}
                        className={`transition-transform duration-200 ${
                          favorites.includes(trader.id) ? "scale-125" : ""
                        }`}
                      />
                    </button>
                    {trader.actionType === "copy" ? (
                      <button
                        className="bg-lime-500 rounded px-3 py-2  text-black"
                        onClick={(e) => e.stopPropagation()} // Prevents redirect on click
                      >
                        <a href="/copy-trading/startegy-description?name=copyStepOpen">
                          Copy
                        </a>
                      </button>
                    ) : (
                      <div className="flex gap-1">
                        <button
                          className="bg-pink-700 text-white rounded px-3 py-2"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevents redirect on click
                            handleStopPauseClick("stop", trader.id);
                          }}
                        >
                          Stop
                        </button>
                        <button
                          className="border border-neutral-800 rounded px-3 py-2"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevents redirect on click
                            handleStopPauseClick("pause", trader.id);
                          }}
                        >
                          Pause
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Trader's performance data */}
                <div className="flex justify-between">
                  <div className="w-full">
                    <div className="flex justify-between mt-5">
                      <div>
                        <div className="text-xs text-neutral-500">7D PnL</div>
                        <div className="flex items-center gap-1 text-xl font-bold text-stone-950">
                          <span className="text-gray-900 text-sm p-0.5 rounded-sm bg-lime-500 icon-arrow-up-3 mr-1"></span>
                          {trader.pnl}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500">7D ROI</div>
                        <div className="flex items-center gap-1 text-xl font-bold text-stone-950">
                          <span className="text-gray-900 text-sm p-0.5 rounded-sm bg-lime-500 icon-arrow-up-3 mr-1"></span>
                          {trader.roi}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <div>
                        <div className="text-xs text-neutral-500">AUM</div>
                        <div className="text-sm font-semibold">
                          {trader.aum}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500">7D MDD</div>
                        <div className="text-sm font-semibold">
                          {trader.mdd}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end w-[150px] ml-5">
                    <Image
                      src={chart}
                      alt={`Performance chart for last ${trader.period}`}
                    />
                  </div>
                </div>

                {/* Status update after Stop/Pause */}
                {cardsStatus[trader.id] && (
                  <div className="mt-4 text-xs text-gray-500">
                    {cardsStatus[trader.id]}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </a>
    </div>
  );
};

export default StrategieCard;
