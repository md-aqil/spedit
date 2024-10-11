import * as React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
const PlanCard = ({ title, description, price, priceInterval, isHighlighted, features }) => {
  return (


    <article className={`flex flex-col self-stretch px-6 py-5 card border border-solid border-stone-300 my-auto ${isHighlighted ? '!bg-neutral-800 !py-12 isHighlighted-plan' : 'bg-white'} rounded-xl ${isHighlighted ? 'shadow-lg' : ''} min-h-[${isHighlighted ? '100%' : '100%'}px] min-w-[240px] w-[300px] max-md:w-full`}>
      <div className="flex flex-col w-full">
        <header className="flex flex-col w-full">
          <h3 className={`text-base font-bold ${isHighlighted ? 'text-white' : 'text-stone-950'}`}>{title}</h3>
          <p className={`mt-2 text-xs ${isHighlighted ? 'text-gray-50' : 'text-neutral-500'}`}>{description}</p>
        </header>
        <div className="flex flex-col mt-3.5 w-full">
          <div className="flex gap-1 items-center w-full">
            <span className={`self-stretch my-auto text-${isHighlighted ? '4xl' : '5xl'} font-semibold ${isHighlighted ? 'text-white' : 'text-zinc-900'}`}>{price}</span>
            <span className={`self-stretch my-auto text-sm leading-none ${isHighlighted ? 'text-gray-50' : 'text-slate-600'}`}>/ {priceInterval}</span>
          </div>

          <Link href="./order-summary" className={`gap-1 self-stretch px-2 py-4 mt-4 w-full text-sm font-bold leading-none text-center ${isHighlighted ? 'bg-lime-500 rounded-sm min-h-[44px]' : 'border-solid border-[0.997px] border-neutral-800 min-h-[44px]'} ${isHighlighted ? 'text-stone-950' : 'text-neutral-800'}`}>
            Get Started Now
          </Link>

        </div>
      </div>



      <ul className="flex flex-col mt-7 w-full space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-3 items-center w-full">

            <div className={`flex gap-1.5 items-center self-stretch p-1.5 my-auto rounded-md ${isHighlighted ? 'text-lime-500' : 'text-neutral-800'} `}>
              <i className="icon-tick-square"></i>
            </div>

            <span className={`flex-1 shrink self-stretch my-auto text-xs font-medium basis-0 ${isHighlighted ? 'text-white' : 'text-zinc-900'}`}>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PlanCard;