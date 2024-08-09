"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function AddEventPage() {
  const router = useRouter();

  const [eventData, setEventData] = useState({
    event: '',
    PIC: '',
    regisStart: '',
    regisEnd: '',
    eventStart: '',
    eventEnd: '',
    loc: '',
    lat: -6.257377,
    lng: 106.835903,
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
            required />
        </div>

        <div className="mb-4">
          <MapContainer center={[eventData.lat, eventData.lng]} zoom={13} scrollWheelZoom={false} style={{ height: '200px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[eventData.lat, eventData.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
        </div>
        <div className="mb-4">
          <label htmlFor="regisStart" className="block text-sm font-medium text-gray-700">Registration Start Date</label>
          <input
            type="date"
            id="regisStart"
            name="regisStart"
            value={eventData.regisStart}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="regisEnd" className="block text-sm font-medium text-gray-700">Registration End Date</label>
          <input
            type="date"
            id="regisEnd"
            name="regisEnd"
            value={eventData.regisEnd}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventStart" className="block text-sm font-medium text-gray-700">Event Start Date</label>
          <input
            type="date"
            id="eventStart"
            name="eventStart"
            value={eventData.eventStart}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventEnd" className="block text-sm font-medium text-gray-700">Event End Date</label>
          <input
            type="date"
            id="eventEnd"
            name="eventEnd"
            value={eventData.eventEnd}
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
