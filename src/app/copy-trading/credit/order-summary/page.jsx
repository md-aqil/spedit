import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

import PaymentMethods from "./PaymentMethods";
import UnSavedCardPayment from "./UnSavedCardPayment";
import SubscriptionDetails from "./SubscriptionDetails";
import PayWithOptions from "./PayWithOptions";

export default function OrderSummary() {
  return (
    <div className="flex  flex-col pb-20 bg-[#F8FAF5]">
      {/* <Header /> */}

      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />

          <main className="flex flex-col main-container">
            <main className="flex flex-col mt-5">
              <h1 className="self-start text-2xl font-semibold text-black">
                Order summary
              </h1>

              <section className=" w-full mt-5">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full bg-white shadow-md rounded-lg px-10 pb-10">
                    <PaymentMethods />
                    <UnSavedCardPayment />
                    <div class="flex items-center justify-center my-4">
                      <div class="border-t border-neutral-300 w-full"></div>
                      <span class="mx-4 text-neutral-500 font-medium">OR</span>
                      <div class="border-t border-neutral-300 w-full"></div>
                    </div>
                    <PayWithOptions />
                  </div>
                  <SubscriptionDetails />
                </div>
              </section>
            </main>
          </main>
        </div>
      </div>
    </div>
  );
}
