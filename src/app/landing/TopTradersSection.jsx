import React from 'react';
import TraderCard from './TraderCard';

const topTradersData = [
  {
    name: "Arash008787",
    username: "@Sam.Payne90",
    avatarSrc: "./avatar-f.png",
    returnPercentage: 15.75,
    riskLevel: 4,
    copiers: 143,
    lastWeekPerformance: 37.50
  },
  {
    name: "Arash008787",
    username: "@Sam.Payne90",
    avatarSrc: "./avatar-f.png",
    returnPercentage: 15.75,
    riskLevel: 4,
    copiers: 143,
    lastWeekPerformance: 37.50
  },
  {
    name: "Arash008787",
    username: "@Sam.Payne90",
    avatarSrc: "./avatar-f.png",
    returnPercentage: 15.75,
    riskLevel: 4,
    copiers: 143,
    lastWeekPerformance: 37.50
  }
];

function TopTradersSection() {
  return (
    <section>
      <h2 className="mt-12 text-5xl font-bold leading-none text-center text-white max-md:mt-10">
        Top Traders
      </h2>
      <div className="flex flex-wrap gap-5 items-center mt-16 bg-stone-900 max-md:mt-10 max-md:max-w-full">
        {topTradersData.map((trader, index) => (
          <TraderCard key={index} {...trader} />
        ))}
      </div>
      <div className="flex gap-3 justify-center items-center mt-8 bg-stone-900">
        <div className="flex shrink-0 self-stretch my-auto h-3 rounded-full bg-zinc-300 w-[11px]" />
        <div className="flex shrink-0 self-stretch my-auto w-3.5 h-3.5 bg-lime-500 rounded-full" />
        <div className="flex shrink-0 self-stretch my-auto h-3 rounded-full bg-zinc-300 w-[11px]" />
      </div>
    </section>
  );
}

export default TopTradersSection;