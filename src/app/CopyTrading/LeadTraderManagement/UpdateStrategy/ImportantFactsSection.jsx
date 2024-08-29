/**
 * This code was generated by Builder.io.
 */
import React from "react";
import SectionHeader from "./SectionHeader";
import InputField from "./InputField";

function ImportantFactsSection() {
  const leftColumnFields = [
    { label: "Monthly Fees", placeholder: "Eg: 500000" },
    { label: "Strategy Type", placeholder: "Eg: Strategy Type" },
    { label: "Expected Trades", placeholder: "Eg: 150" },
    { label: "Profit margin (monthly)", placeholder: "Eg: 20%" },
  ];

  const rightColumnFields = [
    { label: "Capital Requirement", placeholder: "Eg: 500000" },
    { label: "Order Type", placeholder: "Eg: NRML Mkt" },
    { label: "Max Stop Loss", placeholder: "Eg: 5%" },
  ];

  return (
    <section className="flex overflow-hidden flex-col px-12 py-9 mt-3 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
      <SectionHeader
        title="Important Facts"
        description="Key detail points of your Strategy"
      />
      <div className="flex flex-wrap gap-10 mt-12 text-base text-neutral-800 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1">
          {leftColumnFields.map((field, index) => (
            <InputField
              key={index}
              label={field.label}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <div className="flex flex-col flex-1 self-start">
          {rightColumnFields.map((field, index) => (
            <InputField
              key={index}
              label={field.label}
              placeholder={field.placeholder}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImportantFactsSection;
