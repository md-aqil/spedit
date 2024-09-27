"use client"; // Ensure this file runs on the client side
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for App Router
import { TourGuideClient } from "@sjmc11/tourguidejs";
import "@sjmc11/tourguidejs/src/scss/tour.scss"; // Ensure styles are imported

const TargetPage = () => {
  const router = useRouter();
  const clientRef = useRef(null);
  useEffect(() => {
    const shouldStartTour = new URLSearchParams(window.location.search).get("startTour") === "true";
    // Initialize tour
    const options = {
      steps: [
        {
          content: "Welcome to the homepage.",
          title: "Home",
          target: "#home", // Ensure this element exists
          order: 1,
          group: "basic",
        },
        // Add other steps here
      ],
      dialog: {
        showNavigationButtons: true,
      },
    };

    if (!clientRef.current) {
      clientRef.current = new TourGuideClient(options);
    }

    if (shouldStartTour) {
      clientRef.current
        .start()
        .then(() => {
          console.log("Tour started.");
        })
        .catch((error) => {
          console.error("Error starting the tour:", error);
        });
    }
  }, [router.query]);

  return (
    <div>
      <h1 id="home">Home Section</h1>
    </div>
  );
};

export default TargetPage;
