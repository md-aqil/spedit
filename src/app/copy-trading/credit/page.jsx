import * as React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CardComponent from "./CardComponent";

import PlanCard from "./PlanCard";

const MyComponent = () => {
  return (
    <div
      
      className="flex flex-col pb-20 bg-[#F8FAF5]"
    >
      {/* <Header /> */}

      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex gap-5 max-md:flex-col w-full">
          <Sidebar />

          <main className="flex flex-col main-container">
            <section className="flex flex-col py-10">
              <div className="flex flex-col justify-center  w-full bg-white rounded-xl shadow-md card">
                <header className="flex flex-wrap gap-10 justify-between items-center max-md:max-w-full">
                  <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[495px] max-md:max-w-full">
                    <h1 className="text-xl font-bold leading-none text-zinc-800 max-md:max-w-full">
                      My Credits
                    </h1>
                    <p className="mt-5 text-sm leading-5 text-zinc-600 max-md:max-w-full">
                      About Credit in publishing and graphic design, Lorem ipsum
                      is a placeholder text commonly used to demonstrate the
                      visual form of a document or a typeface without relying on
                      meaningful content. Lorem ipsum may be used as a
                      placeholder before the final copy is available.
                    </p>
                  </div>
                  <div className="flex flex-col self-stretch my-auto leading-none ">
                    <div className="flex gap-2 items-center self-end text-3xl font-bold whitespace-nowrap text-neutral-800 max-md:w-full ">
                     <i className="icon-coin-1 max-md:!text-lime-500"></i>
                      <span className="self-stretch my-auto max-md:!text-lime-500">360</span>
                    </div>
                    <time className="mt-2.5 text-xs text-center !text-pink-700">
                      Expire on: 09-04-2025
                    </time>
                  </div>
                </header>
              </div>

              <section className=" mt-5 max-w-full bg-white rounded-xl shadow-md card">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col">
                    <div className="flex flex-wrap gap-5 justify-center items-start min-h-[181px] max-md:mt-10 max-md:max-w-full">
                      <CardComponent
                        label="Credit Top-up"
                        value="360"
                        maxValue="400"
                        minDate="25 June, 2024"
                        maxDate="25 June, 2024"
                        progressColor="bg-lime-500"
                        textColor="text-stone-50"
                        backgroundColor="bg-neutral-800"
                      />
                      <CardComponent
                        label="Welcome Points"
                        value="0"
                        maxValue="400"
                        minDate="25 June, 2024"
                        maxDate="25 June, 2024"
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4526c210b4af6aaa93d488e2fc39b3016e89bb8b85400c3b1c23d7ecceb3c141?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                      />
                      <CardComponent
                        label="Referral Points"
                        value="0"
                        maxValue="400"
                        minDate="25 June, 2024"
                        maxDate="25 June, 2024"
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4526c210b4af6aaa93d488e2fc39b3016e89bb8b85400c3b1c23d7ecceb3c141?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                      />
                    </div>
                  </div>

                  <aside className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                      <h2 className="text-xl font-bold leading-5 text-zinc-800">
                        Credits Breakdown
                      </h2>
                      <p className="mt-6 text-sm leading-5 text-zinc-600">
                        About Credit in publishing and graphic design, Lorem
                        ipsum is a placeholder text commonly used to demonstrate
                        the visual f
                      </p>
                    </div>
                  </aside>
                </div>
              </section>

              <section className="cta-banner">
                <div className="flex flex-col justify-center w-full max-md:max-w-full">
                  <h2 className="flex flex-col items-center w-full max-md:max-w-full text-5xl max-md:text-2xl font-bold text-black">
                    <span className="text-zinc-900">
                      Powerful features <span className="font-light">for</span>
                    </span>

                    <span className="text-neutral-800">Powerful Traders</span>
                  </h2>
                  <p className="mt-3 text-base leading-none text-zinc-900">
                    Choose a plan that’s right for you
                  </p>
                </div>
              </section>

              <section className="flex flex-col justify-center p-10 mt-6 w-full bg-white rounded-xl shadow-md max-md:p-0 card">
                <div className="flex flex-wrap gap-4 justify-center items-center w-full  max-md:max-w-full">
                  <PlanCard
                    title="Freebie"
                    description="Ideal for individuals who need quick access to basic features."
                    price="Rs.0"
                    priceInterval="Month"
                    isHighlighted={false}
                    features={[
                      "20,000+ of PNG & SVG graphics",
                      "Access to 100 million stock images",
                      "Upload custom icons and fonts",
                      "Unlimited Sharing",
                      "Upload graphics & video in up to 4k",
                      "Unlimited Projects",
                      "Instant Access to our design system",
                      "Create teams to collaborate on designs",
                    ]}
                  />
                  <PlanCard
                    title="Professional"
                    description="Ideal for individuals who need advanced features and tools for client work."
                    price="Rs.4000"
                    priceInterval="Month"
                    isHighlighted={true}
                    features={[
                      "20,000+ of PNG & SVG graphics",
                      "Access to 100 million stock images",
                      "Upload custom icons and fonts",
                      "Unlimited Sharing",
                      "Upload graphics & video in up to 4k",
                      "Unlimited Projects",
                      "Instant Access to our design system",
                      "Create teams to collaborate on designs",
                    ]}
                  />
                  <PlanCard
                    title="Enterprise"
                    description="Ideal for businesses who need personalized services and security for large teams."
                    price="Rs.2500"
                    priceInterval="Month"
                    isHighlighted={false}
                    features={[
                      "20,000+ of PNG & SVG graphics",
                      "Access to 100 million stock images",
                      "Upload custom icons and fonts",
                      "Unlimited Sharing",
                      "Upload graphics & video in up to 4k",
                      "Unlimited Projects",
                      "Instant Access to our design system",
                      "Create teams to collaborate on designs",
                    ]}
                  />
                </div>
              </section>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
