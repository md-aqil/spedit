"use client";

import React, { useEffect } from "react";
import { TourGuideClient } from "@sjmc11/tourguidejs";

const TourComponent = () => {
  useEffect(() => {
    // Initialize the TourGuideClient with options
    const tourGuide = new TourGuideClient({
      steps: [
        {
          target: "#step1",
          content: "This is the first step.",
          dialog: {
            showNext: true, // Enable the "Next" button
            showPrevious: false, // Disable the "Previous" button on the first step
            buttonText: {
              next: "Next", // Text for the "Next" button
            },
          },
        },
        {
          target: "#step2",
          content: "This is the second step.",
          dialog: {
            showNext: true,
            showPrevious: true, // Enable the "Previous" button on this step
            buttonText: {
              previous: "Previous",
              next: "Next",
            },
          },
        },
        {
          target: "#step3",
          content: "This is the final step.",
          dialog: {
            showNext: false, // Disable the "Next" button on the last step
            showPrevious: true,
            buttonText: {
              previous: "Previous",
              end: "Finish", // Text for the "End" button
            },
          },
        },
      ],
    });

    // Start the tour
    tourGuide.start();

    return () => {
      // End the tour when the component unmounts
      if (tourGuide && typeof tourGuide.end === "function") {
        tourGuide.end();
      }
    };
  }, []);

  return (
    <div>
      {/* Content to guide through */}
      <div id="step1" className="p-4 bg-blue-500 text-white rounded">
        Step 1: Introduction
      </div>
      <div id="step2" className="p-4 bg-green-500 text-white rounded mt-4">
        Step 2: Features
      </div>
      <div id="step3" className="p-4 bg-purple-500 text-white rounded mt-4">
        Step 3: Conclusion
      </div>
    </div>
  );
};

export default TourComponent;
