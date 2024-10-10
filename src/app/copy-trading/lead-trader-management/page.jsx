'use client'
import React, { useState } from 'react';
import StrategyTable from './StrategyTable';
import LivePositionsTable from './LivePositionsTable';
import PositionsHistoryTable from './PositionsHistoryTable';
import CopiersTable from "./CopiersTable"

import Sidebar from '../components/Sidebar';
import DashboardIcons from '../components/DashboardIcons';
import TitleAction from './TitleAction';

function LeadTraderManagement() {
  const [activeTab, setActiveTab] = useState('Live Positions');

  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-stone-50">
      {/* <Header /> */}

      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex gap-5 w-full">
          <Sidebar />

          <main className="flex flex-col main-container">
            <DashboardIcons />
            <TitleAction />
            <StrategyTable />

            {/* Tabs Navigation */}

            
            <nav className="flex gap-3 items-center py-3 px-6 bg-gray-100 text-xs font-medium text-neutral-500 mt-10">
              {['Live Positions', 'Position History', 'Current Copiers', 'Mock Copiers'].map((tab) => (
                <div
                  key={tab}
                  className={`cursor-pointer px-4 py-2 rounded ${
                    activeTab === tab ? 'bg-white text-neutral-800 font-bold shadow' : 'hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </nav>


            <div className="border-b-2 border-lime-500 mx-6" />

            {/* Content based on Active Tab */}
            <div className="mt-3.5 bg-white rounded-lg shadow-sm">
              {activeTab === 'Live Positions' && <LivePositionsTable />}

              {activeTab === 'Position History' && <PositionsHistoryTable />}
              {activeTab === 'Current Copiers' && <CopiersTable />}

              {/* Placeholder for other tabs */}
              {activeTab !== 'Live Positions' && activeTab !== 'Position History' && (
                <div className="p-6 bg-white rounded-lg text-center text-neutral-600">
                  {activeTab} content goes here.
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LeadTraderManagement;
