"use client";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PortfolioList from "../components/PortfolioList";
import DashboardIcons from "../components/DashboardIcons";
import ListFilter from "../components/ListFilter";
import PortfolioTable from "../components/PortfolioTable";
import FavTable from "../components/FavTable";
import CopytraderCard from "../components/CopytraderCard";
import StrategieCard from "../components/StrategieCard";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation"; 

import StartegyDescription from "../startegy-description/page";
import OnboardingPage from "../dashboard/page";
import { useSearchParams } from "next/navigation";

import { TourGuideClient } from "@sjmc11/tourguidejs";
import "@sjmc11/tourguidejs/src/scss/tour.scss"; // Import the SCSS file
import StrategieFilter from "../components/StrategieFilter";

function LeaderBoard() {
  const [toggleList, setToggleList] = useState(false);
  const [showParameters, setShowParameters] = useState(false);

  const [isTour, setIstour] = useState(null);
  const [tourGuideClientValue, setTourGuideClientValue] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmTour, setShowConfirmTour] = useState(null);

  const [isLastTour, setIsLastTour] = useState(false);
  const [fav, setFav] = useState(false);

  const handleToggleListing = () => {
    setToggleList(!toggleList);
  };
  const handleFav = () => {
    setFav(true);
  };

  const clientRef = useRef(null);
  // Use a ref to hold the client instance
  // const currentPath = new URL(window.location.href).search;

  useEffect(() => {
    if (!clientRef.current) {
      const client = new TourGuideClient({
        steps: [
          {
            content:
              "Here you can see the top-performing strategies and traders.",
            title: "Click on any strategy card for more details.",
            target: "#firstTour",
            order: 1,
            group: "basic",
          },
          {
            content:
              "Here you can see the top-performing strategies and traders.",
            title: "Click on COPY, if you want to copy ",
            target: "#copybuttonTour",
            order: 2,
            group: "basic2",
          },
          {
            content:
              "Set your copy parameters such as investment amount and stop loss for Copied Strategy",
            title:
              "Input your investment amount and stop loss for copied strategy",
            target: "#copyAmountSection",
            order: 3,
            group: "basic3",
          },
          {
            title: "Check order details and Confirm COPY order",
            content:
              "Confirm your order to start copying the selected strategy.",

            target: "#tourConfirmButton",
            order: 4,
            group: "basic4",
          },
          {
            title: "Check order details and Confirm COPY ",
            content:
              "Confirm your order to start copying the selected strategy.",
            target: "#showConfirmTourModal",
            order: 5,
            group: "basic5",
          },
          {
            title:
              "You can see your current live positions, portfolio curve, favourite lead traders, and trade history.",
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

      // Navigate to the next step

      client.onFinish(() => {
        setIstour(false);
        setIsLastTour(false);
        console.log("Tour finished successfully.");
      });

      // Manually call the function on an interval or similar if needed
      client.onBeforeStepChange((step) => {
        setIstour(true);
        console.log(
          step,
          clientRef.current,
          clientRef.current.activeStep,
          "checking current active spten"
        );
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
        // clientRef.current.getCurrentStep();

        setCurrentStep(currentStep + 1);
        console.log(currentStep, "checking");

        // setIstour(true);
      });

      // client.onBeforeStepChange(() => {
      //   setIstour(true);
      // });

      // Ensure that the client is available when needed
      setTourGuideClientValue(client);
    }

    startTour();
  }, []);

  console.log(currentStep, "checking current step");

  const startTour = () => {
    if (clientRef.current) {
      // setIstour(true);
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
  return (
    <>
      {(isLastTour && <OnboardingPage />) ||
        (isTour && (
          <StartegyDescription
            handleCopyClick={handleCopyClick}
            showParameters={showParameters}
            showConfirmTour={showConfirmTour}
          />
        )) || (
<<<<<<< HEAD
          <div className="flex flex-col pb-20 bg-stone-50">
            <Header />
=======
          <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
            {/* <Header /> */}
>>>>>>> e9ba8641e13d4b3dda2f0af8f8b0bf75cfc819e9

            <div className="z-10 w-full max-md:max-w-full main-body">
              <div className="flex gap-5 w-full">
                <Sidebar />

                <main className="flex flex-col main-container">
                  <DashboardIcons />
                  {/* <button onClick={startTour}>Start Tour</button> */}
                  <StrategieFilter fav={fav} setFav={setFav} handleToggleListing={handleToggleListing} />

                  {(toggleList && (
                    <section className="flex flex-col ">
                      <ListFilter />
                      <PortfolioTable />
                    </section>
                  )) || (
                    <div>
                      &nbsp;
                      {(fav && "fav item") || <StrategieCard />}
                    </div>
                  )}
                </main>
              </div>
            </div>
          </div>
        )}
    </>
  );
}

export default LeaderBoard;
