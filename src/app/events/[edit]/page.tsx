"use client";

import { useParams } from 'next/navigation'; 
import { useState, useEffect } from 'react';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import L from 'leaflet';

interface Event {
  id: string;
  eventName: string;
  eventDetail: string;
  PIC: string;
  regisStart: string;
  regisEnd: string;
  eventStart: string;
  eventEnd: string;
  loc: string;
}

const eventData: Event[] = [
{
  id: "1",
  eventName: "Badminton",
  eventDetail: "Bulu tangkis atau tepuk bulu (bahasa Inggris: badminton; bentuk tidak baku: bulutangkis) adalah suatu olahraga raket yang menggunakan raket untuk memukul kok melewati jaring. Meskipun dapat dimainkan dengan tim yang lebih besar, bentuk permainan yang paling umum adalah 'tunggal' (dengan satu pemain di setiap sisi) dan 'ganda' (dengan dua pemain di setiap sisi) yang saling berlawanan.",
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
  eventDetail: "Senam merupakan suatu cabang olahraga yang melibatkan performa gerakan yang membutuhkan kekuatan kecepatan dan keserasian gerakan fisik yang teratur. Bentuk modern dari senam ialah Palang tak seimbang, balok keseimbangan, dan senam lantai. Bentuk-bentuk tersebut konon berkembang dari latihan yang digunakan oleh bangsa Yunani kuno untuk menaiki dan menuruni seekor kuda dan pertunjukan sirkus. Adapun bentuk modern dari senam seperti palang tak seimbang, balok keseimbangan, dan senam lantai.",
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
  eventDetail: "Tenis meja (bahasa Inggris: Table Tennis) atau pingpong merupakan olahraga yang melibatkan dua atau empat pemain yang memukul bola plastik/bola pingpong di atas meja menggunakan bet/bat. Permainan ini dilakukan di atas meja yang dibagi dua bagian oleh net. Kecuali servis awal, aturan permainan adalah: pemain harus memantulkan bola ke meja lawan dan lawan harus mengembalikannya ke meja lawan. Poin akan terjadi jika pemain lawan gagal mengembalikan bola. Karet bet tenis meja ada halus/licin, ada bintik pendek/serang, ada bintik panjang/bertahan. Permainan ini cepat dan membutuhkan keahlian dalam penempatan bola dan pemutaran bola yang mengubah arah pantulan bola sehingga lawan akan sulit mengembalikannya. Tenis meja menggunakan reli poin dengan game point 11 tiap set nya, bisa berlangsung 3 sampai 7 set.",
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
  eventDetail: "Sepeda, kereta angin, kereta lereng, atau besikal (dari bahasa Prancis: vélocipède, melalui bahasa Belanda: vélocipède) adalah kendaraan beroda dua atau tiga yang mempunyai setang, tempat duduk, dan sepasang pengayuh yang digerakkan kaki untuk menjalankannya.",
  PIC: "Mas Iqbal",
  regisStart: "5 August 2024",
  regisEnd: "13 July 2024",
  eventStart: "10 August 2024",
  eventEnd: "10 August 2024",
  loc: "Bintaro",
},
]; 

const editEvents = () => {
  const { id } = useParams();

  const [event, setEvent] = useState<Event | undefined>();

  useEffect(() => {
    if (id) {
      const foundEvent = eventData.find((event) => event.id === id);
      setEvent(foundEvent);
    }
  }, [id]);

  if (!event) {
    return <p>Event not found</p>;
  }

  "use client";

export default function AddEventPage() {
  const router = useRouter();
  const [position, setPosition] = useState<[number, number]>([-6.257377, 106.835903]);

  const [eventData, setEventData] = useState({
    event: '',
    eventType: '',
    PIC: '',
    regisStart: '',
    regisEnd: '',
    eventStart: '',
    eventEnd: '',
    loc: '',
    lat: -6.257377,
    lng: 106.835903,
  });

  // List of eventTypes
  const eventTypes = [
    "Badminton",
    "Senam",
    "Ping Pong",
    "Sepeda"
  ];

  useEffect(() => {
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
    router.push('/events'); 
  };

  const handleDragEnd = (event: L.LeafletEvent) => {
    const marker = event.target as L.Marker;
    const newPosition = marker.getLatLng();
    alert(`Latitude: ${newPosition.lat}, Longitude: ${newPosition.lng}`);
    setPosition([newPosition.lat, newPosition.lng]);
  };

  return (
    <div className="flex flex-col bg-gray-100 p-4 min-h-screen items-center">
    <h1 className="text-2xl font-semibold mb-2">EDIT EVENT</h1>
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
        <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">Event Type</label>
        <select
          id="eventType"
          name="eventType"
          value={eventData.eventType}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        >
          <option value="">Select event type</option>
          {eventTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
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
        <div className="w-full" style={{ height: '40vh' }}>
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
        Save Edit
      </button>
    </form>
  </div>
);
}


export default editEvents;
