"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import { AmountSection } from "./amount";
import { GraphSection } from "./graph";
import Link from "next/link";

export function PerformanceSection(props: any) {
  const query = useSearchParams();
  const isAmountSection = query.get("name") === "copyStepOpen";
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-white rounded-lg shadow-sm w-full px-10 PerformanceCard">
      <div className="flex flex-wrap gap-10 justify-between items-start w-full text-black border-b border-neutral-200 pb-4 per-header">
        {isAmountSection ? (
          <div className="flex items-center gap-2">
            <Link className="icon-arrow-square-left text-gray-600 text-xl cursor-pointer" href="?" shallow />
            <h2 className="text-xl font-bold leading-none">Copy Strategy</h2>
          </div>
        ) : (
          <h2 className="text-xl font-bold leading-none">Performance</h2>
        )}
        <div className="flex gap-2 items-center text-sm leading-none">
          <span className="self-stretch my-auto">7 days</span>
          <span className="icon-arrow-square-down text-gray-600 text-xl" />
        </div>
      </div>
      {isAmountSection ? <AmountSection /> : <GraphSection {...props} />}
    </div>
  );
}
