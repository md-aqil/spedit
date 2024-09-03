import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

import Onboarding from "../components/Onboarding";

function OnboardingPage() {
  return (
    <div
      style={{ marginTop: "-0.5rem" }}
      className="flex overflow-hidden flex-col pb-20 bg-stone-50"
    >
      <Header />

      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />

          <main
            style={{ width: "100%" }}
            className="flex flex-col main-container"
          >
            <MainContent />;
          </main>
        </div>
      </div>
    </div>
  );
}

export default OnboardingPage;
