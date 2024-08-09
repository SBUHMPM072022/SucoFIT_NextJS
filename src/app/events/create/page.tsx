// app/events/add-event/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function AddEventPage() {
  const router = useRouter();
  const [eventData, setEventData] = useState({
    event: '',
    PIC: '',
    startDate: '',
    endDate: '',
    dDay: '',
    loc: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    router.push('/events'); // back to the list event page
  };

  return (
    <div className="flex flex-col bg-gray-100 p-4 min-h-screen items-center">
      <h1 className="text-2xl font-semibold mb-2">CREATE NEW EVENT</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 border rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="event" className="block text-sm font-medium text-gray-700">Event Name</label>
          <input
            type="text"
            id="event"
            name="event"
            value={eventData.event}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="PIC" className="block text-sm font-medium text-gray-700">PIC</label>
          <input
            type="text"
            id="PIC"
            name="PIC"
            value={eventData.PIC}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="loc" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            id="loc"
            name="loc"
            value={eventData.loc}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={eventData.startDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={eventData.endDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dDay" className="block text-sm font-medium text-gray-700">D-day</label>
          <input
            type="date"
            id="dDay"
            name="dDay"
            value={eventData.dDay}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-3 py-2 bg-[#FF7F3E] text-white rounded-md shadow-md hover:bg-[#FF6619]"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}
