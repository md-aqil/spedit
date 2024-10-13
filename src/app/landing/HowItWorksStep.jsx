import React from 'react';

function HowItWorksStep({ number, title, description }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start py-6 pr-20 pl-7 tracking-tight text-white rounded-md border border-lime-500 border-solid max-md:px-5 max-md:mt-10">
        <div className="px-5 text-4xl leading-none text-black whitespace-nowrap bg-lime-500 rounded-full h-[58px] w-[58px] max-md:pr-5 flex items-center">
          {number}
        </div>

        <div className="mt-8 text-lg leading-none">{title}</div>
        <div className="mt-2 font-light text-gray-400 tracking-normal leading-7">
          {description}
        </div>
      </div>
    </div>
  );
}

export default HowItWorksStep;