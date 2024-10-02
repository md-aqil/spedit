"use client";

import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
import PortfolioList from "../components/PortfolioList";
import DashboardIcons from "../components/DashboardIcons";
import ListFilter from "../components/ListFilter";
import PortfolioTable from "../components/PortfolioTable";
import FavTable from "../components/FavTable";
import CopytraderCard from "../components/CopytraderCard";
import StrategieCard from "../components/StrategieCard";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import userIcon from "../../../assets/user1.png";

import StrategyDescription from "../startegy-description/page";
import OnboardingPage from "../dashboard/page";

import { TourGuideClient } from "@sjmc11/tourguidejs";
import "@sjmc11/tourguidejs/src/scss/tour.scss"; // Import the SCSS file
import StrategieFilter from "../components/StrategieFilter";

import StrategiesFollowed from "../components/StrategiesFollowed";
import StrategyList from "../components/StrategyList";

import Image from "next/image";

import heartIcon from "../../../assets/heart.svg";
import heartFullIcon from "../../../assets/heart-full.svg";

export function LeaderBoard() {
  const [toggleList, setToggleList] = useState(false);
  const [showParameters, setShowParameters] = useState(false);

  const [isTour, setIstour] = useState(null);
  const [tourGuideClientValue, setTourGuideClientValue] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmTour, setShowConfirmTour] = useState(null);

  const [isLastTour, setIsLastTour] = useState(false);
  const [fav, setFav] = useState(false);
  const [viewType, setViewType] = useState("card"); // State to manage the view type

  const handleToggleListing = () => {
    setToggleList(!toggleList);
  };

  const handleFav = () => {
    setFav(true);
  };

  const clientRef = useRef(null);

  const copytraderData = [
    {
      name: "Karishma",
      followers: 502,
      actionType: "copy",
      pnl: "₹74,100.23",
      roi: "5.71%",
      aum: "₹74,100.23",
      mdd: "1.27%",
      id: 1,
      avatar: userIcon
    },
    {
      name: "Kareena",
      followers: 502,
      actionType: "stopPause",
      pnl: "₹74,100.23",
      roi: "5.71%",
      aum: "₹74,100.23",
      mdd: "1.27%",
      avatar: userIcon,
      id: 2,
    },
    {
      name: "Raj",
      followers: 600,
      actionType: "stopPause",
      pnl: "₹50,000.00",
      roi: "4.50%",
      aum: "₹50,000.00",
      mdd: "0.90%",
      id: 3,
      avatar: userIcon
    },
  ];

  useEffect(() => {
    if (!clientRef.current) {
      const client = new TourGuideClient({
        steps: [
          {
            content: "Here you can see the top-performing strategies and traders.",
            title: "Click on any strategy card for more details.",
            target: "#firstTour",
            order: 1,
            group: "basic",
          },
          {
            content: "Here you can see the top-performing strategies and traders.",
            title: "Click on COPY, if you want to copy ",
            target: "#copybuttonTour",
            order: 2,
            group: "basic2",
          },
          {
            content: "Set your copy parameters such as investment amount and stop loss for Copied Strategy",
            title: "Input your investment amount and stop loss for copied strategy",
            target: "#copyAmountSection",
            order: 3,
            group: "basic3",
          },
          {
            title: "Check order details and Confirm COPY order",
            content: "Confirm your order to start copying the selected strategy.",
            target: "#tourConfirmButton",
            order: 4,
            group: "basic4",
          },
          {
            title: "Check order details and Confirm COPY ",
            content: "Confirm your order to start copying the selected strategy.",
            target: "#showConfirmTourModal",
            order: 5,
            group: "basic5",
          },
          {
            title: "You can see your current live positions, portfolio curve, favourite lead traders, and trade history.",
            content: "Your copy order (Order No: 12345) was successful!",
            target: "#lastTourStepId",
            order: 5,
            group: "basic5",
          },
        ],

        dialog: {
          showNavigationButtons: true,
        },
      });

      clientRef.current = client; // Save the instance to the ref

      client.onFinish(() => {
        setIstour(false);
        setIsLastTour(false);
        console.log("Tour finished successfully.");
      });

      client.onBeforeStepChange((step) => {
        setIstour(true);
        console.log(step, clientRef.current, clientRef.current.activeStep, "checking current active step");
        if (clientRef.current.activeStep === 1) {
          handleCopyClick();
        }
        if (clientRef.current.activeStep === 3) {
          hadleConfirmTour();
        } else {
          setShowConfirmTour(false);
        }

        if (clientRef.current.activeStep === 4) {
          setIsLastTour(true);
          console.log("active last step");
        }

        setCurrentStep(currentStep + 1);
        console.log(currentStep, "checking");
      });

      setTourGuideClientValue(client);
    }

    startTour();
  }, []);

  console.log(currentStep, "checking current step");

  const startTour = () => {
    if (clientRef.current) {
      clientRef.current.start(); // Start the tour
      console.log("Tour started");
    } else {
      console.log("Tour client is not initialized");
    }
  };

  const handleCopyClick = () => {
    setShowParameters(true);
  };

  const hadleConfirmTour = () => {
    setShowConfirmTour(true);
  };

  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (index) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(index)
        ? prevFavorites.filter((favIndex) => favIndex !== index)
        : [...prevFavorites, index]
    );
  };

  // Function to switch view type
  const handleViewToggle = () => {
    setViewType((prev) => (prev === "card" ? "list" : "card"));
  };

  return (
    <>
      {(isLastTour && <OnboardingPage />) ||
        (isTour && <StrategyDescription handleCopyClick={handleCopyClick} showParameters={showParameters} showConfirmTour={showConfirmTour} />) || (
          <div className="flex flex-col pb-20 bg-stone-50">
            <div className="z-10 w-full max-md:max-w-full main-body">
              <div className="flex gap-5 w-full">
                <Sidebar />
                <main className="flex flex-col main-container">
                  <DashboardIcons />
                  {/* <button onClick={startTour}>Start Tour</button> */}
                  <StrategieFilter 
                    fav={fav} 
                    setFav={setFav} 
                    handleToggleListing={handleToggleListing} 
                    handleViewToggle={handleViewToggle} // Pass toggle function to filter
                    viewType={viewType} // Pass the current view type
                  />
                  
                 
                  {/* Render based on view type */}
                  {viewType === "card" ? (
                    <StrategieCard />
                  ) : (
                    <div>
                      {copytraderData.map((trader, index) => (
                        <StrategyList
                          key={trader.id}
                          index={index}
                          {...trader}
                          favorites={favorites}
                          handleFavoriteToggle={handleFavoriteToggle}
                          heartIcon={heartIcon}
                          heartFullIcon={heartFullIcon}
                        />
                      ))}
                    </div>
                  )}



                  
            {/* Favorites Section */}
            <div className="favorites-section mt-10 p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-semibold mb-2">My Favorites</h2>
              <div className="empty-state text-center text-gray-500">
                  <p>You don’t have any favorite strategies yet.</p>
                  <p className="mt-2">Start exploring the leaderboard!</p>
                </div>
            </div>
            
                </main>
              </div>

              
            </div>

          </div>
        )}
    </>
  );
}
