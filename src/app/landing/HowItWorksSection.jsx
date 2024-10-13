import React from 'react';
import HowItWorksStep from './HowItWorksStep';

const howItWorksSteps = [
  {
    number: 1,
    title: "Step 1",
    description: "You don't have to leave for spreadsheets. You can do whatever you want inside Wope without exporting data."
  },
  {
    number: 2,
    title: "Step 2",
    description: "You don't have to leave for spreadsheets. You can do whatever you want inside Wope without exporting data."
  },
  {
    number: 3,
    title: "Step 3",
    description: "You don't have to leave for spreadsheets. You can do whatever you want inside Wope without exporting data."
  }
];

function HowItWorksSection() {
  return (
    <section>
      <h2 className="mt-32 text-5xl font-bold leading-none text-center text-white max-md:mt-10 max-md:max-w-full">
        How it works section
      </h2>
      <div className="mt-16 w-full max-w-[1226px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {howItWorksSteps.map((step, index) => (
            <HowItWorksStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;