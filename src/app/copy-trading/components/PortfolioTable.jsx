import React from 'react';
import TraderCardList from './TraderCardList';

const CopyTradingList = () => {
  
  const traders = [
    { name: 'Tanya', pnl: '74,100.23', roi: '+5.71%', mdd: '1.27%', aum: '₹74, 100.23', copiers: '502' },
    { name: 'Tanya', pnl: '74,100.23', roi: '+5.71%', mdd: '1.27%', aum: '₹74, 100.23', copiers: '502' },
    { name: 'Tanya', pnl: '74,100.23', roi: '+5.71%', mdd: '1.27%', aum: '₹74, 100.23', copiers: '502' },
    { name: 'Tanya', pnl: '74,100.23', roi: '+5.71%', mdd: '1.27%', aum: '₹74, 100.23', copiers: '502' },
    { name: 'Tanya', pnl: '74,100.23', roi: '+5.71%', mdd: '1.27%', aum: '₹74, 100.23', copiers: '502' },
    { name: 'Tanya', pnl: '74,100.23', roi: '+5.71%', mdd: '1.27%', aum: '₹74, 100.23', copiers: '502' },
  ];

  return (
    <section className="flex flex-wrap gap-1 justify-center items-start px-5 pb-5 mt-6 font-bold leading-none text-stone-950">
      {traders.map((trader, index) => (
        <TraderCardList key={index} {...trader} />
      ))}
    </section>
  );
};

export default CopyTradingList;