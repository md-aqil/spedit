"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import chart from "../../../assets/chart.svg";
import heartIcon from "../../../assets/heart.svg";
import heartFullIcon from "../../../assets/heart-full.svg";
import userIcon from "../../../assets/user1.png";
import JoinedUsers from "../../../assets/JoinedUsers.png";
import Link from "next/link";
import { useTour } from "../tour/provider";

const StrategyCard = () => {
  const [favorites, setFavorites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardsStatus, setCardsStatus] = useState({});
  const tour = useTour();
  useEffect(() => {
    tour.start();
  }, []);
  const router = useRouter();

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
    setFavorites((prev) => (prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]));
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
        [selectedCard]: `${actionType === "stop" ? "Stopped" : "Paused"} (${timestamp})`,
      }));
    }
  };

  const handleRedirect = () => {
    router.push("/copy-trading/strategy-description");
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
              Pausing the copy will stop copying new trades from the lead trader's strategy. Existing trades will continue but must be managed manually.
            </p>
            <div className="flex justify-end gap-2">
              <button onClick={handleModalCancel} className="px-4 py-2 border border-gray-300 text-white rounded hover:bg-gray-700">
                Cancel
              </button>

              <button onClick={handleModalProceed} className="px-4 py-2 bg-[#9BEC00] text-black rounded hover:bg-lime-600">
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Card List */}
      <div style={{ cursor: "pointer" }} onClick={handleRedirect}>
        <div className="grid-container relative">
          {copytraderData.map((trader) => (
            <div
              key={trader.id}
              id={`${trader.name === "Karishma" && "firstTour"}`}
              className={`col-span-4 relative grow w-full shrink justify-center px-4 py-5 w-72 bg-white card rounded-md shadow-sm  transition-opacity ${
                cardsStatus[trader.id] ? "" : ""
              }`}
              onClick={() => handleCardClick(trader.id)}
            >
              <div className={`flex flex-col w-full ${cardsStatus[trader.id] ? "opacity-50" : "opacity-100"}`}>
                <div className="flex gap-10 justify-between items-center w-full whitespace-nowrap">
                  <div className="flex gap-2.5 items-start my-auto h-[43px]">
                    <Image src={userIcon} alt={`${trader.name}'s profile picture`} width={40} height={40} className="rounded-full" />
                    <div className="flex flex-col py-1">
                      <div className="text-base font-bold text-neutral-800">{trader.name}</div>
                      <div className="flex gap-1.5 items-center mt-1.5 text-xs text-neutral-500">
                        <Image src={JoinedUsers} alt="Followers icon" width={48} height={18} />
                        <span>{trader.followers}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      style={{ position: "relative" }}
                      className="relative focus:outline-none w-6"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents redirect on click
                        handleFavoriteToggle(trader.id);
                      }}
                    >
                      <Image
                        src={favorites.includes(trader.id) ? heartFullIcon : heartIcon}
                        alt="Heart icon"
                        width={24}
                        height={24}
                        className={`transition-transform duration-200 ${favorites.includes(trader.id) ? "scale-125" : "heart-empty"}`}
                      />
                    </button>
                    {trader.actionType === "copy" ? (
                      <button
                        className="btn"
                        onClick={(e) => e.stopPropagation()} // Prevents redirect on click
                      >
                        <Link href="/copy-trading/strategy-description?name=copyStepOpen">Copy</Link>
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          className="btn btn-danger"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevents redirect on click
                            handleStopPauseClick("stop", trader.id);
                          }}
                        >
                          Stop
                        </button>
                        <button
                          className="border btn btn-outline border-neutral-800 rounded px-3 py-2"
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
                        <div className="text-sm font-semibold">{trader.aum}</div>
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500">7D MDD</div>
                        <div className="text-sm font-semibold">{trader.mdd}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end w-[150px] ml-5">
                    <Image src={chart} alt={`Performance chart for last ${trader.period}`} />
                  </div>
                </div>
              </div>
              {/* Status update after Stop/Pause */}
              {cardsStatus[trader.id] && <div className="mt-4  text-black stop-label">{cardsStatus[trader.id]}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrategyCard;
