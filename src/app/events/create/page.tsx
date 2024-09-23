"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import L from 'leaflet';
import axios from "axios";

export default function AddEventPage() {
  const router = useRouter();
  const [position, setPosition] = useState<[number, number]>([-6.257377, 106.835903]);
  
  const [eventType, setEventType] : any = useState([]);

  const [eventData, setEventData] = useState({
    event_name: '',
    event_description:'',
    event_type_id: '',
    pic: '',
    location: '',
    latitude: -6.257377,
    longitude: 106.835903,
    registration_start_date: '',
    registration_end_date: '',
    event_start_date: '',
    event_end_date: '',
    point: 0
  });
  

  async function getEventType() {
    try {
      const response = await axios.get('http://localhost:4006/api/v1/web/event-type');
      setEventType(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    getEventType()

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(eventData)
    // router.push('/events'); 
    axios.post('http://localhost:4006/api/v1/web/event', eventData
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const handleDragEnd = (event: L.LeafletEvent) => {
    const marker = event.target as L.Marker;
    const newPosition : any = marker.getLatLng();
    // alert(`Latitude: ${newPosition.latitude}, Longitude: ${newPosition.longitude}`);
    console.log(newPosition.lat)
    setEventData({ ...eventData, latitude: newPosition.lat, longitude: newPosition.lng });
  };



  return (
    <div className="flex flex-col p-4 min-h-screen items-center w-[400%]">
      <h1 className="font-bold mt-10 uppercase">Create New Event</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 rounded-lg">
        <div className="mb-4">
          <label htmlFor="event_name" className="block text-sm font-medium text-gray-700">Event Name</label>
          <input
            type="text"
            id="event_name"
            name="event_name"
            value={eventData.event_name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="event_description" className="block text-sm font-medium text-gray-700">Event Description</label>
          <input
            type="text"
            id="event_description"
            name="event_description"
            value={eventData.event_description}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="event_type_id" className="block text-sm font-medium text-gray-700">Event Type</label>
          <select
            id="event_type_id"
            name="event_type_id"
            value={eventData.event_type_id}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select event type</option>
            {eventType.map((value: any, i: number) => (
              <option key={i} value={value.value}>{value.label}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="pic" className="block text-sm font-medium text-gray-700">PIC</label>
          <input
            type="text"
            id="pic"
            name="pic"
            value={eventData.pic}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            className="mt-1 block w-full mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          <div className="w-full h-[40vh] mb-4">
            {position ? (
              <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker 
                  position={position}
                  draggable={true}
                  eventHandlers={{
                    dragend: handleDragEnd,
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
          <label htmlFor="registration_start_date" className="block text-sm font-medium text-gray-700">Registration Start Date</label>
          <input
            type="date"
            id="registration_start_date"
            name="registration_start_date"
            value={eventData.registration_start_date}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="registration_end_date" className="block text-sm font-medium text-gray-700">Registration End Date</label>
          <input
            type="date"
            id="registration_end_date"
            name="registration_end_date"
            value={eventData.registration_end_date}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="event_start_date" className="block text-sm font-medium text-gray-700">Event Start Date</label>
          <input
            type="date"
            id="event_start_date"
            name="event_start_date"
            value={eventData.event_start_date}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="event_end_date" className="block text-sm font-medium text-gray-700">Event End Date</label>
          <input
            type="date"
            id="event_end_date"
            name="event_end_date"
            value={eventData.event_end_date}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="button"
          className="w-full px-3 py-2 bg-[#FF7F3E] text-white font-semibold rounded-md shadow-md hover:bg-[#FF5600]"
          onClick={(e: any)=>handleSubmit(e)}
        >
          Create Event
        </button>
      </form>
    </div>
  );
}
