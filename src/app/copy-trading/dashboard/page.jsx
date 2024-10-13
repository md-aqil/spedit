import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

import Onboarding from "../components/Onboarding";

function OnboardingPage() {
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
      {/* <Header /> */}

      <div className="z-10 w-full max-md:max-w-full main-body">
        <Sidebar />
        <MainContent />;
      </div>
    </div>
  );
}

export default OnboardingPage;
