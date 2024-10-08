
import React from "react";

export default function SubscriptionDetails() {
  const features = [
    "20,000+ of PNG & SVG graphics",
    "Access to 100 million stock images",
    "Upload custom icons and fonts",
    "Unlimited Sharing",
    "Upload graphics & video in up to 4k",
    "Unlimited Projects",
    "Instant Access to our design system",
    "Create teams to collaborate on designs",
  ];

  return (
    <aside className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
      <section className="flex flex-col px-6 pt-7 pb-14 w-full bg-white rounded-xl border border-solid border-stone-300 min-h-[489px] max-md:px-5 max-md:mt-6">
        <header className="flex flex-col w-full">
          <div className="flex flex-col w-full">
            <h2 className="text-base font-bold text-stone-950">Enterprise</h2>
            <p className="mt-2 text-xs text-neutral-500">
              Ideal for businesses who need personalized services and security
              for large teams.
            </p>
          </div>
          <div className="flex flex-col mt-3.5 w-full">
            <div className="flex gap-1 items-center w-full">
              <span className="self-stretch my-auto text-4xl font-semibold text-zinc-900">
                Rs.2500
              </span>
              <span className="self-stretch my-auto text-sm leading-none text-slate-600">
                / Month
              </span>
            </div>
            <button className="gap-1 self-stretch px-2 py-4 mt-4 w-full text-sm font-bold leading-none text-center rounded-sm border-solid border-[0.997px] border-neutral-800 min-h-[44px] text-neutral-800">
              Get Started Now
            </button>
          </div>
        </header>
        <ul className="flex flex-col mt-7 w-full">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-3 items-center mt-2 w-full">
               <i className="icon-tick-square"></i>
              <span className="flex-1 shrink self-stretch my-auto text-xs font-medium basis-0 text-neutral-800">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
