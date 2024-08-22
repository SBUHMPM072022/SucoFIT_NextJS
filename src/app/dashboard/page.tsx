"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { GoHome } from "react-icons/go";
import { BsCalendar4Event } from "react-icons/bs";
import { PiMedalMilitaryLight } from "react-icons/pi";
import { MdLogout, MdKeyboardArrowDown } from "react-icons/md";

const Sidebar = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState('dashboard');

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleDashboard = () => {
    setActiveButton('dashboard');
    router.push('/dashboard');
  };

  const handleEvents = () => {
    setActiveButton('events');
    router.push('/events');
  };

  const handleReward = () => {
    setActiveButton('reward');
    router.push('/reward');
  };

  return (
    <div className='h-screen flex'>

      <div className="flex flex-col w-48 bg-[#FFFFFF] p-4">
        <div className="flex items-center mb-8">
          <img src="Logo_SucoFIT.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">SucoFIT</span>
        </div>
        <nav className="flex-grow">
          <button
            className={`flex items-center p-2 rounded w-40 ${activeButton === 'dashboard'
                ? 'bg-[#027FB9] text-white'
                : 'text-gray-900 hover:bg-[#027FB9] hover:text-white'
              }`}
            onClick={handleDashboard}>
            <span className="icons"><GoHome />
            </span>
            <span className="ml-2">Dashboard</span>
          </button>
          <button className="flex items-center p-2 text-gray-900 hover:bg-[#027FB9] hover:text-white rounded hover:w-40"
            onClick={handleEvents}>
            <span className="icons"><BsCalendar4Event /></span>
            <span className="ml-2">Events</span>
          </button>
          <button className="flex items-center p-2 text-gray-900 hover:bg-[#027FB9] hover:text-white rounded hover:w-40"
            onClick={handleReward}>
            <span className="icons"><PiMedalMilitaryLight /></span>
            <span className="ml-2">Reward</span>
          </button>
        </nav>
        <div>
          <button className="flex items-center p-2 text-gray-900 hover:bg-[#027FB9] hover:text-white rounded hover:w-40">
            <span className="icons"><MdLogout /></span>
            <span className="ml-2">Log out</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-grow">

        <header className="flex justify-between items-center py-4 px-10">
          <div>
            <h1 className="text-xl font-bold">Management Dashboard</h1>
            <p className="text-gray-600">{currentDate}</p>
          </div>
          <div className="flex items-center space-x-2 bg-white rounded-lg h-12">
            <img
              src="Ellipse.png"
              alt="Admin"
              width={40}
              height={40}
              className="rounded-full"
            />
            <button className='flex items-center space-x-2'>
              <span className="font-semibold">Admin</span>
              <span className="material-icons-outlined"><MdKeyboardArrowDown /></span>
            </button>
          </div>
        </header>

      </div>
    </div>
  );
};

export default Sidebar;

