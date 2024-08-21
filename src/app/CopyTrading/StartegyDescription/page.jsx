import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from "../components/Header";
import TraderCard2 from '../components/TraderCard2';
import PerformanceCard from '../components/PerformanceCard';
import PositionTable from '../components/PositionTable';
import DashboardIcons from "../components/DashboardIcons";



const StartegyDescription = () => {
  const traderData = {
    traderId: '16473i',
    name: 'Tanya',
    rating: '502',
    daysTrading: '195',
    currentCopiers: '950',
    allTimeCopiers: '1950',
    mockCopiers: '195',
    leadingMarginBalance: '1428496.89 INR',
    aum: '12245434.90 INR',
    minInvestmentReqd: '40000 INR',
    risk: 'Moderate',
    copierPnL: '28496.89 INR',
    roiPercent: '4.52'
  };

  const performanceData = {
    mdd: '1.25%',
    winRate: '57.000%',
    profitablePositions: '122',
    totalPositions: '2014',
    roi: '5.71%',
    pnl: '94,23.5'
  };

  const positionsData = [
    { orderId: '1233467i', timeData: '12/12/2023 11:25:32', instrument: 'BankNifty 24 JUL26400PE', qty: '50', entryPrice: '700.70', currentPrice: '700.70', runningPnL: '19,423.5' },
    { orderId: '1233467i', timeData: '1/12/2021 9:20:20', instrument: 'BankNifty 24 JUL23400PE', qty: '05', entryPrice: '300.70', currentPrice: '300.70', runningPnL: '19,423.5' },
    { orderId: '1233467i', timeData: '12/12/2023 11:25:32', instrument: 'BankNifty 24 JUL26400PE', qty: '50', entryPrice: '700.70', currentPrice: '700.70', runningPnL: '19,423.5' },
    { orderId: '1233467i', timeData: '1/20/2021 10:39:30', instrument: 'BankNifty 24 JUL22400PE', qty: '25', entryPrice: '600.70', currentPrice: '600.70', runningPnL: '19,423.5' },
    { orderId: '1233467i', timeData: '1/20/202110:39:30', instrument: 'BankNifty 24 JUL22400PE', qty: '25', entryPrice: '600.70', currentPrice: '600.70', runningPnL: '19,423.5' },
    { orderId: '1233467i', timeData: '3/9/202110:20:20', instrument: 'BankNifty 24 JUL23400PE', qty: '15', entryPrice: '400.70', currentPrice: '400.70', runningPnL: '19,423.5' },
    { orderId: '1233467i', timeData: '3/9/202110:20:20', instrument: 'BankNifty 24 JUL23400PE', qty: '15', entryPrice: '400.70', currentPrice: '400.70', runningPnL: '19,423.5' },
    { orderId: '1233467i', timeData: '1/12/20219:20:20', instrument: 'BankNifty 24 JUL23400PE', qty: '05', entryPrice: '300.70', currentPrice: '300.70', runningPnL: '19,423.5' }
  ];

  return (

    <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
      <Header />
      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
         
       
    <div className="flex flex-col main-container px-5 py-5">
          <DashboardIcons />

      
      <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">

        <TraderCard2 {...traderData} />


        <PerformanceCard {...performanceData} />
       
      </div>
      <div className="flex flex-col mt-16 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
        <nav className="flex overflow-hidden flex-col pt-3 w-full bg-white rounded-lg shadow-sm max-md:max-w-full">
          <ul className="flex gap-3 items-center self-start pb-2 pl-6 text-xs leading-none text-neutral-500 max-md:pl-5 max-md:max-w-full">
            <li className="self-stretch px-4 py-3 my-auto font-bold whitespace-nowrap text-neutral-800">Positions</li>
            <li className="gap-2.5 self-stretch px-4 py-3 my-auto">Position History</li>
            <li className="overflow-hidden gap-2.5 self-stretch px-4 py-3 my-auto whitespace-nowrap">Copiers</li>
            <li className="overflow-hidden gap-2.5 self-stretch px-4 py-3 my-auto">Mock Copiers</li>
          </ul>
          <div className="flex flex-col items-start px-14 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex shrink-0 w-6 h-1 bg-lime-500 rounded" />
          </div>
        </nav>
        <PositionTable positions={positionsData} />
      </div>
    </div>
        </div>
      </div>

    
     
    </div>



  );
};

export default StartegyDescription;