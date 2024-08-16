import React from 'react';

function TestimonialCard({ imageSrc, logoSrc, quote, name, company }) {
  return (
    <>
      <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
        <img loading="lazy" src={imageSrc} alt={`${name} from ${company}`} className="object-contain shrink-0 max-w-full rounded-2xl aspect-square w-[229px] max-md:mt-9" />
      </div>
      <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10">
          <img loading="lazy" src={logoSrc} alt={`${company} logo`} className="object-contain max-w-full aspect-[6.8] w-[116px]" />
          <div className="self-stretch mt-8 text-lg font-medium leading-7 text-white">
            "{quote}"
          </div>
          <div className="flex gap-3 mt-5 text-base">
            <div className="grow font-semibold tracking-normal leading-7 text-white">
              {name}
            </div>
            <div className="my-auto font-medium text-slate-500">{company}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;