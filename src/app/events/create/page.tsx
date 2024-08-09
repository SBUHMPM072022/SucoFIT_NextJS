"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

import { MapContainer, TileLayer, Marker, Popup, CircleMarker, ic } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function AddEventPage() {
  const router = useRouter();
  const [position, setPosition]: any = useState(null);

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

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
        },
        (err) => {
          console.error(err);
          setPosition([-6.200000, 106.816666]); 
        }
      );
    } else {
      setPosition([-6.200000, 106.816666]);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/events'); 
  };

  const handleDragEnd = (event: any) => {
    const marker = event.target;
    const newPosition = marker.getLatLng();
    alert([newPosition.lat, newPosition.lng]);
    setPosition([newPosition.lat, newPosition.lng]);
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
        <div style={{ height: '100vh', width: '100%' }}>
      {position ? (
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker 
            position={position}
            draggable={true} // Mengaktifkan fitur draggable pada marker
            eventHandlers={{
              dragend: handleDragEnd, // Menangani event dragend untuk memperbarui posisi
            }}
          >
            <Popup>
              You are here! <br /> Latitude: {position[0]}, Longitude: {position[1]}
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Loading your location...</p>
      )}
    </div>
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
