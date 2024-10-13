import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import DashboardIcons from "../../components/DashboardIcons";

import SectionHeader from "./SectionHeader";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import EmbedVideoSection from "./EmbedVideoSection";
import ImportantFactsSection from "./ImportantFactsSection";

function UpdateStrategy() {
  return (
    <div className="flex flex-col pb-20 bg-stone-50">
      {/* <Header /> */}

      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex gap-5 max-md:flex-col w-full">
          <Sidebar />

          <main className="flex flex-col main-container">
            <DashboardIcons />

            <div className="flex w-full flex-col">
              <header className="flex flex-wrap gap-5 justify-between w-full font-bold leading-none">
                <h1 className="my-auto text-xl text-neutral-800 max-md:text-white">
                  Update Strategy
                </h1>
                <button className="gap-2 self-stretch px-8 py-4 text-sm text-center whitespace-nowrap bg-lime-500 rounded  text-stone-950">
                  Save
                </button>
              </header>
              <main className="w-full">
                <section className="flex  flex-col px-12 py-9 mt-3 w-full bg-white rounded-xl card">
                  <SectionHeader
                    title="Basic Information"
                    description="Strategy Description will be shown on your profile page"
                  />

                  <InputField
                    label="Strategy Title"
                    placeholder="Eg: Strategy Name"
                  />
                  <TextAreaField
                    label="Strategy Description"
                    placeholder="Small Description of your strategy"
                  />
                  <TextAreaField
                    label="Strategy Expectations"
                    placeholder="Describe in points what people should expect from your Strategy"
                  />
                </section>
                <EmbedVideoSection />
                <ImportantFactsSection />
              </main>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default UpdateStrategy;
