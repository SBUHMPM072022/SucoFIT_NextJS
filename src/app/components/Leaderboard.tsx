import Image from 'next/image';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import axios from "axios";

// const leaderboardData = [
//   { rank: '', name: '', username: '', points: '', image: '' },
// ];

const Leaderboard = () => {

  const [leaderboard, setLeaderboard]: any = useState([]);

  async function getLeaderboard() {
    try {
      const response = await axios.get('http://localhost:4006/api/v1/web/leaderboard');
      setLeaderboard(response.data.data)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }  

  useEffect(() => {
    getLeaderboard()
  }, []);

  return (
    <div className="bg-white px-6 py-3.5 rounded-lg shadow-lg w-full">
      <h2 className="text-xl font-bold mb-2">Leaderboard</h2>
      <p className="text-gray-600 mb-4">Last Update Data 25 July 2024</p>
      <div className="space-y-2 h-96 overflow-y-auto pr-2">
        {leaderboard.map((user: any) => (
          <div key={user.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-500 w-8">{String(user.id).padStart(2, '0')}</span>
              <img
                src={`${process.env.NEXT_PUBLIC_URL}/${user.profile_picture}`}
                alt={user.fullname}
                width={40}
                height={40}
                className="rounded-full ml-3"
              />
              <div className="ml-4">
                <p className="font-semibold">{user.fullname}</p>
                <p className="text-sm text-gray-500">{user.username}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-500">{user.total_point}</p>
              <p className="text-sm text-gray-500">pts</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
