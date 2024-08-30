'use client';

import React, { useState } from 'react';
import BasketHeader from './BasketHeader';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Chart from './Chart';
import OrderBook from './OrderBook';
import TradeForm from './TradeForm';
import PendingOrders from './PendingOrders';
import EmptyBasket from './EmptyBasket';
import BasketStep2 from './BasketStep2';
import BasketStep3 from './BasketStep3';
import BasketStep4 from './BasketStep4';
import BasketStep5 from './BasketStep5';
import BasketStep6 from './BasketStep6';
import BasketStep7 from './BasketStep7';
import BaketTitleAction from './BaketTitleAction';

function MyComponent() {
  const [activeStep, setActiveStep] = useState(0); // State to track the current step

  const steps = [
    { title: 'Empty Basket', component: <EmptyBasket /> },
    { title: 'Basket Step 2', component: <BasketStep2 /> },
    { title: 'Basket Step 3', component: <BasketStep3 /> },
    { title: 'Basket Step 4', component: <BasketStep4 /> },
    { title: 'Basket Step 5', component: <BasketStep5 /> },
    { title: 'Basket Step 6', component: <BasketStep6 /> },
    { title: 'Basket Step 7', component: <BasketStep7 /> },
  ];

  return (
    <div className="flex flex-col overflow-hidden pb-20 bg-stone-50">
      <Header />

      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />

          <main className="flex flex-col main-container">
            <BasketHeader />
            <section className="mt-2 w-full max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
                  <Chart />
                </div>
                <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                  <OrderBook />
                  <TradeForm />
                </div>
              </div>
            </section>

            {/* Step Bar */}
            <div className="flex justify-center mt-4">
              <div className="flex gap-4">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full cursor-pointer ${
                      activeStep === index
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                    onClick={() => setActiveStep(index)} // Update the active step when clicked
                  >
                    {step.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Render Active Component */}
            <section className="mt-2 w-full max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[70%] max-md:w-full">
                  <BaketTitleAction />
                  {steps[activeStep].component} {/* Render component based on active step */}
                </div>
                <div className="flex flex-col w-[30%] max-md:w-full">
                  <PendingOrders />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
