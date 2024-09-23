"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import axios from "axios";

import { GoHome, GoDatabase } from "react-icons/go";
import { BsCalendar4Event } from "react-icons/bs";
import { PiMedalMilitaryLight } from "react-icons/pi";
import { MdLogout, MdKeyboardArrowDown } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiMedicalClipboard } from "react-icons/ci";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeButton, setActiveButton] = useState('dashboard');

  const [logout, setLogout]: any = useState([]);

  // const handleDashboard = () => {
  //   setActiveButton('dashboard');
  //   router.push('/dashboard');
  // };

  // const handleEvents = () => {
  //   setActiveButton('events');
  //   router.push('/events');
  // };

  // const handleDoctor = () => {
  //   setActiveButton('doctor');
  //   router.push('/doctor');
  // };

  // const handleReward = () => {
  //   setActiveButton('reward');
  //   router.push('/reward');
  // };

  // const handleDatabase = () => {
  //   setActiveButton('database');
  //   router.push('/employee');
  // };

  // const handleSetting = () => {
  //   setActiveButton('setting');
  //   router.push('/setting');
  // };

  useEffect(() => {
    // Set active button based on the current path
    if (pathname.includes('dashboard')) {
      setActiveButton('dashboard');
    } else if (pathname.includes('events')) {
      setActiveButton('events');
    } else if (pathname.includes('doctor')) {
      setActiveButton('doctor');
    } else if (pathname.includes('reward')) {
      setActiveButton('reward');
    } else if (pathname.includes('employee')) {
      setActiveButton('database');
    } else if (pathname.includes('setting')) {
      setActiveButton('setting');
    }
  }, [pathname]);

  // async function getLogout() {
  //   try {
  //     const response = await axios.get('http://localhost:4006/api/v1/web/logout');
  //     setLogout(response.data.data)
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   getLogout()
  // }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:4006/api/v1/web/logout');
      if (response.status === 200) {
        router.push('/');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className='h-screen flex'>

      <div className="flex flex-col w-[120%] bg-[#FFFFFF] p-4">
        <div className="flex items-center mb-8">
          <img src="Logo_SucoFIT.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">SucoFIT</span>
        </div>
        <nav className="flex-grow">
          <button
            className={`flex items-center p-2 mb-1 rounded w-40 ${activeButton === 'dashboard'
              ? 'bg-[#027FB9] text-white'
              : 'text-gray-900 hover:bg-[#027FB9] hover:text-white'
              }`}
              onClick={() => router.push('/dashboard')}>
            <span className="icons"><GoHome /></span>
            <span className="ml-2">Dashboard</span>
          </button>
          <button
            className={`flex items-center p-2 mb-1 rounded w-40 ${activeButton === 'events'
                ? 'bg-[#027FB9] text-white'
                : 'text-gray-900 hover:bg-[#027FB9] hover:text-white'
              }`}
              onClick={() => router.push('/events')}>
            <span className="icons"><BsCalendar4Event /></span>
            <span className="ml-2">Events</span>
          </button>
          <button
            className={`flex items-center p-2 mb-1 rounded w-40 ${activeButton === 'reward'
                ? 'bg-[#027FB9] text-white'
                : 'text-gray-900 hover:bg-[#027FB9] hover:text-white'
              }`}
              onClick={() => router.push('/reward')}>
            <span className="icons"><PiMedalMilitaryLight /></span>
            <span className="ml-2">Reward</span>
          </button>
          <button className={`flex items-center p-2 rounded w-40 ${activeButton === 'doctor'
            ? 'bg-[#027FB9] text-white'
            : 'text-gray-900 hover:bg-[#027FB9] hover:text-white'
            }`}
            onClick={() => router.push('/doctor')}>
            <span className="icons"><CiMedicalClipboard /></span>
            <span className="ml-2">Doctor</span>
          </button>
          <button className={`flex items-center p-2 rounded w-40 ${activeButton === 'database'
            ? 'bg-[#027FB9] text-white'
            : 'text-gray-900 hover:bg-[#027FB9] hover:text-white'
            }`}
            onClick={() => router.push('/employee')}>
            <span className="icons"><GoDatabase /></span>
            <span className="ml-2">Database</span>
          </button>
          <button className={`flex items-center p-2 rounded w-40 ${activeButton === 'setting'
            ? 'bg-[#027FB9] text-white'
            : 'text-gray-900 hover:bg-[#027FB9] hover:text-white'
            }`}
            onClick={() => router.push('/setting')}>
            <span className="icons"><IoSettingsOutline /></span>
            <span className="ml-2">Setting</span>
          </button>
        </nav>
        <div>
          <button className="flex items-center p-2 text-gray-900 hover:bg-[#027FB9] hover:text-white rounded hover:w-40"
            onClick={handleLogout}>
            <span className="icons"><MdLogout /></span>
            <span className="ml-2">Log out</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Navbar;

