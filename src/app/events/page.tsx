// pages/index.tsx
"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation'

import { CgMathPlus, CgEye, CgPen, CgTrash} from "react-icons/cg";
import Link from "next/link";


const userData = [
  {
    eventName: "Badminton",
    PIC: "Fikri Ahsanandi",
    startDate: "10 July 2024",
    endDate: "13 July 2024",
    dDay: "14 July 2024",
    loc: "Kalibata",
  },
  {
    eventName: "Senam",
    PIC: "Ivan Fabriano",
    startDate: "5 August 2024",
    endDate: "9 August 2024",
    dDay: "10 August 2024",
    loc: "Parkiran",
  },
  {
    eventName: "Ping Pong",
    PIC: "Mba Dillah",
    startDate: "5 August 2024",
    endDate: "9 August 2024",
    dDay: "10 August 2024",
    loc: "Lobby",
  },
  {
    eventName: "Sepeda",
    PIC: "Mas Iqbal",
    startDate: "5 August 2024",
    endDate: "9 August 2024",
    dDay: "10 August 2024",
    loc: "Bintaro",
  },
  {
    eventName: "Sepeda",
    PIC: "Mas Iqbal",
    startDate: "5 August 2024",
    endDate: "9 August 2024",
    dDay: "10 August 2024",
    loc: "Bintaro",
  },
  {
    eventName: "Sepeda",
    PIC: "Mas Iqbal",
    startDate: "5 August 2024",
    endDate: "9 August 2024",
    dDay: "10 August 2024",
    loc: "Bintaro",
  },
  {
    eventName: "Sepeda",
    PIC: "Mas Iqbal",
    startDate: "5 August 2024",
    endDate: "9 August 2024",
    dDay: "10 August 2024",
    loc: "Bintaro",
  },
  {
    eventName: "Sepeda",
    PIC: "Mas Iqbal",
    startDate: "5 August 2024",
    endDate: "9 August 2024",
    dDay: "10 August 2024",
    loc: "Bintaro",
  },
  {
    eventName: "Sepeda",
    PIC: "Mas Iqbal",
    startDate: "5 August 2024",
    endDate: "9 August 2024",
    dDay: "10 August 2024",
    loc: "Bintaro",
  },
  {
    eventName: "Sepeda",
    PIC: "Mas Iqbal",
    startDate: "5 August 2024",
    endDate: "9 August 2024",
    dDay: "10 August 2024",
    loc: "Bintaro",
  },

];

export default function listEvent() {
  const router = useRouter();

  const handleCreateEventClick = () => {
    router.push('/events/create'); // Navigate to the create new event page
  };

  const handleEditEventClick = () => {
    router.push('/events/edit'); // Navigate to the edit event page
  };

  return (
    <div className="flex flex-col bg-gray-100 p-4 min-h-screen items-center">
      <h1 className="text-2xl font-semibold mb-2">Events</h1>

      <div className="flex w-full justify-start mb-2">
        <button 
        className="px-2 py-1 text-xs bg-[#027FB9] text-white rounded-md flex items-center hover:bg-[#036999]"
        onClick={handleCreateEventClick}>
          <CgMathPlus className="mr-1 h-4 w-4"/> {/*create new event*/}
          Create Event
        </button>
      </div>

      <div className="w-full max-h-96 bg-white p-6 border rounded-xl shadow-sm overflow-x-auto overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No.
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Event Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PIC
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                D-day
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userData.map((value, i) => (
              <tr key={i}>
                <td className="px-2 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{i + 1}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {value.eventName}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {value.PIC}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {value.loc}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{value.startDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{value.endDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {value.dDay}
                  </div>
                </td>
                <td className="px-6 py-4 flex whitespace-nowrap">
                  <Link href={`/events/detail/${value.eventName}`}legacyBehavior>
                    <a>
                      <button className="px-2 py-1 bg-[#027FB9] rounded-md text-xs text-white flex items-center hover:bg-[#036999]">
                      <CgEye className="h-3 w-3"/> {/*view detail*/}
                      </button> 
                    </a>
                  </Link>
                  
                  <button className="px-2 py-1 ml-1 bg-[#027FB9] rounded-md text-xs text-white flex items-center hover:bg-[#036999]"
                  onClick={handleEditEventClick}>
                  <CgPen className="h-3 w-3"/>{/*edit*/}
                  </button> 

                  <button className="px-2 py-1 ml-1 bg-[#FF7F3E] rounded-md text-xs text-white flex items-center hover:bg-[#FF6619]">
                  <CgTrash className="w-3 h-3"/> {/*delete*/}
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
