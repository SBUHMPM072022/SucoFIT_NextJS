"use client";

import { useParams } from 'next/navigation'; 
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Link from "next/link";

import { CgSoftwareDownload } from "react-icons/cg";
import { CgSoftwareUpload } from "react-icons/cg";
import axios from "axios";

interface Event {
  id: string;
  eventName: string;
  eventDetail: string;
  PIC: string;
  regisStart: string;
  regisEnd: string;
  eventDate: string;
  loc: string;
}

const eventData: Event[] = [
{
  id: "1",
  eventName: "Badminton",
  eventDetail: "Bulu tangkis atau tepuk bulu (bahasa Inggris: badminton; bentuk tidak baku: bulutangkis) adalah suatu olahraga raket yang menggunakan raket untuk memukul kok melewati jaring. Meskipun dapat dimainkan dengan tim yang lebih besar, bentuk permainan yang paling umum adalah 'tunggal' (dengan satu pemain di setiap sisi) dan 'ganda' (dengan dua pemain di setiap sisi) yang saling berlawanan.",
  PIC: "Fikri Ahsanandi",
  regisStart: "10 Juli 2024",
  regisEnd: "13 Juli 2024",
  eventDate: "14 Juli 2024",
  loc: "Kalibata",
},
{
  id: "2",
  eventName: "Senam",
  eventDetail: "Senam merupakan suatu cabang olahraga yang melibatkan performa gerakan yang membutuhkan kekuatan kecepatan dan keserasian gerakan fisik yang teratur. Bentuk modern dari senam ialah Palang tak seimbang, balok keseimbangan, dan senam lantai. Bentuk-bentuk tersebut konon berkembang dari latihan yang digunakan oleh bangsa Yunani kuno untuk menaiki dan menuruni seekor kuda dan pertunjukan sirkus. Adapun bentuk modern dari senam seperti palang tak seimbang, balok keseimbangan, dan senam lantai.",
  PIC: "Ivan Fabriano",
  regisStart: "5 Agustus 2024",
  regisEnd: "13 Agustus 2024",
  eventDate: "10 Agustus 2024",
  loc: "Parkiran",
},
{
  id: "3",
  eventName: "Ping Pong",
  eventDetail: "Tenis meja (bahasa Inggris: Table Tennis) atau pingpong merupakan olahraga yang melibatkan dua atau empat pemain yang memukul bola plastik/bola pingpong di atas meja menggunakan bet/bat. Permainan ini dilakukan di atas meja yang dibagi dua bagian oleh net. Kecuali servis awal, aturan permainan adalah: pemain harus memantulkan bola ke meja lawan dan lawan harus mengembalikannya ke meja lawan. Poin akan terjadi jika pemain lawan gagal mengembalikan bola. Karet bet tenis meja ada halus/licin, ada bintik pendek/serang, ada bintik panjang/bertahan. Permainan ini cepat dan membutuhkan keahlian dalam penempatan bola dan pemutaran bola yang mengubah arah pantulan bola sehingga lawan akan sulit mengembalikannya. Tenis meja menggunakan reli poin dengan game point 11 tiap set nya, bisa berlangsung 3 sampai 7 set.",
  PIC: "Mba Dillah",
  regisStart: "5 Agustus 2024",
  regisEnd: "13 Agustus 2024",
  eventDate: "10 Agustus 2024",
  loc: "Lobby",
},
{
  id: "4",
  eventName: "Sepeda",
  eventDetail: "Sepeda, kereta angin, kereta lereng, atau besikal (dari bahasa Prancis: vélocipède, melalui bahasa Belanda: vélocipède) adalah kendaraan beroda dua atau tiga yang mempunyai setang, tempat duduk, dan sepasang pengayuh yang digerakkan kaki untuk menjalankannya.",
  PIC: "Mas Iqbal",
  regisStart: "5 Agustus 2024",
  regisEnd: "13 Agustus 2024",
  eventDate: "10 Agustus 2024",
  loc: "Bintaro",
},
]; 

