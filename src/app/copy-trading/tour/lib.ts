import { TourGuideClient } from "@sjmc11/tourguidejs";

export function initializeTourGuide() {
  const client = new TourGuideClient({
    hidePrev: true,
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
        title: "You can see your current live positions, portfolio curve, favorite lead traders, and trade history.",
        content: "Your copy order (Order No: 12345) was successful!",
        target: "#lastTourStepId",
        order: 5,
        group: "basic5",
      },
    ],
  });

  return client;
}
