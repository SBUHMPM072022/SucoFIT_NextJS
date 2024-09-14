"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import Activeuser from '../components/Activeuser';
import Leaderboard from '../components/Leaderboard';
import Favorites from '../components/Favorites';
import Percentage from '../components/Percentage';
import Prizerules from '../components/PrizeRules';

const Dashboard = () => {
  const router = useRouter();

  return (
    <div className='h-screen flex'>
      <Navbar />
      <div className="flex flex-col flex-grow">
        <Topbar />
        <div className="flex flex-row p-6 gap-6">
          <div className="space-y-2">
            <Activeuser />
            <Favorites />
          </div>
          <div>
          <Percentage />
          </div>
          <div className='flex-grow space-y-2'>
            <Prizerules />
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

