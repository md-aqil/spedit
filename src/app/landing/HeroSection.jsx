import React from "react";
import ToolGrid from "./ToolGrid";
import Header from "./Header";
import Link from "next/link";

const HeroSection = () => {
  const actionButtons = ["COPY", "BUILD", "CODE"];

  return (
    <section className="flex flex-col items-center w-[100%]">
      {/* <Header /> */}

      <h2 className="text-6xl font-semibold text-center text-white leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        <span className="text-6xl font-extrabold leading-[77px]">Elevate Wealth, </span>
        <br />
        <span className="text-6xl font-extrabold leading-[77px]">With Copy Trade</span>{" "}
      </h2>
      <p className="mt-8 text-lg  leading-6 text-center text-white w-[501px] max-md:max-w-full">
        <span>Trade on Bitcoin, Gold, Oil, Apple, Tesla, crude oil and 6,400+ other </span>
        <span className="text-lime-500">world-renowned markets.</span>
      </p>
      <div className="flex mt-10 gap-5">
        <Link href="/copy-trading" className="flex flex-col justify-center p-1 rounded-md border border-lime-500 border-solid">
          <span className="overflow-hidden z-10 px-12 py-3 mt-0 bg-lime-500 rounded-md max-md:px-5 font-semibold">Copy</span>
        </Link>
        <a href="" className="flex flex-col justify-center p-1 rounded-md border border-lime-500 border-solid">
          <div className="overflow-hidden z-10 px-12 py-3 mt-0 bg-lime-500 rounded-md max-md:px-5 font-semibold">Build</div>
        </a>
        <a href="" className="flex flex-col justify-center p-1 rounded-md border border-lime-500 border-solid">
          <div className="overflow-hidden z-10 px-12 py-3 mt-0 bg-lime-500 rounded-md max-md:px-5 font-semibold">Code</div>
        </a>
      </div>

      <ToolGrid />
    </section>
  );
};

export default HeroSection;
