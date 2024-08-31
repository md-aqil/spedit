
import React from "react";
import Sidebar from '../components/Sidebar';
import Header from "../components/Header";
import PortfolioList from "../components/PortfolioList";
import DashboardIcons from "../components/DashboardIcons";
import ListFilter from "../components/ListFilter";
import LivePositionsList from "../components/LivePositionsList";

import PositionCard from '../components/PositionCard';



const positionsData = [
  {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47
  },
  {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47
  }, {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47
  }, {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47
  }, {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47
  }, {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47
  }, {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47
  },
  {
    name: "Karishma",
    rating: 502,
    netCopyAmount: 10000.0,
    unrealizedPnl: -47.5654,
    roi: -0.47
  },
  // Repeat the above object 5 more times for a total of 6 items
];



function livepositions() {
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
      <Header />
     
      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
         
         
    <main className="flex flex-col main-container">
          <DashboardIcons />


          <section className="flex flex-col">
      <header className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[903px] max-md:max-w-full">
        <h1 className="self-stretch my-auto text-xl font-bold leading-none text-black">
          Live Positions
        </h1>
        <nav className="flex gap-4 items-center self-stretch my-auto">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c23c252a82c4b3d72b9d986f90a9d6d35d16df5a1db53d7e62e504e44dc1e49?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f151ebc35d7bd8eddf1be29bb1387b8f37d8aff094a1c55d3064d72f2b93be92?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab4c0238bc26e17161b431e88dc8d5042544a7c477a432ac1c348087106c9bad?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </nav>
      </header>
      <main className="mt-5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[82%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-wrap grow gap-2.5 items-center leading-none max-md:mt-5">
              {positionsData.map((position, index) => (
                <PositionCard key={index} {...position} />
              ))}
            </div>
          </div>
          <aside className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2bbe9623a72adfc5c1080486a39aa824ea8552849f0d8916a24793afc493620?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="Promotional banner" className="object-contain shrink-0 max-w-full rounded-xl shadow-sm aspect-[0.55] w-[199px] max-md:mt-5" />
          </aside>
        </div>
      </main>
    </section>

<LivePositionsList />


      
    
    </main>


   
        </div>
      </div>

    
     
    </div>
  );
}

export default livepositions;