const userData = [
  {
    id: "1",
    name: "Fikri Ahsanandi",
    division: "HMPM",
    joinDate: "10 August 2024",
    duration: "100 minutes",
    loc: "Valid"
  },
  {
    id: "2",
    name: "Ivan Fabriano Syahputra",
    division: "HMPM",
    joinDate: "10 August 2024",
    duration: "90 minutes",
    loc: "Non Valid"
  },
  {
    id: "3",
    name: "Mba Dillah",
    division: "HMPM",
    joinDate: "9 August 2024",
    duration: "100 minutes",
    loc: "Valid"
  },
  {
    id: "4",
    name: "Mas Iqbal",
    division: "HMPM",
    joinDate: "8 August 2024",
    duration: "120 minutes",
    loc: "Valid"
  },
  {
    id: "5",
    name: "Mas Iqbal",
    division: "HMPM",
    joinDate: "8 August 2024",
    duration: "120 minutes",
    loc: "Non Valid"
  },
  {
    id: "6",
    name: "Mas Iqbal",
    division: "HMPM",
    joinDate: "8 August 2024",
    duration: "120 minutes",
    loc: "Non Valid"
  },
  {
    id: "7",
    name: "Mas Iqbal",
    division: "HMPM",
    joinDate: "8 August 2024",
    duration: "120 minutes",
    loc: "valid"
  },
  {
    id: "8",
    name: "Mas Iqbal",
    division: "HMPM",
    joinDate: "8 August 2024",
    duration: "120 minutes",
    loc: "valid"
  },
  {
    id: "9",
    name: "Mas Iqbal",
    division: "HMPM",
    joinDate: "8 August 2024",
    duration: "120 minutes",
    loc: "Non Valid"
  },
  {
    id: "10",
    name: "Mas Iqbal",
    division: "HMPM",
    joinDate: "8 August 2024",
    duration: "120 minutes",
    loc: "valid"
  },
]

const DetailEvent = () => {
  const { id } = useParams();

  const [eventDetail, setEventDetail] : any = useState([]);

async function getEventDetail(){
  try{
    const response = await axios.get(`http://localhost:4006/api/v1/web/event/${id}`);
    setEventDetail(response.data.data);
    console.log(response.data.data);
  }catch (error){
    console.log(error)
  }
}

  useEffect(() => {
    if (id) {
      getEventDetail()
      console.log(id)
    }
  }, [id]);

  if (!eventDetail) {
    return <p>Event not found</p>;
  }
  
  const router = useRouter();
  const [eventParticipant, setParticipantData] : any = useState([]); 

  async function getParticipant() {
    try {
      const response = await axios.get(`http://localhost:4006/api/v1/web/participant?event_id=${id}`);
      setParticipantData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getParticipant()
  }, []);

  return (
    <div className="p-10 w-[120%]">
      <div>
        <div className="flex">
          <img src="/badminton.jpg" alt="event image" className="mb-2 w-[50vh] h-[50vh] "/>
          <div className="flex-col ml-10">
            <h1 className="text-xl font-bold uppercase">{eventDetail.event_name}</h1>
            <p>{eventDetail.event_description}</p>
            <p className="mt-3">Acara akan dilaksanakan pada {eventDetail.event_date} di {eventDetail.location}.</p>
            <p className="mt-3">Pendaftaran dibuka pada {eventDetail.registration_date}.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-2 items-end">
        <h1 className="font-semibold uppercase">Participants</h1>
        <div className="flex justify-end">
          <button 
            className="px-2 py-1 text-sm bg-[#027FB9] text-white font-semibold rounded-md flex items-center hover:bg-[#036999]">
            <CgSoftwareUpload className="mr-1 h-5 w-5"/>
            Export Participants Data
          </button>
        </div>
      </div>
      <div>
        <div className="w-full max-h-[55vh] bg-white p-6 border rounded-xl shadow-sm overflow-x-auto overflow-y-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No.
                </th>
                <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Division
                </th>
                <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
                <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Evidence
                </th>
             </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {eventParticipant.map((value: any, i: number) => (
                <tr key={i}>
                  <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{i + 1}</div>
                </td>
                <td className="px-2 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {value.username}
                  </div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {value.division_name}
                  </div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {value.join_date}
                  </div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {value.duration}
                  </div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {/*value location valid/nonvalid*/}
                  </div>
                </td>
                <td>
                  <div className="flex justify-center">
                    <div key={value.id}>
                    <Link href={`/events/evidence/${value.id}`} legacyBehavior>
                      <a>
                        <button className="px-2 py-1 ml-1 bg-[#FF7F3E] rounded-md text-xs text-white flex hover:bg-[#FF6619]">
                        <CgSoftwareDownload className="w-3 h-3 mr-2" />{/*download evidence*/}
                        Download
                        </button>
                      </a>
                    </Link>
                    </div>
                  </div>
                </td>  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailEvent;
