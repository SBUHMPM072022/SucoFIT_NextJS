"use client";

import { useParams } from 'next/navigation'; 
import { useState, useEffect } from 'react';
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

// List of eventTypes
const eventTypes = [
  "Badminton",
  "Basket",
  "Berenang",
  "Lari",
  "Senam",
  "Sepeda",
  "Ping Pong",
  "Tenis",
  "Voli"
];

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

export default function EditEventPage() {
  const { id } = useParams();
  const router = useRouter();
  const [position, setPosition] = useState<[number, number]>([-6.257377, 106.835903]);

  const [eventDataState, setEventDataState] = useState<Event | undefined>();

  useEffect(() => {
    if (id) {
      const foundEvent = eventData.find((event) => event.id === id);
      if (foundEvent) {
        setEventDataState(foundEvent);
        setPosition([-6.257377, 106.835903]); // Set a default position, or use event's location coordinates if available
      }
    }
  }, [id]);

  if (!eventDataState) {
    return <p>Event not found</p>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEventDataState({ ...eventDataState, [name]: value });
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
      <h1 className="font-bold p-10 uppercase"> Edit Event</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 rounded-lg">
        <div className="mb-4">
          <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={eventDataState.eventName}
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
            value={eventDataState.eventName}
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
            value={eventDataState.PIC}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="loc" className="block text-sm font-medium text-gray-700">Location</label>
          <div className="mb-4">
          <input
            type="text"
            id="loc"
            name="loc"
            value={eventDataState.loc}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
          <div className="w-full h-[40vh] mb-4">
            {position ? (
              <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} draggable eventHandlers={{ dragend: handleDragEnd }}>
                  <Popup>
                    {eventDataState.eventName}
                  </Popup>
                </Marker>
              </MapContainer>
            ) : (
              <p>Loading map...</p>
            )}
          </div>
        <div className="mb-4">
          <label htmlFor="regisStart" className="block text-sm font-medium text-gray-700">PIC</label>
          <input
            type="date"
            id="regisStart"
            name="regisStart"
            value={eventDataState.regisStart}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="regisEnd" className="block text-sm font-medium text-gray-700">PIC</label>
          <input
            type="date"
            id="regisEnd"
            name="regisEnd"
            value={eventDataState.regisEnd}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventStart" className="block text-sm font-medium text-gray-700">PIC</label>
          <input
            type="date"
            id="eventStart"
            name="eventStart"
            value={eventDataState.eventStart}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventEnd" className="block text-sm font-medium text-gray-700">PIC</label>
          <input
            type="date"
            id="eventEnd"
            name="eventEnd"
            value={eventDataState.eventEnd}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        </div>
        <div className="flex justify-between">
          <button type="submit" className="px-2 py-1 bg-[#027FB9] text-sm text-white font-semibold rounded-md hover:bg-[#036999]">
            Save Changes
          </button>
          <button type="button" className="px-2 py-1 bg-[#FF7F3E] text-sm text-white font-semibold rounded-md shadow-md hover:bg-[#FF5600]"
          onClick={() => router.push('/events')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
