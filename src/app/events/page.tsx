"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation'

import { CgMathPlus, CgEye, CgPen, CgTrash} from "react-icons/cg";
import Link from "next/link";
import { FC } from 'react';


const userData = [
  {
    id: "1",
    eventName: "Badminton",
    PIC: "Fikri Ahsanandi",
    regisStart: "10 July 2024",
    regisEnd: "13 July 2024",
    eventStart: "14 July 2024",
    eventEnd: "14 July 2024",
    loc: "Kalibata",
  },
  {
    id: "2",
    eventName: "Senam",
    PIC: "Ivan Fabriano",
    regisStart: "5 August 2024",
    regisEnd: "13 July 2024",
    eventStart: "10 August 2024",
    eventEnd: "10 August 2024",
    loc: "Parkiran",
  },
  {
    id: "3",
    eventName: "Ping Pong",
    PIC: "Mba Dillah",
    regisStart: "5 August 2024",
    regisEnd: "13 July 2024",
    eventStart: "10 August 2024",
    eventEnd: "10 August 2024",
    loc: "Lobby",
  },
  {
    id: "4",
    eventName: "Sepeda",
    PIC: "Mas Iqbal",
    regisStart: "5 August 2024",
    regisEnd: "13 July 2024",
    eventStart: "10 August 2024",
    eventEnd: "10 August 2024",
    loc: "Bintaro",
  },
  {
    id: "5",
    eventName: "Sepeda",
    PIC: "Mas Iqbal",
    regisStart: "5 August 2024",
    regisEnd: "13 July 2024",
    eventStart: "10 August 2024",
    eventEnd: "10 August 2024",
    loc: "Bintaro",
  },
  {
    id: "6",
    eventName: "Sepeda",
    PIC: "Mas Iqbal",
    regisStart: "5 August 2024",
    regisEnd: "13 July 2024",
    eventStart: "10 August 2024",
    eventEnd: "10 August 2024",
    loc: "Bintaro",
  },
  {
    id: "7",
    eventName: "Sepeda",
    PIC: "Mas Iqbal",
    regisStart: "5 August 2024",
    regisEnd: "13 July 2024",
    eventStart: "10 August 2024",
    eventEnd: "10 August 2024",
    loc: "Bintaro",
  },
  {
    id: "8",
    eventName: "Sepeda",
    PIC: "Mas Iqbal",
    regisStart: "5 August 2024",
    regisEnd: "13 July 2024",
    eventStart: "10 August 2024",
    eventEnd: "10 August 2024",
    loc: "Bintaro",
  },
  {
    id: "9",
    eventName: "Sepeda",
    PIC: "Mas Iqbal",
    regisStart: "5 August 2024",
    regisEnd: "13 July 2024",
    eventStart: "10 August 2024",
    eventEnd: "10 August 2024",
    loc: "Bintaro",
  },
  {
    id: "10",
    eventName: "Sepeda",
    PIC: "Mas Iqbal",
    regisStart: "5 August 2024",
    regisEnd: "13 July 2024",
    eventStart: "10 August 2024",
    eventEnd: "10 August 2024",
    loc: "Bintaro",
  },

];

export default function listEvent() {
  const router = useRouter();

  const handleCreateEventClick = () => {
    router.push('/events/create'); // create new event page
  };

  const handleEditEventClick = () => {
    router.push('/events/edit'); // edit event page
  };

  return (
    <div className="flex flex-col p-10 min-h-screen">
      <div className="flex justify-between items-center">
      <h1 className="font-semibold mb-2 uppercase">Events</h1>
      <div>
      <div className="flex w-full justify-start mb-2">
        <button 
        className="px-2 py-1 mb-2 text-sm bg-[#027FB9] font-semibold text-white rounded-md flex items-center hover:bg-[#006695]"
        onClick={handleCreateEventClick}>
          <CgMathPlus className="mr-1 h-5 w-5"/> {/*create new event*/}
          Create Event
        </button>
      </div>
      </div>
      </div>

      <div className="w-full max-h-[80vh] bg-white p-6 border rounded-xl shadow-sm overflow-x-auto overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                No.
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Event Name
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                PIC
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Registration Date
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Event Date
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                  <div className="text-center text-sm font-medium text-gray-900">
                    {value.PIC}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-center text-sm font-medium text-gray-900">
                    {value.loc}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-center text-sm text-gray-900">{value.regisStart} - {value.regisEnd}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-center text-sm text-gray-900">{value.eventStart} - {value.eventEnd}</div>
                </td>
                <td className="px-6 py-4 flex whitespace-nowrap">
                  <div key={value.id}>
                  <Link href={`/events/${value.id}`}legacyBehavior>
                    <a>
                      <button className="px-2 py-1 bg-[#027FB9] rounded-md text-xs text-white flex items-center hover:bg-[#006695]">
                      <CgEye className="h-4 w-4"/> {/*view detail*/}
                      </button> 
                    </a>
                  </Link>
                  </div>
                  
                  <Link href={`/events/edit/${value.id}`}legacyBehavior>
                    <a>
                      <button className="px-2 py-1 ml-1 bg-[#027FB9] rounded-md text-xs text-white flex items-center hover:bg-[#006695]">
                      <CgPen className="h-4 w-4"/>{/*edit*/}
                      </button> 
                    </a>
                  </Link>

                  <button className="px-2 py-1 ml-1 bg-[#FF7F3E] rounded-md text-xs text-white flex items-center hover:bg-[#FF5600]">
                  <CgTrash className="w-4 h-4"/> {/*delete*/}
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
