"use client";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PortfolioList from "../components/PortfolioList";
import DashboardIcons from "../components/DashboardIcons";
import ListFilter from "../components/ListFilter";
import PortfolioTable from "../components/PortfolioTable";
import FavTable from "../components/FavTable";
import CopytraderCard from "../components/CopytraderCard";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation"; // Correct import for useRouter

import StartegyDescription from "../startegy-description/page";
import OnboardingPage from "../dashboard/page";
import { useSearchParams } from "next/navigation";

import { TourGuideClient } from "@sjmc11/tourguidejs";
import "@sjmc11/tourguidejs/src/scss/tour.scss"; // Import the SCSS file

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
          <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
            <Header />

            <div className="z-10 w-full max-md:max-w-full main-body">
              <div className="flex gap-5 max-md:flex-col">
                <Sidebar />

                <main className="flex flex-col main-container">
                  <DashboardIcons />
                  {/* <button onClick={startTour}>Start Tour</button> */}

                  <div className="z-10 shrink-0 self-center mt-8 max-w-full" />
                  <div className="flex flex-col items-center mt-0 w-full max-md:max-w-full">
                    <div className="flex flex-col max-w-full w-[1120px]">
                      <nav className="flex flex-wrap gap-10 items-start px-0.5 w-full rounded-none max-w-[1120px] max-md:max-w-full">
                        <div className="flex flex-col flex-1 mt-2 text-sm font-semibold text-center">
                          <div className="flex gap-8 items-center">
                            <span
                              className={`self-stretch my-auto ${
                                fav == false
                                  ? "text-stone-950"
                                  : "text-stone-400"
                              }  w-[75px]`}
                            >
                              <button onClick={() => setFav(false)}>
                                Portfolios
                              </button>
                              {fav == false && (
                                <div className="flex shrink-0 ml-6 h-0.5 bg-lime-500 rounded-sm w-[30px] max-md:ml-2.5" />
                              )}
                            </span>

                            <span
                              className={`self-stretch my-auto ${
                                fav == true
                                  ? "text-stone-950"
                                  : "text-stone-400"
                              }  w-[97px] `}
                            >
                              <button onClick={() => setFav(true)}>
                                My Favorites
                              </button>
                              {fav == true && (
                                <div className="flex shrink-0 ml-6 h-0.5 bg-lime-500 rounded-sm w-[30px] max-md:ml-2.5" />
                              )}
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-end flex-1 gap-6 items-start text-xs text-right text-stone-400">
                          <form className="flex gap-1 justify-center items-center">
                            <label htmlFor="searchInput" className="sr-only">
                              Search traders or strategies
                            </label>
                            <input
                              type="search"
                              id="searchInput"
                              placeholder="Search traders|strategies.."
                              className="self-stretch my-auto rounded-none w-[150px] outline-none"
                            />
                            <button type="submit" aria-label="Search">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc6607116dc7ad6bf48aeb42012737f62d0ecd9d87ddaa484b46d1c5d08c6760?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                                alt=""
                                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                              />
                            </button>
                          </form>

                          <button onClick={handleToggleListing}>
                            {(toggleList && (
                              <svg
                                width="23"
                                height="24"
                                viewBox="0 0 23 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.87331 2.25H2.95782C2.47737 2.25 2.08789 2.66973 2.08789 3.1875V9.5625C2.08789 10.0803 2.47737 10.5 2.95782 10.5H8.87331C9.35375 10.5 9.74323 10.0803 9.74323 9.5625V3.1875C9.74323 2.66973 9.35375 2.25 8.87331 2.25Z"
                                  stroke="#090721"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M19.3128 2.25H13.3973C12.9168 2.25 12.5273 2.66973 12.5273 3.1875V9.5625C12.5273 10.0803 12.9168 10.5 13.3973 10.5H19.3128C19.7932 10.5 20.1827 10.0803 20.1827 9.5625V3.1875C20.1827 2.66973 19.7932 2.25 19.3128 2.25Z"
                                  stroke="#090721"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M8.87331 13.5H2.95782C2.47737 13.5 2.08789 13.9197 2.08789 14.4375V20.8125C2.08789 21.3303 2.47737 21.75 2.95782 21.75H8.87331C9.35375 21.75 9.74323 21.3303 9.74323 20.8125V14.4375C9.74323 13.9197 9.35375 13.5 8.87331 13.5Z"
                                  stroke="#090721"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M19.3128 13.5H13.3973C12.9168 13.5 12.5273 13.9197 12.5273 14.4375V20.8125C12.5273 21.3303 12.9168 21.75 13.3973 21.75H19.3128C19.7932 21.75 20.1827 21.3303 20.1827 20.8125V14.4375C20.1827 13.9197 19.7932 13.5 19.3128 13.5Z"
                                  stroke="#090721"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            )) || (
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab4c0238bc26e17161b431e88dc8d5042544a7c477a432ac1c348087106c9bad?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                                alt="User profile"
                                className="object-contain shrink-0 w-6 aspect-square"
                              />
                            )}
                          </button>
                        </div>
                      </nav>
                      <div className="flex flex-wrap gap-5 items-center mt-4 max-w-full text-sm font-semibold text-center h-[30px] text-stone-400 w-[522px]">
                        <button className="gap-2.5 self-stretch px-4 py-2 my-auto whitespace-nowrap rounded bg-lime-500 bg-opacity-40 text-stone-950">
                          PnL
                        </button>
                        <button className="self-stretch my-auto">ROI</button>
                        <button className="self-stretch my-auto">MDD</button>
                        <button className="self-stretch my-auto">AUM</button>
                        <button className="self-stretch my-auto">
                          Copy Traders
                        </button>
                        <button className="self-stretch my-auto">
                          Copy Traders PnL
                        </button>
                      </div>
                    </div>
                  </div>
                  {(toggleList && (
                    <section className="flex flex-col ">
                      <ListFilter />
                      <PortfolioTable />
                    </section>
                  )) || (
                    <div>
                      &nbsp;
                      {(fav && <CopytraderCard />) || <PortfolioList />}
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
